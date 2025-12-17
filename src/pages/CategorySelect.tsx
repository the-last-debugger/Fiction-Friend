import { useNavigate } from "react-router-dom";
import CategoryCard from "@/components/CategoryCard";
import popcorn from "@/assets/icons8-popcorn-48.png";
import tv from "@/assets/icons8-tv-64.png";
import books from "@/assets/icons8-books-48.png";
import mic from "@/assets/icons8-radio-studio-48.png";

function CategorySelect() {
	const navigate = useNavigate();

	function handleSelect(category: string) {
		navigate(`/setup?category=${category}`);
	}

	return (
		<>
			<h1 className="text-3xl font-bold p-6">
				What are you Looking for today?
			</h1>
			<div className="grid grid-cols-2 gap-16 p-6">
				<CategoryCard
					label="Movies"
					icon={<img src={popcorn} className="" />}
					onClick={() => handleSelect("movie")}
				/>
				<CategoryCard
					label="Tv Shows"
					icon={<img src={tv} className="" />}
					onClick={() => handleSelect("tv")}
				/>
				<CategoryCard
					label="Books"
					icon={<img src={books} />}
					onClick={() => handleSelect("book")}
				/>
				<CategoryCard
					label="Podcasts"
					icon={<img src={mic} />}
					onClick={() => handleSelect("podcast")}
				/>
			</div>
		</>
	);
}

export default CategorySelect;
