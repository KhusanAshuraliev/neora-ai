'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { useTranslation } from '@/lib/LanguageProvider'

export default function Testimonials() {
  const { t } = useTranslation()
  const items = t.testimonials.items
  const doubled = [...items, ...items]

  return (
    <section id="testimonials" className="section-light border-t border-[#E5DECB] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 pt-28 pb-10 md:pt-40 md:pb-16">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <SectionLabel light>{t.testimonials.label}</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }}
            className="font-semibold tracking-[-0.035em] text-[44px] md:text-[64px] leading-[1.05] text-slate mb-6 text-balance"
          >
            {t.testimonials.headlinePre}{' '}
            <span className="text-clay">{t.testimonials.headlineAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }}
            className="text-[17px] text-warm leading-[1.7] text-balance"
          >
            {t.testimonials.subtitle}
          </motion.p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F0EEE6] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F0EEE6] to-transparent z-10" />

        <div className="marquee-track flex gap-5 py-2">
          {doubled.map((item, i) => (
            <article key={i} className="flex-shrink-0 w-[340px] md:w-[400px] card-cream rounded-2xl p-7 flex flex-col gap-5">
              <svg className="w-6 h-6 text-clay opacity-70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.17 6A5.001 5.001 0 002 11v7h7v-7H6c0-1.66 1.34-3 3-3V6H7.17zm10 0A5.001 5.001 0 0012 11v7h7v-7h-3c0-1.66 1.34-3 3-3V6h-1.83z" />
              </svg>
              <p className="font-semibold tracking-[-0.035em] text-[16px] text-slate leading-[1.65] flex-1 italic">
                “{item.quote}”
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-[#E5DECB]">
                <div className="w-9 h-9 rounded-full bg-[#1F1F1F] text-white flex items-center justify-center text-[11px] font-semibold">
                  {item.initials}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-slate leading-tight">{item.author}</p>
                  <p className="text-[11.5px] text-warm-soft leading-tight mt-0.5">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          width: max-content;
          animation: marquee 60s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="pb-20 md:pb-32" />
    </section>
  )
}
