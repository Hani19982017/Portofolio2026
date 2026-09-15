import React, { useState } from 'react';
import {
  Code2,
  Database,
  Palette,
  Users,
  Languages,
  CheckCircle,
  Sparkles,
  Zap,
} from 'lucide-react';
import { skillCategories, languages } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabIcons: Record<string, React.ReactNode> = {
    frontend: <Code2 className="w-4 h-4" />,
    backend: <Database className="w-4 h-4" />,
    principles: <Palette className="w-4 h-4" />,
    interpersonal: <Users className="w-4 h-4" />,
  };

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.categoryKey === activeTab);

  return (
    <section id="skills" className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-500/20">
            <Zap className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Technical & Professional Skills
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A comprehensive matrix of technologies, frameworks, CMS environments, and programming disciplines.
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
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.categoryKey}
              onClick={() => setActiveTab(cat.categoryKey)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === cat.categoryKey
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tabIcons[cat.categoryKey]}
              <span>{cat.title}</span>
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
                  {tabIcons[category.categoryKey]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {category.title}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    {category.skills.length} skills listed
                  </span>
                </div>
              </div>

              {/* Skills Badges Grid */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
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
                Languages Spoken & Written
              </h4>
              <p className="text-xs text-slate-400">
                Comfortable communicating across international distributed teams and localized clients.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {languages.map((lang, lIdx) => (
              <div key={lIdx} className="bg-slate-950/80 px-4 py-3 rounded-xl border border-slate-800 text-center">
                <span className="text-sm font-bold text-white block">{lang.name}</span>
                <span className="text-xs text-emerald-400 font-medium block mt-0.5">{lang.level}</span>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < lang.dots ? 'bg-emerald-400' : 'bg-slate-700'
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
