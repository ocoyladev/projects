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
      accent: 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/8',
      iconColor: 'text-slate-700 dark:text-slate-300',
      hover: 'hover:border-slate-400 dark:hover:border-white/20',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: tr.contact.linkedin,
      href: profile.linkedin,
      accent: 'bg-blue-50 dark:bg-blue-500/5 border-blue-100 dark:border-blue-500/15',
      iconColor: 'text-blue-600 dark:text-blue-400',
      hover: 'hover:border-blue-400 dark:hover:border-blue-500/40',
    },
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      accent: 'bg-violet-50 dark:bg-violet-500/5 border-violet-100 dark:border-violet-500/15',
      iconColor: 'text-violet-600 dark:text-violet-400',
      hover: 'hover:border-violet-400 dark:hover:border-violet-500/40',
    },
    {
      icon: Award,
      label: 'Credly',
      value: tr.contact.credly,
      href: profile.credly,
      accent: 'bg-orange-50 dark:bg-orange-500/5 border-orange-100 dark:border-orange-500/15',
      iconColor: 'text-orange-600 dark:text-orange-400',
      hover: 'hover:border-orange-400 dark:hover:border-orange-500/40',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/8 dark:bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-600/8 dark:bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3 text-slate-900 dark:text-slate-50">{tr.contact.heading}</h2>
          <p className="text-sm text-slate-500 dark:text-slate-500">{tr.contact.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {contactCards.map(({ icon: Icon, label, value, href, accent, iconColor, hover }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${accent} ${hover}`}
              onClick={() => href && window.open(href, '_blank')}
            >
              <Icon className={`h-7 w-7 mb-4 ${iconColor}`} />
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-0.5">{label}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-500 truncate">{value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/src/file/RESUME.pdf"
            download
            className="flex items-center gap-2.5 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-500/20 text-sm"
          >
            <FileText className="h-4 w-4" />
            {tr.contact.downloadResume}
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
