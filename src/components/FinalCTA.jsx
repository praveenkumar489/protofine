import React from 'react'
import { ArrowRight, Clock, Sparkles } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="section-spacing" style={{
      position: 'relative',
      overflow: 'hidden',
      paddingBottom: '8rem'
    }}>
      <div className="container">
        
        <div className="glass-panel glow-box" style={{
          padding: '4rem 2rem',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(18, 24, 38, 0.9) 0%, rgba(99, 102, 241, 0.12) 100%)',
          borderRadius: '1.5rem',
          border: '1px solid rgba(99, 102, 241, 0.25)'
        }}>
          
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto',
            boxShadow: '0 0 25px rgba(99, 102, 241, 0.5)'
          }}>
            <Clock size={28} color="#ffffff" />
          </div>

          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            letterSpacing: '-0.03em'
          }}>
            Your time is valuable. <br />
            <span className="gradient-text">Know before you go.</span>
          </h2>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            maxWidth: '580px',
            margin: '0 auto 2.5rem auto'
          }}>
            Bring real-time wait visibility to your campus offices, venues, and service desks today.
          </p>

          <a href="#product-demo" className="btn-primary" style={{
            padding: '1rem 2.25rem',
            fontSize: '1.05rem'
          }}>
            Explore QueueLess
            <ArrowRight size={20} />
          </a>

        </div>

        {/* Footer info */}
        <footer style={{
          marginTop: '5rem',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: 'var(--text-dim)',
          borderTop: '1px solid var(--border-color)',
          paddingTop: '2rem'
        }}>
          <p>© 2026 QueueLess. All rights reserved.</p>
        </footer>

      </div>
    </section>
  )
}
