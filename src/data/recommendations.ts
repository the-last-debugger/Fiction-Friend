export type RecommendationItem = {
	title: string;
	genres: string[];
	rating?: number;
};

export const recommendations: Record<string, RecommendationItem[]> = {
	movie: [
		{ title: "Inception", genres: ["Sci-fi", "Action"], rating: 9.0 },
		{ title: "The Notebook", genres: ["Drama"], rating: 8.0 },
		{ title: "The Hunger Games", genres: ["Teen", "Action"], rating: 9.0 },
		{ title: "Kingdom", genres: ["Historical", "K-Drama"], rating: 7.5 },
	],
	tv: [
		{ title: "Stranger Things", genres: ["Sci-fi", "Teen"], rating: 8.5 },
		{ title: "Breaking Bad", genres: ["Crime", "Drama"], rating: 9.5 },
		{ title: "Friends", genres: ["Sitcom"], rating: 9.0 },
	],
	book: [
		{ title: "Mistborn", genres: ["Fantasy"], rating: 6.8 },
		{ title: "Sherlock Holmes", genres: ["Mystery"], rating: 8.0 },
	],
	podcast: [
		{ title: "Tech Stuff", genres: ["Tech"], rating: 9.1 },
		{ title: "Crime Junkie", genres: ["True Crime"], rating: 7.8 },
	],
};
