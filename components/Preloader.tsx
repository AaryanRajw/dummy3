import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const loadingWords = [
  "INITIALIZING...",
  "COMPRESSING WASTE...",
  "CALIBRATING SCALES...",
  "DEPLOYING FLEET...",
  "GENERATING TOKENS...",
  "READY."
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [dimension, setDimension] = useState({ w: 0, h: 0 });

  useEffect(() => {
    setDimension({ w: window.innerWidth, h: window.innerHeight });
    
    // Smooth random increments for "realistic" load feel
    let currentProgress = 0;
    const interval = setInterval(() => {
        // Variable increment based on current progress
        const remaining = 100 - currentProgress;
        const jump = Math.ceil(Math.random() * (remaining / 5)) + 1;
        
        currentProgress += jump;
        
        if (currentProgress >= 100) {
            currentProgress = 100;
            clearInterval(interval);
            
            // Hold at 100 briefly before exit
            setTimeout(() => {
                setIsExiting(true);
                // Wait for animation to finish before unmounting
                setTimeout(onComplete, 1000); 
            }, 400);
        }
        
        setProgress(currentProgress);
        
        // Cycle words based on progress
        const totalWords = loadingWords.length;
        const newWordIndex = Math.floor((currentProgress / 100) * (totalWords - 1));
        setWordIndex(newWordIndex);

    }, 150); // Tick rate

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 2s linear infinite;
        }
        .loader-exit {
            transform: translateY(-100%);
            transition: transform 0.8s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .clip-text-image {
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            background-image: url('https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=2000&auto=format&fit=crop');
            background-size: cover;
            background-position: center;
        }
      `}</style>

      <div 
        className={`fixed inset-0 z-[9999] bg-[#FFEB3B] flex flex-col justify-between overflow-hidden cursor-wait
        ${isExiting ? 'loader-exit' : ''}`}
      >
        
        {/* TOP BAR: Marquee */}
        <div className="w-full border-b-4 border-black bg-black py-2 overflow-hidden">
            <div className="flex whitespace-nowrap animate-ticker">
                {Array(20).fill(" WAITING FOR INPUT // ").map((text, i) => (
                    <span key={i} className="text-white font-mono text-xs font-bold tracking-widest mx-2">
                        {text}
                    </span>
                ))}
            </div>
        </div>

        {/* CENTER: Massive Counter & Word */}
        <div className="flex-1 flex flex-col items-center justify-center relative w-full px-4">
            
            {/* Background Grid Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20" 
                 style={{backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '10vh 10vh'}}>
            </div>

            {/* The Percentage - Massive & Clipped */}
            <div className="relative z-10">
                <h1 className="text-[25vw] leading-none font-display font-black tracking-tighter text-black mix-blend-hard-light opacity-90">
                    {progress}
                    <span className="text-[5vw] align-top opacity-50">%</span>
                </h1>
            </div>

            {/* Dynamic Status Text */}
            <div className="absolute bottom-[20%] left-0 w-full text-center">
                 <div className="inline-block bg-black text-white px-4 py-2 font-mono text-sm md:text-xl font-bold uppercase tracking-widest transform -rotate-1 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                    [{loadingWords[wordIndex]}]
                 </div>
            </div>
        </div>

        {/* BOTTOM: Technical Footer */}
        <div className="w-full border-t-4 border-black p-4 md:p-8 flex justify-between items-end bg-[#FFEB3B] relative z-20">
            <div className="flex flex-col font-mono text-xs md:text-sm font-bold gap-1">
                <span>MEM: {Math.floor(progress * 12.4)}MB</span>
                <span>LAT: 40.7128° N</span>
                <span>LON: 74.0060° W</span>
            </div>
            
            {/* Barcode SVG */}
            <div className="hidden md:block opacity-80">
                <svg height="40" width="150" viewBox="0 0 150 40" fill="black">
                    <rect x="0" y="0" width="4" height="40" />
                    <rect x="8" y="0" width="2" height="40" />
                    <rect x="14" y="0" width="6" height="40" />
                    <rect x="24" y="0" width="2" height="40" />
                    <rect x="28" y="0" width="8" height="40" />
                    <rect x="40" y="0" width="2" height="40" />
                    <rect x="46" y="0" width="4" height="40" />
                    <rect x="54" y="0" width="2" height="40" />
                    <rect x="60" y="0" width="6" height="40" />
                    <rect x="70" y="0" width="2" height="40" />
                    <rect x="76" y="0" width="4" height="40" />
                    <rect x="84" y="0" width="6" height="40" />
                    <rect x="94" y="0" width="2" height="40" />
                    <rect x="100" y="0" width="8" height="40" />
                    <rect x="112" y="0" width="2" height="40" />
                    <rect x="118" y="0" width="4" height="40" />
                    <rect x="126" y="0" width="2" height="40" />
                    <rect x="132" y="0" width="6" height="40" />
                    <rect x="142" y="0" width="4" height="40" />
                </svg>
            </div>

            <div className="text-right font-mono text-xs md:text-sm font-bold">
                <span>INOVAT★RS</span><br/>
                <span className="opacity-50">SYS.VER.2.0.24</span>
            </div>
        </div>
        
        {/* Progress Bar (Bottom Border Growth) */}
        <div 
            className="absolute bottom-0 left-0 h-2 bg-black transition-all duration-100 ease-out z-30"
            style={{ width: `${progress}%` }}
        />

      </div>
    </>
  );
};