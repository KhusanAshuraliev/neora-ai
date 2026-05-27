'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { useTranslation } from '@/lib/LanguageProvider'

type State = 'idle' | 'loading' | 'success' | 'error' | 'duplicate'

export default function Waitlist() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [state, setState] = useState<State>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      setState('error')
      setMessage(t.waitlist.errorInvalid)
      return
    }

    setState('loading')
    setMessage('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = await res.json()

      if (res.status === 201) {
        setState('success')
        setMessage(data.message || t.waitlist.successDefault)
        setEmail('')
      } else if (res.status === 409) {
        setState('duplicate')
        setMessage(data.error || t.waitlist.duplicateDefault)
      } else {
        setState('error')
        setMessage(data.error || t.waitlist.errorGeneric)
      }
    } catch {
      setState('error')
      setMessage(t.waitlist.errorNetwork)
    }
  }

  const isSuccess = state === 'success' || state === 'duplicate'

  return (
    <section id="waitlist" className="section-light">
      <div className="max-w-[1100px] mx-auto px-6 py-28 md:py-40">
        <div className="max-w-[600px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex justify-center mb-5"
          >
            <SectionLabel light>{t.waitlist.label}</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.08 }}
            className="font-semibold tracking-[-0.035em] text-[44px] md:text-[64px] leading-[1.05] text-slate mb-6 text-balance"
          >
            {t.waitlist.headlinePre}{' '}
            <span className="text-clay">{t.waitlist.headlineAccent}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.14 }}
            className="text-[17px] text-warm leading-[1.7] mb-10"
          >
            {t.waitlist.subtitle}
          </motion.p>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                className="card-cream rounded-2xl p-10 flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#1F1F1F] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-semibold tracking-[-0.035em] text-[24px] text-slate">
                  {state === 'duplicate' ? t.waitlist.duplicateTitle : t.waitlist.successTitle}
                </p>
                <p className="text-[14.5px] text-warm">{message}</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (state === 'error') setState('idle')
                  }}
                  placeholder={t.waitlist.emailPlaceholder}
                  required
                  disabled={state === 'loading'}
                  className={[
                    'flex-1 h-12 px-5 rounded-full text-[15px] text-slate placeholder-warm-soft',
                    'bg-white border border-[#D4CCB8] outline-none transition-all duration-200',
                    'focus:border-[#CC785C] focus:ring-2 focus:ring-[#CC785C]/15',
                    state === 'error' ? 'border-red-400' : '',
                    'disabled:opacity-50',
                  ].join(' ')}
                />
                <button
                  type="submit"
                  disabled={state === 'loading' || !email.trim()}
                  className="h-12 px-6 rounded-full text-[14.5px] font-medium btn-dark disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2 min-w-[140px]"
                >
                  {state === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t.waitlist.submitting}
                    </>
                  ) : (
                    t.waitlist.submit
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {state === 'error' && message && (
              <motion.p
                initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="mt-3 text-red-500 text-[13px] text-center"
              >
                {message}
              </motion.p>
            )}
          </AnimatePresence>

          {!isSuccess && (
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="mt-5 text-[12px] text-warm-soft"
            >
              {t.waitlist.footnote}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}
