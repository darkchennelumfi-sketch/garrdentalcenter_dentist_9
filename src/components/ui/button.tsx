import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[-0.01em] transition-[transform,background-color,color,border-color,box-shadow] duration-300 ease-[var(--ease-out-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-55 active:translate-y-px",
  {
    variants: {
      variant: {
        primary:
          "bg-copper-600 text-cream shadow-[0_14px_34px_-16px_rgba(140,71,37,0.8)] hover:bg-copper-700 hover:shadow-[0_18px_42px_-16px_rgba(140,71,37,0.85)]",
        pine: "bg-pine-900 text-cream shadow-[0_14px_34px_-18px_rgba(6,23,19,0.9)] hover:bg-pine-800",
        outline:
          "border border-ink/20 bg-transparent text-ink hover:border-ink/40 hover:bg-ink/[0.04]",
        light:
          "border border-cream/25 bg-cream/10 text-cream backdrop-blur-md hover:bg-cream/18",
        cream:
          "bg-cream text-pine-950 shadow-[0_14px_34px_-18px_rgba(6,23,19,0.7)] hover:bg-white",
        ghost: "text-ink hover:bg-ink/[0.06]",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-5",
        lg: "h-13 px-7 text-[0.95rem]",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
