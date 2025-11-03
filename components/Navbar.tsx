'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 text-white">
            <div className="w-8 h-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
              </svg>
            </div>
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
