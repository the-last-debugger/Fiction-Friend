import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTaste } from "@/context/TasteContext";
import { recommendations } from "@/data/recommendations";

import type { RecommendationItem } from "@/data/recommendations";

import { usePageFadeIn } from "@/hooks/usePageFadeIn";
import { useFilteredRecommendations } from "@/hooks/useFilteredRecommendations";
import { useProgressiveLoad } from "@/hooks/useProgressiveLoad";

import RecommendationCard from "@/components/RecommendationCard";
import SearchBar from "@/components/SearchBar";
import Details from "./Details";
import RecommendationsSkeleton from "@/components/RecommendationsSkeleton";

function Recommendations() {
	const loading = usePageFadeIn();

	const [params] = useSearchParams();
	const category = params.get("category") as keyof typeof recommendations;

	const { selectedGenres } = useTaste();
	const items = recommendations[category] || [];

	const filtered = useFilteredRecommendations(items, selectedGenres);

	const { visibleCount, loadMore, sentinelRef, reachedLimit, reachedEnd } =
		useProgressiveLoad(filtered.length);

	const visibleItems = filtered.slice(0, visibleCount);

	const [activeItem, setActiveItem] = useState<RecommendationItem | null>(null);

	return (
		<div className="relative bg-black min-h-screen text-white">
			<div
				className={`p-12 transition-opacity duration-700 ${
					loading ? "opacity-0" : "opacity-100"
				}`}
			>
				<h1 className="text-3xl mb-6">Your {category} Recommendations</h1>

				<SearchBar category={category} />

				{filtered.length === 0 && !loading && (
					<p className="text-red-600 mb-6">
						No matches found. Try selecting more genres.
					</p>
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

				{!reachedLimit && !reachedEnd && (
					<div ref={sentinelRef} className="h-10" />
				)}

				{reachedLimit && !reachedEnd && (
					<button
						onClick={loadMore}
						className="mt-6 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition"
					>
						Load More
					</button>
				)}
			</div>

			{loading && (
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
