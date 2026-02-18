import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {
  const { comment_id } = await req.json()

  // Insert a like
  const { data, error } = await supabase
    .from("likes")
    .insert({ comment_id })
    .select()
    .single()

  if (error) return NextResponse.json({ error }, { status: 500 })

  return NextResponse.json({ data })
}
