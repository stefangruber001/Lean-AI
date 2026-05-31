import { FlaskConical, Workflow, Users, type LucideIcon } from "lucide-react";
import { PROBLEM } from "../content";
import { Section, FadeItem } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

const ICONS: Record<string, LucideIcon> = { FlaskConical, Workflow, Users };

export function Problem() {
  return (
    <Section id="problem">
      <FadeItem>
        <SectionHeading
          number={PROBLEM.number}
          kicker={PROBLEM.kicker}
          title={PROBLEM.heading}
          intro={PROBLEM.lead}
        />
      </FadeItem>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {PROBLEM.cards.map((card) => {
          const Icon = ICONS[card.icon] ?? FlaskConical;
          return (
            <FadeItem key={card.title}>
              <div className="h-full rounded-2xl border border-hairline bg-white/60 p-7 transition-all duration-300 ease-gentle hover:-translate-y-0.5 hover:shadow-card">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-ink">{card.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-gray-2">{card.body}</p>
              </div>
            </FadeItem>
          );
        })}
      </div>
    </Section>
  );
}
