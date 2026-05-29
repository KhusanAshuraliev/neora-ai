'use client'

import Link from 'next/link'
import { useTranslation } from '@/lib/LanguageProvider'
import NewsletterForm from '@/components/ui/NewsletterForm'

export default function Footer() {
  const { t } = useTranslation()

  const productLinks = [
    { label: t.footer.nav.story, href: '/story' },
    { label: t.footer.nav.howItWorks, href: '/how-it-works' },
    { label: t.nav.tryIt, href: '/try' },
    { label: t.nav.pricing, href: '/pricing' },
  ]

  const companyLinks = [
    { label: t.about.label, href: '/about' },
    { label: t.nav.faq, href: '/faq' },
    { label: t.nav.contact, href: '/contact' },
    { label: t.footer.nav.waitlist, href: '/#waitlist' },
  ]

  const legalLinks = [
    { label: t.footer.legal.privacy, href: '/privacy' },
    { label: t.footer.legal.terms, href: '/terms' },
  ]

  return (
    <footer className="relative section-light border-t border-[#D4CCB8]">
      <div className="max-w-[1200px] mx-auto px-6 py-14 md:py-16">
        {/* Newsletter row */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center pb-12 mb-12 border-b border-[#E5DECB]">
          <div>
            <h3 className="font-semibold tracking-[-0.025em] text-[26px] md:text-[30px] text-slate mb-2 leading-tight">
              {t.footer.newsletterTitle}
            </h3>
            <p className="text-[14.5px] text-warm leading-relaxed max-w-[440px]">
              {t.footer.newsletterSub}
            </p>
          </div>
          <NewsletterForm />
        </div>

        {/* Main columns */}
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-12 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="w-7 h-7 rounded-full bg-[#1F1F1F]" />
              <span className="font-semibold text-[16px] tracking-tight text-slate">
                Neora<span className="text-clay ml-0.5">AI</span>
              </span>
            </Link>

            <p className="text-[15px] font-medium text-slate leading-snug mb-2">
              {t.footer.tagline}
            </p>
            <p className="text-[13.5px] text-warm leading-[1.6] mb-5 max-w-[280px]">
              {t.footer.description}
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:haapai.team@gmail.com"
                className="inline-flex items-center gap-2 text-[13.5px] text-slate hover:text-clay transition-colors duration-150 w-fit"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                haapai.team@gmail.com
              </a>

              <div className="inline-flex items-center gap-2 text-[12px] text-warm-soft w-fit">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="tracking-[0.12em] uppercase font-medium">{t.footer.statusLabel}</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="text-[11px] font-semibold text-warm-soft tracking-[0.18em] uppercase mb-5">
              {t.footer.productHeading}
            </p>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-warm hover:text-slate transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[11px] font-semibold text-warm-soft tracking-[0.18em] uppercase mb-5">
              {t.footer.companyHeading}
            </p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-warm hover:text-slate transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[11px] font-semibold text-warm-soft tracking-[0.18em] uppercase mb-5">
              {t.footer.legalHeading}
            </p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-warm hover:text-slate transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#E5DECB]">
          <p className="text-[12px] text-warm-soft text-center sm:text-left">
            © {new Date().getFullYear()} Neora AI. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
