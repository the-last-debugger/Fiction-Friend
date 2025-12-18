import { useEffect, useRef, useState } from "react";

export function useProgressiveLoad(totalItems: number, step = 20, limit = 100) {
	const [visibleCount, setVisibleCount] = useState(step);
	const sentinelRef = useRef<HTMLDivElement | null>(null);

	// Infinite scroll logic
	useEffect(() => {
		// Stop autoloading if:
		// 1. we've hit the autoload limit, OR
		// 2. we've shown all items
		if (visibleCount >= limit || visibleCount >= totalItems) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setVisibleCount((prev) => Math.min(prev + step, totalItems));
				}
			},
			{ threshold: 1 }
		);

		if (sentinelRef.current) observer.observe(sentinelRef.current);

		return () => observer.disconnect();
	}, [visibleCount, step, limit, totalItems]);

	const loadMore = () => {
		setVisibleCount((prev) => Math.min(prev + step, totalItems));
	};

	return {
		visibleCount,
		loadMore,
		sentinelRef,
		reachedLimit: visibleCount >= limit,
		reachedEnd: visibleCount >= totalItems,
	};
}
