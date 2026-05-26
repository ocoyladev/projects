import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useStore } from './store/useStore';
import { Sidebar } from './components/Sidebar';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

const SECTIONS = ['home', 'about', 'projects', 'contact'] as const;
type Section = (typeof SECTIONS)[number];

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const { theme } = useStore();
  const sectionRefs = useRef<Record<Section, HTMLElement | null>>({
    home: null,
    about: null,
    projects: null,
    contact: null,
  });

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
    const observer = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;
        for (const e of entries) {
          if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) {
            best = e;
          }
        }
        if (best) {
          const id = (best.target as HTMLElement).dataset.section as Section;
          if (id) setCurrentSection(id);
        }
      },
      { threshold: [0.4, 0.6, 0.8] }
    );

    SECTIONS.forEach((s) => {
      const el = sectionRefs.current[s];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((s: string) => {
    const target = sectionRefs.current[s as Section];
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-[#070710] transition-colors duration-300">
      <Sidebar currentSection={currentSection} onSectionChange={goTo} />
      <main className="md:pl-20 lg:pl-64 h-[100dvh] overflow-y-auto snap-y snap-proximity scroll-smooth tech-scroll">
        {(
          [
            { id: 'home' as const, node: <Home setCurrentSection={goTo} /> },
            { id: 'about' as const, node: <About /> },
            { id: 'projects' as const, node: <Projects /> },
            { id: 'contact' as const, node: <Contact /> },
          ]
        ).map(({ id, node }) => (
          <section
            key={id}
            ref={(el) => (sectionRefs.current[id] = el)}
            data-section={id}
            className="snap-start min-h-[100dvh] w-full"
          >
            {node}
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
