import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Trophy,
  Brain,
} from 'lucide-react';
import {
  educationData,
  trainingCourses,
} from '../data/portfolioData';
import {
  educationDataAr,
  trainingCoursesAr,
} from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const EducationCertificatesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const currentEducation = language === 'ar' ? educationDataAr : educationData;
  const currentTraining =
    language === 'ar' ? trainingCoursesAr : trainingCourses;

  return (
    <section id="education" className="py-20 bg-slate-950/60 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.education.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            {t.education.title}
          </h2>
          <p className="mt-3 text-base text-slate-400">
            {t.education.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Ain Shams CS Degree & Graduation Project */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                    {language === 'ar' ? 'المؤهل الجامعي' : 'University Degree'}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                    {currentEducation.degree}
                  </h3>
                  <h4 className="text-base text-slate-300 font-medium mt-1">
                    {currentEducation.institution}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-2 font-mono">
                    <span>{currentEducation.period}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-300 font-semibold">
                      {language === 'ar' ? 'التقدير: ' : 'Grade: '}
                      {currentEducation.grade}
                    </span>
                  </div>
                </div>
              </div>

              {/* Graduation Project Deep Dive */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 bg-slate-950/40 p-5 rounded-xl border border-slate-800/60">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                      {t.education.gradProjectBadge}
                    </span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {language === 'ar' ? 'التقدير: ممتاز' : 'Grade: Excellent'}
                  </span>
                </div>

                <h5 className="text-base font-bold text-white mb-2 font-display">
                  {currentEducation.graduationProject.title}
                </h5>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {currentEducation.graduationProject.description}
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">
                      {language === 'ar' ? 'الأدوات:' : 'Tools:'}
                    </span>
                    <span className="text-slate-200 font-mono">
                      {currentEducation.graduationProject.tools.join(', ')}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-slate-400 mr-1">
                      {language === 'ar' ? 'التقنيات المستخدمة:' : 'Technologies:'}
                    </span>
                    {currentEducation.graduationProject.technologies.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-800 text-purple-200 border border-purple-500/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Problem Solving Contests Card */}
            <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-8 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {t.education.competitionsTitle}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {language === 'ar'
                      ? 'المسابقات الخوارزمية وحل المشكلات البرمجية للجامعات المصرية (ECPC / ACM).'
                      : 'Algorithmic competitions and university coding contests.'}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {language === 'ar'
                        ? 'المركز 28 في مسابقة جامعة عين شمس لحل المشكلات (المستوى الأول 2021)'
                        : 'Problem Solving: 28th Place in Ain Shams Level 1 Contest (2021)'}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {language === 'ar'
                        ? 'الحصول على المركز 28 من بين مئات المتسابقين في الخوارزميات وهياكل البيانات وسرعة الحل.'
                        : 'Awarded 28th ranking among hundreds of participants in algorithmic problem solving and data structures.'}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {language === 'ar'
                        ? 'تأهل ACM عين شمس للمستوى الثاني (ACM Ain Shams Qualifier Level 2 - 2021)'
                        : 'ACM Ain Shams Qualification to Level 2 (2021)'}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {language === 'ar'
                        ? 'اجتياز المسابقة التأهيلية للبرمجة التنافسية الجامعية والترقي للمستوى المتقدم.'
                        : 'Successfully qualified to Level 2 in ACM collegiate competitive programming contest.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Training & Courses */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-8 border border-slate-800 shadow-xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {t.education.trainingCoursesTitle}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {language === 'ar'
                      ? 'أكثر من 150 ساعة من التدريب العملي المتقدم في ووردبريس وأطر الويب الحديثة.'
                      : 'Over 120+ hours of advanced development coursework.'}
                  </p>
                </div>
              </div>

              <div className="space-y-4 flex-grow">
                {currentTraining.map((course) => (
                  <div
                    key={course.id}
                    className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all space-y-2"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-base font-bold text-white font-display">
                        {course.title}
                      </h4>
                      <span className="text-xs px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20 self-start sm:self-auto">
                        {course.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <span className="text-teal-300 font-medium">
                        {course.platform}
                      </span>
                      <span>•</span>
                      <span>{course.period}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                      {course.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>
                  {language === 'ar'
                    ? 'شهادات ودورات تقنية موثقة'
                    : 'Verified technical course completions'}
                </span>
                <span className="text-emerald-400 font-semibold">
                  150+ {language === 'ar' ? 'ساعة تدريبية' : 'Total Hours'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
