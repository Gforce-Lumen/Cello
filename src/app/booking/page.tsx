import type { Metadata } from "next";

import { BookingForm } from "@/components/booking-form";
import { CtaButton } from "@/components/cta-button";
import { InfoCard } from "@/components/info-card";
import { PageHero } from "@/components/page-hero";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata(
  "Booking / Reservations",
  "Reserve a table, reach Cello on WhatsApp, or call directly for restaurant bookings.",
  "/booking",
);

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="One dominant action: secure the table."
        intro="The booking page is intentionally narrow. It captures reservation intent first, then offers WhatsApp and phone as secondary paths for guests who want immediate confirmation."
        actions={
          <>
            <CtaButton href={siteConfig.whatsappHref} analyticsEvent="whatsapp_click">
              WhatsApp Us
            </CtaButton>
            <CtaButton href={siteConfig.phoneHref} variant="secondary" analyticsEvent="phone_click">
              Call the Team
            </CtaButton>
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 lg:grid-cols-3">
          <InfoCard title="Preferred timing" description="Dinner windows, celebration timing, and table pacing can all be captured here." />
          <InfoCard title="Submit states" description="Pending, success, and failure messaging are already present, so the UI contract is stable." />
          <InfoCard title="Fallback paths" description="If a guest wants faster contact, WhatsApp and phone stay visible without taking over the page." />
        </div>
        <BookingForm
          enquiryType="reservation"
          heading="Reservation Enquiry"
          description="Use this launch form to collect high-intent enquiries now. It can be connected to email, CRM, or Odoo later without changing the front-end structure."
          buttonLabel="Send Enquiry"
        />
      </section>
    </>
  );
}
