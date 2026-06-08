"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigationItems = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/venue", label: "Venue" },
  { href: "/booking", label: "Book a Table" },
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(55, 40, 33, 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-8 py-5">
        <Link
          href="/"
          className="font-display text-[22px] font-semibold uppercase tracking-[0.2em] text-[#fbf4e9]"
        >
          CELLO
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navigationItems.map((page) => {
            return (
              <Link
                key={page.href}
                href={page.href}
                className="text-[12px] uppercase tracking-[0.15em] text-[#fbf4e9] opacity-90 transition-opacity duration-200 hover:opacity-60"
              >
                {page.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex flex-col gap-[5px] p-2 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-[#fbf4e9] transition-all duration-300 ${
              isOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-[#fbf4e9] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-[#fbf4e9] transition-all duration-300 ${
              isOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {isOpen ? (
        <div
          className="flex flex-col items-center gap-8 py-10 md:hidden"
          style={{ backgroundColor: "rgba(55, 40, 33, 0.98)" }}
        >
          {navigationItems.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="text-[13px] uppercase tracking-[0.2em] text-[#fbf4e9]"
              onClick={() => setIsOpen(false)}
            >
              {page.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
