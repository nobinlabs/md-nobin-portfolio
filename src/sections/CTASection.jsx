import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';

export const CTASection = ({ selectedService }) => {
  return (
    <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <SectionHeading
        badge="Initiate"
        title="Ready to Scale Your Systems?"
        subtitle="Fill out the project intake below to receive a diagnostic proposal and roadmap."
      />

      <ContactForm initialService={selectedService} />
    </section>
  );
};
