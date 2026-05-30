import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { CONFIG, HERO } from "../content";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { HeroBackground } from "./HeroBackground";
import { fadeUp, stagger } from "../lib/motion";

export function Hero() {
  // Split the title so the closing fragment renders in accent italic serif.
  const titleMain = HERO.title.replace(HERO.titleAccent, "").trim();

  return (
    <section id="top" className="relative overflow-hidden pt-28 lg:pt-36">
      {/* quiet abstract, right side on desktop / faint behind on mobile */}
      <div
        className="pointer-events-none absolute right-0 top-10 -z-0 h-[440px] w-[500px] max-w-[60%] opacity-70 lg:top-24 lg:opacity-100"
        aria-hidden="true"
      >
        <HeroBackground />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl pb-20 lg:pb-28"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-hero font-semibold text-ink"
          >
            {titleMain}{" "}
            <span className="italic text-accent">{HERO.titleAccent}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-1 sm:text-xl"
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
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-12 max-w-xl border-l-2 border-accent/30 pl-4 text-sm leading-relaxed text-gray-2"
          >
            {HERO.trustLine}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
