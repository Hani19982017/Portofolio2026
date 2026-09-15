import React, { useState } from 'react';
import {
  Code,
  FileText,
  Menu,
  X,
  ExternalLink,
  Mail,
  Phone,
  Layers,
  Briefcase,
  GraduationCap,
  Sparkles,
  Github,
  Linkedin,
} from 'lucide-react';
import { contactDetails } from '../data/portfolioData';

interface NavbarProps {
  onOpenExportModal: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenExportModal,
  onOpenResumeModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 no-print transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            id="brand-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-bold text-lg shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              MH
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5 font-display">
                Mohamed Hani
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-xs text-slate-400 block -mt-1 font-medium">
                Full-Stack WP & Web Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-900/60 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* HTML CSS JS Export Button */}
            <button
              id="btn-export-code"
              onClick={onOpenExportModal}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all cursor-pointer shadow-sm"
              title="View and download standalone HTML, CSS, and JS code"
            >
              <Code className="w-4 h-4" />
              <span>Get HTML / CSS / JS</span>
            </button>

            {/* Resume Button */}
            <button
              id="btn-nav-resume"
              onClick={onOpenResumeModal}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>CV / Resume</span>
            </button>

            {/* Contact CTA */}
            <a
              id="btn-nav-hire"
              href="#contact"
              className="px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-lg shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="btn-mobile-code"
              onClick={onOpenExportModal}
              className="p-2 text-emerald-400 bg-emerald-500/10 rounded-lg border border-emerald-500/30 text-xs flex items-center gap-1 font-mono"
              title="HTML CSS JS Source"
            >
              <Code className="w-4 h-4" />
              <span>Code</span>
            </button>

            <button
              id="btn-toggle-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-emerald-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-2.5">
            <button
              id="btn-mobile-export-drawer"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenExportModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
            >
              <Code className="w-4 h-4" />
              <span>Get HTML / CSS / JS Source</span>
            </button>

            <button
              id="btn-mobile-resume-drawer"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-lg bg-slate-900 text-slate-200 border border-slate-700"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>View / Print Resume</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-2.5 px-4 text-sm font-bold text-slate-950 bg-emerald-400 rounded-lg text-center"
            >
              Contact Mohamed
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
