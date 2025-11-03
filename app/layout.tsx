import type { Metadata } from 'next'
import './globals.css'
import { Inter, Orbitron } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const orbitron = Orbitron({ subsets: ['latin'], weight: ['700','900'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: 'Aimbot AI: Polymarket Esports Alerts | Beta Join',
  description: 'Real-time Polymarket esports alerts with 78% win rate. Live 3%+ edges on Dota/CS:GO. Join 10K+ elite gamers. Kalshi integration coming Q1 2026.',
  icons: {
    icon: [
      {
        url: '/Logo/white logo with no BG.png',
        sizes: 'any',
      },
    ],
    shortcut: '/Logo/white logo with no BG.png',
    apple: '/Logo/white logo with no BG.png',
  },
  openGraph: {
    title: 'AIMBOT AI',
    description: 'Polymarket esports alerts — premium gaming intelligence.',
    url: 'https://aimbot-ai.vercel.app',
    type: 'website',
    images: ['/Logo/white logo with no BG.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIMBOT AI',
    description: 'Polymarket esports alerts — premium gaming intelligence.',
    images: ['/Logo/white logo with no BG.png'],
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
