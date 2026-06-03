import { motion } from "motion/react";
import { CERTIFICATIONS } from "@/data/certifications";
import { CERTIFICATION_ICONS } from "@/lib/icons";
import { transition } from "@/lib/motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/ui/GoldRule";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function QualificationsSection() {
  return (
    <section className="bg-surface px-4 py-24">
      <FadeIn className="mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <SectionHeading className="mb-4 text-5xl">
            Qualificações <span className="text-gold">& Certificações</span>
          </SectionHeading>
          <GoldRule />
        </header>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = CERTIFICATION_ICONS[cert.icon];

            return (
              <motion.li
                key={cert.id}
                className="group border border-gold/30 bg-black p-8 text-center transition-all duration-300 hover:border-gold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition.smooth, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <div className="mb-6 flex justify-center text-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8" aria-hidden />
                </div>
                <h3 className="mb-4 text-2xl text-white">{cert.title}</h3>
                {cert.credential ? (
                  <div className="mb-4 space-y-2">
                    <p className="font-mono text-lg font-semibold tracking-wide text-gold">
                      {cert.credential}
                    </p>
                    <div className="mx-auto h-px w-12 bg-gold/40" />
                  </div>
                ) : null}
                <p className="leading-relaxed text-gray-400">{cert.description}</p>
              </motion.li>
            );
          })}
        </ul>
      </FadeIn>
    </section>
  );
}
