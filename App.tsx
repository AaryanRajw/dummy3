
import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Mission } from './components/Mission';
import { Process } from './components/Process';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
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
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let color = '#000000'; // Default
          
          switch (entry.target.id) {
            case 'hero':
              color = isDark ? '#00BCD4' : '#FF4081'; // Cyan/Pink for Hero
              break;
            case 'stats':
              color = '#000000'; // Black for Stats (since it's yellow)
              break;
            case 'mission':
              color = '#FFEB3B'; // Yellow for Mission
              break;
            case 'process':
              color = '#00BCD4'; // Cyan for Process
              break;
            case 'contact':
              color = '#FFEB3B'; // Yellow for Contact
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
      threshold: 0.5, // Trigger when 50% of section is visible
    });

    const sections = document.querySelectorAll('section, #hero');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-cyan selection:text-black transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      {/* Hero is Fixed, ID added for Observer */}
      <Hero />
      
      {/* Main content wrapper must be relative and have z-index to slide over fixed hero */}
      <div className="relative z-10 bg-white dark:bg-black transition-colors duration-300">
        <Stats />
        <Mission />
        <Process />
        <ContactForm />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default App;
