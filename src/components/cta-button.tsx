"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import type { AnalyticsEventName } from "@/lib/analytics";
import { trackAnalyticsEvent } from "@/lib/analytics";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  analyticsEvent?: AnalyticsEventName;
  className?: string;
};

const variantClasses = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-ink-strong)] hover:bg-[var(--color-accent-soft)]",
  secondary:
    "border border-white/20 bg-white/5 text-white hover:border-[var(--color-accent)] hover:bg-white/10",
  ghost:
    "border border-[var(--color-accent)]/30 bg-transparent text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10",
} as const;

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  analyticsEvent,
  className = "",
}: CtaButtonProps) {
  const sharedClassName = `inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition ${variantClasses[variant]} ${className}`;

  const handleClick = () => {
    if (analyticsEvent) {
      const label = typeof children === "string" ? children : href;
      trackAnalyticsEvent(analyticsEvent, label);
    }
  };

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={sharedClassName}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClassName} onClick={handleClick}>
      {children}
    </Link>
  );
}
