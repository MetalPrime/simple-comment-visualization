'use client';

import { errorInitialComment } from "@/constants/Comment";
import { createClient } from "@/database/client";
import { CommentSchema, commentSchema } from "@/schemas/CommentSchema"
import React from "react";

interface CustomFormProps {
    addOptimisticComment?: (comment: CommentSchema) => void;
 }

export default function CustomForm({ addOptimisticComment }: CustomFormProps) {

    const [formData, setFormData] = React.useState<Partial<CommentSchema>>({});
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState<Record<keyof CommentSchema, string>>(errorInitialComment);

    const handleComment = (field: keyof CommentSchema, value: string) => {
        setFormData({
            ...formData,
            [field]: value
        });
    }

    const submitComment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrors(errorInitialComment);
        setLoading(true);

        const form = e.currentTarget;

        const data: CommentSchema = {
            autor: formData.autor ?? "",
            email: formData.email || undefined,
            comment: formData.comment ?? "",
            created_at: new Date().toISOString(),
        };

        const result = commentSchema.safeParse(data);

        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            result.error.issues.forEach((err) => {
                const field = err.path[0] as keyof CommentSchema;
                if (err.path.length > 0) {
                    fieldErrors[field] = err.message;
                }
            });
            setErrors(fieldErrors);
            setLoading(false);
            return;
        }

        setErrors(errorInitialComment);
        if (addOptimisticComment) {
            addOptimisticComment(data);
        }

        try {
            sleep(2000); // Simular retardo de red
            const supabase = createClient();
            const request = await supabase.from('comments').insert([data]);
            console.log("Insert response:", request);
        } catch (error) {
            console.error("Error submitting comment:", error);
        } finally {
            setLoading(false);
            setFormData({});
            form.reset();
        }
    }

    return (
        <form className="mb-2" onSubmit={submitComment}>
            <h2 className="mb-1">Crear un nuevo comentario</h2>
            <div className="flex w-full flex-row gap-4 mb-1">
                <div>
                    <label htmlFor="author" className="block text-sm text-gray-400 mb-1">Autor:</label>
                    <input type="text" id="author" name="author" className="w-full rounded-md bg-zinc-800 border border-zinc-700 text-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600" onChange={(e) => handleComment('autor', e.target.value)} />
                    {
                        errors.autor && <p className="text-sm text-red-500 mt-1">{errors.autor}</p>
                    }
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email (opcional):</label>
                    <input type="text" id="email" name="email" className="w-full rounded-md bg-zinc-800 border border-zinc-700 text-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600" onChange={(e) => handleComment("email", e.target.value)} />
                    {
                        errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                    }
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Comentario:</label>
                <textarea
                    id="comment"
                    name="comment"
                    rows={4}
                    className="w-full rounded-md bg-zinc-800 border border-zinc-700 text-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600 resize-none"
                    onChange={(e) => handleComment("comment", e.target.value)}
                />
                {
                    errors.comment && <p className="text-sm text-red-500 mt-1">{errors.comment}</p>
                }
            </div>
            <button type="submit" disabled={loading} className="w-full bg-gray-700 hover:bg-gray-600 text-gray-100 
             font-medium py-2 rounded-md transition">{loading ? 'Añadiendo...' : 'Añadir Comentario'}</button>
        </form>
    )
}

function sleep(arg0: number) {
    throw new Error("Function not implemented.");
}
