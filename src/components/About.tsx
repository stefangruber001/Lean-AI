import { useState } from "react";
import { Linkedin, MapPin } from "lucide-react";
import { ABOUT, CONFIG } from "../content";
import { Section, FadeItem } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

export function About() {
  const [imgOk, setImgOk] = useState(true);
  const [bust, setBust] = useState(0); // retry counter to defeat a stale 404 cache
  const base = `${import.meta.env.BASE_URL}${ABOUT.photo}`;
  const photoSrc = bust ? `${base}?v=${bust}` : base;

  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <FadeItem>
            <SectionHeading number={ABOUT.number} kicker={ABOUT.kicker} title={ABOUT.heading} />
          </FadeItem>
          <FadeItem>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-1">
              {ABOUT.body.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </FadeItem>
          <FadeItem>
            <blockquote className="mt-8 border-l-2 border-accent pl-5 font-display text-xl italic leading-relaxed text-ink">
              “{ABOUT.pullQuote}”
            </blockquote>
          </FadeItem>

          {/* Founder's own career track record — clearly distinguished from client results */}
          <FadeItem>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-4">
              {ABOUT.trackRecord.map((m) => (
                <div key={m.label} className="bg-paper p-5">
                  <dt className="font-display text-3xl font-semibold text-ink">{m.value}</dt>
                  <dd className="mt-1.5 text-xs leading-snug text-gray-2">{m.label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs italic text-gray-3">{ABOUT.trackRecordNote}</p>
          </FadeItem>

          <FadeItem>
            <ul className="mt-8 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {ABOUT.credentials.map((c) => (
                <li key={c} className="flex items-baseline gap-2.5 text-[0.92rem] text-gray-1">
                  <span className="text-accent">—</span>
                  {c}
                </li>
              ))}
            </ul>
          </FadeItem>
        </div>

        <FadeItem className="lg:col-span-5">
          <figure className="lg:sticky lg:top-28">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-hairline bg-gradient-to-br from-ink to-accent-700">
              {imgOk ? (
                <>
                  <img
                    src={photoSrc}
                    alt={`${CONFIG.FOUNDER_NAME}, ${CONFIG.FOUNDER_TITLE} at ${CONFIG.BRAND_NAME}`}
                    className="h-full w-full object-cover object-top grayscale transition-all duration-500 ease-gentle group-hover:grayscale-0"
                    onError={() => {
                      // First failure may be a stale 404 cache mid-deploy — retry once
                      // with a cache-buster before falling back to the placeholder.
                      if (bust < 1) setBust(1);
                      else setImgOk(false);
                    }}
                  />
                  {/* subtle ink gradient + name plate for an editorial finish */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent"
                    aria-hidden="true"
                  />
                </>
              ) : (
                <>
                  {/* TODO: upload a professional monochrome headshot to /public/founder.jpg
                      to replace this styled placeholder. */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="px-6 text-center font-mono text-xs uppercase tracking-[0.12em] text-paper/55">
                      Add /public/founder.jpg
                      <br />
                      monochrome headshot
                    </span>
                  </div>
                  <svg className="absolute inset-0 h-full w-full opacity-[0.12]" aria-hidden="true">
                    <defs>
                      <pattern id="aboutgrid" width="28" height="28" patternUnits="userSpaceOnUse">
                        <path d="M28 0H0V28" stroke="#F4EFE7" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#aboutgrid)" />
                  </svg>
                </>
              )}
            </div>
            <figcaption className="mt-4">
              <span className="block font-display text-lg font-medium text-ink">
                {CONFIG.FOUNDER_NAME}
              </span>
              <span className="block text-sm text-gray-2">{CONFIG.FOUNDER_TITLE}</span>
              <span className="mt-2 flex items-center gap-1.5 text-xs text-gray-3">
                <MapPin size={13} className="text-accent" />
                {CONFIG.LOCATION}
              </span>
              <a
                href={CONFIG.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-700"
              >
                <Linkedin size={16} />
                Connect on LinkedIn
              </a>
            </figcaption>
          </figure>
        </FadeItem>
      </div>
    </Section>
  );
}
