import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: '6px',
        }}
      >
        <div
          style={{
            width: '60%',
            height: '60%',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #F2D4BE 0%, #CC785C 100%)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
