import React from 'react';
import { testimonials } from '../data/testimonials';
import { SectionHeading } from '../components/SectionHeading';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <SectionHeading
        badge="Feedback"
        title="Client Feedback & Endorsements"
        subtitle="Verifiable feedback from teams and collaborators."
      />

      {testimonials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between">
              <div>
                <Quote className="w-6 h-6 text-accent-light/40 mb-3" />
                <p className="text-sm text-zinc-200 leading-relaxed italic">"{t.quote}"</p>
              </div>
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">{t.clientName}</h4>
                  <p className="text-[11px] text-muted">{t.role}</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-subtle text-accent-light border border-border">
                  {t.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 rounded-2xl bg-surface border border-border text-center max-w-md mx-auto">
          <p className="text-xs text-muted font-mono">
            Direct verified reviews will be added here as client approvals are documented.
          </p>
        </div>
      )}
    </section>
  );
};
