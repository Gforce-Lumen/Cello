import type { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  description: string;
  meta?: ReactNode;
};

export function InfoCard({ title, description, meta }: InfoCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <h3 className="font-display text-2xl text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-ink-muted)]">
        {description}
      </p>
      {meta ? <div className="mt-5 text-sm text-[var(--color-sand)]">{meta}</div> : null}
    </article>
  );
}
