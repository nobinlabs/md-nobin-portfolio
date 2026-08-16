import React from 'react';
import { projects } from '../data/projects';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { ArrowRight, CheckCircle2, Download } from 'lucide-react';

export const CaseStudies = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <SectionHeading
        badge="Selected Work"
        title="Tested Frameworks & Case Studies"
        subtitle="Real challenges, targeted technical implementations, and documented outcomes."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="rounded-2xl bg-surface border border-border overflow-hidden subtle-border flex flex-col justify-between"
          >
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-surface-subtle border border-border text-accent-light">
                  {proj.category}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {proj.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted line-clamp-3 leading-relaxed">
                {proj.summary}
              </p>
            </div>

            <div className="px-6 py-3 bg-surface-subtle/50 border-y border-border/60">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">Key Outcomes:</span>
              <ul className="space-y-1.5">
                {proj.results.slice(0, 2).map((res, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 pt-4 flex items-center justify-between gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onSelectProject(proj)}
                className="w-full justify-center"
              >
                View Case Study <ArrowRight className="w-3.5 h-3.5" />
              </Button>

              {proj.downloads && proj.downloads.length > 0 && (
                <a
                  href={proj.downloads[0].file}
                  download
                  title={`Download ${proj.downloads[0].title}`}
                  className="p-2.5 rounded-lg bg-surface-subtle border border-border text-zinc-400 hover:text-white hover:border-accent/40 transition-colors"
                >
                  <Download className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
