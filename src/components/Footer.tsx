import React from 'react';
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Code2,
  MessageCircle,
} from 'lucide-react';
import { contactDetails } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface FooterProps {
  onOpenExportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenExportModal }) => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage =
    language === 'ar'
      ? 'مرحباً مهندس محمد هاني، أرغب في التواصل معك.'
      : 'Hello Mohamed Hani, I would like to contact you.';

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-sm no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Left Brand */}
          <div className="text-center md:text-start">
            <h3 className="text-lg font-bold text-white font-display">
              {isRTL ? contactDetails.nameAr : contactDetails.name}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {isRTL ? contactDetails.titleAr : contactDetails.title} •{' '}
              {isRTL ? contactDetails.locationAr : contactDetails.location}
            </p>
          </div>

          {/* Social & Action Links */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <button
              onClick={onOpenExportModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>HTML / CSS / JS</span>
            </button>

            {/* Direct WhatsApp link in footer */}
            <a
              href={`https://wa.me/201067770148?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/30 transition-colors"
              title="WhatsApp: +201067770148"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
            </a>

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
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()}{' '}
            {isRTL ? contactDetails.nameAr : contactDetails.name}.{' '}
            {t.footer.rights}
          </p>
          <p className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
            <span>+201067770148 • familymam91@gmail.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
