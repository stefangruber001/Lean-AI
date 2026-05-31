import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { CONFIG, HERO } from "../content";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { HeroBackground } from "./HeroBackground";
import { fadeUp, stagger } from "../lib/motion";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 lg:pt-40">
      {/* engineered abstract — larger, quiet, AI-grid motif */}
      <div
        className="pointer-events-none absolute right-0 top-0 -z-0 h-[560px] w-[640px] max-w-[72%] opacity-60 lg:opacity-100"
        aria-hidden="true"
      >
        <HeroBackground />
      </div>
      {/* warm wash to ground the type */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-paper via-paper/40 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="pb-16 lg:pb-24">
          <motion.p variants={fadeUp} className="eyebrow">
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-7 max-w-4xl font-display text-hero font-semibold leading-[1.0] text-ink"
          >
            {HERO.titleLead}
            <br />
            <span className="italic text-accent">{HERO.titleAccent}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-lg leading-relaxed text-gray-1 sm:text-xl"
          >
            {HERO.subhead}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Button href={CONFIG.BOOKING_URL} variant="primary">
              {HERO.primaryCta}
              <ArrowRight size={18} />
            </Button>
            <a
              href={HERO.secondaryHref}
              className="group inline-flex items-center gap-2 px-2 py-2 text-[0.95rem] font-medium text-ink transition-colors hover:text-accent"
            >
              {HERO.secondaryCta}
              <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          {/* visual proof row */}
          <motion.dl
            variants={fadeUp}
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-4"
          >
            {HERO.stats.map((s) => (
              <div key={s.label} className="bg-paper/80 p-5 backdrop-blur-sm">
                <dt className="font-display text-3xl font-semibold text-ink sm:text-4xl">{s.value}</dt>
                <dd className="mt-1.5 text-xs leading-snug text-gray-2">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </Container>
    </section>
  );
}
