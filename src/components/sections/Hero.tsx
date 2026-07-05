import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import type { Hero as HeroType } from "@/lib/types";

export function Hero({ hero, eyebrow }: { hero: HeroType; eyebrow?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-dark px-6 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          {eyebrow && (
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {eyebrow}
            </span>
          )}
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-6xl">
            {hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
            {hero.subheadline}
          </p>
          {(hero.ctaPrimary || hero.ctaSecondary) && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {hero.ctaPrimary && (
                <Button href={hero.ctaPrimary.href} variant="ghost">
                  {hero.ctaPrimary.label}
                </Button>
              )}
              {hero.ctaSecondary && (
                <Button
                  href={hero.ctaSecondary.href}
                  variant="secondary"
                  className="border-white text-white hover:bg-white hover:text-navy"
                >
                  {hero.ctaSecondary.label}
                </Button>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
