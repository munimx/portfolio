'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-nav bg-bg/95 backdrop-blur-sm border-b border-border z-50">
      <div className="h-full px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading italic text-[22px] hover:text-accent-primary transition-colors">
          MA
        </Link>

        {/* Right side - Contact button */}
        <Link
          href="#contact"
          className="px-6 py-2 bg-accent-primary text-bg font-mono text-[11px] uppercase tracking-wider hover:bg-accent-secondary transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </nav>
  );
}
