import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ as FAQ_CONTENT } from "../content";
import { Section, FadeItem } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-paper-2">
      <FadeItem>
        <SectionHeading number={FAQ_CONTENT.number} kicker={FAQ_CONTENT.kicker} title={FAQ_CONTENT.heading} />
      </FadeItem>

      <FadeItem>
        <ul className="mt-10 border-t border-hairline">
          {FAQ_CONTENT.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="border-b border-hairline">
                <button
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xl font-medium text-ink sm:text-2xl">
                    {item.q}
                  </span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-hairline text-accent transition-transform duration-300 ease-gentle ${
                      isOpen ? "rotate-45 bg-accent text-paper" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <Plus size={18} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 pr-12 text-[1.02rem] leading-relaxed text-gray-1">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </FadeItem>
    </Section>
  );
}
