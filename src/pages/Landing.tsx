import { useNavigate } from "react-router-dom";
import bg_img from "../assets/landing-bg.jpg";

import { useLandingReady } from "@/hooks/useLandingReady";
import LandingSkeleton from "@/components/LandingSkeleton";

function Landing() {
	const navigate = useNavigate();
	const loaded = useLandingReady(bg_img, 700, 300);

	function handleGetStarted() {
		navigate("/category-select");
	}

	return (
		<div
			style={{ backgroundImage: `url(${bg_img})` }}
			className="relative h-screen w-full bg-cover bg-center"
		>
			<div className="absolute inset-0 bg-black/50" />

			<div
				className={`relative z-10 flex flex-col h-full justify-center transition-opacity duration-700 ${
					loaded ? "opacity-100" : "opacity-0"
				}`}
			>
				<h1 className="h-full w-full flex pt-12 font-bold text-white text-4xl justify-center">
					Discover Stories You'll Love
				</h1>

				<section className="flex justify-center">
					<button
						className="bg-white font-bold rounded-lg text-red-300 text-3xl w-fit p-4 cursor-pointer hover:bg-red-300  hover:text-white"
						onClick={handleGetStarted}
					>
						GET STARTED
					</button>
				</section>

				<h1 className="h-full w-full flex pb-12 justify-center items-end font-bold text-white text-xl">
					Movies and Books Tailored to Your Taste
				</h1>
			</div>

			{!loaded && (
				<div className="absolute inset-0 z-30">
					<LandingSkeleton />
				</div>
			)}
		</div>
	);
}

export default Landing;
