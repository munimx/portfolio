'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-nav bg-bg/95 backdrop-blur-sm border-b border-border z-50">
      <div className="h-full px-12 flex items-center justify-between">
        <a href="#hero" className="font-heading italic text-[22px] hover:text-accent-primary transition-colors">
          MA
        </a>

        <div className="hidden md:block font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Full-Stack AI Engineer
        </div>

        <a
          href="#contact"
          className="px-6 py-2 bg-ink text-bg font-mono text-[11px] uppercase tracking-wider hover:bg-accent-primary transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
