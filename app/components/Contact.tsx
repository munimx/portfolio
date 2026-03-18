'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiCopy } from 'react-icons/fi';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { contactChannels, profile, socialLinks } from '@/lib/data/profile';

type CopiedField = 'Email' | 'Phone' | null;

export default function Contact() {
  const [copiedField, setCopiedField] = useState<CopiedField>(null);

  const handleCopy = async (label: Exclude<CopiedField, null>, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedField(label);
    window.setTimeout(() => setCopiedField(null), 1600);
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">
            Let&apos;s Build Something Useful
          </h2>
          <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
            Open to full-time and contract opportunities in AI applications, backend systems,
            and product-focused engineering.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4 mb-8">
              {contactChannels.map((channel) => (
                <GlassCard key={channel.name}>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <channel.icon className="text-2xl text-accent-primary" aria-hidden="true" />
                      <div className="min-w-0">
                        <p className="text-sm text-text-muted">{channel.name}</p>
                        <a
                          href={channel.href}
                          className="text-lg text-white break-all hover:text-accent-secondary transition-colors"
                        >
                          {channel.value}
                        </a>
                      </div>
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleCopy(channel.name as 'Email' | 'Phone', channel.value)}
                      className="flex items-center gap-2"
                    >
                      {copiedField === channel.name ? (
                        <>
                          <FiCheck aria-hidden="true" />
                          Copied
                        </>
                      ) : (
                        <>
                          <FiCopy aria-hidden="true" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {socialLinks.map((social, idx) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + idx * 0.08 }}
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="block">
                    <GlassCard variant="hover" className="text-center">
                      <social.icon className="text-3xl text-accent-primary mx-auto mb-2" aria-hidden="true" />
                      <p className="font-semibold text-white">{social.name}</p>
                      <p className="text-sm text-text-muted break-all">{social.username}</p>
                    </GlassCard>
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <Button variant="primary" size="lg" href={`mailto:${profile.email}`} external>
                Email {profile.name}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
