import Link from "next/link";
import {
  ArrowUpRight,
  Play,
  ShieldCheck,
  Sparkles,
  Upload,
  Video,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { consultSteps } from "@/lib/site";

export function VirtualConsultSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,216,207,0.65),transparent_40%),radial-gradient(circle_at_10%_80%,rgba(241,211,191,0.5),transparent_42%)]" />
      </div>

      <div className="container-wide relative">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                eyebrow="Virtual dental consult"
                title={
                  <>
                    Your smile consult,{" "}
                    <em className="italic text-copper-600">
                      from wherever you are.
                    </em>
                  </>
                }
                description="Do you want to improve your smile? Or do you have a dental concern? We're here to take care of your needs in office or virtually without the wait. Connect with us today and get all of your questions answered for free in three easy steps."
              />
            </Reveal>

            <div className="mt-10">
              {consultSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.08}>
                  <div className="relative flex gap-5 pb-7 last:pb-0">
                    {index < consultSteps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[1.28rem] top-11 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-copper-500/50 to-ink/10"
                      />
                    )}
                    <span className="relative grid size-11 shrink-0 place-items-center rounded-full border border-copper-600/25 bg-cream font-mono text-[0.68rem] font-medium tracking-[0.08em] text-copper-700">
                      {step.number}
                    </span>
                    <div className="pt-1">
                      <h3 className="font-display text-xl leading-snug tracking-[-0.02em] text-pine-950">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-sm leading-6 text-ink-soft">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="group">
                  <Link href="/virtual-consult">
                    Start your free consult
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
                <p className="text-xs text-ink-soft/70">
                  $200 value, no charge. No wait.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="relative mx-auto max-w-[31rem]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] bg-pine-950 p-6 shadow-[0_50px_120px_-50px_rgba(6,23,19,0.75)]">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(196,118,63,0.35),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(47,123,108,0.5),transparent_45%)]" />
                  <div className="grid-lines-dark absolute inset-0 opacity-40" />
                </div>

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-cream/70 backdrop-blur">
                      <span className="size-1.5 rounded-full bg-copper-400" />
                      3 easy steps
                    </span>
                    <span className="rounded-full bg-copper-500 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-pine-950">
                      Free · $200 value
                    </span>
                  </div>

                  <div className="relative mt-auto mb-auto grid place-items-center py-10">
                    <div className="absolute size-64 rounded-full border border-cream/10" />
                    <div className="absolute size-48 rounded-full border border-cream/15" />
                    <div className="absolute size-32 rounded-full border border-copper-400/30" />
                    <div className="relative grid size-24 place-items-center rounded-full border border-cream/20 bg-cream/10 text-cream backdrop-blur-xl">
                      <Upload className="size-8" strokeWidth={1.3} />
                    </div>
                    <div className="mt-8 text-center">
                      <p className="font-display text-2xl tracking-[-0.03em] text-cream">
                        Upload your smile
                      </p>
                      <p className="mt-2 text-xs text-cream/55">
                        A close-up or a selfie — that&apos;s all it takes.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {consultSteps.map((step) => (
                      <div
                        key={step.number}
                        className="rounded-xl border border-cream/10 bg-cream/[0.04] px-2.5 py-3 backdrop-blur-sm"
                      >
                        <p className="font-mono text-[0.62rem] tracking-[0.16em] text-copper-300">
                          {step.number}
                        </p>
                        <p className="mt-1 text-[0.64rem] leading-4 text-cream/60">
                          {step.title.replace(/\.$/, "")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 top-16 hidden items-center gap-2.5 rounded-2xl border border-ink/10 bg-cream/90 px-3.5 py-2.5 shadow-soft backdrop-blur-md sm:flex lg:-left-8">
                <span className="grid size-8 place-items-center rounded-full bg-pine-900 text-cream">
                  <Video className="size-4" strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[0.68rem] font-semibold text-pine-950">
                    Personalized video
                  </p>
                  <p className="text-[0.64rem] text-ink-soft/60">
                    From your dentist
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 right-4 flex items-center gap-2 rounded-full border border-ink/10 bg-cream/90 px-3.5 py-2 text-[0.68rem] font-medium text-ink-soft shadow-soft backdrop-blur-md sm:right-8">
                <ShieldCheck className="size-3.5 text-pine-700" strokeWidth={1.8} />
                Private &amp; secure
                <Sparkles className="size-3.5 text-copper-600" strokeWidth={1.8} />
              </div>

              <span className="absolute -right-3 bottom-24 hidden size-14 place-items-center rounded-full bg-copper-500 text-pine-950 shadow-lift sm:grid">
                <Play className="size-5 fill-current" strokeWidth={0} />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
