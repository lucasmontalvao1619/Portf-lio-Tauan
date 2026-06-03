import { motion } from "motion/react";
import { ABOUT_PARAGRAPHS, ABOUT_QUOTE } from "@/data/about";
import { IMAGES } from "@/config/images";
import { slideFromLeft, slideFromRight, transition } from "@/lib/motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/ui/GoldRule";
import { PremiumImageFrame } from "@/components/ui/PremiumImageFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="bg-black px-4 py-24">
      <FadeIn className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <motion.figure
            variants={slideFromLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={transition.slow}
            className="relative mx-auto aspect-[3/4] w-full max-w-sm sm:max-w-md lg:mx-0 lg:aspect-auto lg:h-full lg:max-w-none lg:min-h-[28rem]"
          >
            <PremiumImageFrame
              src={IMAGES.about}
              alt="Rafael Tauan em competição de fisiculturismo"
              objectPosition="center 12%"
              className="absolute inset-0"
            />
          </motion.figure>

          <motion.div
            variants={slideFromRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={transition.slow}
            className="flex flex-col justify-center"
          >
            <SectionHeading as="h2" align="left" className="mb-6 text-4xl md:text-5xl">
              Minha <span className="text-gold">História</span>
            </SectionHeading>
            <GoldRule className="mb-8 ml-0" />

            <div className="space-y-5 text-base leading-relaxed text-gray-300 md:space-y-6 md:text-lg">
              {ABOUT_PARAGRAPHS.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p className="pt-2 text-lg italic text-gold md:text-xl">{ABOUT_QUOTE}</p>
            </div>
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
}
