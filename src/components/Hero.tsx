import React from 'react';
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowDown,
  Sparkles,
  Layers,
  CheckCircle2,
  Terminal,
  MessageCircle,
  FileText,
} from 'lucide-react';
import { contactDetails, projectsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface HeroProps {
  onOpenExportModal: () => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenExportModal,
  onOpenResumeModal,
}) => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const whatsappMessage =
    language === 'ar'
      ? 'مرحباً مهندس محمد، أود التواصل معك لمناقشة مشروع.'
      : 'Hello Mohamed, I would like to discuss a project with you.';

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
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wide max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
              <span className="truncate">{t.hero.availableBadge}</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2] font-display">
                {t.hero.greeting}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  {t.hero.greetingSurname}
                </span>
              </h1>
              <p className="text-lg sm:text-2xl text-slate-300 font-medium mt-2.5 flex items-center gap-2 flex-wrap font-display">
                <span>{t.hero.roleSubtitle1}</span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="text-emerald-400">{t.hero.roleSubtitle2}</span>
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-2xl">
              {t.hero.bio}
            </p>

            {/* Contact Quick Info Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs sm:text-sm text-slate-300">
              {/* WhatsApp Quick Link */}
              <a
                href={`https://wa.me/201067770148?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-colors group font-semibold"
                title="WhatsApp +201067770148"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span className="font-mono text-xs" dir="ltr">
                  +20 106 777 0148
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#25D366]/20 text-[#25D366]">
                  WhatsApp
                </span>
              </a>

              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <MapPin className="w-4 h-4 text-emerald-400" />
                {isRTL ? contactDetails.locationAr : contactDetails.location}
              </span>

              <a
                href={`mailto:${contactDetails.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>{contactDetails.email}</span>
              </a>

              <a
                href={`tel:${contactDetails.phone1}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{contactDetails.phone1}</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              {/* WhatsApp Direct Chat Button */}
              <a
                id="btn-hero-whatsapp"
                href={`https://wa.me/201067770148?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm shadow-lg shadow-[#25D366]/25 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 stroke-none" />
                <span>{t.hero.chatWhatsApp}</span>
              </a>

              {/* View Projects */}
              <a
                id="btn-hero-projects"
                href="#projects"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>
                  {t.hero.viewProjects} ({projectsData.length})
                </span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-3 w-full sm:w-auto">
                {/* HTML, CSS, JS Export Code */}
                <button
                  id="btn-hero-code"
                  onClick={onOpenExportModal}
                  className="px-3.5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-500/40 text-emerald-400 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer group"
                >
                  <Code2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="truncate">{t.hero.getStandaloneCode}</span>
                </button>

                {/* Resume / CV Modal */}
                <button
                  id="btn-hero-resume"
                  onClick={onOpenResumeModal}
                  className="px-3.5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span className="truncate">{t.hero.downloadCv}</span>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3.5 pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                {language === 'ar' ? 'حساباتي المهنية:' : 'Connect:'}
              </span>
              <a
                id="hero-whatsapp-social"
                href="https://wa.me/201067770148"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[#25D366] hover:border-[#25D366]/40 transition-colors"
                title="WhatsApp +201067770148"
              >
                <MessageCircle className="w-5 h-5 fill-current stroke-none" />
              </a>
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

          {/* Highlights Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-8 border border-slate-800 shadow-2xl shadow-emerald-500/5">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-slate-500 font-mono ml-2">
                    mohamed-hani.dev
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {language === 'ar' ? 'مهندس برمجيات Full-Stack' : 'Full-Stack Software Engineer'}
                </span>
              </div>

              {/* Key Technical Highlights */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {language === 'ar'
                        ? '+21 مشروعاً تجارياً ومنصة حقيقية'
                        : '21+ Real-World Platforms & Projects'}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {language === 'ar'
                        ? 'منصات SaaS، تطبيقات شوبيفاي في متجر App Store، معارض 3D، ومواقع شركات ألمانية وخليجية.'
                        : 'Production SaaS, Shopify App Store products, Three.js 3D showrooms, and German enterprise sites.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {language === 'ar'
                        ? 'هندسة الـ Full-Stack وتصميم النظم'
                        : 'Full-Stack & System Architecture'}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {language === 'ar'
                        ? 'Next.js, React, Node.js, NestJS, Laravel, TypeScript, PostgreSQL, Prisma, tRPC, و AWS.'
                        : 'Next.js, React, Node.js, NestJS, Laravel, TypeScript, PostgreSQL, Prisma, tRPC, and AWS.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {language === 'ar'
                        ? 'ويب 3D سينمائي والتطوير بالذكاء الاصطناعي'
                        : 'Cinematic 3D & AI Vibe Coding'}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {language === 'ar'
                        ? 'Three.js, WebGL, ضغط النماذج إلى 18MB، حركات GSAP، روبوتات Gemini AI و WhatsApp API.'
                        : 'Three.js, WebGL, 95% Draco model compression, GSAP scroll physics, and Gemini AI workflows.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {language === 'ar'
                        ? 'بكالوريوس الحاسبات والمعلومات'
                        : 'Computer Science Degree'}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {language === 'ar'
                        ? 'جامعة عين شمس (2017 - 2021) ومشروع تخرج ممتاز في الذكاء الاصطناعي (CNN) وتصفيات ECPC.'
                        : 'Ain Shams University (2017–2021) with Grade: Excellent Deep Learning CNN Project & ECPC.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Tech Badges */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <span className="text-xs text-slate-500 block mb-2 font-medium">
                  {language === 'ar' ? 'التقنيات الأساسية:' : 'Core Stack:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Next.js 14',
                    'React 19',
                    'Node.js',
                    'TypeScript',
                    'PostgreSQL',
                    'Prisma / Drizzle',
                    'AWS & Render',
                    'Three.js & WebGL',
                    'Shopify OS 2.0',
                    'WordPress / Woo',
                    'Gemini AI',
                    'GSAP',
                  ].map((tag) => (
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
