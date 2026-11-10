"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  MapPin,
  Menu,
  Phone,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Stars } from "@/components/stars";
import { Wordmark } from "@/components/wordmark";
import { primaryNav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="hidden border-b border-cream/10 bg-pine-950 text-cream/70 md:block">
        <div className="container-wide flex h-9 items-center justify-between font-mono text-[0.66rem] uppercase tracking-[0.16em]">
          <div className="flex items-center gap-5">
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-cream"
            >
              <MapPin className="size-3" strokeWidth={1.8} />
              {siteConfig.address.line1}, {siteConfig.address.city},{" "}
              {siteConfig.address.state}
            </a>
            <span className="hidden text-cream/20 lg:inline">/</span>
            <span className="hidden items-center gap-2 lg:flex">
              <Stars size="size-2.5" />
              {siteConfig.rating.value} · {siteConfig.rating.count} Google
              reviews
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/virtual-consult"
              className="flex items-center gap-1.5 transition-colors hover:text-cream"
            >
              <Sparkles className="size-3" strokeWidth={1.8} />
              Free virtual consult
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-1.5 text-cream transition-colors hover:text-copper-300"
            >
              <Phone className="size-3" strokeWidth={1.8} />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-all duration-500",
          scrolled
            ? "border-ink/10 bg-paper/85 shadow-[0_10px_40px_-30px_rgba(6,23,19,0.6)] backdrop-blur-xl"
            : "border-transparent bg-paper/60 backdrop-blur-md",
        )}
      >
        <div className="container-wide flex h-[4.5rem] items-center justify-between gap-6">
          <Wordmark />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {primaryNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[0.82rem] font-medium tracking-[-0.01em] transition-colors",
                    active
                      ? "text-pine-950"
                      : "text-ink-soft hover:text-pine-950",
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-px bg-copper-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={siteConfig.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-ink/15 px-4 py-2.5 text-xs font-semibold text-ink-soft transition-colors hover:border-ink/30 hover:text-pine-950 lg:inline-flex"
            >
              <Phone className="size-3.5" strokeWidth={1.8} />
              {siteConfig.phone}
            </a>
            <Button asChild size="md" className="hidden sm:inline-flex">
              <Link href="/contact">
                Book a visit
                <ArrowUpRight className="size-3.5" />
              </Link>
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className="grid size-11 place-items-center rounded-full border border-ink/15 text-pine-950 transition-colors hover:bg-ink/[0.05] lg:hidden"
                >
                  <Menu className="size-5" strokeWidth={1.5} />
                </button>
              </DialogTrigger>
              <DialogContent aria-describedby="mobile-menu-description">
                <DialogTitle className="sr-only">Main menu</DialogTitle>
                <DialogDescription id="mobile-menu-description" className="sr-only">
                  Navigate the Garr Dental Center website
                </DialogDescription>

                <div className="mt-2">
                  <Wordmark tone="light" />
                </div>

                <nav
                  className="mt-12 flex flex-col"
                  aria-label="Mobile navigation"
                >
                  {primaryNav.map((item, index) => (
                    <DialogClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex items-center justify-between border-b border-cream/10 py-4 font-display text-2xl tracking-[-0.02em] transition-colors",
                          isActive(pathname, item.href)
                            ? "text-copper-300"
                            : "text-cream hover:text-copper-300",
                        )}
                      >
                        <span>{item.label}</span>
                        <span className="font-mono text-[0.66rem] tracking-[0.2em] text-cream/30">
                          0{index + 1}
                        </span>
                      </Link>
                    </DialogClose>
                  ))}
                  <DialogClose asChild>
                    <Link
                      href="/virtual-consult"
                      className="group flex items-center justify-between border-b border-cream/10 py-4 font-display text-2xl tracking-[-0.02em] text-cream transition-colors hover:text-copper-300"
                    >
                      <span>Virtual consult</span>
                      <span className="font-mono text-[0.66rem] tracking-[0.2em] text-copper-300">
                        Free
                      </span>
                    </Link>
                  </DialogClose>
                </nav>

                <div className="mt-auto space-y-4 pt-8">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/contact">
                      Request an appointment
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                  <a
                    href={siteConfig.phoneHref}
                    className="flex items-center justify-center gap-2 text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    <Phone className="size-4" strokeWidth={1.6} />
                    {siteConfig.phone}
                  </a>
                  <p className="text-center text-xs leading-5 text-cream/55">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state}{" "}
                    {siteConfig.address.zip}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
}
