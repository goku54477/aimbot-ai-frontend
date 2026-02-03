
import React from 'react';
import { Strategy } from '../types';

interface StrategyCardProps {
  strategy: Strategy;
}

const StrategyCard: React.FC<StrategyCardProps> = ({ strategy }) => {
  return (
    <div className="p-4 border border-[#1A1A1A] bg-black hover:border-white transition-colors group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest">{strategy.name}</h3>
          <p className="text-xs text-zinc-500">{strategy.type}</p>
        </div>
        <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase border ${
          strategy.status === 'active' ? 'border-green-900 text-green-500' : 'border-zinc-800 text-zinc-600'
        }`}>
          {strategy.status}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-[10px] text-zinc-500 uppercase">Performance (YTD)</p>
          <p className="text-lg font-mono">+{strategy.performance}%</p>
        </div>
        <div>
          <p className="text-[10px] text-zinc-500 uppercase">Sharpe Ratio</p>
          <p className="text-lg font-mono">{strategy.sharpe}</p>
        </div>
      </div>
      
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="w-full py-2 text-xs uppercase tracking-tighter border border-[#1A1A1A] hover:bg-white hover:text-black">
          View Detailed Analytics
        </button>
      </div>
    </div>
  );
};

export default StrategyCard;
