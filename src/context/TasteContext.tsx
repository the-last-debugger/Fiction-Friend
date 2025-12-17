import { createContext, useContext, useState } from "react";

type TasteContextType = {
	selectedGenres: string[];
	toggleGenre: (genre: string) => void;
	clearGenres: () => void;
};

const TasteContext = createContext<TasteContextType | null>(null);

export function TasteProvider({ children }: { children: React.ReactNode }) {
	const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

	function toggleGenre(genre: string) {
		setSelectedGenres((prev) =>
			prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
		);
	}

	function clearGenres() {
		setSelectedGenres([]);
	}

	return (
		<TasteContext.Provider value={{ selectedGenres, toggleGenre, clearGenres }}>
			{children}
		</TasteContext.Provider>
	);
}

export function useTaste() {
	const ctx = useContext(TasteContext);
	if (!ctx) throw new Error("useTaste must be used inside TasteProvider");
	return ctx;
}
