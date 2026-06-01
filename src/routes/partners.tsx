import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/ui/Section";
import { Handshake, Truck, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Investors — Generations Skylite" },
      { name: "description", content: "Partner with Generations Skylite on inclusive education, product distribution or impact investment in Ghana and West Africa." },
      { property: "og:title", content: "Partners & Investors — Generations Skylite" },
      { property: "og:description", content: "Government & NGO collaboration, product distribution and investment opportunities." },
      { property: "og:url", content: "/partners" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: Partners,
});

const TRACKS = [
  { icon: Handshake, title: "Government & NGO", text: "Collaborate on inclusive education, agricultural development and youth empowerment programs across Ghana and West Africa." },
  { icon: Truck, title: "Product Distribution", text: "Distribute Skylite Naturals, Chefz Nature or BeadNest across new markets. Wholesale pricing and private-label options available." },
  { icon: TrendingUp, title: "Investment & Capital", text: "Industrial processing capacity in Ghana. Impact investors aligned with our mission are welcome to begin a conversation." },
];

function Partners() {
  return (
    <>
      <section className="bg-royal-gradient">
        <div className="container-prose py-24 md:py-32">
          <span className="gold-divider text-[var(--color-accent)]">Partnership</span>
          <h1 className="font-display text-5xl md:text-7xl mt-5 text-[var(--color-primary-foreground)] leading-[1.05] max-w-4xl">
            Build with a <em className="text-[var(--color-accent)] not-italic">house of brands</em> rooted in Africa.
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl">
            We work with governments, NGOs, distributors and aligned investors who believe in the long game of community impact.
          </p>
        </div>
      </section>

      <Section tone="cream">
        <div className="grid gap-8 md:grid-cols-3">
          {TRACKS.map((t) => (
            <article key={t.title} className="card-luxe p-8">
              <t.icon size={28} className="text-[var(--color-accent)]" />
              <h2 className="font-display text-2xl mt-5">{t.title}</h2>
              <p className="mt-3 text-[15px] text-[var(--color-charcoal)]/85 leading-relaxed">{t.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 flex gap-3 flex-wrap">
          <Link to="/contact" className="btn-dark">Request a proposal</Link>
          <Link to="/contact" className="btn-outline" style={{color:"var(--color-primary)", borderColor:"var(--color-primary)"}}>Partner with us</Link>
        </div>
      </Section>
    </>
  );
}
