import type { Metadata } from "next";

import { CtaButton } from "@/components/cta-button";
import { MenuItemCard } from "@/components/menu-item-card";
import { PageHero } from "@/components/page-hero";
import { buildPageMetadata } from "@/lib/metadata";
import { menuCategories, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata(
  "Menu",
  "Browse signature dishes, cocktails, and the downloadable Cello menu PDF.",
  "/menu",
);

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Menu"
        title="Structured browsing first, PDF fallback second."
        intro="Guests should be able to scan categories quickly on mobile, understand the room's pricing posture, and still reach a downloadable menu when they want the full artifact."
        actions={
          <>
            <CtaButton href={siteConfig.menuPdfHref} analyticsEvent="menu_click">
              Open Menu PDF
            </CtaButton>
            <CtaButton href="/booking" variant="secondary" analyticsEvent="booking_click">
              Book After Browsing
            </CtaButton>
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-10">
          {menuCategories.map((category) => (
            <section key={category.name} className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 sm:p-8">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-accent)]">
                  Category
                </p>
                <h2 className="mt-3 font-display text-4xl text-white">{category.name}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-ink-muted)]">
                  {category.description}
                </p>
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {category.items.map((item) => (
                  <MenuItemCard key={item.name} {...item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
