'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { useTranslation } from '@/lib/LanguageProvider'

export default function Bento() {
  const { t } = useTranslation()
  const c = t.bento.cards

  return (
    <section id="bento" className="relative">
      <div className="divider-glow" />
      <div className="max-w-[1160px] mx-auto px-6 py-28 md:py-40">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>{t.bento.label}</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-semibold text-[40px] md:text-[60px] tracking-[-0.035em] leading-[1.05] text-white mb-6 text-balance"
          >
            {t.bento.headlinePre}{' '}
            <span className="grad-text">{t.bento.headlineAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="text-[17px] text-white/55 leading-[1.65] text-balance"
          >
            {t.bento.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[260px] md:auto-rows-[280px]">
          {/* Big — Living model */}
          <Card
            i={0}
            className="md:col-span-4 md:row-span-2"
            title={c.living.title}
            desc={c.living.desc}
            visual={<LivingVisual />}
          />

          {/* Voice */}
          <Card
            i={1}
            className="md:col-span-2"
            title={c.voice.title}
            desc={c.voice.desc}
            visual={<VoiceVisual />}
          />

          {/* Memory */}
          <Card
            i={2}
            className="md:col-span-2"
            title={c.memory.title}
            desc={c.memory.desc}
            visual={<MemoryVisual />}
          />

          {/* Privacy */}
          <Card
            i={3}
            className="md:col-span-2"
            title={c.privacy.title}
            desc={c.privacy.desc}
            visual={<PrivacyVisual />}
          />

          {/* Controls */}
          <Card
            i={4}
            className="md:col-span-2"
            title={c.controls.title}
            desc={c.controls.desc}
            visual={<ControlsVisual />}
          />

          {/* Always */}
          <Card
            i={5}
            className="md:col-span-2"
            title={c.always.title}
            desc={c.always.desc}
            visual={<AlwaysVisual />}
          />
        </div>
      </div>
    </section>
  )
}

function Card({
  i,
  className,
  title,
  desc,
  visual,
}: {
  i: number
  className?: string
  title: string
  desc: string
  visual?: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.07 }}
      className={`glass glass-hover rounded-3xl p-6 md:p-7 relative overflow-hidden flex flex-col ${className ?? ''}`}
    >
      <div className="relative flex-1 min-h-0 -mx-2 -mt-2 overflow-hidden pointer-events-none">
        {visual}
      </div>
      <div className="relative pt-5 shrink-0">
        <h3 className="font-semibold text-[18px] md:text-[20px] text-white mb-1.5 tracking-tight">
          {title}
        </h3>
        <p className="text-[13.5px] text-white/55 leading-[1.55]">{desc}</p>
      </div>
    </motion.div>
  )
}

function LivingVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="absolute w-[420px] h-[420px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 65%)' }}
      />
      <svg viewBox="0 0 400 400" className="relative w-full h-full max-w-[440px] opacity-90">
        <defs>
          <radialGradient id="ringFade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <circle
            key={i}
            cx="200"
            cy="200"
            r={40 + i * 24}
            fill="none"
            stroke="url(#ringFade)"
            strokeWidth="0.6"
            opacity={0.7 - i * 0.1}
          >
            <animate
              attributeName="r"
              values={`${40 + i * 24};${44 + i * 24};${40 + i * 24}`}
              dur={`${4 + i * 0.5}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
        <circle cx="200" cy="200" r="14" fill="#d946ef">
          <animate attributeName="r" values="14;18;14" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="200" r="6" fill="#ffffff" />
      </svg>
    </div>
  )
}

function VoiceVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pt-2">
      <svg viewBox="0 0 240 100" className="w-full max-w-[280px] opacity-80">
        {[...Array(30)].map((_, i) => {
          const h = 8 + Math.abs(Math.sin(i * 0.7)) * 50 + (i % 3) * 6
          return (
            <rect
              key={i}
              x={i * 8 + 6}
              y={50 - h / 2}
              width="3"
              height={h}
              rx="1.5"
              fill={i % 5 === 0 ? '#d946ef' : '#a78bfa'}
              opacity={0.4 + (i % 7) * 0.08}
            >
              <animate
                attributeName="height"
                values={`${h};${h * 0.4};${h}`}
                dur={`${1.5 + (i % 4) * 0.3}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values={`${50 - h / 2};${50 - h * 0.2};${50 - h / 2}`}
                dur={`${1.5 + (i % 4) * 0.3}s`}
                repeatCount="indefinite"
              />
            </rect>
          )
        })}
      </svg>
    </div>
  )
}

function MemoryVisual() {
  const nodes = [
    [50, 50],
    [90, 30],
    [120, 70],
    [80, 90],
    [40, 90],
    [150, 40],
    [170, 75],
  ]
  return (
    <div className="absolute inset-0 flex items-center justify-center pt-2">
      <svg viewBox="0 0 220 130" className="w-full max-w-[260px] opacity-90">
        {nodes.flatMap((from, i) =>
          nodes.slice(i + 1).map((to, j) => {
            const dx = to[0] - from[0]
            const dy = to[1] - from[1]
            const d = Math.sqrt(dx * dx + dy * dy)
            if (d > 70) return null
            return (
              <line
                key={`${i}-${j}`}
                x1={from[0]}
                y1={from[1]}
                x2={to[0]}
                y2={to[1]}
                stroke="#a78bfa"
                strokeOpacity="0.3"
                strokeWidth="0.7"
              />
            )
          })
        )}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 2 ? 5 : 3} fill={i === 2 ? '#d946ef' : '#a78bfa'}>
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur={`${2 + i * 0.3}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  )
}

function PrivacyVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pt-2">
      <div className="relative w-16 h-20">
        <div
          className="absolute inset-0 rounded-xl border border-white/20"
          style={{
            background:
              'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(217,70,239,0.1))',
          }}
        />
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-6 border-2 border-white/40 rounded-t-full border-b-0" />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white/80" />
        <div className="absolute -inset-4 rounded-full bg-violet-500/20 blur-2xl" />
      </div>
    </div>
  )
}

function ControlsVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-3 pt-2">
      {[true, false, true, true].map((on, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div
            className={`w-9 h-5 rounded-full p-0.5 flex ${
              on ? 'bg-violet-500/60 justify-end' : 'bg-white/10 justify-start'
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-white" />
          </div>
          <span className="text-[9px] text-white/40 tracking-wider uppercase">
            {['Family', 'Public', 'Voice', 'Memory'][i]}
          </span>
        </div>
      ))}
    </div>
  )
}

function AlwaysVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pt-2">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-2xl scale-150" />
        <div className="relative w-16 h-16 rounded-full border-2 border-white/15 flex items-center justify-center">
          <div className="absolute inset-2 rounded-full border border-white/10" />
          <span className="text-white font-semibold text-[15px] tracking-tight">24/7</span>
          <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </div>
      </div>
    </div>
  )
}
