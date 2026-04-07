'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

const features = [
  'Learns from natural, everyday conversations',
  'Understands your perspective and worldview',
  'Responds in your voice, tone, and style',
  'Grows more like you with every interaction',
  'Private, encrypted, always under your control',
]

export default function Solution() {
  return (
    <SectionWrapper
      id="solution"
      className="bg-gradient-to-b from-[#f8f7ff] to-[#ffffff]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>The Answer</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#1a1830] mb-4"
          >
            Neora doesn&apos;t just
            <br />
            store your data.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent mb-8"
          >
            It learns you.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#5b5880] text-lg leading-relaxed mb-10"
          >
            Unlike digital archives or voice recordings, Neora AI creates a
            living model of your mind. A digital twin that doesn&apos;t just replay
            the past — it thinks, responds, and connects in the present.
          </motion.p>

          {/* Feature list */}
          <ul className="flex flex-col gap-4">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.08 }}
                className="flex items-start gap-3 text-[#5b5880]"
              >
                <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-[rgba(124,58,237,0.2)] border border-[rgba(124,58,237,0.4)] flex items-center justify-center">
                  <svg
                    className="w-2 h-2 text-[#a855f7]"
                    fill="currentColor"
                    viewBox="0 0 8 8"
                  >
                    <path d="M1.5 4L3.5 6L6.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </span>
                <span className="text-base">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right: Visual card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          {/* Glow behind card */}
          <div className="absolute inset-0 bg-gradient-radial from-[rgba(124,58,237,0.2)] to-transparent rounded-3xl blur-3xl" />

          <div className="relative glass-card rounded-3xl p-8 md:p-10">
            {/* Mock chat interface showing Neora in action */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#22d3ee] flex items-center justify-center text-white text-xs font-bold">
                N
              </div>
              <div>
                <p className="text-[#1a1830] text-sm font-medium">Neora AI</p>
                <p className="text-[#9ca3af] text-xs">Digital Twin · Active</p>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="flex flex-col gap-4">
              {/* User message */}
              <div className="flex justify-end">
                <div className="max-w-[75%] bg-[rgba(124,58,237,0.15)] border border-[rgba(124,58,237,0.2)] rounded-2xl rounded-tr-md px-4 py-3">
                  <p className="text-[#1a1830] text-sm">
                    What would grandpa have said about this?
                  </p>
                </div>
              </div>

              {/* AI response */}
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex-shrink-0 mt-1" />
                <div className="max-w-[80%] bg-[rgba(124,58,237,0.05)] border border-[rgba(0,0,0,0.06)] rounded-2xl rounded-tl-md px-4 py-3">
                  <p className="text-[#5b5880] text-sm leading-relaxed">
                    Ha — you know me. I&apos;d have said &quot;Don&apos;t overthink it, just
                    take the first step. The rest follows.&quot; And then probably
                    offered you some tea.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[rgba(0,0,0,0.04)]">
              <p className="text-[#9ca3af] text-xs text-center tracking-wider uppercase">
                A real conversation. A real presence.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
