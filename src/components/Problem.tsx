import { PROBLEM } from "../content";
import { Section, FadeItem } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

export function Problem() {
  return (
    <Section id="problem">
      <FadeItem>
        <SectionHeading number={PROBLEM.number} kicker={PROBLEM.kicker} title={PROBLEM.heading} />
      </FadeItem>

      <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <FadeItem className="lg:col-span-7">
          <div className="space-y-6 text-lg leading-relaxed text-gray-1">
            {PROBLEM.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </FadeItem>

        <FadeItem className="lg:col-span-5">
          <ul className="space-y-5">
            {PROBLEM.insights.map((insight) => (
              <li
                key={insight.stat}
                className="border-l-2 border-accent/40 pl-5"
              >
                <span className="block font-display text-xl font-medium text-ink">
                  {insight.stat}
                </span>
                <span className="mt-1 block text-[0.95rem] leading-relaxed text-gray-2">
                  {insight.label}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.1em] text-gray-3">
            Industry context — not client data
          </p>
        </FadeItem>
      </div>
    </Section>
  );
}
