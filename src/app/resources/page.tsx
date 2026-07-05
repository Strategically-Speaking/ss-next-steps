import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Hero } from "@/components/sections/Hero";
import { TextSection } from "@/components/sections/TextSection";
import { CTASection } from "@/components/sections/CTASection";
import {
  getPage,
  getResources,
  getSectionBody,
  getWorkshopTracks,
} from "@/lib/content";

const page = getPage("resources");

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
};

export default function ResourcesPage() {
  const tracks = getWorkshopTracks();
  const resources = getResources();

  return (
    <>
      <Hero hero={page.hero} eyebrow="Resources" />

      <TextSection
        heading="Start with free, then unlock premium"
        body={getSectionBody(page, "resources-intro")}
      />

      <section className="mx-auto max-w-6xl px-6 pb-8 sm:pb-12">
        <div className="rounded-2xl border border-navy/10 bg-white p-6 text-navy/80 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">
            Access Policy
          </p>
          <p className="mt-3 text-base leading-relaxed">
            We intentionally keep free resources limited: 1 free starter
            resource per track. Most resources are premium and behind a paywall.
          </p>
        </div>
      </section>

      {tracks.map((track) => {
        const items = resources.filter(
          (resource) => resource.trackSlug === track.slug,
        );
        const freeCount = items.filter(
          (resource) => resource.access === "free",
        ).length;
        const paidCount = items.length - freeCount;

        return (
          <section
            key={track.slug}
            className="mx-auto max-w-6xl px-6 py-10 sm:py-12"
          >
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
                  {track.name} Resources
                </h2>
                <p className="mt-2 text-navy/70">
                  Popular options for this track. Free: {freeCount} | Paid
                  (Paywalled): {paidCount}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((resource) => {
                const isPaid = resource.access === "paid";

                return (
                  <article
                    key={resource.slug}
                    className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/10"
                  >
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
                        {track.name}
                      </span>
                      <span
                        className={
                          isPaid
                            ? "rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
                            : "rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800"
                        }
                      >
                        {isPaid ? "Paid (Paywall)" : "Free"}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-semibold text-navy">
                      {resource.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-gold">
                      {resource.provider}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/80">
                      {resource.description}
                    </p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy/60">
                      Popular for: {resource.popularFor}
                    </p>

                    <Button
                      href={resource.href}
                      variant={isPaid ? "primary" : "secondary"}
                      className="mt-5 w-full"
                    >
                      {resource.ctaLabel}
                    </Button>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}

      <CTASection
        heading="Get full access to premium track resources"
        body="Most of our tools, templates, and planning systems are paid resources behind membership access. Contact us to unlock the full library."
        cta={{ label: "Unlock Paid Resources", href: "/contact" }}
      />
    </>
  );
}
