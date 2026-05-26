import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Cloud, Cpu, Server, Terminal, Globe, Layers } from 'lucide-react';
import { useStore } from '../store/useStore';
import { profile } from '../data/profile';
import { t } from '../data/translations';

interface HomeProps {
  setCurrentSection: (section: string) => void;
}

const BG_ICONS = [
  { Icon: Code2, x: '15%', y: '20%' },
  { Icon: Database, x: '75%', y: '15%' },
  { Icon: Cloud, x: '85%', y: '65%' },
  { Icon: Cpu, x: '10%', y: '70%' },
  { Icon: Server, x: '50%', y: '8%' },
  { Icon: Terminal, x: '55%', y: '80%' },
  { Icon: Globe, x: '30%', y: '85%' },
  { Icon: Layers, x: '90%', y: '35%' },
];

export const Home: React.FC<HomeProps> = ({ setCurrentSection }) => {
  const { language } = useStore();
  const tr = t[language];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 dark:bg-indigo-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-violet-600/8 dark:bg-violet-600/4 rounded-full blur-3xl" />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        {BG_ICONS.map(({ Icon, x, y }, i) => (
          <motion.div
            key={i}
            className="absolute opacity-[0.04] dark:opacity-[0.04] text-slate-900 dark:text-slate-100"
            style={{ left: x, top: y }}
            animate={{ scale: [1, 1.15, 1], rotate: [0, 6, -6, 0] }}
            transition={{ duration: 9 + i, repeat: Infinity, delay: i * 0.7 }}
          >
            <Icon size={72} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-1 text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm font-medium text-blue-500 dark:text-blue-400 mb-3 tracking-widest uppercase"
          >
            {tr.home.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 text-slate-900 dark:text-slate-50 tracking-tight"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <span className="text-xl md:text-2xl font-semibold gradient-text">{profile.title}</span>
            <span className="text-slate-400 dark:text-slate-500 mx-2">·</span>
            <span className="text-lg md:text-xl text-slate-500 dark:text-slate-400">{profile.subtitle}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            {language === 'es' ? profile.summaryEs : profile.summary}
          </motion.p>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {tr.home.availability}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setCurrentSection('contact')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-500/20 text-sm"
            >
              {tr.home.cta1}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setCurrentSection('projects')}
              className="px-6 py-3 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl font-medium transition-colors flex items-center gap-2 text-sm"
            >
              {tr.home.cta2}
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full blur-2xl opacity-20 dark:opacity-15 scale-110" />
            <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-white/10 dark:ring-white/5 shadow-2xl">
              <img
                src="/src/img/MAIN_PHOTO.jpg"
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600 text-xs"
      >
        <span>{tr.home.scrollHint}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent dark:from-slate-600"
        />
      </motion.div>
    </div>
  );
};
