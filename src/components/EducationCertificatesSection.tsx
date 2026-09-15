import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Trophy,
  Brain,
  CheckCircle2,
  Calendar,
  Clock,
} from 'lucide-react';
import {
  educationData,
  trainingCourses,
  certificatesData,
} from '../data/portfolioData';

export const EducationCertificatesSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-950/60 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Education, Training & Contests
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Rigorous computer science foundation, competitive problem-solving milestones, and focused modern web courses.
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
                    University Degree
                  </span>
                  <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                    {educationData.degree}
                  </h3>
                  <h4 className="text-base text-slate-300 font-medium mt-1">
                    {educationData.institution}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-2 font-mono">
                    <span>{educationData.period}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-300 font-semibold">
                      Grade: {educationData.grade}
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
                      Graduation Project
                    </span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    Grade: {educationData.graduationProject.grade}
                  </span>
                </div>

                <h5 className="text-base font-bold text-white mb-2 font-display">
                  {educationData.graduationProject.title}
                </h5>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {educationData.graduationProject.description}
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Tools:</span>
                    <span className="text-slate-200 font-mono">
                      {educationData.graduationProject.tools.join(', ')}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-slate-400 mr-1">Technologies:</span>
                    {educationData.graduationProject.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-800 text-purple-200 border border-purple-500/20"
                      >
                        {t}
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
                    Competitive Programming & Contests
                  </h3>
                  <p className="text-xs text-slate-400">
                    Algorithmic competitions and university coding contests.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Problem Solving: 28th Place in Ain Shams Level 1 Contest (2021)
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Awarded 28th ranking among hundreds of participants in algorithmic problem solving and data structures.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      ACM Ain Shams Qualification to Level 2 (2021)
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Successfully qualified to Level 2 in ACM collegiate competitive programming contest.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Professional Training & Udemy Courses */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-8 border border-slate-800 shadow-xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Intensive Training Courses
                  </h3>
                  <p className="text-xs text-slate-400">
                    Over 120+ hours of advanced development coursework.
                  </p>
                </div>
              </div>

              <div className="space-y-4 flex-grow">
                {trainingCourses.map((course) => (
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
                      <span className="text-teal-300 font-medium">{course.platform}</span>
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
                <span>Verified technical course completions</span>
                <span className="text-emerald-400 font-semibold">126+ Total Hours</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
