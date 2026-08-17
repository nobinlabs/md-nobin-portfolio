import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Button } from '../components/Button';

export const Hero = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#09090b]">
      
      {/* 1. Direct Benzene / Hexagon Canvas Background */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundColor: '#09090b',
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% 30%, rgba(168, 85, 247, 0.25), transparent 75%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='83.14' viewBox='0 0 48 83.14'%3E%3Cpath d='M24 0 L48 13.86 L48 41.57 L24 55.43 L0 41.57 L0 13.86 Z M0 55.43 L24 69.28 L48 55.43 L48 83.14 L24 97 L0 83.14 Z' fill='none' stroke='%23a855f7' stroke-width='1.5' stroke-opacity='0.45'/%3E%3C/svg%3E")
            `,
          backgroundSize: 'auto, 48px 83.14px',
          backgroundPosition: 'center top, center top'
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 bg-zinc-900/90 border border-zinc-800 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{siteConfig.availability}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.15]">
            AI-Driven Marketing & Automation for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-400">
              Modern Businesses.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            I help businesses grow through technical SEO, performance marketing, AI-powered automation, and conversion-focused digital solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button onClick={() => onOpenContact && onOpenContact()} size="lg" variant="primary">
              Start a Project <ArrowRight className="w-4 h-4"/>
            </Button>

            <Button href="#work" size="lg" variant="secondary">
              View Case Studies
            </Button>

            {siteConfig.calendarUrl && (
              <Button href={siteConfig.calendarUrl} rel="noopener noreferrer" size="lg" target="_blank" variant="outline">
                Book Strategy Call <ArrowUpRight className="w-4 h-4"/>
              </Button>
            )}
          </div>

          {/* Small Profile Info Card */}
          <div className="mt-4 flex items-center gap-4 p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md max-w-md w-full">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700 shrink-0 flex items-center justify-center font-mono text-xs text-purple-400 font-bold">
              MN
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-sm font-semibold text-white truncate">{siteConfig.name}</h2>
              <p className="text-xs text-zinc-400 truncate">{siteConfig.title}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[11px] font-mono text-purple-400">{siteConfig.company}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/30 to-indigo-600/30 rounded-3xl blur-2xl -z-10 opacity-70" />
          
          <div className="relative rounded-3xl p-2 bg-zinc-900/80 border border-zinc-800 shadow-2xl overflow-hidden max-w-[360px] w-full">
            <img
              src="./images/profile.jpg"
              alt="Md Nobin"
              className="w-full h-auto aspect-square object-cover rounded-2xl bg-zinc-950"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full aspect-square flex items-center justify-center bg-zinc-900 rounded-2xl font-mono text-3xl text-purple-400 font-bold">MN</div>';
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
