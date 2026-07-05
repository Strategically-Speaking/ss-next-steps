"use client";

import { motion } from "framer-motion";
import { StaggerGroup, staggerItem } from "@/components/motion/Reveal";
import type { Stat } from "@/lib/types";

export function StatsStrip({ stats }: { stats: Stat[] }) {
  return (
    <section className="border-y border-navy/10 bg-white px-6 py-16">
      <StaggerGroup className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={staggerItem}>
            <p className="font-heading text-4xl font-semibold text-navy">{stat.value}</p>
            <p className="mt-2 text-sm text-navy/60">{stat.label}</p>
          </motion.div>
        ))}
      </StaggerGroup>
    </section>
  );
}
