'use client';

import { motion } from 'framer-motion';

const contactRows = [
  {
    id: '01',
    label: 'Email',
    value: 'munimahmad2@gmail.com',
    href: 'mailto:munimahmad2@gmail.com',
    mono: false,
  },
  {
    id: '02',
    label: 'GitHub',
    value: 'github.com/munimx',
    href: 'https://github.com/munimx',
    mono: true,
  },
  {
    id: '03',
    label: 'LinkedIn',
    value: 'linkedin.com/in/munimahmad',
    href: 'https://linkedin.com/in/munimahmad',
    mono: true,
  },
  {
    id: '04',
    label: 'Location',
    value: 'Lahore, Pakistan',
    href: '#contact',
    mono: true,
  },
] as const;

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
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-primary mb-3">05</div>
          <h2 className="text-section font-heading italic leading-[1.05]">Contact <em className="font-editorial">Matrix</em></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-border pt-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted leading-[1.9]">
              Formal correspondence regarding AI engineering opportunities, infrastructure collaboration, or product
              research. Typical response window: &lt; 24h.
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="border-b border-border">
              {contactRows.map((row) => {
                const isExternal = row.href.startsWith('http');
                const sharedClasses =
                  'grid grid-cols-1 sm:grid-cols-[160px_1fr_auto] gap-3 sm:gap-6 items-center border-t border-border py-5 group transition-colors';
                const rowContent = (
                  <>
                    <div className="font-mono text-[11px] text-muted tracking-[0.14em] uppercase flex items-center gap-2">
                      <span className="text-accent-primary">{row.id}</span>
                      <span>{row.label}</span>
                    </div>
                    <div
                      className={
                        row.mono
                          ? 'font-mono text-[13px] md:text-[14px] text-ink tracking-[0.02em]'
                          : 'font-heading italic text-[22px] md:text-[26px] text-ink tracking-[-0.01em] group-hover:text-accent-primary transition-colors'
                      }
                    >
                      {row.value}
                    </div>
                    <span className="justify-self-start sm:justify-self-end text-accent-primary text-[12px]">↗</span>
                  </>
                );

                if (row.label === 'Location') {
                  return (
                    <div key={row.id} className={sharedClasses}>
                      {rowContent}
                    </div>
                  );
                }

                return (
                  <a
                    key={row.id}
                    href={row.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className={`${sharedClasses} hover:bg-ink/[0.02]`}
                  >
                    {rowContent}
                  </a>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row sm:items-end gap-4">
              <span className="font-heading italic text-[16px] text-muted">Ref: Full professional history (PDF)</span>
              <a
                href={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/munim-ahmad-resume.pdf`}
                download
                className="inline-flex items-center gap-2 px-5 py-3 border border-ink font-mono text-[10px] uppercase tracking-[0.14em] text-bg bg-ink hover:bg-bg hover:text-ink transition-colors"
              >
                [ Download .pdf ]
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
