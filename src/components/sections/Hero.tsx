'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const NeuralOrb = dynamic(() => import('@/components/three/NeuralOrb'), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
})

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section ref={ref} id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle violet radial wash — very restrained like Apple's product pages */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 35%, rgba(124,58,237,0.07) 0%, transparent 65%)' }}
      />

      {/* 3D Orb */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <NeuralOrb />
      </div>

      <motion.div style={{ opacity, y }}
        className="relative z-10 text-center max-w-[820px] mx-auto px-5 pt-24 pb-16"
      >
        {/* Eyebrow — Apple style: just colored text, no pill */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#7c3aed] text-sm font-semibold tracking-wide mb-5"
        >
          Digital Identity Platform
        </motion.p>

        {/* Headline — Apple scale: huge, tight, bold */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-bold text-[56px] sm:text-[72px] md:text-[80px] lg:text-[96px] tracking-[-0.03em] leading-[1.04] text-[#1d1d1f] mb-6"
        >
          Preserve who
          <br />
          <span className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
            you are.
          </span>
          <br />
          Forever.
        </motion.h1>

        {/* Subheadline — Apple: #6e6e73, comfortable size */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-[19px] text-[#6e6e73] leading-[1.6] max-w-[580px] mx-auto mb-10 font-normal"
        >
          Neora AI creates a living digital twin of your mind —
          your memories, personality, and voice — so the people
          you love can always reach you.
        </motion.p>

        {/* CTAs — Apple pattern: primary fill + text link */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#waitlist"
            className="px-7 py-3 rounded-full text-[17px] font-medium text-white bg-[#7c3aed] hover:bg-[#6d28d9] transition-colors duration-150"
          >
            Create Your Digital Twin
          </Link>
          <Link href="#how-it-works"
            className="flex items-center gap-1.5 text-[17px] font-medium text-[#7c3aed] hover:text-[#6d28d9] transition-colors duration-150"
          >
            Learn more
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-[#86868b] text-sm tracking-wide"
        >
          Your mind. Beyond time.
        </motion.p>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-[#d2d2d7] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-[#86868b]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
