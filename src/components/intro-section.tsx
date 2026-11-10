import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const stats = [
  {
    value: siteConfig.rating.count,
    suffix: "",
    label: "Google reviews",
    detail: "Rated 5.0 by our patients",
  },
  {
    value: 5,
    suffix: ".0",
    label: "Average rating",
    detail: "On Google, from real visits",
  },
  {
    value: 20,
    suffix: "+",
    label: "Services offered",
    detail: "From general care to full reconstruction",
  },
  {
    value: 3,
    suffix: "",
    label: "Steps to a virtual consult",
    detail: "Upload, review, meet in person",
  },
];

export function IntroSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-wide">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-copper-700">
            01 — Welcome
          </span>
          <span className="h-px flex-1 bg-ink/10" />
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="display-2 text-pine-950">
                &ldquo;We want to get to know our patients and tailor each
                procedure to suit each individual{" "}
                <em className="italic text-copper-600">need.</em>&rdquo;
              </h2>
            </Reveal>
          </div>
          <div className="flex items-end lg:col-span-4">
            <Reveal delay={0.08}>
              <p className="font-mono text-[0.66rem] uppercase leading-5 tracking-[0.18em] text-ink-soft/55">
                Garr Dental Center
                <br />
                Carrington, North Dakota
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-base leading-8 text-ink-soft md:text-[1.05rem]">
                At Garr Dental Center you will find we offer not just excellent
                dental care and meaningful procedures, but we aim to do so with
                compassionate patient service. You will also experience
                supra-gingival minimally invasive dental techniques that are a
                healthier form of dentistry because work is completed above the
                gum line.
              </p>
              <p className="mt-5 text-base leading-8 text-ink-soft md:text-[1.05rem]">
                Our wide range of services provide our patients with smiles that
                are both healthy and beautiful.
              </p>
              <Button asChild variant="outline" className="group mt-8">
                <Link href="/about">
                  Meet the practice
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink/10 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.06} className="bg-paper">
                  <div className="group h-full p-6 transition-colors duration-500 hover:bg-cream md:p-7">
                    <p className="font-display text-5xl leading-none tracking-[-0.04em] text-pine-950 md:text-6xl">
                      <Counter
                        value={stat.value}
                        suffix={stat.suffix}
                        decimals={0}
                      />
                    </p>
                    <p className="mt-4 text-sm font-semibold text-pine-950">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-ink-soft/65">
                      {stat.detail}
                    </p>
                    <span className="mt-5 block h-px w-8 bg-copper-500/50 transition-all duration-500 group-hover:w-14" />
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-xl text-xs leading-6 text-ink-soft/55">
                A note on the numbers: 232 reviews, a 5.0 average, and a care
                catalogue built around the services our Carrington community
                asks for.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
