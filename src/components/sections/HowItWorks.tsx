'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Start the Conversation',
    description:
      'Talk to Neora naturally. Share your thoughts, opinions, stories, and memories. Every conversation trains your personal model.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Build Your Archive',
    description:
      'Upload meaningful content — voice notes, letters, old messages, photographs, videos. The artifacts of your life become your foundation.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'AI Learns You',
    description:
      'Our system builds a deep model of your personality, communication style, emotional patterns, and way of thinking. Not just what you say — how you say it.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Your Legacy Lives On',
    description:
      'Your digital twin is ready — thoughtful, warm, and uniquely you. The people you love can talk to it, ask questions, and feel your presence.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-gray">
      <div className="max-w-[980px] mx-auto px-5 py-24 md:py-32">

        <div className="text-center max-w-[640px] mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionLabel>The Process</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display font-bold text-[40px] md:text-[56px] tracking-[-0.025em] leading-[1.08] text-[#1d1d1f]"
          >
            Four steps to{' '}
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
              forever.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#d2d2d7] rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-8 md:p-10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-[48px] font-bold text-[#d2d2d7] leading-none">
                  {step.number}
                </span>
                <div className="w-11 h-11 rounded-2xl bg-[#f5f5f7] flex items-center justify-center text-[#7c3aed]">
                  {step.icon}
                </div>
              </div>
              <h3 className="font-display text-[19px] font-semibold text-[#1d1d1f] mb-2">
                {step.title}
              </h3>
              <p className="text-[15px] text-[#6e6e73] leading-[1.55]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
