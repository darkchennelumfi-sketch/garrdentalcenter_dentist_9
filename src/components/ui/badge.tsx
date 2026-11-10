import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.16em]",
  {
    variants: {
      variant: {
        default: "border-ink/15 bg-cream/60 text-ink-soft",
        copper: "border-copper-500/30 bg-copper-200/40 text-copper-700",
        pine: "border-pine-600/25 bg-sage-100 text-pine-800",
        dark: "border-cream/20 bg-cream/10 text-cream/80",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
