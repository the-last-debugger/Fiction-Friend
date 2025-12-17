import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "@/components/CategoryCard";
import CategorySkeleton from "@/components/CategorySkeleton";
import CategoryTitleSkeleton from "@/components/CategoryTitleSkeleton";

import popcorn from "@/assets/icons8-popcorn-48.png";
import tv from "@/assets/icons8-tv-64.png";
import books from "@/assets/icons8-books-48.png";
import mic from "@/assets/icons8-radio-studio-48.png";

function CategorySelect() {
	const navigate = useNavigate();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const images = [popcorn, tv, books, mic];
		let loaded = 0;

		images.forEach((src) => {
			const img = new Image();
			img.src = src;
			img.onload = () => {
				loaded++;
				if (loaded === images.length) {
					setTimeout(() => setLoading(false), 1000);
				}
			};
		});
	}, []);

	function handleSelect(category: string) {
		navigate(`/setup?category=${category}`);
	}

	return (
		<div className="relative">
			{/* REAL TITLE (always mounted, starts invisible) */}
			<h1
				className={`text-3xl font-bold p-6 transition-opacity duration-700 ${
					loading ? "opacity-0" : "opacity-100"
				}`}
			>
				What are you Looking for today?
			</h1>

			{/* REAL GRID (always mounted, starts invisible) */}
			<div
				className={`grid grid-cols-2 gap-16 p-6 transition-opacity duration-700 ${
					loading ? "opacity-0" : "opacity-100"
				}`}
			>
				<CategoryCard
					label="Movies"
					icon={<img src={popcorn} />}
					onClick={() => handleSelect("movie")}
				/>
				<CategoryCard
					label="Tv Shows"
					icon={<img src={tv} />}
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

			{/* SKELETON OVERLAY WHILE LOADING */}
			{loading && (
				<div className="absolute inset-0 bg-white">
					<CategoryTitleSkeleton />
					<div className="grid grid-cols-2 gap-16 p-6">
						<CategorySkeleton />
						<CategorySkeleton />
						<CategorySkeleton />
						<CategorySkeleton />
					</div>
				</div>
			)}
		</div>
	);
}

export default CategorySelect;
