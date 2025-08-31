import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import AnimatedPage from '../components/AnimatedPage';
import type { Project } from '../types';

// ProjectCard component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <NavLink to={`/projects/${project.slug}`} aria-label={`View details for ${project.title}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden block p-1 border border-transparent hover:border-gray-400 dark:hover:border-gray-600 transition-colors duration-300"
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy" // Enable lazy loading for performance
          className="w-full h-64 object-cover transition-all duration-500 group-hover:grayscale-0 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <h3 className="text-white text-xl font-bold font-display uppercase tracking-wider">
            {project.title}
          </h3>
          <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            {project.category}
          </p>
        </div>
        {/* Simplified to a single overlay for performance, using CSS for effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </NavLink>
  );
};

// ProjectsPage component
const ProjectsPage: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="max-w-7xl mx-auto pt-16 pb-12 px-4">
        <h1 className="text-5xl md:text-6xl font-display font-black text-center mb-16 uppercase">
          My <span className="text-accent">Work</span>
        </h1>
        {/* Using CSS Grid for a more reliable masonry-like layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ProjectsPage;