import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Splits a stat string like "€400M+" or "+32%" or "850+" into a numeric part
// to animate and the surrounding prefix/suffix to keep static.
function parse(value: string) {
  const m = value.match(/^(\D*?)(\d[\d.,]*)(.*)$/);
  if (!m) return { prefix: value, number: null as number | null, suffix: "", decimals: 0 };
  const [, prefix, num, suffix] = m;
  const clean = num.replace(/,/g, "");
  const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;
  return { prefix, number: parseFloat(clean), suffix, decimals };
}

// Animated number that counts up once when scrolled into view.
export function CountUp({ value, className }: { value: string; className?: string }) {
  const reduce = useReducedMotion();
  const { prefix, number, suffix, decimals } = parse(value);
  const [display, setDisplay] = useState(reduce || number === null ? value : `${prefix}0${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (reduce || number === null) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || done.current) return;
        done.current = true;
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          // easeOutExpo for a confident settle
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          const current = number * eased;
          setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);
          if (t < 1) requestAnimationFrame(tick);
          else setDisplay(value); // snap to exact formatting
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduce, number, prefix, suffix, decimals, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
