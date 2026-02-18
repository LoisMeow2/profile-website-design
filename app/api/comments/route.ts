import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .order("created_at", { ascending: false });

  return Response.json({ data, error });
}

export async function POST(req: Request) {
  const { user_name, content } = await req.json();

  const { data, error } = await supabase
    .from("comments")
    .insert([{ user_name, content }]);

  return Response.json({ data, error });
}
