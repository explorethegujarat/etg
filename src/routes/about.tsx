import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ShieldCheck, MapPinned, HeartHandshake, Sparkles, Award, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Explore The Gujarat | Local Gujarat Travel Experts" },
      { name: "description", content: "Explore The Gujarat creates memorable Gujarat travel experiences through local expertise, trusted services and personalised royal hospitality." },
      { property: "og:title", content: "About Explore The Gujarat" },
      { property: "og:description", content: "Trusted local Gujarat travel experts since day one." },
    ],
  }),
  component: Page,
});

const values = [
  { icon: ShieldCheck, t: "Verified Assistance", d: "Every guide, driver and partner is vetted personally." },
  { icon: MapPinned, t: "Local Experts", d: "Born and raised in Gujarat — we know stories no map shows." },
  { icon: HeartHandshake, t: "Personal Hospitality", d: "Every itinerary is a conversation, not a checkout." },
  { icon: Sparkles, t: "Royal Comfort", d: "Luxury stays, premium vehicles and curated experiences." },
  { icon: Award, t: "Best-rate Promise", d: "Direct partnerships mean honest pricing — no surprises." },
  { icon: Users, t: "1,200+ Travellers", d: "From honeymooners to wildlife photographers — we've hosted them all." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Crafting Gujarat journeys, with heart" />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-lg leading-relaxed text-foreground/80">
            <span className="font-display text-2xl text-ink block mb-4">Explore The Gujarat</span>
            is dedicated to creating memorable Gujarat travel experiences by combining local expertise, trusted services and personalised hospitality. From the roar of the Asiatic Lion in Gir to the silent moon over the White Rann, we design journeys that feel both regal and effortlessly easy.
          </p>
          <div className="gold-divider mx-auto my-8" />
          <p className="text-muted-foreground leading-relaxed">
            We are a homegrown Gujarat travel company — proudly local, fluent in every dialect of hospitality. Every trip is hand-built by people who'd take it themselves.
          </p>
        </div>
      </section>
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.t} className="p-7 rounded-xl bg-card shadow-card border border-border">
              <div className="h-12 w-12 grid place-items-center rounded-lg bg-gradient-gold text-primary"><v.icon className="size-5" /></div>
              <h3 className="mt-5 font-display text-xl text-ink">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl lg:text-4xl">Let's plan your royal Gujarat story</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="gold" size="lg"><Link to="/contact">Start Planning</Link></Button>
            <Button asChild variant="goldOutline" size="lg"><Link to="/packages">Browse Packages</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}