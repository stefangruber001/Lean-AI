import { ABOUT, CONFIG } from "../content";
import { Section, FadeItem } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <FadeItem>
            <SectionHeading
              number={ABOUT.number}
              kicker={ABOUT.kicker}
              title={ABOUT.heading}
            />
          </FadeItem>
          <FadeItem>
            <p className="mt-8 text-lg leading-relaxed text-gray-1">{ABOUT.body}</p>
          </FadeItem>
          <FadeItem>
            <blockquote className="mt-8 border-l-2 border-accent pl-5 font-display text-xl italic leading-relaxed text-ink">
              “{ABOUT.pullQuote}”
            </blockquote>
          </FadeItem>
          <FadeItem>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {ABOUT.credentials.map((c) => (
                <li
                  key={c}
                  className="font-mono text-[0.78rem] uppercase tracking-[0.08em] text-gray-2"
                >
                  <span className="mr-2 text-accent">—</span>
                  {c}
                </li>
              ))}
            </ul>
          </FadeItem>
        </div>

        <FadeItem className="lg:col-span-5">
          {/* TODO: replace with a professional monochrome headshot at /public/founder.jpg
              (e.g. <img src="/founder.jpg" alt="..." />). Keep it B&W / desaturated to fit the palette. */}
          <figure className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-hairline bg-gradient-to-br from-ink to-accent-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-6 text-center font-mono text-xs uppercase tracking-[0.12em] text-paper/55">
                  Add /public/founder.jpg
                  <br />
                  monochrome headshot
                </span>
              </div>
              {/* subtle precision grid overlay */}
              <svg className="absolute inset-0 h-full w-full opacity-[0.12]" aria-hidden="true">
                <defs>
                  <pattern id="aboutgrid" width="28" height="28" patternUnits="userSpaceOnUse">
                    <path d="M28 0H0V28" stroke="#FAFAF7" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#aboutgrid)" />
              </svg>
            </div>
            <figcaption className="mt-4">
              <span className="block font-display text-lg font-medium text-ink">
                {CONFIG.FOUNDER_NAME}
              </span>
              <span className="block text-sm text-gray-2">{CONFIG.FOUNDER_TITLE}</span>
            </figcaption>
          </figure>
        </FadeItem>
      </div>
    </Section>
  );
}
