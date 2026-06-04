type EventCardProps = {
  name: string;
  date: string;
  time: string;
  description: string;
};

export function EventCard({ name, date, time, description }: EventCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-[#151315] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
        <span>{date}</span>
        <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
        <span>{time}</span>
      </div>
      <h3 className="mt-5 font-display text-3xl text-white">{name}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-ink-muted)]">{description}</p>
    </article>
  );
}
