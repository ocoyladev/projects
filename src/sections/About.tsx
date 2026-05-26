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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

export const About: React.FC = () => {
  const { language } = useStore();
  const tr = t[language];

  return (
    <div className="min-h-screen py-16 px-4 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12 text-slate-900 dark:text-slate-50"
        >
          {tr.about.heading}
        </motion.h2>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <Briefcase size={20} className="text-blue-500" />
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{tr.about.experienceHeading}</h3>
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <Code2 size={20} className="text-purple-500" />
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{tr.about.skillsHeading}</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group, i) => (
              <motion.div key={group.category} custom={i} variants={fadeUp} initial="hidden" animate="visible">
                <SkillGroup group={group} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education & Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2.5 mb-6">
            <BookOpen size={20} className="text-emerald-500" />
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{tr.about.educationHeading}</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="bg-white/5 dark:bg-white/[0.03] border border-white/10 dark:border-white/5 rounded-xl p-4 hover:border-white/20 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded ${
                      edu.type === 'degree'
                        ? 'bg-blue-500/10 text-blue-500 dark:text-blue-400'
                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                    }`}
                  >
                    {edu.type === 'degree' ? tr.about.degree : tr.about.certification}
                  </span>
                  {edu.year && (
                    <span className="text-xs text-slate-400 dark:text-slate-600 shrink-0">{edu.year}</span>
                  )}
                </div>
                <p className="font-medium text-slate-800 dark:text-slate-200 text-sm leading-snug mb-1">{edu.name}</p>
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
