
import React, { useEffect, useRef } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import mermaid from 'mermaid';
import paperContent from '../forecasting-engine-whitepaper.md?raw';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  fontFamily: 'JetBrains Mono, monospace',
});

const MermaidChart = ({ code }: { code: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && code) {
      mermaid.render(`mermaid-${Math.random().toString(36).substring(2, 9)}`, code)
        .then((result) => {
          if (ref.current) {
            ref.current.innerHTML = result.svg;
          }
        })
        .catch(err => console.error("Mermaid render error:", err));
    }
  }, [code]);

  return <div ref={ref} className="flex justify-center my-10 overflow-x-auto w-full shadow-[0_0_20px_rgba(0,176,240,0.05)] rounded-xl border border-white/5 p-4 bg-black/30 bg-opacity-40" />;
};

const Docs: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-6 animate-premium-fade">
      <div className="bg-black/50 border border-white/10 rounded-xl p-8 md:p-14 shadow-[0_0_40px_rgba(0,176,240,0.05)] backdrop-blur-md">
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({node, ...props}) => <h1 className="text-3xl md:text-5xl font-black text-[#00B0F0] mb-8 uppercase tracking-widest aimbot-glow-text" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-xl md:text-2xl font-bold text-white mt-16 mb-8 border-b border-white/10 pb-4 tracking-widest uppercase" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-lg md:text-xl font-semibold text-zinc-200 mt-10 mb-4 flex items-center tracking-widest uppercase before:content-[''] before:block before:w-2 before:h-2 before:bg-[#00B0F0] before:mr-3 before:shadow-[0_0_10px_#00B0F0]" {...props} />,
            p: ({node, ...props}) => <p className="text-zinc-400 text-sm md:text-[15px] leading-relaxed mb-6 font-medium selection:bg-[#00B0F0]/30 selection:text-white" {...props} />,
            ul: ({node, ...props}) => <ul className="list-none space-y-3 mb-8 pl-4" {...props} />,
            li: ({node, ...props}) => <li className="text-zinc-400 text-sm md:text-[15px] leading-relaxed relative before:content-['>'] before:absolute before:-left-4 before:text-[#00B0F0] before:font-bold" {...props} />,
            strong: ({node, ...props}) => <strong className="text-zinc-200 font-bold" {...props} />,
            em: ({node, ...props}) => <em className="text-[#00B0F0] not-italic tracking-wider uppercase text-[12px] opacity-80" {...props} />,
            table: ({node, ...props}) => <div className="overflow-x-auto w-full mb-10 mt-6"><table className="w-full text-left border-collapse border border-white/10" {...props} /></div>,
            th: ({node, ...props}) => <th className="bg-white/5 border border-white/10 p-3 md:p-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#00B0F0]" {...props} />,
            td: ({node, ...props}) => <td className="border border-white/10 p-3 md:p-4 text-xs md:text-sm text-zinc-400 font-mono" {...props} />,
            pre: ({node, ...props}) => <pre className="bg-black border border-[#00B0F0]/20 rounded-lg p-5 overflow-x-auto my-10 font-mono text-sm leading-tight text-[#00B0F0] shadow-[0_0_20px_rgba(0,176,240,0.05)]" {...props} />,
            code: ({node, className, children, ...props}) => {
              const match = /language-(\w+)/.exec(className || '');
              const language = match ? match[1] : '';
              if (language === 'mermaid') {
                return <MermaidChart code={String(children).replace(/\n$/, '')} />;
              }
              return <code className={`font-mono text-[0.9em] bg-white/5 px-1.5 py-0.5 rounded text-zinc-300 ${className || ''}`} {...props}>{children}</code>;
            },
          }}
        >
          {paperContent}
        </Markdown>
      </div>
    </div>
  );
};

export default Docs;
