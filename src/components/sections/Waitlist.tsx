'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
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
    <SectionWrapper
      id="waitlist"
      className="bg-gradient-to-b from-[#020208] via-[#07070f] to-[#020208]"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-5"
        >
          <SectionLabel>Early Access</SectionLabel>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f0efff] leading-[1.1] mb-5"
        >
          Be among{' '}
          <span className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
            the first.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#8b8ba7] text-lg leading-relaxed mb-12"
        >
          Neora AI is coming soon. Join the waitlist and we&apos;ll reach out
          when your place is ready.
        </motion.p>

        {/* Form */}
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-10 flex flex-col items-center gap-5"
            >
              {/* Checkmark icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.5)]">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-display text-2xl font-semibold text-[#f0efff]">
                {state === 'duplicate' ? "You're already in!" : "You're on the list."}
              </p>
              <p className="text-[#8b8ba7] text-base text-center">{message}</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
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
                    'w-full h-14 px-5 rounded-full text-base text-[#f0efff] placeholder-[#4a4a6a]',
                    'bg-[rgba(255,255,255,0.04)] border transition-all duration-200 outline-none',
                    'focus:ring-2 focus:ring-[rgba(124,58,237,0.5)] focus:border-[rgba(124,58,237,0.5)]',
                    state === 'error'
                      ? 'border-red-500/50'
                      : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.14)]',
                    'disabled:opacity-50',
                  ].join(' ')}
                />
              </div>

              <button
                type="submit"
                disabled={state === 'loading' || !email.trim()}
                className={[
                  'h-14 px-7 rounded-full text-base font-medium text-white whitespace-nowrap',
                  'bg-gradient-to-r from-[#7c3aed] to-[#a855f7]',
                  'hover:from-[#6d28d9] hover:to-[#9333ea]',
                  'shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)]',
                  'transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
                  'flex items-center justify-center gap-2 min-w-[140px]',
                ].join(' ')}
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

        {/* Error message */}
        <AnimatePresence>
          {state === 'error' && message && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-3 text-red-400 text-sm text-center"
            >
              {message}
            </motion.p>
          )}
        </AnimatePresence>

        {!isSuccess && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-5 text-[#4a4a6a] text-xs"
          >
            No spam. No commitment. Unsubscribe anytime.
          </motion.p>
        )}
      </div>
    </SectionWrapper>
  )
}
