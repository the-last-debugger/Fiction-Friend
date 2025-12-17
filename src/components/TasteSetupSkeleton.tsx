function TasteSetupSkeleton() {
	return (
		<div className="p-6 min-h-screen relative">
			{/* Fake title */}
			<div className="h-8 w-1/2 bg-white/20 rounded-md animate-pulse mb-12" />

			{/* Fake chips */}
			<div className="flex flex-wrap gap-4">
				{Array.from({ length: 12 }).map((_, i) => (
					<div
						key={i}
						className="h-10 w-24 bg-white/20 rounded-full animate-pulse"
					/>
				))}
			</div>

			{/* Fake buttons */}
			<div className="flex gap-10 justify-center items-center mt-24">
				<div className="h-10 w-10 bg-white/20 rounded-md animate-pulse" />
				<div className="h-10 w-32 bg-white/20 rounded-md animate-pulse" />
			</div>
		</div>
	);
}

export default TasteSetupSkeleton;
