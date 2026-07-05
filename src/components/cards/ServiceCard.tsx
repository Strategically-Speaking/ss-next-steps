import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { placeholderImage } from "@/lib/utils";
import type { Service } from "@/lib/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={placeholderImage(service.slug, 800, 600)}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-heading text-xl font-semibold text-navy">{service.name}</h3>
        <p className="text-sm font-semibold text-gold">{service.tagline}</p>
        <p className="flex-1 text-navy/80">{service.shortDescription}</p>
        <Button href={service.cta.href} variant="secondary" className="mt-2 self-start">
          {service.cta.label}
        </Button>
      </div>
    </div>
  );
}
