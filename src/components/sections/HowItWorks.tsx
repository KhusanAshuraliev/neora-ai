'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
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
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' })

  return (
    <SectionWrapper
      id="how-it-works"
      className="bg-gradient-to-b from-[#ffffff] via-[#f0eefe] to-[#ffffff]"
    >
      {/* Heading */}
      <div ref={headingRef} className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>The Process</SectionLabel>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a1830] leading-[1.1]"
        >
          How it{' '}
          <span className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
            works
          </span>
        </motion.h2>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: 'easeOut' }}
            className="group relative glass-card rounded-3xl p-8 hover:border-[rgba(124,58,237,0.25)] transition-all duration-300 hover:bg-[rgba(124,58,237,0.04)]"
          >
            {/* Top row: number + icon */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-display text-5xl font-bold text-[rgba(124,58,237,0.2)] group-hover:text-[rgba(124,58,237,0.35)] transition-colors duration-300">
                {step.number}
              </span>
              <div className="w-12 h-12 rounded-2xl bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.2)] flex items-center justify-center text-[#a855f7] group-hover:bg-[rgba(124,58,237,0.18)] transition-colors duration-300">
                {step.icon}
              </div>
            </div>

            <h3 className="font-display text-xl font-semibold text-[#1a1830] mb-3">
              {step.title}
            </h3>
            <p className="text-[#5b5880] text-base leading-relaxed">
              {step.description}
            </p>

            {/* Bottom connector dot (not on last two items on md+) */}
            {i < 2 && (
              <div className="hidden md:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-[rgba(124,58,237,0.3)] to-transparent" />
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
