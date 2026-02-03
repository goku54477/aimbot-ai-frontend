
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('INITIALIZING_CORE');

  const statusMessages = [
    'INITIALIZING_CORE',
    'CALIBRATING_ORACLES',
    'SYNCING_PREDICTION_MARKETS',
    'OPTIMIZING_YIELD_STRATEGIES',
    'ENCRYPTING_TERMINAL_LINK',
    'SYSTEM_ONLINE'
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 20;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(onComplete, 600);
      }
      setProgress(current);
      setStatus(statusMessages[Math.floor((current / 100) * (statusMessages.length - 1))]);
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center p-6 transition-all">
      <div className="relative mb-10 md:mb-12">
        <div className="absolute inset-0 bg-[#00B0F0]/20 blur-3xl rounded-full animate-pulse"></div>
        <Logo size={50} className="md:h-[70px] relative z-10 opacity-90 scale-110" />
      </div>
      
      <div className="w-40 md:w-56 h-[1.5px] bg-white/5 relative overflow-hidden mb-6">
        <div 
          className="absolute inset-0 bg-[#00B0F0] shadow-[0_0_10px_#00B0F0] transition-all duration-300 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="flex flex-col items-center space-y-3">
        <span className="text-[8px] md:text-[10px] font-mono text-[#00B0F0] tracking-[0.4em] md:tracking-[0.6em] uppercase font-black text-center max-w-[200px] leading-relaxed">
          {status}
        </span>
        <div className="flex items-center space-x-2">
           <span className="text-[7px] md:text-[8px] font-mono text-zinc-700 tracking-widest uppercase font-bold">
             Sync_Link
           </span>
           <span className="text-[7px] md:text-[8px] font-mono text-zinc-500 tracking-widest font-black">
             {Math.floor(progress)}%
           </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
