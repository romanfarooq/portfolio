"use server";

import { z } from "zod";
import { Resend } from "resend";
import { createElement } from "react";
import { getErrorMessage } from "@/lib/utils";
import { ContactFormEmail } from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  try {
    const form = Object.fromEntries(formData.entries());

    const schema = z.object({
      email: z.string().email().min(5).max(100),
      message: z.string().min(10).max(1000),
    });

    const data = schema.parse(form);

    const response = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "theromanfarooq@gmail.com",
      subject: "Message from Contact Form",
      replyTo: data.email,
      react: createElement(ContactFormEmail, {
        message: data.message,
        senderEmail: data.email,
      }),
    });

    if (response.data?.id) {
      return {
        message: "Email sent successfully",
      };
    } else {
      return {
        error: getErrorMessage(response.error),
      };
    }
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
}
