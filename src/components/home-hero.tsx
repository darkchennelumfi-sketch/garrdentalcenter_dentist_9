"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, MapPin, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Stars } from "@/components/stars";
import { siteConfig } from "@/lib/site";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function RotatingSeal() {
  return (
    <div className="pointer-events-none absolute -left-10 bottom-24 hidden size-40 text-pine-950 md:block lg:-left-16">
      <svg viewBox="0 0 200 200" className="size-full animate-[spin_34s_linear_infinite]">
        <defs>
          <path
            id="sealPath"
            d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
          />
        </defs>
        <text className="fill-current font-mono text-[9.5px] uppercase tracking-[0.28em]">
          <textPath href="#sealPath">
            Supra-gingival care · SOLEA laser · Minimally invasive ·
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center">
        <Sparkles className="size-6 text-copper-600" strokeWidth={1.2} />
      </span>
    </div>
  );
}

export function HomeHero() {
  const reduce = useReducedMotion();

  const item = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: reduce ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(169,193,181,0.5),transparent_38%),radial-gradient(circle_at_86%_24%,rgba(231,177,139,0.35),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(236,228,212,0.8),transparent_55%)]" />
        <div className="grid-lines absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_50%_35%,black,transparent_78%)]" />
        <div className="absolute -left-24 top-1/3 size-[34rem] rounded-full bg-sage-200/30 blur-[100px]" />
      </div>

      <div className="container-wide relative">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.div {...item(0.05)} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-pine-800/15 bg-cream/50 px-3.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-pine-800 backdrop-blur">
                <MapPin className="size-3" strokeWidth={1.8} />
                Carrington, North Dakota
              </span>
              <span className="hidden font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-soft/60 sm:inline">
                Garr Dental Center
              </span>
            </motion.div>

            <motion.h1
              {...item(0.13)}
              className="display-1 mt-7 max-w-[13ch] text-pine-950"
            >
              A healthier smile starts{" "}
              <em className="relative inline-block italic text-gradient-copper">
                above the gum line.
                <svg
                  viewBox="0 0 420 20"
                  className="absolute -bottom-2 left-0 w-full text-copper-500/60"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 13c74-9 148-9 222-4 68 5 122 3 192-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </em>
            </motion.h1>

            <motion.p
              {...item(0.22)}
              className="mt-8 max-w-xl text-[1.02rem] leading-8 text-ink-soft md:text-[1.08rem]"
            >
              At Garr Dental Center you will find we offer not just excellent
              dental care and meaningful procedures, but we aim to do so with
              compassionate patient service. We tailor each procedure to suit
              each individual need.
            </motion.p>

            <motion.div
              {...item(0.31)}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Request an appointment
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={siteConfig.phoneHref}>
                  Call {siteConfig.phone}
                </a>
              </Button>
            </motion.div>

            <motion.div
              {...item(0.4)}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-ink/10 pt-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl leading-none text-pine-900">
                  {siteConfig.rating.value}
                </span>
                <span className="flex flex-col gap-1">
                  <Stars />
                  <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-ink-soft/70">
                    {siteConfig.rating.count} {siteConfig.rating.source} reviews
                  </span>
                </span>
              </div>
              <span className="hidden h-8 w-px bg-ink/10 sm:block" />
              <div className="flex items-center gap-2 text-sm text-ink-soft">
                <span className="size-1.5 rounded-full bg-copper-500" />
                Supra-gingival &amp; minimally invasive
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-soft">
                <span className="size-1.5 rounded-full bg-copper-500" />
                SOLEA laser dentistry
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 30 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease }}
            className="relative mx-auto w-full max-w-[32rem] lg:col-span-5 lg:max-w-none xl:col-span-6"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] border border-pine-900/20 shadow-[0_50px_120px_-50px_rgba(6,23,19,0.7)]">
              <Image
                src="/art/smile-orb.svg"
                alt="Abstract illustration of a smile arch in deep green and copper"
                fill
                priority
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/50 via-transparent to-transparent" />

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-cream/20 bg-pine-950/35 px-3.5 py-2 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-cream/85 backdrop-blur-md">
                <span className="size-1.5 animate-pulse rounded-full bg-copper-300" />
                Now welcoming new patients
              </div>

              <div className="absolute inset-x-4 bottom-4 rounded-[1.4rem] border border-cream/20 bg-pine-950/45 p-5 text-cream backdrop-blur-xl md:inset-x-5 md:bottom-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-copper-300">
                      New patient offer
                    </p>
                    <p className="mt-2 font-display text-2xl leading-tight">
                      $100 off dental implants
                    </p>
                    <p className="mt-1.5 text-xs text-cream/60">
                      Contact us today for details.
                    </p>
                  </div>
                  <Button
                    asChild
                    size="icon"
                    variant="cream"
                    className="shrink-0"
                  >
                    <Link href="/offers" aria-label="See the new patient offer">
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-8 hidden rounded-2xl border border-ink/10 bg-cream/85 p-4 shadow-soft backdrop-blur-md sm:block lg:-right-6">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-copper-700">
                Patient rated
              </p>
              <div className="mt-2 flex items-end gap-2">
                <span className="font-display text-4xl leading-none text-pine-950">
                  5.0
                </span>
                <Stars className="pb-1" size="size-3" />
              </div>
              <p className="mt-1 text-[0.66rem] text-ink-soft">
                Based on {siteConfig.rating.count} reviews
              </p>
            </div>

            <RotatingSeal />

            <div className="absolute -bottom-6 right-6 hidden items-center gap-2 rounded-full bg-pine-900 px-4 py-2.5 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-cream/80 shadow-lift md:flex">
              <ArrowDownRight className="size-3.5 text-copper-300" />
              Scroll to explore
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
