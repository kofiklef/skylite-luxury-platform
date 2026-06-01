import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Generations Skylite home">
      <span
        className={`flex h-10 w-10 items-center justify-center border ${
          light ? "border-[var(--color-accent)]" : "border-[var(--color-primary)]"
        }`}
        aria-hidden
      >
        <span
          className="font-display text-xl leading-none"
          style={{ color: light ? "var(--color-accent)" : "var(--color-primary)" }}
        >
          GS
        </span>
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className="font-display text-base tracking-wide"
          style={{ color: light ? "var(--color-primary-foreground)" : "var(--color-primary)" }}
        >
          Generations Skylite
        </span>
        <span
          className="text-[10px] uppercase tracking-[0.28em]"
          style={{ color: light ? "var(--color-accent)" : "var(--color-accent)" }}
        >
          Better · Brighter
        </span>
      </span>
    </Link>
  );
}
