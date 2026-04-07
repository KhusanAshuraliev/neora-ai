'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

type State = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const inputClass = [
  'w-full h-12 px-4 rounded-xl text-sm text-[#1a1830] placeholder-[#9ca3af]',
  'bg-[rgba(124,58,237,0.05)] border border-[rgba(0,0,0,0.08)]',
  'hover:border-[rgba(0,0,0,0.14)] focus:border-[rgba(124,58,237,0.5)]',
  'focus:ring-2 focus:ring-[rgba(124,58,237,0.2)] outline-none transition-all duration-200',
  'disabled:opacity-50',
].join(' ')

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
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
      setErrorMsg('Please fill in your name, email, and message.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email.trim())) {
      setState('error')
      setErrorMsg('Please enter a valid email address.')
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
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setState('error')
      setErrorMsg('Network error. Please check your connection.')
    }
  }

  return (
    <SectionWrapper
      id="contact"
      className="bg-gradient-to-b from-[#ffffff] to-[#f8f7ff]"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 60%, rgba(34,211,238,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-2xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="flex justify-center mb-5"
          >
            <SectionLabel>Get in Touch</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#1a1830] leading-[1.1] mb-4"
          >
            Have a{' '}
            <span className="bg-gradient-to-r from-[#22d3ee] to-[#a855f7] bg-clip-text text-transparent">
              question?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#5b5880] text-base leading-relaxed"
          >
            We&apos;d love to hear from you. Send us a message and we&apos;ll
            get back to you as soon as possible.
          </motion.p>
        </div>

        {/* Form / Success */}
        <AnimatePresence mode="wait">
          {state === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-12 flex flex-col items-center gap-5 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#22d3ee] to-[#7c3aed] flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-display text-2xl font-semibold text-[#1a1830]">
                Message received.
              </p>
              <p className="text-[#5b5880]">
                Thank you for reaching out. We&apos;ll get back to you shortly at your email.
              </p>
              <button
                onClick={() => setState('idle')}
                className="mt-2 text-sm text-[#a855f7] hover:text-[#1a1830] transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-8 md:p-10 flex flex-col gap-5"
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[#5b5880] text-xs font-medium tracking-wide uppercase">
                    Full Name <span className="text-[#a855f7]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    disabled={state === 'loading'}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#5b5880] text-xs font-medium tracking-wide uppercase">
                    Email <span className="text-[#a855f7]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    disabled={state === 'loading'}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-[#5b5880] text-xs font-medium tracking-wide uppercase">
                  Phone{' '}
                  <span className="text-[#9ca3af] normal-case tracking-normal">
                    (optional)
                  </span>
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  disabled={state === 'loading'}
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[#5b5880] text-xs font-medium tracking-wide uppercase">
                  Message <span className="text-[#a855f7]">*</span>
                </label>
                <textarea
                  placeholder="Tell us what's on your mind..."
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  disabled={state === 'loading'}
                  rows={5}
                  className={[
                    inputClass,
                    'h-auto resize-none py-3 leading-relaxed',
                  ].join(' ')}
                />
              </div>

              {/* Error */}
              <AnimatePresence>
                {state === 'error' && errorMsg && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-sm"
                  >
                    {errorMsg}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Submit */}
              <button
                type="submit"
                disabled={state === 'loading'}
                className={[
                  'w-full h-13 py-3.5 rounded-full text-base font-medium text-white mt-1',
                  'bg-gradient-to-r from-[#7c3aed] to-[#a855f7]',
                  'hover:from-[#6d28d9] hover:to-[#9333ea]',
                  'shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:shadow-[0_0_40px_rgba(124,58,237,0.55)]',
                  'transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
                  'flex items-center justify-center gap-2',
                ].join(' ')}
              >
                {state === 'loading' ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-[#9ca3af] text-xs text-center">
                We typically respond within 24 hours.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  )
}
