interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}
export function SectionHeader({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <div className={center ? "flex items-center justify-center gap-3" : "flex items-center gap-3"}>
          <span className="h-px w-8 bg-gold" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold font-medium">{eyebrow}</span>
          <span className="h-px w-8 bg-gold" />
        </div>
      )}
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-ink">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}