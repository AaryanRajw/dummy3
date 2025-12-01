import React, { useState, useRef } from 'react';

export const ContactForm: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section id="contact" className="border-b-4 border-black bg-white relative overflow-hidden">
      
      {/* Background Scribble Doodle (Center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0">
          <svg width="800" height="800" viewBox="0 0 200 200" fill="none" stroke="black" strokeWidth="1">
              <path d="M10 10 Q 50 190 90 10 T 190 190" />
              <path d="M190 10 Q 150 190 100 10 T 10 190" />
          </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen relative z-10">
         
         {/* Left Side: Interactive Pink Dot Matrix */}
         <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative bg-[#FF4081] border-b-4 lg:border-b-0 lg:border-r-4 border-black p-12 md:p-24 flex flex-col justify-center overflow-hidden group"
         >
            
            {/* CSS Dot Pattern with Mouse Interaction */}
            <div 
                className="absolute inset-0 opacity-30 transition-opacity duration-300" 
                style={{ 
                    backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', 
                    backgroundSize: '30px 30px',
                    // Subtle parallax on dots
                    transform: `translate(${mousePos.x * -0.02}px, ${mousePos.y * -0.02}px)`
                }}
            ></div>

            {/* Mouse Spotlight */}
            <div 
                className="absolute w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none mix-blend-overlay transition-opacity duration-75"
                style={{
                    left: mousePos.x - 128,
                    top: mousePos.y - 128,
                    opacity: 1,
                }}
            />

            {/* Doodle: Paper Plane */}
            <div className="absolute top-10 right-10 animate-random-float pointer-events-none opacity-60 mix-blend-multiply">
                 <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="3">
                    <path d="M10 90 L 90 50 L 10 10 L 10 50 L 50 50 L 10 50 Z" />
                 </svg>
            </div>

            <div className="relative z-10 pointer-events-none">
                <h2 className="text-[5rem] md:text-8xl font-display uppercase leading-[0.9] mb-12 text-black drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                  START<br/>THE<br/>TRADE
                </h2>
                
                <div className="bg-black p-8 border-4 border-black shadow-[12px_12px_0px_0px_#FFFFFF] group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-[6px_6px_0px_0px_#FFFFFF] transition-all duration-300">
                  <p className="font-mono font-bold text-xl md:text-2xl text-white leading-relaxed">
                    Our fleet is ready. Enter your waste metrics and receive immediate carbon credit valuation.
                  </p>
                </div>
            </div>
         </div>

         {/* Right Side: Form */}
         <div className="p-8 md:p-16 lg:p-24 bg-white flex flex-col justify-center relative">
            
            {/* Decor Arrows - Floating */}
            <div className="absolute top-8 right-8 text-4xl font-bold rotate-45 animate-bounce z-10 pointer-events-none">↙</div>
            <div className="absolute bottom-8 left-8 text-4xl font-bold rotate-180 animate-pulse z-10 pointer-events-none">⇡</div>
            
            {/* Doodle: Squiggle line */}
            <div className="absolute top-[10%] right-[40%] animate-random-wiggle z-0 opacity-20 pointer-events-none">
                <svg width="200" height="50" viewBox="0 0 200 50" fill="none" stroke="#00BCD4" strokeWidth="5" strokeLinecap="round">
                    <path d="M5 25 Q 50 5 95 25 T 195 25" />
                </svg>
            </div>

            <form className="space-y-12 relative z-20" onSubmit={(e) => e.preventDefault()}>
               
               {/* Input Group 1 */}
               <div className="relative group">
                  <label className="absolute -top-4 left-0 bg-black text-white px-3 py-1 font-mono font-bold text-sm uppercase z-10 group-hover:bg-[#00BCD4] transition-colors">
                    Shop Identity
                  </label>
                  <div className="relative border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-focus-within:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-focus-within:-translate-y-1 transition-all">
                    <input 
                      type="text"
                      placeholder="Enter Shop Name..." 
                      className="w-full bg-transparent px-6 py-6 text-xl font-mono font-bold outline-none placeholder-gray-400 text-black"
                    />
                  </div>
               </div>
               
               {/* Input Group 2 */}
               <div className="relative group">
                  <label className="absolute -top-4 left-0 bg-black text-white px-3 py-1 font-mono font-bold text-sm uppercase z-10 group-hover:bg-[#00BCD4] transition-colors">
                    Contact
                  </label>
                  <div className="relative border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-focus-within:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-focus-within:-translate-y-1 transition-all">
                    <input 
                      type="text"
                      placeholder="Enter Owner Name..." 
                      className="w-full bg-transparent px-6 py-6 text-xl font-mono font-bold outline-none placeholder-gray-400 text-black"
                    />
                  </div>
               </div>

               {/* Input Group 3 - Volume with Calc */}
               <div className="relative group">
                  <label className="absolute -top-4 left-0 bg-black text-white px-3 py-1 font-mono font-bold text-sm uppercase z-10 group-hover:bg-[#00BCD4] transition-colors">
                    Volume
                  </label>
                  <div className="flex gap-4">
                    <div className="relative flex-1 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-focus-within:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-focus-within:-translate-y-1 transition-all">
                        <input 
                        type="number"
                        placeholder="KG" 
                        className="w-full bg-transparent px-6 py-6 text-xl font-mono font-bold outline-none placeholder-gray-400 text-black"
                        />
                    </div>
                    <button type="button" className="bg-[#FFEB3B] border-4 border-black px-6 font-mono font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none hover:bg-[#00BCD4] transition-all">
                        CALC
                    </button>
                  </div>
               </div>

               <button type="submit" className="w-full bg-[#FFEB3B] border-4 border-black py-6 text-3xl font-display uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:bg-black hover:text-[#FFEB3B] transition-all text-black mt-8 active:scale-[0.99]">
                  Deploy Trucks
               </button>
            </form>
         </div>

      </div>
    </section>
  );
};