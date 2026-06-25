import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { getBlogPostBySlug, getBlogPosts, DEFAULT_POSTS, BlogPost } from "@/lib/blogService";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2, MessageCircle, Facebook, Link2 } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/blog_/$slug")({
  head: ({ params }) => {
    const post = getBlogPostBySlug(params.slug);
    return {
      meta: [
        { title: post ? `${post.title} — Explore The Gujarat` : "Article Not Found" },
        { name: "description", content: post?.excerpt || "Read this article on Explore The Gujarat." },
        { property: "og:title", content: post?.title || "Explore The Gujarat Journal" },
        { property: "og:description", content: post?.excerpt || "Read this article on Explore The Gujarat." },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = useParams({ from: "/blog_/$slug" });
  const [clientPost, setClientPost] = useState<BlogPost | undefined>(undefined);
  const [isMounted, setIsMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setClientPost(getBlogPostBySlug(slug));
    setIsMounted(true);
  }, [slug]);

  // Check if it's one of the default posts to pre-render on the server
  const defaultPost = DEFAULT_POSTS.find((p) => p.id === slug);
  const post = isMounted ? clientPost : defaultPost;

  // Show a neutral loading skeleton during hydration for custom articles (avoiding hydration mismatch)
  if (!isMounted && !defaultPost) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-background">
        <div className="animate-pulse flex flex-col items-center w-full max-w-xl">
          <div className="h-4 w-24 bg-secondary rounded mb-4"></div>
          <div className="h-8 w-64 bg-secondary rounded mb-6"></div>
          <div className="h-4 w-full bg-secondary rounded mb-2"></div>
          <div className="h-4 w-5/6 bg-secondary rounded mb-2"></div>
          <div className="h-4 w-4/6 bg-secondary rounded"></div>
        </div>
      </div>
    );
  }

  // After mount, if still not found, show Not Found
  if (isMounted && !post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-background">
        <h1 className="font-display text-4xl text-ink mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          The travel guide you are looking for doesn't exist or has been removed by the administrator.
        </p>
        <Link to="/blog">
          <Button className="bg-gradient-gold text-primary hover:opacity-90 font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Journal
          </Button>
        </Link>
      </div>
    );
  }

  // Get related posts (exclude current, take 3 from the same tag or random)
  const allPosts = getBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.id !== post!.id)
    .slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareText = encodeURIComponent(`Check out this amazing article: ${post!.title}`);
  const shareUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";

  return (
    <>
      <div className="bg-background pt-8 pb-4 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-4">
            <Link to="/" className="hover:text-gold transition">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-gold transition">Travel Journal</Link>
            <span>/</span>
            <span className="text-ink font-medium truncate max-w-[200px] sm:max-w-none">{post!.title}</span>
          </div>
          
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-gold-deep hover:text-gold transition">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Travel Journal
          </Link>
        </div>
      </div>

      <article className="py-12 sm:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-gold/10 text-gold-deep uppercase mb-4">
              {post!.tag}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight mb-6">
              {post!.title}
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm text-muted-foreground border-y border-border/40 py-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-gold-deep" />
                <span>By {post!.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gold-deep" />
                <span>{post!.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold-deep" />
                <span>{post!.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xl mb-12 sm:mb-16 border border-border/50">
            <img src={post!.img} alt={post!.title} className="h-full w-full object-cover" />
          </div>

          {/* Main Layout */}
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar / Sharing */}
            <div className="lg:col-span-1 lg:sticky lg:top-24 h-fit space-y-6">
              <div className="p-6 rounded-xl border border-border bg-card shadow-card">
                <h4 className="font-display text-ink text-base mb-4 border-b border-border/60 pb-2">Share Article</h4>
                <div className="flex lg:flex-col gap-3 justify-start">
                  <a
                    href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center lg:justify-start gap-2 px-3 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition w-10 h-10 lg:w-full lg:h-auto"
                    title="Share on WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" />
                    <span className="hidden lg:inline">WhatsApp</span>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center lg:justify-start gap-2 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition w-10 h-10 lg:w-full lg:h-auto"
                    title="Share on Facebook"
                  >
                    <Facebook className="h-4 w-4 shrink-0" />
                    <span className="hidden lg:inline">Facebook</span>
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center justify-center lg:justify-start gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground text-sm font-medium transition w-10 h-10 lg:w-full lg:h-auto"
                    title="Copy Link"
                  >
                    <Link2 className="h-4 w-4 shrink-0" />
                    <span className="hidden lg:inline">{copied ? "Copied!" : "Copy Link"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-3 prose prose-stone max-w-none">
              <div className="font-serif leading-relaxed text-lg text-muted-foreground">
                {parseMarkdown(post!.content)}
              </div>

              {/* Contact CTA banner */}
              <div className="mt-16 p-8 rounded-2xl border border-gold/30 bg-gradient-to-br from-primary to-ink text-primary-foreground relative overflow-hidden shadow-lg">
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-y-12 translate-x-12">
                  <span className="font-display text-9xl font-bold">GUJARAT</span>
                </div>
                <h3 className="font-display text-2xl text-gold mb-3 relative z-10">
                  Ready to Experience Royal Gujarat?
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-6 max-w-xl relative z-10 leading-relaxed">
                  Our local travel concierges can turn the itineraries in this article into a fully tailored private holiday. Let us handle the transport, stays, and exclusive safari permits for you.
                </p>
                <div className="flex flex-wrap gap-4 relative z-10">
                  <Link to="/contact">
                    <Button className="bg-gradient-gold text-primary hover:opacity-95 font-semibold shadow-md">
                      Plan Your Journey
                    </Button>
                  </Link>
                  <a href="tel:+918980200401">
                    <Button variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10">
                      Call Concierge
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-secondary/30 border-t border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl text-ink text-center mb-12">
              Related Articles & Guides
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((p) => (
                <article key={p.id} className="rounded-xl overflow-hidden border border-border bg-card shadow-card group flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] mb-2">
                      <span className="text-gold-deep font-semibold">{p.tag}</span>
                      <span className="text-muted-foreground">· {p.date}</span>
                    </div>
                    <h3 className="font-display text-lg text-ink leading-snug mb-2 group-hover:text-gold transition">
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4 line-clamp-2">
                      {p.excerpt}
                    </p>
                    <Link to="/blog/$slug" params={{ slug: p.id }} className="text-xs font-semibold text-gold-deep group-hover:translate-x-1 transition-transform inline-flex items-center">
                      Read article <span className="ml-1">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function parseMarkdown(text: string) {
  const blocks = text.split(/\n\s*\n/);
  return blocks.map((block, idx) => {
    block = block.trim();
    if (!block) return null;

    if (block.startsWith("### ")) {
      return (
        <h3 key={idx} className="font-display text-2xl text-ink mt-8 mb-4 font-semibold">
          {block.slice(4)}
        </h3>
      );
    }
    if (block.startsWith("## ")) {
      return (
        <h2 key={idx} className="font-display text-3xl text-ink mt-10 mb-6 font-bold border-b border-border pb-2">
          {block.slice(3)}
        </h2>
      );
    }
    if (block.startsWith("# ")) {
      return (
        <h1 key={idx} className="font-display text-4xl text-ink mt-12 mb-8 font-bold">
          {block.slice(2)}
        </h1>
      );
    }

    if (block === "---") {
      return <hr key={idx} className="my-10 border-border/80" />;
    }

    // Bullet list
    if (block.startsWith("* ") || block.startsWith("- ")) {
      const items = block.split(/\n[\*\-]\s+/).map((item, itemIdx) => {
        const cleanItem = item.replace(/^[\*\-]\s+/, "");
        return (
          <li key={itemIdx} className="mb-2 pl-1 leading-relaxed">
            {parseInlineMarkdown(cleanItem)}
          </li>
        );
      });
      return (
        <ul key={idx} className="list-disc pl-6 my-6 text-muted-foreground space-y-2">
          {items}
        </ul>
      );
    }

    // Numbered list
    if (/^\d+\.\s+/.test(block)) {
      const items = block.split(/\n\d+\.\s+/).map((item, itemIdx) => {
        const cleanItem = item.replace(/^\d+\.\s+/, "");
        return (
          <li key={itemIdx} className="mb-2 pl-1 leading-relaxed">
            {parseInlineMarkdown(cleanItem)}
          </li>
        );
      });
      return (
        <ol key={idx} className="list-decimal pl-6 my-6 text-muted-foreground space-y-2">
          {items}
        </ol>
      );
    }

    // Paragraph
    return (
      <p key={idx} className="text-muted-foreground leading-relaxed mb-6 text-base font-normal">
        {parseInlineMarkdown(block)}
      </p>
    );
  });
}

function parseInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
