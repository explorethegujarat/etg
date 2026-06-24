import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-gujarat.jpg";
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import {
  ShieldCheck, MapPinned, Sparkles, HeartHandshake,
  Compass, Hotel, Car, TreePalm, Mountain, Star, Ticket,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Explore The Gujarat — Luxury Gujarat Tours, Gir Safari & Heritage Packages" },
      { name: "description", content: "Premium Gujarat tour packages, Gir jungle safari booking, hotels, cabs and customized itineraries. Plan your royal Gujarat journey with trusted local experts." },
      { property: "og:title", content: "Explore The Gujarat — Royal Travel Co." },
      { property: "og:description", content: "Discover wildlife, heritage, beaches and spiritual escapes across Gujarat." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Compass, title: "Gujarat Tour Packages", text: "Hand-crafted itineraries across the state." },
  { icon: TreePalm, title: "Lion Safari", text: "Confirmed bookings and permits for lion safari." },
  { icon: Hotel, title: "Hotels & Resorts", text: "Luxury stays partnered with the finest properties." },
  { icon: Car, title: "Cab & Taxi Booking", text: "Sedan, SUV and tempo travellers with expert drivers." },
  { icon: Ticket, title: "Train & Flight Bookings", text: "Hassle-free train and flight reservations." },
  { icon: Sparkles, title: "Customized Tours", text: "Family, couple and group journeys, tailored to you." },
];

const trust = [
  { icon: ShieldCheck, title: "Verified Travel Assistance" },
  { icon: MapPinned, title: "Local Gujarat Experts" },
  { icon: HeartHandshake, title: "Customized Itineraries" },
  { icon: Sparkles, title: "Round-the-clock Support" },
];

const reviews = [
  { name: "Aarav & Meera Shah", trip: "White Rann Romance", text: "An unforgettable royal honeymoon. The luxury tent stay under a full moon was magical, and every detail was handled flawlessly." },
  { name: "The Iyer Family", trip: "Grand Gujarat", text: "Ten days, five destinations, zero stress. Our guide knew every story, every shortcut, every secret rooftop view." },
  { name: "James Whitcombe", trip: "Gir Lion Trail", text: "I came for the lions and left with friends. The safari was world-class — three sightings in two drives!" },
];

