'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

const features = [
  'Learns from natural, everyday conversations',
  'Understands your perspective and worldview',
  'Responds in your voice, tone, and style',
  'Grows more like you with every interaction',
  'Private, encrypted, fully under your control',
]

export default function Solution() {
  return (
    <section id="solution" className="section-white">
      <div className="max-w-[980px] mx-auto px-5 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionLabel>The Answer</SectionLabel>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.08 }}
              className="font-display font-bold text-[40px] md:text-[52px] tracking-[-0.025em] leading-[1.08] text-[#1d1d1f] mb-3"
            >
              Neora doesn&apos;t just store your data.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.14 }}
              className="font-display font-bold text-[32px] md:text-[40px] tracking-[-0.02em] leading-tight bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent mb-7"
            >
              It learns you.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.18 }}
              className="text-[17px] text-[#6e6e73] leading-[1.6] mb-8"
            >
              Unlike digital archives or voice recordings, Neora AI creates a living
              model of your mind — a digital twin that doesn&apos;t just replay the past,
              it thinks, responds, and connects in the present.
            </motion.p>

            <ul className="flex flex-col gap-3">
              {features.map((feature, i) => (
                <motion.li key={i}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.22 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <svg className="w-5 h-5 text-[#7c3aed] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[15px] text-[#1d1d1f]">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right — mock chat card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#f5f5f7] rounded-3xl p-8 md:p-10">
              {/* Chat header */}
              <div className="flex items-center gap-3 mb-8 pb-5 border-b border-[#d2d2d7]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center text-white text-sm font-bold">N</div>
                <div>
                  <p className="text-[14px] font-semibold text-[#1d1d1f]">Neora AI</p>
                  <p className="text-[12px] text-[#6e6e73]">Digital Twin · Active</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[11px] text-[#6e6e73]">Online</span>
                </div>
              </div>

              {/* Messages */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-end">
                  <div className="max-w-[75%] bg-[#7c3aed] rounded-2xl rounded-tr-md px-4 py-2.5">
                    <p className="text-[14px] text-white leading-snug">What would grandpa have said about this?</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex-shrink-0 mt-0.5" />
                  <div className="max-w-[80%] bg-white rounded-2xl rounded-tl-md px-4 py-2.5 shadow-sm">
                    <p className="text-[14px] text-[#1d1d1f] leading-snug">
                      Ha — you know me. I&apos;d have said &ldquo;Don&apos;t overthink it, just take the first step. The rest follows.&rdquo; And then probably offered you some tea.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-7 text-center text-[12px] text-[#86868b]">A real conversation. A real presence.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
