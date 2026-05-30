import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, inView } from "../../lib/motion";
import { Container } from "./Container";

// A full-width section with a generous vertical rhythm + staggered entrance.
export function Section({
  id,
  children,
  className = "",
  dark = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-24 lg:py-32 ${
        dark ? "bg-ink text-paper" : ""
      } ${className}`}
    >
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}

// Convenience: a child that fades up as part of the parent stagger.
export function FadeItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}
