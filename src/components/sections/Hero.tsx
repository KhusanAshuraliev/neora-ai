'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useTranslation } from '@/lib/LanguageProvider'
import CountUp from '@/components/ui/CountUp'

const NeuralOrb = dynamic(() => import('@/components/three/NeuralOrb'), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
})

export default function Hero() {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-12"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <NeuralOrb />
      </div>

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(139,92,246,0.28) 0%, transparent 60%)',
        }}
      />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center max-w-[940px] mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/[0.12] mb-8 mt-8"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          <span className="text-[10.5px] tracking-[0.18em] uppercase text-white/70">
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-semibold text-[56px] sm:text-[80px] md:text-[104px] lg:text-[120px] tracking-[-0.045em] leading-[0.95] text-white mb-8 text-balance"
        >
          {t.hero.headlinePre}
          <br />
          <span className="grad-text">{t.hero.headlineAccent}</span>{' '}
          <span className="text-white/95">{t.hero.headlinePost}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[17px] md:text-[19px] text-white/60 leading-[1.55] max-w-[600px] mx-auto mb-12 font-light text-balance"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="#waitlist"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14.5px] font-medium text-white grad-fill glow-violet hover:scale-[1.03] transition-transform duration-200"
          >
            {t.hero.ctaPrimary}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="#how-it-works"
            className="px-6 py-3.5 rounded-full text-[14.5px] font-medium text-white/85 bg-black/45 border border-white/[0.14] hover:text-white hover:bg-black/60 transition-all duration-200"
          >
            {t.hero.ctaSecondary}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-20 flex items-center justify-center gap-10 md:gap-20"
        >
          {t.hero.stats.map((s, i) => (
            <div key={s.l} className="text-center relative">
              {i > 0 && (
                <span className="absolute -left-5 md:-left-10 top-1/2 -translate-y-1/2 h-8 w-px bg-white/10" />
              )}
              <CountUp value={s.n} className="font-semibold text-[24px] md:text-[28px] text-white tracking-tight block" />
              <p className="text-[10px] tracking-[0.14em] uppercase text-white/40 mt-1.5">
                {s.l}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-0.5 h-1.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
