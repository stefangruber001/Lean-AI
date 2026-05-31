import { ArrowLeft } from "lucide-react";
import { CONFIG, LEGAL } from "../content";
import { Container } from "./ui/Container";

// Standalone legal page (Impressum + Privacy), shown via the #legal hash route.
export function Legal() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-hairline">
        <Container className="flex h-16 items-center justify-between lg:h-20">
          <a
            href="#top"
            className="font-display text-xl font-semibold tracking-tight text-ink"
          >
            {CONFIG.BRAND_NAME}
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm text-gray-1 transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to site
          </a>
        </Container>
      </header>

      <main>
        <Container className="max-w-3xl py-16 lg:py-24">
          {/* Impressum / Legal notice */}
          <section aria-labelledby="impressum">
            <p className="eyebrow">{LEGAL.impressum.subtitle}</p>
            <h1
              id="impressum"
              className="mt-4 font-display text-display font-semibold text-ink"
            >
              {LEGAL.impressum.title}
            </h1>
            <p className="mt-5 leading-relaxed text-gray-1">{LEGAL.impressum.intro}</p>

            <dl className="mt-8 divide-y divide-hairline border-y border-hairline">
              <Row label="Responsible" value={LEGAL.legalName} />
              <Row label="Represented by" value={LEGAL.responsiblePerson} />
              <Row label="Address" value={LEGAL.address} />
              <Row label="VAT / Tax ID" value={LEGAL.vatId} />
              <Row
                label="Email"
                value={
                  <a href={`mailto:${LEGAL.email}`} className="text-accent hover:text-accent-700">
                    {LEGAL.email}
                  </a>
                }
              />
            </dl>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-gray-3">
              Bracketed values are placeholders — to be confirmed before public launch.
            </p>
          </section>

          {/* Privacy */}
          <section aria-labelledby="privacy" className="mt-20">
            <p className="eyebrow">{LEGAL.privacy.subtitle}</p>
            <h2
              id="privacy"
              className="mt-4 font-display text-display font-semibold text-ink"
            >
              {LEGAL.privacy.title}
            </h2>
            <p className="mt-5 leading-relaxed text-gray-1">{LEGAL.privacy.intro}</p>

            <div className="mt-8 space-y-7">
              {LEGAL.privacy.points.map((pt) => (
                <div key={pt.h}>
                  <h3 className="font-display text-lg font-medium text-ink">{pt.h}</h3>
                  <p className="mt-1.5 leading-relaxed text-gray-1">{pt.b}</p>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>

      <footer className="border-t border-hairline">
        <Container className="py-10 text-sm text-gray-2">
          <a href="#top" className="text-accent hover:text-accent-700">
            ← Back to {CONFIG.BRAND_NAME}
          </a>
        </Container>
      </footer>
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-3 gap-4 py-4">
      <dt className="font-mono text-[0.72rem] uppercase tracking-label text-gray-2">{label}</dt>
      <dd className="col-span-2 text-ink">{value}</dd>
    </div>
  );
}
