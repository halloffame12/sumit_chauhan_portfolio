import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { personalInfo, projects } from '../data/portfolioData';
import AnimatedPage from '../components/AnimatedPage';

const HomePage: React.FC = () => {
    const featuredProject = projects[0];

    return (
        <AnimatedPage>
            <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center pt-16 pb-24">
                {/* Hero Section */}
                <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    <motion.div 
                        className="relative z-10 md:w-2/3"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-9xl font-display font-black mb-4 leading-none uppercase text-glitch-text-light dark:text-glitch-text-dark">
                            Sumit <br/><span className="glitch-text ml-8 md:ml-16 hover:animate-glitch">Chauhan</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-glitch-text-light/80 dark:text-glitch-text-dark/80 mb-10 max-w-xl uppercase tracking-wider">
                           &gt; Full-Stack Developer
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <NavLink to="/projects">
                                <motion.button 
                                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 text-lg btn-glitch uppercase tracking-widest w-full sm:w-auto"
                                >
                                    View Projects
                                </motion.button>
                            </NavLink>
                            <NavLink to="/contact">
                                <motion.button 
                                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 text-lg bg-glitch-text-light/80 dark:bg-glitch-text-dark/80 text-glitch-bg-light dark:text-glitch-bg-dark font-bold uppercase tracking-widest w-full sm:w-auto hover:bg-glitch-accent hover:text-glitch-bg-dark transition-colors"
                                >
                                    Contact Me
                                </motion.button>
                            </NavLink>
                        </div>
                    </motion.div>
                    <motion.div
                        className="relative mt-12 md:mt-0 w-64 h-64 md:w-80 md:h-80 z-0"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, type: "spring" }}
                    >
                         <div className="relative w-full h-full p-2 glitch-border">
                            <img 
                                src={personalInfo.profilePicture} 
                                alt="Sumit Chauhan" 
                                className="relative w-full h-full object-cover grayscale"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Featured Project Section */}
                <motion.div 
                    className="mt-32 w-full max-w-5xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-display font-bold uppercase text-center mb-8 tracking-widest">// Featured Project</h2>
                    <div className="glitch-border p-1 bg-glitch-bg-light/50 dark:bg-glitch-bg-dark/50">
                        <div className="bg-glitch-bg-light dark:bg-glitch-bg-dark p-6 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                            <motion.img 
                                src={featuredProject.imageUrl} 
                                alt={featuredProject.title} 
                                className="md:col-span-2 w-full h-auto object-cover grayscale transition-all duration-300 hover:grayscale-0"
                                whileHover={{scale: 1.03}}
                            />
                            <div className="md:col-span-3">
                                <h3 className="text-2xl font-bold font-display mb-2 uppercase glitch-text">{featuredProject.title}</h3>
                                <p className="text-glitch-text-light/80 dark:text-glitch-text-dark/70 mb-4">{featuredProject.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {featuredProject.techStack.map(tech => (
                                        <span key={tech} className="bg-glitch-accent/10 text-glitch-accent px-2 py-1 text-xs font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <NavLink to="/projects" className="font-bold glitch-text hover:underline transition-all">
                                    See all projects &gt;
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatedPage>
    );
};

export default HomePage;