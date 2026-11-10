import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  Check,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { ServiceIcon } from "@/components/service-icon";
import { Button } from "@/components/ui/button";
import {
  getCategoryLabel,
  getRelatedServices,
  getService,
  services,
} from "@/lib/services";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.name,
    description:
      service.description?.slice(0, 158) ??
      `${service.name} at Garr Dental Center in Carrington, North Dakota. Call 701-652-2300 to talk through your options.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const related = getRelatedServices(service, 4);
  const categoryLabel = getCategoryLabel(service.category);
  const description =
    service.description ??
    `Our Carrington team offers ${service.name.toLowerCase()} as part of our ${categoryLabel.toLowerCase()} care. Call ${siteConfig.phone} to talk through your options and schedule a visit.`;

  const isImplantOffer =
    service.slug === "dental-implants" ||
    service.slug === "full-mouth-reconstruction" ||
    service.slug === "implant-supported-dentures";

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(200,216,207,0.65),transparent_40%),radial-gradient(circle_at_85%_25%,rgba(241,211,191,0.5),transparent_38%),radial-gradient(circle_at_50%_100%,rgba(236,228,212,0.75),transparent_52%)]" />
          <div className="grid-lines absolute inset-0 opacity-50 [mask-image:radial-gradient(circle_at_50%_30%,black,transparent_80%)]" />
        </div>

        <div className="container-wide relative">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-ink-soft/55"
          >
            <Link href="/" className="transition-colors hover:text-pine-950">
              Home
            </Link>
            <span className="opacity-40">/</span>
            <Link
              href="/services"
              className="transition-colors hover:text-pine-950"
            >
              Services
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-copper-700">{service.name}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-full border border-copper-700/20 bg-cream/60 text-copper-700">
                  <ServiceIcon icon={service.icon} className="size-6" />
                </span>
                <div>
                  <p className="eyebrow text-copper-700">{categoryLabel}</p>
                  <p className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-soft/55">
                    Garr Dental Center · Carrington, ND
                  </p>
                </div>
              </div>

              <h1 className="mt-7 max-w-[18ch] font-display text-[clamp(2.8rem,6.4vw,5.6rem)] leading-[0.96] tracking-[-0.045em] text-pine-950">
                {service.name}
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-ink-soft md:text-[1.05rem]">
                {description}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    Request an appointment
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={siteConfig.phoneHref}>
                    <Phone className="size-4" strokeWidth={1.7} />
                    {siteConfig.phone}
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-[1.5rem] border border-ink/10 bg-cream/65 p-6 shadow-soft backdrop-blur-sm">
                <p className="eyebrow text-copper-700">Talk to our team</p>
                <p className="mt-3 font-display text-2xl tracking-[-0.025em] text-pine-950">
                  Questions about {service.name.toLowerCase()}?
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  <a
                    href={siteConfig.phoneHref}
                    className="flex items-center gap-3 text-ink-soft transition-colors hover:text-pine-950"
                  >
                    <Phone className="size-4 text-copper-700" strokeWidth={1.6} />
                    {siteConfig.phone}
                  </a>
                  <a
                    href={siteConfig.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3 text-ink-soft transition-colors hover:text-pine-950"
                  >
                    <MapPin className="mt-0.5 size-4 shrink-0 text-copper-700" strokeWidth={1.6} />
                    <span>
                      {siteConfig.address.line1}
                      <br />
                      {siteConfig.address.city}, {siteConfig.address.state}{" "}
                      {siteConfig.address.zip}
                    </span>
                  </a>
                </div>
                <Button asChild variant="outline" className="mt-5 w-full">
                  <Link href="/contact">Send a message</Link>
                </Button>
                <div className="mt-5 flex items-center gap-2 border-t border-ink/10 pt-4 text-[0.68rem] text-ink-soft/60">
                  <ShieldCheck className="size-3.5 text-pine-700" strokeWidth={1.8} />
                  New patients welcome
                </div>
              </div>

              {isImplantOffer && (
                <div className="mt-4 rounded-[1.5rem] border border-copper-600/20 bg-copper-200/40 p-6">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-copper-700">
                    New patient offer
                  </p>
                  <p className="mt-2 font-display text-2xl leading-tight tracking-[-0.025em] text-pine-950">
                    $100 off dental implants
                  </p>
                  <p className="mt-2 text-xs leading-5 text-ink-soft">
                    Contact us today for details.
                  </p>
                  <Link
                    href="/offers"
                    className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-copper-700"
                  >
                    See all offers
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-copper-700">
                  <span className="inline-block h-px w-8 bg-copper-600/50" />
                  About this care
                </p>
                <h2 className="display-3 mt-5 max-w-[20ch] text-pine-950">
                  What this care looks like at Garr Dental Center.
                </h2>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="mt-7 rounded-[1.5rem] border border-ink/10 bg-cream/60 p-7">
                  <p className="text-base leading-8 text-ink-soft">
                    {service.description ??
                      `This service is part of our ${categoryLabel.toLowerCase()} offering. Our team will talk with you about your goals, answer your questions, and help you decide on the right next step. Call ${siteConfig.phone} or send a message to get started.`}
                  </p>
                </div>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Personalized planning",
                    body: "We tailor each procedure to suit each individual need.",
                  },
                  {
                    title: "Supra-gingival approach",
                    body: "Care completed above the gum line, with minimally invasive techniques.",
                  },
                  {
                    title: "One location",
                    body: "From planning to the final result, care comes together in our Carrington office.",
                  },
                ].map((item, index) => (
                  <Reveal key={item.title} delay={0.05 * index}>
                    <div className="h-full rounded-2xl border border-ink/10 bg-paper/50 p-5">
                      <span className="grid size-8 place-items-center rounded-full bg-pine-900 text-cream">
                        <Check className="size-4" strokeWidth={1.8} />
                      </span>
                      <p className="mt-4 text-sm font-semibold text-pine-950">
                        {item.title}
                      </p>
                      <p className="mt-1.5 text-xs leading-5 text-ink-soft/70">
                        {item.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {service.featured && (
                <Reveal delay={0.1}>
                  <div className="mt-8 flex flex-col gap-4 rounded-[1.5rem] border border-pine-800/15 bg-sage-100/60 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                      <Sparkles className="mt-0.5 size-5 shrink-0 text-copper-700" strokeWidth={1.5} />
                      <p className="max-w-lg text-sm leading-6 text-ink-soft">
                        Curious whether this is right for you? A free virtual
                        cosmetic consult is a simple place to start.
                      </p>
                    </div>
                    <Button asChild variant="pine" size="sm" className="shrink-0">
                      <Link href="/virtual-consult">
                        Start free consult
                        <ArrowUpRight className="size-3.5" />
                      </Link>
                    </Button>
                  </div>
                </Reveal>
              )}
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ink-soft/50">
                  Related care
                </p>
                <div className="mt-4 space-y-2">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/services/${item.slug}`}
                      className="group flex items-center justify-between gap-4 rounded-xl border border-ink/10 bg-cream/50 px-4 py-3.5 transition-colors hover:border-copper-500/30 hover:bg-cream"
                    >
                      <span className="flex items-center gap-3">
                        <ServiceIcon
                          icon={item.icon}
                          className="size-4 text-copper-700"
                        />
                        <span className="text-sm text-ink-soft transition-colors group-hover:text-pine-950">
                          {item.name}
                        </span>
                      </span>
                      <ArrowUpRight className="size-3.5 shrink-0 text-ink-soft/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper-700" />
                    </Link>
                  ))}
                </div>

                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-copper-700"
                >
                  All services
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to talk it through?"
        title={
          <>
            Let&apos;s find the right next step for{" "}
            <em className="italic text-gradient-sage">your smile.</em>
          </>
        }
        description="Call our Carrington office or send a message. We'll help you understand your options and what to expect."
        primaryLabel="Request an appointment"
      />
    </>
  );
}
