import React, { useEffect } from 'react';
import { X, ExternalLink, Download, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Button } from './Button';

export const CaseStudyModal = ({ project, onClose, onOpenContact }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl bg-surface border border-border rounded-2xl shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-6 border-b border-border">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-surface-subtle text-zinc-400 hover:text-white border border-border"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono text-accent-light bg-accent/10 border border-accent/20 mb-2">
              {project.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface-subtle border border-border">
              <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">The Challenge</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-200 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-subtle border border-border">
              <h3 className="text-xs font-mono text-accent-light uppercase tracking-wider">The Implementation</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-200 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {project.strategy && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white">Strategic Framework</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {project.strategy}
              </p>
            </div>
          )}

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Documented Outcomes</h3>
            <ul className="space-y-2">
              {project.results.map((res, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Technologies & Protocols</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md text-xs bg-surface-subtle border border-border text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.downloads && project.downloads.length > 0 && (
            <div className="pt-4 border-t border-border">
              <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">Project Assets & Documents</h3>
              <div className="flex flex-wrap gap-3">
                {project.downloads.map((dl, idx) => (
                  <a
                    key={idx}
                    href={dl.file}
                    download
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-subtle border border-border hover:border-accent/50 text-xs text-zinc-200 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-accent-light" />
                    <span>{dl.title} ({dl.type})</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <Button
                  variant="secondary"
                  size="sm"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Live Site <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              )}
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                onClose();
                onOpenContact(project.category);
              }}
            >
              Discuss Similar Project →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
