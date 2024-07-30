import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(50, { message: "Name must be less than 50 character" }),
  email: z.string().email("Invalid Email address"),
  phone: z
    .string()
    .refine(
      (phone) => /^\+?[1-9]\d{1,14}$/.test(phone),
      "Invalid phone number"
    ),
});
