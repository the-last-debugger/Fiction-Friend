import { useState, useEffect } from "react";
import type { RecommendationItem } from "@/data/recommendations";
import DetailsSkeleton from "@/components/DetailsSkeleton";

type DetailsProps = {
	item: RecommendationItem;
	onClose: () => void;
};

function Details({ item, onClose }: DetailsProps) {
	const [closing, setClosing] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 800);
		return () => clearTimeout(timer);
	}, []);

	const handleClose = () => {
		setClosing(true);
		setTimeout(onClose, 150);
	};

	return (
		<div
			className={`fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 ${
				closing ? "animate-backdropOut" : "animate-backdropIn"
			}`}
			onClick={handleClose}
		>
			{/* REAL MODAL */}
			<div
				className={`
          bg-black/10 border border-white/20 p-6 rounded-xl w-[400px] text-white relative
          transition-opacity duration-500
          ${closing ? "opacity-0" : ""}
          ${loading ? "opacity-0" : "opacity-100"}
        `}
				onClick={(e) => e.stopPropagation()}
			>
				<button
					className="absolute top-3 right-3 text-red-800 text-xl cursor-pointer"
					onClick={handleClose}
				>
					×
				</button>

				<div className="w-full h-56 bg-white rounded-md mb-4" />

				<h2 className="text-2xl font-semibold mb-2">{item.title}</h2>

				{typeof item.rating === "number" && (
					<p className="opacity-70 mb-2">Rating: {item.rating.toFixed(1)}</p>
				)}

				<p className="opacity-70 mb-4">Genres: {item.genres.join(", ")}</p>

				<p className="text-sm opacity-60">
					Recommended because it matches your selected genres.
				</p>
			</div>

			{/* SKELETON OVERLAY */}
			{loading && <DetailsSkeleton />}
		</div>
	);
}

export default Details;
