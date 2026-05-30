import type { Variants } from "framer-motion";

// Subtle fade-up used for section entrances. Framer Motion automatically
// reduces these when the user prefers reduced motion (see MotionConfig in App).
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// Parent that staggers its children's entrance.
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

// Shared viewport config so sections animate once, slightly before fully in view.
export const inView = { once: true, amount: 0.25 } as const;
