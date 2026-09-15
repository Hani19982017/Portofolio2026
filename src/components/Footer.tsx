import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail, Phone, Code2 } from 'lucide-react';
import { contactDetails } from '../data/portfolioData';

interface FooterProps {
  onOpenExportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenExportModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-sm no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Left Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white font-display">
              {contactDetails.name}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Full-stack WordPress Developer & Front-End Engineer • Cairo, Egypt
            </p>
          </div>

          {/* Social & Action Links */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenExportModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>HTML / CSS / JS</span>
            </button>
            <a
              href={contactDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:text-white border border-slate-800 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:text-white border border-slate-800 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${contactDetails.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:text-white border border-slate-800 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {contactDetails.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Engineered with modern HTML5, CSS3, JavaScript & React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
