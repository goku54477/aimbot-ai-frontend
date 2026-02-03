
import React, { useState, useRef, useEffect } from 'react';
import { getMarketInsights } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatTerminal: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'QT Capital Analytical Module initialized. How can I assist with your strategy research?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getMarketInsights(input);
    const assistantMsg: ChatMessage = { role: 'assistant', content: response || "Analysis complete.", timestamp: new Date() };
    setMessages(prev => [...prev, assistantMsg]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full border border-[#1A1A1A] bg-black">
      <div className="p-2 border-b border-[#1A1A1A] flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Quant AI Terminal</span>
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
          <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
        </div>
      </div>
      
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs">
        {messages.map((m, i) => (
          <div key={i} className={`${m.role === 'assistant' ? 'text-zinc-300' : 'text-white'}`}>
            <span className="text-zinc-600 mr-2">[{m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
            <span className="font-bold mr-2 uppercase tracking-tight">{m.role === 'assistant' ? 'QT_CAP>' : 'INVESTOR>'}:</span>
            <span>{m.content}</span>
          </div>
        ))}
        {isLoading && (
          <div className="text-zinc-500 animate-pulse">
            <span className="mr-2">[SYSTEM]</span> Processing multi-variate analysis...
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-3 border-t border-[#1A1A1A] flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ENTER SYSTEM COMMAND OR QUERY..."
          className="flex-1 bg-transparent border-none outline-none text-xs font-mono uppercase text-white placeholder-zinc-700"
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="text-white hover:text-zinc-400 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatTerminal;
