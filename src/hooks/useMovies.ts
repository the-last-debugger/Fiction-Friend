// src/hooks/useMovies.ts
import { useEffect, useState } from "react";
import { tmdb } from "@/api/tmdb";
import type { RecommendationItem } from "@/data/recommendations";

const genreMap: Record<number, string> = {
	28: "Action",
	12: "Adventure",
	16: "Animation",
	35: "Comedy",
	80: "Crime",
	99: "Documentary",
	18: "Drama",
	10751: "Family",
	14: "Fantasy",
	36: "History",
	27: "Horror",
	10402: "Music",
	9648: "Mystery",
	10749: "Romance",
	878: "Sci-fi",
	10770: "TV Movie",
	53: "Thriller",
	10752: "War",
	37: "Western",
};

// reverse lookup: genre name → TMDB ID
const nameToId = Object.fromEntries(
	Object.entries(genreMap).map(([id, name]) => [name, Number(id)])
);

export function useMovies(selectedGenres: string[]) {
	const [data, setData] = useState<RecommendationItem[]>([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);

	async function loadPage(p: number) {
		setLoading(true);
		try {
			let path = `/movie/popular?page=${p}&language=en-US`;

			if (selectedGenres.length > 0) {
				const ids = selectedGenres
					.map((name) => nameToId[name])
					.filter((id) => id !== undefined);

				if (ids.length > 0) {
					path = `/discover/movie?with_genres=${ids.join(
						","
					)}&page=${p}&language=en-US`;
				}
			}

			const json = await tmdb(path);

			if (!json.results || json.results.length === 0) {
				setHasMore(false);
				return;
			}

			const mapped: RecommendationItem[] = json.results.map((m: any) => ({
				title: m.title,
				genres: m.genre_ids.map((id: number) => genreMap[id] || "Unknown"),
				rating: m.vote_average,
				poster: m.poster_path
					? `https://image.tmdb.org/t/p/w500${m.poster_path}`
					: null,
				backdrop: m.backdrop_path
					? `https://image.tmdb.org/t/p/w780${m.backdrop_path}`
					: null,
			}));

			setData((prev) => [...prev, ...mapped]);
		} catch (err) {
			console.error("Failed to fetch movies:", err);
			setHasMore(false);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		setData([]);
		setPage(1);
		setHasMore(true);
		loadPage(1);
	}, [selectedGenres]);

	function loadMore() {
		if (!hasMore || loading) return;
		const next = page + 1;
		setPage(next);
		loadPage(next);
	}

	return { data, loading, loadMore, hasMore };
}
