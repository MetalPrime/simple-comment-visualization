import CustomComment from "@/components/CustomComment";
import CustomForm from "@/components/CustomForm";
import { createClient } from "@/database/client";
import { CommentSchema } from "@/schemas/CommentSchema";

export default async function Home() {

  const supabase = createClient();

  const { data : comments } = await supabase.from('comments').select().order('created_at', { ascending: false });


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <CustomForm />
      <p className="w-full my-4 text-center">Comentarios</p>
      {
        comments? comments.map((comment: CommentSchema) => (
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
    </div>
  );
}
