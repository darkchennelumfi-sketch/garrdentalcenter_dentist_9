import Link from "next/link";

import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("size-10", className)}
    >
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke="currentColor"
        strokeOpacity="0.22"
      />
      <path
        d="M11 27.5c2.9 7.2 8.1 11.2 13 11.2s10.1-4 13-11.2"
        stroke="var(--color-copper-500)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M16.2 19.4c0-5.2 3.5-8.4 7.8-8.4s7.8 3.2 7.8 8.4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="14.2" r="1.9" fill="var(--color-copper-500)" />
    </svg>
  );
}

export function Wordmark({
  className,
  tone = "dark",
  compact = false,
}: {
  className?: string;
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Garr Dental Center — home"
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity hover:opacity-85",
        className,
      )}
    >
      <LogoMark
        className={cn(
          "size-9 shrink-0 transition-transform duration-500 group-hover:rotate-[-8deg]",
          tone === "light" ? "text-cream" : "text-pine-900",
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.45rem] leading-none tracking-[-0.04em]",
            tone === "light" ? "text-cream" : "text-pine-950",
          )}
        >
          Garr
        </span>
        {!compact && (
          <span
            className={cn(
              "mt-1 font-mono text-[0.58rem] font-medium uppercase tracking-[0.32em]",
              tone === "light" ? "text-cream/55" : "text-ink-soft/70",
            )}
          >
            Dental Center
          </span>
        )}
      </span>
    </Link>
  );
}
