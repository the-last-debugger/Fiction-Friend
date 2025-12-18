import type { RecommendationItem } from "@/data/recommendations";

export function useFilteredRecommendations(
	items: RecommendationItem[],
	selectedGenres: string[]
) {
	return items
		.filter((item) => item.genres.some((g) => selectedGenres.includes(g)))
		.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
}
