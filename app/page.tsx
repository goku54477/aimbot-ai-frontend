'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      window.location.href = 'https://t.me/AimBot_AI'
    }, 1250)
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background-dark relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-[#0d0d0d] to-background-dark" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />

        {/* Polymarket Exclusive Mode Feature */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent-purple/20 to-primary/20 blur-3xl opacity-30" />
              
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-black/40 to-black/20 rounded-2xl border border-primary/30 p-8 md:p-12 transition-all duration-500 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-xl border border-primary/40 backdrop-blur-sm">
                      <svg className="w-10 h-10 md:w-12 md:h-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.87-.95-7-5.2-7-9V8.3l7-3.11 7 3.11V11c0 3.8-3.13 8.05-7 9z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-primary text-glow-blue mb-4">
                      Polymarket Exclusive Mode
                    </h3>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                      Scan 100+ live esports markets every 5 mins. 78% historical win rate on 2025 Dota/Valorant alerts. Kalshi integration coming—beta testers get early access.
                    </p>
                    
                    {/* Alert Preview */}
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl border border-primary/20 p-5 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2 animate-pulse" />
                        <div className="flex-1">
                          <div className="text-primary/80 text-xs font-medium mb-2">LIVE ALERT EXAMPLE</div>
                          <div className="text-primary font-bold text-lg">🎮 Dota 2 Major</div>
                          <div className="text-white/70 text-sm mt-1">Team Spirit vs OG</div>
                          <div className="flex items-center gap-2 mt-3">
                            <span className="text-accent-purple font-bold">4x Value</span>
                            <span className="text-white/50 text-sm">|</span>
                            <span className="text-white/60 text-sm">78% confidence</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleClick}
                      disabled={loading}
                      className="w-full md:w-auto bg-primary hover:bg-primary/90 text-background-dark px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 btn-glow disabled:opacity-70"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2 justify-center">
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Going to telegram group…
                        </span>
                      ) : (
                        'Access Beta Alerts'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center px-4 py-20 text-center">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-black/30 p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="flex flex-col items-center gap-6">
              <h2 className="font-orbitron text-2xl sm:text-3xl font-bold tracking-wider text-white text-glow-blue">
                Web Dashboard Coming Soon
              </h2>
              <p className="text-base leading-relaxed text-white/70">
                Elevate your game while you wait — early access users get exclusive tournament predictions.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
