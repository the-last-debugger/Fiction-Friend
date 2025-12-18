import type { RecommendationItem } from "@/data/recommendations";

export default function RecommendationCard({
	item,
	onClick,
}: {
	item: RecommendationItem;
	onClick: () => void;
}) {
	return (
		<div
			className="w-full flex flex-col items-center cursor-pointer"
			onClick={onClick}
		>
			{item.poster ? (
				<img
					src={item.poster}
					alt={item.title}
					className="w-40 h-56 object-cover rounded-md mb-3"
				/>
			) : (
				<div className="w-40 h-56 bg-gray-800 rounded-md mb-3 flex items-center justify-center text-gray-400">
					No Poster
				</div>
			)}

			<h2 className="text-center text-lg font-semibold">
				{item.title}
				{item.rating && (
					<span className="opacity-70">({item.rating.toFixed(1)})</span>
				)}
			</h2>
		</div>
	);
}
