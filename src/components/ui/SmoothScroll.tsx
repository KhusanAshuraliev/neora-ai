'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
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

    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
