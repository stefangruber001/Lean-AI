import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { CONFIG, NAV } from "../content";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { useActiveSection } from "../lib/useActiveSection";

const SECTION_IDS = NAV.map((n) => n.href.replace("#", ""));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-gentle ${
          scrolled ? "bg-paper/90 shadow-header backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Container className="flex h-16 items-center justify-between lg:h-20">
          <a
            href="#top"
            className={`font-display text-xl font-semibold tracking-tight transition-colors ${
              scrolled ? "text-ink" : "text-paper"
            }`}
            aria-label={`${CONFIG.BRAND_NAME} — home`}
          >
            {CONFIG.BRAND_NAME}
          </a>

          {/* desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV.map((item) => {
              const isActive = active === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative text-sm transition-colors hover:text-accent ${
                    scrolled ? (isActive ? "text-ink" : "text-gray-1") : "text-paper/80 hover:text-paper"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px transition-all duration-300 ease-gentle ${
                      scrolled ? "bg-accent" : "bg-accent-50"
                    } ${isActive ? "w-full" : "w-0"}`}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button
              href={CONFIG.BOOKING_URL}
              variant={scrolled ? "primary" : "onDark"}
              className="!px-6 !py-3 text-sm"
            >
              {CONFIG.PRIMARY_CTA}
            </Button>
          </div>

          {/* mobile toggle — bordered chip, adapts to the band behind it */}
          <button
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm backdrop-blur-md transition-colors lg:hidden ${
              scrolled
                ? "border-ink/15 bg-paper/80 text-ink hover:border-ink/30"
                : "border-paper/25 bg-ink/30 text-paper hover:border-paper/50"
            }`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={22} strokeWidth={2} />
          </button>
        </Container>
      </header>

      {/* Mobile full-screen overlay — rendered as a SIBLING of <header> so it is
          never trapped by the header's backdrop-filter containing block. */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-paper lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Container className="flex h-16 items-center justify-between">
              <span className="font-display text-xl font-semibold tracking-tight text-ink">
                {CONFIG.BRAND_NAME}
              </span>
              <button
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink/30"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={2} />
              </button>
            </Container>

            <Container className="flex flex-1 flex-col justify-center pb-16">
              <nav className="flex flex-col" aria-label="Mobile">
                {NAV.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between border-b border-hairline py-5 font-display text-3xl text-ink"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + 0.05 * i, duration: 0.3 }}
                  >
                    {item.label}
                    <span className="font-mono text-xs text-gray-3">
                      0{i + 1}
                    </span>
                  </motion.a>
                ))}
              </nav>
              <motion.div
                className="pt-10"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Button href={CONFIG.BOOKING_URL} variant="primary" className="w-full" >
                  {CONFIG.PRIMARY_CTA}
                  <ArrowRight size={18} />
                </Button>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
