import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../assets/icons';

const socialLinks = [
  { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/halloffame12' },
  { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://www.linkedin.com/in/sumit-chauhan-a4ba98325/' },
  { name: 'Twitter', icon: TwitterIcon, url: 'https://x.com/sumit_7678' },
];

const Toast: React.FC<{ message: string; show: boolean; onClose: () => void; }> = ({ message, show, onClose }) => {
    return (
        <AnimatePresence>
            {show && (
                 <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-12 right-5 bg-glitch-accent text-glitch-bg-dark font-bold px-6 py-3"
                    role="alert"
                    aria-live="assertive"
                 >
                    {message}
                 </motion.div>
            )}
        </AnimatePresence>
    )
}

const ContactPage: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      // Replace with your Formspree endpoint URL
      const response = await fetch("https://formspree.io/f/mandjjrp", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setShowToast(true);
        form.reset();
        setTimeout(() => setShowToast(false), 5000);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <AnimatedPage>
      <div className="max-w-4xl mx-auto pt-16 pb-12">
        <h1 className="text-5xl md:text-6xl font-display font-black text-center mb-16 uppercase">Get In <span className="glitch-text">Touch</span></h1>
        <div className="glitch-border p-1 bg-glitch-bg-light/50 dark:bg-glitch-bg-dark/50">
          <div className="bg-glitch-bg-light dark:bg-glitch-bg-dark grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-display font-bold mb-6 uppercase">// Send a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-glitch-text-light/80 dark:text-glitch-text-dark/70 uppercase tracking-wider">Name</label>
                  <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 glitch-input" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-glitch-text-light/80 dark:text-glitch-text-dark/70 uppercase tracking-wider">Email</label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 glitch-input" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-glitch-text-light/80 dark:text-glitch-text-dark/70 uppercase tracking-wider">Message</label>
                  <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 glitch-input"></textarea>
                </div>
                <div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-8 py-3 btn-glitch uppercase tracking-widest"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
            <div className="bg-glitch-bg-light/50 dark:bg-glitch-bg-dark/50 p-8 md:p-12 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-glitch-border-light dark:border-glitch-border-dark">
              <h2 className="text-3xl font-display font-bold mb-8 text-center uppercase">// Connect</h2>
              <div className="flex space-x-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-glitch-text-light dark:text-glitch-text-dark hover:glitch-text transition-colors duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5, animation: 'glitch 0.3s linear infinite' }}
                  >
                    <link.icon className="w-10 h-10" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast 
        message="Message Sent! STATUS: OK" 
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </AnimatedPage>
  );
};

export default ContactPage;
