import { useState, useEffect } from "react";

export function usePageFadeIn(delay = 800) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), delay);
		return () => clearTimeout(timer);
	}, [delay]);

	return loading;
}
