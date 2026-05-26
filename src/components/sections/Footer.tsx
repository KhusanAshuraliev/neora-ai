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
    <footer className="relative border-t border-white/[0.06]">
      <div className="divider-glow" />
      <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-6 rounded-full grad-fill glow-soft" />
              <span className="font-semibold text-[15px] tracking-tight text-white">
                Neora<span className="grad-text-violet ml-0.5">AI</span>
              </span>
            </div>
            <p className="text-[14px] text-white/50 leading-relaxed mb-4">
              {t.footer.tagline}
            </p>
            <a
              href="mailto:haapai.team@gmail.com"
              className="text-[14px] text-white/65 hover:text-violet-300 transition-colors duration-150"
            >
              haapai.team@gmail.com
            </a>
          </div>

          <div>
            <p className="text-[11px] font-semibold text-white/40 tracking-[0.16em] uppercase mb-5">
              {t.footer.navHeading}
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/55 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold text-white/40 tracking-[0.16em] uppercase mb-5">
              {t.footer.legalHeading}
            </p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/55 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/40">
            © {new Date().getFullYear()} Neora AI. {t.footer.rights}
          </p>
          <p className="text-[12px] text-white/40">
            {t.footer.createdBy}{' '}
            <a
              href="mailto:haapai.team@gmail.com"
              className="text-white/55 hover:text-violet-300 transition-colors duration-150"
            >
              {t.footer.teamName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
