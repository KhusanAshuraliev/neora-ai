'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { useTranslation } from '@/lib/LanguageProvider'

export default function Problem() {
  const { t } = useTranslation()

  return (
    <section id="problem" className="relative">
      <div className="divider-glow" />
      <div className="max-w-[1100px] mx-auto px-6 py-28 md:py-40">
        <div className="text-center max-w-[680px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>{t.problem.label}</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-semibold text-[40px] md:text-[60px] tracking-[-0.035em] leading-[1.05] text-white mb-6 text-balance"
          >
            {t.problem.headlinePre}{' '}
            <span className="grad-text">{t.problem.headlineAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="text-[17px] text-white/55 leading-[1.65] text-balance"
          >
            {t.problem.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.problem.facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass glass-hover rounded-3xl p-8 md:p-10 relative overflow-hidden group"
            >
              <div
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)' }}
              />
              <p className="relative font-semibold text-[52px] md:text-[60px] tracking-[-0.04em] leading-none mb-4 grad-text">
                {fact.number}
              </p>
              <p className="relative text-[14px] font-semibold text-white mb-2">
                {fact.label}
              </p>
              <p className="relative text-[13.5px] text-white/50 leading-[1.6]">
                {fact.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 text-center max-w-[820px] mx-auto"
        >
          <p className="font-semibold text-[26px] md:text-[36px] tracking-[-0.025em] text-white leading-[1.25] mb-5 text-balance">
            {t.problem.quote}
          </p>
          <p className="text-[16px] text-white/50">{t.problem.quoteSubtitle}</p>
        </motion.blockquote>
      </div>
    </section>
  )
}
