import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,216,207,0.55),transparent_40%),radial-gradient(circle_at_90%_90%,rgba(236,228,212,0.9),transparent_45%)]" />
      </div>

      <div className="container-wide relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-pine-950 p-7 text-cream shadow-soft md:p-9">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-24 -top-24 size-72 rounded-full bg-copper-600/20 blur-[80px]" />
                <div className="grid-lines-dark absolute inset-0 opacity-40" />
              </div>

              <div className="relative">
                <p className="eyebrow flex items-center gap-3 text-copper-300">
                  <span className="inline-block h-px w-8 bg-copper-300/60" />
                  Visit us
                </p>
                <h2 className="display-3 mt-5 max-w-[12ch] text-cream">
                  Right here in Carrington.
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-7 text-cream/55">
                  Come see us in the heart of Carrington, North Dakota. We
                  welcome patients from across the region.
                </p>

                <div className="mt-8 space-y-5">
                  <a
                    href={siteConfig.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-4"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-cream/15 text-copper-300 transition-colors group-hover:border-copper-400/50">
                      <MapPin className="size-4" strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-cream">
                        {siteConfig.address.line1}
                      </span>
                      <span className="block text-sm text-cream/55">
                        {siteConfig.address.city}, {siteConfig.address.state}{" "}
                        {siteConfig.address.zip}
                      </span>
                      <span className="mt-1 inline-flex items-center gap-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-copper-300/80">
                        Get directions
                        <ArrowUpRight className="size-3" />
                      </span>
                    </span>
                  </a>

                  <a
                    href={siteConfig.phoneHref}
                    className="group flex items-start gap-4"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-cream/15 text-copper-300 transition-colors group-hover:border-copper-400/50">
                      <Phone className="size-4" strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-cream">
                        {siteConfig.phone}
                      </span>
                      <span className="block text-sm text-cream/55">
                        Call for appointments &amp; questions
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="relative mt-8 overflow-hidden rounded-[1.4rem] border border-cream/10">
                <Image
                  src="/art/map.svg"
                  alt="Stylized map marking Garr Dental Center in Carrington, North Dakota"
                  width={800}
                  height={620}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>

              <div className="relative mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-cream/10 pt-5 text-[0.68rem] text-cream/55">
                <span className="font-mono uppercase tracking-[0.16em]">
                  Serving
                </span>
                {siteConfig.serviceAreaPlaces.map((place) => (
                  <span key={place}>{place}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="flex h-full flex-col justify-center">
              <ContactForm />
              <div className="mt-5 flex flex-col items-start justify-between gap-3 rounded-2xl border border-ink/10 bg-cream/45 px-5 py-4 text-xs text-ink-soft sm:flex-row sm:items-center">
                <span>
                  Prefer to start virtually? Get a free cosmetic consult from
                  home.
                </span>
                <Button asChild variant="ghost" size="sm" className="px-0">
                  <Link href="/virtual-consult">
                    Start a virtual consult
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
