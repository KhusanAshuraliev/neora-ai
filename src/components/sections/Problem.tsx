'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

const facts = [
  { number: '150,000', label: 'people leave this world every day', desc: 'Taking with them everything they knew, felt, and believed.' },
  { number: '100%', label: 'of lived wisdom disappears', desc: 'Their experience of life — unrepeatable and irreplaceable — is gone.' },
  { number: '0', label: 'second chances to hear them again', desc: 'No way to ask one more question. No way to feel their presence.' },
]

export default function Problem() {
  return (
    <section id="problem" className="section-gray">
      <div className="max-w-[980px] mx-auto px-5 py-24 md:py-32">

        {/* Top — centered text block, Apple product-page style */}
        <div className="text-center max-w-[640px] mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionLabel>The Reality</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display font-bold text-[40px] md:text-[56px] tracking-[-0.025em] leading-[1.08] text-[#1d1d1f] mb-5"
          >
            Every mind is{' '}
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
              irreplaceable.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.14 }}
            className="text-[17px] text-[#6e6e73] leading-[1.6]"
          >
            Every person carries a universe within them — decades of experiences,
            a unique way of seeing the world, stories that belong to no one else.
            When they&apos;re gone, that universe disappears with them.
          </motion.p>
        </div>

        {/* Stats — clean Apple-style cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#d2d2d7] rounded-2xl overflow-hidden">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-8 md:p-10"
            >
              <p className="font-display font-bold text-[48px] md:text-[56px] tracking-[-0.03em] leading-none mb-3 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
                {fact.number}
              </p>
              <p className="text-[15px] font-semibold text-[#1d1d1f] mb-2">{fact.label}</p>
              <p className="text-[14px] text-[#6e6e73] leading-[1.55]">{fact.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <p className="font-display text-[28px] md:text-[36px] font-semibold tracking-[-0.02em] text-[#1d1d1f] leading-snug mb-4">
            &ldquo;Their laughter. Their wisdom. Their way of seeing the world.&rdquo;
          </p>
          <p className="text-[17px] text-[#6e6e73]">
            Reduced to a fading memory. We decided to change that.
          </p>
        </motion.blockquote>
      </div>
    </section>
  )
}
