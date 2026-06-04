import type { Metadata } from "next";

import { CtaButton } from "@/components/cta-button";
import { GalleryTile } from "@/components/gallery-tile";
import { PageHero } from "@/components/page-hero";
import { buildPageMetadata } from "@/lib/metadata";
import { galleryMoments } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata(
  "Gallery / Experience",
  "Preview Cello's dining atmosphere, bar energy, and private-room mood.",
  "/gallery",
);

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Visual rhythm matters before the final photography set arrives."
        intro="This page uses a premium grid and image treatment so the site still feels intentional even while launch assets are being finalized."
        actions={
          <>
            <CtaButton href="/booking" analyticsEvent="booking_click">
              Book the Experience
            </CtaButton>
            <CtaButton href="/events" variant="secondary">
              See Events
            </CtaButton>
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {galleryMoments.map((moment) => (
            <GalleryTile key={moment.title} {...moment} />
          ))}
        </div>
      </section>
    </>
  );
}
