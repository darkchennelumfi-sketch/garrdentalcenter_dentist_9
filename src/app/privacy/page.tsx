import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Garr Dental Center handles information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title={
          <>
            Your information,{" "}
            <em className="italic text-copper-600">handled with care.</em>
          </>
        }
        description="A short note about the information you share through this website and how our team uses it."
        crumbs={[{ label: "Privacy" }]}
      />

      <section className="pb-24 md:pb-32">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="space-y-8 rounded-[1.75rem] border border-ink/10 bg-cream/60 p-7 md:p-10">
                <div>
                  <h2 className="font-display text-2xl tracking-[-0.025em] text-pine-950">
                    Information you share
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-ink-soft">
                    When you use the contact or virtual consult forms, you may
                    share your name, email address, phone number, comments, and
                    an optional smile photo. This information is used to respond
                    to your request and coordinate care with our team.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl tracking-[-0.025em] text-pine-950">
                    How it is used
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-ink-soft">
                    We use the information you provide only to follow up about
                    your inquiry or virtual consult. We do not sell your
                    information. Please do not include sensitive medical details
                    in a website message — call our office instead and we&apos;ll
                    speak with you directly.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl tracking-[-0.025em] text-pine-950">
                    Text messages
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-ink-soft">
                    By providing your phone number and checking the consent box,
                    you agree to receive SMS text messages from Garr Dental
                    Center for appointment reminders, marketing messages, and
                    general two-way communication. Message frequency may vary.
                    You can opt out at any time by replying &ldquo;Stop.&rdquo;
                    Message and data rates may apply.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl tracking-[-0.025em] text-pine-950">
                    HIPAA patient privacy practices
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-ink-soft">
                    Our office maintains HIPAA patient privacy practices. To
                    request a copy or ask a question about how patient
                    information is protected, please contact our team.
                  </p>
                </div>

                <div className="rounded-2xl border border-pine-800/15 bg-sage-100/60 p-5">
                  <p className="text-sm font-semibold text-pine-950">
                    Questions about privacy?
                  </p>
                  <p className="mt-1.5 text-xs leading-6 text-ink-soft">
                    Call our Carrington office and we&apos;ll be glad to help.
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-copper-700 transition-colors hover:text-copper-600"
                  >
                    <Phone className="size-4" strokeWidth={1.7} />
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 rounded-[1.5rem] border border-ink/10 bg-paper/60 p-6">
                <p className="eyebrow text-copper-700">More information</p>
                <div className="mt-4 space-y-2">
                  <Link
                    href="/contact"
                    className="group flex items-center justify-between gap-4 rounded-xl border border-ink/10 bg-cream/50 px-4 py-3.5 text-sm text-ink-soft transition-colors hover:text-pine-950"
                  >
                    Contact our team
                    <ArrowUpRight className="size-3.5 text-ink-soft/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/virtual-consult"
                    className="group flex items-center justify-between gap-4 rounded-xl border border-ink/10 bg-cream/50 px-4 py-3.5 text-sm text-ink-soft transition-colors hover:text-pine-950"
                  >
                    Virtual consult
                    <ArrowUpRight className="size-3.5 text-ink-soft/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/services"
                    className="group flex items-center justify-between gap-4 rounded-xl border border-ink/10 bg-cream/50 px-4 py-3.5 text-sm text-ink-soft transition-colors hover:text-pine-950"
                  >
                    Our services
                    <ArrowUpRight className="size-3.5 text-ink-soft/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
