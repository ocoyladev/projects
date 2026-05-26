import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, BookOpen, Award } from 'lucide-react';
import { useStore } from '../store/useStore';
import { experience } from '../data/experience';
import { skillGroups } from '../data/skills';
import { education } from '../data/education';
import { t } from '../data/translations';
import { ExperienceCard } from '../components/ExperienceCard';
import { SkillGroup } from '../components/SkillGroup';

export const About: React.FC = () => {
  const { language } = useStore();
  const tr = t[language];

  return (
    <div className="relative min-h-[100dvh] w-full py-20 sm:py-24 px-6 sm:px-8 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          <div className="flex items-center gap-2 section-tag text-slate-500 dark:text-slate-500 mb-2">
            <span className="text-blue-500 dark:text-blue-400">{'//'}</span>
            <span>02 · about</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50">
            {tr.about.heading}
          </h2>
        </motion.div>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <Briefcase size={18} className="text-blue-500" />
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200">
              {tr.about.experienceHeading}
            </h3>
          </div>
          <div>
            {experience.map((exp, i) => (
              <ExperienceCard key={i} experience={exp} index={i} />
            ))}
          </div>
        </motion.section>

        {/* Technical Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <Code2 size={18} className="text-purple-500" />
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200">
              {tr.about.skillsHeading}
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <SkillGroup group={group} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2.5 mb-6">
            <BookOpen size={18} className="text-emerald-500" />
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200">
              {tr.about.educationHeading}
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white/60 dark:bg-white/[0.03] border border-slate-200 dark:border-white/8 rounded-xl p-4 hover:border-blue-400 dark:hover:border-white/20 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span
                    className={`section-tag px-2 py-0.5 rounded ${
                      edu.type === 'degree'
                        ? 'bg-blue-500/10 text-blue-500 dark:text-blue-400'
                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                    }`}
                  >
                    {edu.type === 'degree' ? tr.about.degree : tr.about.certification}
                  </span>
                  {edu.year && (
                    <span className="text-xs text-slate-400 dark:text-slate-600 shrink-0 font-mono">{edu.year}</span>
                  )}
                </div>
                <p className="font-medium text-slate-800 dark:text-slate-200 text-sm leading-snug mb-1">
                  {edu.name}
                </p>
                <div className="flex items-center gap-1.5">
                  <Award size={12} className="text-slate-400 dark:text-slate-600" />
                  <p className="text-xs text-slate-500 dark:text-slate-500">{edu.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};
