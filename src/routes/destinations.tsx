import { createFileRoute, Link } from "@tanstack/react-router";
import { destinations } from "@/data/destinations";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Gir, Somnath, Dwarka, Kutch, Saputara, Diu | Explore The Gujarat" },
      { name: "description", content: "Curated Gujarat destinations: Gir wildlife, Somnath & Dwarka spiritual, Kutch white desert, Saputara hills and Diu beaches." },
      { property: "og:title", content: "Gujarat Destinations — Explore The Gujarat" },
      { property: "og:description", content: "Six unmissable Gujarat destinations, curated by local experts." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Destinations" title="The Royal Map of Gujarat" subtitle="From the roar of the Asiatic lion to the silence of a white desert moon — six landscapes that define Gujarat." />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid gap-12">
          {destinations.map((d, i) => (
            <article key={d.slug} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
              <div className="overflow-hidden rounded-2xl shadow-royal aspect-[4/3] [direction:ltr]">
                <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="[direction:ltr]">
                <span className="text-[11px] tracking-[0.3em] uppercase text-gold-deep">{d.tagline}</span>
                <h2 className="mt-3 font-display text-3xl lg:text-4xl text-ink">{d.name}</h2>
                <div className="gold-divider my-5" />
                <p className="text-muted-foreground leading-relaxed">{d.description}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                  {d.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />{h}</li>
                  ))}
                </ul>
                <div className="mt-8 flex gap-3">
                  <Button asChild variant="royal"><Link to="/packages">View Packages</Link></Button>
                  <Button asChild variant="goldOutline"><Link to="/contact">Plan a Trip</Link></Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}