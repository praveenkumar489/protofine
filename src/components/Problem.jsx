import React from 'react'
import { AlertCircle, HelpCircle, ArrowRight, CornerDownRight } from 'lucide-react'

export default function Problem() {
  const steps = [
    { title: 'You arrive', sub: 'Walk in blind', color: '#94a3b8' },
    { title: 'Take a token', sub: '#42 in line', color: '#6366f1' },
    { title: 'Wait...', sub: '10 minutes pass', color: '#f59e0b' },
    { title: 'Wait...', sub: '20 minutes pass', color: '#f97316' },
    { title: 'Wait...', sub: '35 minutes pass', color: '#ef4444' },
    { title: '"How much longer?"', sub: 'Frustration peaks', color: '#f43f5e', highlight: true }
  ]

  return (
    <section id="problem" className="section-spacing" style={{
      background: 'linear-gradient(180deg, rgba(9, 13, 22, 0) 0%, rgba(18, 24, 38, 0.4) 50%, rgba(9, 13, 22, 0) 100%)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-amber" style={{ marginBottom: '1rem' }}>
            The Core Problem
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            lineHeight: 1.2
          }}>
            The queue isn't the problem. <br />
            <span style={{ color: '#f59e0b' }}>The uncertainty is.</span>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
            People often have no idea whether they're walking into a 5-minute wait or a 45-minute one.
          </p>
        </div>

        {/* Visual Flow Pipeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
          alignItems: 'stretch'
        }}>
          {steps.map((step, idx) => (
            <div key={idx} className="glass-panel" style={{
              padding: '1.25rem 1rem',
              textAlign: 'center',
              borderTop: `3px solid ${step.color}`,
              background: step.highlight ? 'rgba(244, 63, 94, 0.1)' : 'var(--bg-card)',
              position: 'relative'
            }}>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-dim)',
                display: 'block',
                marginBottom: '0.4rem',
                fontFamily: 'var(--font-mono)'
              }}>
                STEP 0{idx + 1}
              </span>
              
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: step.highlight ? '#f43f5e' : '#ffffff', marginBottom: '0.2rem' }}>
                {step.title}
              </h4>
              
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {step.sub}
              </span>

              {idx < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  right: '-12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  display: 'none' // Handled dynamically via CSS flex/grid spacing
                }}>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Impact Callout Box */}
        <div className="glass-panel" style={{
          padding: '2rem',
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          background: 'rgba(245, 158, 11, 0.05)',
          border: '1px solid rgba(245, 158, 11, 0.2)'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'rgba(245, 158, 11, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <HelpCircle size={26} color="#f59e0b" />
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.3rem' }}>
              Why guesswork breaks the user experience
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Without upfront wait visibility, people waste travel time, miss subsequent appointments, and feel trapped in queues they would have chosen to avoid or postpone.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
