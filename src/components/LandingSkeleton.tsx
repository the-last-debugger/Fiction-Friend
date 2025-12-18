function LandingSkeleton() {
	return (
		<div className="absolute inset-0 z-50 bg-black animate-pulse flex flex-col">
			{/* TOP — Title */}
			<div className="flex justify-center pt-12">
				<div className="h-10 w-2/3 bg-white/20 rounded-md" />
			</div>

			{/* CENTER — Button */}
			<div className="flex flex-1 justify-center items-center">
				<div className="h-14 w-48 bg-white/20 rounded-lg" />
			</div>

			{/* BOTTOM — Subtitle */}
			<div className="flex justify-center pb-12">
				<div className="h-6 w-1/2 bg-white/20 rounded-md" />
			</div>
		</div>
	);
}

export default LandingSkeleton;
