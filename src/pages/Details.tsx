import { useState } from "react";
import type { RecommendationItem } from "@/data/recommendations";

type DetailsProps = {
	item: RecommendationItem;
	onClose: () => void;
};

function Details({ item, onClose }: DetailsProps) {
	const [closing, setClosing] = useState(false);

	// trigger close animation
	const handleClose = () => {
		setClosing(true);
		setTimeout(onClose, 150);
	};

	return (
		// backdrop
		<div
			className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
			onClick={handleClose}
		>
			{/* modal */}
			<div
				className={`bg-white/10 border border-white/20 p-6 rounded-xl w-[400px] text-white relative ${
					closing ? "animate-fadeOutScale" : "animate-fadeInScale"
				}`}
				onClick={(e) => e.stopPropagation()} // prevent backdrop close
			>
				{/* close button */}
				<button
					className="absolute top-3 right-3 text-red-800 text-xl cursor-pointer"
					onClick={handleClose}
				>
					×
				</button>

				{/* poster */}
				<div className="w-full h-56 bg-white rounded-md mb-4"></div>

				{/* title */}
				<h2 className="text-2xl font-semibold mb-2">{item.title}</h2>

				{/* rating */}
				{typeof item.rating === "number" && (
					<p className="opacity-70 mb-2">Rating: {item.rating.toFixed(1)}</p>
				)}

				{/* genres */}
				<p className="opacity-70 mb-4">Genres: {item.genres.join(", ")}</p>

				{/* note */}
				<p className="text-sm opacity-60">
					Recommended because it matches your selected genres.
				</p>
			</div>
		</div>
	);
}

export default Details;
