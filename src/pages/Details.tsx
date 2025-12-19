// src/pages/Details.tsx
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
			role="dialog"
			aria-modal="true"
			className={`fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 ${
				closing ? "animate-backdropOut" : "animate-backdropIn"
			}`}
			onClick={handleClose}
		>
			<div
				className={`
          bg-black/20 border border-white/20 p-6 rounded-xl w-[500px] text-white relative
          transition-opacity duration-500
          ${closing ? "opacity-0" : ""}
          ${loading ? "opacity-0" : "opacity-100"}
        `}
				onClick={(e) => e.stopPropagation()}
			>
				<button
					aria-label="Close"
					className="absolute top-3 right-3 text-red-800 text-2xl cursor-pointer"
					onClick={handleClose}
				>
					×
				</button>
				<div className="flex flex-wrap gap-6 mb-6 ">
					{/* Poster */}
					<div className="flex-shrink-0">
						{item.poster ? (
							<img
								src={item.poster}
								alt={item.title}
								className="w-40 h-56 object-cover rounded-md"
							/>
						) : (
							<div className="w-40 h-56 bg-gray-700 rounded-md flex items-center justify-center text-gray-400">
								No poster
							</div>
						)}
					</div>
					<section className="flex-1 min-w-[200px]">
						{/* Release date + runtime */}
						{item.releaseDate && item.runtime && (
							<p className="opacity-70 mb-2">
								Released: {item.releaseDate} • {item.runtime} min
							</p>
						)}

						{/* Rating */}
						{typeof item.rating === "number" && (
							<p className="opacity-70 mb-2">
								Rating: {item.rating.toFixed(1)}
							</p>
						)}

						{/* Popularity */}
						{item.popularity && (
							<p className="opacity-70 mb-2">Popularity: {item.popularity}</p>
						)}

						{/* Genres */}
						{item.genres.length > 0 && (
							<p className="opacity-70 mb-4">
								Genres: {item.genres.join(", ")}
							</p>
						)}
					</section>
				</div>

				{/* Title */}
				<h2 className="text-2xl font-semibold mb-2 ">{item.title}</h2>

				{/* Tagline */}
				{item.tagline && (
					<p className="italic opacity-80 mb-4">“{item.tagline}”</p>
				)}

				{/* Overview */}
				{item.overview && (
					<p className="text-sm opacity-70 mb-4 ">{item.overview}</p>
				)}
			</div>

			{/* Skeleton overlay */}
			{loading && (
				<div className="absolute inset-0 flex items-center justify-center">
					<DetailsSkeleton />
				</div>
			)}
		</div>
	);
}

export default Details;
