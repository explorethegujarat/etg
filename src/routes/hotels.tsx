import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Wifi, Coffee, Waves, UtensilsCrossed, Car, Star } from "lucide-react";
import girImg from "@/assets/dest-gir.jpeg";
import somnathImg from "@/assets/dest-somnath.jpg";
import kutchImg from "@/assets/dest-kutch.jpg";
import diuImg from "@/assets/dest-diu.jpg";
import saputaraImg from "@/assets/dest-saputara.jpg";
import dwarkaImg from "@/assets/dest-dwarka.jpg";

export const Route = createFileRoute("/hotels")({
  head: () => ({
    meta: [
      { title: "Hotels & Resorts in Gujarat — Luxury Stays | Explore The Gujarat" },
      { name: "description", content: "Hand-picked luxury hotels and resorts across Gir, Somnath, Dwarka, Kutch, Diu and Saputara. Best rates, verified properties." },
      { property: "og:title", content: "Hotels & Resorts — Explore The Gujarat" },
      { property: "og:description", content: "Curated luxury accommodation across Gujarat." },
    ],
  }),
  component: Page,
});

const hotels = [
  { name: "Gir Pride Resort", city: "Gir / Sasan", stars: 5, img: girImg, blurb: "Premium safari resort with private cottages and infinity pool." },
  { name: "Hotel Sukh Sagar", city: "Somnath", stars: 5, img: somnathImg, blurb: "Sea-facing luxury rooms steps away from the temple aarti." },
  { name: "Rann Royal Tents", city: "Kutch — Dhordo", stars: 5, img: kutchImg, blurb: "Curated luxury tent stay during Rann Utsav with cultural evenings." },
  { name: "Diu Beach Retreat", city: "Diu", stars: 4, img: diuImg, blurb: "Boutique seaside resort with private beach access and spa." },
  { name: "Saputara Hill Residency", city: "Saputara", stars: 4, img: saputaraImg, blurb: "Hill-top retreat with valley views and lake-side dining." },
  { name: "Dwarka Heritage Inn", city: "Dwarka", stars: 4, img: dwarkaImg, blurb: "Heritage-styled stay near Dwarkadhish temple and the harbour." },
];

const amenities = [Wifi, Coffee, Waves, UtensilsCrossed, Car];

function Page() {
  return (
    <>
      <PageHero eyebrow="Hotels & Resorts" title="Where Royalty Rests" subtitle="Verified luxury and heritage stays across every Gujarat destination — booked at our partner rates." />
      <section className="py-12 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-8 md:grid-cols-2">
          {hotels.map((h) => (
            <article key={h.name} className="rounded-2xl overflow-hidden border border-border bg-card shadow-card grid md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto"><img src={h.img} alt={h.name} loading="lazy" className="h-full w-full object-cover" /></div>
              <div className="p-7 flex flex-col">
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: h.stars }).map((_, i) => <Star key={i} className="size-3.5 fill-gold" />)}
                </div>
                <h3 className="mt-2 font-display text-2xl text-ink">{h.name}</h3>
                <p className="text-xs uppercase tracking-[0.25em] text-gold-deep mt-1">{h.city}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{h.blurb}</p>
                <div className="mt-4 flex gap-3 text-muted-foreground">
                  {amenities.map((Ic, i) => <Ic key={i} className="size-4" />)}
                </div>
                <div className="mt-auto pt-6">
                  <Button asChild variant="royal" size="sm"><Link to="/contact">Enquire Now</Link></Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}