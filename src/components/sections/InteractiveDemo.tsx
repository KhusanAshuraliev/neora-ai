'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { useTranslation } from '@/lib/LanguageProvider'

type Step = 'idle' | 'thinking' | 'result'

function hashIndex(seed: string, modulo: number) {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  return h % modulo
}

function pickThemes(seed: string, options: readonly string[], count: number) {
  const out: string[] = []
  let s = seed
  while (out.length < count) {
    const idx = hashIndex(s, options.length)
    if (!out.includes(options[idx])) out.push(options[idx])
    s = s + ':' + out.length
  }
  return out
}

function summarize(text: string, max = 110) {
  const trimmed = text.trim().replace(/\s+/g, ' ')
  if (trimmed.length <= max) return trimmed
  const cut = trimmed.slice(0, max)
  const lastSpace = cut.lastIndexOf(' ')
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut) + '…'
}

export default function InteractiveDemo() {
  const { t } = useTranslation()
  const [text, setText] = useState('')
  const [step, setStep] = useState<Step>('idle')
  const [snapshot, setSnapshot] = useState<{
    tone: string
    themes: string[]
    memory: string
  } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (trimmed.length < 4) return
    setStep('thinking')
    setTimeout(() => {
      const tone = t.demo.analyzing.toneOptions[hashIndex(trimmed, t.demo.analyzing.toneOptions.length)]
      const themes = pickThemes(trimmed, t.demo.analyzing.themeOptions, 3)
      const memory = summarize(trimmed)
      setSnapshot({ tone, themes, memory })
      setStep('result')
    }, 1600)
  }

  const reset = () => {
    setStep('idle')
    setSnapshot(null)
    setText('')
  }

  return (
    <section id="demo" className="relative">
      <div className="divider-glow" />
      <div className="max-w-[1100px] mx-auto px-6 py-28 md:py-40">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>{t.demo.label}</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-semibold text-[40px] md:text-[60px] tracking-[-0.035em] leading-[1.05] text-white mb-6 text-balance"
          >
            {t.demo.headlinePre}{' '}
            <span className="grad-text">{t.demo.headlineAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="text-[17px] text-white/55 leading-[1.65] text-balance"
          >
            {t.demo.subtitle}
          </motion.p>
        </div>

        <div className="relative max-w-[760px] mx-auto">
          <div
            className="absolute -inset-10 rounded-[40px] opacity-40 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.5), transparent 70%)' }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative glass-strong rounded-3xl p-6 md:p-8"
          >
            <form onSubmit={handleSubmit}>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={t.demo.placeholder}
                rows={4}
                disabled={step === 'thinking'}
                className="w-full px-5 py-4 rounded-2xl text-[15px] text-white placeholder-white/30 bg-white/[0.03] border border-white/[0.08] outline-none transition-all focus:bg-white/[0.06] focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20 resize-none leading-[1.55] disabled:opacity-60"
              />

              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-[12px] text-white/35">{text.length}/500</span>
                <button
                  type="submit"
                  disabled={step === 'thinking' || text.trim().length < 4}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-medium text-white grad-fill glow-soft hover:scale-[1.02] transition-transform disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {step === 'thinking' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t.demo.thinking}
                    </>
                  ) : (
                    <>
                      {t.demo.cta}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>

            <AnimatePresence>
              {snapshot && step === 'result' && (
                <motion.div
                  initial={{ opacity: 0, y: 16, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <div className="mt-7 pt-7 border-t border-white/[0.08]">
                    <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-violet-300/80 mb-5">
                      {t.demo.resultLabel}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                      <div className="glass rounded-2xl p-4">
                        <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-white/40 mb-1.5">
                          {t.demo.analyzing.tone}
                        </p>
                        <p className="text-[18px] font-semibold text-white capitalize">{snapshot.tone}</p>
                      </div>
                      <div className="glass rounded-2xl p-4">
                        <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-white/40 mb-1.5">
                          {t.demo.analyzing.themes}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {snapshot.themes.map((th) => (
                            <span
                              key={th}
                              className="text-[12px] px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-200 border border-violet-400/30"
                            >
                              {th}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="glass rounded-2xl p-4">
                      <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-white/40 mb-1.5">
                        {t.demo.analyzing.memory}
                      </p>
                      <p className="text-[14px] text-white/85 leading-[1.55] italic">“{snapshot.memory}”</p>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <p className="text-[11.5px] text-white/40 max-w-[440px] leading-[1.5]">
                        <span className="text-white/55 font-medium">{t.demo.noteLabel}: </span>
                        {t.demo.note}
                      </p>
                      <button
                        onClick={reset}
                        className="shrink-0 text-[13px] text-violet-300 hover:text-violet-200 transition-colors"
                      >
                        {t.demo.reset}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
