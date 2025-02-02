import React, { useState, useEffect, useRef } from 'react';
import { useStore } from './store/useStore';
import { Sidebar } from './components/Sidebar';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const { theme } = useStore();
  const sectionsRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(Date.now());
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTime.current < 1000) return;
      lastScrollTime.current = now;

      const sections = ['home', 'about', 'projects', 'contact'];
      const currentIndex = sections.indexOf(currentSection);
      
      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        setCurrentSection(sections[currentIndex + 1]);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentSection(sections[currentIndex - 1]);
      }
    };

    const sectionElement = sectionsRef.current;
    if (sectionElement) {
      sectionElement.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentSection]);

  const sections = {
    home: <Home />,
    about: <About />,
    projects: <Projects />,
    contact: <Contact />,
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Sidebar currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main className="md:pl-20 lg:pl-64" ref={sectionsRef}>
        {sections[currentSection as keyof typeof sections]}
      </main>
    </div>
  );
}

export default App;