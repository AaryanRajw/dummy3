import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-24 border-t-4 border-black relative overflow-hidden group">
      
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      {/* Interactive Doodle: Handshake / High Five */}
      <div className="absolute -left-10 bottom-0 opacity-30 md:opacity-50 transition-transform duration-500 group-hover:-translate-y-4">
          <svg width="300" height="300" viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="2">
             {/* Left Hand */}
             <path d="M0 200 V 150 Q 0 100 50 100 L 80 120" />
             <path d="M80 120 L 70 80 L 90 70 L 110 110" /> {/* Fingers */}
             <path d="M90 70 L 110 60 L 130 100" />
             {/* Right Hand (Shaking) */}
             <path d="M200 200 V 150 Q 200 100 150 100 L 120 120" stroke="#FFEB3B" />
             <path d="M120 120 L 130 80 L 110 70 L 90 110" stroke="#FFEB3B" />
          </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-display text-white mb-2 tracking-tighter hover:text-[#FFEB3B] transition-colors cursor-default">
            INOVAT<span className="text-[#FF4081] inline-block animate-pulse">★</span>RS
          </h2>
          <p className="font-mono text-sm text-gray-400 tracking-widest uppercase flex items-center gap-2 justify-center md:justify-start">
            Built For The Future
            <span className="inline-block w-2 h-2 bg-[#00BCD4] rounded-full animate-ping"></span>
          </p>
        </div>

        {/* Scroll To Top Button */}
        <button 
            onClick={scrollToTop}
            className="group/btn relative w-20 h-20 border-2 border-white flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all duration-300 active:scale-90"
            title="Back to Top"
        >
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/30 animate-[spin_10s_linear_infinite]"></div>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover/btn:-translate-y-1 transition-transform">
                <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>

        <div className="flex flex-col md:flex-row gap-8 font-mono font-bold text-sm text-center">
          <a href="#" className="relative px-2 py-1 overflow-hidden group/link">
             <span className="relative z-10 group-hover/link:text-black transition-colors">INSTAGRAM</span>
             <span className="absolute inset-0 bg-[#FF4081] transform scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#" className="relative px-2 py-1 overflow-hidden group/link">
             <span className="relative z-10 group-hover/link:text-black transition-colors">LINKEDIN</span>
             <span className="absolute inset-0 bg-[#00BCD4] transform scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#" className="relative px-2 py-1 overflow-hidden group/link">
             <span className="relative z-10 group-hover/link:text-black transition-colors">GITHUB</span>
             <span className="absolute inset-0 bg-[#FFEB3B] transform scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
          </a>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-600 text-xs font-mono uppercase">
        © 2024 Waste Protocol Systems
      </div>

    </footer>
  );
};