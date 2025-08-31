import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/portfolioData';
import AnimatedPage from '../components/AnimatedPage';
import { ChevronLeftIcon } from '../assets/icons';

const BlogDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <AnimatedPage>
                <div className="text-center py-20 pt-32">
                    <h1 className="text-4xl font-bold uppercase glitch-text">404: Post not found</h1>
                    <NavLink to="/blog" className="mt-4 inline-block hover:underline transition-all glitch-text">
                        &lt; Back to Blog
                    </NavLink>
                </div>
            </AnimatedPage>
        );
    }

    return (
        <AnimatedPage>
            <div className="max-w-4xl mx-auto pt-24 pb-12">
                <NavLink to="/blog" className="inline-flex items-center gap-2 mb-8 glitch-text font-semibold hover:underline transition-opacity">
                    <ChevronLeftIcon className="w-5 h-5"/>
                    Back to all posts
                </NavLink>

                <article>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <h1 className="text-4xl md:text-6xl font-display font-black mb-4 leading-tight uppercase">{post.title}</h1>
                        <div className="flex items-center text-glitch-text-light/50 dark:text-glitch-text-dark/50 mb-6">
                            <span>{post.date}</span>
                        </div>
                        <img src={post.imageUrl} alt={post.title} className="w-full h-auto mb-8 grayscale" />
                    </motion.div>

                    <motion.div 
                        className="prose prose-lg dark:prose-invert max-w-none text-glitch-text-light/90 dark:text-glitch-text-dark/80 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {post.content.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">{paragraph}</p>
                        ))}
                    </motion.div>
                    
                    <div className="mt-12">
                        <h3 className="text-lg font-bold mb-2 uppercase">// Tags:</h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="bg-glitch-accent/10 text-glitch-accent px-3 py-1 text-sm font-medium">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>
            </div>
        </AnimatedPage>
    );
};

export default BlogDetailPage;