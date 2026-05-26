'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from '@/lib/LanguageProvider'

export default function FinalCta() {
  const { t } = useTranslation()

  return (
    <section id="final-cta" className="relative overflow-hidden">
      <div className="divider-glow" />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(167,139,250,0.3) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at bottom, rgba(217,70,239,0.25) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-6 py-32 md:py-48 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[11px] font-semibold tracking-[0.22em] uppercase text-violet-300/80 mb-10"
        >
          {t.finalCta.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-semibold text-[64px] sm:text-[88px] md:text-[120px] lg:text-[140px] tracking-[-0.05em] leading-[0.92] text-white mb-10 text-balance"
        >
          {t.finalCta.lineA}
          <br />
          <span className="text-white/70">{t.finalCta.lineB}</span>
          <br />
          <span className="grad-text">{t.finalCta.lineC}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[20px] md:text-[24px] text-white/70 font-light mb-12"
        >
          {t.finalCta.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link
            href="#waitlist"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-medium text-white grad-fill glow-violet hover:scale-[1.03] transition-transform duration-200"
          >
            {t.finalCta.cta}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
