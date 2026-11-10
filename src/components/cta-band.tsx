import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function CtaBand({
  eyebrow = "Next step",
  title,
  description,
  primaryLabel = "Request an appointment",
  primaryHref = "/contact",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="container-wide pb-24 md:pb-32">
      <div className="relative overflow-hidden rounded-[2rem] bg-pine-950 px-7 py-12 text-cream shadow-soft md:px-12 md:py-16">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/art/smile-orb.svg"
            alt=""
            fill
            unoptimized
            className="object-cover object-right opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pine-950 via-pine-950/90 to-pine-950/20" />
          <div className="grid-lines-dark absolute inset-0 opacity-30" />
        </div>

        <div className="relative max-w-2xl">
          <p className="eyebrow flex items-center gap-3 text-copper-300">
            <span className="inline-block h-px w-8 bg-copper-300/60" />
            {eyebrow}
          </p>
          <h2 className="display-2 mt-5 text-cream">{title}</h2>
          {description && (
            <p className="mt-5 max-w-xl text-sm leading-7 text-cream/55">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="group">
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="light">
              <a href={siteConfig.phoneHref}>
                <Phone className="size-4" strokeWidth={1.6} />
                {siteConfig.phone}
              </a>
            </Button>
          </div>
          <p className="mt-5 text-[0.68rem] text-cream/50">
            {siteConfig.address.line1} · {siteConfig.address.city},{" "}
            {siteConfig.address.state} {siteConfig.address.zip}
          </p>
        </div>
      </div>
    </section>
  );
}
