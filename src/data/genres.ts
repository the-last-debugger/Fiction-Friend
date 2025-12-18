// src/data/genres.ts

export const movieGenres = [
	"Action",
	"Adventure",
	"Animation",
	"Comedy",
	"Crime",
	"Documentary",
	"Drama",
	"Family",
	"Fantasy",
	"History",
	"Horror",
	"Music",
	"Mystery",
	"Romance",
	"Sci-fi",
	"TV Movie",
	"Thriller",
	"War",
	"Western",
];

export const tvGenres = [
	"Action & Adventure",
	"Kids",
	"News",
	"Reality",
	"Sci-fi & Fantasy",
	"Soap",
	"Talk Show",
	"War & Politics",
	"Sitcom",
	"Action",
	"Drama",
	"Sci-fi",
	"K-Drama",
	"C-Drama",
	"Historical",
	"Fantasy",
	"Crime",
	"Teen",
];

export const bookGenres = ["Fantasy", "Mystery", "Non-fiction"];

export const podcastGenres = ["Tech", "Comedy", "True Crime"];

export function getGenres(category: string | null) {
	switch (category) {
		case "movie":
			return movieGenres;
		case "tv":
			return tvGenres;
		case "book":
			return bookGenres;
		case "podcast":
			return podcastGenres;
		default:
			return [];
	}
}
