import { z } from 'zod';

export const signInSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z
  .string()
  .min(6, { message: "Password must be at least 6 characters" })
  .max(100, { message: "Password must be at most 100 characters" })
  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
  .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
  .regex(/[0-9]/, { message: "Password must contain at least one number" })
  .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }).trim(),
});

// Infer the TypeScript type from the schema
export type SignInSchemaSchema = z.infer<typeof signInSchema>;