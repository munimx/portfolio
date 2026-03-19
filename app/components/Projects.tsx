'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type ProjectLink = {
  label: string;
  href: string;
};

type ProjectMetric = {
  label: string;
  value: string;
};

type ProjectRecord = {
  index: string;
  title: string;
  subtitle: string;
  context: string;
  method: string;
  outcomes: string[];
  stack: string[];
  links: ProjectLink[];
  metrics?: ProjectMetric[];
  visualType: 'recallm' | 'docuchat';
};

const projectRecords: ProjectRecord[] = [
  {
    index: '01',
    title: 'Recallm',
    subtitle: 'Semantic caching for OpenAI-compatible clients.',
    context:
      'Exact-match caches miss paraphrased prompts, so repetitive intent still triggers full-price LLM calls.',
    method:
      'Wrap the completion method once, embed prompts locally with ONNX, and perform cosine similarity search before forwarding misses.',
    outcomes: [
      'Sub-10ms lookup overhead on CPU.',
      '0 external services required (in-process architecture).',
      '40–70% reduction potential on repetitive FAQ/support workloads.',
    ],
    stack: ['Python', 'ONNX Runtime', 'FastEmbed', 'Redis', 'Prometheus'],
    links: [
      { label: 'Visit recallm.dev ↗', href: 'https://recallm.dev' },
      { label: 'GitHub repository ↗', href: 'https://github.com/munimx/recallm' },
    ],
    metrics: [
      { label: 'Lookup', value: '<10ms' },
      { label: 'Infra', value: 'In-process' },
      { label: 'FAQ hit-rate', value: '40–70%' },
    ],
    visualType: 'recallm',
  },
  {
    index: '02',
    title: 'DocuChat',
    subtitle: 'Desktop RAG workspace for document-grounded Q&A.',
    context:
      'Research and support workflows need cited answers across long PDFs without context-switching to browser tools.',
    method:
      'Electron + React shell with retrieval pipelines over chunked documents, multi-LLM options, and local-first interaction patterns.',
    outcomes: [
      'Cross-platform desktop distribution with installable releases.',
      'Focused citation-driven answers over user-provided PDFs.',
      'Workflow designed for iterative reading and follow-up querying.',
    ],
    stack: ['Electron', 'React', 'TypeScript', 'LangChain', 'ChromaDB'],
    links: [
      { label: 'GitHub repository ↗', href: 'https://github.com/munimx/DocuChat' },
      { label: 'Release downloads ↗', href: 'https://github.com/munimx/DocuChat/releases' },
    ],
    visualType: 'docuchat',
  },
];

function StackTag({ children }: { children: string }) {
  return (
    <span className="font-mono text-[9px] text-muted bg-ink/[0.03] px-2.5 py-1 border border-border/80">
      {children}
    </span>
  );
}

function DetailRow({
  label,
  children,
  isLast,
}: {
  label: string;
  children: ReactNode;
  isLast?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-[128px_1fr] gap-2 md:gap-4 px-6 py-4 ${
        isLast ? '' : 'border-b border-border/80'
      }`}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-border">{label}</div>
      <div className="text-[14px] text-muted leading-[1.7]">{children}</div>
    </div>
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

        <div className="space-y-8">
          {projectRecords.map((project) => (
            <article key={project.title} className="border border-border bg-bg overflow-hidden">
              <div className="grid grid-cols-1 xl:grid-cols-[220px_1fr]">
                <aside className="border-b xl:border-b-0 xl:border-r border-border/80 bg-ink/[0.02] p-6 flex flex-col justify-between gap-8">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-primary mb-3">
                      Publication {project.index}
                    </div>
                    <h3 className="font-body font-bold text-[30px] tracking-[-0.02em] leading-[1.05] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[13px] text-muted leading-[1.7]">{project.subtitle}</p>
                  </div>

                  <div className="space-y-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-mono text-[10px] uppercase tracking-[0.08em] text-accent-primary hover:text-ink transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </aside>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px]">
                  <div>
                    <DetailRow label="Context">{project.context}</DetailRow>
                    <DetailRow label="Method">{project.method}</DetailRow>
                    <DetailRow label="Outcomes">
                      <ul className="space-y-1.5">
                        {project.outcomes.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-2.5 h-1 w-1 rounded-full bg-accent-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </DetailRow>
                    <DetailRow label="Stack" isLast>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((item) => (
                          <StackTag key={item}>{item}</StackTag>
                        ))}
                      </div>
                    </DetailRow>
                  </div>

                  <div className="border-t lg:border-t-0 lg:border-l border-border/80 p-6 bg-ink/[0.015]">
                    {project.visualType === 'recallm' && project.metrics ? (
                      <>
                        <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-primary mb-4">
                          Workflow
                        </div>
                        <div className="border border-border/80 bg-bg p-2">
                          <Image
                            src={`${staticBasePath}/assets/projects/recallm-workflow.svg`}
                            alt="Recallm semantic cache decision workflow"
                            width={680}
                            height={806}
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="grid grid-cols-1 gap-px bg-border border border-border mt-4">
                          {project.metrics.map((metric) => (
                            <div key={metric.label} className="bg-bg px-3 py-2.5">
                              <div className="font-mono text-[9px] text-border uppercase tracking-[0.08em] mb-1">
                                {metric.label}
                              </div>
                              <div className="font-body text-[19px] leading-none text-ink">{metric.value}</div>
                            </div>
                          ))}
                        </div>
                        <p className="font-mono text-[10px] text-muted leading-[1.75] mt-4">
                          Intercept → similarity check → cache hit/miss routing, aligned to the public Recallm
                          architecture docs.
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-primary mb-4">
                          Visual Identity
                        </div>
                        <div className="relative w-full aspect-square border border-border/80 bg-bg p-6 flex items-center justify-center overflow-hidden">
                          <Image
                            src={`${staticBasePath}/assets/projects/docuchat-logo.png`}
                            alt="DocuChat logo"
                            width={1080}
                            height={1080}
                            className="w-full h-full object-contain docuchat-logo-tint relative z-[1]"
                          />
                          <div className="absolute inset-0 bg-accent-primary/[0.06] mix-blend-multiply pointer-events-none" />
                        </div>
                        <p className="font-mono text-[10px] text-muted leading-[1.75] mt-4">
                          Recolored to the portfolio palette while preserving the original mark geometry.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
