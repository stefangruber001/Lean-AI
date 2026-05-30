import { motion } from "framer-motion";
import { TRUST_SIGNALS } from "../content";
import { Container } from "./ui/Container";
import { fadeUp, inView, stagger } from "../lib/motion";

export function TrustStrip() {
  return (
    <div className="border-y border-hairline bg-white/40">
      <Container>
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 sm:justify-between sm:gap-x-4"
        >
          {TRUST_SIGNALS.map((signal, i) => (
            <motion.li
              key={signal}
              variants={fadeUp}
              className="flex items-center gap-8 sm:gap-4"
            >
              <span className="font-mono text-[0.78rem] uppercase tracking-[0.1em] text-gray-1">
                {signal}
              </span>
              {i < TRUST_SIGNALS.length - 1 && (
                <span className="hidden h-3 w-px bg-hairline sm:inline-block" aria-hidden="true" />
              )}
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </div>
  );
}
