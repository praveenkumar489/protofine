import React from 'react'
import { Eye, TrendingUp, CalendarCheck, Check } from 'lucide-react'

export default function Solution() {
  const cards = [
    {
      num: '01',
      action: 'SEE',
      title: 'Current Queue',
      value: '17 people',
      desc: 'Real-time visibility into the exact number of people currently waiting in line.',
      icon: Eye,
      accent: '#6366f1',
      badgeClass: 'badge-indigo'
    },
    {
      num: '02',
      action: 'PREDICT',
      title: 'Estimated Wait',
      value: '24 minutes',
      desc: 'Accurate time estimates based on real service processing rates and historical queue speed.',
      icon: TrendingUp,
      accent: '#06b6d4',
      badgeClass: 'badge-emerald'
    },
    {
      num: '03',
      action: 'PLAN',
      title: 'Best Window',
      value: '3:30 – 4:00 PM',
      desc: 'Intelligent forecasts that highlight quieter upcoming windows so you visit when lines are shortest.',
      icon: CalendarCheck,
      accent: '#f59e0b',
      badgeClass: 'badge-amber'
    }
  ]

  return (
    <section id="how-it-works" className="section-spacing">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
            The Solution
          </span>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
            fontWeight: 800,
            marginBottom: '1rem'
          }}>
            Know before <span className="gradient-text">you go.</span>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
            Three simple layers of clarity that eliminate queue guessing forever.
          </p>
        </div>

        {/* 3 Solution Cards */}
        <div className="grid-3">
          {cards.map((card, idx) => {
            const IconComponent = card.icon
            return (
              <div key={idx} className="glass-panel glow-box" style={{
                padding: '2.25rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: card.accent,
                      opacity: 0.8
                    }}>
                      {card.num}
                    </span>
                    <span className={`badge ${card.badgeClass}`}>
                      {card.action}
                    </span>
                  </div>

                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `${card.accent}15`,
                    border: `1px solid ${card.accent}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <IconComponent size={22} color={card.accent} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                    {card.title}
                  </h3>

                  <div style={{
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    color: card.accent,
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {card.value}
                  </div>

                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {card.desc}
                  </p>
                </div>

                <div style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)'
                }}>
                  <Check size={14} color={card.accent} />
                  <span>Instant live update</span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
