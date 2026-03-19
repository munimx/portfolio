'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-3">05</div>
          <h2 className="text-section font-heading italic leading-[1.05]">
            Let&apos;s Build
            <br />
            <em className="font-editorial">Something Real.</em>
          </h2>
        </motion.div>

        <div className="max-w-[720px]">
          <p className="text-[18px] text-muted leading-[1.75] mb-12">
            I&apos;m actively looking for AI engineering roles — RLHF, LLM evaluation, inference infrastructure, or
            anything involving making models work in production. If that sounds like your team, let&apos;s talk.
          </p>

          <div className="flex flex-col gap-px bg-border border border-border">
            <a
              href="mailto:munimahmad2@gmail.com"
              className="flex justify-between items-center p-8 bg-bg hover:bg-ink/[0.02] transition-colors"
            >
              <div>
                <div className="font-mono text-[11px] text-muted mb-0.5">Email</div>
                <div className="text-[15px]">munimahmad2@gmail.com</div>
              </div>
              <span className="text-accent-primary">↗</span>
            </a>

            <a
              href="https://github.com/munimx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center p-8 bg-bg hover:bg-ink/[0.02] transition-colors"
            >
              <div>
                <div className="font-mono text-[11px] text-muted mb-0.5">GitHub</div>
                <div className="text-[15px]">github.com/munimx</div>
              </div>
              <span className="text-accent-primary">↗</span>
            </a>

            <a
              href="https://linkedin.com/in/munimahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center p-8 bg-bg hover:bg-ink/[0.02] transition-colors"
            >
              <div>
                <div className="font-mono text-[11px] text-muted mb-0.5">LinkedIn</div>
                <div className="text-[15px]">linkedin.com/in/munimahmad</div>
              </div>
              <span className="text-accent-primary">↗</span>
            </a>

            <a
              href="https://recallm.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center p-8 bg-bg hover:bg-ink/[0.02] transition-colors"
            >
              <div>
                <div className="font-mono text-[11px] text-muted mb-0.5">Website</div>
                <div className="text-[15px]">recallm.dev</div>
              </div>
              <span className="text-accent-primary">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
