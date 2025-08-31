import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-glitch-bg-light dark:bg-glitch-bg-dark border-t border-glitch-border-light dark:border-glitch-border-dark py-2 px-4 z-50">
      <div className="text-center text-xs text-glitch-text-light/50 dark:text-glitch-text-dark/50 tracking-widest">
        <p>&copy; {new Date().getFullYear()} sumit chauhan. All Systems Operational.</p>
      </div>
    </footer>
  );
};

export default Footer;
