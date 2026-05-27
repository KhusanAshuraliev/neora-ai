'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { useTranslation } from '@/lib/LanguageProvider'

type State = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const fieldClass = [
  'w-full px-4 rounded-xl text-[14.5px] text-slate placeholder-warm-soft',
  'bg-[#F0EEE6] border border-[#D4CCB8] outline-none transition-all duration-200',
  'focus:bg-white focus:border-[#CC785C] focus:ring-2 focus:ring-[#CC785C]/15',
  'disabled:opacity-50',
].join(' ')

const labelClass = 'text-[11px] font-semibold text-warm tracking-[0.12em] uppercase'

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', message: '' })
  const [state, setState] = useState<State>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (state === 'error') setState('idle')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setState('error')
      setErrorMsg(t.contact.errorRequired)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email.trim())) {
      setState('error')
      setErrorMsg(t.contact.errorInvalidEmail)
      return
    }

    setState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok) {
        setState('success')
        setForm({ name: '', email: '', phone: '', message: '' })
      } else {
        setState('error')
        setErrorMsg(data.error || t.contact.errorGeneric)
      }
    } catch {
      setState('error')
      setErrorMsg(t.contact.errorNetwork)
    }
  }

  return (
    <section id="contact" className="section-light border-t border-[#E5DECB]">
      <div className="max-w-[1100px] mx-auto px-6 py-28 md:py-40">
        <div className="max-w-[640px] mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="flex justify-center mb-5"
            >
              <SectionLabel light>{t.contact.label}</SectionLabel>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.08 }}
              className="font-semibold tracking-[-0.035em] text-[40px] md:text-[56px] leading-[1.05] text-slate mb-5 text-balance"
            >
              {t.contact.headlinePre}{' '}
              <span className="text-clay">{t.contact.headlineAccent}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.14 }}
              className="text-[17px] text-warm leading-[1.7]"
            >
              {t.contact.subtitle}
            </motion.p>
          </div>

          <AnimatePresence mode="wait">
            {state === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                className="card-cream rounded-2xl p-12 flex flex-col items-center gap-4 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#1F1F1F] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-semibold tracking-[-0.035em] text-[24px] text-slate">{t.contact.successTitle}</p>
                <p className="text-[14.5px] text-warm">{t.contact.successBody}</p>
                <button onClick={() => setState('idle')} className="mt-2 text-[13.5px] text-clay hover:text-[#B86B53] transition-colors">
                  {t.contact.sendAnother}
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                className="card-cream rounded-2xl p-7 md:p-9 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>
                      {t.contact.nameLabel} <span className="text-clay">*</span>
                    </label>
                    <input type="text" placeholder={t.contact.namePlaceholder} value={form.name} onChange={(e) => update('name', e.target.value)} disabled={state === 'loading'} className={fieldClass + ' h-11'} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>
                      {t.contact.emailLabel} <span className="text-clay">*</span>
                    </label>
                    <input type="email" placeholder={t.contact.emailPlaceholder} value={form.email} onChange={(e) => update('email', e.target.value)} disabled={state === 'loading'} className={fieldClass + ' h-11'} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className={labelClass}>
                    {t.contact.phoneLabel}{' '}
                    <span className="text-warm-soft normal-case tracking-normal font-normal">{t.contact.phoneOptional}</span>
                  </label>
                  <input type="tel" placeholder={t.contact.phonePlaceholder} value={form.phone} onChange={(e) => update('phone', e.target.value)} disabled={state === 'loading'} className={fieldClass + ' h-11'} />
                </div>

                <div className="flex flex-col gap-2">
                  <label className={labelClass}>
                    {t.contact.messageLabel} <span className="text-clay">*</span>
                  </label>
                  <textarea placeholder={t.contact.messagePlaceholder} value={form.message} onChange={(e) => update('message', e.target.value)} disabled={state === 'loading'} rows={5} className={fieldClass + ' py-3 resize-none leading-relaxed'} />
                </div>

                <AnimatePresence>
                  {state === 'error' && errorMsg && (
                    <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-500 text-[13px]">
                      {errorMsg}
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="w-full h-12 rounded-full text-[14.5px] font-medium btn-dark disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
                >
                  {state === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      {t.contact.send}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-[12px] text-warm-soft text-center">{t.contact.responseTime}</p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
