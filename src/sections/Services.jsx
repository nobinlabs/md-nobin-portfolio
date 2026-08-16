import React from 'react';
import { services } from '../data/services';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { Check, ArrowRight } from 'lucide-react';

export const Services = ({ onOpenContact }) => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <SectionHeading
        badge="Services & Execution"
        title="From Strategy to Execution"
        subtitle="A unified methodology: Audit → Strategy → Build → Optimize."
      />

      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-14 text-xs font-mono text-zinc-400 overflow-x-auto py-2">
        <span className="px-3 py-1 rounded bg-surface border border-border text-zinc-200">01. Audit</span>
        <span>→</span>
        <span className="px-3 py-1 rounded bg-surface border border-border text-zinc-200">02. Strategy</span>
        <span>→</span>
        <span className="px-3 py-1 rounded bg-surface border border-border text-zinc-200">03. Build</span>
        <span>→</span>
        <span className="px-3 py-1 rounded bg-surface border border-border text-zinc-200">04. Optimize</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((svc) => (
          <div
            key={svc.id}
            className="p-6 sm:p-8 rounded-2xl bg-surface border border-border subtle-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-accent-light font-bold">{svc.number}</span>
                <span className="text-xs text-muted font-mono">{svc.serviceValue}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {svc.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mb-4">
                {svc.headline}
              </p>
              <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                {svc.description}
              </p>

              <div className="space-y-2 mb-8">
                {svc.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-accent-light shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="md"
              onClick={() => onOpenContact(svc.serviceValue)}
              className="w-full justify-between group"
            >
              <span>{svc.ctaLabel}</span>
              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
