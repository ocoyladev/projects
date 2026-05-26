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
    <div className="min-h-screen py-16 px-4 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-10 text-slate-900 dark:text-slate-50"
        >
          {tr.projects.heading}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
