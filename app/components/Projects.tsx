'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { projectsData, categories } from '@/lib/data/projects';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === selectedCategory);

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-center">
            Featured Projects
          </h2>
          <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
            A selection of projects showcasing my work in AI/ML, web development, and real-time systems.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === category
                  ? 'glass border-accent-primary text-white'
                  : 'glass-hover text-text-secondary hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                layout
              >
                <GlassCard variant="hover" className="h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-heading font-semibold text-white flex-1">
                      {project.title}
                    </h3>
                    {project.stars && (
                      <div className="flex items-center text-text-muted ml-2">
                        <FiStar className="mr-1" />
                        <span className="text-sm">{project.stars}</span>
                      </div>
                    )}
                  </div>

                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-xs rounded-full glass text-accent-secondary mb-4 w-fit">
                    {project.category}
                  </span>

                  {/* Description */}
                  <p className="text-text-secondary mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded glass text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs rounded glass text-text-muted">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      href={project.githubUrl}
                      external
                      className="flex items-center gap-2"
                    >
                      <FiGithub />
                      Code
                    </Button>
                    {project.liveUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        href={project.liveUrl}
                        external
                        className="flex items-center gap-2"
                      >
                        <FiExternalLink />
                        Live
                      </Button>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
