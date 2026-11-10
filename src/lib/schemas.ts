import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "That name is a little too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address.")
    .max(180),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number we can reach you on.")
    .max(30),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little about how we can help.")
    .max(2000, "Please keep your message under 2,000 characters."),
  consent: z
    .boolean()
    .refine(
      (value) => value,
      "Please agree to receive text messages before submitting.",
    ),
});

export type ContactValues = z.infer<typeof contactSchema>;

export const consultSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "Please enter your first name.")
    .max(80),
  lastName: z
    .string()
    .trim()
    .min(2, "Please enter your last name.")
    .max(80),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number we can reach you on.")
    .max(30),
  interests: z
    .array(z.string())
    .min(1, "Choose at least one area you would like to talk about."),
  comments: z
    .string()
    .trim()
    .min(10, "Please share a few words about your smile goals.")
    .max(2000),
  photoName: z.string().max(240).optional(),
  consent: z
    .boolean()
    .refine(
      (value) => value,
      "Please agree to receive text messages before submitting.",
    ),
});

export type ConsultValues = z.infer<typeof consultSchema>;

export const consultInterests = [
  "Cosmetic dentistry",
  "Dental implants",
  "Laser dentistry",
  "Full mouth reconstruction",
  "Sleep, snoring & airway",
  "General & family care",
] as const;
