"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { CtaButton } from "@/components/cta-button";

const navigationItems = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/venue", label: "Venue" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0c0b0d]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex flex-col">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.46em] text-[var(--color-accent)]">
            Accra
          </span>
          <span className="font-display text-[1.7rem] tracking-[0.06em] text-white">CELLO</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((page) => {
            const active = pathname === page.href;

            return (
              <Link
                key={page.href}
                href={page.href}
                className={`text-[0.72rem] uppercase tracking-[0.3em] transition ${
                  active ? "text-white" : "text-[var(--color-ink-muted)] hover:text-white"
                }`}
              >
                {page.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CtaButton href="/menu" variant="ghost" analyticsEvent="menu_click" className="min-h-10">
            View Menu
          </CtaButton>
          <CtaButton href="/booking" analyticsEvent="booking_click" className="min-h-10">
            Book a Table
          </CtaButton>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 px-4 text-[0.7rem] uppercase tracking-[0.3em] text-white lg:hidden"
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
            {navigationItems.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="text-sm uppercase tracking-[0.28em] text-[var(--color-ink-muted)] transition hover:text-white"
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
