import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useStore } from '../store/useStore';
import { profile } from '../data/profile';
import { t } from '../data/translations';

interface HomeProps {
  setCurrentSection: (section: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentSection }) => {
  const { language } = useStore();
  const tr = t[language];

  // Short summary for mobile, full for tablet+
  const shortSummary =
    language === 'es'
      ? 'Especialista en Power Automate / RPA y Full Stack Dev con 5+ años automatizando flujos para el sector público.'
      : '5+ years engineering automated workflows and full-stack apps for the public sector. Power Automate / RPA + modern web.';

  return (
    <div className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden tech-grid">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 dark:bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-violet-600/10 dark:bg-violet-600/6 rounded-full blur-3xl" />
      </div>

      {/* Top-left tag */}
      <div className="absolute top-6 left-6 sm:left-8 md:left-10 z-10 flex items-center gap-2 section-tag text-slate-500 dark:text-slate-500">
        <span className="text-blue-500 dark:text-blue-400">{'//'}</span>
        <span>01 · home</span>
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 sm:px-8 md:px-12 py-16 sm:py-20 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 lg:gap-20 relative z-10">
        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-1 text-center md:text-left"
        >
          <p className="text-xs sm:text-sm font-medium text-blue-500 dark:text-blue-400 mb-2 sm:mb-3 tracking-widest uppercase">
            {tr.home.greeting}
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3 text-slate-900 dark:text-slate-50 tracking-tight leading-[1.05]">
            {profile.name}
            <span className="cursor-blink text-blue-500 dark:text-blue-400" />
          </h1>

          <div className="mb-4 sm:mb-5 leading-tight">
            <span className="text-lg sm:text-xl md:text-2xl font-semibold gradient-text">{profile.title}</span>
            <span className="text-slate-400 dark:text-slate-600 mx-2 hidden sm:inline">·</span>
            <span className="block sm:inline text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-400 mt-1 sm:mt-0">
              {profile.subtitle}
            </span>
          </div>

          {/* Short summary — mobile only */}
          <p className="md:hidden text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed max-w-md mx-auto">
            {shortSummary}
          </p>

          {/* Full summary — tablet+ */}
          <p className="hidden md:block text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed max-w-xl">
            {language === 'es' ? profile.summaryEs : profile.summary}
          </p>

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium mb-5 sm:mb-7">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {tr.home.availability}
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setCurrentSection('contact')}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-500/20 text-sm"
            >
              {tr.home.cta1}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setCurrentSection('projects')}
              className="px-5 sm:px-6 py-2.5 sm:py-3 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl font-medium transition-colors flex items-center gap-2 text-sm"
            >
              {tr.home.cta2}
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full blur-2xl opacity-25 dark:opacity-20 scale-110" />
            {/* Tech corner brackets */}
            <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-blue-500/60 rounded-tl-lg hidden md:block" />
            <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-violet-500/60 rounded-br-lg hidden md:block" />
            <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-white/10 dark:ring-white/8 shadow-2xl">
              <img
                src="/src/img/MAIN_PHOTO.jpg"
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll affordance */}
      <motion.button
        onClick={() => setCurrentSection('about')}
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        aria-label={tr.home.scrollHint}
      >
        <span className="text-[10px] sm:text-xs section-tag">{tr.home.scrollHint}</span>
        <ChevronDown size={16} />
      </motion.button>
    </div>
  );
};
