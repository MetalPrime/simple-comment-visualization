import { createClient } from "@/database/client";

export default async function Home() {

  const supabase = createClient();

  const { data: comments } = await supabase.from('comments').select();


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      Comentarios
      <pre className="mt-2">
        {JSON.stringify(comments, null, 2)}
      </pre>
    </div>
  );
}
