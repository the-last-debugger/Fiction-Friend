function DetailsSkeleton() {
	return (
		<div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
			<div className="bg-white/10 border border-white/20 p-6 rounded-xl w-[400px] text-white relative animate-pulse">
				{/* Close button */}
				<div className="absolute top-3 right-3 h-6 w-6 bg-white/20 rounded-md" />

				{/* Poster placeholder */}
				<div className="w-full h-56 bg-white/20 rounded-md mb-4" />

				{/* Title */}
				<div className="h-6 w-2/3 bg-white/20 rounded-md mb-3" />

				{/* Rating */}
				<div className="h-4 w-24 bg-white/20 rounded-md mb-3" />

				{/* Genres */}
				<div className="h-4 w-40 bg-white/20 rounded-md mb-4" />

				{/* Note */}
				<div className="h-4 w-3/4 bg-white/20 rounded-md" />
			</div>
		</div>
	);
}

export default DetailsSkeleton;
