import React from 'react';
import { toolCategories } from '../data/tools';
import { SectionHeading } from '../components/SectionHeading';

export const Tools = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <SectionHeading
        badge="Stack"
        title="Tools & Technologies"
        subtitle="Focused software ecosystem utilized across client projects."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolCategories.map((group, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-surface border border-border">
            <h3 className="text-xs font-mono uppercase tracking-wider text-accent-light mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.tools.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs bg-surface-subtle border border-border text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
