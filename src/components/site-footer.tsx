import Link from "next/link";

import { siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#0b0a0c]">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[var(--color-accent)]">
            {siteConfig.city}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-white sm:text-5xl">
            Cello holds dinner, drinks, and late evenings in one warm room.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-ink-muted)]">
            Minimal navigation, warm imagery, and clear booking paths now. Final photography and
            confirmed venue details can drop into the same structure later.
          </p>
          <div className="mt-7 flex flex-wrap gap-5 text-[0.72rem] uppercase tracking-[0.28em] text-[var(--color-sand)]">
            <Link href="/menu" className="transition hover:text-white">
              View Menu
            </Link>
            <Link href="/booking" className="transition hover:text-white">
              Reserve
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white">
            Navigate
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-[var(--color-ink-muted)]">
            {[
              { href: "/", label: "Home" },
              { href: "/menu", label: "Menu" },
              { href: "/events", label: "Events" },
              { href: "/venue", label: "Private Venue" },
              { href: "/contact", label: "Contact" },
            ].map((page) => (
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
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white">
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
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white">
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
