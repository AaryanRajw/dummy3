import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Mission } from './components/Mission';
import { Process } from './components/Process';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  // Toggle Class on HTML element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Dynamic Scrollbar Color Logic
  useEffect(() => {
    if (isLoading) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let color = '#000000';
          
          switch (entry.target.id) {
            case 'hero':
              color = isDark ? '#00BCD4' : '#FF4081';
              break;
            case 'stats':
              color = '#000000';
              break;
            case 'mission':
              color = '#FFEB3B';
              break;
            case 'process':
              color = '#00BCD4';
              break;
            case 'contact':
              color = '#FFEB3B';
              break;
            case 'faq':
               color = isDark ? '#ffffff' : '#000000';
               break;
            default:
              color = isDark ? '#ffffff' : '#000000';
          }
          
          document.documentElement.style.setProperty('--scrollbar-thumb', color);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      threshold: 0.9,
    });

    setTimeout(() => {
      const sections = document.querySelectorAll('section, #hero');
      sections.forEach((section) => observer.observe(section));
    }, 100);

    return () => observer.disconnect();
  }, [isDark, isLoading]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-cyan selection:text-black transition-colors duration-300">
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          <Hero />
          <div className="relative z-10 bg-white dark:bg-black transition-colors duration-300">
            <Stats />
            <Mission />
            <Process />
            <ContactForm />
            <FAQ />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default App;