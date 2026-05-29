'use client'

import { useEffect, useState } from 'react'

export default function BackgroundAurora() {
  // Animated blurred blobs are extremely expensive on mobile GPUs.
  // Detect mobile / low-power devices and serve a static gradient instead.
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const ok =
      window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setAnimated(ok)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none gpu-layer">
      <div className="absolute inset-0 bg-gradient-to-br from-[#05050d] via-[#0a0717] to-[#06060f]" />

      {animated ? (
        <>
          <div
            className="absolute top-[8%] left-[8%] w-[560px] h-[560px] rounded-full blur-[100px] opacity-20 gpu-layer"
            style={{
              background: 'radial-gradient(circle, #CC785C 0%, transparent 70%)',
              animation: 'aurora 18s ease-in-out infinite',
            }}
          />
          <div
            className="absolute top-[35%] right-[5%] w-[480px] h-[480px] rounded-full blur-[100px] opacity-15 gpu-layer"
            style={{
              background: 'radial-gradient(circle, #F2D4BE 0%, transparent 70%)',
              animation: 'aurora 22s ease-in-out infinite reverse',
            }}
          />
          <div
            className="absolute bottom-[8%] left-[28%] w-[660px] h-[660px] rounded-full blur-[110px] opacity-18 gpu-layer"
            style={{
              background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)',
              animation: 'aurora 25s ease-in-out infinite',
            }}
          />

          <div className="absolute inset-0 grid-bg opacity-40" />
        </>
      ) : (
        // Mobile: static, GPU-friendly gradient. No blur filters, no animations.
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(204,120,92,0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 70% 70%, rgba(242,212,190,0.10), transparent 65%)',
          }}
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,13,0.65) 100%)',
        }}
      />
    </div>
  )
}
