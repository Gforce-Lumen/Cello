import type { Metadata } from "next";

import { CtaButton } from "@/components/cta-button";
import { OrderRedirectCard } from "@/components/order-redirect-card";
import { PageHero } from "@/components/page-hero";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata(
  "Order at Table",
  "Move from the public website into Cello's Odoo-powered table ordering flow with a clear redirect.",
  "/order-at-table",
);

export default function OrderAtTablePage() {
  return (
    <>
      <PageHero
        eyebrow="Order at Table"
        title="The handoff is explicit so guests are never confused about where ordering happens."
        intro="The website is the discovery layer. Odoo remains the operational source of truth for live ordering, availability, and service execution."
        actions={
          <CtaButton href={siteConfig.orderHref} analyticsEvent="order_click">
            Continue to Odoo
          </CtaButton>
        }
      />

      <div className="mx-auto max-w-7xl px-5 py-18 sm:px-6 lg:px-8">
        <OrderRedirectCard href={siteConfig.orderHref} />
      </div>
    </>
  );
}
