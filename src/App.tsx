import React, { useState, useEffect, useRef } from 'react';
import { useStore } from './store/useStore';
import { Sidebar } from './components/Sidebar';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

const SECTIONS = ['home', 'about', 'projects', 'contact'] as const;
type Section = typeof SECTIONS[number];

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const { theme } = useStore();
  const lastScrollTime = useRef(Date.now());

  useEffect(() => {
    const html = document.documentElement;
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (theme === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
      if (meta) meta.setAttribute('content', 'dark');
      localStorage.setItem('color-scheme', 'dark');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
      if (meta) meta.setAttribute('content', 'light');
      localStorage.setItem('color-scheme', 'light');
    }
  }, [theme]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime.current < 600) return;
      lastScrollTime.current = now;

      const currentIndex = SECTIONS.indexOf(currentSection);
      if (e.deltaY > 0 && currentIndex < SECTIONS.length - 1) {
        setCurrentSection(SECTIONS[currentIndex + 1]);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentSection(SECTIONS[currentIndex - 1]);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 600) return;
      const currentIndex = SECTIONS.indexOf(currentSection);
      if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentIndex < SECTIONS.length - 1) {
        lastScrollTime.current = now;
        setCurrentSection(SECTIONS[currentIndex + 1]);
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentIndex > 0) {
        lastScrollTime.current = now;
        setCurrentSection(SECTIONS[currentIndex - 1]);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection]);

  const sectionComponents: Record<Section, React.ReactNode> = {
    home: <Home setCurrentSection={setCurrentSection} />,
    about: <About />,
    projects: <Projects />,
    contact: <Contact />,
  };

  return (
    <div className="bg-slate-50 dark:bg-[#080810] min-h-screen transition-colors duration-300">
      <Sidebar currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main className="md:pl-20 lg:pl-64 min-h-screen">
        {sectionComponents[currentSection]}
      </main>
    </div>
  );
}

export default App;
