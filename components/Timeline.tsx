import React from 'react';
import type { TimelineEvent } from '../types';
import { motion } from 'framer-motion';

interface TimelineProps {
    events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
    return (
        <div className="relative max-w-2xl mx-auto border-l-2 border-dashed border-glitch-accent/50 py-4">
            {events.map((event, index) => (
                <motion.div 
                    key={index} 
                    className="mb-10 ml-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <div className="absolute -left-[9px] w-4 h-4 bg-glitch-accent border-2 border-glitch-bg-light dark:border-glitch-bg-dark"></div>
                    
                    <time className="block mb-2 text-sm font-normal leading-none text-glitch-text-light/50 dark:text-glitch-text-dark/50">{event.date}</time>
                    <h3 className="text-lg font-semibold text-glitch-text-light dark:text-glitch-text-dark mb-1">
                        {event.title}
                    </h3>
                    <p className="text-sm font-medium glitch-text mb-2">{event.institution}</p>
                    <p className="text-base font-normal text-glitch-text-light/70 dark:text-glitch-text-dark/70">{event.description}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;