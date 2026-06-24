import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Car, Users, Briefcase } from "lucide-react";

export const Route = createFileRoute("/cabs")({
  head: () => ({
    meta: [
      { title: "Cab & Taxi Booking in Gujarat — Sedan, SUV, Tempo Traveller | Explore The Gujarat" },
      { name: "description", content: "Book premium cabs and taxis across Gujarat. Sedan, SUV and tempo traveller options with experienced local drivers." },
      { property: "og:title", content: "Cab Booking — Explore The Gujarat" },
      { property: "og:description", content: "Sedan, SUV, tempo traveller — premium drivers across Gujarat." },
    ],
  }),
  component: Page,
});

const fleet = [
  { icon: Car, name: "Sedan", capacity: "1–4 passengers", details: "Dzire / Etios — comfortable city & short-distance travel." },
  { icon: Users, name: "SUV", capacity: "1–6 passengers", details: "Ertiga / Innova — long-distance comfort with luggage space." },
  { icon: Briefcase, name: "Tempo Traveller", capacity: "1–12 passengers", details: "Premium 12-seater for families and group tours." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Cab Booking" title="Drive across Gujarat in comfort" subtitle="Verified vehicles, courteous drivers and transparent pricing — anywhere in Gujarat." />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="grid gap-5">
              {fleet.map((f) => (
                <div key={f.name} className="flex gap-5 p-6 rounded-xl border border-border bg-card shadow-card">
                  <div className="h-14 w-14 grid place-items-center rounded-lg bg-gradient-gold text-primary shrink-0"><f.icon className="size-6" /></div>
                  <div>
                    <h3 className="font-display text-xl text-ink">{f.name}</h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-deep mt-1">{f.capacity}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{f.details}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-xl bg-gradient-royal text-primary-foreground">
              <h3 className="font-display text-xl text-gold">What's included</h3>
              <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
                <li>• Driver, fuel and tolls</li>
                <li>• 24×7 support throughout your trip</li>
                <li>• Verified, well-maintained vehicles</li>
                <li>• Transparent kilometre-based pricing</li>
              </ul>
            </div>
          </div>
          <aside className="rounded-2xl border border-border bg-card shadow-card p-8 lg:sticky lg:top-24 self-start">
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold-deep">Cab Enquiry</span>
            <h3 className="mt-2 font-display text-2xl text-ink">Book Your Ride</h3>
            <div className="mt-6">
              <EnquiryForm
                whatsAppPrefix="Cab Booking Enquiry"
                fields={[
                  { name: "pickup", label: "Pickup Location", required: true },
                  { name: "drop", label: "Drop Location", required: true },
                  { name: "date", label: "Date", type: "date", required: true },
                  { name: "vehicle", label: "Vehicle Type", type: "select", required: true, options: ["Sedan", "SUV", "Tempo Traveller"] },
                  { name: "contact", label: "Contact Number", type: "tel", required: true },
                ]}
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}