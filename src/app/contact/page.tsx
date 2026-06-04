import type { Metadata } from "next";

import { CtaButton } from "@/components/cta-button";
import { InfoCard } from "@/components/info-card";
import { PageHero } from "@/components/page-hero";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata(
  "Contact",
  "Get directions, call, message, or check opening hours for Cello Restaurant & Bar Ghana.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Directions, direct contact, and operating hours should be effortless."
        intro="The contact page owns the practical details: route planning, opening times, socials, WhatsApp, and fallback channels for guests already ready to move."
        actions={
          <>
            <CtaButton href={siteConfig.mapsHref} analyticsEvent="directions_click">
              Get Directions
            </CtaButton>
            <CtaButton href={siteConfig.whatsappHref} variant="secondary" analyticsEvent="whatsapp_click">
              WhatsApp Us
            </CtaButton>
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard title="Address" description={siteConfig.address} />
          <InfoCard title="Phone" description={siteConfig.phoneDisplay} />
          <InfoCard title="Email" description={siteConfig.email} />
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#151316] p-6 sm:p-8">
            <h2 className="font-display text-4xl text-white">Visit Cello</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-ink-muted)]">
              Launch business data can be swapped from a single configuration file later. The page structure already assumes a clear directions path, direct contact, and operating visibility for guests on mobile.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href={siteConfig.mapsHref} analyticsEvent="directions_click">
                Open Google Maps
              </CtaButton>
              <CtaButton href={siteConfig.phoneHref} variant="secondary" analyticsEvent="phone_click">
                Call the Venue
              </CtaButton>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h2 className="font-display text-4xl text-white">Hours</h2>
            <ul className="mt-6 space-y-4 text-sm text-[var(--color-ink-muted)]">
              {siteConfig.hours.map((entry) => (
                <li key={entry.label} className="flex items-center justify-between gap-4">
                  <span>{entry.label}</span>
                  <span className="text-white">{entry.value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-white/8 pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Socials
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {siteConfig.socialLinks.map((link) => (
                  <CtaButton key={link.label} href={link.href} variant="ghost">
                    {link.label}
                  </CtaButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
