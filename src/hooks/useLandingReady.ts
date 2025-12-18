import { useImagePreload } from "./useImagePreload";
import { usePageFadeIn } from "./usePageFadeIn";

export function useLandingReady(
	imageSrc: string,
	preloadDelay = 700,
	fadeDelay = 300
) {
	const imageLoaded = useImagePreload(imageSrc, preloadDelay);
	const fadeReady = !usePageFadeIn(fadeDelay); // invert because usePageFadeIn returns "loading"

	return imageLoaded && fadeReady;
}
