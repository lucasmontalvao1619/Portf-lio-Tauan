import { motion } from "motion/react";
import { SOCIAL_LINKS } from "@/config/site";
import { SOCIAL_ICONS } from "@/lib/icons";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/ui/GoldRule";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-20 bg-surface px-4 py-24">
      <FadeIn className="mx-auto max-w-4xl text-center">
        <header className="mb-12">
          <SectionHeading className="mb-4 text-5xl">
            Vamos <span className="text-gold">Começar</span>
          </SectionHeading>
          <GoldRule className="mb-8" />
          <p className="text-xl text-gray-300">
            Entre em contato e dê o primeiro passo para a sua transformação
          </p>
        </header>

        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {SOCIAL_LINKS.map((link) => {
            const Icon = SOCIAL_ICONS[link.icon];
            const isExternal = link.href.startsWith("http");

            return (
              <motion.li key={link.id} whileHover={{ y: -5 }}>
                <a
                  href={link.href}
                  {...(isExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="group block border border-gold/30 bg-black p-8 transition-all duration-300 hover:border-gold hover:bg-gold/10"
                >
                  <Icon
                    className="mx-auto mb-4 h-12 w-12 text-gold transition-transform group-hover:scale-110"
                    aria-hidden
                  />
                  <span className="text-white">{link.label}</span>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </FadeIn>
    </section>
  );
}
