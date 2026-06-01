import { ArrowUpRight } from "lucide-react";
import type { Brand } from "./brand-data";

export function BrandCard({ brand }: { brand: Brand }) {
  const isExternal = brand.external;
  const linkProps = isExternal
    ? { href: brand.link, target: "_blank", rel: "noopener noreferrer" }
    : { href: brand.link };

  return (
    <article id={brand.id} className="card-luxe p-7 md:p-8 flex flex-col h-full">
      <div className="flex items-start justify-between">
        <span className="font-display text-5xl text-[var(--color-accent)]/80 leading-none">
          {brand.number}
        </span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
          {brand.sector}
        </span>
      </div>

      <h3 className="font-display text-2xl mt-6 leading-tight">{brand.name}</h3>
      <p className="mt-2 text-sm italic text-[var(--color-muted-foreground)]">
        “{brand.tagline}”
      </p>

      <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-charcoal)]/85">
        {brand.description}
      </p>

      <a
        {...linkProps}
        className="mt-7 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group"
      >
        Learn more
        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </article>
  );
}
