import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse position for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
    }, 650);
  };

  const navItems = [
    { name: 'MISSION', href: '#mission', number: '01', color: '#FFEB3B' },
    { name: 'PROCESS', href: '#process', number: '02', color: '#00BCD4' },
    { name: 'STATS', href: '#stats', number: '03', color: '#FF4081' },
    { name: 'CONTACT', href: '#contact', number: '04', color: '#FF6D00' },
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes rotate-continuous {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes slide-in-elastic {
          0% { transform: translateX(-100px) rotate(-10deg); opacity: 0; }
          60% { transform: translateX(10px) rotate(2deg); opacity: 1; }
          100% { transform: translateX(0) rotate(0deg); opacity: 1; }
        }
        @keyframes slide-out-elastic {
          0% { transform: translateX(0) scale(1); opacity: 1; }
          100% { transform: translateX(100px) scale(0.8) rotate(5deg); opacity: 0; }
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .float-animation { animation: float 3s ease-in-out infinite; }
        .menu-item-enter { animation: slide-in-elastic 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
        .menu-item-exit { animation: slide-out-elastic 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards; }
        .glitch-effect:hover { animation: glitch 0.3s ease-in-out infinite; }
        
        /* Shine effect */
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        .shine-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.7s;
        }
        .shine-effect:hover::after {
          left: 200%;
        }

        /* Liquid button effect */
        @keyframes liquid {
          0% { transform: scale(1, 1); }
          25% { transform: scale(0.9, 1.1); }
          50% { transform: scale(1.1, 0.9); }
          75% { transform: scale(0.95, 1.05); }
          100% { transform: scale(1, 1); }
        }
        .liquid-button:active {
          animation: liquid 0.4s ease-in-out;
        }

        /* Trail effect on menu items */
        .trail-effect {
          position: relative;
        }
        .trail-effect::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 0;
          height: 4px;
          background: #FF4081;
          transform: translateY(-50%);
          transition: width 0.5s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .trail-effect:hover::before {
          width: 100%;
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-[100] border-b-4 transition-all duration-500 backdrop-blur-sm
        ${isOpen ? 'bg-[#FFEB3B]/95 border-black shadow-[0_10px_30px_rgba(0,0,0,0.3)]' : 'bg-white/90 dark:bg-black/90 border-black dark:border-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]'}
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* Logo with advanced effects */}
            <div className="flex-shrink-0 flex items-center relative z-[102]">
              <a href="#" className="flex items-center text-3xl md:text-4xl font-display uppercase tracking-tighter select-none group transition-all duration-500 text-black dark:text-white shine-effect">
                <span className="inline-block group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-300">INOVAT</span>
                <span className="text-[#00BCD4] mx-1 inline-block relative">
                    {/* Rotating star with pulse rings */}
                    <span className="absolute inset-0 rounded-full bg-[#00BCD4] opacity-0 group-hover:opacity-100 group-hover:animate-[pulse-ring_1s_ease-out_infinite]"></span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mb-1 group-hover:animate-[rotate-continuous_2s_linear_infinite] transition-all duration-300">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                </span>
                <span className="inline-block group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">RS</span>
              </a>
            </div>

            {/* Controls with magnetic effect */}
            <div className="z-[102] flex items-center gap-4">
              
              {/* Theme Toggle with advanced interactions */}
              <button 
                onClick={toggleTheme}
                className={`
                  h-16 w-16 border-4 flex items-center justify-center relative overflow-hidden group liquid-button
                  transition-all duration-500
                  ${isOpen 
                    ? 'translate-x-24 rotate-180 opacity-0 pointer-events-none scale-0' 
                    : 'translate-x-0 rotate-0 opacity-100 scale-100 bg-white dark:bg-black text-black dark:text-white border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,188,212,1)] hover:-translate-x-2 hover:-translate-y-2 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px]'}
                `}
              >
                {/* Multiple animated layers */}
                <span className="absolute inset-0 bg-gradient-to-br from-[#00BCD4] to-[#FF4081] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
                <span className="absolute inset-0 bg-[#FFEB3B] opacity-0 group-hover:opacity-10 animate-pulse"></span>
                
                {/* Rotating border effect */}
                <span className="absolute inset-[-4px] border-2 border-[#00BCD4] opacity-0 group-hover:opacity-100 rounded-none group-hover:animate-[rotate-continuous_3s_linear_infinite]"></span>
                
                <span className="relative z-10 inline-block group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {isDark ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg">
                          <circle cx="12" cy="12" r="5"></circle>
                          <line x1="12" y1="1" x2="12" y2="3"></line>
                          <line x1="12" y1="21" x2="12" y2="23"></line>
                          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                          <line x1="1" y1="12" x2="3" y2="12"></line>
                          <line x1="21" y1="12" x2="23" y2="12"></line>
                          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                      </svg>
                  ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg">
                          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                      </svg>
                  )}
                </span>
              </button>

              {/* Hamburger with premium interactions */}
              <button
                onClick={() => isOpen ? handleClose() : setIsOpen(true)}
                className={`
                  group relative h-16 w-20 border-4 transition-all duration-500 outline-none flex items-center justify-center overflow-hidden liquid-button
                  ${isOpen 
                    ? 'bg-black text-white border-black shadow-[12px_12px_0px_0px_#FF4081] hover:shadow-[16px_16px_0px_0px_#FF4081] hover:scale-110 hover:rotate-6' 
                    : 'bg-white dark:bg-black text-black dark:text-white border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[14px_14px_0px_0px_rgba(255,235,59,1)] hover:-translate-x-2 hover:-translate-y-2 hover:scale-105 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95'}
                `}
              >
                {/* Animated background layers */}
                <span className="absolute inset-0 bg-gradient-to-br from-[#FFEB3B] via-[#FF4081] to-[#00BCD4] opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
                <span className={`absolute inset-0 ${isOpen ? 'bg-[#FF4081]' : 'bg-[#FFEB3B]'} opacity-0 group-hover:opacity-20 animate-pulse`}></span>
                
                {/* Hamburger lines with elastic animation */}
                <div className={`relative w-10 h-6 transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${isOpen ? 'rotate-180 scale-110' : 'group-hover:scale-125'}`}>
                  <span 
                    className={`absolute left-0 h-2 bg-current transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] rounded-full
                      ${isOpen ? 'top-1/2 -translate-y-1/2 rotate-45 w-full shadow-[0_0_10px_currentColor]' : 'top-0 w-full group-hover:w-2/3 group-hover:translate-x-2'}
                    `}
                  />
                  <span 
                    className={`absolute top-1/2 -translate-y-1/2 left-0 h-2 bg-current transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] rounded-full
                      ${isOpen ? 'opacity-0 scale-0 rotate-90' : 'w-full opacity-100 scale-100 group-hover:w-full'}
                    `}
                  />
                  <span 
                    className={`absolute left-0 h-2 bg-current transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] rounded-full
                      ${isOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45 w-full shadow-[0_0_10px_currentColor]' : 'bottom-0 w-full group-hover:w-2/3 group-hover:translate-x-2'}
                    `}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Premium Full Screen Menu */}
      <div 
        className={`fixed inset-0 z-[90] bg-gradient-to-br from-[#FFEB3B] via-[#FFEB3B] to-[#FFD700] pt-32 px-4 md:px-12 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] overflow-hidden
          ${isOpen && !isClosing ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-full opacity-0 scale-95'}
        `}
      >
        {/* Animated grain texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
        }}></div>

        {/* Dynamic geometric shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          {/* Floating circles */}
          <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-black rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-[15%] right-[10%] w-96 h-96 bg-[#FF4081] rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_reverse]" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-[40%] right-[5%] w-48 h-48 bg-[#00BCD4] rounded-full blur-2xl animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}></div>
          
          {/* Geometric doodles */}
          <svg className="absolute top-[15%] right-[15%] w-40 h-40 text-black opacity-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="50" cy="50" r="40" className="animate-[rotate-continuous_20s_linear_infinite]" />
            <circle cx="50" cy="50" r="30" className="animate-[rotate-continuous_15s_linear_infinite_reverse]" />
            <circle cx="50" cy="50" r="20" className="animate-[rotate-continuous_10s_linear_infinite]" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center relative z-10">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={handleClose}
                className={`
                  group flex items-center gap-6 md:gap-16 text-5xl md:text-7xl lg:text-8xl font-display uppercase tracking-tighter text-black transition-all duration-700 origin-left relative trail-effect
                  ${isOpen && !isClosing ? 'menu-item-enter' : isClosing ? 'menu-item-exit' : 'opacity-0'}
                `}
                style={{ 
                  animationDelay: isOpen && !isClosing 
                    ? `${100 + (index * 80)}ms` 
                    : isClosing 
                        ? `${(navItems.length - 1 - index) * 50}ms` 
                        : '0ms'
                }}
              >
                {/* Animated number with color */}
                <span 
                  className="text-2xl md:text-4xl font-mono font-black transition-all duration-500 group-hover:scale-150 group-hover:-rotate-12"
                  style={{ 
                    color: item.color,
                    textShadow: `4px 4px 0 rgba(0,0,0,0.2)`,
                  }}
                >
                  {item.number}
                </span>

                <div className="relative flex items-center flex-1">
                  {/* Animated indicator with multiple shapes */}
                  <div className="absolute -left-20 top-1/2 -translate-y-1/2 flex gap-2 scale-0 group-hover:scale-100 transition-all duration-500 ease-out group-hover:-left-28">
                    <span className="w-4 h-4 bg-[#FF0000] border-2 border-black rounded-full animate-pulse"></span>
                    <span className="w-4 h-4 bg-[#00BCD4] border-2 border-black rotate-45" style={{ animationDelay: '0.1s' }}></span>
                    <span className="w-4 h-4 bg-[#FFEB3B] border-2 border-black rounded-full" style={{ animationDelay: '0.2s' }}></span>
                  </div>
                  
                  {/* Text with gradient on hover */}
                  <span className="relative inline-block transition-all duration-500 group-hover:translate-x-16 group-hover:scale-105">
                    <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-black group-hover:via-[#FF4081] group-hover:to-black group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {item.name}
                    </span>
                    {/* Shadow text */}
                    <span className="absolute top-1 left-1 opacity-0 group-hover:opacity-30 transition-opacity duration-300 text-[#00BCD4]">
                      {item.name}
                    </span>
                  </span>

                  {/* Trailing line effect */}
                  <span 
                    className="absolute bottom-2 left-0 h-2 w-0 group-hover:w-full transition-all duration-700 ease-out"
                    style={{ backgroundColor: item.color }}
                  ></span>
                </div>

                {/* Hover particle effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <span className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
                </div>
              </a>
            ))}
          </div>

          {/* Enhanced footer */}
          <div className={`mt-16 md:mt-32 pt-12 border-t-4 border-black/30 flex flex-col md:flex-row justify-between items-start md:items-center font-mono font-bold text-black/80 transition-all duration-700
            ${isOpen && !isClosing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: isOpen && !isClosing ? '600ms' : '0ms' }}
          >
            <p className="text-lg hover:text-[#00BCD4] hover:scale-110 transition-all duration-300 cursor-pointer glitch-effect">
              EST. 2025 • WASTE PROTOCOL • FUTURE FORWARD
            </p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="text-lg hover:text-[#00BCD4] hover:scale-125 transition-all duration-500 hover:-translate-y-2 hover:rotate-3 relative shine-effect">
                INSTAGRAM
              </a>
              <a href="#" className="text-lg hover:text-[#FF4081] hover:scale-125 transition-all duration-500 hover:-translate-y-2 hover:-rotate-3 relative shine-effect">
                LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};