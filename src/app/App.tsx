import { useState } from "react";

const POSTS = [
  {
    id: 1,
    slug: "the-grammar-of-light",
    title: "The Grammar of Light",
    category: "Essay",
    issue: "No. 41",
    date: "July 2026",
    readTime: "9 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1400&h=800&fit=crop&auto=format",
    imageAlt: "Rays of pale morning light through forest canopy",
    excerpt:
      "Every language has a word for the quality of light that arrives just before dawn — that interim hour when the world is neither night nor day but something more honest than either.",
    author: "Aakarsh Singhal",
  },
  {
    id: 2,
    slug: "salt-and-sediment",
    title: "Salt & Sediment",
    category: "Poetry",
    issue: "No. 41",
    date: "July 2026",
    readTime: "4 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Close view of salt flats reflecting a pale sky",
    excerpt:
      "A sequence in four movements, written along the edge of the Bonneville salt flats in a year of unusual silence.",
    author: "Aakarsh Singhal",
  },
  {
    id: 3,
    slug: "on-returning",
    title: "On Returning",
    category: "Essay",
    issue: "No. 40",
    date: "June 2026",
    readTime: "11 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Mountain pass in early autumn fog",
    excerpt:
      "The philosopher Gaston Bachelard wrote that we never enter the same house twice. Every return is an act of translation — of the self we were into the self we are now.",
    author: "Aakarsh Singhal",
  },
  {
    id: 4,
    slug: "archipelago-memory",
    title: "Archipelago of Memory",
    category: "Fiction",
    issue: "No. 40",
    date: "June 2026",
    readTime: "18 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Scattered islands seen from above in turquoise water",
    excerpt:
      "The summer my grandmother lost her keys, she began to leave small notes for herself everywhere. They told a better story than any she had ever told us.",
    author: "Aakarsh Singhal",
  },
  {
    id: 5,
    slug: "nocturne-for-two-voices",
    title: "Nocturne for Two Voices",
    category: "Poetry",
    issue: "No. 39",
    date: "May 2026",
    readTime: "5 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Deep night sky with scattered stars above a dark ridge",
    excerpt:
      "A conversation between two kinds of silence — the silence before a word, and the silence after it has already changed everything.",
    author: "Aakarsh Singhal",
  },
  {
    id: 6,
    slug: "cartography-of-grief",
    title: "A Cartography of Grief",
    category: "Essay",
    issue: "No. 39",
    date: "May 2026",
    readTime: "13 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1476900543704-4312b650bce0?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Antique map detail showing coastlines and depth markers",
    excerpt:
      "We have latitude and longitude for oceans. We have no coordinate system for the geography of loss — yet the mind navigates it with uncanny precision.",
    author: "Aakarsh Singhal",
  },
];

const CATEGORIES = ["All", "Essay", "Poetry", "Fiction"];

