import React, { useEffect, useRef, useState } from 'react';

export const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        setOffset(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="hero" ref={heroRef} className="relative min-h-screen bg-white dark:bg-[#121212] flex items-center pt-24 pb-20 lg:pt-0 lg:pb-0 overflow-hidden transition-colors duration-300">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div aria-hidden="true" className="absolute top-1/4 left-8 md:left-16 text-[#FFEB3B] text-4xl transform -rotate-12 opacity-80 animate-random-float pointer-events-none z-0">★</div>
      <div aria-hidden="true" className="absolute top-1/3 right-8 md:right-16 text-[#FF4081] text-2xl z-0 pointer-events-none animate-random-pop">
        <svg className="transform rotate-45" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="currentColor" strokeWidth="3"></path><path d="M6 6L18 18" stroke="currentColor" strokeWidth="3"></path></svg>
      </div>
      <div aria-hidden="true" className="absolute bottom-1/4 left-10 md:left-20 text-[#00E0FF] z-0 pointer-events-none animate-random-wiggle">
        <svg fill="none" height="30" viewBox="0 0 42 42" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M2 21L21 40L40 21L21 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
      </div>
      <div aria-hidden="true" className="absolute bottom-10 right-10 md:right-24 text-[#FFEB3B] text-5xl transform rotate-12 z-0 pointer-events-none animate-bounce">★</div>
      
      {/* Background Grid */}
      <div aria-hidden="true" className="absolute inset-0 z-0 opacity-5 dark:opacity-[0.03] pointer-events-none">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="80" id="grid" patternUnits="userSpaceOnUse" width="80">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1"></path>
            </pattern>
          </defs>
          <rect fill="url(#grid)" height="100%" width="100%"></rect>
        </svg>
      </div>

      <main className="container mx-auto flex-grow flex items-center z-10 pt-10 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full px-4">
          
          {/* LEFT: Text Content */}
          <div className="text-center lg:text-left relative">
            <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-black dark:text-white drop-shadow-xl">
                TRANSFORM<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#00BCD4]">WASTE</span> INTO<br/>
                INFRASTRUCTURE
            </h2>
            
            <div className="mt-8 flex justify-center lg:justify-start">
                <div className="w-2/3 h-4 bg-[#00E0FF] transform -skew-x-12 shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_white]"></div>
            </div>
            
            <p className="mt-8 max-w-lg mx-auto lg:mx-0 text-gray-600 dark:text-gray-400 font-mono text-lg leading-relaxed">
                We innovate at the intersection of sustainability and technology, converting today's waste into the building blocks of tomorrow's world.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a className="w-full sm:w-auto bg-[#00E0FF] text-black font-bold font-display tracking-wider py-4 px-8 border-4 border-black dark:border-white shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_white] hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group text-xl" href="#mission">
                    <span>Our Mission</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a className="w-full sm:w-auto bg-transparent text-black dark:text-white font-bold font-display tracking-wider py-4 px-8 border-4 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-xl" href="#process">
                    See Projects
                </a>
            </div>
          </div>

          {/* RIGHT: Image Stack (Parallax) */}
          <div className="relative h-[600px] flex items-center justify-center p-4">
             <div className="relative w-[300px] h-[450px] sm:w-[350px] sm:h-[525px] group">
                
                {/* Background Decor Layer */}
                <div className="absolute -inset-4 border-4 border-black dark:border-white opacity-20 transform rotate-6 transition-transform duration-500 group-hover:rotate-12"></div>
                
                {/* Main Image Frame */}
                <div className="absolute -inset-2 border-4 border-black dark:border-white bg-[#FFEB3B] transform rotate-[-3deg] transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-105 shadow-[16px_16px_0px_rgba(0,0,0,0.2)]"></div>
                
                {/* Main Image */}
                <img 
                    alt="Plastic bottles and other waste materials" 
                    className="absolute inset-0 w-full h-full object-cover border-2 border-black dark:border-gray-800 transition-transform duration-300 group-hover:scale-[1.02] group-hover:rotate-1" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6CEBdkHw3pM6xPP02KwPbGWTsdsQYSq5ibopWwCZKKIPnk8SpiXNDWsP27k7iJmzJ1mc6l1IHznR-9ni-sV1A3kGj1jDhbKA1U54qIJwUdLxuNEQv0LarSLsZzQh5ZrsdqGAE4kEAAXW4dE5NsY3HoqulzIdTPPZDiU4dGO5YbCurrWL7h7PwpFsaM20adip9OctjDUMzTi4yTZPwn6PRSBrBKAEI5JNROOV9EKOD3WEGx3oglW2HGPkF4l5YvqP0uwVC3Vyfh-Y"
                />

                {/* Floating Element 1 */}
                <div 
                    className="absolute top-4 -right-12 w-32 h-24 bg-white p-1 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] transform rotate-6 transition-transform duration-300 group-hover:rotate-12 group-hover:translate-x-2"
                    style={{ transform: `translateY(${offset * -0.05}px) rotate(6deg)` }}
                >
                    <img alt="Trash overflow" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjMaDPXMwVvvN8MhEhZvsZg3K0Cipo87MR4HGw4YcGiIYV8nlrfsvp0z2SCw6TPQZ_W1NYkFYSFgAX-Ahb4Stb5pN2Kob8-zYSTogubmp5RJwj54nndyHU49OMwBYPRevUkHwLshBifo_hMcOVAAZ8s1--alD93XpLYvDloyxSh-KAQ9cu-ulpBMc5zzsG8lkRohSccNrfeR6106A4sMCwmBl9gyiFPz1zvgBJeUh9VgG0Xm6Bb7d8wnQihXVciQQtVxHqRttB-E0"/>
                </div>

                {/* Floating Element 2 */}
                <div 
                    className="absolute bottom-16 -left-16 w-40 h-28 bg-white p-1 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] transform -rotate-12 transition-transform duration-300 group-hover:-rotate-15 group-hover:-translate-x-2"
                    style={{ transform: `translateY(${offset * 0.08}px) rotate(-12deg)` }}
                >
                    <img alt="Leaves in park" className="w-full h-full object-cover grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARTlLq7SvLJ_mdMLdQBusJkJCt_vMKy3_L8evuL_N_CSDwEfq-QeesDR7Xr6F1pphXeVcjiqBM6Do5UCxKSKu9JwJVILN9TYYViOnon_ioohazfQ1F3viYnP-gHccuCkMOePayNQxHgDouSTIwwsYYvjnJ-i7EiB2zonSfgcbRe5OJTgeqcE5zQ-h70-3DGnh8QpRRMTGfxnqiKb0sHQcewYXEgIUCbaGpVfHM2TW24WEV-vjIflt_allQ1tYayiFEVW2nCKmcMwA"/>
                </div>

                {/* Badge */}
                <div className="absolute -bottom-6 -right-4 bg-[#FF4081] text-white font-mono font-bold text-xs py-2 px-4 border-4 border-black shadow-[4px_4px_0px_black] transform rotate-3 animate-pulse">
                    EST. 2025
                </div>

             </div>
          </div>
        </div>
      </main>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-50">
        <span className="font-mono text-xs uppercase tracking-[0.2em] writing-vertical">Scroll</span>
        <div className="w-[2px] h-12 bg-black dark:bg-white animate-pulse"></div>
      </div>

    </div>
  );
};