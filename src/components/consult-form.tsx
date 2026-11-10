"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ImagePlus,
  Loader2,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { FieldError, Label } from "@/components/ui/label";
import { Input, Textarea } from "@/components/ui/input";
import {
  consultInterests,
  consultSchema,
  type ConsultValues,
} from "@/lib/schemas";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const steps = [
  { id: "about", label: "About you" },
  { id: "smile", label: "Your smile" },
  { id: "review", label: "Review" },
] as const;

const stepFields: (keyof ConsultValues)[][] = [
  ["firstName", "lastName", "email", "phone"],
  ["interests", "comments", "photoName"],
  ["consent"],
];

const STORAGE_KEY = "garr-consult-draft";

export function ConsultForm() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const loaded = useRef(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    watch,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<ConsultValues>({
    resolver: zodResolver(consultSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interests: [],
      comments: "",
      photoName: "",
      consent: false,
    },
  });

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<ConsultValues>;
        reset({
          firstName: parsed.firstName ?? "",
          lastName: parsed.lastName ?? "",
          email: parsed.email ?? "",
          phone: parsed.phone ?? "",
          interests: Array.isArray(parsed.interests) ? parsed.interests : [],
          comments: parsed.comments ?? "",
          photoName: parsed.photoName ?? "",
          consent: false,
        });
      }
    } catch {
      // Ignore malformed drafts.
    } finally {
      loaded.current = true;
    }
  }, [reset]);

  useEffect(() => {
    const subscription = watch((values) => {
      if (!loaded.current) return;
      const { consent: _consent, ...rest } = values;
      void _consent;
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(rest));
      } catch {
        // Storage can be unavailable in private mode.
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const goNext = async () => {
    const valid = await trigger(stepFields[step], { shouldFocus: true });
    if (valid) setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const goBack = () => setStep((current) => Math.max(current - 1, 0));

  const onPhoto = (file: File | undefined) => {
    if (!file) return;
    if (preview) URL.revokeObjectURL(preview);
    setPhoto(file);
    setPreview(URL.createObjectURL(file));
    setValue("photoName", file.name, { shouldValidate: true });
  };

  const clearPhoto = () => {
    if (preview) URL.revokeObjectURL(preview);
    setPhoto(null);
    setPreview(null);
    setValue("photoName", "", { shouldValidate: true });
    if (fileInput.current) fileInput.current.value = "";
  };

  const onSubmit = async (values: ConsultValues) => {
    setServerError(null);
    try {
      const response = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      window.localStorage.removeItem(STORAGE_KEY);
      setSent(true);
      reset();
      setPhoto(null);
      setPreview(null);
    } catch {
      setServerError(
        "Something went wrong sending your request. Please call us at 701-652-2300.",
      );
    }
  };

  const values = getValues();

  if (sent) {
    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-pine-800/15 bg-cream p-8 shadow-soft md:p-12">
        <div className="absolute -right-16 -top-16 size-48 rounded-full bg-sage-200/60 blur-3xl" />
        <div className="relative">
          <div className="grid size-16 place-items-center rounded-full bg-pine-900 text-cream">
            <Check className="size-7" strokeWidth={1.6} />
          </div>
          <h3 className="mt-7 font-display text-4xl tracking-[-0.035em] text-pine-950">
            Your consult is on its way.
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-ink-soft">
            Thank you. Your request has been received and our team will follow up
            about your personalized virtual consult. If you have a photo ready,
            keep an eye out for next steps.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/services">
                Explore our services
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href={siteConfig.phoneHref}>
                <Phone className="size-4" strokeWidth={1.8} />
                {siteConfig.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-cream/70 shadow-soft backdrop-blur-sm"
    >
      <div className="border-b border-ink/10 px-6 py-5 md:px-9">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow text-copper-700">Free virtual consult</p>
            <p className="mt-1 font-display text-xl tracking-[-0.02em] text-pine-950">
              Step {step + 1} of 3 — {steps[step].label}
            </p>
          </div>
          <div className="hidden items-center gap-1.5 rounded-full border border-pine-800/15 bg-sage-100/60 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-pine-800 sm:flex">
            <ShieldCheck className="size-3.5" strokeWidth={1.8} />
            Private
          </div>
        </div>
        <div className="mt-4 flex gap-1.5" aria-hidden="true">
          {steps.map((item, index) => (
            <span
              key={item.id}
              className={cn(
                "h-1 flex-1 rounded-full transition-colors duration-500",
                index <= step ? "bg-copper-500" : "bg-ink/10",
              )}
            />
          ))}
        </div>
      </div>

      <div className="px-6 py-7 md:px-9 md:py-9">
        {step === 0 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="consult-first">First name</Label>
              <Input
                id="consult-first"
                autoComplete="given-name"
                placeholder="First name"
                className="mt-2"
                aria-invalid={Boolean(errors.firstName)}
                {...register("firstName")}
              />
              <FieldError>{errors.firstName?.message}</FieldError>
            </div>
            <div>
              <Label htmlFor="consult-last">Last name</Label>
              <Input
                id="consult-last"
                autoComplete="family-name"
                placeholder="Last name"
                className="mt-2"
                aria-invalid={Boolean(errors.lastName)}
                {...register("lastName")}
              />
              <FieldError>{errors.lastName?.message}</FieldError>
            </div>
            <div>
              <Label htmlFor="consult-email">Email</Label>
              <Input
                id="consult-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="mt-2"
                aria-invalid={Boolean(errors.email)}
                {...register("email")}
              />
              <FieldError>{errors.email?.message}</FieldError>
            </div>
            <div>
              <Label htmlFor="consult-phone">Phone</Label>
              <Input
                id="consult-phone"
                type="tel"
                autoComplete="tel"
                placeholder="(701) 000-0000"
                className="mt-2"
                aria-invalid={Boolean(errors.phone)}
                {...register("phone")}
              />
              <FieldError>{errors.phone?.message}</FieldError>
            </div>
            <p className="text-xs leading-6 text-ink-soft/60 sm:col-span-2">
              Your details stay with our team. We&apos;ll use them only to follow
              up about your virtual consult.
            </p>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <Label>What would you like to talk about?</Label>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {consultInterests.map((interest) => (
                  <label
                    key={interest}
                    className="group flex cursor-pointer items-center gap-3 rounded-xl border border-ink/12 bg-paper/50 px-3.5 py-3 text-sm text-ink-soft transition-colors has-[:checked]:border-copper-500/50 has-[:checked]:bg-copper-200/25 has-[:checked]:text-pine-950"
                  >
                    <input
                      type="checkbox"
                      value={interest}
                      className="size-4 rounded border-ink/25 accent-copper-600"
                      {...register("interests")}
                    />
                    {interest}
                  </label>
                ))}
              </div>
              <FieldError>{errors.interests?.message}</FieldError>
            </div>

            <div>
              <Label htmlFor="consult-comments">
                Your desires and concerns
              </Label>
              <Textarea
                id="consult-comments"
                placeholder="Tell us what you'd like to change, or what's on your mind about your smile."
                className="mt-2"
                aria-invalid={Boolean(errors.comments)}
                {...register("comments")}
              />
              <FieldError>{errors.comments?.message}</FieldError>
            </div>

            <div>
              <Label htmlFor="consult-photo">Smile photo (optional)</Label>
              <div className="mt-2">
                {preview ? (
                  <div className="relative overflow-hidden rounded-2xl border border-ink/12">
                    <Image
                      src={preview}
                      alt="Your smile photo preview"
                      width={720}
                      height={420}
                      unoptimized
                      className="h-44 w-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={clearPhoto}
                      className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-pine-950/70 text-cream backdrop-blur transition-colors hover:bg-pine-950"
                      aria-label="Remove photo"
                    >
                      <X className="size-4" />
                    </button>
                    <span className="absolute bottom-3 left-3 rounded-full bg-pine-950/70 px-3 py-1 text-[0.68rem] text-cream backdrop-blur">
                      {photo?.name}
                    </span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInput.current?.click()}
                    className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-ink/20 bg-paper/40 px-5 py-8 text-center transition-colors hover:border-copper-500/50 hover:bg-copper-200/10"
                  >
                    <ImagePlus
                      className="size-6 text-copper-600"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm font-semibold text-pine-950">
                      Upload a close-up smile or selfie smile
                    </span>
                    <span className="text-xs text-ink-soft/60">
                      JPG or PNG — optional, but helpful
                    </span>
                  </button>
                )}
                <input
                  ref={fileInput}
                  id="consult-photo"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(event) => onPhoto(event.target.files?.[0])}
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-ink/10 bg-paper/50 p-5">
              <p className="eyebrow text-ink-soft/50">Review your details</p>
              <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-soft/50">
                    Name
                  </dt>
                  <dd className="mt-1 text-pine-950">
                    {values.firstName} {values.lastName}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-soft/50">
                    Contact
                  </dt>
                  <dd className="mt-1 break-all text-pine-950">
                    {values.email}
                    <br />
                    {values.phone}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-soft/50">
                    Focus areas
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1.5">
                    {values.interests?.map((interest) => (
                      <span
                        key={interest}
                        className="rounded-full border border-pine-800/15 bg-sage-100/60 px-2.5 py-1 text-[0.68rem] text-pine-800"
                      >
                        {interest}
                      </span>
                    ))}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-soft/50">
                    Comments
                  </dt>
                  <dd className="mt-1 leading-6 text-ink-soft">
                    {values.comments}
                  </dd>
                </div>
                {values.photoName && (
                  <div className="sm:col-span-2">
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-soft/50">
                      Photo
                    </dt>
                    <dd className="mt-1 text-ink-soft">{values.photoName}</dd>
                  </div>
                )}
              </dl>
            </div>

            <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-ink-soft">
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
                className="rounded-xl border border-copper-600/25 bg-copper-200/30 px-4 py-3 text-xs leading-5 text-copper-700"
              >
                {serverError}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col-reverse items-stretch gap-3 border-t border-ink/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-9">
        {step > 0 ? (
          <Button
            type="button"
            variant="ghost"
            onClick={goBack}
            className="justify-center"
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>
        ) : (
          <p className="hidden text-[0.68rem] leading-5 text-ink-soft/55 sm:block">
            Three short steps. No charge.
          </p>
        )}

        {step < steps.length - 1 ? (
          <Button type="button" onClick={goNext} className="group">
            Continue
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        ) : (
          <Button type="submit" disabled={isSubmitting} className="group">
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Sending
              </>
            ) : (
              <>
                Request my consult
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </>
            )}
          </Button>
        )}
      </div>
    </form>
  );
}
