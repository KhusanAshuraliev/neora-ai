'use client'

import { useEffect } from 'react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Native iOS / Android scroll is excellent; Lenis adds latency and main-thread cost on touch.
    // Only initialize on desktop (hover + fine pointer).
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let cleanup: (() => void) | undefined

    // Defer Lenis import to idle so it never blocks first paint
    const load = () => {
      import('lenis').then(({ default: Lenis }) => {
        const lenis = new Lenis({
          duration: 0.65,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
          wheelMultiplier: 1.15,
          touchMultiplier: 2,
          infinite: false,
        })

        let id = requestAnimationFrame(function raf(time: number) {
          lenis.raf(time)
          id = requestAnimationFrame(raf)
        })

        cleanup = () => {
          cancelAnimationFrame(id)
          lenis.destroy()
        }
      })
    }

    if ('requestIdleCallback' in window) {
      ;(window as any).requestIdleCallback(load, { timeout: 1500 })
    } else {
      setTimeout(load, 300)
    }

    return () => cleanup?.()
  }, [])

  return <>{children}</>
}
