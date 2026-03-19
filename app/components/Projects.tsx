'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

function Tag({ children }: { children: string }) {
  return (
    <span className="font-mono text-[9px] text-muted bg-ink/[0.03] px-2.5 py-1 border border-border">
      {children}
    </span>
  );
}

export default function Projects() {
  const staticBasePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-primary mb-3">01</div>
          <h2 className="text-section font-heading italic">
            Selected <em className="font-editorial">Projects</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="md:col-span-2 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] border border-border bg-bg overflow-hidden group">
            <div className="bg-ink/[0.03] p-8 flex items-center">
              <div className="w-full border border-border bg-bg p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-primary mb-5">
                  Publication Abstract
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-border mb-1">Problem</div>
                  <p className="text-[13px] text-muted leading-[1.65]">
                    Exact-match caches miss paraphrases, so repeated intent still pays full API cost.
                  </p>
                </div>
                <div className="my-4 h-px bg-border" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-border mb-1">Method</div>
                  <p className="text-[13px] text-muted leading-[1.65]">
                    Wrap the client once, embed prompts locally (~20MB ONNX model), then run cosine search above a
                    similarity threshold.
                  </p>
                </div>
                <div className="my-4 h-px bg-border" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-border mb-1">Results</div>
                  <p className="text-[13px] text-muted leading-[1.65]">
                    <span className="text-accent-primary">{'<10ms'}</span> lookup overhead,{' '}
                    <span className="text-accent-primary">0 external services</span>, and 40–70% savings on repetitive
                    FAQ/support traffic.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] text-border mb-4">01 — Featured</div>
                <h3 className="text-card font-body font-bold tracking-[-0.02em] leading-[1.1] mb-3">Recallm</h3>
                <p className="text-[15px] text-muted leading-[1.7] mb-4">
                  Ask once, recall forever. A semantic cache for OpenAI-compatible clients that returns instant
                  responses for similar prompts without introducing proxy layers or infrastructure overhead.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                  <div className="border border-border p-3 bg-ink/[0.02]">
                    <div className="font-mono text-[9px] text-border uppercase tracking-[0.08em] mb-1">Lookup</div>
                    <div className="font-body text-[19px] leading-none text-accent-primary">{'<10ms'}</div>
                  </div>
                  <div className="border border-border p-3 bg-ink/[0.02]">
                    <div className="font-mono text-[9px] text-border uppercase tracking-[0.08em] mb-1">Infra</div>
                    <div className="font-body text-[19px] leading-none">In-process</div>
                  </div>
                  <div className="border border-border p-3 bg-ink/[0.02]">
                    <div className="font-mono text-[9px] text-border uppercase tracking-[0.08em] mb-1">FAQ Savings</div>
                    <div className="font-body text-[19px] leading-none text-accent-primary">40–70%</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>Python</Tag>
                  <Tag>ONNX Runtime</Tag>
                  <Tag>FastEmbed</Tag>
                  <Tag>Redis</Tag>
                  <Tag>Prometheus</Tag>
                </div>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://recallm.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-muted hover:text-ink transition-colors"
                >
                  Visit Site ↗
                </a>
                <a
                  href="https://github.com/munimx/recallm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-muted hover:text-ink transition-colors"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>

          <article className="md:col-span-2 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] border border-border bg-bg overflow-hidden group">
            <div className="bg-ink/[0.03] p-8 flex items-center justify-center">
              <div className="relative w-full max-w-[320px] aspect-square border border-border bg-bg p-6 flex items-center justify-center overflow-hidden">
                <Image
                  src={`${staticBasePath}/assets/projects/docuchat-logo.png`}
                  alt="DocuChat logo"
                  width={1080}
                  height={1080}
                  className="w-full h-full object-contain docuchat-logo-tint relative z-[1]"
                />
                <div className="absolute inset-0 bg-accent-primary/[0.06] mix-blend-multiply pointer-events-none" />
              </div>
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] text-border mb-4">02 — Featured</div>
                <h3 className="text-card font-body font-bold tracking-[-0.02em] leading-[1.1] mb-3">DocuChat</h3>
                <p className="text-[15px] text-muted leading-[1.7] mb-4">
                  Cross-platform desktop app for PDF-grounded Q&A using a local-first RAG workflow, multi-LLM support,
                  and an Electron shell designed for day-to-day research usage.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>Electron</Tag>
                  <Tag>React</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>LangChain</Tag>
                  <Tag>ChromaDB</Tag>
                </div>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com/munimx/DocuChat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-muted hover:text-ink transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://github.com/munimx/DocuChat/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-muted hover:text-ink transition-colors"
                >
                  Download ↗
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
