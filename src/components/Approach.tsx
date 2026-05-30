import { ScanSearch, Scissors, Cpu, Infinity as InfinityIcon, type LucideIcon } from "lucide-react";
import { APPROACH } from "../content";
import { Section, FadeItem } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

const ICONS: Record<string, LucideIcon> = {
  ScanSearch,
  Scissors,
  Cpu,
  Infinity: InfinityIcon,
};

export function Approach() {
  return (
    <Section id="approach" className="bg-white/30">
      <FadeItem>
        <SectionHeading
          number={APPROACH.number}
          kicker={APPROACH.kicker}
          title={APPROACH.heading}
          intro={APPROACH.intro}
        />
      </FadeItem>

      <div className="relative mt-14">
        {/* connecting hairline across the sequence (desktop) */}
        <div
          className="absolute left-0 right-0 top-[34px] hidden h-px bg-hairline lg:block"
          aria-hidden="true"
        />
        <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
          {APPROACH.steps.map((step) => {
            const Icon = ICONS[step.icon] ?? ScanSearch;
            return (
              <FadeItem key={step.n}>
                <li className="relative">
                  <div className="flex items-center gap-4 lg:block">
                    <span className="relative z-10 inline-flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-xl border border-hairline bg-paper text-accent shadow-sm">
                      <Icon size={26} strokeWidth={1.6} />
                    </span>
                    <span className="font-mono text-sm text-gray-3 lg:mt-5 lg:block">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-medium text-ink lg:mt-2">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.97rem] leading-relaxed text-gray-1">
                    {step.body}
                  </p>
                </li>
              </FadeItem>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
