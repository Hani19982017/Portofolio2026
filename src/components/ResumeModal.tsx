import React from 'react';
import {
  FileText,
  Printer,
  X,
  MessageCircle,
} from 'lucide-react';
import {
  contactDetails,
  careerObjective,
  projectsData,
  experienceData,
  educationData,
  trainingCourses,
  certificatesData,
  skillCategories,
} from '../data/portfolioData';
import {
  careerObjectiveAr,
  projectsDataAr,
  experienceDataAr,
  educationDataAr,
  trainingCoursesAr,
  skillCategoriesAr,
} from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { language, isRTL } = useLanguage();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const isAr = language === 'ar';
  const name = isAr ? contactDetails.nameAr : contactDetails.name;
  const title = isAr ? contactDetails.titleAr : contactDetails.title;
  const location = isAr ? contactDetails.locationAr : contactDetails.location;
  const objective = isAr ? careerObjectiveAr : careerObjective;
  const currentExp = isAr ? experienceDataAr : experienceData;
  const currentEdu = isAr ? educationDataAr : educationData;
  const currentCourses = isAr ? trainingCoursesAr : trainingCourses;
  const currentProjects = isAr ? projectsDataAr : projectsData;
  const currentSkills = isAr ? skillCategoriesAr : skillCategories;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
        {/* Modal Action Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-800 bg-slate-950 no-print">
          <div className="flex items-center gap-2 text-white font-bold font-display text-sm sm:text-base">
            <FileText className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <span className="truncate">
              {isAr
                ? 'معاينة السيرة الذاتية الرسمية'
                : 'Curriculum Vitae Preview'}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">
                {isAr ? 'طباعة / حفظ كـ PDF' : 'Print / Save as PDF'}
              </span>
              <span className="sm:hidden">
                {isAr ? 'طباعة PDF' : 'Print PDF'}
              </span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document */}
        <div
          id="cv-printable-area"
          dir={isRTL ? 'rtl' : 'ltr'}
          className={`flex-1 p-5 sm:p-12 overflow-y-auto bg-white text-slate-900 space-y-8 ${
            isAr ? 'font-arabic' : 'font-sans'
          }`}
        >
          {/* Header */}
          <div className="border-b-2 border-slate-800 pb-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {name}
            </h1>
            <p className="text-lg font-bold text-emerald-700 mt-1">{title}</p>
            <div className="flex flex-wrap justify-center items-center gap-3 text-xs text-slate-700 mt-3 font-medium">
              <span>{location}</span>
              <span>•</span>
              <span className="flex items-center gap-1 font-bold text-emerald-700">
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                WhatsApp: +201067770148
              </span>
              <span>•</span>
              <span dir="ltr">+20 150 755 8158</span>
              <span>•</span>
              <span>{contactDetails.email}</span>
            </div>
            <div className="flex justify-center items-center gap-4 text-xs text-blue-700 mt-2 font-mono">
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/mohamed-hani500
              </a>
              <span>•</span>
              <a href={contactDetails.github} target="_blank" rel="noreferrer">
                github.com/mtdm2023
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              {isAr ? 'الهدف المهني والملف الشخصي' : 'Career Objective'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              {objective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              {isAr ? 'التعليم الجامعي' : 'Education'}
            </h2>
            <div className="text-xs sm:text-sm">
              <div className="flex justify-between items-baseline font-bold text-slate-800">
                <span>
                  {currentEdu.degree}, {currentEdu.institution}
                </span>
                <span className="text-slate-500 font-normal">
                  {currentEdu.period}
                </span>
              </div>
              <p className="text-slate-600">
                {isAr ? 'التقدير العام: ' : 'Grade: '}
                {currentEdu.grade}
              </p>

              <div
                className={`mt-2 ${
                  isRTL ? 'pr-3 border-r-2' : 'pl-3 border-l-2'
                } border-slate-300 space-y-1`}
              >
                <p className="font-semibold text-slate-800">
                  {isAr ? 'مشروع التخرج: ' : 'Graduation Project: '}
                  {currentEdu.graduationProject.title} (
                  {isAr ? 'التقدير: ممتاز' : `Grade: ${currentEdu.graduationProject.grade}`})
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {currentEdu.graduationProject.description}
                </p>
                <p className="text-xs text-slate-500">
                  {isAr ? 'التقنيات: ' : 'Technologies: '}
                  {currentEdu.graduationProject.technologies.join(', ')} •{' '}
                  {isAr ? 'الأدوات: ' : 'Tools: '}
                  {currentEdu.graduationProject.tools.join(', ')}
                </p>
              </div>
            </div>
          </div>

          {/* Training & Certifications */}
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              {isAr ? 'الدورات التدريبية ومسابقات حل المشكلات' : 'Training & Contests'}
            </h2>
            <ul
              className={`list-disc ${
                isRTL ? 'pr-5' : 'pl-5'
              } text-xs text-slate-700 space-y-1.5`}
            >
              {currentCourses.map((c) => (
                <li key={c.id}>
                  <strong>{c.title}</strong> ({c.platform}, {c.duration}) —{' '}
                  {c.period}.
                </li>
              ))}
              {certificatesData
                .filter((c) => c.type === 'contest')
                .map((c) => (
                  <li key={c.id}>
                    <strong>
                      {isAr ? c.titleAr || c.title : c.title}
                    </strong>{' '}
                    — {c.issuer}.
                  </li>
                ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              {isAr ? 'الخبرات المهنية وسجل العمل' : 'Professional Experience'}
            </h2>
            <div className="space-y-4">
              {currentExp.map((exp) => (
                <div key={exp.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold text-slate-800">
                    <span>
                      {exp.role} —{' '}
                      <span className="text-slate-600 font-medium">
                        {exp.company} ({exp.employmentType})
                      </span>
                    </span>
                    <span className="text-slate-500 text-xs font-normal">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-1.5">{exp.location}</p>
                  <ul
                    className={`list-disc ${
                      isRTL ? 'pr-5' : 'pl-5'
                    } text-xs text-slate-700 space-y-1`}
                  >
                    {exp.bulletPoints.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects Highlight */}
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              {isAr
                ? `نماذج مشاريع منتقاة (${currentProjects.length} مشروعاً مسجلاً)`
                : `Selected Projects (${projectsData.length} total)`}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {currentProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-2.5 bg-slate-50 rounded border border-slate-200"
                >
                  <div className="font-bold text-slate-800">
                    {p.title}{' '}
                    <span className="text-[10px] font-normal text-emerald-700">
                      ({p.categoryLabel})
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px] mt-0.5 line-clamp-2">
                    {p.description}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">
                    {isAr ? 'التقنيات: ' : 'Built with: '}
                    {p.technologies.slice(0, 4).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              {isAr ? 'مصفوفة المهارات والتقنيات' : 'Skills Matrix'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              {currentSkills.map((c) => (
                <div key={c.categoryKey}>
                  <strong className="text-slate-900 block mb-0.5">
                    {c.title}:
                  </strong>
                  <span>{c.skills.map((s) => s.name).join(', ')}</span>
                </div>
              ))}
              <div>
                <strong className="text-slate-900 block mb-0.5">
                  {isAr ? 'اللغات:' : 'Languages:'}
                </strong>
                <span>
                  {isAr
                    ? 'العربية (اللغة الأم)، الإنجليزية (إتقان مهني)'
                    : 'Arabic (Native), English (Professional)'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
