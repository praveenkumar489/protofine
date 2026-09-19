import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import ProductDemo from './components/ProductDemo'
import WhyNow from './components/WhyNow'
import FinalCTA from './components/FinalCTA'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Section 1: Navbar */}
      <Navbar />

      {/* Main Pitch Sections */}
      <main style={{ flex: 1 }}>
        {/* Section 2: Hero */}
        <Hero />

        {/* Section 3: Problem */}
        <Problem />

        {/* Section 4: Solution */}
        <Solution />

        {/* Section 5: Product Demonstration */}
        <ProductDemo />

        {/* Section 6: Why Now */}
        <WhyNow />

        {/* Section 7: Final CTA */}
        <FinalCTA />
      </main>
    </div>
  )
}
