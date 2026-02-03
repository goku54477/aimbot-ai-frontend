
import React, { useState, useEffect } from 'react';

const StatusBar: React.FC = () => {
  const [block, setBlock] = useState(19284752);
  const [latency, setLatency] = useState(12.4);
  const [gas, setGas] = useState(24);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setBlock(prev => prev + (Math.random() > 0.7 ? 1 : 0));
      setLatency(prev => +(prev + (Math.random() - 0.5)).toFixed(1));
      setGas(prev => Math.max(10, Math.min(100, prev + Math.floor(Math.random() * 3) - 1)));
      setTime(new Date());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 md:h-10 border-t border-white/10 bg-black/90 backdrop-blur-md flex items-center justify-between px-4 md:px-6 text-[8px] md:text-[10px] font-mono tracking-widest uppercase z-[100] transition-all">
      <div className="flex items-center space-x-4 md:space-x-6">
        <div className="flex items-center space-x-2">
          <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B0F0] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-[#00B0F0]"></span>
          </span>
          <span className="text-[#00B0F0] font-black hidden xs:inline">System_Active</span>
          <span className="text-[#00B0F0] font-black xs:hidden">LIVE</span>
        </div>
        <div className="h-3 w-[1px] bg-white/10"></div>
        <div className="flex space-x-3 md:space-x-4 text-zinc-500 overflow-hidden">
          <span className="hidden sm:inline">Block: <span className="text-white">{block.toLocaleString()}</span></span>
          <span>Lat: <span className="text-white">{latency}ms</span></span>
          <span className="hidden xs:inline">Gas: <span className="text-white">{gas}G</span></span>
        </div>
      </div>

      <div className="flex items-center space-x-4 md:space-x-6 text-zinc-500">
        <div className="hidden lg:flex space-x-4">
          <span>Enc: <span className="text-zinc-300">AES-GCM</span></span>
          <span>Terminal: <span className="text-zinc-300">AIM-09-X</span></span>
        </div>
        <div className="h-3 w-[1px] bg-white/10 hidden lg:block"></div>
        <span className="text-white font-bold whitespace-nowrap">{time.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })} UTC</span>
      </div>
    </div>
  );
};

export default StatusBar;
