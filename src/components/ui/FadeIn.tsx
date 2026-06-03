import { motion, type HTMLMotionProps } from "motion/react";
import { fadeInView } from "@/lib/motion";

type FadeInProps = HTMLMotionProps<"div">;

export function FadeIn({ children, className, ...props }: FadeInProps) {
  return (
    <motion.div className={className} {...fadeInView} {...props}>
      {children}
    </motion.div>
  );
}
