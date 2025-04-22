import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: "Name is required",
    })
    .max(50, {
      message: "Name must be less than 50 characters",
    }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters long",
    })
    .max(1000, {
      message: "Message must be less than 1000 characters",
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
