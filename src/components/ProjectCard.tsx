import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { useStore } from '../store/useStore';
import { t } from '../data/translations';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const GRADIENT_COMBOS = [
  'from-blue-600 via-indigo-700 to-violet-700',
  'from-violet-600 via-purple-700 to-fuchsia-700',
  'from-emerald-600 via-teal-700 to-cyan-700',
  'from-orange-600 via-amber-700 to-rose-700',
  'from-rose-600 via-pink-700 to-fuchsia-700',
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
    <div className={`relative w-full h-full flex items-center justify-center bg-gradient-to-br ${gradient}`}>
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <span className="text-white/90 font-bold text-4xl tracking-widest select-none relative z-10 font-mono">
        {initials}
      </span>
    </div>
  );
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useStore();
  const tr = t[language];

  const hasImages = project.images.length > 0;
  const padded = String(index).padStart(2, '0');

  const nextImage = () => setCurrentImageIndex((p) => (p + 1) % project.images.length);
  const prevImage = () =>
    setCurrentImageIndex((p) => (p - 1 + project.images.length) % project.images.length);

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 320, damping: 24 }}
        className="relative bg-white dark:bg-white/[0.025] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col group hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all duration-300"
        onClick={() => setIsOpen(true)}
      >
        {/* Top bar with mono index */}
        <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-slate-100 dark:border-white/5">
          <span className="section-tag text-slate-400 dark:text-slate-600">
            <span className="text-blue-500/70 dark:text-blue-400/70">{'<'}</span>
            {padded}
            <span className="text-blue-500/70 dark:text-blue-400/70">{' />'}</span>
          </span>
          <ArrowUpRight
            size={14}
            className="text-slate-400 dark:text-slate-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </div>

        {/* Thumbnail */}
        <div className="relative h-40 sm:h-44 overflow-hidden bg-slate-100 dark:bg-white/5 flex-shrink-0">
          {hasImages ? (
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <ImagePlaceholder title={project.title} index={project.id} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="p-4 sm:p-5 flex flex-col flex-1">
          <h3 className="text-base font-semibold mb-1.5 text-slate-900 dark:text-slate-100 group-hover:gradient-text transition-all">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 leading-relaxed flex-1">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-md text-[10px] sm:text-xs font-medium font-mono"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-500 rounded-md text-[10px] sm:text-xs font-mono">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="bg-white dark:bg-[#0d0d1a] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                {/* Gallery */}
                <div className="md:w-1/2 flex-shrink-0 bg-slate-100 dark:bg-black/30 relative">
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
                            i === currentImageIndex
                              ? 'ring-2 ring-blue-500 opacity-100'
                              : 'opacity-50 hover:opacity-75'
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
                  <div className="flex justify-between items-start mb-1">
                    <span className="section-tag text-slate-400 dark:text-slate-600">
                      <span className="text-blue-500/70 dark:text-blue-400/70">{'<'}</span>
                      {padded}
                      <span className="text-blue-500/70 dark:text-blue-400/70">{' />'}</span>
                    </span>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors -mt-1 -mr-1"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                    {project.title}
                  </h2>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="section-tag text-slate-400 dark:text-slate-600 mb-3">
                      {tr.projects.technologies}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-md text-xs font-medium font-mono"
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
