import React from 'react';
import { profile, socialLinks } from '@/lib/data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass mt-20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-primary transition-colors duration-300 text-2xl"
                aria-label={social.name}
              >
                <social.icon aria-hidden="true" />
              </a>
            ))}
          </div>

          <p className="text-text-muted text-sm text-center">
            © {currentYear} {profile.name}. Built with Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
