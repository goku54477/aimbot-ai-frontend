'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

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
    <div className="fixed inset-0 bg-background-dark z-50 flex items-center justify-center">
      <div className="text-center">
        <Image
          src="/Logo/white logo with eyelid x BG.png"
          alt="AIMBOT AI"
          width={160}
          height={48}
          className="animate-pulse mx-auto"
        />
        <p className="mt-6 text-white/60 text-sm">Loading AIMBOT AI…</p>
      </div>
    </div>
  )
}
