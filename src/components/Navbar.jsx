import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Button } from './Button';

export const Navbar = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Disciplines", href: "#disciplines" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Automation", href: "#automation" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/80 backdrop-blur-md border-b border-border/80 py-3.5" 
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center font-mono font-bold text-sm text-accent-light group-hover:border-accent/60 transition-colors">
            MN
          </div>
          <span className="font-medium text-sm sm:text-base tracking-tight text-white group-hover:text-zinc-200">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs lg:text-sm text-muted hover:text-white transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {siteConfig.calendarUrl ? (
            <Button
              variant="outline"
              size="sm"
              href={siteConfig.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Call <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          ) : null}
          <Button
            variant="primary"
            size="sm"
            onClick={() => onOpenContact()}
          >
            Start a Project
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-surface border border-border text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent/50"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm text-zinc-300 hover:bg-surface-subtle rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-border/80 flex flex-col gap-2">
            {siteConfig.calendarUrl && (
              <Button
                variant="outline"
                size="md"
                href={siteConfig.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center"
              >
                Book a Strategy Call <ArrowUpRight className="w-4 h-4" />
              </Button>
            )}
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full justify-center"
            >
              Start a Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
