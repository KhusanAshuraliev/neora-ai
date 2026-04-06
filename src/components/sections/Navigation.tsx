'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const links = [
  { label: 'The Story', href: '#problem' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Technology', href: '#technology' },
  { label: 'Vision', href: '#vision' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass border-b border-[rgba(255,255,255,0.05)]'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-18 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="font-display font-bold text-lg tracking-[0.12em] text-[#f0efff] group-hover:text-white transition-colors">
            NEORA
          </span>
          <span className="text-[10px] font-medium text-[#a855f7] tracking-widest mt-0.5">
            AI
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#8b8ba7] hover:text-[#f0efff] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="#waitlist"
            className={cn(
              'text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200',
              'bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white',
              'hover:shadow-[0_0_25px_rgba(124,58,237,0.5)]',
              'hover:from-[#6d28d9] hover:to-[#9333ea]'
            )}
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-[#8b8ba7] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={cn(
                'block h-px bg-current transition-all duration-300',
                menuOpen ? 'rotate-45 translate-y-2.5' : ''
              )}
            />
            <span
              className={cn(
                'block h-px bg-current transition-all duration-300',
                menuOpen ? 'opacity-0' : ''
              )}
            />
            <span
              className={cn(
                'block h-px bg-current transition-all duration-300',
                menuOpen ? '-rotate-45 -translate-y-2.5' : ''
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden glass border-t border-[rgba(255,255,255,0.05)] px-6 py-6 flex flex-col gap-4"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-[#8b8ba7] hover:text-[#f0efff] transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center text-sm font-medium px-5 py-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white"
          >
            Join Waitlist
          </Link>
        </motion.div>
      )}
    </motion.header>
  )
}
