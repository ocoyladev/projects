import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "DH Odonto",
      shortDescription: "React app with API integration, validations, and theme-based styling.",
      description: "The app is a React-based solution meeting all exam requirements: API integration, form validations, and theme-based styling (dark theme, light theme). It includes a favorites feature, error handling, and reusable components. Extras like enhanced validations and performance optimizations were implemented to improve functionality and user experience.",
      technologies: ["React", "Node.js", "JS", "CSS", "HTML"],
      images: [
        "/src/img/dhodonto1.png",
        "/src/img/dhodonto2.png",
        "/src/img/dhodonto3.png",
        "/src/img/dhodonto4.png"
      ],
      liveUrl: "https://ctd-esp-fe3-final-flame-phi.vercel.app/favs",
      githubUrl: "https://github.com/ocoyladev/ctd-esp-fe3-final"
    },
    {
      id: 2,
      title: "NoteApp",
      shortDescription: "Full-stack note-taking app with SPA architecture.",
      description: "Full-stack web app for managing notes, including creating, editing, deleting, and archiving. The app have a Single Page Application (SPA) with a REST API backend, layered architecture, and a relational database using an ORM. To use the app you need to access with this credentials: user@try.me | P@$$word",
      technologies: ["React", "NestJS", "TypeScript", "MySQL"],
      images: [
        "/src/img/noteapp-1.png",
        "/src/img/noteapp-2.png",
        "/src/img/noteapp-3.png",
        "/src/img/noteapp-4.png"
      ],
      liveUrl: "https://note-app-one-gamma.vercel.app/",
      githubUrl: "https://github.com/ocoyladev/NoteApp"
    },
    // {
    //   id: 3,
    //   title: "AI-Powered Analytics Dashboard",
    //   shortDescription: "Real-time data visualization platform",
    //   description: "An advanced analytics dashboard that uses machine learning to provide insights from user data. Features include customizable widgets, real-time data updates, and predictive analytics. Built with React, D3.js, and TensorFlow.js.",
    //   technologies: ["React", "D3.js", "TensorFlow.js", "Node.js", "MongoDB", "WebSocket"],
    //   images: [
    //     "https://images.unsplash.com/photo-1557804550-d4c1c4c55e88?w=800&h=600",
    //     "https://images.unsplash.com/photo-1557804551-2dd7e13d58f9?w=800&h=600",
    //     "https://images.unsplash.com/photo-1557804552-7ff6a76ca5cc?w=800&h=600",
    //     "https://images.unsplash.com/photo-1557804553-c3410467457f?w=800&h=600"
    //   ],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/example"
    // }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-12 dark:text-white">Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <div className="grid md:grid-cols-2 gap-8"> */}

            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};