import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Explore The Gujarat | +91 8980 200 401" },
      { name: "description", content: "Talk to Gujarat travel experts. Call +91 8980 200 401, WhatsApp us or send an enquiry — we reply within 24 hours." },
      { property: "og:title", content: "Contact Explore The Gujarat" },
      { property: "og:description", content: "Call, WhatsApp or message your Gujarat travel concierge." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Speak with a Gujarat travel expert" subtitle="We typically respond within an hour during business hours — and always within 24." />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <a href="tel:+918980200401" className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card shadow-card hover:border-gold transition">
              <div className="h-12 w-12 grid place-items-center rounded-lg bg-gradient-gold text-primary"><Phone className="size-5" /></div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-gold-deep">Phone</div>
                <div className="font-display text-xl text-ink mt-1">+91 8980 200 401</div>
                <div className="text-sm text-muted-foreground mt-1">Mon–Sat · 9:00 am – 9:00 pm IST</div>
              </div>
            </a>
            <a href="https://wa.me/918980200401" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card shadow-card hover:border-gold transition">
              <div className="h-12 w-12 grid place-items-center rounded-lg bg-gradient-gold text-primary"><MessageCircle className="size-5" /></div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-gold-deep">WhatsApp</div>
                <div className="font-display text-xl text-ink mt-1">Chat instantly</div>
                <div className="text-sm text-muted-foreground mt-1">Fastest way to get a custom quote.</div>
              </div>
            </a>
            <a href="mailto:explorethegujarat@gmail.com" className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card shadow-card hover:border-gold transition">
              <div className="h-12 w-12 grid place-items-center rounded-lg bg-gradient-gold text-primary"><Mail className="size-5" /></div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-gold-deep">Email</div>
                <div className="font-display text-xl text-ink mt-1">explorethegujarat@gmail.com</div>
              </div>
            </a>
            <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card shadow-card">
              <div className="h-12 w-12 grid place-items-center rounded-lg bg-gradient-gold text-primary"><MapPin className="size-5" /></div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-gold-deep">Office</div>
                <div className="font-display text-xl text-ink mt-1">Shop no. 38, kailash complex, oppo. bus ststion, keshod - 362220</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card shadow-card p-8">
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold-deep">Send Enquiry</span>
            <h2 className="mt-2 font-display text-3xl text-ink">Tell us about your trip</h2>
            <p className="mt-2 text-sm text-muted-foreground">A travel expert will craft a personalised itinerary for you.</p>
            <div className="mt-6">
              <EnquiryForm
                whatsAppPrefix="General Trip Enquiry"
                fields={[
                  { name: "name", label: "Name", required: true },
                  { name: "mobile", label: "Mobile", type: "tel", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "guests", label: "Travellers", type: "number" },
                  { name: "date", label: "Travel Date", type: "date" },
                  { name: "interest", label: "Interest", type: "select", options: ["Tour Package", "Gir Safari", "Hotel Booking", "Cab Booking", "Customized Tour"] },
                  { name: "message", label: "Your Message", type: "textarea", placeholder: "Tell us about your dream Gujarat journey..." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}