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
      <div className="max-w-[1200px] mx-auto px-6 py-7 md:py-9">
        {/* Newsletter row — minimal */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 pb-5 mb-5 border-b border-[#E5DECB]">
          <p className="text-[13px] text-warm shrink-0">
            <span className="font-semibold text-slate">{t.footer.newsletterTitle}</span>{' '}
            {t.footer.newsletterSub}
          </p>
          <div className="flex-1 w-full md:max-w-[400px] md:ml-auto">
            <NewsletterForm />
          </div>
        </div>

        {/* Main columns */}
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-6 md:gap-8 mb-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-2.5 group">
              <div className="w-5 h-5 rounded-full bg-[#1F1F1F]" />
              <span className="font-semibold text-[14px] tracking-tight text-slate">
                Neora<span className="text-clay ml-0.5">AI</span>
              </span>
            </Link>

            <p className="text-[13px] font-medium text-slate leading-snug mb-3">
              {t.footer.tagline}
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="mailto:haapai.team@gmail.com"
                className="inline-flex items-center gap-1.5 text-[12.5px] text-slate hover:text-clay transition-colors duration-150"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                haapai.team@gmail.com
              </a>

              <span className="inline-flex items-center gap-1.5 text-[10.5px] text-warm-soft">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="tracking-[0.12em] uppercase font-medium">{t.footer.statusLabel}</span>
              </span>
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="text-[10px] font-semibold text-warm-soft tracking-[0.18em] uppercase mb-3">
              {t.footer.productHeading}
            </p>
            <ul className="flex flex-col gap-1.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-warm hover:text-slate transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-semibold text-warm-soft tracking-[0.18em] uppercase mb-3">
              {t.footer.companyHeading}
            </p>
            <ul className="flex flex-col gap-1.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-warm hover:text-slate transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[10px] font-semibold text-warm-soft tracking-[0.18em] uppercase mb-3">
              {t.footer.legalHeading}
            </p>
            <ul className="flex flex-col gap-1.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-warm hover:text-slate transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-[#E5DECB]">
          <p className="text-[11.5px] text-warm-soft text-center sm:text-left">
            © {new Date().getFullYear()} Neora AI. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
