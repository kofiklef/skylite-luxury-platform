import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/ui/Section";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Audrey Afriyie Agyemang | Generations Skylite" },
      { name: "description", content: "Meet Audrey Afriyie Agyemang, M.Ed., M.ISM — founder & CEO of Generations Skylite LLC and creator of the AFRI Framework." },
      { property: "og:title", content: "About — Generations Skylite" },
      { property: "og:description", content: "Founder profile, mission, vision and core values." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const CREDENTIALS = [
  "M.Ed. Special Education — Grand Canyon University",
  "M.ISM — Walden University",
  "Grad. Diploma — Data Management",
  "AFRI Framework Creator",
  "IB School Consultant, Accra",
];

const VALUES = ["Faith", "Integrity", "Excellence", "Legacy"];

function About() {
  return (
    <>
      <section className="bg-royal-gradient">
        <div className="container-prose py-24 md:py-32">
          <span className="gold-divider text-[var(--color-accent)]">Founder</span>
          <h1 className="font-display text-5xl md:text-7xl mt-5 text-[var(--color-primary-foreground)] leading-[1.05] max-w-4xl">
            Audrey Afriyie Agyemang, <em className="text-[var(--color-accent)] not-italic">M.Ed., M.ISM</em>
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl">Founder & CEO, Generations Skylite LLC · Philadelphia · Accra</p>
        </div>
      </section>

      <Section tone="cream">
        <div className="grid gap-14 md:grid-cols-12 items-start">
          <div className="md:col-span-5">
            <div className="relative">
              <img src={heroImg} alt="Audrey Afriyie Agyemang portrait" className="w-full aspect-[4/5] object-cover" loading="lazy" width={1200} height={1500} />
              <div className="absolute -inset-2 border border-[var(--color-accent)]/50 -z-10" />
            </div>
            <p className="mt-6 text-sm italic text-[var(--color-muted-foreground)]">
              Educator. Strategist. Mother of brands. From Philadelphia to Accra, building generational equity.
            </p>
          </div>
          <div className="md:col-span-7">
            <span className="gold-divider">Credentials</span>
            <ul className="mt-6 space-y-3">
              {CREDENTIALS.map((c) => (
                <li key={c} className="flex gap-3 text-[15px]">
                  <span className="text-[var(--color-accent)]">◆</span>{c}
                </li>
              ))}
            </ul>

            <div className="mt-12 grid gap-10">
              <div>
                <h2 className="font-display text-3xl">Mission</h2>
                <p className="mt-3 text-[var(--color-charcoal)]/85 leading-relaxed">
                  Empower communities through education, natural wellness and ethical enterprise.
                </p>
              </div>
              <div>
                <h2 className="font-display text-3xl">Vision</h2>
                <p className="mt-3 text-[var(--color-charcoal)]/85 leading-relaxed">
                  A world where every generation has access to knowledge, health and opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="royal" eyebrow="Core Values"
        title={<span className="text-[var(--color-primary-foreground)]">Faith · Integrity · Excellence · Legacy</span>}
      >
        <div className="grid gap-6 md:grid-cols-4">
          {VALUES.map((v, i) => (
            <div key={v} className="border-t border-[var(--color-accent)]/40 pt-6">
              <span className="font-display text-5xl text-[var(--color-accent)]">0{i+1}</span>
              <h3 className="font-ewib mt-4 text-xl uppercase tracking-wider text-[var(--color-primary-foreground)]">{v}</h3>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <Link to="/contact" className="btn-primary">Connect with Audrey</Link>
        </div>
      </Section>
    </>
  );
}
