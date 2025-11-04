'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-0 text-white">
            <Image 
              src="/Logo/white logo with eyelid x BG.png" 
              alt="AIMBOT AI Logo" 
              width={200} 
              height={60}
              className="h-16 w-auto"
              style={{ filter: 'drop-shadow(0 0 16px rgba(0, 212, 255, 1)) drop-shadow(0 0 32px rgba(0, 212, 255, 0.8)) drop-shadow(0 0 48px rgba(0, 212, 255, 0.6))' }}
            />
            <span className="font-orbitron text-xl font-bold uppercase tracking-wider text-glow-blue">AIMBOT AI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="https://t.me/YOUR_TG_USERNAME" target="_blank" rel="noopener noreferrer" className="btn-glow flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold tracking-wide text-background-dark hover:bg-white">
              Join the Beta
            </a>
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
            <a href="https://t.me/YOUR_TG_USERNAME" target="_blank" rel="noopener noreferrer" className="w-full btn-glow flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold tracking-wide text-background-dark hover:bg-white">
              Join the Beta
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
