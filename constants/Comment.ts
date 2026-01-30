import { CommentSchema } from "@/schemas/CommentSchema";

export const errorInitialComment : Record<keyof CommentSchema, string> = {
        autor: "",
        email: "",
        comment: "",
        created_at: "",
}