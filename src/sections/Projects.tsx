import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      shortDescription: "A full-featured online shopping platform",
      description: "A modern e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration with Stripe. The platform supports multiple vendors, real-time inventory tracking, and advanced search functionality.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600",
        "https://images.unsplash.com/photo-1557821556-1c1f7d203c18?w=800&h=600",
        "https://images.unsplash.com/photo-1557821557-3af77862a1e3?w=800&h=600",
        "https://images.unsplash.com/photo-1557821559-67d19c2a2c96?w=800&h=600"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 2,
      title: "Task Management App",
      shortDescription: "Collaborative task management solution",
      description: "A real-time task management application with team collaboration features. Includes Kanban boards, task assignments, due dates, and file attachments. Built with React and Firebase for real-time updates across all team members.",
      technologies: ["React", "Firebase", "Material-UI", "TypeScript", "Jest"],
      images: [
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600",
        "https://images.unsplash.com/photo-1557804508-17f3b49e5c28?w=800&h=600",
        "https://images.unsplash.com/photo-1557804509-d8c1debb1e10?w=800&h=600",
        "https://images.unsplash.com/photo-1557804510-2ba8e4c0ee42?w=800&h=600"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      shortDescription: "Real-time data visualization platform",
      description: "An advanced analytics dashboard that uses machine learning to provide insights from user data. Features include customizable widgets, real-time data updates, and predictive analytics. Built with React, D3.js, and TensorFlow.js.",
      technologies: ["React", "D3.js", "TensorFlow.js", "Node.js", "MongoDB", "WebSocket"],
      images: [
        "https://images.unsplash.com/photo-1557804550-d4c1c4c55e88?w=800&h=600",
        "https://images.unsplash.com/photo-1557804551-2dd7e13d58f9?w=800&h=600",
        "https://images.unsplash.com/photo-1557804552-7ff6a76ca5cc?w=800&h=600",
        "https://images.unsplash.com/photo-1557804553-c3410467457f?w=800&h=600"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    }
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
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};