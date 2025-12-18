// src/api/tmdb.ts
const BASE = "https://api.themoviedb.org/3";

export async function tmdb(path: string) {
	const token = import.meta.env.VITE_TMDB_TOKEN;
	if (!token) throw new Error("Missing VITE_TMDB_TOKEN");

	const res = await fetch(`${BASE}${path}`, {
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json;charset=utf-8",
		},
	});

	if (!res.ok) {
		const text = await res.text();
		throw new Error(`TMDB ${res.status}: ${text}`);
	}

	return res.json();
}
