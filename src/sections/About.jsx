import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { SectionHeading } from '../components/SectionHeading';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <SectionHeading
        badge="Behind The Work"
        title="About Md Nobin"
        subtitle="Operating at the intersection of technical marketing, event-driven automation, and code."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden bg-surface border border-border p-2">
            <img
              src="./images/profile.jpg"
              alt={siteConfig.name}
              className="w-full h-full object-cover rounded-xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-surface-subtle font-mono text-sm text-accent-light font-bold">Md Nobin</div>';
              }}
            />
          </div>
        </div>

        <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-muted leading-relaxed">
          <h3 className="text-xl font-bold text-white">
            Hi, I’m {siteConfig.name}.
          </h3>
          <p>
            I am an AI-driven digital marketer and automation specialist. My background combines rigorous on-page and technical search engine optimization with performance-driven Meta advertising systems and modern webhook/API workflow automation.
          </p>
          <p>
            As the founder of <strong className="text-white">{siteConfig.company}</strong>, I engineer digital infrastructure that doesn't just attract visitors, but systematically converts them into revenue while removing manual administrative bottlenecks through self-hosted n8n pipelines and custom AI models.
          </p>
          <p>
            Whether fixing complex e-commerce index bloat, setting up server-side CAPI tracking, or orchestrating multi-app LLM triage pipelines, I build solutions designed for reliability, speed, and clear ROI.
          </p>
        </div>
      </div>
    </section>
  );
};
