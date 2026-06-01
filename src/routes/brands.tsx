import { createFileRoute } from "@tanstack/react-router";
import { BRANDS } from "@/components/brands/brand-data";
import { BrandCard } from "@/components/brands/BrandCard";
import { Section } from "@/components/ui/Section";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Our Brands — 10 Companies Under Generations Skylite" },
      { name: "description", content: "Explore all ten brands under Generations Skylite — from Adapted Abilities Consulting to Skylite StartSmart Studio." },
      { property: "og:title", content: "Our Brands — Generations Skylite" },
      { property: "og:description", content: "Ten brands across education, wellness, agriculture, publishing, travel and entrepreneurship." },
      { property: "og:url", content: "/brands" },
    ],
    links: [{ rel: "canonical", href: "/brands" }],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <>
      <section className="bg-royal-gradient">
        <div className="container-prose py-24 md:py-32">
          <span className="gold-divider text-[var(--color-accent)]">The Ecosystem</span>
          <h1 className="font-display text-5xl md:text-7xl mt-5 text-[var(--color-primary-foreground)] leading-[1.05] max-w-4xl">
            Ten brands. <em className="text-[var(--color-accent)] not-italic">Two continents.</em> One promise.
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl">
            Each brand operates with its own voice — yet contributes to one shared vision: better together, brighter tomorrow.
          </p>
        </div>
      </section>

      <Section tone="cream">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((b) => <BrandCard key={b.id} brand={b} />)}
        </div>
      </Section>
    </>
  );
}
