
import React from 'react';

interface RoadmapItem {
  version: string;
  title: string;
  details: string[];
}

interface RoadmapQuarter {
  id: string;
  quarter: string;
  phase: string;
  goal: string;
  items: RoadmapItem[];
  status: 'completed' | 'current' | 'upcoming';
}

const ROADMAP_2026: RoadmapQuarter[] = [
  {
    id: 'q1',
    quarter: 'Q1 2026',
    phase: 'Phase 1',
    goal: 'Establish core access and deliver the first usable trading experience.',
    status: 'current',
    items: [
      { version: 'V1', title: 'Esports Alerts Layer', details: ['Initial release of esports-focused alert infrastructure.'] },
      { version: 'V1.1', title: 'Enhanced Esports Logic', details: ['New alerts logic with low-risk focus', 'Updated confidence ranges and signal calibration'] },
      { version: 'TGE', title: 'Token Generation Event', details: ['Unlock access to trading agents and exclusive platform features'] },
      { version: 'V1.2', title: 'New Alert Bot Architecture', details: ['Faster delivery', 'Better filtering and signal prioritization'] },
      { version: 'V1.3', title: 'Expansion to New Markets', details: ['Introduction of weather markets, politics, insider moves.'] },
      { version: 'V1.4', title: 'Risk Management Tools', details: ['Stop-loss alerts for structured trade management'] },
      { version: 'V1.5', title: 'OpenServ Integration', details: ['Integration with OpenServ research agents.'] },
      { version: 'V2', title: 'Automated Execution Agent Launch', details: ['TG automated agent in Beta testing', 'AI trades 24/7 and captures opportunities autonomously'] },
      { version: 'V3', title: 'Public Alerts Launch', details: ['Public Alert Bot released alongside TGE', 'Simple UI with real-time notifications before crowd reaction'] }
    ]
  },
  {
    id: 'q2',
    quarter: 'Q2 2026',
    phase: 'Phase 2',
    goal: 'Provide visibility into performance and enable following proven strategies.',
    status: 'upcoming',
    items: [
      { version: 'V2.1', title: 'Strategy Expansion', details: ['Additional execution agent strategies', 'Multiple risk/return profiles'] },
      { version: 'V2.2', title: 'Copy-Trading Layer', details: ['Follow an agent or strategy bundle', 'Track inefficiencies and auto-execute trades'] },
      { version: 'V3.1', title: 'Analytics Dashboard', details: ['Strategy performance tracking', 'Market inefficiency insights', 'Community alpha sharing'] },
      { version: 'V3.2', title: 'Partnerships & Referrals', details: ['Reward users for discovering edges', 'Revenue sharing on profitable signals'] },
      { version: 'V4', title: 'New Venue Integrations', details: ['Kalshi integration', 'Opinion market integration'] }
    ]
  },
  {
    id: 'q3',
    quarter: 'Q3 2026',
    phase: 'Phase 3',
    goal: 'Improve accessibility, transparency, and trust at scale.',
    status: 'upcoming',
    items: [
      { version: 'V5', title: 'Web Dashboard Migration', details: ['Transition from TG to professional web UI', 'Real-time P&L and portfolio tracking'] },
      { version: 'V5.1', title: 'Multi-Chain & Wallet Support', details: ['Base, Polygon, Arbitrum compatibility', 'Connect any wallet, execute everywhere'] },
      { version: 'V5.2', title: 'Transparency Layer', details: ['Public agent leaderboard', 'PnL, win rate, drawdown by market'] },
      { version: 'V6', title: 'Access & Compliance', details: ['Tiered access across alerts & agents', 'Venue-specific compliance', 'Geographic restrictions.'] }
    ]
  },
  {
    id: 'q4',
    quarter: 'Q4 2026',
    phase: 'Phase 4',
    goal: 'Extend AimBot to funds and professional users.',
    status: 'upcoming',
    items: [
      { version: 'V7', title: 'Execution Suite', details: ['High-limit execution agents', 'API access for funds', 'Institutional tooling'] },
      { version: 'V7.1', title: 'Partner Dashboard', details: ['Volume pricing', 'White-label management'] },
      { version: 'V8', title: 'Bundled Strategies Layer', details: ['Strategy aggregator', 'AI-powered prediction market index funds'] }
    ]
  }
];

