import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { contactDetails } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const FloatingWhatsApp: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage =
    language === 'ar'
      ? 'مرحباً مهندس محمد، اطلعت على معرض أعمالك وأرغب في مناقشة مشروع جديد.'
      : 'Hello Mohamed, I saw your portfolio and would like to discuss a project.';

  const whatsappHref = `https://wa.me/201067770148?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div
      className={`fixed bottom-4 sm:bottom-6 ${
        isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'
      } z-50 flex flex-col items-end no-print`}
    >
      {/* Pop-over Card when opened */}
      {isOpen && (
        <div
          className={`mb-3 w-[calc(100vw-2rem)] max-w-[340px] sm:max-w-sm rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200 ${
            isRTL ? 'text-right' : 'text-left'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-base">
                  MH
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-emerald-700"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">
                  {isRTL ? contactDetails.nameAr : contactDetails.name}
                </h4>
                <p className="text-xs text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                  {t.floatingWhatsApp.online}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-black/10 hover:bg-black/20 text-white/80 hover:text-white transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-950/60 space-y-3">
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/50 text-xs text-slate-300 leading-relaxed">
              {language === 'ar' ? (
                <>
                  أهلاً بك! يمكنك مراسلتي مباشرة عبر واتساب بخصوص أي مشروع
                  برمجي أو تطوير ويب أو عمل حر.
                </>
              ) : (
                <>
                  Hello! Feel free to reach out directly on WhatsApp regarding any
                  full-stack, web development, or freelance inquiry.
                </>
              )}
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-mono font-semibold" dir="ltr">
                +20 106 777 0148
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium">
                {language === 'ar' ? 'متاح الآن' : 'Active'}
              </span>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>{t.contact.chatNow}</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        <button
          id="btn-floating-whatsapp"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl shadow-emerald-900/40 transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95 relative focus:outline-none"
          title={t.floatingWhatsApp.tooltip}
          aria-label="WhatsApp"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>

          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white stroke-none" />
        </button>

        {/* Hover pill preview if closed */}
        {!isOpen && (
          <div
            className={`hidden sm:flex items-center gap-2 absolute top-1/2 -translate-y-1/2 ${
              isRTL ? 'left-16' : 'right-16'
            } px-3 py-1.5 rounded-xl bg-slate-900/95 border border-slate-700/80 text-xs font-semibold text-white shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
            <span>{t.contact.whatsapp}</span>
            <span className="text-emerald-400 font-mono text-[11px]" dir="ltr">
              +201067770148
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