const faqs = [
  {
    q: "When is the best time to visit Gujarat?",
    a: "October to March is the most comfortable season for Gujarat travel. Winter is ideal for Gir Safari, Kutch, Dwarka, Somnath and heritage sightseeing. Gir Safari usually operates from mid-October to mid-June."
  },
  {
    q: "How many days are enough to explore Gujarat?",
    a: "It depends on your destinations. Gir-Somnath-Dwarka needs around 4-5 days, Kutch needs 3-4 days, and a complete Gujarat tour usually takes 7-10 days."
  },
  {
    q: "Do you arrange Gir Jungle Safari permits?",
    a: "Yes, we help guests with Gir Jungle Safari and Devaliya Safari permit booking, including guidance for preferred safari timings based on availability."
  },
  {
    q: "What is the difference between Gir Jungle Safari and Devaliya Safari?",
    a: "Gir Jungle Safari is a real forest experience where you explore the Asiatic lion habitat. Devaliya Safari Park is a managed interpretation zone where lion sightings are easier and time is fixed."
  },
  {
    q: "Is Gujarat safe for family and senior citizen travel?",
    a: "Yes, Gujarat is considered a safe destination for families, couples and senior citizens. We plan comfortable routes, hotels and transportation according to guest requirements."
  },
  {
    q: "Can you customize Gujarat tour packages?",
    a: "Yes, every package can be customized according to your travel dates, budget, hotel preference, sightseeing interests and group size."
  },
  {
    q: "Which places should I visit in Gujarat for the first time?",
    a: "For first-time visitors, popular circuits include Gir, Somnath, Dwarka, Statue of Unity, Kutch, Ahmedabad, Vadodara and Saputara depending on your available days."
  },
  {
    q: "Do your packages include hotels and transportation?",
    a: "Yes, our packages can include hotel stays, private cab, sightseeing and other travel arrangements. We create packages according to your preferred comfort level."
  },
  {
    q: "What type of vehicles are provided for Gujarat tours?",
    a: "We provide comfortable private vehicles like Sedan, Ertiga, Innova and other options depending on group size and luggage requirements."
  },
  {
    q: "How can I book a Gujarat tour package?",
    a: "You can contact us through WhatsApp, phone call or enquiry form. Our travel team will suggest the best itinerary and share a customized quotation."
  },
  {
    q: "Are vegetarian food options easily available in Gujarat?",
    a: "Yes, Gujarat has plenty of vegetarian food options. Jain food and special dietary requirements can also be managed with advance information."
  },
  {
    q: "What should I carry for Gir Safari?",
    a: "Carry a valid ID proof, comfortable clothes, sunglasses, cap, water bottle and a camera. Light-colored clothes are recommended for a better safari experience."
  }
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Royal traveller across the white salt desert of Kutch at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 lg:pt-36 lg:pb-44">
          <div className="max-w-3xl text-primary-foreground">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-gold">Premium Gujarat Journeys</span>
            </div>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.05]">
              Explore The Gujarat <span className="text-gold italic">Like Never Before</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-primary-foreground/85 max-w-2xl leading-relaxed">
              Discover wildlife, heritage, culture & hidden gems of Gujarat — curated by local experts with the finest hospitality.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="gold" size="xl">
                <Link to="/packages">Book Your Trip</Link>
              </Button>
              <Button asChild variant="goldOutline" size="xl">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2"><Star className="size-4 text-gold fill-gold" /> 1,200+ happy travellers</div>
              <div className="flex items-center gap-2"><ShieldCheck className="size-4 text-gold" /> Verified local experts</div>
              <div className="flex items-center gap-2"><Sparkles className="size-4 text-gold" /> 24×7 trip concierge</div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Popular Destinations" title="Where Gujarat Reveals Itself" subtitle="Six unmissable places, each a chapter in Gujarat's grand royal story." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <Link key={d.slug} to="/destinations" className="group relative overflow-hidden rounded-xl shadow-card bg-card">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold">{d.tagline}</span>
                  <h3 className="mt-2 font-display text-2xl">{d.name}</h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm text-gold opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gradient-royal text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-gold">Our Services</span>
              <span className="h-px w-8 bg-gold" />
            </div>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl">Everything for your Gujarat journey</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-gold/20 bg-primary-foreground/[0.03] p-7 hover:border-gold/60 hover:bg-primary-foreground/[0.06] transition">
                <div className="h-12 w-12 grid place-items-center rounded-lg bg-gradient-gold text-primary"><s.icon className="size-6" /></div>
                <h3 className="mt-5 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Featured Packages" title="Signature Gujarat Itineraries" subtitle="Hand-picked journeys crafted for wildlife lovers, families, couples and weekend escapees." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 6).map((p) => (
              <article key={p.name} className="group rounded-xl border border-border bg-card shadow-card overflow-hidden flex flex-col">
                <div className="p-7 flex-1">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold-deep">{p.category} Package</span>
                  <h3 className="mt-2 font-display text-2xl text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.duration}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />{h}</li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border p-6 flex items-center justify-between bg-secondary/40">
                  <div>
                    <div className="text-xs text-muted-foreground">Starting from</div>
                    <div className="font-display text-2xl text-ink">₹{p.price.toLocaleString("en-IN")}<span className="text-xs text-muted-foreground font-sans"> /per person</span></div>
                  </div>
                  <Button asChild variant="royal" size="sm"><Link to="/contact">Book Now</Link></Button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="goldOutline" size="lg"><Link to="/packages">View all packages</Link></Button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Why Choose Us" title="Explore The Gujarat Promise" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((t) => (
              <div key={t.title} className="text-center p-7 rounded-xl bg-card shadow-card">
                <div className="mx-auto h-14 w-14 grid place-items-center rounded-full bg-gradient-gold text-primary shadow-gold"><t.icon className="size-6" /></div>
                <h3 className="mt-5 font-display text-lg text-ink">{t.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Guest Stories" title="Loved by travellers across the world" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-xl border border-border bg-card p-8 shadow-card">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-gold" />)}
                </div>
                <blockquote className="mt-5 text-foreground/85 italic leading-relaxed">"{r.text}"</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border">
                  <div className="font-display text-ink">{r.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-deep mt-1">{r.trip}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="FAQ" title="Questions, gracefully answered" />
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-display text-lg text-ink hover:text-gold-deep">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold">Begin your journey</span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl">Ready to discover the Royal Gujarat?</h2>
          <p className="mt-5 text-primary-foreground/75 max-w-2xl mx-auto">Speak with a Gujarat travel expert today. We'll craft an itinerary worthy of royalty — at a price that surprises you.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild variant="gold" size="xl"><Link to="/contact">Plan My Trip</Link></Button>
            <Button asChild variant="goldOutline" size="xl"><a href="tel:+918980200401">Call +91 8980 200 401</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
