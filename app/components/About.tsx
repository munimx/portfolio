'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data/skills';

export default function About() {
  const staticBasePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-primary mb-3">[ 03 ]</div>
          <h2 className="text-[clamp(40px,6vw,80px)] font-heading italic leading-none tracking-[-0.03em]">
            About & <em className="font-editorial text-accent-primary">Approach</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
          <aside className="lg:sticky lg:top-[calc(theme(spacing.nav)+2rem)] h-fit">
            <div className="w-full aspect-[3/4] border border-border overflow-hidden mb-4 bg-surface">
              <Image
                src={`${staticBasePath}/images/munim-headshot-cropped.png`}
                alt="Munim Ahmad portrait"
                width={1250}
                height={1962}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>

            <div className="grid grid-cols-1 gap-px bg-border border border-border">
              <div className="bg-bg p-3">
                <div className="font-mono text-[9px] text-muted mb-0.5">Location</div>
                <div className="text-[13px]">Lahore, PK</div>
              </div>
              <div className="bg-bg p-3">
                <div className="font-mono text-[9px] text-muted mb-0.5">Status</div>
                <div className="text-[13px] text-accent-primary">Available</div>
              </div>
              <div className="bg-bg p-3">
                <div className="font-mono text-[9px] text-muted mb-0.5">Email</div>
                <div className="text-[11px] break-all">munimahmad2@gmail.com</div>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-12">
              <p className="text-[17px] leading-[1.75] mb-4">
                <span className="font-heading italic text-[64px] leading-[0.8] float-left mr-2 mt-2 text-accent-primary">I</span>
                &nbsp;build AI systems that are genuinely useful — not demos. My work sits at the intersection of machine learning infrastructure and full-stack engineering, with a particular obsession for making LLMs faster, cheaper, and more reliable in production.
              </p>
              <p className="text-[17px] leading-[1.75] mb-4">
                At <strong>Endshift</strong> I shipped a RAG pipeline handling real traffic — optimizing Mistral-7B
                inference with semantic caching, cutting latency and cost. On the side, I built <strong>Recallm</strong>,
                an open-source Python library for LLM semantic caching.
              </p>
              <p className="text-[17px] leading-[1.75]">
                I&apos;m wrapping up my Computer Science degree at UCP in Lahore and actively looking for{' '}
                <strong>AI engineering roles</strong> — especially involving LLM evaluation, RLHF, or production-scale
                inference systems.
              </p>
            </div>

            <div className="pt-12 border-t border-border">
              <div className="font-mono text-[12px] text-accent-primary mb-5">Skills & Technologies</div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {skillsData.map((category) => (
                  <article key={category.category} className="border border-border bg-bg p-8">
                    <h3 className="font-body font-semibold text-[16px] mb-3">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li key={skill.name} className="text-[13px] text-muted flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 bg-accent-primary rounded-full shrink-0" />
                          <span>{skill.name}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
