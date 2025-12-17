export const movieGenres = [
	"Action",
	"Drama",
	"Sci-fi",
	"K-Drama",
	"C-Drama",
	"Historical",
	"Fantasy",
	"Teen",
];

export const tvGenres = [
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
