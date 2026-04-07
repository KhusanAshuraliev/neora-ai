import Link from 'next/link'

const navLinks = [
  { label: 'The Story', href: '#problem' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Technology', href: '#technology' },
  { label: 'Vision', href: '#vision' },
  { label: 'Waitlist', href: '#waitlist' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(0,0,0,0.04)] bg-[#f8f7ff]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="font-display font-bold text-xl tracking-[0.12em] text-[#1a1830]">
                NEORA
              </span>
              <span className="text-[10px] font-medium text-[#a855f7] tracking-widest mt-0.5">
                AI
              </span>
            </div>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-6">
              Your mind. Beyond time.
            </p>
            <a
              href="mailto:haapai.team@gmail.com"
              className="text-[#5b5880] hover:text-[#a855f7] text-sm transition-colors duration-200"
            >
              haapai.team@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[#9ca3af] text-xs font-medium tracking-[0.12em] uppercase mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#5b5880] hover:text-[#1a1830] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[#9ca3af] text-xs font-medium tracking-[0.12em] uppercase mb-5">
              Legal
            </p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#5b5880] hover:text-[#1a1830] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-[rgba(124,58,237,0.05)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#9ca3af] text-xs">
            © {new Date().getFullYear()} Neora AI. All rights reserved.
          </p>
          <p className="text-[#9ca3af] text-xs">
            Created by{' '}
            <a
              href="mailto:haapai.team@gmail.com"
              className="text-[#5b5880] hover:text-[#a855f7] transition-colors"
            >
              Neora AI Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
