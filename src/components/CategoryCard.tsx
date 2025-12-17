type CategoryCardProps = {
	label: string;
	icon?: React.ReactNode;
	onClick?: () => void;
};

export default function CategoryCard({
	label,
	icon,
	onClick,
}: CategoryCardProps) {
	return (
		<button
			onClick={onClick}
			className="
        flex items-center justify-center
        bg-red-600/20 backdrop-blur-md
        border border-white/20
        rounded-xl p-6 hover:cursor-pointer
        hover:bg-black/10 transition
        w-50 h-16
        text-black gap-4
      "
		>
			{icon && <div className="text-4xl">{icon}</div>}
			<span className="text-lg font-semibold">{label}</span>
		</button>
	);
}
