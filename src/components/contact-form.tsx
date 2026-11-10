"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check, Loader2, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FieldError, Label } from "@/components/ui/label";
import { Input, Textarea } from "@/components/ui/input";
import { contactSchema, type ContactValues } from "@/lib/schemas";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ContactForm({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (values: ContactValues) => {
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setSent(true);
      reset();
    } catch {
      setServerError(
        "Something went wrong sending your message. Please call us instead — we're happy to help.",
      );
    }
  };

  if (sent) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.75rem] border border-pine-800/15 bg-cream/75 p-8 shadow-soft md:p-10",
          className,
        )}
      >
        <div className="grid size-14 place-items-center rounded-full bg-pine-900 text-cream">
          <Check className="size-6" strokeWidth={1.6} />
        </div>
        <h3 className="mt-6 font-display text-3xl tracking-[-0.03em] text-pine-950">
          Message received.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-7 text-ink-soft">
          Thank you for reaching out. Our team will be in touch soon. If you
          need us right away, call{" "}
          <a
            href={siteConfig.phoneHref}
            className="font-semibold text-copper-700 underline decoration-copper-500/40 underline-offset-4"
          >
            {siteConfig.phone}
          </a>
          .
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-7"
          onClick={() => setSent(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "relative rounded-[1.75rem] border border-ink/10 bg-cream/65 p-6 shadow-soft backdrop-blur-sm md:p-8",
        className,
      )}
      noValidate
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-copper-700">Send a message</p>
          <h3 className="mt-2 font-display text-2xl tracking-[-0.03em] text-pine-950 md:text-3xl">
            How can we help?
          </h3>
        </div>
        {!compact && (
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-ink/15 bg-paper/60 px-3.5 py-2 text-xs font-semibold text-ink-soft transition-colors hover:border-ink/30 hover:text-pine-950 sm:inline-flex"
          >
            <Phone className="size-3.5" strokeWidth={1.8} />
            Call instead
          </a>
        )}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <Label htmlFor="contact-name">Name</Label>
          <Input
            id="contact-name"
            autoComplete="name"
            placeholder="Your full name"
            className="mt-2"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
          <FieldError>{errors.name?.message}</FieldError>
        </div>
        <div className="sm:col-span-1">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-2"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
          <FieldError>{errors.email?.message}</FieldError>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="contact-phone">Phone</Label>
          <Input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="(701) 000-0000"
            className="mt-2"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
          <FieldError>{errors.phone?.message}</FieldError>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="contact-message">Message</Label>
          <Textarea
            id="contact-message"
            placeholder="Tell us what you're looking for, or ask us a question."
            className="mt-2"
            aria-invalid={Boolean(errors.message)}
            {...register("message")}
          />
          <FieldError>{errors.message?.message}</FieldError>
        </div>
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-5 text-ink-soft">
        <input
          type="checkbox"
          className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-ink/25 accent-copper-600"
          aria-invalid={Boolean(errors.consent)}
          {...register("consent")}
        />
        <span>
          {siteConfig.smsConsent} For more information, see our{" "}
          <Link
            href="/privacy"
            className="underline decoration-ink/30 underline-offset-2 transition-colors hover:text-copper-700"
          >
            privacy policy
          </Link>
          .
        </span>
      </label>
      <FieldError>{errors.consent?.message}</FieldError>

      {serverError && (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-copper-600/25 bg-copper-200/30 px-4 py-3 text-xs leading-5 text-copper-700"
        >
          {serverError}
        </p>
      )}

      <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-[0.68rem] leading-5 text-ink-soft/60">
          We usually respond during office hours.
        </p>
        <Button type="submit" disabled={isSubmitting} className="group w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending
            </>
          ) : (
            <>
              Send message
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
