'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background-dark/50 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-7xl px-6 py-6 sm:px-10 lg:px-20">
        {/* Trust Line */}
        <div className="text-center mb-4 pb-4 border-b border-white/10">
          <p className="text-xs sm:text-sm text-white/60">
            Powered by DOME API | Coming Soon: Kalshi, Augur | Not financial advice—18+ only.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/Logo/image-removebg-preview 1.png"
              alt="AIMBOT AI"
              width={80}
              height={24}
              className="opacity-70"
            />
            <p className="text-xs text-white/40">© 2025 AIMBOT AI</p>
          </div>

          <div className="flex items-center gap-4">
            <a className="text-primary icon-glow" href="#" aria-label="X">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </a>
            <a className="text-primary icon-glow" href="#" aria-label="Telegram">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.884 12.333l-3.333 1.897 3.333 1.897 8.333-4.762-11.666-6.666 2.38 9.524 2.619-2.619zM22.067.886L.933 11.442c-1.238.566-1.223 2.3.016 2.85l5.053 1.805 11.968-7.585-8.735 8.164 8.78 3.136c1.218.435 2.375-.466 2.05-1.786l3.05-14.54c.36-1.597-1.002-2.82-2.037-2.18z"></path></svg>
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs text-white/50">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>

          <a className="group hidden rounded-full border border-white/20 p-1.5 transition-colors hover:border-accent-purple sm:block" href="#top" aria-label="Back to top">
            <svg className="h-4 w-4 text-white/50 transition-colors group-hover:text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
