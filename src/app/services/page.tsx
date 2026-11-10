import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Layers3, MapPin, Smile } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ServicesExplorer } from "@/components/services-explorer";
import { Button } from "@/components/ui/button";
import { serviceCategories, services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Explore cosmetic dentistry, dental implants, laser dentistry, full mouth reconstruction, sleep and airway treatments, general and family dentistry and more at Garr Dental Center in Carrington, ND.",
  alternates: { canonical: "/services" },
};

const pillars = [
  {
    icon: Smile,
    title: "One practice, many answers",
    body: "Many patients enjoy coming to one location to get their mouth rebuilt — from digital design and implant planning to the delivery of the final smile prosthesis.",
  },
  {
    icon: Layers3,
    title: "Supra-gingival by design",
    body: "The healthiest approach in dentistry uses supra-gingival minimally invasive techniques, with work completed above the gum line.",
  },
  {
    icon: MapPin,
    title: "Close to home",
    body: "Care for patients in Carrington and the surrounding communities of Jamestown, Cooperstown, Harvey and Bismarck.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Dental services"
        title={
          <>
            Care, in{" "}
            <em className="italic text-copper-600">full.</em>
          </>
        }
        description="From a routine cleaning to a full smile rebuild, our Carrington practice brings cosmetic, restorative, general and comfort-led dentistry together in one place."
        crumbs={[{ label: "Services" }]}
        actions={
          <>
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Request an appointment
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/virtual-consult">Start a virtual consult</Link>
            </Button>
          </>
        }
        aside={
          <div className="rounded-[1.5rem] border border-ink/10 bg-cream/65 p-6 backdrop-blur-sm">
            <p className="eyebrow text-copper-700">Inside the catalogue</p>
            <div className="mt-4 space-y-3">
              {serviceCategories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-start justify-between gap-4 border-b border-ink/10 pb-3 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-semibold text-pine-950">
                      {category.label}
                    </p>
                    <p className="mt-0.5 text-xs leading-5 text-ink-soft/60">
                      {category.description}
                    </p>
                  </div>
                  <span className="mt-1 font-mono text-[0.62rem] text-copper-700">
                    {String(
                      services.filter(
                        (service) => service.category === category.id,
                      ).length,
                    ).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="pb-24 md:pb-32">
        <div className="container-wide">
          <ServicesExplorer />
        </div>
      </section>

      <section className="bg-sand/50 py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-copper-700">
              <span className="inline-block h-px w-8 bg-copper-600/50" />
              How care comes together
            </p>
            <h2 className="display-2 mt-6 max-w-2xl text-pine-950">
              A plan built around{" "}
              <em className="italic text-copper-600">your whole mouth.</em>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.07}>
                <div className="group h-full rounded-[1.5rem] border border-ink/10 bg-cream/70 p-7 transition-colors duration-300 hover:bg-cream">
                  <span className="grid size-11 place-items-center rounded-full border border-ink/12 text-copper-700 transition-colors group-hover:border-copper-500/40">
                    <pillar.icon className="size-5" strokeWidth={1.4} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl tracking-[-0.025em] text-pine-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink-soft">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Not sure where to start?"
        title={
          <>
            Tell us what&apos;s on your mind.{" "}
            <em className="italic text-gradient-sage">We&apos;ll guide you.</em>
          </>
        }
        description="Call the office or send a message. We'll help you choose the right service, or start with a free virtual cosmetic consult."
        primaryLabel="Ask our team"
      />
    </>
  );
}
