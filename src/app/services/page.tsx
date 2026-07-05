import type { Metadata } from "next";
import { getPage, getServices, getSectionTiers } from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { CardsSection } from "@/components/sections/CardsSection";
import { PricingTable } from "@/components/sections/PricingTable";
import { ServiceCard } from "@/components/cards/ServiceCard";

const page = getPage("services");

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
};

export default function ServicesPage() {
  const services = getServices();
  const tiers = getSectionTiers(page, "pricing");

  return (
    <>
      <Hero hero={page.hero} eyebrow="Services" />

      <CardsSection heading="Our Services">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </CardsSection>

      <PricingTable
        heading="Pricing"
        subheading="Placeholder pricing — final numbers to be confirmed before launch"
        tiers={tiers}
      />
    </>
  );
}
