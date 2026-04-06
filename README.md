# Neora AI — Landing Website

> **Your mind. Beyond time.**

A premium, production-ready landing page for Neora AI — a digital human legacy platform. Built with Next.js 14, Three.js, Framer Motion, and Supabase.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion + GSAP |
| 3D | Three.js + React Three Fiber |
| Database | Supabase (PostgreSQL) |
| Deployment | Vercel |

---

## Project Structure

```
neora-ai/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   │   ├── page.tsx            # Home page — assembles all sections
│   │   ├── globals.css         # Global styles, Tailwind
│   │   └── api/waitlist/       # POST /api/waitlist
│   │       └── route.ts
│   ├── components/
│   │   ├── three/
│   │   │   └── NeuralOrb.tsx   # 3D particle orb with bloom
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── SectionLabel.tsx
│   │   │   ├── SectionWrapper.tsx
│   │   │   └── SmoothScroll.tsx
│   │   └── sections/
│   │       ├── Navigation.tsx
│   │       ├── Hero.tsx
│   │       ├── Problem.tsx
│   │       ├── Solution.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── Technology.tsx
│   │       ├── FutureVision.tsx
│   │       ├── Waitlist.tsx
│   │       └── Footer.tsx
│   └── lib/
│       ├── utils.ts            # cn() helper
│       └── supabase.ts         # Supabase client
├── .env.local.example
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## Setup Instructions

### 1. Install dependencies

```bash
cd neora-ai
npm install
```

### 2. Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project (save your database password)
3. Go to **SQL Editor** and run:

```sql
-- Create the waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
  id   UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Only service role can read/write (used by API route only)
CREATE POLICY "service_role_only" ON public.waitlist
  USING (true)
  WITH CHECK (true);
```

4. Go to **Project Settings → API** and copy:
   - Project URL
   - `anon` public key
   - `service_role` secret key

### 3. Configure environment variables

```bash
cp .env.local.example .env.local
```

Open `.env.local` and fill in your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel

### Option A: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option B: Vercel Dashboard

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Add environment variables in **Settings → Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. Click **Deploy**

---

## Design Decisions

| Decision | Reasoning |
|---|---|
| **R3F for Three.js** | Declarative 3D integrates naturally with React component model |
| **Dynamic import for 3D canvas** | Prevents SSR crash — Three.js requires browser APIs |
| **Lenis smooth scroll** | Frame-perfect easing improves perceived premium quality |
| **Service role key in API route** | Anon key lacks insert permissions; service key never reaches client |
| **Fibonacci sphere distribution** | Uniform particle spacing looks far more natural than random |
| **`maybeSingle()` for duplicate check** | Avoids Supabase error when no row found (vs `.single()`) |

---

## Contact

**Neora AI Team**
[haapai.team@gmail.com](mailto:haapai.team@gmail.com)
