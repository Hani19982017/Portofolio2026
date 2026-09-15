import React from 'react';
import { Target, Compass, Sparkles, Code, Server, Globe } from 'lucide-react';
import { careerObjective } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const CareerObjective: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const pillars =
    language === 'ar'
      ? [
          {
            icon: <Globe className="w-5 h-5 text-emerald-400" />,
            title: 'تطوير ووردبريس وووكومرس متقدم',
            desc: 'بناء مواقع ومتاجر إلكترونية متجاوبة وعالية السرعة مع قوالب وإضافات مخصصة وربط بوابات الدفع وقواعد بيانات MySQL.',
          },
          {
            icon: <Code className="w-5 h-5 text-teal-400" />,
            title: 'إتقان هندسة الواجهات الأمامية',
            desc: 'واجهات مستخدم احترافية بدقة بيكسل مثالية بالاعتماد على HTML5, CSS3, JavaScript ES6+, Bootstrap, Angular, و React.',
          },
          {
            icon: <Server className="w-5 h-5 text-blue-400" />,
            title: 'منطق التجارة الإلكترونية والـ Backend',
            desc: 'تكامل واجهات البرمجة RESTful APIs، وحقول ACF المخصصة، وقوالب شوبيفاي Liquid، وحلول PHP / Laravel المتينة.',
          },
          {
            icon: <Sparkles className="w-5 h-5 text-purple-400" />,
            title: 'التعلم المستمر وحل المشكلات',
            desc: 'الالتزام بتقديم حلول برمجية مبتكرة ومتمحورة حول متطلبات العميل مع خلفية قوية في الخوارزميات والتفكير التحليلي.',
          },
        ]
      : [
          {
            icon: <Globe className="w-5 h-5 text-emerald-400" />,
            title: 'WordPress & WooCommerce Core',
            desc: 'Building responsive, scalable, and high-performance websites with custom theme/plugin development, REST API integrations, and database tuning.',
          },
          {
            icon: <Code className="w-5 h-5 text-teal-400" />,
            title: 'Modern Front-End Mastery',
            desc: 'Pixel-perfect interfaces using HTML5, CSS3, JavaScript (ES6+), Bootstrap, Angular, and React with strict cross-browser consistency.',
          },
          {
            icon: <Server className="w-5 h-5 text-blue-400" />,
            title: 'Backend & E-Commerce Logic',
            desc: 'Integrating complex business models, payment gateways, ACF custom data structures, Shopify Liquid templating, and Laravel/PHP backends.',
          },
          {
            icon: <Sparkles className="w-5 h-5 text-purple-400" />,
            title: 'Continuous Growth & Innovation',
            desc: 'Committed to delivering client-focused web applications with clean architecture, algorithmic problem solving, and modern best practices.',
          },
        ];

  return (
    <section id="about" className="py-20 bg-slate-950/60 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-500/20">
            <Target className="w-3.5 h-3.5" />
            <span>{t.objective.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            {t.objective.title}
          </h2>
          <p className="mt-3 text-base text-slate-400">
            {language === 'ar'
              ? 'نهج مخصص للتطوير المستمر، تقديم حلول برمجية عالية الأثر، ونجاح العميل.'
              : 'A passionate approach to modern web development, continuous learning, and client success.'}
          </p>
        </div>

        {/* Narrative Box */}
        <div className="relative rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 p-6 sm:p-10 border border-slate-800 shadow-xl mb-12">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 hidden sm:flex">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p className="font-light">
                {language === 'ar' ? t.objective.text : careerObjective}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-1"
            >
              <div className="p-2.5 rounded-lg bg-slate-800/80 w-fit mb-4">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2 font-display">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
