import type { Metadata } from "next";

import { CtaButton } from "@/components/cta-button";
import { InfoCard } from "@/components/info-card";
import { PageHero } from "@/components/page-hero";
import { buildPageMetadata } from "@/lib/metadata";
import { homeHighlights } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata(
  "About",
  "Learn how Cello Restaurant & Bar Ghana positions dining, atmosphere, and service.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Cello is positioned around control, atmosphere, and a room that earns repeat visits."
        intro="From first principles, the brand story needs to explain why this place exists, how it behaves, and what kind of guest experience it protects across dinner, drinks, and celebrations."
        actions={
          <>
            <CtaButton href="/booking" analyticsEvent="booking_click">
              Reserve a Table
            </CtaButton>
            <CtaButton href="/contact" variant="secondary" analyticsEvent="directions_click">
              Contact the Venue
            </CtaButton>
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {homeHighlights.map((item) => (
            <InfoCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>
    </>
  );
}
