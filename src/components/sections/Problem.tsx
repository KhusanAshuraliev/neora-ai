'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

const facts = [
  {
    number: '150,000',
    unit: 'people / day',
    description: 'leave this world — and take everything they knew with them.',
  },
  {
    number: '100%',
    unit: 'of lived wisdom',
    description: 'disappears without a way to preserve who they truly were.',
  },
  {
    number: '0',
    unit: 'second chances',
    description: 'exist to hear their voice, their stories, their perspective again.',
  },
]

function AnimatedStat({
  number,
  unit,
  description,
  delay,
}: {
  number: string
  unit: string
  description: string
  delay: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className="glass-card rounded-2xl p-8 flex flex-col gap-3"
    >
      <div>
        <span className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
          {number}
        </span>
        <span className="ml-2 text-[#9ca3af] text-sm font-medium uppercase tracking-wider">
          {unit}
        </span>
      </div>
      <p className="text-[#5b5880] text-base leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper
      id="problem"
      className="bg-gradient-to-b from-[#f8f7ff] via-[#ffffff] to-[#f8f7ff]"
    >
      <div ref={ref} className="max-w-3xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>The Reality</SectionLabel>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#1a1830] mb-6"
        >
          Every mind is{' '}
          <span className="bg-gradient-to-r from-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">
            irreplaceable.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#5b5880] text-lg md:text-xl leading-relaxed"
        >
          Every person carries a universe within them — decades of experiences,
          a unique way of seeing the world, stories that belong to no one else.
          And when they're gone, that universe disappears with them.
        </motion.p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
        {facts.map((fact, i) => (
          <AnimatedStat key={i} {...fact} delay={0.15 * i + 0.3} />
        ))}
      </div>

      {/* Emotional closer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center"
      >
        <p className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a1830] leading-snug">
          "Their laughter. Their wisdom.
          <br />
          <span className="text-[#9ca3af]">Reduced to a fading memory."</span>
        </p>

        {/* Divider line */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[rgba(124,58,237,0.4)]" />
          <span className="text-[#9ca3af] text-sm tracking-widest uppercase">
            We decided to change that
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[rgba(124,58,237,0.4)]" />
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
