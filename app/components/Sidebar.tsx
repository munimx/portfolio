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
        className={`fixed top-nav left-0 h-[calc(100vh-theme(spacing.nav))] w-sidebar bg-bg border-r border-border z-40 flex flex-col
          lg:translate-x-0 transition-transform duration-300
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="font-mono text-[10px] text-muted uppercase tracking-wider">
            Portfolio
          </div>
          <div className="font-mono text-[11px] mt-1">
            v0.2.0
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-8">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              onClick={() => setIsMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 font-mono text-[11px] border-l-2 transition-colors
                ${activeSection === section.id 
                  ? 'border-accent-primary text-ink' 
                  : 'border-transparent text-muted hover:text-ink hover:border-muted'
                }`}
            >
              <span className="text-[10px]">{section.id}</span>
              <span>{section.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer - CV Download */}
        <div className="p-4 border-t border-border">
          <a
            href="/portfolio/Munim Ahmad Resume.pdf"
            download
            className="block w-full px-4 py-2 text-center font-mono text-[11px] bg-ink text-bg hover:bg-accent-primary transition-colors"
          >
            Download CV
          </a>
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
