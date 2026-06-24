interface Props { eyebrow?: string; title: string; subtitle?: string; }
export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="bg-gradient-royal text-primary-foreground border-b border-gold/20">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28 text-center">
        {eyebrow && (
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold">{eyebrow}</span>
            <span className="h-px w-8 bg-gold" />
          </div>
        )}
        <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl mx-auto text-primary-foreground/75 leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}