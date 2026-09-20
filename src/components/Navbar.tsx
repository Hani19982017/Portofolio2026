import React, { useState } from 'react';
import {
  Code,
  FileText,
  Menu,
  X,
  Languages,
  MessageCircle,
} from 'lucide-react';
import { contactDetails } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface NavbarProps {
  onOpenExportModal: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenExportModal,
  onOpenResumeModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, isRTL } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 no-print transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none min-w-0 flex-shrink"
            id="brand-logo"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-bold text-base sm:text-lg shadow-md sm:shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
              MH
            </div>
            <div className="min-w-0">
              <span className="text-sm sm:text-base lg:text-lg font-bold tracking-tight text-white flex items-center gap-1.5 font-display whitespace-nowrap truncate">
                {isRTL ? contactDetails.nameAr : contactDetails.name}
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
              </span>
              <span className="hidden sm:block text-[11px] lg:text-xs text-slate-400 font-medium truncate max-w-[180px] lg:max-w-xs">
                {isRTL ? contactDetails.titleAr : contactDetails.title}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-900/60 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Language Switcher */}
            <button
              id="btn-lang-switcher"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700/80 hover:border-emerald-500/40 transition-all cursor-pointer shadow-sm"
              title={t.nav.switchLang}
            >
              <Languages className="w-4 h-4 text-emerald-400" />
              <span>{t.nav.language}</span>
            </button>

            {/* WhatsApp Quick Direct Link */}
            <a
              id="btn-nav-whatsapp"
              href={`https://wa.me/201067770148?text=${encodeURIComponent(
                language === 'ar'
                  ? 'مرحباً مهندس محمد، أود التواصل معك لمناقشة مشروع.'
                  : 'Hello Mohamed, I would like to discuss a project with you.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 transition-colors"
              title="+201067770148 WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              <span className="font-mono text-xs">WhatsApp</span>
            </a>

            {/* HTML CSS JS Export Button */}
            <button
              id="btn-export-code"
              onClick={onOpenExportModal}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all cursor-pointer shadow-sm"
              title="View and download standalone HTML, CSS, and JS code"
            >
              <Code className="w-4 h-4" />
              <span>{t.nav.getHtmlCssJs}</span>
            </button>

            {/* Resume Button */}
            <button
              id="btn-nav-resume"
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>{t.nav.cvResume}</span>
            </button>

            {/* Contact CTA */}
            <a
              id="btn-nav-hire"
              href="#contact"
              className="px-3.5 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-lg shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
            >
              {t.nav.hireMe}
            </a>
          </div>

          {/* Mobile Action Controls */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 flex-shrink-0">
            {/* Language Switcher */}
            <button
              id="btn-mobile-lang"
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 text-xs font-bold rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-750 flex items-center gap-1 cursor-pointer transition-colors shadow-sm"
              title={t.nav.switchLang}
            >
              <Languages className="w-3.5 h-3.5 flex-shrink-0 text-emerald-400" />
              <span>{t.nav.language}</span>
            </button>

            {/* WhatsApp Quick Icon */}
            <a
              id="btn-mobile-whatsapp-nav"
              href="https://wa.me/201067770148"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366] bg-[#25D366]/15 hover:bg-[#25D366]/25 rounded-lg border border-[#25D366]/30 flex items-center transition-colors"
              title="WhatsApp +201067770148"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
            </a>

            {/* Standalone Code button (tablet / wide mobile) */}
            <button
              id="btn-mobile-code"
              onClick={onOpenExportModal}
              className="hidden sm:flex p-2 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-lg border border-emerald-500/30 text-xs items-center gap-1 font-mono cursor-pointer transition-colors"
              title="HTML CSS JS Source"
            >
              <Code className="w-3.5 h-3.5" />
              <span>{t.nav.code}</span>
            </button>

            {/* Hamburger Toggle */}
            <button
              id="btn-toggle-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/90 hover:bg-slate-850 border border-slate-800 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-emerald-400" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            {/* WhatsApp Link in Drawer */}
            <a
              href="https://wa.me/201067770148"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold rounded-xl bg-[#25D366] text-slate-950 shadow-md shadow-[#25D366]/20 transition-all hover:opacity-95"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              <span>{t.contact.chatNow} (+201067770148)</span>
            </a>

            {/* Export Code in Drawer */}
            <button
              id="btn-mobile-export-drawer"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenExportModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-colors cursor-pointer"
            >
              <Code className="w-4 h-4" />
              <span>{t.nav.getHtmlCssJs}</span>
            </button>

            {/* Resume in Drawer */}
            <button
              id="btn-mobile-resume-drawer"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-xl bg-slate-900 text-slate-200 border border-slate-750 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>{t.nav.cvResume}</span>
            </button>

            {/* Hire Me in Drawer */}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-2.5 px-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl text-center shadow-md shadow-emerald-500/20"
            >
              {t.nav.hireMe}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
