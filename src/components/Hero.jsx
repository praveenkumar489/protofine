import React, { useState, useEffect } from 'react'
import { ArrowRight, Users, Clock, Calendar, Activity, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  const [queueCount, setQueueCount] = useState(17)
  const [isLive, setIsLive] = useState(true)

  // Purposeful motion: subtle simulation pulse every 4 seconds to emphasize real-time visibility
  useEffect(() => {
    const interval = setInterval(() => {
      setQueueCount((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1
        const next = prev + delta
        return next < 12 ? 14 : next > 22 ? 18 : next
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="grid-2">
          
          {/* Left Column: Text & Pitch Hook */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span className="badge badge-amber">
                <Activity size={12} className="animate-pulse-glow" />
                Visibility First
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Smart Crowd Timing Layer
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em'
            }}>
              Don't wait in line to find out <span className="gradient-text">how long you'll wait.</span>
            </h1>

            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              maxWidth: '540px'
            }}>
              QueueLess helps people decide when to visit busy places by showing current wait times and quieter windows.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#product-demo" className="btn-primary">
                See how it works
                <ArrowRight size={18} />
              </a>

              <a href="#problem" className="btn-secondary">
                Why uncertainty hurts
              </a>
            </div>
          </div>

          {/* Right Column: Animated Queue Card */}
          <div className="glow-box animate-float">
            <div className="glass-panel" style={{ padding: '2rem', position: 'relative' }}>
              
              {/* Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Live Queue Telemetry
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginTop: '0.2rem' }}>
                    College Administration Office
                  </h3>
                </div>
                <div className="badge badge-emerald">
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#10b981',
                    boxShadow: '0 0 8px #10b981'
                  }}></span>
                  Live Monitor
                </div>
              </div>

              {/* Main Queue Metric Card */}
              <div style={{
                background: 'rgba(9, 13, 22, 0.6)',
                borderRadius: '0.85rem',
                padding: '1.5rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                {/* Metric 1 */}
                <div style={{ borderRight: '1px solid var(--border-color)', paddingRight: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                    <Users size={16} color="#818cf8" />
                    <span>Current Queue</span>
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>
                    {queueCount}
                    <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)', marginLeft: '0.4rem' }}>people</span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div style={{ paddingLeft: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                    <Clock size={16} color="#f59e0b" />
                    <span>Est. Wait Time</span>
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f59e0b', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>
                    ~{Math.round(queueCount * 1.4)}
                    <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)', marginLeft: '0.4rem' }}>min</span>
                  </div>
                </div>
              </div>

              {/* Quieter Window Recommendation */}
              <div style={{
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '0.75rem',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Calendar size={18} color="#34d399" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block' }}>Optimal Departure Window</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#34d399' }}>3:30 – 4:00 PM</span>
                  </div>
                </div>
                <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                  ~8 min wait
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
