'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    date: 'May 2025 – Oct 2025',
    role: 'ML Engineer',
    org: 'Endshift — Lahore, Pakistan',
    description:
      'Architected production RAG pipeline (500+ queries daily, 98% uptime). Reduced Mistral-7B inference latency by 65% through batching, quantization, and optimization. Built .NET backend with Okta SSO, deployed on AWS EC2 with Docker.',
  },
  {
    date: '2022 – Present',
    role: 'Open Source Author',
    org: 'Recallm — recallm.dev',
    description:
      'Designed and published Python semantic cache library for LLMs with embedding-based similarity matching. Production-focused architecture with Redis/in-memory storage, Prometheus metrics, and async support.',
  },
  {
    date: '2022 – July 2026',
    role: 'BSc Computer Science',
    org: 'University of Central Punjab — Lahore',
    description:
      'Final semester. Focus areas include machine learning, distributed systems, and software engineering.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-8">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-3">04</div>
          <h2 className="text-section font-heading italic">
            Where <em className="font-editorial">I&apos;ve Been</em>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {timeline.map((item, idx) => (
            <article
              key={item.role}
              className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 pb-10 ${
                idx < timeline.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div className="font-mono text-[11px] text-muted">{item.date}</div>
              <div>
                <h3 className="font-body text-[20px] font-semibold mb-1">{item.role}</h3>
                <div className="font-mono text-[11px] text-accent-primary mb-3">{item.org}</div>
                <p className="text-[15px] text-muted leading-[1.7]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
