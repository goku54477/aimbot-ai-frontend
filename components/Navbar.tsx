'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      window.location.href = 'https://t.me/AimBot_AI'
    }, 1250)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-0 text-white">
            <Image 
              src="/Logo/blue logo no BG.png" 
              alt="AIMBOT AI Logo" 
              width={160} 
              height={48}
              className="w-auto"
              style={{ height: '3rem', filter: 'drop-shadow(0 0 16px rgba(0, 212, 255, 1)) drop-shadow(0 0 32px rgba(0, 212, 255, 0.8)) drop-shadow(0 0 48px rgba(0, 212, 255, 0.6))' }}
            />
            <span className="font-orbitron text-xl font-bold uppercase tracking-wider text-glow-blue">AIMBOT AI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleClick}
              disabled={loading}
              className="btn-glow flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold tracking-wide text-background-dark hover:bg-white transition-all disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Going to telegram group…
                </span>
              ) : (
                'Join the Beta'
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background-dark/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={handleClick}
              disabled={loading}
              className="w-full btn-glow flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold tracking-wide text-background-dark hover:bg-white transition-all disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Going to telegram group…
                </span>
              ) : (
                'Join the Beta'
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
