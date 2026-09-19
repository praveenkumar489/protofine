import React, { useState } from 'react'
import { Clock, Users, Calendar, Sparkles, Check, Bell, RefreshCw, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'

export default function ProductDemo() {
  const locations = [
    {
      id: 'admin',
      name: 'College Administration Office',
      building: 'Main Campus Building A, Floor 2',
      queue: 17,
      wait: 24,
      status: 'Moderate Wait',
      windows: [
        { time: '3:30 PM', load: 35, bars: '███', label: 'Quiet', color: '#10b981' },
        { time: '4:00 PM', load: 20, bars: '██', label: 'Best Window', color: '#10b981' },
        { time: '4:30 PM', load: 85, bars: '█████', label: 'Peak Hour', color: '#f43f5e' }
      ]
    },
    {
      id: 'health',
      name: 'Student Health Center',
      building: 'West Wing Annex, Suite 104',
      queue: 9,
      wait: 12,
      status: 'Light Wait',
      windows: [
        { time: '2:00 PM', load: 40, bars: '████', label: 'Moderate', color: '#f59e0b' },
        { time: '2:30 PM', load: 15, bars: '██', label: 'Best Window', color: '#10b981' },
        { time: '3:00 PM', load: 60, bars: '██████', label: 'Busy', color: '#f59e0b' }
      ]
    },
    {
      id: 'registrar',
      name: 'Registrar & Financial Aid',
      building: 'Student Services Hall, Room 102',
      queue: 28,
      wait: 42,
      status: 'High Volume',
      windows: [
        { time: '4:00 PM', load: 90, bars: '████████', label: 'Heavy Line', color: '#f43f5e' },
        { time: '4:30 PM', load: 25, bars: '███', label: 'Best Window', color: '#10b981' },
        { time: '5:00 PM', load: 30, bars: '████', label: 'Quiet', color: '#10b981' }
      ]
    }
  ]

  const [selectedLocId, setSelectedLocId] = useState('admin')
  const [planned, setPlanned] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const activeLoc = locations.find(l => l.id === selectedLocId)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 600)
  }

  const handlePlanVisit = () => {
    setPlanned(true)
    setTimeout(() => setPlanned(false), 5000)
  }

  return (
    <section id="product-demo" className="section-spacing" style={{
      background: 'linear-gradient(180deg, rgba(18, 24, 38, 0.6) 0%, rgba(9, 13, 22, 1) 100%)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span className="badge badge-indigo" style={{ marginBottom: '1rem' }}>
            Interactive Product Demonstration
          </span>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
            fontWeight: 800,
            marginBottom: '1rem'
          }}>
            Experience <span className="gradient-text">QueueLess in Action</span>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
            This is the exact interface users check before stepping out the door.
          </p>
        </div>

        {/* Location Switcher Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '2.5rem',
          flexWrap: 'wrap'
        }}>
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => { setSelectedLocId(loc.id); setPlanned(false); }}
              style={{
                background: selectedLocId === loc.id ? 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' : 'rgba(255, 255, 255, 0.05)',
                color: selectedLocId === loc.id ? '#ffffff' : 'var(--text-muted)',
                border: selectedLocId === loc.id ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid var(--border-color)',
                padding: '0.6rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <MapPin size={14} color={selectedLocId === loc.id ? '#ffffff' : '#94a3b8'} />
              {loc.name}
            </button>
          ))}
        </div>

        {/* Main Product Card Container */}
        <div style={{ maxWidth: '480px', margin: '0 auto' }}>
          <div className="glass-panel glow-box" style={{
            padding: '2rem',
            background: 'rgba(15, 21, 34, 0.95)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)'
          }}>
            
            {/* Top Bar: Brand & Controls */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Clock size={16} color="#fff" />
                </div>
                <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                  QueueLess
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={handleRefresh}
                  title="Simulate Real-time Refresh"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    color: '#94a3b8',
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <RefreshCw size={14} style={{ animation: isRefreshing ? 'spin 0.6s linear' : 'none' }} />
                </button>
                <span className="badge badge-indigo" style={{ fontSize: '0.68rem', padding: '0.2rem 0.6rem' }}>
                  Live App
                </span>
              </div>
            </div>

            {/* Location Title & Subtitle */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.25, marginBottom: '0.3rem' }}>
                {activeLoc.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {activeLoc.building}
              </p>
            </div>

            {/* CURRENT QUEUE Section */}
            <div style={{
              background: 'rgba(9, 13, 22, 0.7)',
              borderRadius: '0.85rem',
              padding: '1.5rem',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              marginBottom: '1.5rem'
            }}>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-dim)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                CURRENT QUEUE
              </span>

              <div style={{
                fontSize: '3.5rem',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1,
                fontFamily: 'var(--font-heading)',
                marginBottom: '0.25rem'
              }}>
                {activeLoc.queue}
              </div>
              <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)' }}>
                people
              </span>

              <div style={{
                marginTop: '1.25rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  Estimated wait
                </span>
                <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f59e0b', fontFamily: 'var(--font-heading)' }}>
                  {activeLoc.wait} minutes
                </span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'var(--border-color)', margin: '1.5rem 0' }}></div>

            {/* QUIETER WINDOWS Chart */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--text-dim)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}>
                  QUIETER WINDOWS
                </span>
                <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>
                  Optimal Window Highlighted
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {activeLoc.windows.map((win, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: win.load <= 30 ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.6rem',
                    border: win.load <= 30 ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid transparent'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100px' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff' }}>
                        {win.time}
                      </span>
                    </div>

                    {/* Bar visualization */}
                    <div style={{ flex: 1, margin: '0 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{
                        height: '8px',
                        width: `${win.load}%`,
                        borderRadius: '4px',
                        background: win.color,
                        boxShadow: win.load <= 30 ? `0 0 10px ${win.color}` : 'none',
                        transition: 'width 0.4s ease'
                      }}></div>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: win.color, fontWeight: 700 }}>
                        {win.bars}
                      </span>
                    </div>

                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: win.color, width: '80px', textAlign: 'right' }}>
                      {win.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Plan My Visit Button */}
            <button
              onClick={handlePlanVisit}
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '0.95rem',
                fontSize: '1rem',
                borderRadius: '0.75rem'
              }}
            >
              <Calendar size={18} />
              Plan my visit
            </button>

            {/* Notification Confirmation Toast */}
            {planned && (
              <div style={{
                marginTop: '1rem',
                padding: '0.85rem 1rem',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                borderRadius: '0.6rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: '#34d399',
                fontSize: '0.85rem',
                animation: 'fadeIn 0.3s ease'
              }}>
                <Bell size={18} color="#34d399" />
                <div>
                  <strong style={{ display: 'block', color: '#ffffff' }}>Visit Saved!</strong>
                  We'll send a ping 20 mins before your quieter window.
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}
