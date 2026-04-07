'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

type State = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const fieldClass = [
  'w-full px-4 rounded-xl text-[15px] text-[#1d1d1f] placeholder-[#86868b]',
  'bg-[#f5f5f7] border border-transparent outline-none transition-all duration-150',
  'focus:bg-white focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20',
  'disabled:opacity-50',
].join(' ')

export default function Contact() {
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
    <section id="contact" className="section-white">
      <div className="max-w-[980px] mx-auto px-5 py-24 md:py-32">
        <div className="max-w-[600px] mx-auto">

          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="flex justify-center mb-5"
            >
              <SectionLabel>Get in Touch</SectionLabel>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.08 }}
              className="font-display font-bold text-[40px] md:text-[52px] tracking-[-0.025em] leading-[1.08] text-[#1d1d1f] mb-4"
            >
              Have a question?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.14 }}
              className="text-[17px] text-[#6e6e73] leading-[1.6]"
            >
              We&apos;d love to hear from you. Send us a message and we&apos;ll
              get back to you as soon as possible.
            </motion.p>
          </div>

          <AnimatePresence mode="wait">
            {state === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#f5f5f7] rounded-2xl p-12 flex flex-col items-center gap-4 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-display text-[22px] font-semibold text-[#1d1d1f]">
                  Message received.
                </p>
                <p className="text-[15px] text-[#6e6e73]">
                  Thank you for reaching out. We&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setState('idle')}
                  className="mt-2 text-[14px] text-[#7c3aed] hover:text-[#6d28d9] transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-medium text-[#6e6e73] tracking-wide uppercase">
                      Full Name <span className="text-[#7c3aed]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      disabled={state === 'loading'}
                      className={fieldClass + ' h-11'}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-medium text-[#6e6e73] tracking-wide uppercase">
                      Email <span className="text-[#7c3aed]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      disabled={state === 'loading'}
                      className={fieldClass + ' h-11'}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-[#6e6e73] tracking-wide uppercase">
                    Phone <span className="text-[#86868b] normal-case tracking-normal font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    disabled={state === 'loading'}
                    className={fieldClass + ' h-11'}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-[#6e6e73] tracking-wide uppercase">
                    Message <span className="text-[#7c3aed]">*</span>
                  </label>
                  <textarea
                    placeholder="Tell us what's on your mind..."
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    disabled={state === 'loading'}
                    rows={5}
                    className={fieldClass + ' py-3 resize-none leading-relaxed'}
                  />
                </div>

                <AnimatePresence>
                  {state === 'error' && errorMsg && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-500 text-[13px]"
                    >
                      {errorMsg}
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="w-full h-12 rounded-full text-[15px] font-medium text-white bg-[#7c3aed] hover:bg-[#6d28d9] transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
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
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-[12px] text-[#86868b] text-center">
                  We typically respond within 24 hours.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
