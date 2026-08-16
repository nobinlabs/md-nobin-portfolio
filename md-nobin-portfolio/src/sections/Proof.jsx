import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ShieldCheck, Activity, Target } from 'lucide-react';

export const Proof = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <SectionHeading
        badge="Integrity & Metrics"
        title="Data-Backed Standards"
        subtitle="Delivering reliable engineering without embellished statistics or fabricated testimonials."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-surface border border-border">
          <ShieldCheck className="w-6 h-6 text-accent-light mb-4" />
          <h3 className="text-base font-bold text-white mb-2">Verified Tracking Integrity</h3>
          <p className="text-xs sm:text-sm text-muted leading-relaxed">
            Eliminating browser drop-off through robust server-side Meta CAPI deduplication and accurate GTM containers.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface border border-border">
          <Activity className="w-6 h-6 text-accent-light mb-4" />
          <h3 className="text-base font-bold text-white mb-2">Core Web Vitals Adherence</h3>
          <p className="text-xs sm:text-sm text-muted leading-relaxed">
            Structuring DOM elements, asset payloads, and stylesheets to score strictly within Google's 'Good' threshold.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface border border-border">
          <Target className="w-6 h-6 text-accent-light mb-4" />
          <h3 className="text-base font-bold text-white mb-2">Deterministic Automation</h3>
          <p className="text-xs sm:text-sm text-muted leading-relaxed">
            Building self-hosted or cloud n8n workflows with fallback queues, logging, and zero unmonitored silent failures.
          </p>
        </div>
      </div>
    </section>
  );
};
