import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Button } from '../components/Button';

export const Hero = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glow-purple rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 bg-surface border border-border mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{siteConfig.availability}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15]">
          AI-Driven Marketing & Automation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-accent-light">Modern Businesses.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          I help businesses grow through technical SEO, performance marketing, AI-powered automation, and conversion-focused digital solutions.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => onOpenContact()}
          >
            Start a Project <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href="#work"
          >
            View Case Studies
          </Button>

          {siteConfig.calendarUrl && (
            <Button
              variant="outline"
              size="lg"
              href={siteConfig.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Strategy Call <ArrowUpRight className="w-4 h-4" />
            </Button>
          )}
        </div>

        <div className="mt-12 sm:mt-16 flex items-center gap-4 p-3 rounded-2xl bg-surface/70 border border-border backdrop-blur-sm max-w-md w-full text-left">
          <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-surface-subtle border border-border shrink-0">
            <img
              src="./images/profile.jpg"
              alt="Md Nobin Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-zinc-900 font-mono text-xs text-accent-light font-bold">MN</div>';
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-sm font-semibold text-white truncate">{siteConfig.name}</h2>
            <p className="text-xs text-muted truncate">{siteConfig.title}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[11px] font-mono text-accent-light">{siteConfig.company}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
