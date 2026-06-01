import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { BRANDS } from "@/components/brands/brand-data";

export function Footer() {
  return (
    <footer className="bg-royal-gradient">
      <div className="container-prose py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Generations Skylite LLC</p>
            <h3 className="font-display text-3xl mt-3 text-[var(--color-primary-foreground)]">
              Better Together.<br />Brighter Tomorrow.
            </h3>
            <p className="mt-5 text-sm text-white/70 max-w-sm">
              A global multi-sector company building generations through education,
              innovation, and natural living — from Philadelphia to Accra.
            </p>
            <a
              href="https://instagram.com/generation.s.kylite"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-gold hover:text-[var(--color-accent-bright)] text-sm"
            >
              <Instagram size={16} /> @generation.s.kylite
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-white/80">Navigate</p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {[
                ["/about","About"], ["/services","Services"],
                ["/brands","Our Brands"], ["/resources","Resources"],
                ["/partners","Partners & Investors"], ["/ewib","EWiB Academy"],
                ["/contact","Contact"],
              ].map(([to,label]) => (
                <li key={to}><Link to={to} className="hover:text-gold transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-white/80">The Ten Brands</p>
            <ul className="mt-5 space-y-2 text-sm text-white/80">
              {BRANDS.map((b) => (
                <li key={b.name} className="hover:text-gold transition-colors">{b.name}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-white/80">Reach Us</p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2"><Phone size={14} className="mt-0.5 text-gold" /><span>+1 445 249 8383<br/>+233 592 012 888</span></li>
              <li className="flex items-start gap-2"><MessageCircle size={14} className="mt-0.5 text-gold" /><a href="https://wa.me/233592012888" className="hover:text-gold">WhatsApp</a></li>
              <li className="flex items-start gap-2"><Mail size={14} className="mt-0.5 text-gold" /><a href="mailto:audrey@generationskylite.com" className="hover:text-gold break-all">audrey@generationskylite.com</a></li>
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 text-gold" /><span>Philadelphia, PA<br/>Accra, Ghana</span></li>
            </ul>
          </div>
        </div>

        <div className="gold-rule mt-16" />
        <div className="mt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
          <p>© 2025–2026 Generations Skylite LLC. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Better Together · Brighter Tomorrow</p>
        </div>
      </div>
    </footer>
  );
}
