import type { Metadata } from "next";

import { BookingForm } from "@/components/booking-form";
import { CtaButton } from "@/components/cta-button";
import { InfoCard } from "@/components/info-card";
import { PageHero } from "@/components/page-hero";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig, venuePackages } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata(
  "Venue / Private Bookings",
  "Enquire about private dining, celebrations, and hosted events at Cello.",
  "/venue",
);

export default function VenuePage() {
  return (
    <>
      <PageHero
        eyebrow="Private Bookings"
        title="The private-booking route needs its own promise, not a generic contact page."
        intro="This page is for hosted occasions with different expectations around privacy, pacing, and package structure. It should signal that Cello can stage those moments well."
        actions={
          <>
            <CtaButton href={siteConfig.whatsappHref} analyticsEvent="whatsapp_click">
              Discuss on WhatsApp
            </CtaButton>
            <CtaButton href={siteConfig.phoneHref} variant="secondary" analyticsEvent="phone_click">
              Call for Availability
            </CtaButton>
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 md:grid-cols-3">
          {venuePackages.map((item) => (
            <InfoCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>

        <BookingForm
          enquiryType="private-booking"
          heading="Private Booking Enquiry"
          description="Capture event size, preferred date, and context now. Operational fulfillment can be connected to the final business workflow later."
          buttonLabel="Send Private Enquiry"
        />
      </section>
    </>
  );
}
