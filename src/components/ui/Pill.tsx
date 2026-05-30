import type { ReactNode } from "react";

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-hairline bg-paper px-4 py-2 text-sm text-gray-1">
      {children}
    </span>
  );
}
