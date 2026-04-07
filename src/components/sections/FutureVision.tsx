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
    <section id="vision" className="section-dark">
      <div className="max-w-[980px] mx-auto px-5 py-24 md:py-36 text-center">

        <motion.div
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <SectionLabel light>The Future</SectionLabel>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display font-bold text-[72px] md:text-[96px] lg:text-[120px] tracking-[-0.04em] leading-none text-white/[0.07] select-none mb-16"
        >
          Imagine...
        </motion.h2>

        <div className="flex flex-col gap-7 mb-20">
          {visions.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: 'easeOut' }}
              className="font-display text-[28px] md:text-[36px] font-semibold text-white tracking-[-0.02em] leading-snug"
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-[17px] text-[#86868b] leading-[1.6] max-w-[560px] mx-auto mb-12"
        >
          This isn&apos;t science fiction. It&apos;s the direction we&apos;re building toward,
          one conversation at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Link
            href="#waitlist"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-[17px] font-medium text-white bg-[#7c3aed] hover:bg-[#6d28d9] transition-colors duration-150"
          >
            Begin Your Legacy
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
