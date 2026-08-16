import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Button } from './Button';

export const ContactForm = ({ initialService = "SEO" }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService,
    budget: '$300–$500',
    projectUrl: '',
    details: ''
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormState((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const endpoint = siteConfig.formEndpoint;

    if (!endpoint) {
      setTimeout(() => {
        setStatus('success');
      }, 1000);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('success');
        setFormState({
          name: '',
          email: '',
          company: '',
          service: 'SEO',
          budget: '$300–$500',
          projectUrl: '',
          details: ''
        });
      } else {
        const data = await response.json();
        throw new Error(data?.error || 'Failed to submit form.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please email directly.');
    }
  };

  return (
    <div id="contact" className="w-full max-w-xl mx-auto bg-surface border border-border rounded-2xl p-6 sm:p-8">
      {status === 'success' ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 text-accent-light flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Project Request Sent</h3>
          <p className="text-sm text-muted max-w-md mx-auto">
            Thanks for reaching out. I review all inquiries within 24 hours and will follow up with actionable next steps.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatus('idle')}
            className="mt-4"
          >
            Send Another Inquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {!siteConfig.formEndpoint && (
            <div className="p-3 rounded-lg bg-surface-subtle border border-amber-500/20 text-amber-300 text-xs">
              <span className="font-mono font-semibold">Dev Note:</span> VITE_FORM_ENDPOINT is not set in .env. Submissions will simulate successfully.
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-zinc-300 mb-1">
                Your Name <span className="text-accent">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formState.name}
                onChange={handleChange}
                placeholder="Md Nobin"
                className="w-full bg-surface-subtle border border-border focus:border-accent rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-zinc-300 mb-1">
                Email Address <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                placeholder="client@company.com"
                className="w-full bg-surface-subtle border border-border focus:border-accent rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-xs font-mono text-zinc-300 mb-1">
                Company / Project
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formState.company}
                onChange={handleChange}
                placeholder="Your Brand or Agency"
                className="w-full bg-surface-subtle border border-border focus:border-accent rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="projectUrl" className="block text-xs font-mono text-zinc-300 mb-1">
                Website / Store URL
              </label>
              <input
                id="projectUrl"
                name="projectUrl"
                type="url"
                value={formState.projectUrl}
                onChange={handleChange}
                placeholder="https://example.com"
                className="w-full bg-surface-subtle border border-border focus:border-accent rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="service" className="block text-xs font-mono text-zinc-300 mb-1">
                Core Requirement
              </label>
              <select
                id="service"
                name="service"
                value={formState.service}
                onChange={handleChange}
                className="w-full bg-surface-subtle border border-border focus:border-accent rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
              >
                <option value="SEO">Technical & On-Page SEO</option>
                <option value="Meta Ads">Meta Ads & Performance</option>
                <option value="AI Automation">AI Automation & n8n</option>
                <option value="WordPress/WooCommerce">WordPress & WooCommerce</option>
                <option value="AI Development">AI Tools & Custom Web</option>
                <option value="Other">Other Consultation</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-xs font-mono text-zinc-300 mb-1">
                Anticipated Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formState.budget}
                onChange={handleChange}
                className="w-full bg-surface-subtle border border-border focus:border-accent rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
              >
                <option value="Under $100">Under $100</option>
                <option value="$100–$300">$100–$300</option>
                <option value="$300–$500">$300–$500</option>
                <option value="$500–$1,000">$500–$1,000</option>
                <option value="$1,000+">$1,000+</option>
                <option value="Custom">Custom / Enterprise</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="details" className="block text-xs font-mono text-zinc-300 mb-1">
              Project Details & Objectives <span className="text-accent">*</span>
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              required
              value={formState.details}
              onChange={handleChange}
              placeholder="Outline what you want to achieve, current bottlenecks, and any deadline constraints..."
              className="w-full bg-surface-subtle border border-border focus:border-accent rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors resize-none"
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === 'submitting'}
            className="w-full justify-center"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Submitting Request...
              </>
            ) : (
              <>
                Send Project Request <Send className="w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
};
