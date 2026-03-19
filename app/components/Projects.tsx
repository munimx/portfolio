'use client';

import { motion } from 'framer-motion';

function Tag({ children }: { children: string }) {
  return (
    <span className="font-mono text-[9px] text-muted bg-ink/[0.03] px-2.5 py-1 border border-border">
      {children}
    </span>
  );
}

export default function Projects() {
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
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-3">01</div>
          <h2 className="text-section font-heading italic">
            Selected <em className="font-editorial">Projects</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="md:col-span-2 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] border border-border bg-bg overflow-hidden group">
            <div className="bg-ink/[0.03] p-8 flex items-center justify-center">
              <div className="font-mono text-[11px] text-muted leading-[1.8] border border-border bg-bg p-4 w-full max-w-[420px]">
                <div>
                  <span className="text-accent-primary">from</span> recallm <span className="text-accent-primary">import</span>{' '}
                  SemanticCache
                </div>
                <div className="text-border">...</div>
                <div className="text-border italic"># semantic cache for LLMs</div>
                <div>
                  cache = SemanticCache(threshold=<span className="text-[#7A8B5A]">0.85</span>)
                </div>
                <div className="text-border">...</div>
                <div>
                  <span className="text-accent-primary">@cache</span>.wrap
                </div>
                <div>
                  <span className="text-accent-primary">def</span> ask(prompt):
                </div>
                <div>
                  {'  '}<span className="text-accent-primary">return</span> llm.complete(prompt)
                </div>
                <div className="text-border italic"># 40-70% cost reduction</div>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] text-border mb-4">01 — Featured</div>
                <h3 className="text-card font-body font-bold tracking-[-0.02em] leading-[1.1] mb-3">Recallm</h3>
                <p className="text-[15px] text-muted leading-[1.7] mb-4">
                  Production-ready Python library for semantic caching of LLM API calls. Reduces costs by 40-70%
                  through local ONNX embeddings and cosine similarity search.
                </p>
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
              <div className="text-center text-muted">
                <div className="text-[64px] leading-none mb-3">📄</div>
                <div className="font-mono text-[11px]">Cross-Platform Desktop App</div>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] text-border mb-4">02 — Featured</div>
                <h3 className="text-card font-body font-bold tracking-[-0.02em] leading-[1.1] mb-3">DocuChat</h3>
                <p className="text-[15px] text-muted leading-[1.7] mb-4">
                  Cross-platform desktop application for intelligent Q&A over PDF documents using RAG architecture with
                  multi-LLM support and offline-first design.
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

          <article className="border border-border p-8 relative overflow-hidden">
            <div className="font-mono text-[11px] text-border mb-4">03</div>
            <h4 className="font-body font-bold text-[24px] leading-[1.1] tracking-[-0.02em] mb-3">Production RAG Pipeline</h4>
            <p className="text-[14px] text-muted leading-[1.7] mb-4">
              Architected NL→SQL RAG pipeline at Endshift serving 500+ queries daily with 98% uptime and reduced
              Mistral-7B latency by 65%.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <Tag>Mistral-7B</Tag>
              <Tag>.NET</Tag>
              <Tag>AWS</Tag>
              <Tag>Docker</Tag>
            </div>
          </article>

          <article className="border border-border p-8 relative overflow-hidden">
            <div className="font-mono text-[11px] text-border mb-4">04</div>
            <h4 className="font-body font-bold text-[24px] leading-[1.1] tracking-[-0.02em] mb-3">LLM Fine-Tuning Pipeline</h4>
            <p className="text-[14px] text-muted leading-[1.7] mb-4">
              Fine-tuned Llama 2 (7B parameters) using LoRA/QLoRA with BLEU/ROUGE evaluation and MLOps pipeline for
              deployment.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <Tag>PyTorch</Tag>
              <Tag>Hugging Face</Tag>
              <Tag>LoRA/QLoRA</Tag>
              <Tag>MLflow</Tag>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
