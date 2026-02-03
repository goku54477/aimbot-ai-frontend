
import React from 'react';

const Docs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 animate-premium-fade">
      <header className="mb-20">
        <h1 className="text-4xl font-black tracking-tighter uppercase mb-4">Protocol Documentation</h1>
        <p className="text-zinc-500 font-mono text-[10px] tracking-[0.3em] uppercase">Technical Specification v2.0.4_BETA</p>
      </header>

      <div className="space-y-16">
        <section>
          <h2 className="text-[#00B0F0] text-xs font-bold tracking-[0.4em] uppercase mb-6 border-b border-[#00B0F0]/20 pb-2 inline-block">01. Overview</h2>
          <p className="text-zinc-400 leading-relaxed text-sm">
            AIMBOT is a decentralized yield aggregator specifically engineered for the prediction market ecosystem. 
            By leveraging high-frequency data from across PolyMarket, Gnosis, and Azuro, AIMBOT identifies 
            alpha opportunities in event-based assets.
          </p>
        </section>

        <section>
          <h2 className="text-[#00B0F0] text-xs font-bold tracking-[0.4em] uppercase mb-6 border-b border-[#00B0F0]/20 pb-2 inline-block">02. Yield Mechanics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 glass-panel border-white/5">
              <h3 className="text-white text-[10px] font-bold tracking-widest uppercase mb-3">Delta Neutral Staking</h3>
              <p className="text-zinc-500 text-xs">Automated hedging of outcome positions to capture base yield without directional exposure.</p>
            </div>
            <div className="p-6 glass-panel border-white/5">
              <h3 className="text-white text-[10px] font-bold tracking-widest uppercase mb-3">Oracle Arbitrage</h3>
              <p className="text-zinc-500 text-xs">Capitalizing on latency discrepancies between resolution oracles and secondary market pricing.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-[#00B0F0] text-xs font-bold tracking-[0.4em] uppercase mb-6 border-b border-[#00B0F0]/20 pb-2 inline-block">03. Security & Audits</h2>
          <p className="text-zinc-400 leading-relaxed text-sm mb-6">
            Our multi-sig infrastructure and smart contracts are currently undergoing rigorous stress testing. 
            Audits from Tier-1 security firms will be released prior to the mainnet launch.
          </p>
          <div className="flex space-x-4">
             <div className="px-4 py-2 border border-zinc-800 text-[9px] text-zinc-500 uppercase tracking-widest">Audit: Pending</div>
             <div className="px-4 py-2 border border-zinc-800 text-[9px] text-zinc-500 uppercase tracking-widest">Multi-Sig: 3/5 Confirmed</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Docs;
