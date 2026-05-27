'use client'

import Link from 'next/link'
import { useTranslation } from '@/lib/LanguageProvider'

export default function Footer() {
  const { t } = useTranslation()

  const navLinks = [
    { label: t.footer.nav.story, href: '#problem' },
    { label: t.footer.nav.howItWorks, href: '#how-it-works' },
    { label: t.footer.nav.technology, href: '#technology' },
    { label: t.footer.nav.vision, href: '#vision' },
    { label: t.footer.nav.waitlist, href: '#waitlist' },
  ]

  const legalLinks = [
    { label: t.footer.legal.privacy, href: '/privacy' },
    { label: t.footer.legal.terms, href: '/terms' },
  ]

  return (
    <footer className="relative section-light border-t border-[#D4CCB8]">
      <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-6 rounded-full bg-[#1F1F1F]" />
              <span className="font-semibold text-[15px] tracking-tight text-slate">
                Neora<span className="text-clay ml-0.5">AI</span>
              </span>
            </div>
            <p className="font-semibold tracking-[-0.035em] text-[16px] text-slate leading-relaxed mb-4 italic">
              {t.footer.tagline}
            </p>
            <a
              href="mailto:haapai.team@gmail.com"
              className="text-[14px] text-warm hover:text-clay transition-colors duration-150"
            >
              haapai.team@gmail.com
            </a>
          </div>

          <div>
            <p className="text-[11px] font-semibold text-warm-soft tracking-[0.18em] uppercase mb-5">
              {t.footer.navHeading}
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[14px] text-warm hover:text-slate transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold text-warm-soft tracking-[0.18em] uppercase mb-5">
              {t.footer.legalHeading}
            </p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[14px] text-warm hover:text-slate transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E5DECB] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-warm-soft">
            © {new Date().getFullYear()} Neora AI. {t.footer.rights}
          </p>
          <p className="text-[12px] text-warm-soft">
            {t.footer.createdBy}{' '}
            <a href="mailto:haapai.team@gmail.com" className="text-warm hover:text-clay transition-colors duration-150">
              {t.footer.teamName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
