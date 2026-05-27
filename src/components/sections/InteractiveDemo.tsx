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
  const [snapshot, setSnapshot] = useState<{ tone: string; themes: string[]; memory: string } | null>(null)

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
    <section id="demo" className="section-light border-t border-[#E5DECB]">
      <div className="max-w-[1100px] mx-auto px-6 py-28 md:py-40">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <SectionLabel light>{t.demo.label}</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }}
            className="font-semibold tracking-[-0.035em] text-[44px] md:text-[64px] leading-[1.05] text-slate mb-6 text-balance"
          >
            {t.demo.headlinePre}{' '}
            <span className="text-clay">{t.demo.headlineAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }}
            className="text-[17px] text-warm leading-[1.7] text-balance"
          >
            {t.demo.subtitle}
          </motion.p>
        </div>

        <div className="relative max-w-[760px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
            className="relative card-cream rounded-2xl p-6 md:p-8"
          >
            <form onSubmit={handleSubmit}>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={t.demo.placeholder}
                rows={4}
                disabled={step === 'thinking'}
                className="w-full px-5 py-4 rounded-xl text-[15px] text-slate placeholder-warm-soft bg-[#F0EEE6] border border-[#E5DECB] outline-none transition-all focus:bg-white focus:border-[#CC785C] focus:ring-2 focus:ring-[#CC785C]/15 resize-none leading-[1.55] disabled:opacity-60"
              />
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-[12px] text-warm-soft">{text.length}/500</span>
                <button
                  type="submit"
                  disabled={step === 'thinking' || text.trim().length < 4}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-medium btn-dark disabled:opacity-40 disabled:cursor-not-allowed"
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
                  initial={{ opacity: 0, y: 16, height: 0 }} animate={{ opacity: 1, y: 0, height: 'auto' }} exit={{ opacity: 0, y: -10, height: 0 }} transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <div className="mt-7 pt-7 border-t border-[#E5DECB]">
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-clay mb-5">
                      {t.demo.resultLabel}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                      <div className="bg-[#F0EEE6] border border-[#E5DECB] rounded-xl p-4">
                        <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-warm-soft mb-1.5">
                          {t.demo.analyzing.tone}
                        </p>
                        <p className="text-[18px] font-semibold text-slate capitalize">{snapshot.tone}</p>
                      </div>
                      <div className="bg-[#F0EEE6] border border-[#E5DECB] rounded-xl p-4">
                        <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-warm-soft mb-1.5">
                          {t.demo.analyzing.themes}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {snapshot.themes.map((th) => (
                            <span key={th} className="text-[12px] px-2 py-0.5 rounded-full bg-[#CC785C]/12 text-clay border border-[#CC785C]/25">
                              {th}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#F0EEE6] border border-[#E5DECB] rounded-xl p-4">
                      <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-warm-soft mb-1.5">
                        {t.demo.analyzing.memory}
                      </p>
                      <p className="text-[14px] text-slate leading-[1.55] italic font-semibold tracking-[-0.035em]">“{snapshot.memory}”</p>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <p className="text-[11.5px] text-warm-soft max-w-[440px] leading-[1.5]">
                        <span className="text-warm font-medium">{t.demo.noteLabel}: </span>
                        {t.demo.note}
                      </p>
                      <button onClick={reset} className="shrink-0 text-[13px] text-clay hover:text-[#B86B53] transition-colors">
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
