import Link from "next/link";
import { ArrowUpRight, Gift, ScanLine, Sparkles } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { offers } from "@/lib/site";
import { cn } from "@/lib/utils";

const toneStyles = {
  dark: {
    card: "bg-pine-950 text-cream border-cream/10",
    kicker: "text-copper-300",
    detail: "text-cream/55",
    button: "cream" as const,
    icon: "border-cream/15 text-copper-300",
    value: "text-cream/10",
  },
  light: {
    card: "bg-cream text-ink border-ink/10",
    kicker: "text-copper-700",
    detail: "text-ink-soft",
    button: "primary" as const,
    icon: "border-ink/12 text-copper-700",
    value: "text-pine-900/[0.06]",
  },
  copper: {
    card: "bg-copper-500 text-pine-950 border-copper-700/20",
    kicker: "text-pine-900/70",
    detail: "text-pine-900/70",
    button: "pine" as const,
    icon: "border-pine-900/20 text-pine-900",
    value: "text-pine-950/10",
  },
};

const icons = [Gift, Sparkles, ScanLine];

export function OffersSection() {
  return (
    <section id="offers" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(236,228,212,0.8),transparent_50%)]" />
      </div>

      <div className="container-wide relative">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="New patient offers"
              title={
                <>
                  A thoughtful start,{" "}
                  <em className="italic text-copper-600">with value.</em>
                </>
              }
              description="Three ways to begin. Explore a virtual consult from home, ask about implant savings, or book an implant consult with a CT scan."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-6 text-ink-soft/70">
              Mention the offer when you call or send a message so our team can
              help you apply it.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {offers.map((offer, index) => {
            const style = toneStyles[offer.tone];
            const Icon = icons[index];

            return (
              <Reveal key={offer.id} delay={index * 0.08} className="h-full">
                <article
                  className={cn(
                    "group relative flex h-full min-h-[23rem] flex-col overflow-hidden rounded-[1.9rem] border p-7 shadow-[0_30px_80px_-50px_rgba(6,23,19,0.5)] transition-transform duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 md:p-8",
                    style.card,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute -bottom-8 -right-3 select-none font-display text-[7.5rem] leading-none tracking-[-0.06em]",
                      style.value,
                    )}
                  >
                    {offer.value}
                  </span>

                  <div className="relative flex items-start justify-between gap-4">
                    <p
                      className={cn(
                        "font-mono text-[0.64rem] uppercase tracking-[0.18em]",
                        style.kicker,
                      )}
                    >
                      {offer.kicker}
                    </p>
                    <span
                      className={cn(
                        "grid size-11 place-items-center rounded-full border",
                        style.icon,
                      )}
                    >
                      <Icon className="size-5" strokeWidth={1.4} />
                    </span>
                  </div>

                  <h3 className="relative mt-8 max-w-[16ch] font-display text-[1.9rem] leading-[1.05] tracking-[-0.035em] md:text-[2.15rem]">
                    {offer.title}
                  </h3>
                  <p
                    className={cn(
                      "relative mt-4 max-w-[30ch] text-sm leading-6",
                      style.detail,
                    )}
                  >
                    {offer.detail}
                  </p>

                  <div className="relative mt-auto pt-8">
                    <Button
                      asChild
                      variant={style.button}
                      className="group/button w-full sm:w-auto"
                    >
                      <Link href={offer.href}>
                        {offer.action}
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                      </Link>
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center font-mono text-[0.64rem] uppercase tracking-[0.18em] text-ink-soft/55">
            Offers for new patients · Call 701-652-2300 to schedule
          </p>
        </Reveal>
      </div>
    </section>
  );
}
