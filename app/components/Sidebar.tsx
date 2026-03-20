'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

const sections = [
  { id: '01', label: 'ABSTRACT', href: '#hero' },
  { id: '02', label: 'SELECTED_WORK', href: '#projects' },
  { id: '03', label: 'ABOUT', href: '#about' },
  { id: '04', label: 'EXPERIENCE', href: '#experience' },
  { id: '05', label: 'CONTACT', href: '#contact' },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('01');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.querySelector(section.href),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element) {
          const offsetTop = (section.element as HTMLElement).offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-bg border border-border"
        aria-label="Toggle menu"
      >
        <span className={`w-5 h-0.5 bg-ink transition-transform ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-5 h-0.5 bg-ink transition-opacity ${isMobileOpen ? 'opacity-0' : ''}`} />
        <span className={`w-5 h-0.5 bg-ink transition-transform ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-nav left-0 h-[calc(100vh-theme(spacing.nav))] w-sidebar bg-bg border-r border-border z-40 flex flex-col
          lg:translate-x-0 transition-transform duration-300
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Header */}
        <div className="px-5 py-7 border-b border-border/80 flex flex-col items-center text-center">
          <div className="font-heading italic text-[34px] leading-none tracking-[-0.02em]">
            MA
          </div>
          <div className="font-mono text-[9px] text-muted uppercase tracking-[0.1em] mt-3">
            Editorial Navigation Shell
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col py-3">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              onClick={() => setIsMobileOpen(false)}
              className={`relative grid grid-cols-[34px_1fr] items-center px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.13em] transition-all
                ${
                  activeSection === section.id
                    ? 'text-accent-primary bg-ink/[0.035] pl-[18px] translate-x-[1px]'
                    : 'text-muted hover:text-ink hover:bg-ink/[0.02]'
                }`}
            >
              {activeSection === section.id && <span className="absolute left-0 top-0 h-full w-0.5 bg-accent-primary" />}
              <span className="text-[9px] text-accent-primary tracking-[0.1em]">{section.id}</span>
              <span>{section.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer Utilities */}
        <div className="px-5 h-24 border-t border-border/80 flex items-center">
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
            className="w-full px-3 py-2 border border-border font-mono text-[10px] uppercase tracking-[0.12em] text-ink hover:text-accent-primary hover:border-accent-primary transition-colors flex items-center justify-center gap-2"
          >
            {mounted ? (
              <>
                {resolvedTheme === 'light' ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                )}
                <span>{resolvedTheme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
              </>
            ) : (
              <span>Toggle Theme</span>
            )}
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-ink/20 z-30 lg:hidden"
        />
      )}
    </>
  );
}
