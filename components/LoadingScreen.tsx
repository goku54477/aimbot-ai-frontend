'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-gaming-darker z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center glow-purple mb-8 animate-pulse-glow mx-auto">
          <span className="text-5xl font-bold">A</span>
        </div>
        <h1 className="text-4xl font-bold gradient-text mb-8">AIMBOT</h1>
        
        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gaming-dark rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-gray-400 mt-4 text-sm">Loading {progress}%</p>
      </div>
    </div>
  )
}
