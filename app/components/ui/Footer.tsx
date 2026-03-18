import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/munimx', icon: FiGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/munimx', icon: FiLinkedin },
  { name: 'Twitter', href: 'https://twitter.com/munimx', icon: FiTwitter },
  { name: 'Email', href: 'mailto:your.email@example.com', icon: FiMail },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass mt-20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
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
                <social.icon />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-text-muted text-sm">
            © {currentYear} Munim Ahmad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
