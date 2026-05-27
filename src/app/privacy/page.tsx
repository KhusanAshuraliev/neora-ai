import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Neora AI',
  description: 'How Neora AI handles, protects, and respects your personal data.',
}

const sections = [
  {
    title: 'Our commitment',
    body: 'Neora AI exists to preserve the most personal thing a person has — their identity. We treat the data you trust us with as sacred. This policy is plain-English honesty about how we protect it.',
  },
  {
    title: 'What we collect',
    body: 'Only what is needed to train your digital twin: conversations you initiate with Neora, content you choose to upload (voice notes, letters, photographs), and basic account information (email, language preference). We do not buy or sell user data — ever.',
  },
  {
    title: 'How your data is stored',
    body: 'All personal data is end-to-end encrypted at rest and in transit. Encryption keys are scoped per-user. Our internal staff cannot read your conversations or training material. Backups follow the same encryption standards.',
  },
  {
    title: 'Who can access your twin',
    body: 'Only you, and only the people you explicitly grant access to. You can update or revoke permissions at any time. Trusted guardians (if you designate any) can pause, restrict, or permanently delete your twin under conditions you choose.',
  },
  {
    title: 'How we use AI training',
    body: "Your data is used to train a model that is unique to you. Your training data is not used to train other users' models, public models, or third-party systems. Your conversations stay yours.",
  },
  {
    title: 'Your rights',
    body: 'You can export everything you have shared, pause training at any time, and request permanent deletion of your twin and all associated data. We respect GDPR, CCPA, and similar frameworks worldwide.',
  },
  {
    title: 'Cookies & analytics',
    body: 'We use minimal cookies required for the site to function. Optional analytics are anonymized and used only to improve product experience. You can opt out without losing functionality.',
  },
  {
    title: 'Contact',
    body: 'Questions about privacy? Write to haapai.team@gmail.com — a real human reads every message.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="relative section-light pt-32 pb-24">
        <div className="max-w-[820px] mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-clay hover:text-[#B86B53] mb-10 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>

          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-clay mb-5">
            Legal
          </p>
          <h1 className="font-semibold tracking-[-0.035em] text-[48px] md:text-[72px] leading-[1.05] text-slate mb-4">
            Privacy <span className="text-clay">Policy.</span>
          </h1>
          <p className="text-[14px] text-warm-soft mb-14">Last updated: May 2026</p>

          <div className="flex flex-col gap-6">
            {sections.map((s, i) => (
              <section key={i} className="card-cream rounded-xl p-7">
                <h2 className="font-semibold text-[20px] text-slate mb-3 tracking-tight">{s.title}</h2>
                <p className="text-[15px] text-warm leading-[1.75]">{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
