'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const sections = [
  { id: '01', label: 'Abstract', href: '#hero' },
  { id: '02', label: 'Publications', href: '#projects' },
  { id: '03', label: 'Methodology', href: '#about' },
  { id: '04', label: 'Experience', href: '#experience' },
  { id: '05', label: 'Appendix', href: '#contact' },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('01');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      const sectionElements = sections.map(section => ({
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
        className={`fixed top-nav left-0 h-[calc(100vh-theme(spacing.nav))] w-sidebar bg-ink/[0.015] border-r border-border z-40 flex flex-col
          lg:translate-x-0 transition-transform duration-300
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Header */}
        <div className="px-5 py-6 border-b border-border/80">
          <div className="font-mono text-[9px] text-accent-primary uppercase tracking-[0.14em]">
            Editorial Portfolio
          </div>
          <div className="font-heading italic text-[22px] leading-none mt-2 tracking-[-0.02em]">
            MA
          </div>
          <div className="font-mono text-[9px] text-muted uppercase tracking-[0.1em] mt-2">Editorial Index</div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              onClick={() => setIsMobileOpen(false)}
              className={`flex items-center gap-2.5 px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.1em] border-l-2 transition-colors
                ${activeSection === section.id 
                  ? 'border-accent-primary text-ink bg-bg' 
                  : 'border-transparent text-muted hover:text-ink hover:bg-bg/70'
                }`}
            >
              <span className="text-[9px] text-accent-primary">{section.id}</span>
              <span>{section.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer - CV Download */}
        <div className="px-5 py-6 border-t border-border/80">
          <a
            href={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/munim-ahmad-resume.pdf`}
            download
            className="block w-full px-3 py-2 text-center font-mono text-[10px] uppercase tracking-[0.1em] bg-ink text-bg hover:bg-accent-primary transition-colors"
          >
            Download CV
          </a>
          <div className="font-mono text-[9px] text-muted uppercase tracking-[0.08em] text-center mt-3 leading-[1.6]">
            Lahore, Pakistan
          </div>
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
