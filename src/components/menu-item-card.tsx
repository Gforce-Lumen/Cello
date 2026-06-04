type MenuItemCardProps = {
  name: string;
  price: string;
  detail: string;
};

export function MenuItemCard({ name, price, detail }: MenuItemCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl text-white">{name}</h3>
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {price}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-[var(--color-ink-muted)]">{detail}</p>
    </article>
  );
}
