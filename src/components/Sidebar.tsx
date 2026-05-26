import React, { useState } from 'react';
import { Home, User, FolderGit2, Mail, Sun, Moon, Languages, Menu, X } from 'lucide-react';
import { useStore } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { t } from '../data/translations';

interface SidebarProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentSection, onSectionChange }) => {
  const { theme, setTheme, language, setLanguage } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const tr = t[language];

  const menuItems = [
    { id: 'home', icon: Home, label: tr.nav.home, tooltip: tr.nav.tooltipHome },
    { id: 'about', icon: User, label: tr.nav.about, tooltip: tr.nav.tooltipAbout },
    { id: 'projects', icon: FolderGit2, label: tr.nav.projects, tooltip: tr.nav.tooltipProjects },
    { id: 'contact', icon: Mail, label: tr.nav.contact, tooltip: tr.nav.tooltipContact },
  ];

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    setIsOpen(false);
  };

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleLanguage = () => setLanguage(language === 'en' ? 'es' : 'en');

  const sidebarContent = (
    <>
      {/* Logo / Name */}
      <div className="mb-8 hidden lg:block">
        <span className="text-lg font-bold gradient-text tracking-tight">ocudev</span>
      </div>

      <div className="flex-1 flex flex-col gap-1 mb-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = currentSection === item.id;
          return (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button
                onClick={() => handleSectionChange(item.id)}
                className={`p-3 rounded-lg transition-all flex items-center gap-3 w-full text-left ${
                  active
                    ? 'bg-blue-500/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Icon size={20} className={active ? 'text-blue-500' : ''} />
                <span className="md:hidden lg:inline text-sm">{item.label}</span>
                {active && (
                  <span className="md:hidden lg:flex ml-auto w-1.5 h-1.5 rounded-full bg-blue-500" />
                )}
              </button>
              <AnimatePresence>
                {hoveredItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    className="hidden md:flex lg:hidden absolute left-full ml-3 top-1/2 -translate-y-1/2 items-center gap-1.5 px-3 py-1.5 bg-slate-800 dark:bg-slate-900 text-slate-100 text-xs rounded-lg whitespace-nowrap z-50 shadow-xl border border-white/10"
                  >
                    {item.tooltip}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-1">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200 flex items-center gap-3 transition-all w-full text-left"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          <span className="md:hidden lg:inline text-sm">
            {theme === 'light' ? tr.nav.darkMode : tr.nav.lightMode}
          </span>
        </button>
        <button
          onClick={toggleLanguage}
          className="p-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200 flex items-center gap-3 transition-all w-full text-left"
        >
          <Languages size={20} />
          <span className="md:hidden lg:inline text-sm">{tr.nav.language}</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-xl shadow-blue-500/30"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-20 lg:w-64 bg-white dark:bg-[#0d0d1a] border-r border-slate-200 dark:border-white/5 flex-col items-stretch py-8 px-3 z-40">
        {sidebarContent}
      </aside>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="md:hidden fixed bottom-24 right-6 bg-white dark:bg-[#0d0d1a] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl p-4 z-50 min-w-[200px]"
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
