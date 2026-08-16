import React from 'react';
import { Search, TrendingUp, Cpu, Code2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export const Disciplines = () => {
  const disciplines = [
    {
      num: "01",
      title: "Technical & On-Page SEO",
      description: "Structural audits, indexation optimization, schema markup, and speed architecture that ranks reliably.",
      icon: Search
    },
    {
      num: "02",
      title: "Meta Ads & Performance",
      description: "Server-side tracking (CAPI), creative testing systems, and high-conversion retargeting funnels.",
      icon: TrendingUp
    },
    {
      num: "03",
      title: "AI Automation & n8n",
      description: "Event-driven multi-node workflows, LLM task routing, automated lead enrichment, and CRM sync.",
      icon: Cpu
    },
    {
      num: "04",
      title: "AI-Powered Development",
      description: "High-performance WordPress, WooCommerce, custom AI web tools, and rapid conversion-focused builds.",
      icon: Code2
    }
  ];

  return (
    <section id="disciplines" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <SectionHeading
        badge="Core Disciplines"
        title="Engineered for Scalable Digital Growth"
        subtitle="Bridging the gap between organic visibility, paid acquisition, workflow automation, and custom web development."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {disciplines.map((d) => {
          const Icon = d.icon;
          return (
            <div
              key={d.num}
              className="p-6 rounded-2xl bg-surface border border-border subtle-border transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-accent-light font-bold">{d.num}</span>
                  <div className="p-2 rounded-lg bg-surface-subtle border border-border text-zinc-400 group-hover:text-accent-light transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-accent-light transition-colors">
                  {d.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-muted leading-relaxed">
                  {d.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center text-xs font-mono text-muted-dark">
        Supporting ecosystem: WordPress · WooCommerce · APIs · Webhooks · OpenAI/Claude APIs
      </div>
    </section>
  );
};
