import Link from "next/link";

import { pageDefinitions, primaryCtas, siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#0b0a0c]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 pb-28 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8 lg:pb-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-accent)]">
            {siteConfig.shortName}
          </p>
          <h2 className="mt-4 font-display text-4xl text-white">
            Cello moves from dinner to late-night without losing its composure.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-ink-muted)]">
            Built as a public-facing discovery layer with menu, reservations, table-side ordering,
            events, directions, and private booking enquiries wired from a single content model.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {primaryCtas.slice(0, 2).map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className="text-sm uppercase tracking-[0.22em] text-[var(--color-sand)] transition hover:text-white"
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Navigate
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-[var(--color-ink-muted)]">
            {pageDefinitions.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="transition hover:text-white">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-7">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-ink-muted)]">
              <li>{siteConfig.address}</li>
              <li>
                <a href={siteConfig.phoneHref} className="transition hover:text-white">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
              Hours
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-[var(--color-ink-muted)]">
              {siteConfig.hours.map((entry) => (
                <li key={entry.label} className="flex items-center justify-between gap-4">
                  <span>{entry.label}</span>
                  <span>{entry.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
