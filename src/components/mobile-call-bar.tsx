import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-paper/90 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={siteConfig.phoneHref}
          className="flex h-11 items-center justify-center gap-2 rounded-full border border-ink/15 bg-cream/70 text-xs font-semibold text-pine-950"
        >
          <Phone className="size-3.5" strokeWidth={1.8} />
          Call us
        </a>
        <Link
          href="/contact"
          className="flex h-11 items-center justify-center gap-2 rounded-full bg-copper-600 text-xs font-semibold text-cream"
        >
          <CalendarCheck className="size-3.5" strokeWidth={1.8} />
          Book a visit
        </Link>
      </div>
    </div>
  );
}
