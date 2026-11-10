import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex h-12 w-full rounded-2xl border border-ink/15 bg-cream/80 px-4 text-sm text-ink shadow-[0_1px_0_rgba(255,255,255,0.6)_inset] transition-colors placeholder:text-ink-soft/55 focus-visible:border-copper-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500/20 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-32 w-full resize-y rounded-2xl border border-ink/15 bg-cream/80 px-4 py-3.5 text-sm text-ink shadow-[0_1px_0_rgba(255,255,255,0.6)_inset] transition-colors placeholder:text-ink-soft/55 focus-visible:border-copper-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500/20 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";
