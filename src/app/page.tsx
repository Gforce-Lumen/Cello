import type { Metadata } from "next";

import { CtaButton } from "@/components/cta-button";
import { EventCard } from "@/components/event-card";
import { GalleryTile } from "@/components/gallery-tile";
import { InfoCard } from "@/components/info-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildPageMetadata } from "@/lib/metadata";
import {
  events,
  galleryMoments,
  homeHighlights,
  menuCategories,
  pageDefinitions,
  primaryCtas,
  siteConfig,
} from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata(
  "Home",
  "Premium dining, drinks, private gatherings, and Odoo-powered table ordering for Cello Restaurant & Bar Ghana.",
  "/",
);

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="Accra Evenings"
        title="A polished dinner room that turns warmer as the night deepens."
        intro="Cello Restaurant & Bar Ghana is designed around atmosphere, measured service, and clean conversion paths: menu discovery, reservations, private enquiries, directions, and table-side ordering."
        actions={
          <>
            {primaryCtas.map((cta, index) => (
              <CtaButton
                key={cta.label}
                href={cta.href}
                analyticsEvent={cta.event}
                variant={index === 0 ? "primary" : "secondary"}
              >
                {cta.label}
              </CtaButton>
            ))}
          </>
        }
        aside={
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-accent)]">
              Launch Structure
            </p>
            <ul className="space-y-4 text-sm leading-7 text-[var(--color-ink-muted)]">
              {pageDefinitions.slice(0, 4).map((page) => (
                <li key={page.href}>
                  <span className="block text-white">{page.label}</span>
                  <span>{page.responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {homeHighlights.map((item) => (
            <InfoCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Menu Preview"
          title="Food for a full evening, not just a single moment."
          description="The menu page carries structured categories and a PDF fallback, but the homepage should already tell guests what kind of room this is: shareable openings, composed mains, and a cocktail list built for the second half of the night."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {menuCategories.map((category) => (
            <InfoCard
              key={category.name}
              title={category.name}
              description={category.description}
              meta={
                <ul className="space-y-2">
                  {category.items.slice(0, 2).map((item) => (
                    <li key={item.name} className="flex items-center justify-between gap-3">
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
        <div className="mt-8">
          <CtaButton href="/menu" analyticsEvent="menu_click">
            View Full Menu
          </CtaButton>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-18 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <SectionHeading
            eyebrow="Reservations"
            title="Put the primary CTA above the fold and keep the booking path calm."
            description="The reservation route owns the form, but the homepage still needs a direct invitation with clear alternatives: call, WhatsApp, or directions for guests already on the move."
          />
          <div className="rounded-[2rem] border border-white/10 bg-[#151316] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <InfoCard
                title="Book a Table"
                description="For dinner plans, date nights, and hosted group tables."
              />
              <InfoCard
                title="Private Enquiry"
                description="For birthdays, buyouts, and room-specific hosting needs."
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaButton href={siteConfig.bookingHref} analyticsEvent="booking_click">
                Book a Table
              </CtaButton>
              <CtaButton
                href={siteConfig.whatsappHref}
                variant="secondary"
                analyticsEvent="whatsapp_click"
              >
                WhatsApp Enquiry
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Events"
          title="Programming that extends the room instead of distracting from it."
          description="Events are positioned as part of the hospitality rhythm. The page lists recurring formats, while this preview gives enough texture to move interested guests deeper."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.name} {...event} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery / Experience"
          title="Sell the feeling before the guest reads every detail."
          description="The Marlund-like pacing depends on atmosphere. Since final photography may arrive later, the layout and image treatment still need to carry premium intent from day one."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {galleryMoments.map((moment) => (
            <GalleryTile key={moment.title} {...moment} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(195,143,89,0.15),rgba(255,255,255,0.04))] p-8 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-accent)]">
              Final CTA
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl leading-none text-white">
              One room, multiple conversion paths, and no structural uncertainty left for later phases.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-ink-muted)]">
              The core information architecture is already fixed in code, and the launch fields can be
              replaced with confirmed business data later without changing the layout contract.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="/booking" analyticsEvent="booking_click">
                Book a Table
              </CtaButton>
              <CtaButton href="/contact" variant="secondary" analyticsEvent="directions_click">
                Plan Your Visit
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
