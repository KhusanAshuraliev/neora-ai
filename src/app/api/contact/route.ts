import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { promises as fs } from 'fs'
import path from 'path'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const LOCAL_FILE = path.join(process.cwd(), 'contact-local.json')

function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
  return url.length > 0 && !url.includes('xxxxxxxxxxxxxxxxxxxx')
}

// ── Local file fallback ───────────────────────────────────────────────────────
async function saveToLocal(data: object): Promise<void> {
  let list: object[] = []
  try {
    const raw = await fs.readFile(LOCAL_FILE, 'utf-8')
    list = JSON.parse(raw)
  } catch {}
  list.push({ ...data, created_at: new Date().toISOString() })
  await fs.writeFile(LOCAL_FILE, JSON.stringify(list, null, 2))
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const name: string = (body?.name ?? '').trim()
    const email: string = (body?.email ?? '').trim().toLowerCase()
    const phone: string = (body?.phone ?? '').trim()
    const message: string = (body?.message ?? '').trim()

    // Validate required fields
    if (!name) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    }
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
    }
    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 })
    }

    const record = { name, email, phone: phone || null, message }

    if (isSupabaseConfigured()) {
      // ── Production: save to Supabase ──
      const supabase = createServerClient()
      const { error } = await supabase.from('contact_requests').insert([record])

      if (error) {
        console.error('[contact] supabase insert error:', error)
        return NextResponse.json(
          { error: 'Failed to send message. Please try again.' },
          { status: 500 }
        )
      }
    } else {
      // ── Development: save to local JSON file ──
      console.log('[contact] Supabase not configured — saving to local file')
      await saveToLocal(record)
      console.log(`[contact] Saved message from: ${email}`)
    }

    return NextResponse.json(
      { message: 'Message received. Thank you!' },
      { status: 201 }
    )
  } catch (err) {
    console.error('[contact] unexpected error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}
