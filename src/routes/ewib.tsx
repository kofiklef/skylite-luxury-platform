import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import ewibImg from "@/assets/ewib.jpg";

export const Route = createFileRoute("/ewib")({
  head: () => ({
    meta: [
      { title: "EWiB Academy — Educational Women in Business | Greater Accra" },
      { name: "description", content: "What others teach in 6 weeks — EWiB delivers in ONE day. Five Business Engines for women entrepreneurs in Greater Accra, Ghana." },
      { property: "og:title", content: "EWiB Academy" },
      { property: "og:description", content: "Premium women's business academy. Skincare · Beading · Food Processing · Branding · Sales & Profit." },
      { property: "og:url", content: "/ewib" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/ewib" }],
  }),
  component: Ewib,
});

const ENGINES = [
  { n: "01", title: "Skincare", desc: "Hands-on natural skincare formulation from raw materials to retail-ready product." },
  { n: "02", title: "Beading", desc: "Traditional Ghanaian beading craft, design language and modern bespoke production." },
  { n: "03", title: "Food Processing", desc: "Clean-label food production: groundnut paste, spice blends and meal kits." },
  { n: "04", title: "Branding & Packaging", desc: "Brand identity, packaging systems and storytelling that converts." },
  { n: "05", title: "Sales & Profit", desc: "Pricing systems, sales operations and the math behind a profitable engine." },
];

const SCHEDULE = [
  { time: "9:00 — 11:00 AM", title: "Business Engine", desc: "Hands-on industry training" },
  { time: "11:00 — 12:00 PM", title: "Networking Break", desc: "Mastermind & linkups" },
  { time: "12:00 — 2:00 PM", title: "Foundations", desc: "Strategy, branding & systems" },
];

function Ewib() {
  return (
    <div className="font-ewib-section">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-royal-gradient">
        <div className="absolute inset-0 opacity-25">
          <img src={ewibImg} alt="" className="h-full w-full object-cover" width={1600} height={1000} />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/85 to-transparent" />
        </div>
        <div className="container-prose relative py-28 md:py-40">
          <p className="font-ewib text-[var(--color-accent)] text-xs md:text-sm tracking-[0.4em] uppercase">EWiB · Educational Women in Business</p>
          <h1 className="font-ewib mt-6 text-5xl md:text-7xl uppercase text-[var(--color-primary-foreground)] leading-[1.05] max-w-4xl">
            What others teach in 6 weeks — <span className="text-[var(--color-accent)]">EWiB delivers in ONE day.</span>
          </h1>
          <p className="mt-7 text-lg text-white/80 max-w-2xl italic">
            "Arise, shine; for thy light is come." — Isaiah 60:1
          </p>
          <div className="mt-10 flex flex-wrap gap-3 items-center">
            <a href="#register" className="btn-primary font-ewib">Register Now</a>
            <div className="text-white/80 text-sm">
              <span className="text-[var(--color-accent)] font-semibold text-lg">GHS 1,500</span> per engine ·
              <span className="ml-2">GHS 100</span> registration ·
              <span className="ml-2 text-[var(--color-accent)]">Early bird GHS 1,275</span>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINES */}
      <section className="bg-[var(--color-cream)] py-20 md:py-28">
        <div className="container-prose">
          <span className="gold-divider">5 Business Engines</span>
          <h2 className="font-ewib uppercase text-3xl md:text-5xl mt-5 text-[var(--color-primary)]">
            One Full Saturday per Engine
          </h2>
          <p className="mt-4 text-[var(--color-charcoal)]/80 max-w-2xl">
            Greater Accra, Ghana · Minimum 30 participants per session.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {ENGINES.map((e) => (
              <article key={e.n} className="card-luxe p-6">
                <span className="font-display text-4xl text-[var(--color-accent)]">{e.n}</span>
                <h3 className="font-ewib uppercase text-lg mt-4 text-[var(--color-primary)] tracking-wider">{e.title}</h3>
                <p className="mt-3 text-sm text-[var(--color-charcoal)]/80 leading-relaxed">{e.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="bg-royal-gradient py-20 md:py-28">
        <div className="container-prose">
          <span className="gold-divider text-[var(--color-accent)]">Day Schedule</span>
          <h2 className="font-ewib uppercase text-3xl md:text-5xl mt-5 text-[var(--color-primary-foreground)]">
            From sunrise to systems.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {SCHEDULE.map((s) => (
              <div key={s.title} className="border border-[var(--color-accent)]/40 p-7">
                <p className="font-ewib text-[var(--color-accent)] tracking-widest text-sm">{s.time}</p>
                <h3 className="font-ewib uppercase text-2xl mt-3 text-[var(--color-primary-foreground)]">{s.title}</h3>
                <p className="mt-3 text-white/70 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-[var(--color-cream)] py-20 md:py-28">
        <div className="container-prose">
          <span className="gold-divider">Pricing</span>
          <h2 className="font-ewib uppercase text-3xl md:text-5xl mt-5 text-[var(--color-primary)]">Invest in yourself.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { label: "Registration Fee", price: "GHS 100", note: "Non-refundable · Secures your spot" },
              { label: "Per Engine (Full Day)", price: "GHS 1,500", note: "One full Saturday · Greater Accra", featured: true },
              { label: "Early Bird (First 10)", price: "GHS 1,275", note: "15% off · Save GHS 225" },
            ].map((p) => (
              <div key={p.label} className={`p-8 border ${p.featured ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] border-[var(--color-accent)]" : "bg-white border-[var(--color-border)]"}`}>
                <p className={`text-xs uppercase tracking-[0.22em] ${p.featured ? "text-[var(--color-accent)]" : "text-[var(--color-accent)]"}`}>{p.label}</p>
                <p className="font-display text-5xl mt-4" style={{color: p.featured ? "var(--color-accent)" : "var(--color-primary)"}}>{p.price}</p>
                <p className={`mt-4 text-sm ${p.featured ? "text-white/70" : "text-[var(--color-muted-foreground)]"}`}>{p.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="border border-[var(--color-border)] p-7 bg-white">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]">Location System</p>
              <div className="mt-4 flex gap-6">
                <div><h3 className="font-ewib uppercase text-2xl">East Legon</h3><p className="text-sm text-[var(--color-muted-foreground)]">Greater Accra</p></div>
                <div><h3 className="font-ewib uppercase text-2xl">Tema</h3><p className="text-sm text-[var(--color-muted-foreground)]">Greater Accra</p></div>
              </div>
              <p className="mt-4 text-sm italic text-[var(--color-muted-foreground)]">Final venue confirmed after registration closes · Majority vote decides · Announced within 48 hours of hitting minimum.</p>
            </div>
            <div className="border border-[var(--color-border)] p-7 bg-white">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]">Payment Info</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><strong>Mobile Money:</strong> +233-599-511-855</li>
                <li><strong>Account:</strong> Generations Skylite LLC</li>
                <li><strong>WhatsApp:</strong> +1 267-469-3815 (US)</li>
                <li><strong>Email:</strong> audrey@generationskylite.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <RegistrationForm />

      {/* ORIGIN */}
      <section className="bg-royal-gradient py-20 md:py-28">
        <div className="container-prose grid gap-12 md:grid-cols-2 items-center">
          <div>
            <span className="gold-divider text-[var(--color-accent)]">Origin Story</span>
            <h2 className="font-ewib uppercase text-3xl md:text-5xl mt-5 text-[var(--color-primary-foreground)]">
              Born on Resurrection Sunday.
            </h2>
            <p className="mt-6 text-white/80 leading-relaxed">
              EWiB is a Holy Spirit-given name. Conceived on Resurrection Sunday, the academy stands on the conviction that women called to enterprise deserve compressed, high-craft training — one Saturday, one engine, one transformation.
            </p>
            <p className="mt-6 font-ewib text-[var(--color-accent)] text-lg italic">"Arise, shine; for thy light is come, and the glory of the LORD is risen upon thee." — Isaiah 60:1</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Education","Community","Certification","Resources","Funding","Global Reach"].map((p, i) => (
              <div key={p} className="border border-[var(--color-accent)]/40 p-5">
                <span className="font-display text-3xl text-[var(--color-accent)]">0{i+1}</span>
                <h3 className="font-ewib uppercase text-sm mt-3 text-[var(--color-primary-foreground)] tracking-wider">{p}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines: string[] = [];
    fd.forEach((v, k) => lines.push(`${k}: ${v}`));
    const body = encodeURIComponent(`EWiB Registration\n\n${lines.join("\n")}`);
    window.location.href = `mailto:audrey@generationskylite.com?subject=${encodeURIComponent("EWiB Academy Registration")}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="register" className="bg-white py-20 md:py-28">
      <div className="container-prose max-w-3xl">
        <span className="gold-divider">Registration · 5 Sections</span>
        <h2 className="font-ewib uppercase text-3xl md:text-5xl mt-5 text-[var(--color-primary)]">Reserve your seat.</h2>
        <form onSubmit={onSubmit} className="mt-12 space-y-12">
          <Fieldset n="01" title="Personal Details">
            <div className="grid sm:grid-cols-2 gap-6">
              <input name="full_name" required placeholder="Full name" className="input-luxe" />
              <input name="whatsapp" required placeholder="WhatsApp number" className="input-luxe" />
              <input name="email" type="email" required placeholder="Email" className="input-luxe" />
              <input name="area" required placeholder="Area of residence" className="input-luxe" />
            </div>
          </Fieldset>

          <Fieldset n="02" title="Choose Your Engine">
            <div className="grid sm:grid-cols-2 gap-3">
              {ENGINES.map((e) => (
                <label key={e.n} className="flex items-center gap-3 border border-[var(--color-border)] p-4 cursor-pointer hover:border-[var(--color-accent)]">
                  <input type="radio" name="engine" value={`${e.n} ${e.title}`} required className="accent-[var(--color-accent)]" />
                  <span className="font-ewib uppercase tracking-wider text-sm">{e.n} · {e.title}</span>
                </label>
              ))}
            </div>
          </Fieldset>

          <Fieldset n="03" title="Location">
            <div className="grid sm:grid-cols-2 gap-3">
              {["East Legon", "Tema"].map((loc) => (
                <label key={loc} className="flex items-center gap-3 border border-[var(--color-border)] p-4 cursor-pointer hover:border-[var(--color-accent)]">
                  <input type="radio" name="location" value={loc} required className="accent-[var(--color-accent)]" />
                  <span className="font-ewib uppercase tracking-wider text-sm">{loc}</span>
                </label>
              ))}
            </div>
          </Fieldset>

          <Fieldset n="04" title="Commitment">
            <div className="space-y-6">
              <select name="investment" required className="input-luxe">
                <option value="">Investment option…</option>
                <option>GHS 1,275 — Early Bird (First 10)</option>
                <option>GHS 1,500 — Full Engine</option>
                <option>Multiple Engines — please contact</option>
              </select>
              <input name="occupation" required placeholder="Occupation" className="input-luxe" />
              <textarea name="why" required rows={4} placeholder="Why do you want to join EWiB?" className="input-luxe resize-none" />
            </div>
          </Fieldset>

          <Fieldset n="05" title="Payment">
            <div className="space-y-6">
              <div>
                <p className="text-sm mb-3">Have you paid the GHS 100 registration fee?</p>
                <div className="flex gap-4">
                  {["Yes","Not yet"].map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="paid" value={v} required className="accent-[var(--color-accent)]" /> {v}
                    </label>
                  ))}
                </div>
              </div>
              <input name="momo_ref" placeholder="MoMo reference number (if paid)" className="input-luxe" />
              <button type="submit" className="btn-primary font-ewib">Submit Registration</button>
              {submitted && <p className="text-sm text-[var(--color-accent)]">Opening your mail client to confirm…</p>}
            </div>
          </Fieldset>
        </form>
      </div>
    </section>
  );
}

function Fieldset({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="flex items-center gap-4 mb-6">
        <span className="font-display text-4xl text-[var(--color-accent)]">{n}</span>
        <span className="font-ewib uppercase tracking-wider text-lg text-[var(--color-primary)]">{title}</span>
      </legend>
      {children}
    </fieldset>
  );
}
