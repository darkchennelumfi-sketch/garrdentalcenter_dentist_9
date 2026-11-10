import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/reviews";

export function FaqSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-copper-700">
                <span className="inline-block h-px w-8 bg-copper-600/50" />
                Good to know
              </p>
              <h2 className="display-2 mt-6 text-pine-950">
                Questions,{" "}
                <em className="italic text-copper-600">answered.</em>
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-ink-soft">
                A few things patients ask before their first visit. If yours
                isn&apos;t here, our team is a call away.
              </p>

              <div className="mt-8 rounded-2xl border border-ink/10 bg-cream/60 p-5">
                <span className="grid size-10 place-items-center rounded-full bg-pine-900 text-cream">
                  <MessageCircle className="size-4" strokeWidth={1.6} />
                </span>
                <p className="mt-4 font-display text-xl tracking-[-0.02em] text-pine-950">
                  Still wondering?
                </p>
                <p className="mt-2 text-xs leading-6 text-ink-soft">
                  Ask us directly — we&apos;re happy to talk it through before
                  you book.
                </p>
                <Button asChild variant="outline" size="sm" className="mt-4">
                  <Link href="/contact">
                    Ask a question
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.08}>
              <Accordion type="single" collapsible className="border-t border-ink/12">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`item-${index}`}>
                    <AccordionTrigger>
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-[0.66rem] tracking-[0.16em] text-copper-600/70">
                          0{index + 1}
                        </span>
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
