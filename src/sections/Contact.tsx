import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Award } from 'lucide-react';
import { profile } from '../data/profile';
import { useStore } from '../store/useStore';
import { t } from '../data/translations';

export const Contact: React.FC = () => {
  const { language } = useStore();
  const tr = t[language];

  const contactCards = [
    {
      icon: Github,
      label: 'GitHub',
      value: tr.contact.github,
      href: profile.github,
      accent: 'bg-white/60 dark:bg-white/[0.03] border-slate-200 dark:border-white/10',
      iconColor: 'text-slate-700 dark:text-slate-300',
      hover: 'hover:border-slate-400 dark:hover:border-white/20',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: tr.contact.linkedin,
      href: profile.linkedin,
      accent: 'bg-blue-50/60 dark:bg-blue-500/[0.06] border-blue-100 dark:border-blue-500/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
      hover: 'hover:border-blue-400 dark:hover:border-blue-500/50',
    },
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      accent: 'bg-violet-50/60 dark:bg-violet-500/[0.06] border-violet-100 dark:border-violet-500/20',
      iconColor: 'text-violet-600 dark:text-violet-400',
      hover: 'hover:border-violet-400 dark:hover:border-violet-500/50',
    },
    {
      icon: Award,
      label: 'Credly',
      value: tr.contact.credly,
      href: profile.credly,
      accent: 'bg-orange-50/60 dark:bg-orange-500/[0.06] border-orange-100 dark:border-orange-500/20',
      iconColor: 'text-orange-600 dark:text-orange-400',
      hover: 'hover:border-orange-400 dark:hover:border-orange-500/50',
    },
  ];

  return (
    <div className="relative min-h-[100dvh] w-full flex items-center justify-center px-6 sm:px-8 md:px-12 py-16 sm:py-20 overflow-hidden tech-grid">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 sm:w-80 h-72 sm:h-80 bg-blue-600/8 dark:bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 sm:w-80 h-72 sm:h-80 bg-violet-600/8 dark:bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      {/* Top-left tag */}
      <div className="absolute top-6 left-6 sm:left-8 md:left-10 z-10 flex items-center gap-2 section-tag text-slate-500 dark:text-slate-500">
        <span className="text-blue-500 dark:text-blue-400">{'//'}</span>
        <span>04 · contact</span>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-slate-900 dark:text-slate-50">
            {tr.contact.heading}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-500">{tr.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {contactCards.map(({ icon: Icon, label, value, href, accent, iconColor, hover }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${accent} ${hover}`}
              onClick={() => href && window.open(href, '_blank')}
            >
              <Icon className={`h-5 w-5 sm:h-6 sm:w-6 mb-3 ${iconColor}`} />
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-sm mb-0.5">
                {label}
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-500 truncate">{value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="flex justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/src/file/RESUME.pdf"
            download
            className="flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-500/20 text-sm"
          >
            <FileText className="h-4 w-4" />
            {tr.contact.downloadResume}
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
