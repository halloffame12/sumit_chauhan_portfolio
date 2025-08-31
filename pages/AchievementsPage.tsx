import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData';
import AnimatedPage from '../components/AnimatedPage';
import type { Achievement } from '../types';

const AchievementCard: React.FC<{ achievement: Achievement; index: number }> = ({ achievement, index }) => {
    return (
        <motion.a
            href={achievement.credentialUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="block group glitch-border-light dark:glitch-border-dark p-1 transition-all duration-300 hover:glitch-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
        >
            <div className="bg-glitch-bg-light dark:bg-glitch-bg-dark h-full">
                <div className="overflow-hidden">
                    <img src={achievement.imageUrl} alt={achievement.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 grayscale group-hover:grayscale-0" />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2 uppercase">{achievement.title}</h3>
                    <p className="text-glitch-text-light/80 dark:text-glitch-text-dark/70">Issued by: {achievement.issuer}</p>
                    <p className="text-sm text-glitch-text-light/50 dark:text-glitch-text-dark/50 mt-1">Date: {achievement.date}</p>
                </div>
            </div>
        </motion.a>
    );
};

const AchievementsPage: React.FC = () => {
    return (
        <AnimatedPage>
            <div className="max-w-6xl mx-auto pt-16 pb-12">
                <h1 className="text-5xl md:text-6xl font-display font-black text-center mb-16 uppercase">
                    Certifications &amp; <span className="glitch-text">Awards</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => (
                        <AchievementCard key={index} achievement={achievement} index={index}/>
                    ))}
                </div>
            </div>
        </AnimatedPage>
    );
};

export default AchievementsPage;