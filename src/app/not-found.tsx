import Link from "next/link";
import { ArrowUpRight, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28 md:pt-48 md:pb-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,216,207,0.65),transparent_42%),radial-gradient(circle_at_80%_70%,rgba(241,211,191,0.5),transparent_40%)]" />
        <div className="grid-lines absolute inset-0 opacity-50 [mask-image:radial-gradient(circle_at_50%_40%,black,transparent_80%)]" />
      </div>

      <div className="container-wide relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-copper-700">
            Error 404
          </p>
          <h1 className="display-1 mt-5 text-pine-950">
            This page slipped{" "}
            <em className="italic text-copper-600">below the line.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-8 text-ink-soft">
            The page you&apos;re looking for isn&apos;t here. Let&apos;s get you
            back to something useful — or call us and we&apos;ll point you in the
            right direction.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="size-4" strokeWidth={1.7} />
                Back home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                Browse services
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
