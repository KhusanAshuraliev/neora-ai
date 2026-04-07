'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

type State = 'idle' | 'loading' | 'success' | 'error' | 'duplicate'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<State>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      setState('error')
      setMessage('Please enter a valid email address.')
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
        setMessage(data.message || "You're on the list.")
        setEmail('')
      } else if (res.status === 409) {
        setState('duplicate')
        setMessage(data.error || "You're already on the list!")
      } else {
        setState('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setState('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  const isSuccess = state === 'success' || state === 'duplicate'

  return (
    <section id="waitlist" className="section-gray">
      <div className="max-w-[980px] mx-auto px-5 py-24 md:py-32">
        <div className="max-w-[560px] mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex justify-center mb-5"
          >
            <SectionLabel>Early Access</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display font-bold text-[40px] md:text-[56px] tracking-[-0.025em] leading-[1.08] text-[#1d1d1f] mb-5"
          >
            Be among{' '}
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
              the first.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.14 }}
            className="text-[17px] text-[#6e6e73] leading-[1.6] mb-10"
          >
            Neora AI is coming soon. Join the waitlist and we&apos;ll reach out
            when your place is ready.
          </motion.p>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-10 flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-display text-[22px] font-semibold text-[#1d1d1f]">
                  {state === 'duplicate' ? "You're already in!" : "You're on the list."}
                </p>
                <p className="text-[15px] text-[#6e6e73]">{message}</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (state === 'error') setState('idle')
                  }}
                  placeholder="your@email.com"
                  required
                  disabled={state === 'loading'}
                  className={[
                    'flex-1 h-12 px-5 rounded-full text-[15px] text-[#1d1d1f] placeholder-[#86868b]',
                    'bg-white border outline-none transition-all duration-150',
                    'focus:ring-2 focus:ring-[#7c3aed]/30 focus:border-[#7c3aed]',
                    state === 'error' ? 'border-red-400' : 'border-[#d2d2d7]',
                    'disabled:opacity-50',
                  ].join(' ')}
                />
                <button
                  type="submit"
                  disabled={state === 'loading' || !email.trim()}
                  className="h-12 px-6 rounded-full text-[15px] font-medium text-white bg-[#7c3aed] hover:bg-[#6d28d9] transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2 min-w-[130px]"
                >
                  {state === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Joining...
                    </>
                  ) : (
                    'Join Waitlist'
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {state === 'error' && message && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 text-red-500 text-[13px] text-center"
              >
                {message}
              </motion.p>
            )}
          </AnimatePresence>

          {!isSuccess && (
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="mt-4 text-[12px] text-[#86868b]"
            >
              No spam. No commitment. Unsubscribe anytime.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}
