import React, { useState, useMemo } from 'react';
import {
  FolderGit2,
  Search,
  Wrench,
  CheckCircle2,
  X,
  Eye,
  SlidersHorizontal,
  ChevronRight,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { projectsDataAr } from '../data/translations';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const ProjectsSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const currentProjectsList = language === 'ar' ? projectsDataAr : projectsData;

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(
    null
  );

  const categories = useMemo(() => {
    const counts: Record<string, number> = {};
    currentProjectsList.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });

    const list: { id: string; label: string }[] = [
      { id: 'all', label: `${t.projects.allCategories} (${currentProjectsList.length})` },
    ];

    const categoryOrder: string[] = [
      'saas',
      '3d',
      'shopify',
      'agency',
      'wordpress',
      'ai',
      'frontend',
    ];

    categoryOrder.forEach((catKey) => {
      const count = counts[catKey] || 0;
      const catLabel = (t.projects.categories as Record<string, string>)[catKey];
      if (count > 0 && catLabel) {
        list.push({
          id: catKey,
          label: `${catLabel} (${count})`,
        });
      }
    });

    return list;
  }, [currentProjectsList, t.projects.allCategories, t.projects.categories]);

  const filteredProjects = useMemo(() => {
    return currentProjectsList.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesQuery =
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(query)
        ) ||
        project.tools.some((tool) => tool.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [currentProjectsList, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-500/20">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{t.projects.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              {t.projects.title} ({currentProjectsList.length})
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-2xl">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-2 text-xs font-mono bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 text-slate-300 self-start md:self-auto">
            <span>{language === 'ar' ? 'المعروض:' : 'Showing:'}</span>
            <span className="text-emerald-400 font-bold">
              {filteredProjects.length}
            </span>
            <span>/</span>
            <span>{currentProjectsList.length}</span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search
              className={`w-4 h-4 text-slate-500 absolute ${
                isRTL ? 'right-3.5' : 'left-3.5'
              } top-1/2 -translate-y-1/2`}
            />
            <input
              id="search-projects-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.projects.searchPlaceholder}
              className={`w-full bg-slate-900/90 border border-slate-800 rounded-xl ${
                isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'
              } py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute ${
                  isRTL ? 'left-3' : 'right-3'
                } top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs`}
              >
                {language === 'ar' ? 'مسح' : 'Clear'}
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-900/30 rounded-2xl border border-slate-800">
            <SlidersHorizontal className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">
              {t.projects.noResults}
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              {language === 'ar'
                ? 'جرّب تعديل نص البحث أو اختيار تصنيف آخر.'
                : 'Try adjusting your search query or switching category filters.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold bg-emerald-500 text-slate-950 rounded-lg cursor-pointer"
            >
              {t.projects.resetFilters}
            </button>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group flex flex-col justify-between rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40 relative"
            >
              <div>
                {/* Header: Category Badge & Client Type */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {project.clientType.split(' ')[0]}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors font-display">
                  {project.title}
                </h3>
                <h4 className="text-xs text-sky-400 font-medium mt-1 mb-3">
                  {project.subtitle}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-[11px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Tools & Inspect Button */}
              <div className="pt-4 border-t border-slate-800/80 mt-auto">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Wrench className="w-3.5 h-3.5 text-slate-500" />
                    <span className="truncate max-w-[190px]">
                      {project.tools.join(', ')}
                    </span>
                  </span>
                </div>

                <button
                  id={`btn-inspect-${project.id}`}
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-800/70 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <Eye className="w-4 h-4 text-emerald-400 group-hover/btn:text-slate-950 transition-colors" />
                  <span>{t.projects.viewCaseStudy}</span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 opacity-60 ${
                      isRTL ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">
          <div
            className={`relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl p-5 sm:p-8 shadow-2xl space-y-5 sm:space-y-6 ${
              isRTL ? 'text-right' : 'text-left'
            }`}
            id="project-detail-modal"
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className={`absolute top-4 ${
                isRTL ? 'left-4' : 'right-4'
              } p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer z-10`}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {activeModalProject.categoryLabel}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {t.projects.role}: {activeModalProject.role}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {activeModalProject.title}
              </h3>
              <p className="text-sm text-sky-400 font-medium mt-1">
                {activeModalProject.subtitle}
              </p>
            </div>

            {/* Client & Context */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <div>
                <span className="text-slate-500 block">
                  {language === 'ar' ? 'نوع العميل / المشروع:' : 'Client Type:'}
                </span>
                <span className="text-slate-200 font-medium">
                  {activeModalProject.clientType}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block">
                  {t.projects.tools}:
                </span>
                <span className="text-slate-200 font-medium">
                  {activeModalProject.tools.join(', ')}
                </span>
              </div>
            </div>

            {/* Project Overview */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                {language === 'ar'
                  ? 'نبذة عن المشروع والأهداف'
                  : 'Project Overview & Objectives'}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/30 p-4 rounded-xl border border-slate-800/80">
                {activeModalProject.description}
              </p>
            </div>

            {/* Full Architectural Details */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                {language === 'ar'
                  ? 'التفاصيل الهندسية والتنفيذ البرمجي'
                  : 'Engineering & Implementation Details'}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/30 p-4 rounded-xl border border-slate-800/80">
                {activeModalProject.fullDetails}
              </p>
            </div>

            {/* Key Deliverables & Highlights */}
            {activeModalProject.highlights && (
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  {t.projects.keyHighlights}
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Complete Technologies List */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                {t.projects.technologies}
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.technologies.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-md bg-slate-800 text-emerald-300 border border-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Close Action */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold transition-colors cursor-pointer"
              >
                {t.projects.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
