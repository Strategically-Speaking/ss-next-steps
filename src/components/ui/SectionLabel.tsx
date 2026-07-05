import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-gold">
      {children}
    </span>
  );
}
