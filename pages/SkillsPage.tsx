import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import AnimatedPage from '../components/AnimatedPage';
import type { Skill } from '../types';

// SkillCard component (memoized for performance)
const SkillCard: React.FC<{ skill: Skill; index: number }> = React.memo(({ skill, index }) => {
    const IconComponent = skill.icon;

    return (
        <motion.div
            aria-label={`Skill: ${skill.name}`}
            className="glitch-border-light dark:glitch-border-dark p-1 transition-all duration-300 hover:glitch-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="bg-glitch-bg-light dark:bg-glitch-bg-dark p-6 flex flex-col items-center text-center h-full">
                <div className="w-12 h-12 mb-4">
                    <IconComponent className="w-full h-full text-glitch-text-light dark:text-glitch-text-dark" />
                </div>
                <h3 className="text-lg font-semibold uppercase tracking-wider">{skill.name}</h3>
            </div>
        </motion.div>
    );
});

SkillCard.displayName = 'SkillCard';

const SkillsPage: React.FC = () => {
    // Extract unique categories dynamically from data to avoid mismatches
    const categories = Array.from(
        new Set(skills.map(skill => skill.category))
    ) as Skill['category'][];

    return (
        <AnimatedPage>
            <div className="max-w-6xl mx-auto pt-16 pb-12">
                <h1 className="text-5xl md:text-6xl font-display font-black text-center mb-16 uppercase">
                    My <span className="glitch-text">Toolkit</span>
                </h1>

                {categories.map(category => {
                    const filteredSkills = skills.filter(s => s.category === category);

                    return (
                        <section key={category} className="mb-12">
                            <h2 className="text-3xl font-display font-bold mb-6 uppercase tracking-widest">
                                // {category}
                            </h2>

                            {filteredSkills.length > 0 ? (
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                    {filteredSkills.map((skill, index) => (
                                        <SkillCard key={skill.name} skill={skill} index={index} />
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500 dark:text-gray-400 italic">
                                    Coming soon...
                                </p>
                            )}
                        </section>
                    );
                })}
            </div>
        </AnimatedPage>
    );
};

export default SkillsPage;
