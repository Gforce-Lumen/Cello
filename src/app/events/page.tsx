import type { Metadata } from "next";

import { CtaButton } from "@/components/cta-button";
import { EventCard } from "@/components/event-card";
import { PageHero } from "@/components/page-hero";
import { buildPageMetadata } from "@/lib/metadata";
import { events, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata(
  "Events",
  "Explore Cello's recurring event formats and route private or group interest into enquiry.",
  "/events",
);

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Programming should deepen the room's identity, not fracture it."
        intro="Recurring formats are presented with enough clarity to help guests decide whether they want a dinner booking, an events visit, or a private takeover conversation."
        actions={
          <>
            <CtaButton href="/venue" analyticsEvent="booking_click">
              Private Booking Enquiry
            </CtaButton>
            <CtaButton href={siteConfig.whatsappHref} variant="secondary" analyticsEvent="whatsapp_click">
              Ask on WhatsApp
            </CtaButton>
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.name} {...event} />
          ))}
        </div>
      </section>
    </>
  );
}
