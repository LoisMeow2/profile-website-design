import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function GET() {
  const { data, error } = await supabase
    .from("comments")
    .select(`
      *,
      likes:likes(count)
    `)
    .order("created_at", { ascending: false })

  if (error) return NextResponse.json({ error }, { status: 500 })

  // Map likes count
  const formatted = data.map((c: any) => ({
    id: c.id,
    username: c.username,
    text: c.text,
    likes: c.likes?.length || 0,
    liked_by_me: false, // placeholder
    created_at: c.created_at,
  }))

  return NextResponse.json({ data: formatted })
}

export async function POST(req: Request) {
  const { username, text } = await req.json()

  const { data, error } = await supabase
    .from("comments")
    .insert({ username, text })
    .select()
    .single()

  if (error) return NextResponse.json({ error }, { status: 500 })

  return NextResponse.json({ data })
}
