import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/ui/Section";
import { BookOpen, Package, Truck } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Education, Product Development & Supply | Generations Skylite" },
      { name: "description", content: "Education & consulting, product development and supply & distribution across West Africa and the United States." },
      { property: "og:title", content: "Services — Generations Skylite" },
      { property: "og:description", content: "Three service pillars: education & consulting, product development, supply & distribution." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const PILLARS = [
  { num: "01", icon: BookOpen, title: "Education & Consulting", items: ["Teacher training", "IEP systems", "AFRI Framework", "Adapted Abilities AI", "Inclusive audits"] },
  { num: "02", icon: Package, title: "Product Development", items: ["Cold-pressed oils & body care", "Agro-processing powders & teas", "Ghanaian beaded jewelry", "Faith-based publishing", "Packaging & branding"] },
  { num: "03", icon: Truck, title: "Supply & Distribution", items: ["Bulk palm oil & PKO supply", "Groundnut paste & food export", "Wholesale partnerships", "West Africa–US trade bridges", "Ghana FDA / EPA compliance"] },
];

function Services() {
  return (
    <>
      <section className="bg-royal-gradient">
        <div className="container-prose py-24 md:py-32">
          <span className="gold-divider text-[var(--color-accent)]">What We Do</span>
          <h1 className="font-display text-5xl md:text-7xl mt-5 text-[var(--color-primary-foreground)] leading-[1.05] max-w-4xl">
            Three pillars. <em className="text-[var(--color-accent)] not-italic">One integrated operation.</em>
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl">
            From classroom transformation in Accra to wholesale exports landing in the United States — we deliver across the full value chain.
          </p>
        </div>
      </section>

      <Section tone="cream">
        <div className="grid gap-8 md:grid-cols-3">
          {PILLARS.map((p) => (
            <article key={p.num} className="card-luxe p-8 flex flex-col">
              <div className="flex items-center justify-between">
                <p.icon size={26} className="text-[var(--color-accent)]" />
                <span className="font-display text-4xl text-[var(--color-accent)]/70">{p.num}</span>
              </div>
              <h2 className="font-display text-2xl mt-6">{p.title}</h2>
              <ul className="mt-5 space-y-2.5 text-[15px] text-[var(--color-charcoal)]/85">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-2.5"><span className="text-[var(--color-accent)] shrink-0">—</span>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-14 flex gap-3 flex-wrap">
          <Link to="/contact" className="btn-dark">Book a consultation</Link>
          <Link to="/partners" className="btn-outline" style={{color:"var(--color-primary)", borderColor:"var(--color-primary)"}}>Partner with us</Link>
        </div>
      </Section>
    </>
  );
}
