'use client';

import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import { experienceData, educationData } from '@/lib/data/experience';
import { FiBriefcase, FiBook } from 'react-icons/fi';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
            Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <FiBriefcase className="text-2xl text-accent-primary mr-3" />
              <h3 className="text-2xl font-heading font-semibold">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <GlassCard key={idx} variant="hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-heading font-semibold text-white">
                        {exp.title}
                      </h4>
                      <p className="text-accent-secondary">{exp.company}</p>
                    </div>
                    <div className="text-text-muted mt-2 md:mt-0 text-right">
                      <p>{exp.period}</p>
                      <p className="text-sm">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, descIdx) => (
                      <li key={descIdx} className="text-text-secondary flex items-start">
                        <span className="text-accent-primary mr-2">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 text-xs rounded-full glass text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <FiBook className="text-2xl text-accent-primary mr-3" />
              <h3 className="text-2xl font-heading font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <GlassCard key={idx} variant="hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="text-xl font-heading font-semibold text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-accent-secondary">{edu.institution}</p>
                      <p className="text-text-secondary mt-2">{edu.description}</p>
                    </div>
                    <p className="text-text-muted mt-2 md:mt-0">{edu.period}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
