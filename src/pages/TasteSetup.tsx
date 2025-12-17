import { useSearchParams } from "react-router-dom";
import { getGenres } from "@/data/genres";
import GenreChip from "@/components/GenreChip";
import { useTaste } from "@/context/TasteContext";

function TasteSetup() {
	const [params] = useSearchParams();
	const category = params.get("category");

	const genres = getGenres(category);

	const { selectedGenres, toggleGenre } = useTaste();

	return (
		<div className="p-6">
			<h1 className="font-bold text-3xl mb-12">
				Select your {category} genres
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
		</div>
	);
}

export default TasteSetup;
