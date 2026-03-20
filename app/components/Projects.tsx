'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

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

function WorkflowVisual({ staticBasePath }: { staticBasePath: string }) {
  const { resolvedTheme } = useTheme();
  const svgFile = resolvedTheme === 'dark' ? 'recallm-workflow-dark.svg' : 'recallm-workflow.svg';
  
  return (
    <figure className="mt-10">
      <div className={`border border-border/70 p-4 md:p-5 ${
        resolvedTheme === 'dark' 
          ? 'bg-gradient-to-b from-[#1f1c16] to-[#17140F]' 
          : 'bg-gradient-to-b from-[#f3eee6] to-[#eee7dc]'
      }`}>
        <Image
          src={`${staticBasePath}/assets/projects/${svgFile}`}
          alt="Recallm semantic cache decision workflow"
          width={600}
          height={740}
          className="w-full h-auto object-contain workflow-svg-compact"
        />
      </div>
      <figcaption className="font-mono text-[10px] text-muted leading-[1.75] mt-4">
        Intercept → similarity check → cache hit/miss routing from public Recallm architecture.
      </figcaption>
    </figure>
  );
}

function DocuChatSideVisual({ staticBasePath }: { staticBasePath: string }) {
  return (
    <figure className="mt-5">
      <div className="relative w-full max-w-[320px] aspect-square border border-border/60 bg-bg p-6 flex items-center justify-center overflow-hidden">
        <Image
          src={`${staticBasePath}/assets/projects/docuchat-logo.png`}
          alt="DocuChat logo"
          width={1080}
          height={1080}
          className="w-full h-full object-contain docuchat-logo-tint relative z-[1]"
        />
        <div className="absolute inset-0 bg-accent-primary/[0.06] mix-blend-multiply pointer-events-none" />
      </div>
      <figcaption className="font-mono text-[10px] text-muted leading-[1.75] mt-3">
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
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-primary mb-3">[ 02 ]</div>
          <h2 className="text-[clamp(40px,6vw,80px)] font-heading italic leading-none tracking-[-0.03em]">
            Selected <em className="font-editorial text-accent-primary">Projects</em>
          </h2>
        </motion.div>

        <div className="space-y-20">
          {projectEntries.map((project, index) => (
            <article key={project.title} className="pb-16 border-b border-border/70 last:border-b-0 last:pb-0">
              <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8 lg:gap-12">
                <aside className="pt-1 lg:sticky lg:top-[calc(theme(spacing.nav)+2rem)] h-fit self-start">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-primary mb-3">
                    Publication {project.index}
                  </div>
                  <h3 className="font-body font-bold text-[clamp(24px,3vw,34px)] tracking-[-0.02em] leading-[1.05] whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-muted leading-[1.75] mt-4 max-w-[60ch]">{project.subtitle}</p>
                  {project.visual === 'docuchat' && <DocuChatSideVisual staticBasePath={staticBasePath} />}
                </aside>

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

                  {project.visual === 'workflow' && <WorkflowVisual staticBasePath={staticBasePath} />}
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
