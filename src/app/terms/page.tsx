import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — Neora AI',
  description: 'The rules of the road for using Neora AI.',
}

const sections = [
  {
    title: 'Acceptance of terms',
    body: 'By accessing or using Neora AI, you agree to these terms. If you do not agree, please do not use the service. We try to keep these terms short and human.',
  },
  {
    title: 'Who can use Neora',
    body: 'You must be at least 18 years old to create a digital twin. Younger users can be honored on the platform by a parent or legal guardian under specific conditions described in our minor preservation policy.',
  },
  {
    title: 'Your account',
    body: 'You are responsible for the security of your account credentials and for actions taken under your account. Notify us immediately if you suspect unauthorized access.',
  },
  {
    title: 'Your content',
    body: 'You own everything you upload to Neora — your conversations, voice notes, letters, and other personal material. You grant us a limited license solely to train your twin and provide the service. We claim no ownership over your identity or expression.',
  },
  {
    title: 'Acceptable use',
    body: "Neora may not be used to impersonate others without consent, to generate harmful or unlawful content, or to harass any individual. You may not use the service to circumvent another person's wishes about their own digital presence.",
  },
  {
    title: 'Service availability',
    body: 'We strive for high availability, but Neora is offered as-is. We are in active development and some features may change, evolve, or briefly become unavailable as we improve the product.',
  },
  {
    title: 'After your lifetime',
    body: 'You decide in advance what happens to your twin. Your designated guardians have the powers you have granted them, and no more. We commit to honoring your wishes about your own digital presence.',
  },
  {
    title: 'Changes to these terms',
    body: 'If we update these terms, we will notify you by email and give reasonable advance notice for material changes. Continued use after the effective date means you accept the updated terms.',
  },
  {
    title: 'Contact',
    body: 'Questions about these terms? Write to haapai.team@gmail.com.',
  },
]

export default function TermsPage() {
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
            Terms of <span className="text-clay">Service.</span>
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
