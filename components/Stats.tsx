'use client'

export default function Stats() {
  const stats = [
    { value: '1M+', label: 'Active Users' },
    { value: '500K+', label: 'Games Won' },
    { value: '99.9%', label: 'Success Rate' },
    { value: '150+', label: 'Countries' }
  ]

  return (
    <section id="stats" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="gaming-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
