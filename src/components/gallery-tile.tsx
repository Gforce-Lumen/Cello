type GalleryTileProps = {
  title: string;
  subtitle: string;
  tone: string;
};

export function GalleryTile({ title, subtitle, tone }: GalleryTileProps) {
  return (
    <article
      className={`group relative min-h-80 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${tone} p-6`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_45%)] opacity-70 transition group-hover:opacity-100" />
      <div className="relative flex h-full flex-col justify-end">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sand)]">
          Gallery
        </p>
        <h3 className="mt-3 font-display text-4xl text-white">{title}</h3>
        <p className="mt-3 max-w-sm text-sm leading-7 text-white/78">{subtitle}</p>
      </div>
    </article>
  );
}
