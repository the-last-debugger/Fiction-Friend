import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getGenres } from "@/data/genres";
import { genreBackgrounds } from "@/data/backgrounds";
import GenreChip from "@/components/GenreChip";
import { useTaste } from "@/context/TasteContext";
import { categoryTitles } from "@/data/categoryTitles";
import TasteSetupSkeleton from "@/components/TasteSetupSkeleton";

import { ArrowLeftIcon } from "lucide-react";

function TasteSetup() {
	const [params] = useSearchParams();
	const category = params.get("category");

	if (!category) {
		return <div>Invalid Category</div>;
	}

	const genres = getGenres(category);
	const bg = genreBackgrounds[category ?? ""];

	const { selectedGenres, toggleGenre, clearGenres } = useTaste();
	const navigate = useNavigate();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		clearGenres();

		const img = new Image();
		img.src = bg;
		img.onload = () => {
			setTimeout(() => setLoading(false), 800);
		};
	}, [category]);

	return (
		<div
			className="p-6 min-h-screen bg-cover bg-center relative"
			style={{ backgroundImage: `url(${bg})` }}
		>
			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />

			{/* REAL CONTENT (always mounted, fades in) */}
			<div
				className={`relative z-20 transition-opacity duration-700 ${
					loading ? "opacity-0" : "opacity-100"
				}`}
			>
				<h1 className="font-bold text-3xl mb-12 text-white">
					{categoryTitles[category]}
				</h1>

				<div className="flex flex-wrap gap-4">
					{genres.map((g) => (
						<GenreChip
							key={g}
							label={g}
							selected={selectedGenres.includes(g)}
							onClick={() => toggleGenre(g)}
						/>
					))}
				</div>

				<div className="flex gap-10 w-full justify-center items-center mt-24">
					<button
						className="text-white transition hover:scale-130 hover:text-black hover:opacity-80"
						onClick={() => navigate(-1)}
					>
						<ArrowLeftIcon />
					</button>

					<button
						onClick={() => navigate(`/recommendations?category=${category}`)}
						className="font-semibold py-2 px-4 bg-red-500 rounded-sm hover:scale-110 hover:text-white transition"
					>
						Continue
					</button>
				</div>
			</div>

			{/* SKELETON OVERLAY */}
			{loading && (
				<div className="absolute inset-0 z-30">
					<TasteSetupSkeleton />
				</div>
			)}
		</div>
	);
}

export default TasteSetup;
