import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useStore } from '../store/useStore';
import { t } from '../data/translations';

export const Projects: React.FC = () => {
  const { language } = useStore();
  const tr = t[language];

  return (
    <div className="relative min-h-[100dvh] w-full py-20 sm:py-24 px-6 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          <div className="flex items-center gap-2 section-tag text-slate-500 dark:text-slate-500 mb-2">
            <span className="text-blue-500 dark:text-blue-400">{'//'}</span>
            <span>03 · projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50">
            {tr.projects.heading}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="h-full"
            >
              <ProjectCard project={project} index={i + 1} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
