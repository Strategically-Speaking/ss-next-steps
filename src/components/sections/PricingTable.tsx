"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal, StaggerGroup, staggerItem } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import type { PricingTier } from "@/lib/types";

export function PricingTable({
  heading,
  subheading,
  tiers,
}: {
  heading?: string;
  subheading?: string;
  tiers: PricingTier[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <SectionLabel>Pricing</SectionLabel>
        {heading && (
          <h2 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">{heading}</h2>
        )}
        {subheading && <p className="mt-4 text-lg text-navy/70">{subheading}</p>}
      </Reveal>

      <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {tiers.map((tier, i) => {
          const featured = i === 1;
          return (
            <motion.div
              key={tier.name}
              variants={staggerItem}
              className={
                featured
                  ? "flex flex-col rounded-2xl bg-navy p-8 text-white shadow-xl ring-1 ring-navy"
                  : "flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy/10"
              }
            >
              <h3 className="font-heading text-xl font-semibold">{tier.name}</h3>
              <p className={featured ? "mt-4 text-3xl font-semibold text-gold" : "mt-4 text-3xl font-semibold text-navy"}>
                {tier.price}
              </p>
              <p className={featured ? "text-sm text-white/70" : "text-sm text-navy/60"}>{tier.period}</p>
              <p className={featured ? "mt-4 text-white/80" : "mt-4 text-navy/80"}>{tier.description}</p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                    <span className={featured ? "text-white/90" : "text-navy/80"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button href={tier.cta.href} variant={featured ? "ghost" : "secondary"} className="mt-8 w-full">
                {tier.cta.label}
              </Button>
            </motion.div>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
