import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#05050d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Subtle clay glow */}
        <div
          style={{
            position: 'absolute',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(204,120,92,0.35) 0%, transparent 65%)',
          }}
        />
        <div
          style={{
            width: '92px',
            height: '92px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #F2D4BE 0%, #CC785C 100%)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
