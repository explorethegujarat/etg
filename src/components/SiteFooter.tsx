import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground/85 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-10 w-10 rounded-full bg-gradient-gold text-primary font-display font-bold">ETG</span>
            <span className="font-display text-lg">Explore The Gujarat</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/65 leading-relaxed">
            Curated luxury journeys across Gujarat — wildlife, heritage, beaches and spiritual escapes by trusted local experts.
          </p>
          <div className="gold-divider mt-6" />
        </div>

        <div>
          <h4 className="font-display text-gold text-base mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/destinations" className="hover:text-gold">Destinations</Link></li>
            <li><Link to="/packages" className="hover:text-gold">Tour Packages</Link></li>
            <li><Link to="/safari" className="hover:text-gold">Gir Safari</Link></li>
            <li><Link to="/hotels" className="hover:text-gold">Hotels & Resorts</Link></li>
            <li><Link to="/cabs" className="hover:text-gold">Cab Booking</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-gold text-base mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Travel Journal</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link to="/admin" className="hover:text-gold text-primary-foreground/40 text-[11px] mt-2 block">          </Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-gold text-base mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="size-4 mt-0.5 text-gold flex-shrink-0" /><a href="tel:+918980200401">+91 8980 200 401</a></li>
            <li className="flex items-start gap-2"><Mail className="size-4 mt-0.5 text-gold flex-shrink-0" /><a href="mailto:explorethegujarat@gmail.com">explorethegujarat@gmail.com</a></li>
            <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 text-gold flex-shrink-0" /><span>Shop no. 38, kailash complex, oppo. bus station, keshod - 362220</span></li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="https://www.instagram.com/explore_the_gujarat?igsh=MTQ1YzkyOTZpNjNvaQ==" aria-label="Instagram" className="h-9 w-9 grid place-items-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary transition"><Instagram className="size-4" /></a>
            <a href="https://youtube.com/@explorethegujarat?si=T37KOj9n4z1g0Czb" aria-label="YouTube" className="h-9 w-9 grid place-items-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary transition"><Youtube className="size-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/15">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-primary-foreground/55 flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Explore The Gujarat. All rights reserved.</span>
          <span>Crafted with royal hospitality.</span>
        </div>
      </div>
    </footer>
  );
}