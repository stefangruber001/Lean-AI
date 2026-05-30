import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CONFIG, CTA_BAND } from "../content";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { fadeUp, inView, stagger } from "../lib/motion";

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-paper sm:py-24">
      {/* faint precision grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true">
        <defs>
          <pattern id="ctagrid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M44 0H0V44" stroke="#FAFAF7" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ctagrid)" />
      </svg>

      <Container className="relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="max-w-3xl"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-display font-semibold text-paper"
          >
            {CTA_BAND.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-lg leading-relaxed text-paper/75">
            {CTA_BAND.sub}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9">
            <Button href={CONFIG.BOOKING_URL} variant="primary">
              {CTA_BAND.cta}
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
