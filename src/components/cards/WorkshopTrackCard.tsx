import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { placeholderImage } from "@/lib/utils";
import type { WorkshopTrack } from "@/lib/types";

export function WorkshopTrackCard({ track }: { track: WorkshopTrack }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={placeholderImage(track.slug, 800, 500)}
          alt={track.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-heading text-lg font-semibold text-navy">
          {track.name}
        </h3>
        <p className="flex-1 text-navy/80">{track.description}</p>
        <p className="text-sm font-semibold text-gold">{track.price}</p>
        <Button
          href={`/workshops/${track.slug}`}
          variant="secondary"
          className="mt-2 w-full"
        >
          More Details
        </Button>
      </div>
    </div>
  );
}
