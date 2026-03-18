'use client';

import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import { skillsData } from '@/lib/data/skills';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-center">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <GlassCard>
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              I'm a Full Stack Developer with a passion for building innovative AI-powered applications
              and seamless user experiences. With expertise spanning modern web technologies, machine
              learning systems, and real-time architectures, I bring ideas to life through clean,
              efficient code.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              From semantic caching systems for LLMs to cross-platform AI assistants, I specialize in
              creating solutions that combine cutting-edge AI with practical, user-friendly interfaces.
              I'm constantly exploring new technologies and pushing the boundaries of what's possible
              in web and AI development.
            </p>
          </GlassCard>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-heading font-bold mb-8 text-center">Skills & Technologies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((category, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <GlassCard variant="hover" className="h-full">
                  <h4 className="text-xl font-heading font-semibold mb-4 text-accent-primary">
                    {category.category}
                  </h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIdx) => (
                      <li key={skillIdx} className="text-text-secondary flex items-center">
                        <span className="w-2 h-2 bg-accent-secondary rounded-full mr-3" />
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
