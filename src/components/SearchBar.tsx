export default function SearchBar({ category }: { category: string }) {
	return (
		<div className="mb-6">
			<input
				type="text"
				placeholder={`Search ${category}...`}
				className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/40"
			/>
		</div>
	);
}
