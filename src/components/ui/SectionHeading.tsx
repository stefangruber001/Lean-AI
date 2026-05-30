import type { ReactNode } from "react";

// Editorial section heading with a monospace number + kicker, e.g. "01 — The problem".
export function SectionHeading({
  number,
  kicker,
  title,
  intro,
  light = false,
  className = "",
}: {
  number: string;
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <div className="flex items-center gap-3">
        <span className={`font-mono text-sm ${light ? "text-paper/60" : "text-accent"}`}>
          {number}
        </span>
        <span className={`h-px w-8 ${light ? "bg-paper/30" : "bg-hairline"}`} aria-hidden="true" />
        <span
          className={`font-mono text-[0.72rem] uppercase tracking-label ${
            light ? "text-paper/70" : "text-gray-2"
          }`}
        >
          {kicker}
        </span>
      </div>
      <h2
        className={`mt-5 font-display text-display font-semibold ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? "text-paper/75" : "text-gray-1"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
