import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  themeVariables: {
    fontFamily: 'Inter, system-ui, sans-serif',
    primaryColor: '#3B82F6',
    primaryTextColor: '#fff',
    primaryBorderColor: '#3B82F6',
    lineColor: '#94A3B8',
    secondaryColor: '#1E293B',
    tertiaryColor: '#0F172A',
  }
});

interface MermaidProps {
  chart: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.contentLoaded();
      // Use a timeout to ensure React has rendered the text before mermaid tries to parse it
      const timeoutId = setTimeout(() => {
        try {
          mermaid.init(undefined, ref.current!);
        } catch (error) {
          console.error('Mermaid rendering failed:', error);
        }
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [chart]);

  return (
    <div className="mermaid flex justify-center my-12 bg-slate-900/50 p-8 rounded-2xl border border-slate-800 shadow-2xl overflow-x-auto" ref={ref}>
      {chart}
    </div>
  );
};

export default Mermaid;
