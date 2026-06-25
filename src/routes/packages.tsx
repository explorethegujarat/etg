import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { packages } from "@/data/packages";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";

const CATEGORIES = ["All", "Wildlife", "Family", "Couple", "Weekend", "Customized"] as const;

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Gujarat Tour Packages — Wildlife, Family, Couple & Weekend | Explore The Gujarat" },
      { name: "description", content: "Premium Gujarat tour packages — Gir wildlife safari, Somnath Dwarka pilgrimage, Kutch romance, Saputara weekends and customized luxury journeys." },
      { property: "og:title", content: "Gujarat Tour Packages — Explore The Gujarat" },
      { property: "og:description", content: "Signature itineraries for every kind of traveller." },
    ],
  }),
  component: Page,
});

function Page() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const list = cat === "All" ? packages : packages.filter((p) => p.category === cat);
  return (
    <>
      <PageHero eyebrow="Tour Packages" title="Signature Gujarat Itineraries" subtitle="Hand-crafted journeys for wildlife, heritage, romance and rest." />
      <section className="py-12 sm:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 h-10 rounded-full text-sm font-medium border transition ${cat === c ? "bg-gradient-gold border-gold text-primary shadow-gold" : "border-border text-muted-foreground hover:border-gold hover:text-ink"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <article key={p.name} className="rounded-xl border border-border bg-card shadow-card overflow-hidden flex flex-col">
                <div className="p-7 flex-1">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold-deep">{p.category}</span>
                  <h3 className="mt-2 font-display text-2xl text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.duration} • {p.destinations.join(" → ")}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />{h}</li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border p-6 flex items-center justify-between bg-secondary/40">
                  <div>
                    <div className="text-xs text-muted-foreground">From</div>
                    <div className="font-display text-2xl text-ink">₹{p.price.toLocaleString("en-IN")}</div>
                  </div>
                  <Button asChild variant="royal" size="sm"><Link to="/contact">Book Now</Link></Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}