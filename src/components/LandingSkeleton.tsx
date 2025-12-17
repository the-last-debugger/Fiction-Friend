function LandingSkeleton() {
	return (
		<div className="h-screen w-full bg-black flex flex-col justify-center items-center animate-pulse">
			<div className="h-10 w-2/3 bg-white/10 rounded mb-10"></div>

			<div className="h-16 w-48 bg-white/10 rounded mb-10"></div>

			<div className="h-6 w-1/2 bg-white/10 rounded"></div>
		</div>
	);
}

export default LandingSkeleton;
