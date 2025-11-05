'use client'

import { useState } from 'react'

export default function Hero() {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      window.location.href = 'https://t.me/AimBot_AI'
    }, 1500)
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-slide-up">
          <h1 className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-tight tracking-wider text-white text-glow-blue">
            AIMBOT AI
          </h1>
          <p className="mx-auto max-w-2xl text-base text-white/80 sm:text-lg md:text-xl mt-6">
            Real-time notifications for tournaments, player stats, and match alerts – never miss a play.
          </p>

          <div className="flex flex-col items-center gap-4 mt-8">
            <button 
              onClick={handleClick}
              disabled={loading}
              className="btn-glow flex h-12 sm:h-14 min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg bg-primary px-6 sm:px-8 text-base sm:text-lg font-bold tracking-wide text-background-dark transition-all disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Going to telegram group…
                </span>
              ) : (
                'Grab Polymarket Edge Alert →'
              )}
            </button>
            <p className="max-w-xl text-sm text-white/60">
              Join 10K+ elite gamers securing their edge with instant Polymarket alerts. Kalshi, PredictIt & more markets soon for 2x coverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
