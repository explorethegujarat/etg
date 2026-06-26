import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { getBlogPosts, DEFAULT_POSTS, BlogPost } from "@/lib/blogService";
import { useState, useEffect } from "react";
import { Search, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Gujarat Travel Guides & Stories — Explore The Gujarat Journal" },
      { name: "description", content: "Gujarat travel guides, Gir safari tips, Kutch Rann Utsav planning, Somnath aarti and more from our local experts." },
      { property: "og:title", content: "Gujarat Travel Journal" },
      { property: "og:description", content: "Stories, guides and insider tips for Gujarat travellers." },
    ],
  }),
  component: Page,
});

function Page() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    getBlogPosts().then((data) => {
      setPosts(data);
      setIsMounted(true);
    });
  }, []);

  // During SSR/initial hydration, use DEFAULT_POSTS. Once mounted, use the localStorage posts.
  const displayPosts = isMounted ? posts : DEFAULT_POSTS;

  // Get unique tags/categories
  const categories = ["All", ...Array.from(new Set(displayPosts.map((p) => p.tag)))];

  // Filter posts
  const filteredPosts = displayPosts.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || p.tag === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageHero eyebrow="Travel Journal" title="Gujarat, told by locals" subtitle="Guides, tips and stories — written by the same experts who craft your trip." />
      
      <section className="py-12 bg-secondary/20 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition ${
                  activeCategory === cat
                    ? "bg-gradient-gold text-primary shadow-sm"
                    : "bg-card border border-border text-muted-foreground hover:text-ink hover:border-gold/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80 order-1 md:order-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search guides & stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-border bg-card text-sm text-ink focus:outline-none focus:border-gold/60 transition"
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 max-w-md mx-auto">
              <div className="h-16 w-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-deep">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="font-display text-xl text-ink mb-2">No Articles Found</h3>
              <p className="text-muted-foreground text-sm mb-6">
                We couldn't find any articles matching your search. Try adjusting your query or category filters.
              </p>
              <Button
                variant="outline"
                className="border-gold/30 hover:bg-gold/5 text-gold-deep"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
              {filteredPosts.map((p) => (
                <article key={p.id} className="rounded-xl overflow-hidden border border-border bg-card shadow-card group flex flex-col transition hover:shadow-lg hover:border-gold/20">
                  <Link to="/blog/$slug" params={{ slug: p.id }} className="aspect-[16/10] overflow-hidden block">
                    <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </Link>
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em]">
                      <span className="text-gold-deep font-semibold">{p.tag}</span>
                      <span className="text-muted-foreground">· {p.date}</span>
                    </div>
                    <Link to="/blog/$slug" params={{ slug: p.id }} className="block mt-3 group-hover:text-gold transition">
                      <h3 className="font-display text-xl text-ink leading-snug group-hover:text-gold-deep transition duration-300">
                        {p.title}
                      </h3>
                    </Link>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                      {p.excerpt}
                    </p>
                    <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <User className="h-3 w-3 text-gold-deep" />
                        <span className="truncate max-w-[120px]">{p.author || "Concierge"}</span>
                      </div>
                      <Link to="/blog/$slug" params={{ slug: p.id }} className="text-sm text-gold-deep font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                        Read article <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}