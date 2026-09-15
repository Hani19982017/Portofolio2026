import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  MessageSquare,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import { contactDetails } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const ContactSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create a mailto URL with the form content
    const mailtoUrl = `mailto:${contactDetails.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  const whatsappMessage =
    language === 'ar'
      ? 'مرحباً مهندس محمد هاني، أرغب في التواصل معك لمناقشة مشروع ووردبريس / متجر إلكتروني.'
      : 'Hello Mohamed Hani, I would like to contact you regarding a WordPress / E-commerce project.';

  const whatsappLink = `https://wa.me/201067770148?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="contact" className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Priority Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#25D366]/15 via-slate-900/90 to-slate-950 border-2 border-[#25D366]/40 shadow-xl shadow-[#25D366]/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#25D366] text-slate-950 shadow-md shadow-[#25D366]/30">
                    <MessageCircle className="w-6 h-6 fill-slate-950 stroke-none" />
                  </div>
                  <div>
                    <span className="text-xs text-[#25D366] font-bold uppercase tracking-wider block">
                      {t.contact.whatsapp}
                    </span>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-white hover:text-[#25D366] transition-colors font-mono"
                      dir="ltr"
                    >
                      +20 106 777 0148
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('+201067770148', 'whatsapp')}
                  className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title={t.contact.copyNumber}
                >
                  {copiedField === 'whatsapp' ? (
                    <span className="flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                      <Check className="w-4 h-4" />
                      {t.contact.copied}
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {language === 'ar'
                  ? 'أسرع طريقة للتواصل المباشر لمناقشة المشاريع وفرص العمل. متاح دائماً للرد عبر واتساب.'
                  : 'Fastest way to get in touch for new web projects, full-time contracts, or consultations.'}
              </p>

              <a
                id="btn-contact-whatsapp-direct"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 stroke-none" />
                <span>{t.contact.chatNow}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                    {t.contact.email}
                  </span>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors"
                  >
                    {contactDetails.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(contactDetails.email, 'email')}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Numbers */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 shadow-xl space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                      {t.contact.phone1}
                    </span>
                    <a
                      href={`tel:${contactDetails.phone1}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-teal-400 transition-colors font-mono"
                      dir="ltr"
                    >
                      {contactDetails.phone1}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(contactDetails.phone1, 'phone1')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone 1"
                >
                  {copiedField === 'phone1' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                    {t.contact.phone2}
                  </span>
                  <a
                    href={`tel:${contactDetails.phone2}`}
                    className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-teal-400 transition-colors font-mono"
                    dir="ltr"
                  >
                    {contactDetails.phone2}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(contactDetails.phone2, 'phone2')}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone 2"
                >
                  {copiedField === 'phone2' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Location & Socials */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 shadow-xl space-y-3.5">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">
                  {isRTL ? contactDetails.locationAr : contactDetails.location}{' '}
                  <span className="text-slate-500">
                    ({language === 'ar' ? 'متاح للعمل عن بُعد' : 'Remote Available'})
                  </span>
                </span>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-3">
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-blue-600/20 text-slate-200 hover:text-blue-400 border border-slate-700 text-xs font-semibold transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-emerald-600/20 text-slate-200 hover:text-emerald-400 border border-slate-700 text-xs font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2 font-display">
                {t.contact.sendMessageTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                {language === 'ar'
                  ? 'املأ النموذج التالي لإرسال بريد إلكتروني مباشر، أو اضغط على زر الواتساب للرد الفوري.'
                  : 'Fill out this form to send a direct message, or click the WhatsApp button for instant communication.'}
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">
                    {t.contact.successTitle}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {t.contact.successDesc}
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-lg bg-slate-800 text-xs font-semibold text-white hover:bg-slate-700 cursor-pointer"
                  >
                    {language === 'ar' ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t.contact.nameField} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t.contact.emailField} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.contact.subjectField}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder={t.contact.subjectPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.contact.messageField} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      id="btn-submit-contact-form"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t.contact.sendButton}</span>
                    </button>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                      <span>{t.contact.orQuickWhatsApp}</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
