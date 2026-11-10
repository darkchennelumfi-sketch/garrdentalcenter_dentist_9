import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  HeartPulse,
  ScanLine,
  Smile,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Our Practice",
  description:
    "Meet Garr Dental Center in Carrington, ND. Compassionate patient service, tailored procedures, and supra-gingival minimally invasive dentistry with Dr. Ben Garr and Dr. Fletcher.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: HeartPulse,
    title: "Compassionate patient service",
    body: "We aim to offer not just excellent dental care and meaningful procedures, but to do so with compassionate patient service.",
  },
  {
    icon: Smile,
    title: "Tailored to each person",
    body: "We want to get to know our patients and we tailor each procedure to suit each individual need.",
  },
  {
    icon: Sparkles,
    title: "Healthier by design",
    body: "Supra-gingival minimally invasive techniques are a healthier form of dentistry because work is completed above the gum line.",
  },
];

const technology = [
  {
    icon: Zap,
    title: "SOLEA dental laser",
    body: "Reliably anesthesia-free and pain-free procedures that take the drill, the needle, the noise, and the pain out of dental visits.",
  },
  {
    icon: ScanLine,
    title: "3D scan & CT imaging",
    body: "Digital scans and CT imaging support implant consultations and treatment planning in the office.",
  },
  {
    icon: Users,
    title: "One place for complex care",
    body: "From digital design and implant planning to the surgical phase and final smile prosthesis.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the practice"
        title={
          <>
            Dentistry with a{" "}
            <em className="italic text-copper-600">human pulse.</em>
          </>
        }
        description="Garr Dental Center is a Carrington practice built on excellent care, meaningful procedures, and the kind of patient service that makes a dental visit feel personal."
        crumbs={[{ label: "About" }]}
        actions={
          <>
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Request an appointment
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={siteConfig.phoneHref}>Call {siteConfig.phone}</a>
            </Button>
          </>
        }
        aside={
          <div className="relative overflow-hidden rounded-[1.5rem] border border-ink/10 bg-cream/70 p-6 backdrop-blur-sm">
            <p className="eyebrow text-copper-700">At a glance</p>
            <div className="mt-4 space-y-3">
              {[
                ["Location", "Carrington, North Dakota"],
                ["Approach", "Supra-gingival, minimally invasive"],
                ["Dentists", "Dr. Ben Garr · Dr. Fletcher"],
                ["New patients", "Always welcome"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-start justify-between gap-4 border-b border-ink/10 pb-3 last:border-0 last:pb-0"
                >
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink-soft/55">
                    {label}
                  </span>
                  <span className="max-w-[60%] text-right text-xs leading-5 text-pine-950">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="pb-24 md:pb-32">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="display-2 max-w-[18ch] text-pine-950">
                  Excellent care. Meaningful procedures.{" "}
                  <em className="italic text-copper-600">Real people.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="mt-8 space-y-5 text-base leading-8 text-ink-soft md:text-[1.05rem]">
                  <p>
                    At Garr Dental Center you will find we offer not just
                    excellent dental care and meaningful procedures, but we aim
                    to do so with compassionate patient service.
                  </p>
                  <p>
                    We want to get to know our patients and we tailor each
                    procedure to suit each individual need. You will also
                    experience supra-gingival minimally invasive dental
                    techniques that are a healthier form of dentistry because
                    work is completed above the gum line.
                  </p>
                  <p>
                    Our wide range of services provide our patients with smiles
                    that are both healthy and beautiful.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.08} className="lg:col-span-5">
              <div className="relative h-full overflow-hidden rounded-[1.75rem] bg-pine-950 p-7 text-cream shadow-soft">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -right-20 -top-20 size-64 rounded-full bg-copper-600/25 blur-[80px]" />
                  <div className="grid-lines-dark absolute inset-0 opacity-40" />
                </div>
                <div className="relative flex h-full flex-col">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-copper-300">
                    Our promise
                  </span>
                  <blockquote className="mt-5 font-display text-[1.7rem] leading-[1.25] tracking-[-0.03em] text-cream">
                    &ldquo;Our wide range of services provide our patients with
                    smiles that are both healthy and beautiful.&rdquo;
                  </blockquote>
                  <div className="mt-auto flex items-center gap-3 border-t border-cream/10 pt-6">
                    <span className="grid size-11 place-items-center rounded-full border border-cream/15 font-display text-sm text-copper-300">
                      GD
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-cream">
                        Garr Dental Center
                      </p>
                      <p className="text-[0.68rem] text-cream/55">
                        Carrington, North Dakota
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sand/50 py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              eyebrow="What guides us"
              title={
                <>
                  Three things we won&apos;t{" "}
                  <em className="italic text-copper-600">compromise on.</em>
                </>
              }
              description="The details that shape every visit, from the first conversation to the final result."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.07}>
                <div className="group h-full rounded-[1.5rem] border border-ink/10 bg-cream/70 p-7 transition-colors duration-300 hover:bg-cream">
                  <span className="grid size-12 place-items-center rounded-full border border-ink/12 text-copper-700 transition-colors group-hover:border-copper-500/40">
                    <value.icon className="size-5" strokeWidth={1.4} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl tracking-[-0.025em] text-pine-950">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink-soft">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="The dentists"
                  title={
                    <>
                      Meet the people behind{" "}
                      <em className="italic text-copper-600">the care.</em>
                    </>
                  }
                  description="Dr. Ben Garr and Dr. Fletcher welcome patients to Garr Dental Center in Carrington."
                />
              </Reveal>
              <Reveal delay={0.08}>
                <Button asChild variant="outline" className="mt-8">
                  <Link href="/contact">
                    Book with our team
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </Reveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {[
                {
                  name: "Dr. Ben Garr",
                  initials: "BG",
                  role: "Dentist",
                  tone: "bg-pine-950 text-cream",
                },
                {
                  name: "Dr. Fletcher",
                  initials: "DF",
                  role: "Dentist",
                  tone: "bg-copper-200/60 text-ink",
                },
              ].map((doctor, index) => (
                <Reveal key={doctor.name} delay={0.08 + index * 0.08}>
                  <div
                    className={`relative flex h-full min-h-[20rem] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-ink/10 p-6 ${doctor.tone}`}
                  >
                    <div className="absolute -right-8 -top-8 select-none font-display text-[9rem] leading-none tracking-[-0.06em] opacity-[0.07]">
                      {doctor.initials}
                    </div>
                    <p className="relative font-mono text-[0.62rem] uppercase tracking-[0.18em] opacity-55">
                      {doctor.role}
                    </p>
                    <div className="relative">
                      <p className="font-display text-3xl tracking-[-0.03em]">
                        {doctor.name}
                      </p>
                      <p className="mt-2 text-xs opacity-55">
                        Garr Dental Center · Carrington, ND
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] opacity-70">
                        Meet at your visit
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pine-950 py-24 text-cream md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 size-[34rem] rounded-full bg-pine-700/35 blur-[120px]" />
          <div className="grid-lines-dark absolute inset-0 opacity-40" />
        </div>

        <div className="container-wide relative">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <SectionHeading
                  tone="light"
                  eyebrow="Above the gum line"
                  title={
                    <>
                      A healthier form of{" "}
                      <em className="italic text-gradient-sage">dentistry.</em>
                    </>
                  }
                  description="All procedures in medicine and dentistry can be provided with a variety of approaches: some aggressive, and some much less extreme. Here at Garr Dental Center, we've found that the healthiest approach in dentistry uses supra-gingival minimally invasive techniques."
                />
              </Reveal>
              <Reveal delay={0.08}>
                <Button asChild variant="cream" className="group mt-8">
                  <Link href="/services/supra-gingival-dentistry">
                    Explore the approach
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="overflow-hidden rounded-[1.75rem] border border-cream/15 bg-cream">
                <Image
                  src="/art/gumline.svg"
                  alt="Illustration of a tooth above the gum line"
                  width={1200}
                  height={620}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {technology.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.07}>
                <div className="h-full rounded-[1.5rem] border border-cream/12 bg-cream/[0.04] p-6">
                  <span className="grid size-10 place-items-center rounded-full border border-cream/15 text-copper-300">
                    <item.icon className="size-4" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-display text-xl tracking-[-0.02em] text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-cream/50">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Come see the difference"
        title={
          <>
            We can&apos;t wait to{" "}
            <em className="italic text-gradient-sage">meet you.</em>
          </>
        }
        description="Set up a consultation with our caring and skilled dental team in Carrington, ND."
        primaryLabel="Request an appointment"
      />
    </>
  );
}
