import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Gift,
  Phone,
  ScanLine,
  Sparkles,
} from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { offers, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "New Patient Offers",
  description:
    "New patient offers at Garr Dental Center: $100 off dental implants, a free virtual cosmetic consultation, and a free initial implant consult and CT scan.",
  alternates: { canonical: "/offers" },
};

const icons = [Gift, Sparkles, ScanLine];

const tones = [
  "bg-pine-950 text-cream border-cream/10",
  "bg-cream text-ink border-ink/10",
  "bg-copper-500 text-pine-950 border-copper-700/20",
];

export default function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="New patient offers"
        title={
          <>
            A thoughtful start,{" "}
            <em className="italic text-copper-600">with value.</em>
          </>
        }
        description="Three ways to begin with Garr Dental Center. Ask about implant savings, start a virtual cosmetic consult from home, or book an implant consult with a CT scan."
        crumbs={[{ label: "Offers" }]}
        actions={
          <>
            <Button asChild size="lg" className="group">
              <a href={siteConfig.phoneHref}>
                <Phone className="size-4" strokeWidth={1.7} />
                Call {siteConfig.phone}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Send a message</Link>
            </Button>
          </>
        }
        aside={
          <div className="rounded-[1.5rem] border border-copper-600/20 bg-copper-200/40 p-6">
            <p className="eyebrow text-copper-700">How to claim</p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Mention the offer when you call or send a message. Our team will
              help you apply it to your visit.
            </p>
            <p className="mt-4 border-t border-copper-600/15 pt-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-copper-700">
              Offers for new patients
            </p>
          </div>
        }
      />

      <section className="pb-24 md:pb-32">
        <div className="container-wide">
          <div className="grid gap-4 lg:grid-cols-3">
            {offers.map((offer, index) => {
              const Icon = icons[index];
              return (
                <Reveal key={offer.id} delay={index * 0.07}>
                  <article
                    className={cn(
                      "group relative flex h-full min-h-[30rem] flex-col overflow-hidden rounded-[2rem] border p-7 shadow-[0_30px_80px_-50px_rgba(6,23,19,0.5)] transition-transform duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 md:p-9",
                      tones[index],
                    )}
                  >
                    <div className="relative flex items-start justify-between gap-4">
                      <p
                        className={cn(
                          "font-mono text-[0.64rem] uppercase tracking-[0.18em]",
                          index === 0
                            ? "text-copper-300"
                            : index === 1
                              ? "text-copper-700"
                              : "text-pine-900/70",
                        )}
                      >
                        {offer.kicker}
                      </p>
                      <span
                        className={cn(
                          "grid size-12 place-items-center rounded-full border",
                          index === 0
                            ? "border-cream/15 text-copper-300"
                            : index === 1
                              ? "border-ink/12 text-copper-700"
                              : "border-pine-900/20 text-pine-900",
                        )}
                      >
                        <Icon className="size-5" strokeWidth={1.4} />
                      </span>
                    </div>

                    <div className="relative mt-10">
                      <p
                        className={cn(
                          "font-display text-6xl tracking-[-0.055em]",
                          index === 0
                            ? "text-cream"
                            : index === 1
                              ? "text-pine-950"
                              : "text-pine-950",
                        )}
                      >
                        {offer.value}
                      </p>
                      <h2 className="mt-4 max-w-[16ch] font-display text-[2.15rem] leading-[1.04] tracking-[-0.035em]">
                        {offer.title}
                      </h2>
                      <p
                        className={cn(
                          "mt-4 max-w-[32ch] text-sm leading-6",
                          index === 0
                            ? "text-cream/55"
                            : index === 1
                              ? "text-ink-soft"
                              : "text-pine-900/70",
                        )}
                      >
                        {offer.detail}
                      </p>
                    </div>

                    <div className="relative mt-auto pt-9">
                      <Button
                        asChild
                        variant={
                          index === 0
                            ? "cream"
                            : index === 1
                              ? "primary"
                              : "pine"
                        }
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
            <div className="mt-10 grid gap-6 rounded-[1.75rem] border border-ink/10 bg-cream/55 p-7 md:grid-cols-3 md:p-9">
              {[
                {
                  step: "01",
                  title: "Choose your offer",
                  body: "Start virtually, ask about implant savings, or book an implant consult with a CT scan.",
                },
                {
                  step: "02",
                  title: "Call or message us",
                  body: "Call 701-652-2300 or send a message through our contact form.",
                },
                {
                  step: "03",
                  title: "Meet our team",
                  body: "We'll confirm the details and help you schedule the right visit.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-copper-600/25 bg-paper font-mono text-[0.66rem] text-copper-700">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-pine-950">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-5 text-ink-soft/70">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <p className="mt-6 text-center font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-soft/55">
            Offers for new patients · {siteConfig.address.city},{" "}
            {siteConfig.address.state}
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Questions about an offer?"
        title={
          <>
            We&apos;re happy to{" "}
            <em className="italic text-gradient-sage">talk it through.</em>
          </>
        }
        description="Call the office or send a message and mention the offer. Our team will help you understand what's included."
        primaryLabel="Contact our team"
      />
    </>
  );
}
