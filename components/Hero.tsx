'use client'

export default function Hero() {
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
            <button className="btn-glow flex h-12 sm:h-14 min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg bg-primary px-6 sm:px-8 text-base sm:text-lg font-bold tracking-wide text-background-dark">
              Grab Free Polymarket Edge Alert →
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
