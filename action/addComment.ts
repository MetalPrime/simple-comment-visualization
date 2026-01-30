"use server";

import { createClient } from "@/database/server";
import { CommentSchema } from "@/schemas/CommentSchema";
import { revalidatePath } from "next/cache";

export async function addComment(comment: CommentSchema) {
    console.log("Adding comment:", comment);
    try {
        const supabase = await createClient();
        await supabase.from('comments').insert(comment);
        console.log("Comment added successfully");
        revalidatePath('/');
    } catch (error) {
        console.error("Error adding comment:", error);
    }
}