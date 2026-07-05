import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import type { CTA } from "@/lib/types";

export function CTASection({ heading, body, cta }: { heading: string; body: string; cta: CTA }) {
  return (
    <section className="bg-gradient-to-b from-navy to-navy-dark px-6 py-20 text-center text-white sm:py-28">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl">{heading}</h2>
        <p className="mt-4 text-lg text-white/80">{body}</p>
        <div className="mt-8">
          <Button href={cta.href} variant="ghost">
            {cta.label}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
