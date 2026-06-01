import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Phone, MessageCircle, Mail, MapPin, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Generations Skylite LLC" },
      { name: "description", content: "Reach Generations Skylite via email, WhatsApp or phone in the US and Ghana. We respond within one business day." },
      { property: "og:title", content: "Contact — Generations Skylite" },
      { property: "og:description", content: "Send a message or reach us via WhatsApp, email and phone." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `Name: ${fd.get("first")} ${fd.get("last")}\nEmail: ${fd.get("email")}\n\n${fd.get("message")}`
    );
    const subject = encodeURIComponent(String(fd.get("subject") || "Website inquiry"));
    window.location.href = `mailto:audrey@generationskylite.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <section className="bg-royal-gradient">
        <div className="container-prose py-24 md:py-32">
          <span className="gold-divider text-[var(--color-accent)]">Contact</span>
          <h1 className="font-display text-5xl md:text-7xl mt-5 text-[var(--color-primary-foreground)] leading-[1.05] max-w-4xl">
            Let's start a <em className="text-[var(--color-accent)] not-italic">conversation.</em>
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl">
            We respond within one business day, across Philadelphia and Accra time zones.
          </p>
        </div>
      </section>

      <Section tone="cream">
        <div className="grid gap-14 md:grid-cols-12">
          <form onSubmit={onSubmit} className="md:col-span-7 space-y-6">
            <span className="gold-divider">Send a message</span>
            <div className="grid sm:grid-cols-2 gap-6">
              <input name="first" required placeholder="First name" className="input-luxe" />
              <input name="last" required placeholder="Last name" className="input-luxe" />
            </div>
            <input name="email" type="email" required placeholder="Email address" className="input-luxe" />
            <input name="subject" placeholder="Subject / area of interest" className="input-luxe" />
            <textarea name="message" required rows={6} placeholder="Your message" className="input-luxe resize-none" />
            <button type="submit" className="btn-primary">Send message</button>
            {sent && <p className="text-sm text-[var(--color-accent)]">Your mail client will open to complete sending.</p>}
          </form>

          <aside className="md:col-span-5 md:pl-10 md:border-l md:border-[var(--color-border)]">
            <span className="gold-divider">Direct contact</span>
            <ul className="mt-6 space-y-5 text-[15px]">
              <li className="flex gap-3"><Phone size={16} className="mt-1 text-[var(--color-accent)]" /><span><strong>+1 (445) 249-8383</strong><br/><span className="text-[var(--color-muted-foreground)] text-sm">United States</span></span></li>
              <li className="flex gap-3"><Phone size={16} className="mt-1 text-[var(--color-accent)]" /><span><strong>+233 592 012 888</strong><br/><span className="text-[var(--color-muted-foreground)] text-sm">Ghana</span></span></li>
              <li className="flex gap-3"><MessageCircle size={16} className="mt-1 text-[var(--color-accent)]" /><a href="https://wa.me/233592012888" className="hover:text-[var(--color-accent)]"><strong>WhatsApp Ghana</strong> · +233 592 012 888</a></li>
              <li className="flex gap-3"><MessageCircle size={16} className="mt-1 text-[var(--color-accent)]" /><a href="https://wa.me/12674693815" className="hover:text-[var(--color-accent)]"><strong>WhatsApp US</strong> · +1 267-469-3815</a></li>
              <li className="flex gap-3"><Mail size={16} className="mt-1 text-[var(--color-accent)]" /><a href="mailto:audrey@generationskylite.com" className="hover:text-[var(--color-accent)] break-all">audrey@generationskylite.com</a></li>
              <li className="flex gap-3"><MapPin size={16} className="mt-1 text-[var(--color-accent)]" /><span>Philadelphia, PA · USA<br/>Accra, Ghana · West Africa</span></li>
              <li className="flex gap-3"><Instagram size={16} className="mt-1 text-[var(--color-accent)]" /><a href="https://instagram.com/generation.s.kylite" className="hover:text-[var(--color-accent)]">@generation.s.kylite</a></li>
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
