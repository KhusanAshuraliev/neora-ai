'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'

const visions = [
  'Your great-grandchildren asking you for advice.',
  'Your philosophy shared in your own voice.',
  'Your love letters read across centuries.',
  'Your laughter heard by those who never met you.',
]

export default function FutureVision() {
  return (
    <section
      id="vision"
      className="relative w-full py-36 md:py-48 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #f8f7ff 0%, #ffffff 40%, #f0eefe 60%, #ffffff 80%, #f8f7ff 100%)',
      }}
    >
      {/* Large glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-8"
        >
          <SectionLabel>The Future</SectionLabel>
        </motion.div>

        {/* Big "Imagine" */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-[rgba(0,0,0,0.06)] tracking-tight mb-16 select-none"
        >
          Imagine...
        </motion.h2>

        {/* Vision lines */}
        <div className="flex flex-col gap-6 mb-20">
          {visions.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: 'easeOut' }}
              className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1a1830] leading-snug"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1 }}
          className="mb-14"
        >
          <p className="font-display text-xl md:text-2xl text-[#5b5880] leading-relaxed max-w-2xl mx-auto">
            This isn&apos;t science fiction. It&apos;s the direction we&apos;re building toward,
            one conversation at a time.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            href="#waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium text-white bg-gradient-to-r from-[#7c3aed] to-[#a855f7] hover:from-[#6d28d9] hover:to-[#9333ea] shadow-[0_0_40px_rgba(124,58,237,0.4)] hover:shadow-[0_0_60px_rgba(124,58,237,0.6)] transition-all duration-200"
          >
            Begin Your Legacy
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
