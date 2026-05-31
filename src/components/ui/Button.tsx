import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "onDark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-gentle focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none";

const sizes = "px-7 py-3.5 text-[0.95rem]";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-paper hover:bg-accent-600 active:bg-accent-700 shadow-[0_8px_24px_-12px_rgba(15,76,92,0.6)] hover:shadow-[0_12px_30px_-12px_rgba(15,76,92,0.7)]",
  outline:
    "border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
  ghost: "text-ink hover:text-accent",
  onDark: "bg-paper text-ink hover:bg-paper/90",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  type?: "button" | "submit";
  className?: string;
  ariaLabel?: string;
}) {
  const cls = `${base} ${sizes} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
