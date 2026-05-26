'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import { useTranslation } from '@/lib/LanguageProvider'
import { cn } from '@/lib/utils'

export default function Pricing() {
  const { t } = useTranslation()

  return (
    <section id="pricing" className="relative">
      <div className="divider-glow" />
      <div className="max-w-[1100px] mx-auto px-6 py-28 md:py-40">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>{t.pricing.label}</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-semibold text-[40px] md:text-[60px] tracking-[-0.035em] leading-[1.05] text-white mb-6 text-balance"
          >
            {t.pricing.headlinePre}{' '}
            <span className="grad-text">{t.pricing.headlineAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="text-[17px] text-white/55 leading-[1.65] text-balance"
          >
            {t.pricing.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {t.pricing.tiers.map((tier, i) => {
            const highlighted = tier.highlighted
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn(
                  'relative rounded-3xl p-7 md:p-8 flex flex-col gap-6 transition-all duration-300',
                  highlighted
                    ? 'glass-strong glow-violet border-violet-400/40'
                    : 'glass glass-hover'
                )}
              >
                {highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full grad-fill text-[10px] font-semibold tracking-[0.14em] uppercase text-white shadow-lg">
                    {t.pricing.comingSoon}
                  </div>
                )}

                <div>
                  <h3 className="font-semibold text-[20px] text-white tracking-tight">
                    {tier.name}
                  </h3>
                  <p className="text-[13px] text-white/50 mt-1">{tier.tagline}</p>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span
                    className={cn(
                      'font-semibold text-[44px] tracking-[-0.04em] leading-none',
                      highlighted ? 'grad-text' : 'text-white'
                    )}
                  >
                    {tier.price}
                  </span>
                  {tier.price !== '$0' && (
                    <span className="text-[13px] text-white/40">{t.pricing.perMonth}</span>
                  )}
                </div>

                <ul className="flex flex-col gap-2.5 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-white/70">
                      <svg
                        className={cn(
                          'w-4 h-4 mt-0.5 flex-shrink-0',
                          highlighted ? 'text-violet-300' : 'text-white/40'
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#waitlist"
                  className={cn(
                    'mt-2 inline-flex items-center justify-center gap-2 h-11 rounded-full text-[13.5px] font-medium transition-all',
                    highlighted
                      ? 'grad-fill text-white glow-soft hover:scale-[1.02]'
                      : 'glass text-white hover:bg-white/[0.07]'
                  )}
                >
                  {tier.cta}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
