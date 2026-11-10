"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

import { Stars } from "@/components/stars";
import { reviews } from "@/lib/reviews";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 7500;

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex(((next % reviews.length) + reviews.length) % reviews.length);
    },
    [],
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const previous = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  useEffect(() => {
    if (paused || reduce) return;
    const timer = window.setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % reviews.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduce]);

  const review = reviews[index];

  return (
    <section className="relative overflow-hidden bg-sand/55 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(200,216,207,0.6),transparent_42%),radial-gradient(circle_at_88%_80%,rgba(241,211,191,0.45),transparent_38%)]" />
        <div className="grid-lines absolute inset-0 opacity-50 [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_82%)]" />
      </div>

      <div className="container-wide relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow flex items-center gap-3 text-copper-700">
              <span className="inline-block h-px w-8 bg-copper-600/50" />
              Hear from our patients
            </p>
            <h2 className="display-2 mt-6 text-pine-950">
              232 reasons to feel{" "}
              <em className="italic text-copper-600">at home.</em>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-ink-soft">
              Real words from real patients, shared on Google. We&apos;re proud
              of the care behind every review.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream/65 p-5 backdrop-blur-sm">
              <span className="font-display text-5xl leading-none text-pine-950">
                {siteConfig.rating.value}
              </span>
              <div>
                <Stars />
                <p className="mt-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-ink-soft/60">
                  Based on {siteConfig.rating.count} reviews
                </p>
                <p className="mt-1 text-[0.68rem] text-ink-soft/60">
                  Posted on {siteConfig.rating.source}
                </p>
              </div>
            </div>

            <Link
              href="/reviews"
              className="group mt-6 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-copper-700"
            >
              Read every review
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div
            className="lg:col-span-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") next();
              if (event.key === "ArrowLeft") previous();
            }}
            tabIndex={0}
            role="group"
            aria-roledescription="carousel"
            aria-label="Patient testimonials"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-cream/80 shadow-soft backdrop-blur-sm">
              <div className="absolute right-7 top-6 text-copper-500/25">
                <Quote className="size-14 rotate-180 fill-current" strokeWidth={0} />
              </div>

              <div className="relative min-h-[24rem] px-7 py-9 md:px-11 md:py-12">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.div
                    key={review.name}
                    custom={direction}
                    initial={
                      reduce
                        ? false
                        : { opacity: 0, x: direction > 0 ? 36 : -36 }
                    }
                    animate={reduce ? undefined : { opacity: 1, x: 0 }}
                    exit={
                      reduce
                        ? undefined
                        : { opacity: 0, x: direction > 0 ? -28 : 28 }
                    }
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-full flex-col"
                  >
                    <div className="flex items-center gap-2">
                      <Stars size="size-4" />
                      <span className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-ink-soft/50">
                        5.0 · Verified {review.source} review
                      </span>
                    </div>

                    <blockquote className="mt-7 max-w-2xl whitespace-pre-line font-display text-[1.55rem] leading-[1.35] tracking-[-0.025em] text-pine-950 md:text-[2rem]">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>

                    <div className="mt-auto flex items-center gap-3 pt-8">
                      <span className="grid size-11 place-items-center rounded-full bg-pine-900 font-display text-sm text-cream">
                        {review.initials}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-pine-950">
                          {review.name}
                        </p>
                        <p className="text-[0.68rem] text-ink-soft/60">
                          Posted on {review.source}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-ink/10 px-7 py-4 md:px-11">
                <div className="flex items-center gap-2">
                  {reviews.map((item, itemIndex) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => goTo(itemIndex, itemIndex > index ? 1 : -1)}
                      aria-label={`Show review from ${item.name}`}
                      aria-pressed={itemIndex === index}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        itemIndex === index
                          ? "w-8 bg-copper-600"
                          : "w-1.5 bg-ink/20 hover:bg-ink/35",
                      )}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous review"
                    className="grid size-10 place-items-center rounded-full border border-ink/15 text-pine-950 transition-colors hover:border-ink/30 hover:bg-ink/[0.04]"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next review"
                    className="grid size-10 place-items-center rounded-full border border-ink/15 text-pine-950 transition-colors hover:border-ink/30 hover:bg-ink/[0.04]"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>

              {!paused && !reduce && (
                <span
                  key={index}
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 bg-copper-500/60"
                  style={{
                    animation: `progress-line ${AUTOPLAY_MS}ms linear forwards`,
                  }}
                />
              )}
            </div>

            <p className="mt-4 text-right font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-soft/55">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")} · Use arrow keys
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
