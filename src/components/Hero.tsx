import React from 'react';
import {
  Code2,
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowDown,
  Sparkles,
  ExternalLink,
  Layers,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { contactDetails, projectsData } from '../data/portfolioData';

interface HeroProps {
  onOpenExportModal: () => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenExportModal,
  onOpenResumeModal,
}) => {
  return (
    <section
      id="hero"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-slate-950 border-b border-slate-900"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-600/15 via-teal-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Full-time & Remote Web Development</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-display">
                Mohamed Hani <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Mohamed</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 font-medium mt-3 flex items-center gap-2 flex-wrap font-display">
                <span>Full-Stack WordPress Developer</span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="text-emerald-400">Front-End Engineer</span>
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              Specialized in engineering high-converting WordPress & WooCommerce websites, bespoke themes, custom plugins, and Shopify 2.0 stores. Dedicated to responsive UI, API integrations, and robust web architectures.
            </p>

            {/* Contact Quick Info Badges */}
            <div className="flex flex-wrap gap-3 pt-2 text-sm text-slate-300">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <MapPin className="w-4 h-4 text-emerald-400" />
                {contactDetails.location}
              </span>
              <a
                href={`mailto:${contactDetails.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                {contactDetails.email}
              </a>
              <a
                href={`tel:${contactDetails.phone1}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                {contactDetails.phone1}
              </a>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <Phone className="w-4 h-4 text-teal-400" />
                {contactDetails.phone2}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                id="btn-hero-projects"
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>View All Projects ({projectsData.length})</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                id="btn-hero-code"
                onClick={onOpenExportModal}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-500/40 text-emerald-400 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer group"
              >
                <Code2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Get HTML, CSS, JS</span>
              </button>

              <button
                id="btn-hero-resume"
                onClick={onOpenResumeModal}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Resume / CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Connect:
              </span>
              <a
                id="hero-github-link"
                href={contactDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-slate-700 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                id="hero-linkedin-link"
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-slate-700 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                id="hero-email-link"
                href={`mailto:${contactDetails.email}`}
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-slate-700 transition-colors"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Interactive Profile Card / Highlights Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-8 border border-slate-800 shadow-2xl shadow-emerald-500/5">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-slate-500 font-mono ml-2">mohamed-hani.dev</span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Full-Stack
                </span>
              </div>

              {/* Key Technical Highlights Grid */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">15+ Real-World Projects</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      WooCommerce stores, Shopify Liquid, Custom ACF setups, Divi, Elementor, and REST APIs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Enterprise Front-End & CMS</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      HTML5, CSS3, JavaScript ES6+, Bootstrap 5, Angular, React, and responsive architecture.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Problem Solving & Algorithms</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Ain Shams University Level 1 contest (28th place) & ACM Ain Shams Level 2 qualifier.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Computer Science Degree</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Ain Shams University with Grade: Excellent Deep Learning CNN Graduation Project.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Tech Badges */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <span className="text-xs text-slate-500 block mb-2 font-medium">Core Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'Liquid', 'Shopify', 'Bootstrap 5', 'Angular', 'React', 'REST API', 'ACF'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded bg-slate-800/70 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
