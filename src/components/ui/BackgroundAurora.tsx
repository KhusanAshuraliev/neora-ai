'use client'

export default function BackgroundAurora() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none gpu-layer">
      <div className="absolute inset-0 bg-gradient-to-br from-[#05050d] via-[#0a0717] to-[#06060f]" />

      <div
        className="absolute top-[8%] left-[8%] w-[560px] h-[560px] rounded-full blur-[100px] opacity-30 gpu-layer"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          animation: 'aurora 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-[35%] right-[5%] w-[480px] h-[480px] rounded-full blur-[100px] opacity-25 gpu-layer"
        style={{
          background: 'radial-gradient(circle, #d946ef 0%, transparent 70%)',
          animation: 'aurora 22s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute bottom-[8%] left-[28%] w-[660px] h-[660px] rounded-full blur-[110px] opacity-20 gpu-layer"
        style={{
          background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)',
          animation: 'aurora 25s ease-in-out infinite',
        }}
      />

      <div className="absolute inset-0 grid-bg opacity-40" />

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
