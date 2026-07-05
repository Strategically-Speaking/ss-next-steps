import { Reveal } from "@/components/motion/Reveal";
import type { Testimonial } from "@/lib/types";

export function TestimonialSection({
  heading,
  testimonial,
}: {
  heading?: string;
  testimonial?: Testimonial;
}) {
  if (!testimonial) return null;

  return (
    <section className="bg-navy px-6 py-20 text-white sm:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        {heading && (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{heading}</p>
        )}
        <blockquote className="mt-6 font-heading text-2xl font-medium leading-snug sm:text-3xl">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <p className="mt-6 text-white/70">
          {testimonial.name}
          {testimonial.title ? `, ${testimonial.title}` : ""}
          {testimonial.org ? ` — ${testimonial.org}` : ""}
        </p>
      </Reveal>
    </section>
  );
}
