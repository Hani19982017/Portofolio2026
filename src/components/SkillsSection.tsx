import React, { useState } from 'react';
import {
  Code2,
  Database,
  Users,
  Zap,
  Box,
  Server,
  Layers,
  Cloud,
  Sparkles,
  ShoppingBag,
  Workflow,
  Search,
  Languages,
} from 'lucide-react';
import { skillCategories, languages as staticLanguages } from '../data/portfolioData';
import { skillCategoriesAr } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const currentSkillCategories =
    language === 'ar' ? skillCategoriesAr : skillCategories;

  const [activeTab, setActiveTab] = useState<string>('all');

  const tabIcons: Record<string, React.ReactNode> = {
    frontend: <Code2 className="w-4 h-4" />,
    '3d': <Box className="w-4 h-4" />,
    backend: <Server className="w-4 h-4" />,
    databases: <Database className="w-4 h-4" />,
    architecture: <Layers className="w-4 h-4" />,
    devops: <Cloud className="w-4 h-4" />,
    ai: <Sparkles className="w-4 h-4" />,
    ecommerce: <ShoppingBag className="w-4 h-4" />,
    integrations: <Workflow className="w-4 h-4" />,
    seo: <Search className="w-4 h-4" />,
    interpersonal: <Users className="w-4 h-4" />,
  };

  const filteredCategories =
    activeTab === 'all'
      ? currentSkillCategories
      : currentSkillCategories.filter((cat) => cat.categoryKey === activeTab);

  const displayedLanguages =
    language === 'ar'
      ? [
          { name: 'اللغة العربية', level: 'اللغة الأم (Native)', dots: 5 },
          { name: 'اللغة الإنجليزية', level: 'جيد جداً (Professional)', dots: 4 },
        ]
      : staticLanguages;

  return (
    <section id="skills" className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-500/20">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            {t.skills.title}
          </h2>
          <p className="mt-3 text-base text-slate-400">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {language === 'ar' ? 'جميع المهارات' : 'All Skills'}
          </button>
          {currentSkillCategories.map((cat) => (
            <button
              key={cat.categoryKey}
              onClick={() => setActiveTab(cat.categoryKey)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === cat.categoryKey
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tabIcons[cat.categoryKey] || <Code2 className="w-4 h-4" />}
              <span>{cat.title.split('(')[0]}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredCategories.map((category) => (
            <div
              key={category.categoryKey}
              className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-8 border border-slate-800 shadow-xl relative"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  {tabIcons[category.categoryKey] || <Code2 className="w-4 h-4" />}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                    {category.title}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    {category.skills.length}{' '}
                    {language === 'ar' ? 'مهارة مدرجة' : 'skills listed'}
                  </span>
                </div>
              </div>

              {/* Skills Badges Grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      skill.highlight
                        ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400'
                        : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span>{skill.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-900 p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400">
              <Languages className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-display">
                {language === 'ar'
                  ? 'اللغات المحكية والمكتوبة'
                  : 'Languages Spoken & Written'}
              </h4>
              <p className="text-xs text-slate-400">
                {language === 'ar'
                  ? 'تواصل فعال ومهني مع الفرق الدولية المتوزعة والعملاء في العالم العربي والشرق الأوسط.'
                  : 'Comfortable communicating across international distributed teams and localized clients.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {displayedLanguages.map((langItem, lIdx) => (
              <div
                key={lIdx}
                className="bg-slate-950/80 px-4 py-3 rounded-xl border border-slate-800 text-center min-w-[130px]"
              >
                <span className="text-sm font-bold text-white block">
                  {langItem.name}
                </span>
                <span className="text-xs text-emerald-400 font-medium block mt-0.5">
                  {langItem.level}
                </span>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < langItem.dots ? 'bg-emerald-400' : 'bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
