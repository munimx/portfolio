'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiCheck, FiCopy } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/munimx',
    icon: FiGithub,
    username: '@munimx',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/munimx',
    icon: FiLinkedin,
    username: 'munimx',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/munimx',
    icon: FiTwitter,
    username: '@munimx',
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'munim.ahmad@example.com'; // Update with real email

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-background-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-center">
            Get In Touch
          </h2>
          <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and interesting projects.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Email Card */}
            <GlassCard className="mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FiMail className="text-2xl text-accent-primary" />
                  <div>
                    <p className="text-sm text-text-muted">Email</p>
                    <p className="text-lg text-white">{email}</p>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <FiCheck />
                      Copied!
                    </>
                  ) : (
                    <>
                      <FiCopy />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </GlassCard>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {socialLinks.map((social, idx) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <GlassCard variant="hover" className="text-center">
                      <social.icon className="text-3xl text-accent-primary mx-auto mb-2" />
                      <p className="font-semibold text-white">{social.name}</p>
                      <p className="text-sm text-text-muted">{social.username}</p>
                    </GlassCard>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <Button
                variant="primary"
                size="lg"
                href={`mailto:${email}`}
                external
              >
                Send Me an Email
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
