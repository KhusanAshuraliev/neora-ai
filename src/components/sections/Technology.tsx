'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

const pillars = [
  {
    title: 'Language Intelligence',
    description:
      'Large language models fine-tuned on your personal communication patterns. We learn not just what you say — but how you think and how you express ideas.',
  },
  {
    title: 'Memory Architecture',
    description:
      'A dynamic knowledge graph that stores your experiences, beliefs, and relationships with full contextual awareness. Your stories stay connected.',
  },
  {
    title: 'Identity Synthesis',
    description:
      'Continuous learning systems that integrate new conversations over time, refining and deepening your digital presence with every interaction.',
  },
  {
    title: 'Privacy First',
    description:
      'End-to-end encryption on all personal data. You control exactly who can interact with your twin and what they can access. Always.',
  },
]

export default function Technology() {
  return (
    <section id="technology" className="section-white">
      <div className="max-w-[980px] mx-auto px-5 py-24 md:py-32">

        <div className="text-center max-w-[640px] mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionLabel>The Technology</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display font-bold text-[40px] md:text-[56px] tracking-[-0.025em] leading-[1.08] text-[#1d1d1f] mb-5"
          >
            Built on the frontier of{' '}
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
              AI.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.14 }}
            className="text-[17px] text-[#6e6e73] leading-[1.6]"
          >
            We combine the most advanced AI systems available to build something
            that has never existed before — a genuine digital extension of a human identity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#d2d2d7] rounded-2xl overflow-hidden">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#f5f5f7] p-8 md:p-10"
            >
              <h3 className="font-display text-[19px] font-semibold text-[#1d1d1f] mb-3">
                {pillar.title}
              </h3>
              <p className="text-[15px] text-[#6e6e73] leading-[1.55]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 text-center text-[12px] text-[#86868b] max-w-xl mx-auto leading-relaxed"
        >
          Neora AI is currently in active development. Technology descriptions represent our vision
          and ongoing research. We are committed to transparency and responsible AI development.
        </motion.p>
      </div>
    </section>
  )
}
