import { z } from "zod";

export function getErrorMessage(error: unknown): string {
  let message: string;

  if (error instanceof z.ZodError) {
    const zodErrors = error.issues.map((issue) => {
      return issue.message;
    });
    message = zodErrors.join(", ");
  } else if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
}
