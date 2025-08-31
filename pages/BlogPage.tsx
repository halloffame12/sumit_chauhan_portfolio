import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { blogPosts } from '../data/portfolioData';
import AnimatedPage from '../components/AnimatedPage';
import type { BlogPost } from '../types';

const BlogPostCard: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex"
        >
            <NavLink to={`/blog/${post.slug}`} className="w-full block group glitch-border-light dark:glitch-border-dark p-1 transition-all duration-300 hover:glitch-border">
                 <div className="bg-glitch-bg-light dark:bg-glitch-bg-dark h-full">
                    <div className="overflow-hidden">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 grayscale group-hover:grayscale-0" />
                    </div>
                    <div className="p-6">
                        <p className="text-sm text-glitch-text-light/50 dark:text-glitch-text-dark/50 mb-2">{post.date}</p>
                        <h3 className="text-2xl font-display font-bold mb-3 uppercase">{post.title}</h3>
                        <p className="text-glitch-text-light/80 dark:text-glitch-text-dark/70 mb-4">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map(tag => (
                                <span key={tag} className="bg-glitch-accent/10 text-glitch-accent px-2 py-1 text-xs font-medium">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <span className="font-bold glitch-text group-hover:underline transition-all">
                            Read More &gt;
                        </span>
                    </div>
                </div>
            </NavLink>
        </motion.div>
    );
};

const BlogPage: React.FC = () => {
    return (
        <AnimatedPage>
            <div className="max-w-6xl mx-auto pt-16 pb-12">
                <h1 className="text-5xl md:text-6xl font-display font-black text-center mb-16 uppercase">
                    My <span className="glitch-text">Thoughts</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogPostCard key={post.slug} post={post} index={index}/>
                    ))}
                </div>
            </div>
        </AnimatedPage>
    );
};

export default BlogPage;