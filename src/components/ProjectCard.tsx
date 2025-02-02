import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer h-full"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-48">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="flex h-full">
                {/* Gallery Section */}
                <div className="w-1/2 p-6 border-r border-gray-200 dark:border-gray-700">
                  <div className="relative h-[400px] mb-4">
                    <img
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} main view`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      onClick={(e) => { e.stopPropagation(); previousImage(); }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {project.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                        className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                          currentImageIndex === index ? 'ring-2 ring-blue-600' : ''
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${project.title} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-1/2 p-6 overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold dark:text-white">{project.title}</h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 dark:text-white">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
                      >
                        <Github size={20} />
                        Source Code
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