'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { useTranslation } from '@/lib/LanguageProvider'

export default function Problem() {
  const { t } = useTranslation()

  return (
    <section id="problem" className="section-light">
      <div className="max-w-[1100px] mx-auto px-6 py-28 md:py-40">
        <div className="text-center max-w-[680px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <SectionLabel light>{t.problem.label}</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-semibold tracking-[-0.035em] text-[44px] md:text-[64px] leading-[1.05] text-slate mb-6 text-balance"
          >
            {t.problem.headlinePre}{' '}
            <span className="text-clay">{t.problem.headlineAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-[17px] text-warm leading-[1.7] text-balance"
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
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card-cream card-cream-hover rounded-2xl p-8 md:p-9"
            >
              <p className="font-semibold tracking-[-0.035em] text-[56px] md:text-[64px] leading-none mb-5 text-clay">
                {fact.number}
              </p>
              <p className="text-[14px] font-semibold text-slate mb-2">
                {fact.label}
              </p>
              <p className="text-[13.5px] text-warm leading-[1.65]">
                {fact.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-24 text-center max-w-[820px] mx-auto"
        >
          <p className="font-semibold tracking-[-0.035em] text-[28px] md:text-[40px] text-slate leading-[1.3] mb-5 text-balance">
            {t.problem.quote}
          </p>
          <p className="text-[16px] text-warm">{t.problem.quoteSubtitle}</p>
        </motion.blockquote>
      </div>
    </section>
  )
}
