import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'TheGenZ AI Hub — Turning AI Talent and Ideas Into Companies';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#08051E',
          backgroundImage: 'radial-gradient(ellipse at 85% 15%, rgba(21, 0, 176, 0.45) 0%, transparent 60%), radial-gradient(ellipse at 15% 85%, rgba(253, 131, 2, 0.25) 0%, transparent 50%)',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          color: '#FFFFFF',
        }}
      >
        {/* Top bar: Badge & Pillars */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#FFF4E5',
              color: '#DD7000',
              padding: '10px 24px',
              borderRadius: '9999px',
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: '0.08em',
              border: '1.5px solid rgba(253, 131, 2, 0.4)',
            }}
          >
            AFRICAN AI VENTURE-BUILDING PLATFORM
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: '0.1em',
            }}
          >
            <span>LEARN</span>
            <span>•</span>
            <span style={{ color: '#FD8302' }}>BUILD</span>
            <span>•</span>
            <span>CONNECT</span>
          </div>
        </div>

        {/* Center: Main Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '980px' }}>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.15,
              margin: 0,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
            }}
          >
            Turning AI Talent and Ideas{' '}
            <span style={{ color: '#6366F1' }}>Into Companies.</span>
          </h1>
          <p
            style={{
              fontSize: 24,
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.5,
              margin: 0,
              maxWidth: '850px',
            }}
          >
            Bringing together AI talent, real-world African industry problems, and venture resources to launch the next generation of AI-powered companies.
          </p>
        </div>

        {/* Bottom bar: Brand signature & URL */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '28px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1500B0',
                fontSize: 22,
                fontWeight: 900,
              }}
            >
              GZ
            </div>
            <span style={{ fontSize: 24, fontWeight: 800, color: '#FFFFFF' }}>
              TheGenZ AI Hub
            </span>
          </div>

          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#FD8302',
              letterSpacing: '0.04em',
            }}
          >
            thegenz-ai-hub.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
