import raw from "@/data/next-steps-content.json";
import type {
  SiteContent,
  SiteSettings,
  Page,
  Service,
  WorkshopTrack,
  TeamMember,
  Testimonial,
  Stat,
  ListItem,
  PricingTier,
  ContactOption,
} from "./types";

// This is the ONLY file that touches next-steps-content.json directly.
// Pages and components must go through the accessors below.
const content = raw as unknown as SiteContent;

export function getSiteSettings(): SiteSettings {
  return content.siteSettings;
}

export function getPage(key: keyof SiteContent["pages"]): Page {
  return content.pages[key];
}

export function getServices(): Service[] {
  return content.services;
}

export function getService(slug: string): Service | undefined {
  return content.services.find((s) => s.slug === slug);
}

export function getWorkshopTracks(): WorkshopTrack[] {
  return content.workshopTracks;
}

export function getWorkshopTrack(slug: string): WorkshopTrack | undefined {
  return content.workshopTracks.find((t) => t.slug === slug);
}

export function getTeam(): TeamMember[] {
  return content.team;
}

export function getTestimonials(): Testimonial[] {
  return content.testimonials;
}

export function getStats(): Stat[] {
  return content.stats;
}

function getSection(page: Page, id: string) {
  return page.sections.find((s) => s.id === id);
}

export function getSectionBody(page: Page, id: string): string {
  return getSection(page, id)?.body ?? "";
}

export function getSectionListItems(page: Page, id: string): ListItem[] {
  const items = getSection(page, id)?.items;
  return Array.isArray(items) ? items : [];
}

export function getSectionTiers(page: Page, id: string): PricingTier[] {
  return getSection(page, id)?.tiers ?? [];
}

export function getSectionOptions(page: Page, id: string): ContactOption[] {
  return getSection(page, id)?.options ?? [];
}
