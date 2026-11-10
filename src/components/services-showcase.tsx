import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { Button } from "@/components/ui/button";
import { featuredServices } from "@/lib/services";
import { cn } from "@/lib/utils";

const cardStyles = [
  "bg-pine-950 text-cream md:col-span-7",
  "bg-cream text-ink md:col-span-5",
  "bg-copper-200/55 text-ink md:col-span-5",
  "bg-sage-100 text-ink md:col-span-7",
  "bg-cream text-ink md:col-span-6",
  "bg-pine-900 text-cream md:col-span-6",
];

const numberStyles = [
  "text-cream/30",
  "text-ink/30",
  "text-copper-700/50",
  "text-pine-800/35",
  "text-ink/30",
  "text-cream/30",
];

const descriptionStyles = [
  "text-cream/60",
  "text-ink-soft",
  "text-ink-soft",
  "text-ink-soft",
  "text-ink-soft",
  "text-cream/60",
];

const linkStyles = [
  "text-copper-300",
  "text-copper-700",
  "text-copper-700",
  "text-pine-800",
  "text-copper-700",
  "text-copper-300",
];

const accents = [
  "from-copper-500/25 via-transparent to-transparent",
  "from-sage-300/30 via-transparent to-transparent",
  "from-copper-500/25 via-transparent to-transparent",
  "from-pine-600/15 via-transparent to-transparent",
  "from-copper-400/20 via-transparent to-transparent",
  "from-sage-300/20 via-transparent to-transparent",
];

export function ServicesShowcase() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  A full spectrum of care,{" "}
                  <em className="italic text-copper-600">considered.</em>
                </>
              }
              description="Cosmetic, restorative, general and comfort-led dentistry — brought together in one Carrington practice, with each procedure tailored to the individual."
            />
          </Reveal>
          <Reveal delay={0.1} className="shrink-0">
            <Button asChild variant="outline">
              <Link href="/services">
                Explore every service
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-12">
          {featuredServices.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={index * 0.06}
              className={cn("group", cardStyles[index])}
            >
              <Link
                href={`/services/${service.slug}`}
                className="relative flex h-full min-h-[19rem] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-ink/[0.07] p-6 transition-transform duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1 md:p-8"
              >
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                    accents[index],
                  )}
                />
                <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full border border-current opacity-[0.08] transition-transform duration-700 group-hover:scale-110" />

                <div className="relative flex items-start justify-between gap-4">
                  <span
                    className={cn(
                      "font-mono text-[0.7rem] uppercase tracking-[0.2em]",
                      numberStyles[index],
                    )}
                  >
                    0{index + 1}
                  </span>
                  <span
                    className={cn(
                      "grid size-11 place-items-center rounded-full border transition-transform duration-500 group-hover:rotate-[-8deg]",
                      index === 0 || index === 5
                        ? "border-cream/20 text-copper-300"
                        : "border-ink/12 text-copper-700",
                    )}
                  >
                    <ServiceIcon icon={service.icon} className="size-5" />
                  </span>
                </div>

                <div className="relative mt-10">
                  <h3 className="display-3 max-w-[15ch]">{service.name}</h3>
                  <p
                    className={cn(
                      "mt-4 line-clamp-3 max-w-xl text-sm leading-7",
                      descriptionStyles[index],
                    )}
                  >
                    {service.description}
                  </p>
                  <span
                    className={cn(
                      "mt-6 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em]",
                      linkStyles[index],
                    )}
                  >
                    Explore this care
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-ink/10 bg-cream/50 px-6 py-5 sm:flex-row sm:items-center">
            <p className="text-sm text-ink-soft">
              Looking for something specific? Our full catalogue includes{" "}
              <span className="font-semibold text-pine-950">
                clear aligners, veneers, crowns, dentures, root canals
              </span>{" "}
              and more.
            </p>
            <Link
              href="/services"
              className="link-underline shrink-0 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-copper-700"
            >
              View the full list
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
