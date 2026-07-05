import type { Metadata } from "next";
import { getPage, getWorkshopTracks, getSectionListItems } from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { CardsSection } from "@/components/sections/CardsSection";
import { ListSection } from "@/components/sections/ListSection";
import { CTASection } from "@/components/sections/CTASection";
import { WorkshopTrackCard } from "@/components/cards/WorkshopTrackCard";

const page = getPage("workshops");

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
};

export default function WorkshopsPage() {
  const tracks = getWorkshopTracks();

  return (
    <>
      <Hero hero={page.hero} eyebrow="Workshops" />

      <CardsSection heading="Workshop Tracks" columns={4}>
        {tracks.map((track) => (
          <WorkshopTrackCard key={track.slug} track={track} />
        ))}
      </CardsSection>

      <ListSection heading="How workshops work" items={getSectionListItems(page, "how-it-works")} />

      <CTASection
        heading="Find the right track for your teen"
        body="Book a workshop seat or ask us which track fits best."
        cta={{ label: "Book Now", href: "/contact" }}
      />
    </>
  );
}
