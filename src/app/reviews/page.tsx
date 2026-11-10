import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Quote, Star } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Stars } from "@/components/stars";
import { Button } from "@/components/ui/button";
import { reviews } from "@/lib/reviews";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read patient reviews of Garr Dental Center in Carrington, ND. Rated 5.0 based on 232 Google reviews.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient reviews"
        title={
          <>
            Real words from{" "}
            <em className="italic text-copper-600">real patients.</em>
          </>
        }
        description="The care behind every review matters to us. These are patient experiences shared on Google, in their own words."
        crumbs={[{ label: "Reviews" }]}
        actions={
          <>
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Request an appointment
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                View on Google
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </>
        }
        aside={
          <div className="rounded-[1.5rem] border border-ink/10 bg-cream/70 p-6 shadow-soft backdrop-blur-sm">
            <div className="flex items-end gap-3">
              <span className="font-display text-6xl leading-none tracking-[-0.05em] text-pine-950">
                {siteConfig.rating.value}
              </span>
              <div className="pb-1">
                <Stars />
                <p className="mt-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-soft/55">
                  {siteConfig.rating.count} reviews
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-ink-soft/65">
              {siteConfig.rating.label} — based on {siteConfig.rating.count}{" "}
              reviews posted on {siteConfig.rating.source}.
            </p>
            <div className="mt-5 flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1.5 flex-1 rounded-full bg-copper-500/80"
                />
              ))}
            </div>
          </div>
        }
      />

      <section className="pb-24 md:pb-32">
        <div className="container-wide">
          <div className="columns-1 gap-4 md:columns-2 lg:columns-3 [&>*]:mb-4">
            {reviews.map((review, index) => (
              <Reveal
                key={review.name}
                delay={(index % 3) * 0.06}
                className="break-inside-avoid"
              >
                <article className="group relative overflow-hidden rounded-[1.5rem] border border-ink/10 bg-cream/65 p-6 transition-colors duration-300 hover:bg-cream">
                  <Quote
                    className="absolute right-5 top-5 size-9 rotate-180 text-copper-500/20"
                    strokeWidth={0}
                    fill="currentColor"
                  />
                  <div className="flex items-center gap-1.5 text-copper-500">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="size-3.5 fill-current"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <blockquote className="mt-5 whitespace-pre-line font-display text-[1.25rem] leading-[1.45] tracking-[-0.02em] text-pine-950">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4">
                    <span className="grid size-9 place-items-center rounded-full bg-pine-900 font-display text-xs text-cream">
                      {review.initials}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-pine-950">
                        {review.name}
                      </p>
                      <p className="text-[0.68rem] text-ink-soft/55">
                        Posted on {review.source}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[1.5rem] border border-ink/10 bg-sand/50 px-6 py-5 sm:flex-row sm:items-center">
              <p className="max-w-xl text-sm leading-6 text-ink-soft">
                Reviews are shared through Google. We&apos;re grateful to every
                patient who takes the time to tell us about their visit.
              </p>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-copper-700"
              >
                Read on Google
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Your turn"
        title={
          <>
            Experience the care{" "}
            <em className="italic text-gradient-sage">behind the reviews.</em>
          </>
        }
        description="Request an appointment with our Carrington team, or start with a free virtual cosmetic consult."
        primaryLabel="Request an appointment"
      />
    </>
  );
}
