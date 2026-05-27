'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import { useTranslation } from '@/lib/LanguageProvider'
import { cn } from '@/lib/utils'

export default function Pricing() {
  const { t } = useTranslation()

  return (
    <section id="pricing" className="section-light border-t border-[#E5DECB]">
      <div className="max-w-[1100px] mx-auto px-6 py-28 md:py-40">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <SectionLabel light>{t.pricing.label}</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }}
            className="font-semibold tracking-[-0.035em] text-[44px] md:text-[64px] leading-[1.05] text-slate mb-6 text-balance"
          >
            {t.pricing.headlinePre}{' '}
            <span className="text-clay">{t.pricing.headlineAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }}
            className="text-[17px] text-warm leading-[1.7] text-balance"
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
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className={cn(
                  'relative rounded-2xl p-7 md:p-8 flex flex-col gap-6 transition-all duration-300',
                  highlighted
                    ? 'bg-[#1F1F1F] text-white shadow-2xl scale-[1.02]'
                    : 'card-cream card-cream-hover'
                )}
              >
                {highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#CC785C] text-[10px] font-semibold tracking-[0.14em] uppercase text-white shadow-lg">
                    {t.pricing.comingSoon}
                  </div>
                )}

                <div>
                  <h3 className={cn('font-semibold text-[20px] tracking-tight', highlighted ? 'text-white' : 'text-slate')}>
                    {tier.name}
                  </h3>
                  <p className={cn('text-[13px] mt-1', highlighted ? 'text-white/55' : 'text-warm')}>
                    {tier.tagline}
                  </p>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className={cn('font-semibold tracking-[-0.035em] text-[52px] leading-none', highlighted ? 'text-[#E8B5A0]' : 'text-slate')}>
                    {tier.price}
                  </span>
                  {tier.price !== '$0' && (
                    <span className={cn('text-[13px]', highlighted ? 'text-white/45' : 'text-warm-soft')}>
                      {t.pricing.perMonth}
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-2.5 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className={cn('flex items-start gap-2.5 text-[13.5px]', highlighted ? 'text-white/85' : 'text-warm')}>
                      <svg className={cn('w-4 h-4 mt-0.5 flex-shrink-0', highlighted ? 'text-[#E8B5A0]' : 'text-clay')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
                      ? 'bg-white text-[#1F1F1F] hover:scale-[1.02]'
                      : 'btn-dark'
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
