'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import { useTranslation } from '@/lib/LanguageProvider'

export default function FutureVision() {
  const { t } = useTranslation()

  return (
    <section id="vision" className="relative overflow-hidden">
      <div className="divider-glow" />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 60%)' }}
      />

      <div className="relative max-w-[1100px] mx-auto px-6 py-32 md:py-44 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10"
        >
          <SectionLabel>{t.futureVision.label}</SectionLabel>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="font-semibold text-[72px] md:text-[120px] lg:text-[160px] tracking-[-0.05em] leading-none select-none mb-16"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(167,139,250,0.08) 70%, transparent 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {t.futureVision.title}
        </motion.h2>

        <div className="flex flex-col gap-7 mb-20 max-w-[820px] mx-auto">
          {t.futureVision.visions.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: 'easeOut' }}
              className="font-semibold text-[24px] md:text-[34px] text-white tracking-[-0.025em] leading-[1.3] text-balance"
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[16px] text-white/55 leading-[1.65] max-w-[560px] mx-auto mb-12"
        >
          {t.futureVision.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Link
            href="#waitlist"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-medium text-white grad-fill glow-violet hover:scale-[1.03] transition-transform duration-200"
          >
            {t.futureVision.cta}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
