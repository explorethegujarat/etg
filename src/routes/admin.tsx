import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { getBlogPosts, saveBlogPost, deleteBlogPost, BlogPost } from "@/lib/blogService";
import { Button } from "@/components/ui/button";
import {
  Key, Lock, Plus, Trash2, Edit, LogOut, FileText, ArrowLeft,
  Tag, Calendar, User, Clock, Image as ImageIcon, Eye, HelpCircle
} from "lucide-react";
import { toast } from "sonner";

// Pre-import preset images
import girImg from "@/assets/dest-gir.jpeg";
import kutchImg from "@/assets/dest-kutch.jpg";
import somnathImg from "@/assets/dest-somnath.jpg";
import diuImg from "@/assets/dest-diu.jpg";
import saputaraImg from "@/assets/dest-saputara.jpg";
import dwarkaImg from "@/assets/dest-dwarka.jpg";

const PRESET_IMAGES = [
  { name: "Gir Safari", url: girImg },
  { name: "White Desert", url: kutchImg },
  { name: "Somnath", url: somnathImg },
  { name: "Diu Fort", url: diuImg },
  { name: "Saputara Hills", url: saputaraImg },
  { name: "Dwarka Temple", url: dwarkaImg },
];

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Blog Admin Panel — Explore The Gujarat" },
      { name: "robots", content: "noindex, nofollow" }
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  // Form Fields State
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("General");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [selectedImg, setSelectedImg] = useState(girImg);
  const [customImgUrl, setCustomImgUrl] = useState("");
  const [useCustomImg, setUseCustomImg] = useState(false);
  const [author, setAuthor] = useState("Royal Concierge");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  // Load posts
  useEffect(() => {
    if (isAuthenticated) {
      getBlogPosts().then(setPosts);
    }
  }, [isAuthenticated]);

  // Auth check
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "Divyesh@1011") {
      setIsAuthenticated(true);
      toast.success("Successfully authenticated!");
      sessionStorage.setItem("admin_auth", "true");
    } else {
      toast.error("Invalid passcode. Please try again.");
    }
  };

  // Check session on mount
  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_auth");
    toast.info("Logged out.");
  };

  // Open Modal for Create
  const handleCreateOpen = () => {
    setEditingPost(null);
    setTitle("");
    setTag("General");
    setExcerpt("");
    setContent("");
    setSelectedImg(girImg);
    setCustomImgUrl("");
    setUseCustomImg(false);
    setAuthor("Royal Concierge");
    // Formatted current date like "Updated June 2026" or "June 2026"
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const now = new Date();
    setDate(`${months[now.getMonth()]} ${now.getFullYear()}`);
    setIsModalOpen(true);
  };

  // Open Modal for Edit
  const handleEditOpen = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setTag(post.tag);
    setExcerpt(post.excerpt);
    setContent(post.content);

    // Check if image is custom or preset
    const isPreset = PRESET_IMAGES.some((p) => p.url === post.img);
    if (isPreset) {
      setSelectedImg(post.img);
      setUseCustomImg(false);
      setCustomImgUrl("");
    } else {
      setUseCustomImg(true);
      setCustomImgUrl(post.img);
    }

    setAuthor(post.author);
    setDate(post.date);
    setIsModalOpen(true);
  };

  // Handle Save
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !excerpt.trim() || !content.trim() || !author.trim() || !date.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Auto-generate slug
    const generatedSlug = editingPost
      ? editingPost.id
      : title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    // Quick duplicate check (only on create)
    if (!editingPost && posts.some(p => p.id === generatedSlug)) {
      toast.error("An article with this title already exists. Try changing the title.");
      return;
    }

    let finalImg = useCustomImg ? customImgUrl : selectedImg;
    if (!finalImg) {
      toast.error("Please provide or select an image.");
      return;
    }

    // Auto-convert Google Drive links to direct render URLs
    if (useCustomImg && finalImg.includes("drive.google.com")) {
      const gdMatch = finalImg.match(/(?:file\/d\/|id=)([a-zA-Z0-9_-]+)/);
      if (gdMatch && gdMatch[1]) {
        finalImg = `https://lh3.googleusercontent.com/u/0/d/${gdMatch[1]}`;
      }
    }

    // Calculate reading time based on words (roughly 200 words per minute)
    const wordCount = content.trim().split(/\s+/).length;
    const calcMinutes = Math.max(1, Math.ceil(wordCount / 200));
    const readTime = `${calcMinutes} min read`;

    const newPost: BlogPost = {
      id: generatedSlug,
      title,
      excerpt,
      content,
      img: finalImg,
      tag,
      date,
      author,
      readTime,
    };

    saveBlogPost(newPost).then(() => {
      toast.success(editingPost ? "Article updated successfully!" : "Article created successfully!");
      getBlogPosts().then(setPosts);
      setIsModalOpen(false);
    }).catch((err) => {
      toast.error("Failed to save article: " + err.message);
    });
  };

  // Handle Delete
  const handleDelete = (slug: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      deleteBlogPost(slug).then(() => {
        toast.success("Article deleted.");
        getBlogPosts().then(setPosts);
      }).catch((err) => {
        toast.error("Failed to delete article: " + err.message);
      });
    }
  };

  // Auth Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-secondary/10 px-6 py-20">
        <div className="max-w-md w-full rounded-2xl border border-border bg-card shadow-card overflow-hidden">
          <div className="p-8 text-center bg-primary text-primary-foreground">
            <div className="h-12 w-12 rounded-full bg-gradient-gold text-primary flex items-center justify-center mx-auto mb-4">
              <Lock className="h-5 w-5" />
            </div>
            <h2 className="font-display text-2xl">Admin Portal</h2>
            <p className="text-xs text-primary-foreground/60 mt-1">
              Enter passcode to manage the Gujarat travel journal
            </p>
          </div>

          <form onSubmit={handleLogin} className="p-8 space-y-6 bg-card">
            <div className="space-y-2">
              <label htmlFor="passcode" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Passcode
              </label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  id="passcode"
                  placeholder="Enter passcode..."
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:border-gold/60 transition"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-gradient-gold text-primary hover:opacity-90 font-semibold py-2.5">
              Authenticate
            </Button>

            <div className="text-center">
              <Link to="/blog" className="text-xs text-gold-deep hover:underline">
                Back to Travel Journal
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard Screen
  return (
    <>
      <div className="bg-background pt-8 pb-4 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap justify-between items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
              <Link to="/" className="hover:text-gold transition">Home</Link>
              <span>/</span>
              <span className="text-ink font-medium">Admin Panel</span>
            </div>
            <h1 className="font-display text-3xl text-ink">Blog Management</h1>
          </div>

          <div className="flex gap-3">
            <Link to="/blog">
              <Button variant="outline" className="border-border text-ink hover:bg-secondary">
                <Eye className="mr-2 h-4 w-4" /> View Journal
              </Button>
            </Link>
            <Button onClick={handleLogout} variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </div>
        </div>
      </div>

      <section className="py-12 bg-secondary/10 min-h-[70vh]">
        <div className="mx-auto max-w-7xl px-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-xl border border-border bg-card shadow-card flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gold/10 text-gold-deep flex items-center justify-center">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase font-medium">Total Articles</div>
                <div className="font-display text-2xl text-ink font-bold mt-1">{posts.length}</div>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card shadow-card flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-green-100 text-green-700 flex items-center justify-center">
                <Tag className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase font-medium">Categories</div>
                <div className="font-display text-2xl text-ink font-bold mt-1">
                  {new Set(posts.map(p => p.tag)).size}
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card shadow-card flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <User className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase font-medium">Authors</div>
                <div className="font-display text-2xl text-ink font-bold mt-1">
                  {new Set(posts.map(p => p.author)).size}
                </div>
              </div>
            </div>
          </div>

          {/* List and Table */}
          <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
            <div className="p-6 border-b border-border flex justify-between items-center bg-card">
              <h3 className="font-display text-xl text-ink">Articles List</h3>
              <Button onClick={handleCreateOpen} className="bg-gradient-gold text-primary hover:opacity-90 font-medium">
                <Plus className="mr-2 h-4 w-4" /> Add New Article
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-secondary/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border">
                    <th className="p-4 pl-6">Article</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Author</th>
                    <th className="p-4">Date</th>
                    <th className="p-4 pr-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-secondary/20 transition text-sm">
                      <td className="p-4 pl-6">
                        <div className="flex items-center gap-3">
                          <img src={post.img} alt={post.title} className="h-10 w-16 object-cover rounded border border-border bg-secondary" />
                          <div>
                            <div className="font-medium text-ink line-clamp-1">{post.title}</div>
                            <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{post.excerpt}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-gold/10 text-gold-deep border border-gold/15">
                          {post.tag}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground">{post.author}</td>
                      <td className="p-4 text-muted-foreground">{post.date}</td>
                      <td className="p-4 pr-6 text-right space-x-2">
                        <button
                          onClick={() => handleEditOpen(post)}
                          className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-gold-deep hover:border-gold/30 hover:bg-gold/5 transition"
                          title="Edit Article"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id, post.title)}
                          className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-red-100 text-red-500 hover:text-red-700 hover:border-red-200 hover:bg-red-50 transition"
                          title="Delete Article"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {posts.length === 0 && (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-muted-foreground">
                        No articles found. Click "Add New Article" to write your first travel guide.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Editor Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card w-full max-w-4xl rounded-2xl border border-border shadow-2xl overflow-hidden animate-scale-up max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-border bg-primary text-primary-foreground flex justify-between items-center">
              <div>
                <h3 className="font-display text-xl">
                  {editingPost ? "Edit Travel Journal Article" : "Create Travel Journal Article"}
                </h3>
                <p className="text-xs text-primary-foreground/60 mt-0.5">
                  Provide interesting detailed guidelines about Gujarat destinations.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="h-8 w-8 rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-white hover:bg-white/10 transition"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Side: Metadata */}
                <div className="space-y-6 md:col-span-1 border-r border-border/60 pr-0 md:pr-6">
                  {/* Category Tag */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Tag className="h-3.5 w-3.5 text-gold-deep" /> Category / Tag
                    </label>
                    <select
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:border-gold/60 transition"
                    >
                      <option value="Wildlife">Wildlife</option>
                      <option value="Heritage">Heritage</option>
                      <option value="Spiritual">Spiritual</option>
                      <option value="Beaches">Beaches</option>
                      <option value="Nature">Nature</option>
                      <option value="General">General</option>
                    </select>
                  </div>

                  {/* Author */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-gold-deep" /> Author Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Royal Concierge"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:border-gold/60 transition"
                      required
                    />
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-gold-deep" /> Date Label
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. June 2026"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:border-gold/60 transition"
                      required
                    />
                  </div>

                  {/* Image Selector */}
                  <div className="space-y-4 pt-4 border-t border-border/40">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <ImageIcon className="h-3.5 w-3.5 text-gold-deep" /> Cover Image
                    </label>

                    <div className="flex gap-4 mb-2">
                      <label className="flex items-center gap-1.5 text-xs text-muted-foreground cursor-pointer">
                        <input
                          type="radio"
                          name="imageSource"
                          checked={!useCustomImg}
                          onChange={() => setUseCustomImg(false)}
                          className="text-gold"
                        />
                        Use Preset
                      </label>
                      <label className="flex items-center gap-1.5 text-xs text-muted-foreground cursor-pointer">
                        <input
                          type="radio"
                          name="imageSource"
                          checked={useCustomImg}
                          onChange={() => setUseCustomImg(true)}
                          className="text-gold"
                        />
                        Custom Image URL
                      </label>
                    </div>

                    {!useCustomImg ? (
                      <div className="grid grid-cols-3 gap-2">
                        {PRESET_IMAGES.map((preset) => (
                          <button
                            type="button"
                            key={preset.name}
                            onClick={() => setSelectedImg(preset.url)}
                            className={`aspect-[16/10] border-2 rounded overflow-hidden relative transition ${selectedImg === preset.url
                              ? "border-gold"
                              : "border-border/60 hover:border-border"
                              }`}
                          >
                            <img src={preset.url} alt={preset.name} className="h-full w-full object-cover" />
                            <div className="absolute inset-x-0 bottom-0 bg-black/70 text-[8px] text-white text-center py-0.5 truncate">
                              {preset.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <input
                        type="url"
                        placeholder="https://example.com/image.jpg"
                        value={customImgUrl}
                        onChange={(e) => setCustomImgUrl(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:border-gold/60 transition"
                        required={useCustomImg}
                      />
                    )}
                  </div>
                </div>

                {/* Right Side: Form Inputs */}
                <div className="space-y-6 md:col-span-2">
                  {/* Title */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Article Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Historical Marvels of Champaner-Pavagadh"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:border-gold/60 transition font-medium"
                      required
                    />
                  </div>

                  {/* Excerpt */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Excerpt / Summary (Short snippet for cards)
                    </label>
                    <textarea
                      placeholder="e.g. A brief guide on exploring the UNESCO World Heritage site of Champaner, Gujarat."
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:border-gold/60 transition h-16 resize-none"
                      maxLength={180}
                      required
                    />
                  </div>

                  {/* Markdown Editor */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Detailed Article Content (Markdown format supported)
                      </label>
                      <span className="text-[10px] text-gold-deep flex items-center gap-1">
                        <HelpCircle className="h-3 w-3" /> Double newlines format paragraphs
                      </span>
                    </div>

                    {/* Quick Cheat Sheet */}
                    <div className="bg-secondary/40 border border-border/50 rounded-lg p-3 text-[10px] grid grid-cols-2 sm:grid-cols-4 gap-2 text-muted-foreground">
                      <div><strong className="text-ink">## Heading 2</strong>: Section</div>
                      <div><strong className="text-ink">### Heading 3</strong>: Subheading</div>
                      <div><strong className="text-ink">**Text**</strong>: Bold text</div>
                      <div><strong className="text-ink">- list item</strong>: Bullets</div>
                    </div>

                    <textarea
                      placeholder="Write your article content here in Markdown...
                      
## Let's start with a section heading
Write paragraphs by separating them with double enters.
                      
### A sub-section heading
* Create lists by starting lines with a dash (-) or asterisk (*)
* Make words **bold** by surrounding them with double asterisks
---
Add horizontal divider lines with three dashes (---)"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:border-gold/60 transition h-72 font-mono"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-border flex justify-end gap-3 bg-card">
                <Button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  variant="outline"
                  className="border-border text-ink hover:bg-secondary"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-gold text-primary hover:opacity-90 font-semibold px-6"
                >
                  {editingPost ? "Save Changes" : "Publish Article"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
