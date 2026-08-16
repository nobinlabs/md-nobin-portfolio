import React from 'react';
import { certifications } from '../data/certifications';
import { SectionHeading } from '../components/SectionHeading';
import { Award, ExternalLink } from 'lucide-react';

export const Certifications = () => {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <SectionHeading
        badge="Credentials"
        title="Certifications & Continuous Learning"
        subtitle="Up-to-date technical validation across search, paid media, and automation systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="p-5 rounded-xl bg-surface border border-border subtle-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <Award className="w-5 h-5 text-accent-light" />
                <span className="font-mono text-xs text-muted-dark">{cert.year}</span>
              </div>
              <h3 className="text-sm font-bold text-white">{cert.name}</h3>
              <p className="text-xs text-muted mt-1">{cert.issuer}</p>
            </div>

            {cert.credentialUrl ? (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-accent-light hover:underline mt-4"
              >
                View Credential <ExternalLink className="w-3 h-3" />
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};
