
import React from 'react';
import Logo from './Logo';

interface SyncPlaceholderProps {
  title?: string;
  subtitle?: string;
}

const SyncPlaceholder: React.FC<SyncPlaceholderProps> = ({ 
  title = "Syncing", 
  subtitle = "Calibration in Progress" 
}) => {
  return (
    <div className="absolute inset-0 z-[60] flex flex-col items-center justify-center pointer-events-none animate-premium-fade bg-black/40">
      <div className="text-center px-6">
        <div className="w-24 h-24 border-4 border-[#00B0F0] rounded-full flex items-center justify-center mx-auto mb-10 animate-pulse shadow-[0_0_50px_rgba(0,176,240,0.4)]">
          <Logo size={48} />
        </div>
        <h3 className="text-4xl md:text-6xl font-black tracking-[0.8em] uppercase text-[#00B0F0] mr-[-0.8em]">{title}</h3>
        <div className="mt-12 h-[1px] w-64 mx-auto bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        <p className="text-white font-mono text-[13px] mt-10 tracking-[0.6em] uppercase font-black opacity-60">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default SyncPlaceholder;
