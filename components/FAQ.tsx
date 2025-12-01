import React, { useState } from 'react';

const FAQItem = ({ q, a, i }: { q: string; a: string; i: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all z-10 relative group"
      >
        <span className="font-mono font-bold text-lg md:text-xl uppercase text-left flex items-center gap-4 group-hover:text-[#FF4081] transition-colors">
            <span className="text-black group-hover:text-[#FF4081]">0{i}.</span>
            {q}
        </span>
        <div className={`bg-black text-white w-10 h-10 flex items-center justify-center border-2 border-black transition-colors group-hover:bg-[#FF4081] group-hover:border-[#FF4081]`}>
            <span className={`text-3xl font-display leading-none transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>+</span>
        </div>
      </button>
      
      <div className={`
        overflow-hidden transition-all duration-300
        ${isOpen ? 'max-h-48 opacity-100 mt-[-4px]' : 'max-h-0 opacity-0'}
      `}>
        <div className="bg-gray-100 border-4 border-black border-t-0 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mx-2 relative overflow-hidden">
             {/* Subtle Texture inside answer */}
             <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
            <p className="font-mono text-black font-bold relative z-10 leading-relaxed">
                {a}
            </p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="bg-[#f8f8f8] py-32 border-b-4 border-black relative overflow-hidden">
       
       {/* --- NEW DOODLES --- */}
       
       {/* Doodle 1: Interlocking Working Gears (Top Left) */}
       <div className="absolute top-10 left-5 md:left-20 z-0 pointer-events-none opacity-90 mix-blend-multiply">
          <div className="relative w-[250px] h-[250px]">
              {/* Big Gear - Clockwise */}
              <svg className="absolute top-0 left-0 w-[160px] h-[160px] text-black animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8">
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="8" />
                  <path d="M50 10 L 50 0 M 50 90 L 50 100 M 10 50 L 0 50 M 90 50 L 100 50" />
                  <path d="M22 22 L 15 15 M 78 78 L 85 85 M 22 78 L 15 85 M 78 22 L 85 15" />
                  <path d="M35 12 L 30 5 M 65 88 L 70 95 M 12 65 L 5 70 M 88 35 L 95 30" />
                  <path d="M65 12 L 70 5 M 35 88 L 30 95 M 12 35 L 5 30 M 88 65 L 95 70" />
                  {/* Inner spokes */}
                  <circle cx="50" cy="50" r="10" fill="currentColor"/>
              </svg>

              {/* Small Gear - Counter-Clockwise (Meshed) */}
              <svg className="absolute top-[100px] left-[110px] w-[100px] h-[100px] text-[#FF4081] animate-[spin_6s_linear_infinite_reverse]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8">
                  <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="8" />
                  <path d="M50 10 L 50 0 M 50 90 L 50 100 M 10 50 L 0 50 M 90 50 L 100 50" />
                  <path d="M22 22 L 15 15 M 78 78 L 85 85 M 22 78 L 15 85 M 78 22 L 85 15" />
                  {/* Inner Hex */}
                  <path d="M40 50 L 45 42 L 55 42 L 60 50 L 55 58 L 45 58 Z" fill="currentColor" stroke="none"/>
              </svg>
          </div>
       </div>

       {/* Doodle 2: Lightbulb Idea (Top Right) */}
       <div className="absolute top-20 right-10 md:right-32 z-0 animate-bounce-cartoon pointer-events-none">
          <svg width="120" height="150" viewBox="0 0 100 120" fill="none" stroke="#FFEB3B" strokeWidth="4">
             <path d="M30 80 Q 10 40 50 10 Q 90 40 70 80" />
             <path d="M40 80 L 40 90 M 60 80 L 60 90 M 35 100 L 65 100" stroke="black" />
             {/* Sparks */}
             <line x1="50" y1="5" x2="50" y2="-10" stroke="black" className="animate-pulse" />
             <line x1="20" y1="20" x2="10" y2="10" stroke="black" className="animate-pulse" />
             <line x1="80" y1="20" x2="90" y2="10" stroke="black" className="animate-pulse" />
          </svg>
       </div>

       {/* Doodle 3: Peace Hand (Bottom Left) */}
       <div className="absolute bottom-10 left-[-20px] md:left-10 z-0 opacity-10 md:opacity-100 rotate-12 pointer-events-none">
           <svg width="250" height="300" viewBox="0 0 200 300" fill="white" stroke="black" strokeWidth="4" className="drop-shadow-[8px_8px_0px_rgba(0,0,0,0.2)]">
              <path d="M50 300 V 200 Q 50 150 20 120 L 20 80 Q 20 50 50 50 Q 80 50 80 80 V 150" /> {/* Thumb/Index base */}
              <path d="M80 150 V 40 Q 80 10 110 10 Q 140 10 140 40 V 150" /> {/* Middle */}
              <path d="M140 150 V 180 Q 140 220 180 220" /> {/* Folded fingers */}
              <path d="M50 300 H 150 V 250" />
           </svg>
       </div>

       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
             <div>
                 <h2 className="text-6xl md:text-8xl font-display uppercase text-black leading-[0.9] tracking-tighter">
                    YOUR<br/>
                    <span className="text-[#00BCD4] relative">
                        QUESTIONS
                        <svg className="absolute -bottom-4 right-0 w-3/4 h-6 text-black" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0 10 Q 50 20 100 10" fill="none" stroke="currentColor" strokeWidth="3" />
                        </svg>
                    </span>
                 </h2>
             </div>
             
             <div className="hidden md:block mb-4">
                 <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center animate-spin-slow">
                     <span className="text-4xl text-[#FFEB3B]">?</span>
                 </div>
             </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <FAQItem i={1} q="Do you pay for the cardboard?" a="Yes. We weigh it on site and issue immediate credits based on current pulp market rates. Cash options available for bulk." />
            <FAQItem i={2} q="What happens to the waste?" a="The cardboard is processed through our sustainable methods, where it is pulped, pressed, and molded into new, eco-friendly forms." />
            <FAQItem i={3} q="Is this only for shops?" a="Currently yes. We focus on high-volume B2B cardboard waste generation. Residential pickup is coming in 2025." />
            <FAQItem i={4} q="How are carbon credits calculated?" a="We use the EPA's WARM model to calculate the specific greenhouse gas emissions prevented by your recycling volume." />
            <FAQItem i={5} q="Can I track my collection?" a="Absolutely. Our dashboard provides real-time tracking of our electric fleet from dispatch to pickup." />
            <FAQItem i={6} q="What regions are supported?" a="We are currently operational in major metropolitan hubs with expansion planned for Q4 2024." />
          </div>
       </div>
    </section>
  );
};