'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type ProjectLink = {
  label: string;
  href: string;
};

type ProjectEntry = {
  index: string;
  title: string;
  subtitle: string;
  context: string;
  method: string;
  outcomes: string[];
  stack: string[];
  links: ProjectLink[];
  visual: 'workflow' | 'docuchat';
};

const projectEntries: ProjectEntry[] = [
  {
    index: '01',
    title: 'Recallm',
    subtitle: 'Semantic caching for OpenAI-compatible clients.',
    context:
      'Exact-match caches miss paraphrased prompts, so repetitive intent still triggers full-price LLM calls even when user meaning is identical.',
    method:
      'Wrap completion calls once, compute local prompt embeddings with ONNX, then perform cosine similarity lookup before forwarding misses to the provider.',
    outcomes: [
      'Sub-10ms lookup overhead on CPU.',
      'In-process architecture with no external orchestration layer.',
      '40–70% savings potential for repetitive support/FAQ workloads.',
    ],
    stack: ['Python', 'ONNX Runtime', 'FastEmbed', 'Redis', 'Prometheus'],
    links: [
      { label: 'Visit recallm.dev ↗', href: 'https://recallm.dev' },
      { label: 'GitHub repository ↗', href: 'https://github.com/munimx/recallm' },
    ],
    visual: 'workflow',
  },
  {
    index: '02',
    title: 'DocuChat',
    subtitle: 'Desktop RAG workspace for document-grounded Q&A.',
    context:
      'Research and support workflows require cited answers from long PDF corpora without context switching to browser-based assistants.',
    method:
      'Electron + React shell with retrieval pipelines over chunked documents, multi-LLM compatibility, and local-first interaction patterns.',
    outcomes: [
      'Cross-platform desktop distribution with installable releases.',
      'Citation-oriented answers over user-provided PDFs.',
      'Designed for iterative reading and follow-up questioning.',
    ],
    stack: ['Electron', 'React', 'TypeScript', 'LangChain', 'ChromaDB'],
    links: [
      { label: 'GitHub repository ↗', href: 'https://github.com/munimx/DocuChat' },
      { label: 'Release downloads ↗', href: 'https://github.com/munimx/DocuChat/releases' },
    ],
    visual: 'docuchat',
  },
];

function StackTag({ children }: { children: string }) {
  return (
    <span className="font-mono text-[9px] text-muted bg-ink/[0.03] px-2.5 py-1 border border-border/70">
      {children}
    </span>
  );
}

function EntryVisual({ visual, staticBasePath }: { visual: ProjectEntry['visual']; staticBasePath: string }) {
  if (visual === 'workflow') {
    return (
      <figure className="mt-8">
        <div className="border border-border/60 bg-bg p-2">
          <Image
            src={`${staticBasePath}/assets/projects/recallm-workflow.svg`}
            alt="Recallm semantic cache decision workflow"
            width={680}
            height={806}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="font-mono text-[10px] text-muted leading-[1.75] mt-4">
          Intercept → similarity check → cache hit/miss routing from public Recallm architecture.
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="mt-8">
      <div className="relative w-full max-w-[360px] aspect-square border border-border/60 bg-bg p-6 flex items-center justify-center overflow-hidden">
        <Image
          src={`${staticBasePath}/assets/projects/docuchat-logo.png`}
          alt="DocuChat logo"
          width={1080}
          height={1080}
          className="w-full h-full object-contain docuchat-logo-tint relative z-[1]"
        />
        <div className="absolute inset-0 bg-accent-primary/[0.06] mix-blend-multiply pointer-events-none" />
      </div>
      <figcaption className="font-mono text-[10px] text-muted leading-[1.75] mt-4">
        Original logo recolored to the editorial palette while preserving shape and contrast.
      </figcaption>
    </figure>
  );
}

export default function Projects() {
  const staticBasePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-primary mb-3">01</div>
          <h2 className="text-section font-heading italic">
            Selected <em className="font-editorial">Projects</em>
          </h2>
        </motion.div>

        <div className="space-y-20">
          {projectEntries.map((project, index) => (
            <article key={project.title} className="pb-16 border-b border-border/70 last:border-b-0 last:pb-0">
              <div className="grid grid-cols-1 xl:grid-cols-[160px_1fr] gap-8 xl:gap-10">
                <div className="pt-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-primary mb-3">
                    Publication {project.index}
                  </div>
                  <h3 className="font-body font-bold text-[clamp(30px,4.4vw,44px)] tracking-[-0.02em] leading-[1.05]">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-muted leading-[1.75] mt-4 max-w-[60ch]">{project.subtitle}</p>
                </div>

                <div className="max-w-[760px]">
                  <div className="space-y-9">
                    <section>
                      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-primary mb-2">
                        Context
                      </div>
                      <p className="text-[16px] leading-[1.85] text-ink">{project.context}</p>
                    </section>

                    <section>
                      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-primary mb-2">
                        Method
                      </div>
                      <p className="text-[16px] leading-[1.85] text-ink">{project.method}</p>
                    </section>

                    <section>
                      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-primary mb-2">
                        Outcomes
                      </div>
                      <ul className="space-y-2.5">
                        {project.outcomes.map((item) => (
                          <li key={item} className="text-[16px] leading-[1.8] text-ink flex items-start gap-3">
                            <span className="mt-3 h-1.5 w-1.5 rounded-full bg-accent-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-primary mb-2.5">
                        Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((item) => (
                          <StackTag key={item}>{item}</StackTag>
                        ))}
                      </div>
                    </section>

                    <section>
                      <div className="flex flex-wrap gap-x-8 gap-y-2">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent-primary hover:text-ink transition-colors"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </section>
                  </div>

                  <EntryVisual visual={project.visual} staticBasePath={staticBasePath} />
                </div>
              </div>

              {index < projectEntries.length - 1 && (
                <div className="mt-16 h-px bg-border/60 max-w-[820px] ml-auto" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
