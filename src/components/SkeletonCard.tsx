function SkeletonCard() {
	return (
		<div className="w-full flex flex-col items-center animate-pulse">
			<div className="w-40 h-56 bg-white/20 rounded-md mb-3"></div>
			<div className="h-4 w-32 bg-white/20 rounded mb-2"></div>
			<div className="h-3 w-20 bg-white/10 rounded"></div>
		</div>
	);
}

export default SkeletonCard;
