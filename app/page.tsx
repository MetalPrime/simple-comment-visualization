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
      Comentarios
      {
        comments?.map((comment: CommentSchema) => (
            <CustomComment
              key={comment.created_at}
              date={new Date(comment.created_at)}
              comment={comment.comment}
              autor={comment.autor}
              email={comment.email}
            />
        ))
      }
    </div>
  );
}
