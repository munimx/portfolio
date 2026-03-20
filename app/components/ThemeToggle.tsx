'use client';

import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-[100] w-10 h-10 rounded-full bg-surface border border-border" />
    );
  }

  return (
    <motion.button
      onClick={cycleTheme}
      className="fixed top-6 right-6 z-[100] w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:border-accent-primary transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Current theme: ${theme}. Click to change.`}
      title={`Theme: ${theme}`}
    >
      {/* Sun icon */}
      <svg
        className={`w-5 h-5 absolute transition-all duration-300 ${
          resolvedTheme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
      {/* Moon icon */}
      <svg
        className={`w-5 h-5 absolute transition-all duration-300 ${
          resolvedTheme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
      {/* System indicator dot */}
      {theme === 'system' && (
        <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-accent-primary rounded-full border-2 border-surface" />
      )}
    </motion.button>
  );
}
