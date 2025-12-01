import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="relative bg-black border-b-4 border-black py-6 overflow-visible select-none z-20">
      
      {/* Doodles Overhanging the Marquee */}
      <div className="absolute -top-6 left-10 z-30 animate-bounce pointer-events-none">
         <svg width="50" height="50" viewBox="0 0 50 50">
             <path d="M25 0 L32 18 L50 18 L36 28 L42 48 L25 35 L8 48 L14 28 L0 18 L18 18 Z" fill="#FFEB3B" stroke="black" strokeWidth="2"/>
         </svg>
      </div>

      <div className="absolute -bottom-8 right-20 z-30 animate-pulse pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 50 50">
            <path d="M20 0 L0 30 L20 30 L15 50 L45 15 L25 15 Z" fill="#00BCD4" stroke="black" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative flex w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
             <span key={i} className="flex items-center gap-4 text-4xl md:text-6xl font-display uppercase leading-none tracking-tighter text-[#FFEB3B]">
                JOIN THE NETWORK 
                <span className="text-white">
                    {/* SVG Bolt/Star */}
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                </span> 
                SAVE THE PLANET 
                <span className="text-white">
                    {/* SVG Bolt/Star */}
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                </span>
             </span>
          ))}
        </div>
      </div>
    </section>
  );
};