import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Dev/launch placeholder image using Picsum with a fixed seed, so a given
 * slot (a service, a workshop track, a team member) always renders the same
 * image instead of a random one on every request.
 *
 * This is a stand-in. Per next-steps-site-brief.md, final imagery should be
 * real photography or Lummi stock-style images swapped in before launch —
 * see the "Open items" list in PROJECT-STATE.md.
 */
export function placeholderImage(seed: string, width = 800, height = 600) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}
