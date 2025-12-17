import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTaste } from "@/context/TasteContext";
import {
	recommendations,
	type RecommendationItem,
} from "@/data/recommendations";
import Details from "./Details";

function Recommendations() {
	const [params] = useSearchParams();
	const category = params.get("category") as keyof typeof recommendations;

	const { selectedGenres } = useTaste();

	const items = recommendations[category] || [];

	const [activeItem, setActiveItem] = useState<RecommendationItem | null>(null);

	const filtered = items
		.filter((item) => item.genres.some((g) => selectedGenres.includes(g)))
		.sort((a, b) => {
			const ratingA = typeof a.rating === "number" ? a.rating : 0;
			const ratingB = typeof b.rating === "number" ? b.rating : 0;
			return ratingB - ratingA;
		});
	return (
		<>
			<div className="bg-black min-h-screen text-white p-12">
				<h1 className="text-3xl mb-6">Your {category} Recommendations</h1>

				{filtered.length === 0 && (
					<p className="text-red-600 mb-6">
						No matches found. Try selecting more genres.
					</p>
				)}

				<div>
					{/* Search bar placeholder */}
					<div className="mb-6">
						<input
							type="text"
							placeholder={`Search ${category}...`}
							className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/40"
						/>
					</div>

					{/* Recommendations grid */}
					<div className="grid grid-cols-3 w-full gap-6">
						{filtered.map((item) => (
							<div
								key={item.title}
								className="w-full flex flex-col items-center cursor-pointer"
								onClick={() => setActiveItem(item)}
							>
								{/* Poster placeholder */}
								<section className="w-40 h-56 bg-white rounded-md mb-3"></section>

								{/* Title + rating */}
								<h2 className="text-center text-lg font-semibold">
									{item.title}
									{item.rating && (
										<span className="opacity-70">
											({item.rating.toFixed(1)})
										</span>
									)}
								</h2>
							</div>
						))}
					</div>
				</div>
			</div>
			{activeItem && (
				<Details item={activeItem} onClose={() => setActiveItem(null)} />
			)}
		</>
	);
}

export default Recommendations;
