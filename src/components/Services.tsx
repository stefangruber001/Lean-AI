import { Check, ArrowRight } from "lucide-react";
import { CONFIG, ENGAGEMENTS } from "../content";
import { Section, FadeItem } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";

export function Services() {
  return (
    <Section id="engagements">
      <FadeItem>
        <SectionHeading
          number={ENGAGEMENTS.number}
          kicker={ENGAGEMENTS.kicker}
          title={ENGAGEMENTS.heading}
          intro={ENGAGEMENTS.intro}
        />
      </FadeItem>

      <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
        {ENGAGEMENTS.offers.map((offer) => {
          const featured = offer.featured;
          return (
            <FadeItem key={offer.name} className="h-full">
              <Card featured={featured} className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[0.7rem] uppercase tracking-label ${
                      featured ? "text-paper/70" : "text-accent"
                    }`}
                  >
                    {ENGAGEMENTS.feeSignal}
                  </span>
                  {featured && (
                    <span className="rounded-full bg-accent px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-paper">
                      Most chosen
                    </span>
                  )}
                </div>

                <h3
                  className={`mt-5 font-display text-3xl font-semibold ${
                    featured ? "text-paper" : "text-ink"
                  }`}
                >
                  {offer.name}
                </h3>
                <p
                  className={`mt-1 font-mono text-[0.7rem] uppercase tracking-[0.1em] ${
                    featured ? "text-paper/55" : "text-gray-3"
                  }`}
                >
                  {offer.tagline}
                </p>
                <p
                  className={`mt-4 text-[0.97rem] leading-relaxed ${
                    featured ? "text-paper/80" : "text-gray-1"
                  }`}
                >
                  {offer.outcome}
                </p>

                <ul className="mt-6 space-y-3">
                  {offer.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check
                        size={18}
                        strokeWidth={2}
                        className={`mt-0.5 shrink-0 ${featured ? "text-accent-50" : "text-accent"}`}
                      />
                      <span className={`text-[0.95rem] ${featured ? "text-paper/85" : "text-gray-1"}`}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <p className={`text-sm italic leading-relaxed ${featured ? "text-paper/65" : "text-gray-2"}`}>
                    {offer.who}
                  </p>
                  <a
                    href={CONFIG.BOOKING_URL}
                    className={`mt-5 inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                      featured ? "text-accent-50 hover:text-paper" : "text-accent hover:text-accent-700"
                    }`}
                  >
                    {CONFIG.PRIMARY_CTA}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </Card>
            </FadeItem>
          );
        })}
      </div>
    </Section>
  );
}
