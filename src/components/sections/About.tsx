'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { useTranslation } from '@/lib/LanguageProvider'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="section-light border-t border-[#E5DECB]">
      <div className="max-w-[1100px] mx-auto px-6 py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-start">
          <div>
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionLabel light>{t.about.label}</SectionLabel>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.08 }}
              className="font-semibold tracking-[-0.035em] text-[40px] md:text-[56px] leading-[1.08] text-slate mb-6 text-balance"
            >
              {t.about.headlinePre}{' '}
              <span className="text-clay">{t.about.headlineAccent}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.14 }}
              className="text-[17px] text-warm leading-[1.75]"
            >
              {t.about.story}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-[14px] text-warm-soft"
            >
              {t.about.team}
            </motion.p>
          </div>

          <div className="flex flex-col gap-4">
            {t.about.founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="card-cream card-cream-hover rounded-2xl p-6 md:p-7"
              >
                <div className="flex items-start gap-5">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#1F1F1F] text-white flex items-center justify-center font-semibold text-[18px]">
                      {f.initials}
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#FBFAF6]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                      <h3 className="font-semibold text-[17px] text-slate tracking-tight">{f.name}</h3>
                      <span className="text-[12px] text-clay">·</span>
                      <span className="text-[13px] text-warm">{f.role}</span>
                    </div>
                    {f.location && (
                      <p className="text-[11.5px] text-warm-soft mb-3 tracking-[0.06em]">{f.location}</p>
                    )}
                    <p className="font-semibold tracking-[-0.035em] text-[15px] text-slate leading-[1.65] italic">
                      “{f.bio}”
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
