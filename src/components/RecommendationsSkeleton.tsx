function RecommendationsSkeleton() {
	return (
		<div className="p-12">
			{/* Title */}
			<div className="h-8 w-1/3 bg-white/20 rounded-md animate-pulse mb-6" />

			{/* Search bar */}
			<div className="h-12 w-full bg-white/10 rounded-md animate-pulse mb-6" />

			{/* Grid */}
			<div className="grid grid-cols-3 gap-6">
				{Array.from({ length: 6 }).map((_, i) => (
					<div key={i} className="animate-pulse">
						<div className="w-40 h-56 bg-white/20 rounded-md mb-3" />
						<div className="h-4 w-24 bg-white/20 rounded-md" />
					</div>
				))}
			</div>
		</div>
	);
}

export default RecommendationsSkeleton;
