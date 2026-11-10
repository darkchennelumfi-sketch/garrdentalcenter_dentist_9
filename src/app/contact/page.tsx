import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import { ContactSection } from "@/components/contact-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Appointments",
  description:
    "Contact Garr Dental Center in Carrington, ND. Call 701-652-2300 or request an appointment online. Located at 740 4th Ave S, Suite 201.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & appointments"
        title={
          <>
            Let&apos;s start with a{" "}
            <em className="italic text-copper-600">conversation.</em>
          </>
        }
        description="Call our Carrington office, send a message, or request an appointment online. We'll help you find the right next step — no pressure, no guesswork."
        crumbs={[{ label: "Contact" }]}
        actions={
          <>
            <Button asChild size="lg" className="group">
              <a href={siteConfig.phoneHref}>
                <Phone className="size-4" strokeWidth={1.7} />
                Call {siteConfig.phone}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={siteConfig.directionsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin className="size-4" strokeWidth={1.7} />
                Get directions
              </a>
            </Button>
          </>
        }
        aside={
          <div className="rounded-[1.5rem] border border-ink/10 bg-cream/70 p-6 shadow-soft backdrop-blur-sm">
            <p className="eyebrow text-copper-700">The office</p>
            <p className="mt-4 font-display text-2xl tracking-[-0.025em] text-pine-950">
              {siteConfig.address.line1}
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              {siteConfig.address.city}, {siteConfig.address.state}{" "}
              {siteConfig.address.zip}
            </p>
            <a
              href={siteConfig.phoneHref}
              className="mt-5 flex items-center gap-2 text-sm font-semibold text-copper-700 transition-colors hover:text-copper-600"
            >
              <Phone className="size-4" strokeWidth={1.7} />
              {siteConfig.phone}
            </a>
            <div className="mt-5 border-t border-ink/10 pt-4">
              <Link
                href="/virtual-consult"
                className="group inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-soft/60 transition-colors hover:text-pine-950"
              >
                Prefer virtual? Start here
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        }
      />

      <section className="pb-10">
        <div className="container-wide">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Call or message",
                body: "Tell us what you're looking for. We'll answer questions and help you choose a service.",
              },
              {
                step: "02",
                title: "Pick a time",
                body: "Our team will help you find an appointment that works for your schedule.",
              },
              {
                step: "03",
                title: "Meet your dentist",
                body: "Come in for your visit, or start with a free virtual cosmetic consult from home.",
              },
            ].map((item, index) => (
              <Reveal key={item.step} delay={index * 0.06}>
                <div className="flex h-full gap-4 rounded-[1.5rem] border border-ink/10 bg-cream/55 p-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-copper-600/25 bg-paper font-mono text-[0.64rem] text-copper-700">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
