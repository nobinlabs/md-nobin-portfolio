import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { ArrowUp, Mail, MessageSquare, Linkedin, Github } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-border mt-20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-surface-subtle border border-border flex items-center justify-center font-mono font-bold text-sm text-accent-light">
                MN
              </div>
              <span className="font-bold text-base text-white">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              {siteConfig.title}. Engineering high-leverage marketing systems, technical search dominance, and event-driven automations.
            </p>
            <p className="text-xs text-muted-dark">
              Affiliation: {siteConfig.companyRole}, <span className="text-zinc-400">{siteConfig.company}</span>
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#disciplines" className="hover:text-white transition-colors">Disciplines</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="#automation" className="hover:text-white transition-colors">AI Automation</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Md Nobin</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Direct Contact</h4>
            <ul className="space-y-2 text-sm text-muted">
              {siteConfig.email && (
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5 text-accent-light" />
                    <span>{siteConfig.email}</span>
                  </a>
                </li>
              )}
              {siteConfig.whatsapp && (
                <li>
                  <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Connect</span>
                  </a>
                </li>
              )}
            </ul>

            <div className="flex items-center gap-3 pt-2">
              {siteConfig.socials.linkedin && (
                <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-surface-subtle border border-border text-muted hover:text-white hover:border-zinc-700 transition-colors" aria-label="LinkedIn Profile">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socials.github && (
                <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-surface-subtle border border-border text-muted hover:text-white hover:border-zinc-700 transition-colors" aria-label="GitHub Profile">
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-dark">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Clean static build.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            Back to Top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
