'use client'

export default function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Precision Targeting',
      description: 'AI-powered accuracy that adapts to your playstyle in real-time'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Sub-millisecond response times for competitive advantage'
    },
    {
      icon: '📊',
      title: 'Polymarket Exclusive Mode',
      description: 'Scan 100+ live esports markets every 5 mins. 78% historical win rate on 2025 Dota/Valorant alerts (from bot report). Kalshi integration next—beta testers get early access + custom filters.',
      isPolymarket: true
    },
    {
      icon: '🛡️',
      title: 'Secure & Safe',
      description: 'Enterprise-grade encryption and anti-detection technology'
    },
    {
      icon: '🎮',
      title: 'Multi-Game Support',
      description: 'Compatible with all major FPS and competitive titles'
    },
    {
      icon: '🔧',
      title: 'Customizable',
      description: 'Fully configurable settings to match your preferences'
    }
  ]

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 font-orbitron text-glow-blue">
            Premium Features
          </h2>
          <p className="text-xl text-white/70">
            Everything you need to dominate the competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group cursor-pointer rounded-xl border p-6 transition-all duration-300 ${
                feature.isPolymarket 
                  ? 'border-primary/50 bg-gradient-to-br from-primary/10 to-accent-purple/10 backdrop-blur-lg hover:border-primary hover:shadow-lg hover:shadow-primary/30' 
                  : 'border-white/10 bg-black/30 backdrop-blur-lg hover:border-white/30 hover:shadow-lg hover:shadow-white/10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.isPolymarket ? (
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg">
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.87-.95-7-5.2-7-9V8.3l7-3.11 7 3.11V11c0 3.8-3.13 8.05-7 9z"/>
                    </svg>
                  </div>
                ) : feature.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-3 transition-colors ${
                feature.isPolymarket ? 'text-primary' : 'text-white group-hover:text-primary'
              }`}>
                {feature.title}
              </h3>
              <p className="text-white/70 mb-4">
                {feature.description}
              </p>
              
              {feature.isPolymarket && (
                <>
                  <div className="mt-4 mb-4 rounded-lg overflow-hidden border border-primary/30">
                    <div className="bg-gradient-to-br from-primary/5 to-accent-purple/5 p-4">
                      <div className="text-xs text-white/60 mb-2">Live Alert Example:</div>
                      <div className="bg-black/50 rounded p-3 text-sm">
                        <div className="text-primary font-bold">🎮 Dota 2 Major</div>
                        <div className="text-white/90 mt-1">Team Spirit vs OG</div>
                        <div className="text-accent-purple font-semibold mt-2">4x Value Bet Detected</div>
                        <div className="text-white/70 text-xs mt-1">$1 → $4 potential | 78% confidence</div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-primary/80 hover:bg-primary text-background-dark px-4 py-2 rounded font-bold transition-all duration-300 hover:scale-105">
                    Try Free PM Alert
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
