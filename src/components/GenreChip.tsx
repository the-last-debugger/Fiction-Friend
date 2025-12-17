type GenreChipProps = {
	label: string;
	selected?: boolean;
	onClick?: () => void;
};

function GenreChip({ label, selected, onClick }: GenreChipProps) {
	return (
		<button
			onClick={onClick}
			className={`rounded-full transition px-4 py-2 cursor-pointer ${
				selected
					? "scale-110 bg-black text-white"
					: "bg-gray-400 scale-100 hover:scale-105"
			}`}
		>
			{label}
		</button>
	);
}

export default GenreChip;
