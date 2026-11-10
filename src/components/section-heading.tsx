import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-5 flex items-center gap-3",
            align === "center" && "justify-center",
            tone === "light" ? "text-copper-300" : "text-copper-700",
          )}
        >
          <span
            className={cn(
              "inline-block h-px w-8",
              tone === "light" ? "bg-copper-300/60" : "bg-copper-600/50",
            )}
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "display-2",
          tone === "light" ? "text-cream" : "text-pine-950",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-7 md:text-[1.05rem] md:leading-8",
            align === "center" && "mx-auto",
            tone === "light" ? "text-cream/65" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
