'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const stats = [
  { value: '3+', label: 'Years Building', detail: 'Shipping production AI systems end-to-end.' },
  { value: '2', label: 'Open Source Libs', detail: 'Published tools with practical deployment focus.' },
  { value: '7B+', label: 'Params Fine-tuned', detail: 'Hands-on adaptation and optimization workflows.' },
  { value: '65%', label: 'Latency Reduced', detail: 'Measured reduction from pipeline-level optimization.' },
];

const ROTATE_EVERY_MS = 2500;
const RING_TEXT =
  'FULL-STACK AI ENGINEER ✦ LAHORE PAKISTAN ✦ OPEN SOURCE ✦ RAG PIPELINES ✦ LLM OPTIMIZATION ✦ ';

export default function Hero() {
  const [activeStatIndex, setActiveStatIndex] = useState(0);
  const activeStat = useMemo(() => stats[activeStatIndex], [activeStatIndex]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % stats.length);
    }, ROTATE_EVERY_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[calc(100vh-theme(spacing.nav))] py-20 px-8">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 items-center">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-primary mb-4">
            01 — Abstract
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
          className="relative flex items-center justify-center min-h-[440px]"
        >
          <svg
            viewBox="0 0 480 480"
            className="w-[380px] h-[380px] md:w-[420px] md:h-[420px] overflow-visible animate-[spin_24s_linear_infinite] pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <path id="hero-ring-path" d="M240,240 m-184,0 a184,184 0 1,1 368,0 a184,184 0 1,1 -368,0" />
            </defs>
            <text className="font-mono text-[13px] tracking-[4px]" style={{ fill: '#C84B2F' }}>
              <textPath href="#hero-ring-path" startOffset="0%">
                {`${RING_TEXT}${RING_TEXT}`}
              </textPath>
            </text>
          </svg>

          <div className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none">
            <div className="w-[250px] min-h-[190px] px-2 text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent-primary mb-4">
                Key Metric
              </div>

              <div className="relative min-h-[110px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeStat.value}-${activeStat.label}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="w-full"
                  >
                    <div className="font-heading italic text-[56px] leading-none text-ink mb-2">{activeStat.value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{activeStat.label}</div>
                    <p className="text-[13px] text-muted leading-[1.55] mt-3">{activeStat.detail}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
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
