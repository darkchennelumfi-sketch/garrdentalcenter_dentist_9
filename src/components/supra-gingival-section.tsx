import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, HeartPulse, Leaf, Sparkles } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const principles = [
  {
    icon: Leaf,
    title: "Minimally invasive",
    body: "The healthiest approach in dentistry uses supra-gingival minimally invasive techniques.",
  },
  {
    icon: HeartPulse,
    title: "Healthier by design",
    body: "Work is completed above the gum line, making it a healthier form of dentistry.",
  },
  {
    icon: Sparkles,
    title: "Comfort-first care",
    body: "Our SOLEA laser takes the drill, the needle, the noise, and the pain out of dental visits.",
  },
];

export function SupraGingivalSection() {
  return (
    <section className="relative overflow-hidden bg-pine-950 py-24 text-cream md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 size-[34rem] rounded-full bg-pine-700/35 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 size-[30rem] rounded-full bg-copper-700/20 blur-[120px]" />
        <div className="grid-lines-dark absolute inset-0 opacity-50 [mask-image:radial-gradient(circle_at_50%_40%,black,transparent_80%)]" />
      </div>

      <div className="container-wide relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-cream/15 bg-cream shadow-[0_50px_120px_-50px_rgba(0,0,0,0.9)]">
                <Image
                  src="/art/gumline.svg"
                  alt="Illustration of a tooth above the gum line"
                  width={1200}
                  height={620}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 left-5 rounded-2xl border border-cream/15 bg-pine-900/85 p-4 shadow-lift backdrop-blur-xl sm:left-8">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-copper-300">
                  The difference
                </p>
                <p className="mt-1.5 font-display text-2xl leading-none text-cream">
                  Above the gum line
                </p>
              </div>
              <div className="absolute -right-3 -top-5 hidden rotate-6 rounded-full bg-copper-500 px-4 py-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-pine-950 shadow-lift sm:block">
                Healthier dentistry
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="The supra-gingival difference"
                title={
                  <>
                    Better for your mouth.{" "}
                    <em className="italic text-gradient-sage">
                      Gentler on you.
                    </em>
                  </>
                }
                description="All procedures in medicine and dentistry can be provided with a variety of approaches: some aggressive, and some much less extreme. At Garr Dental Center, we've found that the healthiest approach uses supra-gingival minimally invasive techniques."
              />
            </Reveal>

            <div className="mt-10 space-y-1">
              {principles.map((principle, index) => (
                <Reveal key={principle.title} delay={0.08 * index}>
                  <div className="group flex gap-5 border-t border-cream/10 py-5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-cream/15 text-copper-300 transition-colors duration-300 group-hover:border-copper-400/50 group-hover:bg-copper-500/10">
                      <principle.icon className="size-5" strokeWidth={1.4} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl tracking-[-0.02em] text-cream">
                        {principle.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-sm leading-6 text-cream/55">
                        {principle.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <Button asChild variant="cream" className="group mt-8">
                <Link href="/services/supra-gingival-dentistry">
                  See the supra-gingival approach
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
