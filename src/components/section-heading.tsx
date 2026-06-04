type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-none text-white sm:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-7 text-[var(--color-ink-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
