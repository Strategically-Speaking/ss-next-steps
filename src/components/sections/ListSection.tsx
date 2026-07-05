"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerGroup, staggerItem } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ListItem } from "@/lib/types";

export function ListSection({
  heading,
  items,
  label,
}: {
  heading?: string;
  items: ListItem[];
  label?: string;
}) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        {label && <SectionLabel>{label}</SectionLabel>}
        {heading && (
          <h2 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">{heading}</h2>
        )}
      </Reveal>

      <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {items.map((item) => (
          <motion.div
            key={item.title}
            variants={staggerItem}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/10"
          >
            <h3 className="font-heading text-lg font-semibold text-navy">{item.title}</h3>
            <p className="mt-2 text-navy/70">{item.description}</p>
          </motion.div>
        ))}
      </StaggerGroup>
    </section>
  );
}
