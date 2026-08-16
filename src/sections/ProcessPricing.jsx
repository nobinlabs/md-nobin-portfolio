import React from 'react';
import { processSteps, pricingTiers } from '../data/process';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';

export const ProcessPricing = ({ onOpenContact }) => {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <SectionHeading
        badge="Methodology & Rates"
        title="Process & Investment"
        subtitle="Clear milestones and transparent engagement scoping."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-lg font-bold text-white mb-6">4-Phase Execution</h3>
          {processSteps.map((p) => (
            <div key={p.step} className="p-5 rounded-xl bg-surface border border-border flex items-start gap-4">
              <span className="font-mono text-sm font-bold text-accent-light px-2.5 py-1 rounded bg-surface-subtle border border-border">
                {p.step}
              </span>
              <div>
                <h4 className="text-sm font-bold text-white">{p.title}</h4>
                <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-lg font-bold text-white mb-6">Starting Investment</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pricingTiers.map((tier, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-surface border border-border flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{tier.service}</h4>
                  <p className="font-mono text-xs text-accent-light my-2">{tier.priceText}</p>
                  <p className="text-xs text-muted leading-relaxed">{tier.scope}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-surface border border-border mt-4 text-center">
            <p className="text-xs text-muted mb-4">
              Need a blended retainer or single milestone execution?
            </p>
            <Button
              variant="primary"
              size="md"
              onClick={() => onOpenContact()}
              className="w-full justify-center"
            >
              Discuss Your Project <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
