import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import AnimatedPage from '../components/AnimatedPage';
import { ChevronLeftIcon, GithubIcon, ExternalLinkIcon } from '../assets/icons';

const ProjectDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return (
            <AnimatedPage>
                <div className="text-center py-20 pt-32">
                    <h1 className="text-4xl font-bold uppercase glitch-text">404: Project not found</h1>
                    <NavLink to="/projects" className="mt-4 inline-block hover:underline transition-all glitch-text">
                        &lt; Back to Projects
                    </NavLink>
                </div>
            </AnimatedPage>
        );
    }

    return (
        <AnimatedPage>
            <div className="max-w-5xl mx-auto pt-24 pb-12">
                <NavLink to="/projects" className="inline-flex items-center gap-2 mb-8 glitch-text font-semibold hover:underline transition-opacity">
                    <ChevronLeftIcon className="w-5 h-5"/>
                    Back to all projects
                </NavLink>
                
                <div className="glitch-border p-1 bg-glitch-bg-light/50 dark:bg-glitch-bg-dark/50">
                  <div className="bg-glitch-bg-light dark:bg-glitch-bg-dark">
                    <motion.img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-64 md:h-96 object-cover grayscale"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                    <div className="p-8 md:p-12">
                        <h1 className="text-4xl md:text-5xl font-display font-black mb-2 uppercase">{project.title}</h1>
                        <p className="text-lg text-glitch-text-light/50 dark:text-glitch-text-dark/50 mb-6 uppercase tracking-wider">{project.category}</p>

                        {project.role && (
                             <div className="mb-6">
                                <h3 className="font-bold text-xl mb-2 uppercase glitch-text">// My Role</h3>
                                <p className="text-glitch-text-light/80 dark:text-glitch-text-dark/70">{project.role}</p>
                            </div>
                        )}
                        
                        <div className="mb-6">
                            <h3 className="font-bold text-xl mb-2 uppercase glitch-text">// The Problem</h3>
                            <p className="text-glitch-text-light/80 dark:text-glitch-text-dark/70">{project.problem}</p>
                        </div>
                        
                        <div className="mb-8">
                            <h3 className="font-bold text-xl mb-2 uppercase glitch-text">// The Solution</h3>
                            <p className="text-glitch-text-light/80 dark:text-glitch-text-dark/70">{project.solution}</p>
                        </div>

                        <div className="mb-8">
                            <h3 className="font-bold text-xl mb-2 uppercase glitch-text">// Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="bg-glitch-accent/10 text-glitch-accent px-3 py-1 text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-glitch-accent text-glitch-bg-dark font-bold uppercase tracking-widest transition-all duration-300 transform hover:scale-105">
                                    <ExternalLinkIcon className="w-5 h-5"/>
                                    Live Site
                                </a>
                            )}
                            {project.repoUrl && (
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 btn-glitch uppercase tracking-widest transition-all duration-300 transform hover:scale-105">
                                    <GithubIcon className="w-5 h-5"/>
                                    GitHub Repo
                                </a>
                            )}
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default ProjectDetailPage;