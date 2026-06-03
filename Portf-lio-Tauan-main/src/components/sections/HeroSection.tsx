import { motion } from "motion/react";
import { LINKS, SITE } from "@/config/site";
import { IMAGES } from "@/config/images";
import { transition } from "@/lib/motion";

export function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt={SITE.brand.firstName}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition.hero, delay: 0.2 }}
      >
        <motion.h1
          className="mb-6 text-6xl md:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition.hero, delay: 0.4 }}
        >
          <span className="text-white">{SITE.brand.firstName}</span>
          <br />
          <span className="text-gold">{SITE.brand.lastName}</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-8 max-w-2xl text-balance text-xl text-gray-300 md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition.hero, delay: 0.6 }}
        >
          {SITE.hero.tagline}
        </motion.p>

        <motion.a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold px-12 py-4 text-lg text-black shadow-lg shadow-gold/20 transition-all duration-300 hover:bg-gold-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition.hero, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {SITE.hero.cta}
        </motion.a>
      </motion.div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gold p-2">
          <div className="h-1.5 w-1.5 rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
