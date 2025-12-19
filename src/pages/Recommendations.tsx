// src/pages/Recommendations.tsx
import { useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useTaste } from "@/context/TasteContext";
import { recommendations } from "@/data/recommendations";

import type { RecommendationItem } from "@/data/recommendations";

import { usePageFadeIn } from "@/hooks/usePageFadeIn";
import { useFilteredRecommendations } from "@/hooks/useFilteredRecommendations";
import { useProgressiveLoad } from "@/hooks/useProgressiveLoad";
import { useMovies } from "@/hooks/useMovies";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll"; //

import RecommendationCard from "@/components/RecommendationCard";
import SearchBar from "@/components/SearchBar";
import Details from "./Details";
import RecommendationsSkeleton from "@/components/RecommendationsSkeleton";

function Recommendations() {
	const pageLoading = usePageFadeIn();

	const [params] = useSearchParams();
	const category = params.get("category") as keyof typeof recommendations;

	const { selectedGenres } = useTaste();

	// Movies now use discover endpoint with genre filtering
	const {
		data: movieData,
		loading: movieLoading,
		loadMore: loadMoreMovies,
		hasMore: hasMoreMovies,
	} = useMovies(selectedGenres);

	// Infinite scroll only for movies
	const movieSentinelRef = useInfiniteScroll(
		useCallback(() => loadMoreMovies(), [loadMoreMovies]),
		hasMoreMovies,
		movieLoading
	);

	//  Choose data source
	const items =
		category === "movie" ? movieData : recommendations[category] || [];

	//  Combined loading state
	const isLoading = pageLoading || (category === "movie" && movieLoading);

	// Only apply local filtering for non-movie categories
	const filtered =
		category === "movie"
			? items
			: useFilteredRecommendations(items, selectedGenres);

	// Progressive load for non-movie categories
	const { visibleCount, loadMore, sentinelRef, reachedLimit, reachedEnd } =
		useProgressiveLoad(category === "movie" ? 0 : filtered.length);

	const visibleItems =
		category === "movie" ? filtered : filtered.slice(0, visibleCount);

	// Details modal
	const [activeItem, setActiveItem] = useState<RecommendationItem | null>(null);

	// Infinite scroll trigger
	function handleLoadMore() {
		if (category === "movie") {
			loadMoreMovies();
		} else {
			loadMore();
		}
	}

	return (
		<div className="relative bg-black min-h-screen text-white">
			<div
				className={`p-12 transition-opacity duration-700 ${
					isLoading ? "opacity-0" : "opacity-100"
				}`}
			>
				<h1 className="text-3xl mb-6">Your {category} Recommendations</h1>

				<SearchBar category={category} />

				{filtered.length === 0 && !isLoading && (
					<p className="text-red-600 mb-6">No matches found.</p>
				)}

				<div className="grid grid-cols-3 w-full gap-6">
					{visibleItems.map((item) => (
						<RecommendationCard
							key={item.title}
							item={item}
							onClick={() => setActiveItem(item)}
						/>
					))}
				</div>

				{/* sentinel triggers infinite scroll */}
				{category === "movie" ? (
					<div ref={movieSentinelRef} className="h-10" />
				) : (
					!reachedLimit &&
					!reachedEnd && (
						<div
							ref={sentinelRef}
							className="h-10"
							onClick={handleLoadMore} // fallback if IntersectionObserver fails
						/>
					)
				)}

				{reachedLimit && !reachedEnd && category !== "movie" && (
					<button
						onClick={handleLoadMore}
						className="mt-6 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition"
					>
						Load More
					</button>
				)}
			</div>

			{isLoading && (
				<div className="absolute inset-0 z-30 bg-black">
					<RecommendationsSkeleton />
				</div>
			)}

			{activeItem && (
				<Details item={activeItem} onClose={() => setActiveItem(null)} />
			)}
		</div>
	);
}

export default Recommendations;
