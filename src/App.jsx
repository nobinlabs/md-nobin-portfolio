import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Disciplines } from './sections/Disciplines';
import { Services } from './sections/Services';
import { CaseStudies } from './sections/CaseStudies';
import { AutomationShowcase } from './sections/AutomationShowcase';
import { Proof } from './sections/Proof';
import { Certifications } from './sections/Certifications';
import { Testimonials } from './sections/Testimonials';
import { About } from './sections/About';
import { Tools } from './sections/Tools';
import { ProcessPricing } from './sections/ProcessPricing';
import { FAQ } from './sections/FAQ';
import { CTASection } from './sections/CTASection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedServiceForForm, setSelectedServiceForForm] = useState("SEO");

  const handleOpenContact = (serviceName = "SEO") => {
    setSelectedServiceForForm(serviceName);
    const target = document.getElementById('contact-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-zinc-100 flex flex-col">
      <Navbar onOpenContact={handleOpenContact} />
      
      <main className="flex-1">
        <Hero onOpenContact={handleOpenContact} />
        <Disciplines />
        <Services onOpenContact={handleOpenContact} />
        <CaseStudies onSelectProject={(proj) => setSelectedProject(proj)} />
        <AutomationShowcase />
        <Proof />
        <Certifications />
        <Testimonials />
        <About />
        <Tools />
        <ProcessPricing onOpenContact={handleOpenContact} />
        <FAQ />
        <CTASection selectedService={selectedServiceForForm} />
      </main>

      <Footer />

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenContact={handleOpenContact}
        />
      )}
    </div>
  );
}
