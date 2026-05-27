'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { useTranslation } from '@/lib/LanguageProvider'
import { cn } from '@/lib/utils'

export default function FAQ() {
  const { t } = useTranslation()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-light border-t border-[#E5DECB]">
      <div className="max-w-[1100px] mx-auto px-6 py-28 md:py-40">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionLabel light>{t.faq.label}</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.08 }}
            className="font-semibold tracking-[-0.035em] text-[44px] md:text-[64px] leading-[1.05] text-slate mb-6 text-balance"
          >
            {t.faq.headlinePre}{' '}
            <span className="text-clay">{t.faq.headlineAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.14 }}
            className="text-[17px] text-warm leading-[1.7] text-balance"
          >
            {t.faq.subtitle}
          </motion.p>
        </div>

        <div className="max-w-[820px] mx-auto flex flex-col gap-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                className={cn(
                  'card-cream rounded-xl overflow-hidden transition-colors duration-300',
                  isOpen && 'border-[#CC785C]/40'
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[15.5px] md:text-[16.5px] font-medium text-slate">
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      'flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 border',
                      isOpen ? 'rotate-45 bg-[#CC785C] border-[#CC785C] text-white' : 'bg-transparent border-[#D4CCB8] text-slate'
                    )}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[14.5px] text-warm leading-[1.7]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
