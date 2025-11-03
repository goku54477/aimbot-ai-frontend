import type { Metadata } from 'next'
import './globals.css'
import { Inter, Orbitron } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const orbitron = Orbitron({ subsets: ['latin'], weight: ['700','900'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: 'Aimbot AI: Polymarket Esports Alerts | Beta Join',
  description: 'Real-time Polymarket esports alerts with 78% win rate. Live 3%+ edges on Dota/CS:GO. Join 10K+ elite gamers. Kalshi integration coming Q1 2026.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable}`}>{children}</body>
    </html>
  )
}
