import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import type { SiteSettings } from "@/lib/types";

export function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
        <div>
          <p className="font-heading text-xl font-semibold">{settings.name}</p>
          <p className="mt-3 max-w-xs text-sm text-white/70">{settings.footer.tagline}</p>
          <div className="mt-4 flex gap-4">
            {settings.social.facebook && (
              <a
                href={settings.social.facebook}
                aria-label={`${settings.name} on Facebook`}
                className="text-white/70 transition-colors hover:text-gold"
              >
                <FacebookIcon width={20} height={20} />
              </a>
            )}
            {settings.social.instagram && (
              <a
                href={settings.social.instagram}
                aria-label={`${settings.name} on Instagram`}
                className="text-white/70 transition-colors hover:text-gold"
              >
                <InstagramIcon width={20} height={20} />
              </a>
            )}
          </div>
        </div>

        <div className="text-sm text-white/70">
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-3">{settings.contact.email}</p>
          <p>{settings.contact.phone}</p>
          <p>{settings.contact.address}</p>
          <p>{settings.contact.hours}</p>
        </div>

        <NewsletterSignup />
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/50">
        {settings.footer.copyright}
      </div>
    </footer>
  );
}
