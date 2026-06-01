import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Education, Wellness, Business & Agriculture" },
      { name: "description", content: "Guides and articles from Generations Skylite on inclusive education, natural wellness, entrepreneurship and sustainable agriculture." },
      { property: "og:title", content: "Resources — Generations Skylite" },
      { property: "og:description", content: "Education, wellness, business and agriculture insights." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

type Article = { cat: Category; title: string; excerpt: string; read: string };
type Category = "Education" | "Wellness" | "Business" | "Agriculture";
const CATS: Category[] = ["Education", "Wellness", "Business", "Agriculture"];

const ARTICLES: Article[] = [
  { cat: "Education", title: "The AFRI Framework Guide", excerpt: "A practical introduction to applying the AFRI Framework in inclusive classrooms across Ghana and the diaspora.", read: "8 min" },
  { cat: "Education", title: "Designing IEPs that actually work", excerpt: "Templates, governance and teacher routines for individualized education plans schools will actually run.", read: "6 min" },
  { cat: "Wellness", title: "Palm Kernel Oil Benefits", excerpt: "Why cold-pressed PKO has become a staple in clean wellness routines — and how to choose well.", read: "5 min" },
  { cat: "Wellness", title: "The Moringa Pantry", excerpt: "Daily uses, dosage guidance and recipes for the powdered superfood Ghana is famous for.", read: "7 min" },
  { cat: "Business", title: "White Labeling for Entrepreneurs", excerpt: "How West African founders can launch product lines without manufacturing infrastructure.", read: "9 min" },
  { cat: "Business", title: "From Market to Wholesale", excerpt: "A playbook for transitioning a craft business into bulk distribution and export.", read: "10 min" },
  { cat: "Agriculture", title: "Regenerative Farming in Ghana", excerpt: "Soil health, humane animal welfare and policy advocacy for the next decade of African farming.", read: "11 min" },
  { cat: "Agriculture", title: "Compliance for Exporters", excerpt: "Navigating Ghana FDA and EPA pathways for food and natural products bound for the US market.", read: "7 min" },
];

function Resources() {
  const [active, setActive] = useState<Category | "All">("All");
  const filtered = active === "All" ? ARTICLES : ARTICLES.filter(a => a.cat === active);

  return (
    <>
      <section className="bg-royal-gradient">
        <div className="container-prose py-24 md:py-32">
          <span className="gold-divider text-[var(--color-accent)]">Resources</span>
          <h1 className="font-display text-5xl md:text-7xl mt-5 text-[var(--color-primary-foreground)] leading-[1.05] max-w-4xl">
            Knowledge that <em className="text-[var(--color-accent)] not-italic">builds generations.</em>
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl">
            Guides, essays and field notes from across our brands. New articles published monthly.
          </p>
        </div>
      </section>

      <Section tone="cream">
        <div className="flex flex-wrap gap-2 mb-10">
          {(["All", ...CATS] as const).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.2em] border transition-colors ${
                active === c
                  ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] border-[var(--color-primary)]"
                  : "bg-transparent border-[var(--color-border)] text-[var(--color-charcoal)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <article key={a.title} className="card-luxe p-7 flex flex-col">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em]">
                <span className="text-[var(--color-accent)]">{a.cat}</span>
                <span className="text-[var(--color-muted-foreground)]">{a.read}</span>
              </div>
              <h3 className="font-display text-2xl mt-5 leading-tight">{a.title}</h3>
              <p className="mt-3 text-[15px] text-[var(--color-charcoal)]/80 leading-relaxed">{a.excerpt}</p>
              <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)]">
                Read article <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
