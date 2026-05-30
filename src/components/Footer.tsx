import { Linkedin } from "lucide-react";
import { CONFIG, NAV, FOOTER } from "../content";
import { Container } from "./ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline bg-paper">
      <Container className="py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <a
              href="#top"
              className="font-display text-xl font-semibold tracking-tight text-ink"
            >
              {CONFIG.BRAND_NAME}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-gray-2">{FOOTER.positioning}</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-1 transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href={`mailto:${CONFIG.CONTACT_EMAIL}`}
              className="text-ink transition-colors hover:text-accent"
            >
              {CONFIG.CONTACT_EMAIL}
            </a>
            <a
              href={CONFIG.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-1 transition-colors hover:text-accent"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-hairline pt-6 text-xs text-gray-3 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {CONFIG.BRAND_NAME}. {CONFIG.TAGLINE}
          </span>
          <span className="font-mono uppercase tracking-[0.1em]">{FOOTER.builtLine}</span>
        </div>
      </Container>
    </footer>
  );
}
