import React from 'react'
import { Sparkles, Shield, Compass, Zap } from 'lucide-react'

export default function WhyNow() {
  return (
    <section id="why-queueless" className="section-spacing">
      <div className="container">
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          
          <span className="badge badge-amber" style={{ marginBottom: '1.25rem' }}>
            Why Now
          </span>

          <h2 style={{
            fontSize: 'clamp(2.3rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '1.75rem',
            lineHeight: 1.15,
            letterSpacing: '-0.03em'
          }}>
            Waiting is unavoidable. <br />
            <span style={{ color: '#6366f1' }}>Guessing shouldn't be.</span>
          </h2>

          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            marginBottom: '3rem',
            maxWidth: '720px',
            margin: '0 auto 3rem auto'
          }}>
            Queues exist everywhere. The missing layer is visibility — helping people make a better decision before they spend time travelling and waiting.
          </p>

          {/* Core Principles Grid */}
          <div className="grid-3" style={{ textAlign: 'left' }}>
            
            <div className="glass-panel" style={{ padding: '1.75rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(99, 102, 241, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Compass size={20} color="#818cf8" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                Pre-Trip Decisioning
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Shift queue management upstream—give people information when they still have the power to alter their departure time.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(6, 182, 212, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Zap size={20} color="#06b6d4" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                Natural Load Balancing
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                When users see peak hours vs quiet windows, crowds naturally spread themselves out without aggressive administrative enforcing.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Shield size={20} color="#34d399" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                Frictionless Deployment
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                No complex hardware, app downloads, or expensive infrastructure required. Just a clean, accessible visibility link.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
