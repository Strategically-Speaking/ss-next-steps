import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { ListSection } from "@/components/sections/ListSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getWorkshopTrack, getWorkshopTracks } from "@/lib/content";
import { placeholderImage } from "@/lib/utils";

type WorkshopTrackPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getWorkshopTracks().map((track) => ({ slug: track.slug }));
}

export async function generateMetadata({
  params,
}: WorkshopTrackPageProps): Promise<Metadata> {
  const { slug } = await params;
  const track = getWorkshopTrack(slug);

  if (!track) {
    return {};
  }

  return {
    title: `${track.name} Workshop`,
    description: track.description,
  };
}

export default async function WorkshopTrackPage({
  params,
}: WorkshopTrackPageProps) {
  const { slug } = await params;
  const track = getWorkshopTrack(slug);

  if (!track) {
    notFound();
  }

  return (
    <>
      <section className="bg-linear-to-b from-navy to-navy-dark px-6 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionLabel>{track.name}</SectionLabel>
            <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              {track.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              {track.fullDescription}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-gold ring-1 ring-white/15">
                {track.price}
              </span>
              <Button href={track.cta.href} variant="ghost">
                {track.cta.label}
              </Button>
              <Button
                href="/workshops"
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                Back to Workshops
              </Button>
            </div>
          </div>

          <div className="relative h-72 overflow-hidden rounded-3xl ring-1 ring-white/10 sm:h-96">
            <Image
              src={placeholderImage(track.slug, 1200, 900)}
              alt={track.imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-navy/10 sm:p-10">
          <SectionLabel>Who It&apos;s For</SectionLabel>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            {track.audience}
          </p>
        </div>
      </section>

      <ListSection
        heading="What we cover"
        items={track.topics}
        label="Workshop Topics"
      />

      <ListSection
        heading="What families leave with"
        items={track.outcomes}
        label="Outcomes"
      />

      <CTASection
        heading={`Ready to explore the ${track.name}?`}
        body="Tell us about your teen and we’ll help you decide if this workshop is the right fit."
        cta={track.cta}
      />
    </>
  );
}
