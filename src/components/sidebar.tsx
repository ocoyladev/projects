import React, { useState } from 'react';
import { Home, User, FolderGit2, Mail, Sun, Moon, Languages, Menu, X } from 'lucide-react';
import { useStore } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentSection, onSectionChange }) => {
  const { theme, setTheme, language, setLanguage } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { 
      id: 'home', 
      icon: Home, 
      label: language === 'en' ? 'Home' : 'Inicio',
      tooltip: language === 'en' ? 'Welcome Section' : 'Sección de Bienvenida'
    },
    { 
      id: 'about', 
      icon: User, 
      label: language === 'en' ? 'About' : 'Sobre mí',
      tooltip: language === 'en' ? 'About Me & Skills' : 'Sobre Mí y Habilidades'
    },
    { 
      id: 'projects', 
      icon: FolderGit2, 
      label: language === 'en' ? 'Projects' : 'Proyectos',
      tooltip: language === 'en' ? 'My Portfolio Projects' : 'Mis Proyectos'
    },
    { 
      id: 'contact', 
      icon: Mail, 
      label: language === 'en' ? 'Contact' : 'Contacto',
      tooltip: language === 'en' ? 'Get in Touch' : 'Contactame'
    },
  ];

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    setIsOpen(false);
  };

  const sidebarContent = (
    <>
      <div className="flex-1 flex flex-col gap-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="relative" onMouseEnter={() => setHoveredItem(item.id)} onMouseLeave={() => setHoveredItem(null)}>
              <button
                onClick={() => handleSectionChange(item.id)}
                className={`p-3 rounded-xl transition-all flex items-center gap-3 w-full ${
                  currentSection === item.id
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Icon size={24} />
                <span className="md:hidden lg:inline">{item.label}</span>
              </button>
              <AnimatePresence>
                {hoveredItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-800 text-white text-sm rounded whitespace-nowrap z-50"
                  >
                    {item.tooltip}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="p-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-3"
        >
          {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          <span className="md:hidden lg:inline">
            {theme === 'light' ? (language === 'en' ? 'Dark Mode' : 'Modo Oscuro') : (language === 'en' ? 'Light Mode' : 'Modo Claro')}
          </span>
        </button>
        <button
          onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          className="p-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-3"
        >
          <Languages size={24} />
          <span className="md:hidden lg:inline">{language === 'en' ? 'Español' : 'English'}</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 h-full w-20 lg:w-64 bg-white dark:bg-gray-900 shadow-lg flex-col items-stretch py-8 px-4 z-40">
        {sidebarContent}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="md:hidden fixed bottom-24 right-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl p-4 z-40 min-w-[200px]"
          >
            {sidebarContent}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};