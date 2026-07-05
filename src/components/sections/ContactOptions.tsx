import { Calendar, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import type { ContactOption } from "@/lib/types";

const iconMap = {
  booking: Calendar,
  email: Mail,
  phone: Phone,
} as const;

export function ContactOptions({ options }: { options: ContactOption[] }) {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2">
      <Reveal className="flex flex-col gap-6">
        {options.map((option) => {
          const Icon = iconMap[option.type];
          return (
            <div
              key={option.label}
              className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/10"
            >
              <Icon className="mt-1 shrink-0 text-gold" size={24} aria-hidden="true" />
              <div>
                <p className="font-heading text-lg font-semibold text-navy">{option.label}</p>
                <p className="mt-1 text-navy/70">{option.description}</p>
                {option.url && option.action && (
                  <a
                    href={option.url}
                    className="mt-2 inline-block font-semibold text-gold hover:underline"
                  >
                    {option.action}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </Reveal>

      <Reveal delay={0.1} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy/10">
        <ContactForm />
      </Reveal>
    </section>
  );
}
