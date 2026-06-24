import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/packages", label: "Packages" },
  { to: "/safari", label: "Gir Safari" },
  { to: "/hotels", label: "Hotels" },
  { to: "/cabs", label: "Cabs" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-primary text-primary-foreground border-b border-gold/20 backdrop-blur supports-[backdrop-filter]:bg-primary/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="grid place-items-center h-10 w-10 rounded-full bg-gradient-gold text-primary font-display font-bold text-lg shadow-gold">ETG</span>
            <span className="leading-tight">
              <span className="block font-display text-base lg:text-lg tracking-wide">Explore The Gujarat</span>
              <span className="block text-[10px] tracking-[0.25em] uppercase text-gold/80">Tourist Help Center</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative text-primary-foreground/85 hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:+918980200401"
            className="hidden md:inline-flex items-center gap-2 px-4 h-10 rounded-md bg-gradient-gold text-primary text-sm font-semibold shadow-gold hover:brightness-110 transition"
          >
            <Phone className="size-4" /> +91 8980 200 401
          </a>

          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2 text-gold"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 border-t border-gold/10 pt-4 grid gap-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-1.5 text-sm text-primary-foreground/85 hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+918980200401" className="mt-2 inline-flex items-center gap-2 px-4 h-10 rounded-md bg-gradient-gold text-primary text-sm font-semibold w-fit">
              <Phone className="size-4" /> +91 8980 200 401
            </a>
          </div>
        )}
      </div>
    </header>
  );
}