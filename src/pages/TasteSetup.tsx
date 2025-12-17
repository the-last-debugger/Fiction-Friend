import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getGenres } from "@/data/genres";
import { genreBackgrounds } from "@/data/backgrounds";
import GenreChip from "@/components/GenreChip";
import { useTaste } from "@/context/TasteContext";
import { categoryTitles } from "@/data/categoryTitles";

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

	useEffect(() => {
		clearGenres();
	}, [category]);

	const navigate = useNavigate();

	return (
		<div
			className="p-6 min-h-screen
			 bg-cover bg-center "
			style={{ backgroundImage: `url(${bg})` }}
		>
			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />

			{/* Content */}
			<h1 className="relative z-20 font-bold text-3xl mb-12 text-white">
				{categoryTitles[category]}
			</h1>

			<div className="relative z-10 flex flex-wrap gap-4">
				{genres.map((g) => (
					<GenreChip
						key={g}
						label={g}
						selected={selectedGenres.includes(g)}
						onClick={() => toggleGenre(g)}
					/>
				))}
			</div>
			<div className="relative z-10 flex gap-10 w-full justify-center items-center mt-24">
				<button
					className="text-white transition hover:cursor-pointer hover:scale-130 hover:text-black hover:transition hover:opacity-80"
					onClick={() => navigate(-1)}
				>
					<ArrowLeftIcon />
				</button>
				<button
					onClick={() => navigate(`/recommendations?category=${category}`)}
					className="font-semibold transition hover:transition hover:scale-110 py-2 px-4
			 bg-red-500 rounded-sm hover:cursor-pointer hover:text-white"
				>
					Continue
				</button>
			</div>
		</div>
	);
}

export default TasteSetup;
