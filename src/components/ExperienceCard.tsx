import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-indigo-500/30 to-transparent last:hidden" />
      {/* Timeline dot */}
      <div className="absolute left-[-5px] top-1.5 w-[11px] h-[11px] rounded-full bg-blue-500 ring-2 ring-blue-500/30 dark:ring-blue-500/20" />

      <div className="bg-white/5 dark:bg-white/[0.03] border border-white/10 dark:border-white/5 rounded-xl p-5 hover:border-blue-500/30 transition-colors duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-base">{experience.role}</h4>
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">{experience.company}</span>
          </div>
          <div className="text-right shrink-0">
            <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">{experience.period}</p>
            <p className="text-xs text-slate-400 dark:text-slate-600">{experience.location}</p>
          </div>
        </div>
        <ul className="space-y-2">
          {experience.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <span className="text-blue-500 dark:text-blue-500 mt-0.5 shrink-0">▸</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
