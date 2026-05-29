'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '@/lib/LanguageProvider'

type State = 'idle' | 'loading' | 'success' | 'error'

export default function NewsletterForm() {
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

      if (res.status === 201) {
        setState('success')
        setMessage(t.footer.newsletterSuccess)
        setEmail('')
      } else if (res.status === 409) {
        setState('success')
        setMessage(t.footer.newsletterAlready)
      } else {
        setState('error')
        setMessage(t.footer.newsletterError)
      }
    } catch {
      setState('error')
      setMessage(t.footer.newsletterError)
    }
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <AnimatePresence mode="wait">
        {state === 'success' ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2.5 text-[14px] text-slate"
          >
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1F1F1F] flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            {message}
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col sm:flex-row items-stretch gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (state === 'error') setState('idle')
              }}
              placeholder={t.footer.newsletterPlaceholder}
              required
              disabled={state === 'loading'}
              className={`flex-1 h-9 px-4 rounded-full text-[13px] text-slate placeholder-warm-soft bg-white border outline-none transition-all duration-200 focus:border-[#CC785C] focus:ring-2 focus:ring-[#CC785C]/15 disabled:opacity-50 ${
                state === 'error' ? 'border-red-400' : 'border-[#D4CCB8]'
              }`}
            />
            <button
              type="submit"
              disabled={state === 'loading' || !email.trim()}
              className="h-9 px-4 rounded-full text-[12.5px] font-medium btn-dark disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-1.5 min-w-[100px]"
            >
              {state === 'loading' ? (
                <>
                  <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {t.footer.newsletterSubmitting}
                </>
              ) : (
                t.footer.newsletterCta
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {state === 'error' && message && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-500 text-[12px]"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
