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
    <footer className="border-t border-[#d2d2d7] bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-5 py-16 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-0.5 mb-3">
              <span className="font-display font-semibold text-[17px] tracking-tight text-[#1d1d1f]">Neora</span>
              <span className="text-[11px] font-semibold text-[#7c3aed] ml-0.5">AI</span>
            </div>
            <p className="text-[14px] text-[#86868b] leading-relaxed mb-4">
              Your mind. Beyond time.
            </p>
            <a
              href="mailto:haapai.team@gmail.com"
              className="text-[14px] text-[#6e6e73] hover:text-[#7c3aed] transition-colors duration-150"
            >
              haapai.team@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-semibold text-[#86868b] tracking-[0.08em] uppercase mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[11px] font-semibold text-[#86868b] tracking-[0.08em] uppercase mb-5">
              Legal
            </p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#d2d2d7] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#86868b]">
            © {new Date().getFullYear()} Neora AI. All rights reserved.
          </p>
          <p className="text-[12px] text-[#86868b]">
            Created by{' '}
            <a
              href="mailto:haapai.team@gmail.com"
              className="text-[#6e6e73] hover:text-[#7c3aed] transition-colors duration-150"
            >
              Neora AI Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
