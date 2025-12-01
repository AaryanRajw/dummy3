import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [editedImageUri, setEditedImageUri] = useState<string | null>(null);
  const [isEditingImage, setIsEditingImage] = useState(false);

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

  const editCollageImage = async (e: React.MouseEvent) => {
    e.preventDefault();
     if (!process.env.API_KEY) {
        alert("API Key not found");
        return;
    }
    try {
        setIsEditingImage(true);
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        // Use the original image from the design
        const imageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6CEBdkHw3pM6xPP02KwPbGWTsdsQYSq5ibopWwCZKKIPnk8SpiXNDWsP27k7iJmzJ1mc6l1IHznR-9ni-sV1A3kGj1jDhbKA1U54qIJwUdLxuNEQv0LarSLsZzQh5ZrsdqGAE4kEAAXW4dE5NsY3HoqulzIdTPPZDiU4dGO5YbCurrWL7h7PwpFsaM20adip9OctjDUMzTi4yTZPwn6PRSBrBKAEI5JNROOV9EKOD3WEGx3oglW2HGPkF4l5YvqP0uwVC3Vyfh-Y';
        
        const imageResp = await fetch(imageUrl);
        const imageBlob = await imageResp.blob();
        const arrayBuffer = await imageBlob.arrayBuffer();
        const base64String = btoa(
            new Uint8Array(arrayBuffer)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
                parts: [
                    {
                        inlineData: {
                            data: base64String,
                            mimeType: 'image/jpeg',
                        },
                    },
                    {
                        text: 'Turn this trash into high-tech, futuristic sustainable building materials and neatly stacked cardboard infrastructure. Cyberpunk aesthetic.',
                    },
                ],
            },
        });
        
        if (response.candidates && response.candidates[0].content.parts) {
             for (const part of response.candidates[0].content.parts) {
                if (part.inlineData) {
                    const base64 = part.inlineData.data;
                    const newImageUrl = `data:image/png;base64,${base64}`;
                    setEditedImageUri(newImageUrl);
                    break;
                }
            }
        }

    } catch (error) {
        console.error("Image edit failed", error);
        alert("Failed to edit image. Check console.");
    } finally {
        setIsEditingImage(false);
    }
  }

  // Use edited image or default
  const displayImage = editedImageUri || "https://lh3.googleusercontent.com/aida-public/AB6AXuC6CEBdkHw3pM6xPP02KwPbGWTsdsQYSq5ibopWwCZKKIPnk8SpiXNDWsP27k7iJmzJ1mc6l1IHznR-9ni-sV1A3kGj1jDhbKA1U54qIJwUdLxuNEQv0LarSLsZzQh5ZrsdqGAE4kEAAXW4dE5NsY3HoqulzIdTPPZDiU4dGO5YbCurrWL7h7PwpFsaM20adip9OctjDUMzTi4yTZPwn6PRSBrBKAEI5JNROOV9EKOD3WEGx3oglW2HGPkF4l5YvqP0uwVC3Vyfh-Y";

  return (
    <div id="hero" ref={heroRef} className="relative min-h-screen bg-white dark:bg-[#121212] flex items-center pt-24 pb-20 lg:pt-0 lg:pb-0 overflow-hidden transition-colors duration-300">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div aria-hidden="true" className="absolute top-1/4 left-8 md:left-16 text-[#FFEB3B] text-4xl transform -rotate-12 opacity-80 animate-random-float pointer-events-none z-0">★</div>
      <div aria-hidden="true" className="absolute top-1/3 right-8 md:right-16 text-[#FF4081] text-2xl z-0 pointer-events-none animate-random-pop">
        <svg className="transform rotate-45" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="currentColor" strokeWidth="3"></path><path d="M6 6L18 18" stroke="currentColor" strokeWidth="3"></path></svg>
      </div>
      <div aria-hidden="true" className="absolute bottom-1/4 left-10 md:left-20 text-[#00BCD4] z-0 pointer-events-none animate-random-wiggle">
        <svg fill="none" height="30" viewBox="0 0 42 42" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M2 21L21 40L40 21L21 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
      </div>
      <div aria-hidden="true" className="absolute bottom-10 right-10 md:right-24 text-[#FFEB3B] text-5xl transform rotate-12 z-0 pointer-events-none animate-bounce">★</div>
      
      {/* Grid Background */}
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

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
            
            {/* LEFT COLUMN: TEXT */}
            <div className="text-center lg:text-left relative z-20">
                <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-black dark:text-white animate-sudden">
                    TRANSFORM<br/>WASTE INTO<br/>INFRASTRUCTURE
                </h2>
                
                {/* Decorative Underline */}
                <div className="mt-4 flex justify-center lg:justify-start">
                    <div className="w-2/3 h-2 bg-[#00BCD4] animate-[width_1s_ease-out]"></div>
                </div>

                <p className="mt-8 max-w-lg mx-auto lg:mx-0 text-gray-600 dark:text-gray-400 font-mono text-lg font-bold">
                    We innovate at the intersection of sustainability and technology, converting today's waste into the building blocks of tomorrow's world.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <a href="#mission" className="w-full sm:w-auto bg-[#00BCD4] text-black font-display text-xl uppercase tracking-wider py-4 px-8 rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2 group">
                        <span>Our Mission</span>
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    <a href="#process" className="w-full sm:w-auto bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-mono font-bold py-4 px-8 rounded-none border-2 border-transparent hover:border-black dark:hover:border-white transition-all">
                        See Projects
                    </a>
                </div>
            </div>

            {/* RIGHT COLUMN: IMAGES */}
            <div className="relative h-full flex items-center justify-center p-4 perspective-1000">
                <div 
                    className="relative w-[300px] h-[450px] sm:w-[350px] sm:h-[525px] group"
                    style={{ transform: `rotateY(${offset * 0.05}deg) rotateX(${offset * 0.02}deg)` }}
                >
                    {/* Decoration Border */}
                    <div className="absolute -inset-4 border-4 border-black dark:border-white rounded-lg transform rotate-[-3deg] transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-105 z-0"></div>
                    
                    {/* Main Image */}
                    <div className="absolute inset-0 w-full h-full rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1 overflow-hidden z-10 bg-gray-200">
                         <img 
                            alt="Plastic bottles and other waste materials washed up on a sandy shore with green plants." 
                            className={`w-full h-full object-cover transition-opacity duration-500 ${isEditingImage ? 'opacity-50' : 'opacity-100'}`}
                            src={displayImage}
                        />
                        {isEditingImage && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 border-4 border-black border-t-[#00BCD4] rounded-full animate-spin"></div>
                            </div>
                        )}
                    </div>

                    {/* Floating Image 1 (Top Right) */}
                    <div className="absolute top-4 -right-12 w-32 h-24 bg-white dark:bg-[#121212] p-1.5 rounded-md shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] transform rotate-6 transition-transform duration-300 group-hover:rotate-12 group-hover:-translate-x-4 z-20 animate-random-float">
                        <img alt="An overflowing black trash can with various food containers and waste." className="w-full h-full object-cover rounded-sm border border-black/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjMaDPXMwVvvN8MhEhZvsZg3K0Cipo87MR4HGw4YcGiIYV8nlrfsvp0z2SCw6TPQZ_W1NYkFYSFgAX-Ahb4Stb5pN2Kob8-zYSTogubmp5RJwj54nndyHU49OMwBYPRevUkHwLshBifo_hMcOVAAZ8s1--alD93XpLYvDloyxSh-KAQ9cu-ulpBMc5zzsG8lkRohSccNrfeR6106A4sMCwmBl9gyiFPz1zvgBJeUh9VgG0Xm6Bb7d8wnQihXVciQQtVxHqRttB-E0"/>
                    </div>

                    {/* Floating Image 2 (Bottom Left) */}
                    <div className="absolute bottom-16 -left-16 w-40 h-28 bg-white dark:bg-[#121212] p-1.5 rounded-md shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] transform -rotate-12 transition-transform duration-300 group-hover:-rotate-15 group-hover:translate-y-2 z-20 animate-[random-float_4s_ease-in-out_infinite_reverse]">
                        <img alt="Leaves and discarded items in a public park space." className="w-full h-full object-cover rounded-sm border border-black/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARTlLq7SvLJ_mdMLdQBusJkJCt_vMKy3_L8evuL_N_CSDwEfq-QeesDR7Xr6F1pphXeVcjiqBM6Do5UCxKSKu9JwJVILN9TYYViOnon_ioohazfQ1F3viYnP-gHccuCkMOePayNQxHgDouSTIwwsYYvjnJ-i7EiB2zonSfgcbRe5OJTgeqcE5zQ-h70-3DGnh8QpRRMTGfxnqiKb0sHQcewYXEgIUCbaGpVfHM2TW24WEV-vjIflt_allQ1tYayiFEVW2nCKmcMwA"/>
                    </div>

                    {/* Action Button */}
                    <button 
                        onClick={editCollageImage}
                        disabled={isEditingImage}
                        className="absolute bottom-4 right-4 bg-black/80 hover:bg-black text-white text-xs font-mono tracking-widest py-2 px-4 rounded border border-white/50 backdrop-blur-sm transition-all z-30 hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                        {isEditingImage ? (
                            <>GENERATING...</>
                        ) : (
                            <>
                                REFINE WASTE
                                <span className="w-2 h-2 bg-[#00BCD4] rounded-full animate-pulse"></span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
      </div>
      
      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-4 left-0 right-0 p-4 lg:p-8 z-20 hidden lg:block pointer-events-none">
        <div className="container mx-auto">
            <div className="flex items-center space-x-3 animate-bounce">
                <div className="w-8 h-12 border-2 border-black dark:border-white rounded-full relative flex justify-center pt-2">
                    <span className="text-black dark:text-white">↓</span>
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-black dark:text-white">Scroll to Explore</span>
            </div>
        </div>
      </div>

    </div>
  );
};
