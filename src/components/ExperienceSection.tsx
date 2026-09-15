import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950/70 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Employment Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Work Experience
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Professional track record developing web platforms, custom WordPress themes, and front-end architectures.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500/50 to-slate-800" />

          <div className="space-y-10">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                id={`exp-${exp.id}`}
                className="relative pl-12 sm:pl-20 group"
              >
                {/* Marker Dot */}
                <div
                  className={`absolute left-2.5 sm:left-6.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 transform -translate-x-1/2 transition-transform group-hover:scale-125 ${
                    exp.isCurrent
                      ? 'bg-emerald-400 border-emerald-300 shadow-lg shadow-emerald-400/50 ring-4 ring-emerald-500/20'
                      : 'bg-slate-900 border-slate-600 group-hover:border-emerald-400'
                  }`}
                />

                {/* Card */}
                <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-8 border border-slate-800/90 shadow-xl hover:border-slate-700 transition-all">
                  
                  {/* Top Bar: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-white font-display">
                          {exp.role}
                        </h3>
                        <span className="text-xs px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                          {exp.employmentType}
                        </span>
                        {exp.isCurrent && (
                          <span className="text-xs px-2.5 py-0.5 rounded-md bg-teal-500/20 text-teal-300 font-semibold animate-pulse">
                            Current Role
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3 text-sm text-slate-300 font-medium mt-1">
                        <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1 text-slate-400 text-xs">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Period badge */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 my-5 text-sm text-slate-300">
                    {exp.bulletPoints.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Core Skills Tags */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <span className="text-xs font-semibold text-slate-400 block mb-2">
                      Technologies & Practices:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.coreSkills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] px-2.5 py-1 rounded bg-slate-800/70 text-slate-300 border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
