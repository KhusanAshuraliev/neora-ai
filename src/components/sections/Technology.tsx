'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

const pillars = [
  {
    title: 'Language Intelligence',
    description:
      'Large language models fine-tuned on your personal communication patterns. We learn not just what you say — but how you think and how you express ideas.',
    gradient: 'from-[#7c3aed] to-[#a855f7]',
    delay: 0,
  },
  {
    title: 'Memory Architecture',
    description:
      'A dynamic knowledge graph that stores your experiences, beliefs, and relationships with full contextual awareness. Your stories stay connected.',
    gradient: 'from-[#a855f7] to-[#22d3ee]',
    delay: 0.12,
  },
  {
    title: 'Identity Synthesis',
    description:
      'Continuous learning systems that integrate new conversations over time, refining and deepening your digital presence with every interaction.',
    gradient: 'from-[#22d3ee] to-[#7c3aed]',
    delay: 0.24,
  },
  {
    title: 'Privacy First',
    description:
      'End-to-end encryption on all personal data. You control exactly who can interact with your twin and what they can access. Always.',
    gradient: 'from-[#7c3aed] to-[#22d3ee]',
    delay: 0.36,
  },
]

export default function Technology() {
  return (
    <SectionWrapper
      id="technology"
      className="bg-gradient-to-b from-[#ffffff] to-[#f8f7ff]"
    >
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>The Technology</SectionLabel>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a1830] leading-[1.1] mb-5"
        >
          Built on the frontier{' '}
          <span className="bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">
            of AI
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#5b5880] text-lg max-w-2xl mx-auto leading-relaxed"
        >
          We combine the most advanced AI systems available to build something
          that has never existed before — a genuine digital extension of a human
          identity.
        </motion.p>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {pillars.map((pillar) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: pillar.delay, ease: 'easeOut' }}
            className="group relative glass-card rounded-3xl p-8 overflow-hidden hover:border-[rgba(124,58,237,0.2)] transition-all duration-300"
          >
            {/* Gradient top bar */}
            <div
              className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${pillar.gradient} opacity-60`}
            />

            {/* Faint gradient bg on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
            />

            <h3 className="font-display text-xl font-semibold text-[#1a1830] mb-4 relative">
              {pillar.title}
            </h3>
            <p className="text-[#5b5880] text-base leading-relaxed relative">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Disclaimer */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-12 text-center text-[#9ca3af] text-xs tracking-wide max-w-2xl mx-auto leading-relaxed"
      >
        Neora AI is currently in active development. Technology descriptions
        represent our vision and ongoing research. We are committed to
        transparency and responsible AI development.
      </motion.p>
    </SectionWrapper>
  )
}
