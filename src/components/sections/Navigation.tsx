'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/LanguageProvider'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'

export default function Navigation() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { label: t.nav.story, href: '#problem' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.tryIt, href: '#demo' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'nav-cream' : 'bg-transparent'
      )}
    >
      <nav className="max-w-[1240px] mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div
            className={cn(
              'w-7 h-7 rounded-full transition-colors duration-300 group-hover:scale-110 transition-transform',
              scrolled ? 'bg-[#1F1F1F]' : 'bg-white'
            )}
          />
          <span
            className={cn(
              'font-semibold text-[15px] tracking-tight transition-colors duration-300',
              scrolled ? 'text-slate' : 'text-white'
            )}
          >
            Neora<span className="text-clay ml-0.5">AI</span>
          </span>
        </Link>

        <div
          className={cn(
            'hidden lg:flex items-center gap-0.5 rounded-full px-1.5 py-1.5 transition-all duration-300 border',
            scrolled
              ? 'bg-white/50 border-[#E5DECB]'
              : 'bg-black/30 border-white/10'
          )}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'px-3.5 py-1.5 text-[12.5px] rounded-full transition-all duration-200',
                scrolled
                  ? 'text-warm hover:text-slate hover:bg-[#1F1F1F]/[0.04]'
                  : 'text-white/70 hover:text-white hover:bg-white/[0.08]'
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <LanguageSwitcher dark={!scrolled} />
          <Link
            href="#waitlist"
            className={cn(
              'inline-flex items-center gap-1.5 text-[12.5px] font-medium px-4 py-2 rounded-full transition-all duration-200',
              scrolled
                ? 'bg-[#1F1F1F] text-white hover:bg-black'
                : 'bg-white text-[#1F1F1F] hover:bg-white/90'
            )}
          >
            {t.nav.joinWaitlist}
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <button
          className={cn('md:hidden p-2 transition-colors', scrolled ? 'text-slate' : 'text-white')}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={cn('block h-px bg-current transition-all duration-300', open ? 'rotate-45 translate-y-2' : '')} />
            <span className={cn('block h-px bg-current transition-all duration-300', open ? 'opacity-0' : '')} />
            <span className={cn('block h-px bg-current transition-all duration-300', open ? '-rotate-45 -translate-y-2' : '')} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              'md:hidden px-6 py-5 flex flex-col gap-3 border-t',
              scrolled ? 'nav-cream border-[#E5DECB]' : 'nav-glass border-white/[0.06]'
            )}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn('text-[16px] py-1.5 transition-colors', scrolled ? 'text-slate/80 hover:text-slate' : 'text-white/80 hover:text-white')}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <LanguageSwitcher dark={!scrolled} />
              <Link
                href="#waitlist"
                onClick={() => setOpen(false)}
                className={cn(
                  'flex-1 text-center text-sm font-medium px-5 py-2.5 rounded-full transition-colors',
                  scrolled ? 'bg-[#1F1F1F] text-white' : 'bg-white text-[#1F1F1F]'
                )}
              >
                {t.nav.joinWaitlist}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
