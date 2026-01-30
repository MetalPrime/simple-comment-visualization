"use client";

import CustomComment from "@/components/CustomComment";
import CustomForm from "@/components/CustomForm";
import { CommentSchema } from "@/schemas/CommentSchema";
import { useOptimistic } from "react";

export default function CommentsProvider({ comments }: { comments: CommentSchema[] }) {

    const [optimisticComments, addOptimisticComment] = useOptimistic(
        comments,
        (_comments: CommentSchema[], newComment: CommentSchema) => {
            return [..._comments, { adding: true , ...newComment}];
        },
    );


    return (
        <>
            <CustomForm addOptimisticComment={addOptimisticComment} />
            <p className="w-full my-4 text-center">Comentarios</p>
            {
                optimisticComments ? optimisticComments.map((comment: CommentSchema) => (
                    <CustomComment
                        key={comment.created_at}
                        date={new Date(comment.created_at)}
                        comment={comment.comment}
                        autor={comment.autor}
                        email={comment.email}
                    />
                )) :
                    (
                        <div className="flex items-center gap-2 rounded-sm bg-zinc-800 p-4 flex-col mb-4 w-114">
                            <p className="text-body text-gray-300">
                                No hay comentarios aún. Sé el primero en comentar.
                            </p>
                        </div>
                    )
            }
        </>
    );
}