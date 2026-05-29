import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Neora AI — Preserve who you are. Forever.'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#05050d',
          display: 'flex',
          flexDirection: 'column',
          padding: '72px 80px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Warm radial glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: '-280px',
            right: '-280px',
            width: '900px',
            height: '900px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(204,120,92,0.45) 0%, transparent 65%)',
          }}
        />
        {/* Soft secondary glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-200px',
            left: '-200px',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(242,212,190,0.22) 0%, transparent 65%)',
          }}
        />

        {/* Top: brand mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #F2D4BE 0%, #CC785C 100%)',
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: '28px',
              fontWeight: 600,
              color: 'white',
              letterSpacing: '-0.01em',
            }}
          >
            Neora<span style={{ color: '#CC785C', marginLeft: '4px' }}>AI</span>
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            fontSize: '108px',
            fontWeight: 700,
            letterSpacing: '-0.045em',
            lineHeight: 1.02,
            zIndex: 1,
          }}
        >
          <div style={{ display: 'flex' }}>Preserve who</div>
          <div
            style={{
              display: 'flex',
              backgroundImage:
                'linear-gradient(135deg, #FFFFFF 0%, #F2D4BE 50%, #CC785C 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            you are. Forever.
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            color: 'rgba(255,255,255,0.55)',
            fontSize: '32px',
            marginTop: '36px',
            fontWeight: 300,
            letterSpacing: '0.01em',
            zIndex: 1,
          }}
        >
          Your mind. Beyond time.
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '24px',
              letterSpacing: '0.04em',
            }}
          >
            neora.page
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#34d399',
              }}
            />
            <div
              style={{
                display: 'flex',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '20px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Launching soon
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
