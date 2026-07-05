import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { placeholderImage } from "@/lib/utils";
import type { TeamMember } from "@/lib/types";

export function TeamGrid({ heading, team }: { heading?: string; team: TeamMember[] }) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        {heading && (
          <h2 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">{heading}</h2>
        )}
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {team.map((member) => (
          <Reveal
            key={member.name}
            className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-navy/10 sm:flex-row sm:text-left"
          >
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full">
              <Image
                src={placeholderImage(member.name, 200, 200)}
                alt={member.imageAlt}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-navy">{member.name}</h3>
              <p className="text-sm font-semibold text-gold">{member.title}</p>
              <p className="mt-2 text-navy/70">{member.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
