import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/brands", label: "Our Brands" },
  { to: "/resources", label: "Resources" },
  { to: "/partners", label: "Partners" },
  { to: "/ewib", label: "EWiB Academy" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-cream)]/95 backdrop-blur border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-prose flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[13px] font-medium tracking-wide text-[var(--color-charcoal)] hover:text-[var(--color-accent)] transition-colors relative"
              activeProps={{ className: "text-[var(--color-accent)]" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary">Contact</Link>
        </div>
        <button
          className="lg:hidden p-2 -mr-2 text-[var(--color-primary)]"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-cream)]">
          <div className="container-prose py-6 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium border-b border-[var(--color-border)]/60"
                activeProps={{ className: "text-[var(--color-accent)]" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-5 w-full">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
