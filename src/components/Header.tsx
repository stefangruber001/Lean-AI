import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-gentle ${
        scrolled || open
          ? "bg-paper/90 shadow-header backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-ink"
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
                  isActive ? "text-ink" : "text-gray-1"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ease-gentle ${
                    isActive ? "w-full" : "w-0"
                  }`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={CONFIG.BOOKING_URL} variant="primary" className="!px-6 !py-3 text-sm">
            {CONFIG.PRIMARY_CTA}
          </Button>
        </div>

        {/* mobile toggle — bordered chip so it's always clearly visible */}
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-paper/80 text-ink shadow-sm backdrop-blur-md transition-colors hover:border-ink/30 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </Container>

      {/* mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-16 z-40 bg-paper lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Container className="flex flex-col gap-1 py-8">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-hairline py-5 font-display text-2xl text-ink"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-8">
                <Button
                  href={CONFIG.BOOKING_URL}
                  variant="primary"
                  className="w-full"
                >
                  {CONFIG.PRIMARY_CTA}
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
