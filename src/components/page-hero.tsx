import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  actions?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  actions,
  aside,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(195,143,89,0.24),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(19rem,1fr)] lg:px-8 lg:py-28">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.92] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--color-ink-muted)] sm:text-lg">
            {intro}
          </p>
          {actions ? <div className="flex flex-wrap gap-3 pt-2">{actions}</div> : null}
        </div>
        {aside ? (
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            {aside}
          </div>
        ) : null}
      </div>
    </section>
  );
}
