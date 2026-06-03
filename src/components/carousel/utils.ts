const MIN_SLIDES_FOR_LOOP = 8;

/** Massa horizontal extra para o Embla fazer loop sem vãos nas bordas. */
export function buildLoopSlides(images: string[]): string[] {
  if (images.length === 0) return [];
  if (images.length >= MIN_SLIDES_FOR_LOOP) return images;
  return [...images, ...images];
}
