'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Prevent SSR — Three.js requires browser APIs
const NeuralOrb = dynamic(() => import('@/components/three/NeuralOrb'), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
})

const words = ['Preserve', 'who', 'you', 'are.', 'Forever.']

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Radial glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.13) 0%, transparent 70%)',
        }}
      />

      {/* 3D Orb — fills the section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <NeuralOrb />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20"
      >
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full border border-[rgba(124,58,237,0.3)] bg-[rgba(124,58,237,0.08)] text-[#a855f7] text-xs font-medium tracking-[0.15em] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse" />
          Digital Identity Platform
        </motion.div>

        {/* Animated headline — words fade in staggered */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.06] mb-7">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.35 + i * 0.11, ease: 'easeOut' }}
              className={
                i === 3 || i === 4
                  ? 'bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent inline-block mr-3 md:mr-4'
                  : 'text-[#f0efff] inline-block mr-3 md:mr-4'
              }
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-[#8b8ba7] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Neora AI creates a living digital twin of your mind — your memories,
          your personality, your voice — so the people you love can always
          reach you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#waitlist"
            className="px-8 py-4 rounded-full text-base font-medium text-white bg-gradient-to-r from-[#7c3aed] to-[#a855f7] hover:from-[#6d28d9] hover:to-[#9333ea] shadow-[0_0_30px_rgba(124,58,237,0.45)] hover:shadow-[0_0_50px_rgba(124,58,237,0.65)] transition-all duration-200"
          >
            Create Your Digital Twin
          </Link>
          <Link
            href="#how-it-works"
            className="px-8 py-4 rounded-full text-base font-medium text-[#8b8ba7] hover:text-[#f0efff] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.18)] transition-all duration-200"
          >
            See How It Works
          </Link>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-10 text-[#4a4a6a] text-sm tracking-widest uppercase font-medium"
        >
          Your mind. Beyond time.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[#4a4a6a] text-[10px] tracking-[0.25em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-[#7c3aed] to-transparent"
        />
      </motion.div>
    </section>
  )
}
