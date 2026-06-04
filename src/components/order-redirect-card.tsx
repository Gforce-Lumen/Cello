"use client";

import { useEffect, useState } from "react";

import { trackAnalyticsEvent } from "@/lib/analytics";

type OrderRedirectCardProps = {
  href: string;
};

export function OrderRedirectCard({ href }: OrderRedirectCardProps) {
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [paused, setPaused] = useState(false);

  const handleRedirectNow = () => {
    trackAnalyticsEvent("order_click", "Continue to Odoo ordering");
    window.location.assign(href);
  };

  useEffect(() => {
    if (paused) {
      return;
    }

    if (secondsLeft <= 0) {
      trackAnalyticsEvent("order_click", "Continue to Odoo ordering");
      window.location.assign(href);
      return;
    }

    const timer = window.setTimeout(() => {
      setSecondsLeft((current) => current - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [href, paused, secondsLeft]);

  return (
    <section className="rounded-[2rem] border border-[var(--color-accent)]/25 bg-[linear-gradient(180deg,rgba(195,143,89,0.15),rgba(255,255,255,0.04))] p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-accent)]">
        Odoo Handoff
      </p>
      <h2 className="mt-4 font-display text-4xl text-white">You are moving into the live table-ordering flow.</h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-ink-muted)]">
        This website stays focused on discovery. Actual table-side ordering happens inside Odoo,
        which means menu updates, availability, and order handling stay in one operational system.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={handleRedirectNow}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-6 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-ink-strong)] transition hover:bg-[var(--color-accent-soft)]"
        >
          Continue Now
        </button>
        <button
          type="button"
          onClick={() => setPaused((current) => !current)}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white/35"
        >
          {paused ? "Resume Redirect" : "Pause Redirect"}
        </button>
        <p className="text-sm text-[var(--color-sand)]">
          {paused ? "Redirect paused." : `Auto-redirect in ${secondsLeft}s.`}
        </p>
      </div>
    </section>
  );
}
