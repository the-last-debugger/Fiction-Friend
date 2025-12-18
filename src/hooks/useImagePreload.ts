import { useEffect, useState } from "react";

export function useImagePreload(src: string, delay = 700) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src = src;

		img.onload = () => {
			setTimeout(() => setLoaded(true), delay);
		};
	}, [src, delay]);

	return loaded;
}
