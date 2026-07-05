// TypeScript interfaces mirroring the shape of src/data/next-steps-content.json.
// No page or component should import the JSON directly — everything goes
// through src/lib/content.ts, typed against these interfaces.

export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface Hero {
  headline: string;
  subheadline: string;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
  imageAlt?: string;
}

export interface SEO {
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: CTA;
}

export interface ListItem {
  title: string;
  description: string;
}

export interface ContactOption {
  type: "booking" | "email" | "phone";
  label: string;
  description: string;
  action?: string;
  url?: string;
}

// A page section's shape varies by `type`. Rather than a full discriminated
// union (overkill for a 5-page site), we keep this permissive and let
// src/lib/content.ts expose typed accessors for the fields each section type
// actually needs (getSectionBody, getSectionListItems, etc).
export interface PageSection {
  id: string;
  type: string;
  heading?: string;
  subheading?: string;
  body?: string;
  items?: ListItem[] | string;
  featured?: string;
  cta?: CTA;
  tiers?: PricingTier[];
  options?: ContactOption[];
}

export interface Page {
  hero: Hero;
  sections: PageSection[];
  seo: SEO;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  mission: string;
  logo: {
    text: string;
    hasImage: boolean;
    imageAlt: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
    hours: string;
  };
  social: {
    linkedin: string;
    instagram: string;
    facebook: string;
    twitter: string;
  };
  nav: NavItem[];
  footer: {
    tagline: string;
    copyright: string;
  };
  brand: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    headingFont: string;
    bodyFont: string;
  };
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  approach: string;
  whoItsFor: string;
  outcomes: string[];
  cta: CTA;
  imageAlt: string;
}

export interface WorkshopTrack {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  audience: string;
  topics: ListItem[];
  outcomes: ListItem[];
  price: string;
  cta: CTA;
  imageAlt: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  credentials: string;
  imageAlt: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  org: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SiteContent {
  siteSettings: SiteSettings;
  pages: {
    home: Page;
    about: Page;
    services: Page;
    workshops: Page;
    contact: Page;
  };
  services: Service[];
  workshopTracks: WorkshopTrack[];
  team: TeamMember[];
  testimonials: Testimonial[];
  stats: Stat[];
}
