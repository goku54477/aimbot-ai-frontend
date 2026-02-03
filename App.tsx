
import React, { useState } from 'react';
import Roadmap from './components/Roadmap';
import Docs from './components/Docs';
import ChatTerminal from './components/ChatTerminal';
import LoadingScreen from './components/LoadingScreen';
import SyncPlaceholder from './components/SyncPlaceholder';
import StatusBar from './components/StatusBar';
import Logo from './components/Logo';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'roadmap' | 'docs' | 'analytics'>('dashboard');
  const [loading, setLoading] = useState(true);

  const isLockedView = activeTab === 'dashboard' || activeTab === 'docs' || activeTab === 'analytics';

  const handleRequestAccess = () => {
    window.open('https://t.me/Aimbot_AI_Chat', '_blank');
  };

  const NavButtons = () => (
    <>
      <button 
        title="Dashboard"
        onClick={() => setActiveTab('dashboard')}
        className={`p-3.5 rounded-xl transition-all duration-300 relative group ${activeTab === 'dashboard' ? 'text-white bg-[#00B0F0]/30' : 'text-zinc-400 hover:text-white hover:bg-white/10'}`}
      >
        {activeTab === 'dashboard' && <div className="absolute inset-0 border-2 border-[#00B0F0] rounded-xl shadow-[0_0_20px_rgba(0,176,240,0.5)]"></div>}
        <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
      </button>
      
      <button 
        title="Roadmap"
        onClick={() => setActiveTab('roadmap')}
        className={`p-3.5 rounded-xl transition-all duration-300 relative group ${activeTab === 'roadmap' ? 'text-white bg-[#00B0F0]/30' : 'text-zinc-400 hover:text-white hover:bg-white/10'}`}
      >
        {activeTab === 'roadmap' && <div className="absolute inset-0 border-2 border-[#00B0F0] rounded-xl shadow-[0_0_20px_rgba(0,176,240,0.5)]"></div>}
        <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
      </button>

      <button 
         title="Documentation"
         onClick={() => setActiveTab('docs')}
         className={`p-3.5 rounded-xl transition-all duration-300 relative group ${activeTab === 'docs' ? 'text-white bg-[#00B0F0]/30' : 'text-zinc-400 hover:text-white hover:bg-white/10'}`}
      >
        {activeTab === 'docs' && <div className="absolute inset-0 border-2 border-[#00B0F0] rounded-xl shadow-[0_0_20px_rgba(0,176,240,0.5)]"></div>}
        <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
      </button>

      <button 
         title="Analytics"
         onClick={() => setActiveTab('analytics')}
         className={`p-3.5 rounded-xl transition-all duration-300 relative group ${activeTab === 'analytics' ? 'text-white bg-[#00B0F0]/30' : 'text-zinc-400 hover:text-white hover:bg-white/10'}`}
      >
        {activeTab === 'analytics' && <div className="absolute inset-0 border-2 border-[#00B0F0] rounded-xl shadow-[0_0_20px_rgba(0,176,240,0.5)]"></div>}
        <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </button>
    </>
  );

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={`flex flex-col h-screen bg-black text-white selection:bg-[#00B0F0] selection:text-black overflow-hidden font-['Inter',sans-serif] transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'} z-10`}>
        
        <div className="flex flex-1 overflow-hidden relative">
          {/* Sidebar - Hidden on mobile, shown on md+ */}
          <nav className="hidden md:flex w-20 border-r border-white/10 flex-col items-center py-12 space-y-10 bg-black z-50">
            <div className="flex flex-col space-y-8">
              <NavButtons />
            </div>
            <div className="mt-auto">
              <div className="w-2 h-2 bg-[#00B0F0] rounded-full animate-pulse shadow-[0_0_15px_#00B0F0]"></div>
            </div>
          </nav>

          {/* Main Workspace */}
          <main className="flex-1 flex flex-col relative overflow-hidden bg-black">
            <div className="scanline-premium pointer-events-none"></div>
            
            <header className="h-16 md:h-20 border-b border-white/10 flex items-center justify-between px-6 md:px-10 bg-black/90 backdrop-blur-3xl z-40">
              <div className="flex items-center space-x-6 md:space-x-12">
                 <Logo variant="full" size={28} className="md:h-[38px]" />
                 <div className="h-6 w-[1px] bg-white/20 hidden md:block"></div>
                 <span className="text-[9px] md:text-[11px] text-white font-mono font-bold tracking-[0.3em] uppercase hidden lg:block">Precision_Terminal_V2.0.1</span>
              </div>
              
              <div className="flex items-center space-x-4 md:space-x-10 text-[10px] md:text-[11px] font-mono text-white tracking-widest uppercase font-black">
                 <div className="hidden xl:flex items-center space-x-3">
                   <span className="w-2 h-2 rounded-full bg-[#00B0F0] shadow-[0_0_10px_#00B0F0]"></span>
                   <span className="text-white">Network: Nominal</span>
                 </div>
                 <button 
                  onClick={handleRequestAccess}
                  className="pill-button px-4 md:px-10 py-2 md:py-3 text-[9px] md:text-[11px] text-white border-white/30 hover:border-[#00B0F0] transition-all uppercase tracking-[0.2em] md:tracking-[0.3em] font-black"
                 >
                   Request Access
                 </button>
              </div>
            </header>

            <div className="flex-1 overflow-y-auto custom-scrollbar relative">
              
              {activeTab === 'dashboard' && (
                <div className="absolute inset-0 z-[60] flex flex-col items-center justify-center pointer-events-none animate-premium-fade bg-black/60 px-4">
                  <div className="text-center w-full flex flex-col items-center">
                    <h2 className="text-[10px] md:text-[14px] font-black tracking-[0.8em] md:tracking-[1.6em] text-[#00B0F0] aimbot-glow-text uppercase mb-6 md:mb-12 mr-[-0.8em] md:mr-[-1.6em]">
                      Yield Aggregator for Prediction Markets
                    </h2>
                    <h1 className="text-[14vw] md:text-[10vw] font-[900] uppercase tracking-[-0.04em] text-white leading-none">
                      Coming Soon
                    </h1>
                    <div className="mt-8 md:mt-16 h-[1px] w-48 md:w-96 mx-auto bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                    
                    <div className="mt-10 md:mt-16 space-y-6 md:space-y-8 pointer-events-auto">
                      <a 
                        href="https://x.com/Aimbot_AI" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center transition-all duration-300 hover:scale-105"
                      >
                        <span className="text-[11px] md:text-[13px] font-mono text-zinc-400 uppercase tracking-[0.4em] md:tracking-[0.6em] group-hover:text-white group-hover:aimbot-glow-text transition-all mr-[-0.4em] md:mr-[-0.6em]">
                          Follow us on X
                        </span>
                      </a>

                      <a 
                        href="https://t.me/Aimbot_AI_Chat" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center transition-all duration-300 hover:scale-105"
                      >
                        <span className="text-[11px] md:text-[13px] font-mono text-zinc-400 uppercase tracking-[0.4em] md:tracking-[0.6em] group-hover:text-white group-hover:aimbot-glow-text transition-all mr-[-0.4em] md:mr-[-0.6em]">
                          Chat with us on Telegram
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {(activeTab === 'docs' || activeTab === 'analytics') && (
                <SyncPlaceholder title="Syncing" subtitle="Protocol Calibration in Progress" />
              )}

              <div className={`transition-all duration-1000 h-full ${isLockedView ? 'terminal-blurred scale-[0.99]' : ''}`}>
                {activeTab === 'dashboard' && (
                  <div className="p-6 md:p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="h-48 md:h-64 glass-panel rounded-xl opacity-10"></div>
                      ))}
                    </div>
                  </div>
                )}
                {activeTab === 'roadmap' && <Roadmap />}
                {activeTab === 'docs' && <Docs />}
                {activeTab === 'analytics' && <div className="p-4 md:p-10 h-full"><ChatTerminal /></div>}
              </div>
            </div>
          </main>
        </div>
        
        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden h-16 border-t border-white/10 flex items-center justify-around bg-black z-50">
          <NavButtons />
        </nav>

        <StatusBar />
      </div>
    </>
  );
};

export default App;