const Roadmap: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 md:py-24 px-4 relative">
      <header className="mb-16 md:mb-32 text-center">
        <h1 className="text-5xl md:text-8xl font-black tracking-tight uppercase text-white drop-shadow-2xl">Roadmap</h1>
        <div className="mt-8 md:mt-12 h-[2px] w-32 md:w-48 mx-auto bg-gradient-to-r from-transparent via-[#00B0F0]/50 to-transparent"></div>
      </header>

      <div className="space-y-32 md:space-y-64">
        {ROADMAP_2026.map((q) => (
          <div key={q.id} className="relative">
            <div className="flex flex-col items-center mb-12 md:mb-20 text-center px-4">
              <div className={`mb-6 px-6 md:px-10 py-2 md:py-3 rounded-full border-2 bg-black text-[10px] md:text-sm font-black tracking-[0.4em] md:tracking-[0.6em] uppercase transition-all duration-500 ${
                q.status === 'current' ? 'border-[#00B0F0] text-[#00B0F0] aimbot-glow shadow-[0_0_20px_rgba(0,176,240,0.3)]' : 'border-white/10 text-zinc-500'
              }`}>
                {q.quarter} &mdash; {q.phase}
              </div>
              <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 max-w-4xl leading-tight">
                {q.goal}
              </h3>
              <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gradient-to-r from-transparent via-[#00B0F0]/60 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 px-4">
              {q.items.map((item, index) => (
                <div key={index} className="glass-panel p-8 md:p-10 border-white/5 hover:border-[#00B0F0]/40 transition-all duration-700 group relative overflow-hidden flex flex-col h-full">
                  <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-30 transition-opacity">
                    <span className="text-4xl md:text-5xl font-black text-[#00B0F0] select-none font-mono">0{index + 1}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6 md:mb-8">
                    <span className="text-[10px] md:text-[11px] font-mono font-black px-3 py-1 bg-[#00B0F0]/10 text-[#00B0F0] border border-[#00B0F0]/20 rounded-sm tracking-widest">
                      {item.version}
                    </span>
                    {q.status === 'current' && index === 0 && (
                      <div className="flex items-center space-x-2">
                        <span className="text-[9px] font-black text-[#00B0F0] tracking-widest animate-pulse">DEPLOYED</span>
                        <div className="relative">
                          <span className="absolute inset-0 w-2 h-2 rounded-full bg-[#00B0F0] animate-ping"></span>
                          <span className="relative block w-2 h-2 rounded-full bg-[#00B0F0]"></span>
                        </div>
                      </div>
                    )}
                  </div>

                  <h4 className="text-lg md:text-xl font-black uppercase tracking-wide text-white mb-4 md:mb-6 group-hover:text-[#00B0F0] transition-colors leading-tight">
                    {item.title}
                  </h4>

                  <ul className="space-y-3 md:space-y-4 flex-1">
                    {item.details.map((detail, dIndex) => (
                      <li key={dIndex} className="text-[12px] md:text-[13px] text-zinc-400 flex items-start leading-relaxed font-bold">
                        <span className="text-[#00B0F0] mr-2 mt-1 opacity-70">»</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                     <div className="h-[1px] w-full bg-[#00B0F0]/20"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <footer className="mt-32 md:mt-48 pt-16 md:pt-24 border-t border-white/10 text-center px-6">
        <p className="text-[9px] md:text-[11px] font-mono text-zinc-500 tracking-[0.4em] md:tracking-[0.6em] uppercase font-black">
          Precision execution verified via decentralized neural oracle consensus.
        </p>
      </footer>
    </div>
  );
};

export default Roadmap;
