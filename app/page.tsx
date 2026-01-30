import CommentsContainer from "@/container/CommentsContainer";
import { createClient } from "@/database/client";

export default async function Home() {

  const supabase = createClient();

  const { data : comments } = await supabase.from('comments').select().order('created_at', { ascending: false });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <CommentsContainer comments={comments || []} />
    </div>
  );
}
