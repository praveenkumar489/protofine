import React from 'react'
import { Clock, ArrowRight } from 'lucide-react'

export default function Navbar() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(9, 13, 22, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '1.25rem 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 16px rgba(99, 102, 241, 0.4)'
          }}>
            <Clock size={20} color="#ffffff" />
          </div>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.35rem',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em'
          }}>
            QueueLess
          </span>
        </a>

        {/* Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <a href="#how-it-works" style={{
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 500,
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.color = '#ffffff'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
          >
            How it works
          </a>

          <a href="#why-queueless" style={{
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 500,
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.color = '#ffffff'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
          >
            Why QueueLess
          </a>

          <a href="#product-demo" className="btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.88rem' }}>
            See the concept
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </nav>
  )
}
