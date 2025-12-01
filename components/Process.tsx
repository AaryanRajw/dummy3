import React from 'react';

const steps = [
  { 
    num: '01', 
    title: 'ACQUIRE', 
    desc: 'We collect cardboard waste from partnered businesses and collection points.', 
    bg: 'bg-[#FF6D00]', 
    text: 'text-black', 
    rotation: 'rotate-[-1deg]',
    offset: 'translate-x-[-10px]'
  },
  { 
    num: '02', 
    title: 'TRADE', 
    desc: 'We weigh the waste and offer fair credits or cash instantly.', 
    bg: 'bg-[#FFEB3B]', 
    text: 'text-black', 
    rotation: 'rotate-[2deg]',
    offset: 'translate-x-[5px]'
  },
  { 
    num: '03', 
    title: 'REFINE', 
    desc: 'Cardboard is pulped, pressed, and molded into new forms.', 
    bg: 'bg-[#00BCD4]', 
    text: 'text-black', 
    rotation: 'rotate-[-1.5deg]',
    offset: 'translate-x-[-5px]'
  },
  { 
    num: '04', 
    title: 'DEPLOY', 
    desc: 'New products hit the market. The cycle restarts.', 
    bg: 'bg-[#FF4081]', 
    text: 'text-black', 
    rotation: 'rotate-[1deg]',
    offset: 'translate-x-[10px]'
  },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="relative bg-[#f4f4f4] border-b-4 border-black pb-32">
      
      {/* BACKGROUND TEXTURE CONTAINER (Handles Overflow) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Big Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ 
                   backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                   backgroundSize: '40px 40px' 
               }}>
          </div>

          <div className="absolute top-10 right-10 opacity-10">
            <svg width="400" height="400" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="0.5">
                <path d="M0 0 L 100 100 M 20 0 L 100 80 M 0 20 L 80 100" />
            </svg>
          </div>
          
          {/* Gear Doodle */}
          <div className="absolute bottom-20 left-10 opacity-10 animate-[spin_10s_linear_infinite]">
             <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2">
                <circle cx="50" cy="50" r="30" />
                <path d="M50 10 L 50 20 M 50 80 L 50 90 M 10 50 L 20 50 M 80 50 L 90 50" />
                <path d="M22 22 L 29 29 M 71 71 L 78 78 M 22 78 L 29 71 M 71 29 L 78 22" />
             </svg>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
            
            {/* LEFT COLUMN: STICKY HEADER */}
            {/* Adjusted spacing and margin to prevent text cutoff */}
            <div className="lg:col-span-5 relative hidden lg:block h-full">
                <div className="sticky top-32 flex flex-col items-start lg:-ml-4 xl:-ml-8 transition-all duration-300">
                    
                    {/* Interactive Gear that spins on group hover */}
                    <div className="group cursor-default relative">
                        <div className="absolute -top-16 -left-16 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                             <svg className="w-full h-full animate-[spin_10s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2">
                                <circle cx="50" cy="50" r="40" strokeDasharray="10 5" />
                                <circle cx="50" cy="50" r="20" />
                             </svg>
                        </div>

                        <h2 className="text-7xl xl:text-8xl font-display uppercase text-black leading-[0.85] tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                            STEP<br/>BY<br/>STEP<br/>
                            <span className="text-[#00BCD4] relative inline-block">
                                PROTOCOL
                                {/* Underline doodle */}
                                <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 100 10">
                                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="black" strokeWidth="2" />
                                </svg>
                            </span>
                        </h2>
                    </div>
                    
                    <div className="mt-12 ml-4 relative">
                         <div className="absolute -left-8 top-0 bottom-0 border-l-2 border-black border-dashed opacity-30"></div>
                         <svg width="150" height="80" viewBox="0 0 150 80" fill="none" stroke="black" strokeWidth="3" className="animate-pulse">
                            <path d="M10 40 Q 75 10 140 40" strokeDasharray="10 5" />
                            <path d="M140 40 L 120 30" />
                            <path d="M140 40 L 125 55" />
                         </svg>
                    </div>

                    <p className="mt-8 font-mono font-bold text-lg bg-black text-white p-4 rotate-1 shadow-[8px_8px_0px_0px_#00BCD4] hover:rotate-0 hover:scale-105 transition-transform cursor-help">
                        SCROLL TO INSPECT ↴
                    </p>
                </div>
            </div>

            {/* MOBILE HEADER */}
            <div className="lg:hidden col-span-1 mb-12">
                 <h2 className="text-6xl font-display uppercase leading-none tracking-tighter">
                    Step By Step<br/>
                    <span className="text-[#00BCD4]">Protocol</span>
                 </h2>
            </div>

            {/* RIGHT COLUMN: STACKING CARDS */}
            {/* Added min-h to ensure scroll track is long enough for sticky effect */}
            <div className="lg:col-span-7 flex flex-col relative min-h-[140vh] pb-32">
                {/* Vertical Guide Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 border-l-2 border-black border-dashed opacity-10 hidden md:block"></div>

                {steps.map((step, index) => (
                    <div 
                        key={step.num}
                        className={`
                            sticky
                            group
                            w-full 
                            border-4 border-black
                            ${step.bg} 
                            ${step.rotation}
                            shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                            hover:translate-x-[-4px] hover:translate-y-[-8px] hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] hover:rotate-0
                            transition-all duration-300 ease-out
                            flex flex-col md:flex-row
                            origin-center
                            will-change-transform
                        `}
                        style={{ 
                            // Precise sticky positioning - Increased gap to 110px
                            top: `calc(150px + ${index * 110}px)`, 
                            zIndex: index + 10,
                            marginBottom: '60px' // Space between cards in flow
                        }}
                    >
                        {/* FOLDER TAB VISUAL */}
                        <div className="absolute -top-12 left-0 h-12 w-40 bg-black flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                             <span className="text-white font-mono font-bold text-sm tracking-widest">DOC_0{step.num}</span>
                        </div>
                        {/* Tab Connector */}
                        <div className="absolute -top-12 left-40 w-0 h-0 border-l-[30px] border-l-black border-t-[48px] border-t-transparent border-b-[0px] border-b-transparent transition-transform duration-300 group-hover:-translate-y-1"></div>

                        {/* Number Section */}
                        <div className="border-b-4 md:border-b-0 md:border-r-4 border-black p-6 md:p-8 flex items-center justify-center bg-white min-w-[160px] relative overflow-hidden">
                            {/* Inner Noise */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent"></div>
                            
                            <span className="text-6xl md:text-8xl font-display tracking-tighter text-black relative z-10 group-hover:scale-110 transition-transform duration-300">
                                {step.num}
                            </span>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 md:p-10 flex-1 relative overflow-hidden flex flex-col justify-center">
                            
                            {/* Industrial Bolts */}
                            <div className="absolute top-2 right-2 text-black opacity-50 transition-transform duration-500 group-hover:rotate-90">+</div>
                            <div className="absolute bottom-2 right-2 text-black opacity-50 transition-transform duration-500 group-hover:rotate-90">+</div>
                            <div className="absolute top-2 left-2 text-black opacity-50 transition-transform duration-500 group-hover:rotate-90">+</div>

                            <h3 className="text-3xl md:text-4xl font-display uppercase mb-4 text-black border-b-2 border-black pb-2 inline-block self-start group-hover:text-white group-hover:bg-black transition-colors duration-200 px-1">
                                {step.title}
                            </h3>
                            <p className="font-mono font-bold text-lg text-black leading-relaxed">
                                {step.desc}
                            </p>
                            
                            {/* Sticker appearing on specific card */}
                            {index === 2 && (
                                <div className="absolute bottom-4 right-4 transform -rotate-12 pointer-events-none opacity-80 group-hover:scale-110 transition-transform">
                                    <svg width="70" height="70" viewBox="0 0 100 100" fill="white" stroke="black" strokeWidth="3">
                                        <path d="M50 0 L 100 50 L 50 100 L 0 50 Z" />
                                        <text x="50" y="55" textAnchor="middle" fontFamily="monospace" fontSize="20" fontWeight="bold">OK</text>
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};