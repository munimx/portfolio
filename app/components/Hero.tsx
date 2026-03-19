'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '3+', label: 'Years Building' },
  { value: '2', label: 'Open Source Libs' },
  { value: '7B+', label: 'Params Fine-tuned' },
  { value: '65%', label: 'Latency Reduced' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-theme(spacing.nav))] py-20 px-8">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-primary mb-4">
            00 — Abstract
          </div>
          <h1 className="text-hero font-heading italic leading-[0.92] mb-6">
            Munim
            <br />
            Ahmad
          </h1>
          <p className="text-[clamp(18px,2.6vw,28px)] leading-[1.25] mb-5">
            Full-Stack AI Engineer building production-ready AI systems.
          </p>
          <p className="text-[15px] text-muted leading-[1.75] max-w-[62ch] mb-8">
            Specialized in RAG pipelines, LLM optimization, and production ML deployment. Based in Lahore, Pakistan.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="#projects"
              className="font-mono text-[11px] uppercase tracking-[0.12em] px-7 py-3 bg-ink text-bg hover:bg-accent-primary transition-colors"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="group font-mono text-[11px] uppercase tracking-[0.12em] text-accent-primary hover:text-ink transition-colors inline-flex items-center gap-2"
            >
              Get in touch <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative flex justify-center"
        >
          <svg
            viewBox="0 0 352 352"
            className="absolute w-[352px] h-[352px] animate-[spin_20s_linear_infinite] pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <path id="circle-path-next" d="M176,176 m-140,0 a140,140 0 1,1 280,0 a140,140 0 1,1 -280,0" />
            </defs>
            <text
              className="font-mono text-[11.5px] tracking-[3.2px]"
              style={{ fill: 'rgba(200,75,47,0.9)' }}
            >
              <textPath href="#circle-path-next">
                FULL-STACK AI ENGINEER ✦ LAHORE PAKISTAN ✦ OPEN SOURCE ✦ RAG PIPELINES ✦ LLM OPTIMIZATION ✦
              </textPath>
            </text>
          </svg>

          <div className="relative z-[1] w-[320px] grid grid-cols-2 gap-px bg-border border border-border">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-bg p-7">
                <div className="font-heading italic text-[42px] leading-none mb-1.5">{stat.value}</div>
                <div className="font-mono text-[10px] text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-muted animate-[scrollPulse_2s_ease-in-out_infinite]" />
        <div className="font-mono text-[10px] text-muted [writing-mode:vertical-rl] [text-orientation:mixed]">
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
