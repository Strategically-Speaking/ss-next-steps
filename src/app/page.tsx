import type { Metadata } from "next";
import { getPage, getServices, getWorkshopTracks, getTestimonials, getStats, getSectionBody } from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { TextSection } from "@/components/sections/TextSection";
import { CardsSection } from "@/components/sections/CardsSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { WorkshopTrackCard } from "@/components/cards/WorkshopTrackCard";

const page = getPage("home");

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
};

export default function HomePage() {
  const services = getServices();
  const tracks = getWorkshopTracks();
  const testimonials = getTestimonials();
  const stats = getStats();

  return (
    <>
      <Hero hero={page.hero} />

      <TextSection
        heading="Every path forward deserves a real conversation"
        body={getSectionBody(page, "problem")}
      />

      <CardsSection
        heading="How We Help"
        subheading="One-on-one guidance and group workshops built around real options, not one path"
      >
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </CardsSection>

      <CardsSection
        heading="Four Tracks. One Goal: Clarity."
        subheading="Our workshops are organized around the four most common next-step paths"
        columns={4}
      >
        {tracks.map((track) => (
          <WorkshopTrackCard key={track.slug} track={track} />
        ))}
      </CardsSection>

      <TestimonialSection heading="What families say" testimonial={testimonials[0]} />

      <StatsStrip stats={stats} />

      <CTASection
        heading="Ready to help your teen find their next step?"
        body="Book a consultation and let's map out the options together."
        cta={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
