'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-background to-accent-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-tertiary/10 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-balance">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Munim Ahmad
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary mb-6"
          >
            Full-Stack AI Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-text-muted mb-8 max-w-2xl mx-auto"
          >
            Building production AI systems end-to-end — from model optimization to deployment.
            Recent delivery highlights include a <span className="text-white">65% inference latency reduction</span> and
            a <span className="text-white">RAG pipeline serving 500+ daily queries at 98% uptime</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            <span className="glass px-3 py-1 rounded-full text-sm text-text-secondary">Lahore, Pakistan</span>
            <span className="glass px-3 py-1 rounded-full text-sm text-text-secondary">RAG Systems</span>
            <span className="glass px-3 py-1 rounded-full text-sm text-text-secondary">LLM Optimization</span>
            <span className="glass px-3 py-1 rounded-full text-sm text-text-secondary">Backend Architecture</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button variant="primary" size="lg" href="#projects">
              Review Projects
            </Button>
            <Button variant="secondary" size="lg" href="#contact">
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-muted hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to About section"
        onClick={() => {
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown className="text-2xl" />
        </motion.div>
      </motion.button>
    </section>
  );
}
