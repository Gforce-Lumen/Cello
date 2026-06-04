"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { CtaButton } from "@/components/cta-button";
import { pageDefinitions } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0f0d10]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-col">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[var(--color-accent)]">
            Cello
          </span>
          <span className="font-display text-2xl text-white">Restaurant & Bar</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {pageDefinitions.map((page) => {
            const active = pathname === page.href;

            return (
              <Link
                key={page.href}
                href={page.href}
                className={`text-sm uppercase tracking-[0.22em] transition ${
                  active ? "text-white" : "text-[var(--color-ink-muted)] hover:text-white"
                }`}
              >
                {page.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CtaButton href="/menu" variant="ghost" analyticsEvent="menu_click">
            View Menu
          </CtaButton>
          <CtaButton href="/booking" analyticsEvent="booking_click">
            Book a Table
          </CtaButton>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 text-sm uppercase tracking-[0.24em] text-white lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/8 bg-[#121013] px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {pageDefinitions.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="text-base uppercase tracking-[0.2em] text-[var(--color-ink-muted)] transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {page.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <CtaButton href="/booking" analyticsEvent="booking_click">
              Book a Table
            </CtaButton>
            <CtaButton href="/menu" variant="secondary" analyticsEvent="menu_click">
              View Menu
            </CtaButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
