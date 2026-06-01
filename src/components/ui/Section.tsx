import type { ReactNode } from "react";

export function Section({
  eyebrow, title, intro, children, tone = "cream", id,
}: {
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  tone?: "cream" | "white" | "royal";
  id?: string;
}) {
  const bg = tone === "royal" ? "bg-royal-gradient" : tone === "white" ? "bg-white" : "bg-[var(--color-cream)]";
  const titleColor = tone === "royal" ? "text-[var(--color-primary-foreground)]" : "text-[var(--color-primary)]";
  return (
    <section id={id} className={`${bg} py-20 md:py-28`}>
      <div className="container-prose">
        {(eyebrow || title) && (
          <div className="max-w-3xl">
            {eyebrow && <span className="gold-divider">{eyebrow}</span>}
            {title && (
              <h2 className={`font-display text-4xl md:text-5xl mt-5 leading-[1.1] ${titleColor}`}>
                {title}
              </h2>
            )}
            {intro && (
              <p className={`mt-5 text-base md:text-lg leading-relaxed ${tone === "royal" ? "text-white/80" : "text-[var(--color-charcoal)]/80"}`}>
                {intro}
              </p>
            )}
          </div>
        )}
        {children && <div className={eyebrow || title ? "mt-14" : ""}>{children}</div>}
      </div>
    </section>
  );
}
