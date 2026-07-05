import type { Metadata } from "next";
import { getPage, getSectionOptions } from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { ContactOptions } from "@/components/sections/ContactOptions";

const page = getPage("contact");

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
};

export default function ContactPage() {
  const options = getSectionOptions(page, "contact-options");

  return (
    <>
      <Hero hero={page.hero} eyebrow="Contact" />
      <ContactOptions options={options} />
    </>
  );
}
