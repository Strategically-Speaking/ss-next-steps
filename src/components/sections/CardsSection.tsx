"use client";

import { Children } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Reveal, StaggerGroup, staggerItem } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface CardsSectionProps {
  heading?: string;
  subheading?: string;
  label?: string;
  columns?: 2 | 3 | 4;
  children: ReactNode;
}

/**
 * Generic card-grid section. Takes already-rendered card elements as
 * children (rather than a render-prop) so Server Component pages can pass
 * data down without crossing the server/client boundary with a function.
 */
export function CardsSection({ heading, subheading, label, columns = 3, children }: CardsSectionProps) {
  const colsClass =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        {label && <SectionLabel>{label}</SectionLabel>}
        {heading && (
          <h2 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">{heading}</h2>
        )}
        {subheading && <p className="mt-4 text-lg text-navy/70">{subheading}</p>}
      </Reveal>

      <StaggerGroup className={`mt-12 grid grid-cols-1 gap-8 ${colsClass}`}>
        {Children.map(children, (child, i) => (
          <motion.div key={i} variants={staggerItem}>
            {child}
          </motion.div>
        ))}
      </StaggerGroup>
    </section>
  );
}
