import { Quote } from "lucide-react";
import { RESULTS } from "../content";
import { Section, FadeItem } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

export function Results() {
  return (
    <Section id="results" className="bg-white/30">
      <FadeItem>
        <SectionHeading
          number={RESULTS.number}
          kicker={RESULTS.kicker}
          title={RESULTS.heading}
          intro={RESULTS.intro}
        />
      </FadeItem>

      {/* TODO: replace with first real client case study after pilot.
          Do NOT publish fabricated client names or numbers. */}
      <FadeItem className="mt-12">
        <div className="overflow-hidden rounded-2xl border border-hairline bg-white/60 shadow-card">
          <div className="flex items-center justify-between border-b border-hairline px-6 py-4 sm:px-8">
            <span className="font-mono text-[0.72rem] uppercase tracking-label text-gray-2">
              {RESULTS.caseLabel}
            </span>
            <span className="rounded-full border border-hairline px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-gray-3">
              Illustrative
            </span>
          </div>

          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10">
            <div className="space-y-7">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-label text-accent">
                  Challenge
                </h3>
                <p className="mt-2 leading-relaxed text-gray-1">{RESULTS.challenge}</p>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-label text-accent">
                  Approach
                </h3>
                <p className="mt-2 leading-relaxed text-gray-1">{RESULTS.approach}</p>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-label text-accent">
                Outcome
              </h3>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {RESULTS.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-hairline bg-paper p-4 text-center"
                  >
                    <div className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                      {m.value}
                    </div>
                    <div className="mt-2 text-xs leading-snug text-gray-2">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* TODO: replace pull-quote with a real, attributable client quote post-pilot. */}
              <figure className="mt-8 rounded-xl bg-ink p-6 text-paper">
                <Quote size={20} className="text-accent-50/70" aria-hidden="true" />
                <blockquote className="mt-3 font-display text-lg italic leading-relaxed text-paper/90">
                  “{RESULTS.quote}”
                </blockquote>
                <figcaption className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-paper/50">
                  {RESULTS.quoteAttribution}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </FadeItem>
    </Section>
  );
}
