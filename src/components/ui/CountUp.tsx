'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  value: string
  duration?: number
  className?: string
}

function parseNumeric(v: string): { num: number; prefix: string; suffix: string } | null {
  const match = v.match(/^(\D*?)([\d.,\s]+)(.*)$/)
  if (!match) return null
  const raw = match[2].replace(/[\s,]/g, '')
  const num = parseFloat(raw)
  if (isNaN(num)) return null
  return { num, prefix: match[1] ?? '', suffix: match[3] ?? '' }
}

function format(n: number, withSpaces: boolean) {
  const rounded = Math.round(n)
  if (!withSpaces) return String(rounded)
  return rounded.toLocaleString('en-US').replace(/,/g, ' ')
}

export default function CountUp({ value, duration = 1600, className }: Props) {
  const parsed = parseNumeric(value)
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(parsed ? '0' : value)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!parsed || !ref.current) return
    const el = ref.current
    const withSpaces = /[\s,]/.test(value) || parsed.num >= 1000

    const start = () => {
      if (startedRef.current) return
      startedRef.current = true
      const t0 = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        setDisplay(format(parsed.num * eased, withSpaces))
        if (p < 1) requestAnimationFrame(tick)
        else setDisplay(format(parsed.num, withSpaces))
      }
      requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) start()
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [parsed, value, duration])

  if (!parsed) return <span className={className}>{value}</span>

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  )
}
