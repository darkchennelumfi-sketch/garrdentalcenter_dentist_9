import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
} from "@/components/social-icons";
import { Button } from "@/components/ui/button";
import { Stars } from "@/components/stars";
import { Wordmark } from "@/components/wordmark";
import { featuredServices, services } from "@/lib/services";
import { primaryNav, siteConfig } from "@/lib/site";

const socialIcons = {
  Facebook: FacebookIcon,
  YouTube: YouTubeIcon,
  Instagram: InstagramIcon,
} as const;

export function SiteFooter() {
  const extraServices = services
    .filter((service) => !service.featured)
    .slice(0, 8);

  return (
    <footer className="relative overflow-hidden bg-pine-950 pb-16 text-cream md:pb-0">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 bottom-0 size-[40rem] rounded-full bg-pine-700/40 blur-[120px]" />
        <div className="absolute -right-32 top-10 size-[28rem] rounded-full bg-copper-700/20 blur-[120px]" />
        <div className="grid-lines-dark absolute inset-0 opacity-40" />
      </div>

      <div className="relative">
        <div className="container-wide border-b border-cream/10 py-16 md:py-20">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="eyebrow flex items-center gap-3 text-copper-300">
                <span className="inline-block h-px w-8 bg-copper-300/60" />
                Ready when you are
              </p>
              <h2 className="display-2 mt-5 max-w-2xl text-cream">
                Let&apos;s talk about your{" "}
                <em className="italic text-gradient-sage">smile.</em>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-cream/55">
                Call our Carrington office or send a message. We&apos;ll help you
                find the right next step — in office or virtually.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request an appointment
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="light">
                <a href={siteConfig.phoneHref}>
                  <Phone className="size-4" strokeWidth={1.6} />
                  {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="container-wide py-14">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Wordmark tone="light" />
              <div className="mt-7 space-y-4 text-sm text-cream/55">
                <a
                  href={siteConfig.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-cream"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-copper-300" strokeWidth={1.5} />
                  <span>
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state}{" "}
                    {siteConfig.address.zip}
                  </span>
                </a>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-cream"
                >
                  <Phone className="size-4 shrink-0 text-copper-300" strokeWidth={1.5} />
                  {siteConfig.phone}
                </a>
              </div>

              <div className="mt-7 flex items-center gap-2.5">
                {siteConfig.socials.map((social) => {
                  const Icon =
                    socialIcons[social.label as keyof typeof socialIcons];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition-all duration-300 hover:border-copper-400/60 hover:text-copper-300"
                    >
                      <Icon className="size-4" strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>

              <div className="mt-7 flex items-center gap-3 rounded-2xl border border-cream/10 bg-cream/[0.04] px-4 py-3">
                <span className="font-display text-3xl leading-none text-cream">
                  {siteConfig.rating.value}
                </span>
                <span className="flex flex-col gap-1">
                  <Stars size="size-3" />
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-cream/55">
                    {siteConfig.rating.count} Google reviews
                  </span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-2">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-cream/50">
                Explore
              </p>
              <ul className="mt-5 space-y-3">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-cream/65 transition-colors hover:text-cream"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/virtual-consult"
                    className="text-sm text-copper-300 transition-colors hover:text-copper-200"
                  >
                    Virtual consult
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-cream/50">
                Focused care
              </p>
              <ul className="mt-5 space-y-3">
                {featuredServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm text-cream/65 transition-colors hover:text-cream"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-cream/50">
                More services
              </p>
              <ul className="mt-5 space-y-3">
                {extraServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm text-cream/65 transition-colors hover:text-cream"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-sm text-copper-300 transition-colors hover:text-copper-200"
                  >
                    All services
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container-wide border-t border-cream/10 py-5">
          <p className="max-w-4xl text-xs leading-6 text-cream/50">
            {siteConfig.serviceArea}
          </p>
        </div>

        <div className="container-wide flex flex-col gap-3 border-t border-cream/10 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-cream">
              Privacy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-cream">
              Contact
            </Link>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-cream"
            >
              Google Maps
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none select-none overflow-hidden"
        >
          <p className="-mb-6 translate-y-4 text-center font-display text-[24vw] leading-none tracking-[-0.06em] text-cream/[0.035]">
            Garr
          </p>
        </div>
      </div>
    </footer>
  );
}
