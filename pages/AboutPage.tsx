import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, timeline } from '../data/portfolioData';
import AnimatedPage from '../components/AnimatedPage';
import { DownloadIcon } from '../assets/icons';
import Timeline from '../components/Timeline';


const AboutPage: React.FC = () => {
    return (
        <AnimatedPage>
            <div className="max-w-5xl mx-auto pt-16 pb-12">
                <h1 className="text-5xl md:text-6xl font-display font-black text-center mb-16 uppercase">
                    About <span className="glitch-text">Me</span>
                </h1>
                
                <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-24">
                    <motion.div 
                        className="lg:col-span-2 flex justify-center sticky top-24"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, type: "spring" }}
                    >
                         <div className="relative w-64 h-64 p-2 glitch-border">
                             <img 
                                src={personalInfo.profilePicture}
                                alt={personalInfo.name}
                                className="relative w-full h-full object-cover grayscale"
                            />
                         </div>
                    </motion.div>

                    <div className="lg:col-span-3 p-6 glitch-border-light dark:glitch-border-dark bg-glitch-bg-light dark:bg-glitch-bg-dark">
                        <p className="text-lg text-glitch-text-light/90 dark:text-glitch-text-dark/80 leading-relaxed mb-6">{personalInfo.bio}</p>
                         <a href={personalInfo.resumeUrl} download>
                            <motion.button 
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                className="mt-4 flex items-center gap-2 px-6 py-3 btn-glitch uppercase tracking-widest text-sm"
                            >
                                <DownloadIcon className="w-5 h-5"/>
                                Download_Resume.pdf
                            </motion.button>
                        </a>
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl font-display font-bold text-center mb-12 uppercase">// My Journey</h2>
                    <Timeline events={timeline} />
                </div>
            </div>
        </AnimatedPage>
    );
};

export default AboutPage;