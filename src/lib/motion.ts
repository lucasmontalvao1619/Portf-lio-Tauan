import type { Transition, Variants } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export const transition = {
  smooth: { duration: 0.6, ease } satisfies Transition,
  slow: { duration: 0.8, ease } satisfies Transition,
  hero: { duration: 1, ease } satisfies Transition,
} as const;

export const fadeInView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: transition.smooth,
} as const;

export const slideFromLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
};

export const slideFromRight: Variants = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
};
