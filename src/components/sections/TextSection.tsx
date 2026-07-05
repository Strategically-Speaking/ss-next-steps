import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function TextSection({
  heading,
  body,
  label,
}: {
  heading?: string;
  body: string;
  label?: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Reveal>
        {label && <SectionLabel>{label}</SectionLabel>}
        {heading && (
          <h2 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">{heading}</h2>
        )}
        <p className="mt-6 text-lg leading-relaxed text-navy/80">{body}</p>
      </Reveal>
    </section>
  );
}