function NavBar({ activeCategory, onCategory }: { activeCategory: string; onCategory: (c: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-52 border-r border-border px-7 py-10 z-20 bg-background">
        <div className="mb-12">
          <p className="font-mono text-[10px] tracking-[0.22em] text-accent uppercase mb-1">A Literary Journal</p>
          <h1 className="font-display text-2xl leading-tight text-foreground">
            Meridian<br />
            <span className="italic font-normal text-accent">Review</span>
          </h1>
        </div>

        <nav className="flex flex-col gap-1 mb-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategory(cat)}
              className={`text-left font-body text-sm py-1.5 transition-colors duration-200 ${
                activeCategory === cat
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="mt-auto border-t border-border pt-6">
          <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">Issue No. 41</p>
          <p className="font-mono text-[10px] text-muted-foreground tracking-widest mt-0.5">July 2026</p>
        </div>
      </aside>

      
      <header className="lg:hidden fixed top-0 left-0 right-0 z-20 bg-background border-b border-border flex items-center justify-between px-5 py-4">
        <div>
          <p className="font-mono text-[9px] tracking-[0.2em] text-accent uppercase">A Literary Journal</p>
          <h1 className="font-display text-lg leading-tight text-foreground">
            Meridian <span className="italic font-normal text-accent">Review</span>
          </h1>
        </div>
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="text-muted-foreground hover:text-foreground transition-colors p-1"
          aria-label="Toggle menu"
        >
          <span className="font-mono text-xs tracking-widest">{menuOpen ? "CLOSE" : "MENU"}</span>
        </button>
      </header>

      
      {menuOpen && (
        <div className="lg:hidden fixed top-[57px] left-0 right-0 z-10 bg-background border-b border-border px-5 py-4 flex gap-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { onCategory(cat); setMenuOpen(false); }}
              className={`font-body text-sm transition-colors ${
                activeCategory === cat ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function FeaturedPost({ post }: { post: typeof POSTS[0] }) {
  return (
    <article className="group relative mb-16 md:mb-20">
      <div className="relative overflow-hidden bg-secondary aspect-[16/7] w-full">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-700 scale-[1.02] group-hover:scale-100 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase">{post.category}</span>
            <span className="w-8 h-px bg-border" />
            <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">{post.date}</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground mb-4 max-w-3xl">
            {post.title}
          </h2>

          <p className="font-body text-lg md:text-xl text-secondary-foreground leading-relaxed max-w-2xl mb-6 italic">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3">
            <span className="font-body text-sm text-muted-foreground">{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest">{post.readTime} read</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function PostCard({ post }: { post: typeof POSTS[0] }) {
  return (
    <article className="group cursor-pointer border-t border-border pt-6 pb-8 hover:border-accent transition-colors duration-300">
      <div className="overflow-hidden mb-5 bg-secondary aspect-[4/3]">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-500"
        />
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-[9px] tracking-[0.2em] text-accent uppercase">{post.category}</span>
        <span className="w-5 h-px bg-border" />
        <span className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground">{post.issue}</span>
      </div>

      <h3 className="font-display text-xl md:text-2xl font-semibold leading-snug text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
        {post.title}
      </h3>

      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <span className="font-body text-xs text-muted-foreground italic">{post.author}</span>
        <span className="font-mono text-[9px] text-muted-foreground tracking-widest">{post.readTime}</span>
      </div>
    </article>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-mono text-[10px] tracking-[0.25em] text-accent uppercase whitespace-nowrap">{label}</span>
      <span className="flex-1 h-px bg-border" />
    </div>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = POSTS.find((p) => p.featured)!;
  const rest = POSTS.filter((p) => !p.featured);

  const filtered =
    activeCategory === "All"
      ? rest
      : rest.filter((p) => p.category === activeCategory);

  const showFeatured = activeCategory === "All";

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'Crimson Pro', Georgia, serif; }
        .font-mono { font-family: 'DM Mono', 'Courier New', monospace; }
        html { scrollbar-width: none; }
        body::-webkit-scrollbar { display: none; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>

      <NavBar activeCategory={activeCategory} onCategory={setActiveCategory} />

      
      <main className="lg:ml-52 pt-16 lg:pt-0 min-h-screen">
        <div className="max-w-5xl mx-auto px-5 md:px-10 lg:px-14 py-12 lg:py-16">

          
          <header className="mb-14">
            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                {activeCategory === "All" ? "Current Issue · No. 41" : activeCategory}
              </span>
              <span className="flex-1 h-px bg-border" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">July 2026</span>
            </div>
            {activeCategory === "All" && (
              <p className="font-body text-sm text-muted-foreground italic mt-3 max-w-lg">
                On light, departure, the cartography of memory, and what language leaves behind.
              </p>
            )}
          </header>

          
          {showFeatured && (
            <>
              <Divider label="Featured" />
              <FeaturedPost post={featured} />
            </>
          )}

          
          <Divider label={showFeatured ? "From this issue" : `${filtered.length} piece${filtered.length !== 1 ? "s" : ""}`} />

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filtered.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="font-body italic text-muted-foreground text-lg py-12 text-center">
              No pieces in this category yet.
            </p>
          )}

          
          {showFeatured && (
            <blockquote className="my-20 border-l-2 border-accent pl-8 max-w-2xl mx-auto">
              <p className="font-display text-2xl md:text-3xl italic text-foreground leading-relaxed mb-4">
                "A poem is language eating itself alive — and surviving."
              </p>
              <footer className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
                Aakarsh Singhal
              </footer>
            </blockquote>
          )}

          
          <div className="border-t border-border mt-16 pt-10 flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-1">Archive</p>
              <p className="font-body text-sm text-muted-foreground">Issues No. 1 – 41 · 2018–2026</p>
            </div>
            <button className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase hover:text-foreground transition-colors border border-border hover:border-accent px-4 py-2">
              Browse all issues →
            </button>
          </div>

          
          <footer className="mt-16 pb-10 border-t border-border pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="font-display text-base text-foreground italic">Meridian Review</p>
              <p className="font-mono text-[9px] text-muted-foreground tracking-widest mt-0.5">Published quarterly since 2018</p>
            </div>
            <div className="flex gap-6">
              {["About", "Submit", "Subscribe", "Contact"].map((link) => (
                <button
                  key={link}
                  className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground hover:text-accent uppercase transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
