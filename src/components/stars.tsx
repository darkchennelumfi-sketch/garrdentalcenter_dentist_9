import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

export function Stars({
  className,
  size = "size-4",
}: {
  className?: string;
  size?: string;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-1 text-copper-500", className)}
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(size, "fill-current")}
          strokeWidth={0}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}
