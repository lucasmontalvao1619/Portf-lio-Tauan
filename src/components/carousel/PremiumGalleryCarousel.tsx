import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { buildLoopSlides } from "./utils";
import { CarouselNavButton } from "./CarouselNavButton";
import "./premium-carousel.css";

type PremiumGalleryCarouselProps = {
  images: string[];
};

const EMBLA_OPTIONS = {
  loop: true,
  align: "center" as const,
  containScroll: false,
  skipSnaps: false,
  dragFree: false,
  duration: 38,
  slidesToScroll: 1,
};

export function PremiumGalleryCarousel({ images }: PremiumGalleryCarouselProps) {
  const slides = useMemo(() => buildLoopSlides(images), [images]);
  const [emblaRef, emblaApi] = useEmblaCarousel(EMBLA_OPTIONS, []);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi || images.length === 0) return;
    setActiveIndex(emblaApi.selectedScrollSnap() % images.length);
  }, [emblaApi, images.length]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (images.length === 0) return null;

  return (
    <div className="embla relative w-full">
      <CarouselNavButton direction="prev" onClick={scrollPrev} />
      <CarouselNavButton direction="next" onClick={scrollNext} />

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((image, index) => (
            <div className="embla__slide" key={`${image}-${index}`}>
              <div className="embla__slide__card group">
                <img
                  src={image}
                  alt={`Foto da galeria ${(index % images.length) + 1}`}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  className="h-full w-full object-cover"
                />
                <div className="embla__slide__overlay" aria-hidden />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-1.5" role="tablist" aria-label="Navegação da galeria">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            onClick={() => scrollTo(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-5 bg-gold shadow-[0_0_5px_rgba(212,175,55,0.4)]"
                : "w-1 bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Ir para foto ${index + 1}`}
            aria-selected={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
