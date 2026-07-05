import type { Metadata } from "next";
import { getPage, getTeam, getSectionBody, getSectionListItems } from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { TextSection } from "@/components/sections/TextSection";
import { ListSection } from "@/components/sections/ListSection";
import { TeamGrid } from "@/components/sections/TeamGrid";

const page = getPage("about");

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
};

export default function AboutPage() {
  const team = getTeam();

  return (
    <>
      <Hero hero={page.hero} eyebrow="About Next Steps" />
      <TextSection heading="Our story" body={getSectionBody(page, "story")} />
      <ListSection heading="What we stand for" items={getSectionListItems(page, "values")} />
      <TeamGrid heading="Meet the founder" team={team} />
    </>
  );
}
