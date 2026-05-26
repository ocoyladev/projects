import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { useStore } from '../store/useStore';
import { t } from '../data/translations';

interface ProjectCardProps {
  project: Project;
}

const GRADIENT_COMBOS = [
  'from-blue-600 to-indigo-700',
  'from-violet-600 to-purple-700',
  'from-emerald-600 to-teal-700',
  'from-orange-600 to-amber-700',
  'from-rose-600 to-pink-700',
];

function ImagePlaceholder({ title, index }: { title: string; index: number }) {
  const initials = title
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
  const gradient = GRADIENT_COMBOS[index % GRADIENT_COMBOS.length];

  return (
    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradient}`}>
      <span className="text-white/80 font-bold text-4xl tracking-widest select-none">{initials}</span>
    </div>
  );
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useStore();
  const tr = t[language];

  const hasImages = project.images.length > 0;

  const nextImage = () => setCurrentImageIndex((p) => (p + 1) % project.images.length);
  const prevImage = () => setCurrentImageIndex((p) => (p - 1 + project.images.length) % project.images.length);

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/8 rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:shadow-lg dark:hover:shadow-blue-500/5 transition-all duration-300 group"
        onClick={() => setIsOpen(true)}
      >
        {/* Thumbnail */}
        <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-white/5 flex-shrink-0">
          {hasImages ? (
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <ImagePlaceholder title={project.title} index={project.id} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-base font-semibold mb-1.5 text-slate-900 dark:text-slate-100">{project.title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed flex-1">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-500 rounded-md text-xs">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="bg-white dark:bg-[#0d0d1a] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[88vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row h-full max-h-[88vh]">
                {/* Gallery */}
                <div className="md:w-1/2 flex-shrink-0 bg-slate-100 dark:bg-black/20 relative">
                  <div className="relative h-56 md:h-full min-h-[200px]">
                    {hasImages ? (
                      <>
                        <img
                          src={project.images[currentImageIndex]}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        {project.images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                            >
                              <ChevronRight size={20} />
                            </button>
                          </>
                        )}
                      </>
                    ) : (
                      <ImagePlaceholder title={project.title} index={project.id} />
                    )}
                  </div>
                  {hasImages && project.images.length > 1 && (
                    <div className="flex gap-1.5 p-3 overflow-x-auto bg-black/10 dark:bg-black/20">
                      {project.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden transition-all ${
                            i === currentImageIndex ? 'ring-2 ring-blue-500 opacity-100' : 'opacity-50 hover:opacity-75'
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="md:w-1/2 p-6 overflow-y-auto">
                  <div className="flex justify-between items-start mb-5">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">{project.title}</h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors -mt-1 -mr-1"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-3">
                      {tr.projects.technologies}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <ExternalLink size={16} />
                        {tr.projects.liveDemo}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800 dark:bg-white/10 hover:bg-slate-700 dark:hover:bg-white/15 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <Github size={16} />
                        {tr.projects.viewCode}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
