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
			<section className="w-40 h-56 bg-white rounded-md mb-3" />

			<h2 className="text-center text-lg font-semibold">
				{item.title}
				{item.rating && (
					<span className="opacity-70">({item.rating.toFixed(1)})</span>
				)}
			</h2>
		</div>
	);
}
