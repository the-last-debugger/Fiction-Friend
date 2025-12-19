// src/hooks/useInfiniteScroll.ts
import { useEffect, useRef } from "react";

export function useInfiniteScroll(
	callback: () => void,
	hasMore: boolean,
	loading: boolean
) {
	const sentinelRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!sentinelRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && hasMore && !loading) {
					callback();
				}
			},
			{ threshold: 1.0 }
		);

		observer.observe(sentinelRef.current);

		return () => observer.disconnect();
	}, [callback, hasMore, loading]);

	return sentinelRef;
}
