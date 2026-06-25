import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import girImg from "@/assets/dest-gir.jpeg";
import { ShieldCheck, Clock, Camera, TreePine } from "lucide-react";

export const Route = createFileRoute("/safari")({
  head: () => ({
    meta: [
      { title: "Gir Jungle Safari & Devaliya Safari Booking | Explore The Gujarat" },
      { name: "description", content: "Book Gir jungle safari and Devaliya safari permits. Trusted local experts, guaranteed slots, premium morning drives in the only home of the Asiatic Lion." },
      { property: "og:title", content: "Gir Safari Booking — Explore The Gujarat" },
      { property: "og:description", content: "Permits, premium gypsies and expert naturalists." },
    ],
  }),
  component: Page,
});

const rules = [
  "Carry valid photo ID — same as the one used during booking.",
  "Arrive at Sasan Gir / Devaliya gate 30 minutes before slot time.",
  "Wear earthy colours; avoid bright clothing and perfumes.",
  "Stay seated inside the gypsy at all times.",
  "Plastic, food, music and alcohol are strictly prohibited.",
  "Respect wildlife — never feed, chase or tease animals.",
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Gir Safari" title="Meet the King of Gujarat" subtitle="Confirmed booking for Gir Jungle Safari and Devaliya Safari — the only home of the Asiatic Lion." />
      <section className="py-12 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            <div className="overflow-hidden rounded-2xl shadow-royal aspect-[4/3]">
              <img src={girImg} alt="Asiatic lion in Gir forest" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div>
              <h2 className="font-display text-3xl text-ink">Gir Jungle Safari</h2>
              <div className="gold-divider my-4" />
              <p className="text-muted-foreground leading-relaxed">A 3-hour open-gypsy drive through one of the eight notified routes inside Gir National Park. Spot lions, leopards, sambar deer, hyenas and over 300 bird species accompanied by an expert naturalist.</p>
              <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                {[["Slots", "06:00, 09:00, 15:00"], ["Duration", "3 hours"], ["Vehicle", "Open 4-6-8 seater Gypsy"], ["Guide", "Trained Naturalist/G2"]].map(([k, v]) => (
                  <div key={k} className="rounded-lg border border-border p-4"><div className="text-[10px] uppercase tracking-[0.2em] text-gold-deep">{k}</div><div className="mt-1 font-medium text-ink">{v}</div></div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl text-ink">Devaliya Safari</h2>
              <div className="gold-divider my-4" />
              <p className="text-muted-foreground leading-relaxed">A 20-minute interpretation-zone bus safari with near-guaranteed sightings of lions, leopards and antelopes. Perfect for families with children or when jungle safari permits are sold out.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-ink">Safari Rules</h2>
              <div className="gold-divider my-4" />
              <ul className="space-y-2 text-sm text-muted-foreground">
                {rules.map((r) => (<li key={r} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />{r}</li>))}
              </ul>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[[ShieldCheck, "Permit Assured"], [Clock, "On-time Slots"], [Camera, "Photo Stops"], [TreePine, "Expert Guide"]].map(([Icon, label], i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-secondary/50">
                  <Icon className="size-5 mx-auto text-gold" />
                  <div className="mt-2 text-xs font-medium text-ink">{label as string}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-card shadow-card p-6 sm:p-8 lg:sticky lg:top-24">
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold-deep">Booking Enquiry</span>
            <h3 className="mt-2 font-display text-2xl text-ink">Reserve Your Safari</h3>
            <p className="mt-2 text-sm text-muted-foreground">Share details — we confirm availability within 24 hours.</p>
            <div className="mt-6">
              <EnquiryForm
                whatsAppPrefix="Gir Safari Booking Enquiry"
                fields={[
                  { name: "name", label: "Name", required: true },
                  { name: "mobile", label: "Mobile Number", type: "tel", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "guests", label: "Number of Guests", type: "number", required: true },
                  { name: "date", label: "Travel Date", type: "date", required: true },
                  { name: "safari", label: "Safari Type", type: "select", required: true, options: ["Gir Jungle Safari", "Devaliya Safari", "Both"] },
                  { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about your group, special needs, etc." },
                ]}
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}