import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { promises as fs } from 'fs'
import path from 'path'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Detect if Supabase is configured (not placeholder)
function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
  return url.length > 0 && !url.includes('xxxxxxxxxxxxxxxxxxxx')
}

// ── Local file fallback (dev mode without Supabase) ──────────────────────────
const LOCAL_FILE = path.join(process.cwd(), 'waitlist-local.json')

async function readLocalList(): Promise<string[]> {
  try {
    const raw = await fs.readFile(LOCAL_FILE, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

async function saveToLocal(email: string): Promise<{ duplicate: boolean }> {
  const list = await readLocalList()
  if (list.includes(email)) return { duplicate: true }
  list.push(email)
  await fs.writeFile(LOCAL_FILE, JSON.stringify(list, null, 2))
  return { duplicate: false }
}

// ── Supabase handler ──────────────────────────────────────────────────────────
async function saveToSupabase(
  email: string
): Promise<{ duplicate: boolean; error?: string }> {
  const supabase = createServerClient()

  const { data: existing, error: checkError } = await supabase
    .from('waitlist')
    .select('id')
    .eq('email', email)
    .maybeSingle()

  if (checkError) {
    console.error('[waitlist] supabase check error:', checkError)
    return { duplicate: false, error: 'Database error' }
  }

  if (existing) return { duplicate: true }

  const { error: insertError } = await supabase
    .from('waitlist')
    .insert([{ email }])

  if (insertError) {
    console.error('[waitlist] supabase insert error:', insertError)
    return { duplicate: false, error: 'Insert failed' }
  }

  return { duplicate: false }
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const rawEmail: string = body?.email ?? ''
    const email = rawEmail.trim().toLowerCase()

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    if (isSupabaseConfigured()) {
      // ── Production: use Supabase ──
      const result = await saveToSupabase(email)

      if (result.error) {
        return NextResponse.json(
          { error: 'Something went wrong. Please try again.' },
          { status: 500 }
        )
      }
      if (result.duplicate) {
        return NextResponse.json(
          { error: "You're already on the waitlist — we'll be in touch soon!" },
          { status: 409 }
        )
      }
    } else {
      // ── Development: save to local JSON file ──
      console.log('[waitlist] Supabase not configured — using local file fallback')
      const result = await saveToLocal(email)
      if (result.duplicate) {
        return NextResponse.json(
          { error: "You're already on the waitlist — we'll be in touch soon!" },
          { status: 409 }
        )
      }
      console.log(`[waitlist] Saved to local file: ${email}`)
    }

    return NextResponse.json(
      { message: "You're on the list — we'll reach out when the time comes." },
      { status: 201 }
    )
  } catch (err) {
    console.error('[waitlist] unexpected error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}
