import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import naturalsImg from "@/assets/naturals.jpg";
import { BRANDS } from "@/components/brands/brand-data";
import { BrandCard } from "@/components/brands/BrandCard";
import { Section } from "@/components/ui/Section";
import { GraduationCap, Sprout, Leaf, Rocket, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Generations Skylite LLC — Better Together. Brighter Tomorrow." },
      { name: "description", content: "A global multi-brand company building generations through education, innovation and natural living. Ten brands. Two continents. One mission." },
      { property: "og:title", content: "Generations Skylite LLC" },
      { property: "og:description", content: "Building generations through education, innovation and natural living — from Philadelphia to Accra." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const IMPACT = [
  { icon: GraduationCap, title: "Education", text: "Inclusive learning systems, teacher training and the AFRI Framework." },
  { icon: Sprout, title: "Agriculture", text: "Sustainable food production and Ghana-rooted agro-processing." },
  { icon: Leaf, title: "Wellness", text: "Cold-pressed naturals, herbal teas and clean-label body care." },
  { icon: Rocket, title: "Entrepreneurship", text: "Premium training for women and West African founders." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-royal-gradient">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImg} alt="" className="h-full w-full object-cover object-right" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/85 to-transparent" />
        </div>
        <div className="container-prose relative py-28 md:py-44">
          <div className="max-w-2xl anim-fade-up">
            <span className="gold-divider text-[var(--color-accent)]">Est. Philadelphia · Accra</span>
            <h1 className="font-display text-5xl md:text-7xl mt-6 leading-[1.02] text-[var(--color-primary-foreground)]">
              Building generations through <em className="text-[var(--color-accent)] not-italic">education, innovation</em> & natural living.
            </h1>
            <p className="mt-7 text-lg text-white/80 max-w-xl leading-relaxed">
              Generations Skylite LLC unites ten purpose-led brands across two continents — empowering communities with knowledge, health and ethical enterprise.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/brands" className="btn-primary">Explore Our Brands</Link>
              <Link to="/contact" className="btn-outline">Work With Us</Link>
            </div>
            <dl className="mt-16 grid grid-cols-3 gap-6 max-w-md">
              {[["10","Brands"],["2","Continents"],["6","Sectors"]].map(([n,l]) => (
                <div key={l}>
                  <dt className="font-display text-4xl text-[var(--color-accent)]">{n}</dt>
                  <dd className="text-xs uppercase tracking-[0.22em] text-white/60 mt-1">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <Section eyebrow="Who We Are" tone="cream"
        title={<>A house of brands rooted in <em className="text-[var(--color-accent)] not-italic">faith, family</em> and the African future.</>}
        intro="Founded by Audrey Afriyie Agyemang — educator, social impact strategist and AFRI Framework creator — Generations Skylite is a global multi-sector company linking inclusive education, natural wellness, agro-processing, faith publishing, artisan craft and women's entrepreneurship under one disciplined operating system."
      >
        <div className="mt-4 flex flex-wrap gap-3">
          <Link to="/about" className="btn-dark">Meet the founder <ArrowRight size={14} className="ml-2" /></Link>
          <Link to="/services" className="btn-outline" style={{color:"var(--color-primary)", borderColor:"var(--color-primary)"}}>Our services</Link>
        </div>
      </Section>

      {/* BRAND ECOSYSTEM */}
      <Section eyebrow="The Ecosystem" tone="white"
        title="Ten brands. One mission."
        intro="Each brand operates with its own voice and audience — yet contributes to a shared vision of generational impact across Ghana, the diaspora and beyond."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((b) => <BrandCard key={b.id} brand={b} />)}
        </div>
      </Section>

      {/* IMPACT */}
      <Section eyebrow="Impact Pillars" tone="royal"
        title={<span className="text-[var(--color-primary-foreground)]">Where we choose to invest.</span>}
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {IMPACT.map(({icon:Icon,title,text}) => (
            <div key={title} className="border-t border-[var(--color-accent)]/40 pt-6">
              <Icon size={28} className="text-[var(--color-accent)]" />
              <h3 className="font-display text-2xl mt-4 text-[var(--color-primary-foreground)]">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* NATURALS SPOTLIGHT */}
      <section className="bg-[var(--color-cream)] py-20 md:py-28">
        <div className="container-prose grid gap-12 md:grid-cols-2 items-center">
          <div className="relative overflow-hidden">
            <img src={naturalsImg} alt="Skylite Naturals product collection — moringa, palm kernel oil, body butter" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1400} height={1000} />
            <div className="absolute inset-0 ring-1 ring-[var(--color-accent)]/30 pointer-events-none" />
          </div>
          <div>
            <span className="gold-divider">Spotlight · Skylite Naturals</span>
            <h2 className="font-display text-4xl md:text-5xl mt-5 leading-tight">Nature's goodness.<br/><em className="text-[var(--color-accent)] not-italic">Naturally you.</em></h2>
            <p className="mt-5 text-[var(--color-charcoal)]/80 leading-relaxed">
              Cold-pressed palm kernel oil, moringa powder, herbal teas and body butter — produced in Ghana with FDA / EPA-compliant standards for global distribution.
            </p>
            <Link to="/services" className="btn-dark mt-8">Distribution & supply</Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-royal-gradient relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 gold-rule" />
        <div className="absolute inset-x-0 bottom-0 gold-rule" />
        <div className="container-prose py-24 text-center">
          <span className="gold-divider text-[var(--color-accent)]">Partnership</span>
          <h2 className="font-display text-4xl md:text-6xl mt-5 max-w-4xl mx-auto text-[var(--color-primary-foreground)] leading-[1.05]">
            Partner with a vision that <em className="text-[var(--color-accent)] not-italic">builds generations.</em>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/partners" className="btn-primary">Work With Us</Link>
            <Link to="/brands" className="btn-outline">Explore Our Brands</Link>
          </div>
        </div>
      </section>
    </>
  );
}
