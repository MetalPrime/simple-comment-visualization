import { z } from 'zod';

export const commentSchema = z.object({
  autor: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.email({ message: "Invalid email address" }).optional(),
  comment: z.string().min(5, { message: "Comment must be at least 5 characters" }),
  date: z.iso.datetime(),
});

// Infer the TypeScript type from the schema
export type CommentSchema = z.infer<typeof commentSchema>;