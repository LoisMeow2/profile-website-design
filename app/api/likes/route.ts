import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  const { comment_id } = await req.json();

  const { data, error } = await supabase
    .from("likes")
    .insert([{ comment_id }]);

  return Response.json({ data, error });
}
