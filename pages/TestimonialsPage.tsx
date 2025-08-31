import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/portfolioData';
import AnimatedPage from '../components/AnimatedPage';
import { ChevronLeftIcon, ChevronRightIcon } from '../assets/icons';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    return (
        <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4 snap-center">
            <div className="h-full glitch-border-light dark:glitch-border-dark p-1">
                 <div className="relative h-full bg-glitch-bg-light dark:bg-glitch-bg-dark p-8 flex flex-col min-h-[18rem] justify-center">
                    <span className="absolute top-4 left-6 text-7xl font-display text-glitch-border-light dark:text-glitch-border-dark opacity-80 z-0">“</span>
                    <p className="relative z-10 text-lg italic text-glitch-text-light/90 dark:text-glitch-text-dark/80 flex-grow">"{testimonial.quote}"</p>
                    <div className="relative z-10 mt-6 text-right">
                        <p className="font-bold text-lg glitch-text">{testimonial.author}</p>
                        <p className="text-sm text-glitch-text-light/50 dark:text-glitch-text-dark/50">{testimonial.company}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const TestimonialsPage: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.8; // Scroll by 80% of the container width
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <AnimatedPage>
            <div className="max-w-6xl mx-auto pt-16 pb-12">
                <h1 className="text-5xl md:text-6xl font-display font-black text-center mb-16 uppercase">
                    What <span className="glitch-text">Others Say</span>
                </h1>
                <div className="relative">
                    <div 
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scroll-snap-container pb-4 -mb-4"
                    >
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                     <button onClick={() => scroll('left')} aria-label="Previous testimonial" className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-glitch-bg-light dark:bg-glitch-bg-dark border border-glitch-border-light dark:border-glitch-border-dark hover:glitch-border hidden sm:block -translate-x-1/2">
                        <ChevronLeftIcon className="w-6 h-6"/>
                    </button>
                    <button onClick={() => scroll('right')} aria-label="Next testimonial" className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-glitch-bg-light dark:bg-glitch-bg-dark border border-glitch-border-light dark:border-glitch-border-dark hover:glitch-border hidden sm:block translate-x-1/2">
                        <ChevronRightIcon className="w-6 h-6"/>
                    </button>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default TestimonialsPage;