import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  ImagePlus,
  Phone,
  ShieldCheck,
  Video,
} from "lucide-react";

import { ConsultForm } from "@/components/consult-form";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { consultSteps, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Virtual Dental Consult",
  description:
    "Start a free virtual cosmetic consult with Garr Dental Center. Upload a smile photo, receive a personalized video from your dentist, then meet in person. A $200 value.",
  alternates: { canonical: "/virtual-consult" },
};

const notes = [
  {
    icon: ImagePlus,
    title: "Start with a photo",
    body: "A close-up smile or a selfie smile is all we need to get oriented.",
  },
  {
    icon: Video,
    title: "A personal video back",
    body: "Your dentist will send recommendations about your specific desires and concerns.",
  },
  {
    icon: Clock,
    title: "No wait, no charge",
    body: "Get your questions answered for free before you ever come in.",
  },
];

export default function VirtualConsultPage() {
  return (
    <>
      <PageHero
        eyebrow="Free virtual dental consult"
        title={
          <>
            Your smile consult,{" "}
            <em className="italic text-copper-600">from home.</em>
          </>
        }
        description="Do you want to improve your smile? Or do you have a dental concern? We're here to take care of your needs in office or virtually without the wait. Connect with us today and get all of your questions answered for free in three easy steps."
        crumbs={[{ label: "Virtual consult" }]}
        actions={
          <>
            <Button asChild size="lg" className="group">
              <Link href="#consult-form">
                Start my consult
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={siteConfig.phoneHref}>
                <Phone className="size-4" strokeWidth={1.7} />
                {siteConfig.phone}
              </a>
            </Button>
          </>
        }
        aside={
          <div className="rounded-[1.5rem] border border-copper-600/20 bg-copper-200/40 p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow text-copper-700">New patient online offer</p>
              <span className="rounded-full bg-copper-500 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-pine-950">
                $200 value
              </span>
            </div>
            <p className="mt-3 font-display text-2xl leading-tight tracking-[-0.025em] text-pine-950">
              Free virtual cosmetic consultation
            </p>
            <p className="mt-2 text-xs leading-5 text-ink-soft">
              Upload a smile photo. Receive a personalized video. Meet in person
              when you&apos;re ready.
            </p>
          </div>
        }
      />

      <section id="consult-form" className="scroll-mt-28 pb-24 md:pb-32">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <ConsultForm />
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-4">
                <div className="rounded-[1.5rem] border border-ink/10 bg-cream/60 p-6">
                  <p className="eyebrow text-copper-700">What happens next</p>
                  <div className="mt-5 space-y-5">
                    {consultSteps.map((step) => (
                      <div key={step.number} className="flex gap-4">
                        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/12 bg-paper font-mono text-[0.64rem] text-copper-700">
                          {step.number}
                        </span>
                        <div>
                          <p className="text-sm font-semibold leading-6 text-pine-950">
                            {step.title}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-ink-soft/70">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-pine-800/15 bg-sage-100/60 p-6">
                  <div className="flex items-center gap-2 text-pine-800">
                    <ShieldCheck className="size-4" strokeWidth={1.8} />
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em]">
                      Private by default
                    </p>
                  </div>
                  <p className="mt-3 text-xs leading-6 text-ink-soft">
                    Your details and photos stay with our team and are used only
                    to follow up about your consult. Read our{" "}
                    <Link
                      href="/privacy"
                      className="underline decoration-ink/30 underline-offset-2 hover:text-copper-700"
                    >
                      privacy policy
                    </Link>
                    .
                  </p>
                </div>

                <div className="grid gap-2">
                  {notes.map((note) => (
                    <div
                      key={note.title}
                      className="flex items-start gap-3 rounded-xl border border-ink/10 bg-paper/50 px-4 py-3"
                    >
                      <note.icon
                        className="mt-0.5 size-4 shrink-0 text-copper-700"
                        strokeWidth={1.6}
                      />
                      <div>
                        <p className="text-xs font-semibold text-pine-950">
                          {note.title}
                        </p>
                        <p className="mt-0.5 text-[0.68rem] leading-5 text-ink-soft/65">
                          {note.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Reveal>
                  <p className="px-1 text-[0.68rem] leading-5 text-ink-soft/50">
                    Prefer to talk first? Call{" "}
                    <a
                      href={siteConfig.phoneHref}
                      className="font-semibold text-copper-700"
                    >
                      {siteConfig.phone}
                    </a>
                    . We&apos;re happy to help.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
