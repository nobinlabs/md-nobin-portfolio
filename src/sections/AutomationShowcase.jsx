import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Bot, Zap, Database, Send, Webhook } from 'lucide-react';

export const AutomationShowcase = () => {
  const steps = [
    { label: "Trigger", desc: "Webhook / Form / Lead Inbound", icon: Webhook },
    { label: "AI Routing", desc: "LLM Lead Evaluation & Scoring", icon: Bot },
    { label: "n8n Engine", desc: "Logic, Filtering & Enrichment", icon: Zap },
    { label: "Database", desc: "PostgreSQL / CRM Upsert", icon: Database },
    { label: "Action", desc: "Slack / Email / Dispatch", icon: Send }
  ];

  return (
    <section id="automation" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <SectionHeading
        badge="Autonomous Pipelines"
        title="Automate What Slows You Down"
        subtitle="Visualizing how multi-node n8n automations, LLM agents, and REST APIs work in unison."
      />

      <div className="p-6 sm:p-10 rounded-2xl bg-surface border border-border subtle-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        <div className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
            {steps.map((st, i) => {
              const Icon = st.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl bg-surface-subtle border border-border/80 group">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent-light mb-3 group-hover:border-accent/60 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-white mb-1">{st.label}</span>
                  <span className="text-[11px] text-muted leading-tight">{st.desc}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-8 border-t border-border/60 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Zero manual data entry latency</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Custom structured JSON outputs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Self-healing retry & error webhooks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
