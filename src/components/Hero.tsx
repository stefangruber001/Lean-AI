import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { CONFIG, HERO } from "../content";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { HeroBackgroundDark } from "./HeroBackground";

// Kinetic headline: each word fades/rises in sequence.
function KineticLine({
  text,
  accent = false,
  delayBase = 0,
}: {
  text: string;
  accent?: boolean;
  delayBase?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className="block">
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${accent ? "italic text-accent-50" : ""}`}
            initial={reduce ? false : { y: "100%", opacity: 0 }}
            animate={reduce ? undefined : { y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: delayBase + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      {/* engineered abstract — quiet AI node-grid, light-on-dark */}
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden="true">
        <HeroBackgroundDark />
      </div>
      {/* vignette to seat the type */}
      <div
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(120%_90%_at_15%_10%,rgba(14,17,22,0)_0%,rgba(14,17,22,0.55)_60%,rgba(14,17,22,0.9)_100%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="flex min-h-[88vh] flex-col justify-center pt-28 pb-20 lg:min-h-screen lg:pt-32">
          <motion.p
            className="eyebrow !text-accent-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {HERO.eyebrow}
          </motion.p>

          <h1 className="mt-8 max-w-5xl font-display text-hero font-semibold leading-[0.98] text-paper">
            <KineticLine text={HERO.titleLead} delayBase={0.15} />
            <KineticLine text={HERO.titleAccent} accent delayBase={0.4} />
          </h1>

          <motion.p
            className="mt-8 max-w-xl text-lg leading-relaxed text-paper/75 sm:text-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {HERO.subhead}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            <Button href={CONFIG.BOOKING_URL} variant="primary">
              {HERO.primaryCta}
              <ArrowRight size={18} />
            </Button>
            <a
              href={HERO.secondaryHref}
              className="group inline-flex items-center gap-2 px-2 py-2 text-[0.95rem] font-medium text-paper/90 transition-colors hover:text-accent-50"
            >
              {HERO.secondaryCta}
              <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          {/* visual proof row — glass tiles on dark */}
          <motion.dl
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            {HERO.stats.map((s) => (
              <div key={s.label} className="bg-ink/60 p-5 backdrop-blur-sm">
                <dt className="font-display text-3xl font-semibold text-paper sm:text-4xl">{s.value}</dt>
                <dd className="mt-1.5 text-xs leading-snug text-paper/55">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </Container>
    </section>
  );
}
