import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  featured = false,
}: {
  children: ReactNode;
  className?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-7 transition-all duration-300 ease-gentle sm:p-8 ${
        featured
          ? "border-accent/30 bg-ink text-paper shadow-cardHover"
          : "border-hairline bg-white/60 shadow-card hover:-translate-y-0.5 hover:shadow-cardHover"
      } ${className}`}
    >
      {children}
    </div>
  );
}
