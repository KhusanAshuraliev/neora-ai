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
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'nav-blur border-b border-[#d2d2d7]' : 'bg-transparent'
      )}
    >
      <nav className="max-w-[980px] mx-auto px-5 h-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0.5">
          <span className="font-display font-semibold text-[17px] tracking-tight text-[#1d1d1f]">
            Neora
          </span>
          <span className="text-[11px] font-semibold text-[#7c3aed] ml-0.5">AI</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] text-[#1d1d1f] hover:text-[#6e6e73] transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="#waitlist"
            className="text-[12px] font-medium px-4 py-1.5 rounded-full bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition-colors duration-150"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#1d1d1f]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={cn('block h-px bg-current transition-all duration-300', menuOpen ? 'rotate-45 translate-y-2.5' : '')} />
            <span className={cn('block h-px bg-current transition-all duration-300', menuOpen ? 'opacity-0' : '')} />
            <span className={cn('block h-px bg-current transition-all duration-300', menuOpen ? '-rotate-45 -translate-y-2.5' : '')} />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden nav-blur border-t border-[#d2d2d7] px-5 py-5 flex flex-col gap-4"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="text-[17px] text-[#1d1d1f] hover:text-[#6e6e73] py-1">
              {link.label}
            </Link>
          ))}
          <Link href="#waitlist" onClick={() => setMenuOpen(false)}
            className="mt-1 text-center text-sm font-medium px-5 py-2.5 rounded-full bg-[#7c3aed] text-white">
            Join Waitlist
          </Link>
        </motion.div>
      )}
    </motion.header>
  )
}
