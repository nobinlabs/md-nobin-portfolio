import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Button } from '../components/Button';

export const Hero = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Benzene Ring Grid Background */}
      <div className="absolute inset-0 bg-benzene-pattern bg-benzene-mask pointer-events-none -z-10" />

      {/* Top Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 bg-surface border border-border">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{siteConfig.availability}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.15]">
            AI-Driven Marketing & Automation for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-400">
              Modern Businesses.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            I help businesses grow through technical SEO, performance marketing, AI-powered automation, and conversion-focused digital solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
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

          {/* Small Profile Info Card */}
          <div className="mt-4 flex items-center gap-4 p-3 rounded-2xl bg-surface/70 border border-border backdrop-blur-sm max-w-md w-full">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-surface-subtle border border-border shrink-0 flex items-center justify-center font-mono text-xs text-accent-light font-bold">
              MN
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-sm font-semibold text-white truncate">{siteConfig.name}</h2>
              <p className="text-xs text-muted truncate">{siteConfig.title}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[11px] font-mono text-accent-light">{siteConfig.company}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Main Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/25 to-indigo-600/25 rounded-3xl blur-2xl -z-10 opacity-70" />
          
          <div className="relative rounded-3xl p-2 bg-surface/80 border border-border shadow-2xl overflow-hidden max-w-[360px] w-full">
            <img
              src="./images/profile.jpg"
              alt="Md Nobin"
              className="w-full h-auto aspect-square object-cover rounded-2xl bg-zinc-950"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full aspect-square flex items-center justify-center bg-zinc-900 rounded-2xl font-mono text-3xl text-accent-light font-bold">MN</div>';
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};