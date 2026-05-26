'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { useTranslation } from '@/lib/LanguageProvider'

export default function Solution() {
  const { t } = useTranslation()

  return (
    <section id="solution" className="relative">
      <div className="divider-glow" />
      <div className="max-w-[1100px] mx-auto px-6 py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-16 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>{t.solution.label}</SectionLabel>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="font-semibold text-[40px] md:text-[56px] tracking-[-0.035em] leading-[1.05] text-white mb-3 text-balance"
            >
              {t.solution.headlinePre}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.14 }}
              className="font-semibold text-[32px] md:text-[44px] tracking-[-0.03em] leading-tight grad-text mb-8"
            >
              {t.solution.headlineAccent}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="text-[17px] text-white/60 leading-[1.65] mb-10"
            >
              {t.solution.subtitle}
            </motion.p>

            <ul className="flex flex-col gap-3.5">
              {t.solution.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.22 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full grad-fill flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[15px] text-white/85">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
              className="absolute -inset-8 rounded-[40px] opacity-50 blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)' }}
            />

            <div className="relative glass-strong rounded-3xl p-7 md:p-8 overflow-hidden">
              <div className="flex items-center gap-3 mb-7 pb-5 border-b border-white/[0.08]">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full grad-fill flex items-center justify-center text-white text-sm font-bold glow-soft">
                    N
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0a0a18]" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-white">{t.solution.chat.twinName}</p>
                  <p className="text-[11.5px] text-white/45">{t.solution.chat.twinStatus}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex justify-end"
                >
                  <div className="max-w-[78%] grad-fill rounded-2xl rounded-tr-md px-4 py-2.5 glow-soft">
                    <p className="text-[14px] text-white leading-snug">
                      {t.solution.chat.userMessage}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex gap-3"
                >
                  <div className="w-7 h-7 rounded-full grad-fill flex-shrink-0 mt-0.5" />
                  <div className="max-w-[80%] bg-white/[0.06] border border-white/[0.08] rounded-2xl rounded-tl-md px-4 py-2.5">
                    <p className="text-[14px] text-white/90 leading-snug">
                      {t.solution.chat.twinResponse}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4 }}
                  className="flex gap-3"
                >
                  <div className="w-7 h-7" />
                  <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl rounded-tl-md px-4 py-3 inline-flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-300 animate-typing-1" />
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-300 animate-typing-2" />
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-300 animate-typing-3" />
                  </div>
                </motion.div>
              </div>

              <p className="mt-7 text-center text-[11.5px] tracking-[0.1em] uppercase text-white/35">
                {t.solution.chat.caption}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
