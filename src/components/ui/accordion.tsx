"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b border-ink/12", className)}
      {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex flex-1 items-center justify-between gap-6 py-6 text-left font-display text-xl leading-tight tracking-[-0.02em] text-ink transition-colors hover:text-copper-700 md:text-2xl",
          className,
        )}
        {...props}
      >
        {children}
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/15 bg-cream/60 transition-all duration-300 group-hover:border-copper-500/50 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-copper-600 group-data-[state=open]:text-cream">
          <Plus className="size-4" strokeWidth={1.5} />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden data-[state=open]:animate-[accordion-down_320ms_var(--ease-out-soft)] data-[state=closed]:animate-[accordion-up_260ms_var(--ease-out-soft)]"
      {...props}
    >
      <div
        className={cn(
          "max-w-2xl pb-7 pr-10 text-[0.95rem] leading-7 text-ink-soft",
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}
