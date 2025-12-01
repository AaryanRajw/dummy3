import React, { useState, useEffect, useRef } from 'react';

const missions = [
  { id: '01', title: 'COLLECT', desc: 'We deploy electric fleets to gather cardboard directly from your location, maximizing efficiency.', color: 'bg-[#FFEB3B]', rotation: 'md:-rotate-2', width: 'md:col-span-5', offset: 'md:translate-y-0' }, 
  { id: '02', title: 'TRADE', desc: 'We weigh the waste and offer fair credits or cash instantly.', color: 'bg-[#FF6D00]', rotation: 'md:rotate-1', width: 'md:col-span-6 md:col-start-7', offset: 'md:translate-y-12' },
  { id: '03', title: 'REFINE', desc: 'Cardboard is pulped, pressed, and molded into new forms.', color: 'bg-[#00BCD4]', rotation: 'md:-rotate-1', width: 'md:col-span-4 md:col-start-2', offset: 'md:-translate-y-8' },
  { id: '04', title: 'DEPLOY', desc: 'New products hit the market. The cycle restarts.', color: 'bg-[#FF4081]', rotation: 'md:rotate-2', width: 'md:col-span-5 md:col-start-8', offset: 'md:translate-y-4' },
  { id: '05', title: 'IMPACT', desc: 'Carbon is locked away, new infrastructure is built.', color: 'bg-[#CCFF00]', rotation: 'md:rotate-0', width: 'md:col-span-8 md:col-start-3', offset: 'md:translate-y-16' }
];

export const Mission: React.FC = () => {
  // Changed to Set for multiple open items
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['01']));
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisibleItems((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.mission-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggle = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="mission" ref={sectionRef} className="relative bg-white border-b-4 border-black py-24 overflow-hidden min-h-screen">
      
      {/* DOODLES */}
      <div className="absolute top-10 right-10 z-0 opacity-50 animate-random-float pointer-events-none">
         <svg width="100" height="100" viewBox="0 0 100 100" stroke="black" strokeWidth="3" fill="none">
            <rect x="20" y="20" width="60" height="60" />
            <path d="M20 20 L50 50 L80 20" />
            <path d="M20 80 L50 50 L80 80" />
         </svg>
      </div>

      <div className="absolute bottom-20 left-5 z-0 opacity-70 animate-random-wiggle pointer-events-none">
         <svg width="80" height="80" viewBox="0 0 100 100" stroke="#FF4081" strokeWidth="4" strokeLinecap="round">
             <line x1="10" y1="10" x2="90" y2="90" />
             <line x1="90" y1="10" x2="10" y2="90" />
         </svg>
      </div>
      
      <div className="absolute top-1/2 right-0 z-0 opacity-30 animate-doodle-shake pointer-events-none translate-x-1/2">
         <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="#00BCD4" strokeWidth="2">
            <circle cx="100" cy="100" r="80" strokeDasharray="20 10" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex justify-between items-end mb-24 border-b-4 border-black pb-4">
            <h2 className="text-6xl md:text-8xl font-display uppercase text-black leading-none relative">
            Mission Log
            {/* SVG Star */}
            <svg className="absolute -top-6 -right-12 w-16 h-16 text-[#FF4081] animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                 <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            </h2>
            {/* Arrow SVG */}
            <div className="hidden md:block w-24 h-12 relative">
                 <svg viewBox="0 0 100 50" className="w-full h-full animate-pulse" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M0 25H90M90 25L75 10M90 25L75 40" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
            </div>
        </div>

        {/* CHAOTIC GRID LAYOUT */}
        {/* ADDED items-start to fix layout stretching bug */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-y-24 pb-24 items-start">
          {missions.map((item, index) => {
            const isOpen = expandedItems.has(item.id);
            const isVisible = visibleItems.has(item.id);
            
            return (
              <div 
                key={item.id}
                data-id={item.id}
                onClick={() => toggle(item.id)}
                className={`
                  mission-item 
                  ${item.width} 
                  ${item.offset} 
                  ${item.rotation}
                  border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all duration-500 ease-out
                  ${isOpen ? 'scale-[1.02] z-20 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]' : 'hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 z-10'}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  relative
                `}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Header */}
                <div className={`
                  flex justify-between items-center p-6 md:p-8
                  ${item.color}
                  transition-colors duration-300
                `}>
                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="text-2xl md:text-3xl font-display text-black/50 font-bold border-2 border-black rounded-full w-12 h-12 flex items-center justify-center bg-white/20">{item.id}</span>
                    <h3 className="text-3xl md:text-5xl font-display uppercase text-black tracking-tighter">{item.title}</h3>
                  </div>
                  <div className={`
                    w-10 h-10 flex items-center justify-center border-4 border-black bg-white transition-transform duration-300
                    ${isOpen ? 'rotate-180 bg-black text-white' : 'rotate-0'}
                  `}>
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                        <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
                     </svg>
                  </div>
                </div>

                {/* Content Body */}
                <div className={`
                  grid transition-all duration-500 ease-in-out bg-white
                  ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                `}>
                  <div className="overflow-hidden">
                    <div className="p-6 md:p-8 border-t-4 border-black">
                        <p className="font-mono font-bold text-lg md:text-xl text-black leading-relaxed">
                        {item.desc}
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};