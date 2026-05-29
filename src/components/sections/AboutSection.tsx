import { motion } from "motion/react";
import { ABOUT_PARAGRAPHS, ABOUT_QUOTE } from "@/data/about";
import { IMAGES } from "@/config/images";
import { slideFromLeft, slideFromRight, transition } from "@/lib/motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/ui/GoldRule";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="bg-black px-4 py-24">
      <FadeIn className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={slideFromLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={transition.slow}
          >
            <img
              src={IMAGES.about}
              alt="Rafael com família"
              className="h-[600px] w-full border border-gold/30 object-cover"
            />
          </motion.div>

          <motion.div
            variants={slideFromRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={transition.slow}
          >
            <SectionHeading as="h2" align="left" className="mb-6 text-5xl">
              Minha <span className="text-gold">História</span>
            </SectionHeading>
            <GoldRule className="mb-8 ml-0" />

            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              {ABOUT_PARAGRAPHS.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p className="text-xl italic text-gold">{ABOUT_QUOTE}</p>
            </div>
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
}
