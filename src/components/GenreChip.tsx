type GenreChipProps = {
	label: string;
	selected?: boolean;
	onClick?: () => void;
};

function GenreChip({ label, selected, onClick }: GenreChipProps) {
	return (
		<button
			onClick={onClick}
			className={`rounded-sm px-4 py-2 cursor-pointer ${
				selected ? "bg-black text-white" : "bg-gray-500 text-black"
			}`}
		>
			{label}
		</button>
	);
}

export default GenreChip;
