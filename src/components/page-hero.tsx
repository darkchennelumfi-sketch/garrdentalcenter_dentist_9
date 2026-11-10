import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
  crumbs = [],
  tone = "light",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
  crumbs?: { label: string; href?: string }[];
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20",
        tone === "dark" ? "bg-pine-950 text-cream" : "text-ink",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        {tone === "light" ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(200,216,207,0.65),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(241,211,191,0.5),transparent_38%),radial-gradient(circle_at_50%_100%,rgba(236,228,212,0.8),transparent_52%)]" />
            <div className="grid-lines absolute inset-0 opacity-50 [mask-image:radial-gradient(circle_at_50%_30%,black,transparent_80%)]" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,123,108,0.35),transparent_45%),radial-gradient(circle_at_85%_70%,rgba(196,118,63,0.24),transparent_40%)]" />
            <div className="grid-lines-dark absolute inset-0 opacity-50 [mask-image:radial-gradient(circle_at_50%_30%,black,transparent_80%)]" />
          </>
        )}
        <div className="absolute -right-20 top-10 select-none font-display text-[18rem] leading-none tracking-[-0.06em] text-ink/[0.025] md:text-[26rem]">
          G
        </div>
      </div>

      <div className="container-wide relative">
        {crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className={cn(
              "mb-8 flex flex-wrap items-center gap-2 font-mono text-[0.64rem] uppercase tracking-[0.16em]",
              tone === "dark" ? "text-cream/55" : "text-ink-soft/55",
            )}
          >
            <Link
              href="/"
              className={cn(
                "transition-colors",
                tone === "dark" ? "hover:text-cream" : "hover:text-pine-950",
              )}
            >
              Home
            </Link>
            {crumbs.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-2">
                <ChevronRight className="size-3 opacity-50" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className={cn(
                      "transition-colors",
                      tone === "dark"
                        ? "hover:text-cream"
                        : "hover:text-pine-950",
                    )}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className={cn(
                      tone === "dark" ? "text-copper-300" : "text-copper-700",
                    )}
                  >
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p
              className={cn(
                "eyebrow flex items-center gap-3",
                tone === "dark" ? "text-copper-300" : "text-copper-700",
              )}
            >
              <span
                className={cn(
                  "inline-block h-px w-8",
                  tone === "dark" ? "bg-copper-300/60" : "bg-copper-600/50",
                )}
              />
              {eyebrow}
            </p>
            <h1
              className={cn(
                "display-1 mt-6 max-w-[15ch]",
                tone === "dark" ? "text-cream" : "text-pine-950",
              )}
            >
              {title}
            </h1>
            {description && (
              <p
                className={cn(
                  "mt-7 max-w-2xl text-base leading-8 md:text-[1.05rem]",
                  tone === "dark" ? "text-cream/60" : "text-ink-soft",
                )}
              >
                {description}
              </p>
            )}
            {actions && (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                {actions}
              </div>
            )}
          </div>
          {aside && <div className="lg:col-span-4">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
