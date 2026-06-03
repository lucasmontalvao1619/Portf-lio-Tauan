import { IMAGES } from "@/config/images";
import { PremiumGalleryCarousel } from "@/components/carousel/PremiumGalleryCarousel";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/ui/GoldRule";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-black py-12">
      <FadeIn className="mx-auto max-w-7xl">
        <header className="mb-8 px-4 text-center">
          <SectionHeading className="mb-2 text-2xl md:text-3xl">
            Galeria <span className="text-gold">Premium</span>
          </SectionHeading>
          <GoldRule size="sm" />
        </header>

        <PremiumGalleryCarousel images={[...IMAGES.gallery]} />
      </FadeIn>
    </section>
  );
}
