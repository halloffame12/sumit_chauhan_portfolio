import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { MenuIcon, CloseIcon } from '../assets/icons';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const NavLinksContent: React.FC<{ onLinkClick?: () => void }> = ({ onLinkClick }) => (
        <>
            {navLinks.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={onLinkClick}
                    className={({ isActive }) =>
                        `px-3 py-2 text-sm uppercase tracking-widest transition-colors duration-300 ${isActive
                            ? 'glitch-text'
                            : 'hover:glitch-text'
                        }`
                    }
                >
                    {link.label}
                </NavLink>
            ))}
        </>
    )

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-glitch-bg-light/80 dark:bg-glitch-bg-dark/80 backdrop-blur-sm border-b border-glitch-border-light dark:border-glitch-border-dark">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-2xl font-bold font-display glitch-text hover:animate-glitch-slow">
                            SC_
                        </NavLink>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            <NavLinksContent />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="ml-2 inline-flex items-center justify-center p-2 text-glitch-text-light dark:text-glitch-text-dark hover:glitch-text focus:outline-none"
                        >
                            {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-glitch-bg-light/95 dark:bg-glitch-bg-dark/95 backdrop-blur-sm border-t border-glitch-border-light dark:border-glitch-border-dark"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                            <NavLinksContent onLinkClick={() => setIsMenuOpen(false)} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;