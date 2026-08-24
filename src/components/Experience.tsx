import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Building2,
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Experience: React.FC = () => {
  const { theme } = useTheme();
  const { experience, education } = portfolioData;

  return (
    <section 
      id="experience" 
      className={`py-16 sm:py-24 border-b ${
        theme === 'light'
          ? 'bg-slate-50 border-slate-200'
          : theme === 'blueprint'
          ? 'bg-[#081835] border-cyan-500/30'
          : 'bg-slate-950 border-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider mb-2">
            <Briefcase className="w-4 h-4 text-cyan-500" />
            <span>Career Milestones & Leadership</span>
          </div>
          <h2 className={`font-display text-2xl sm:text-4xl font-bold tracking-tight ${
            theme === 'light' ? 'text-slate-950' : 'text-white'
          }`}>
            Professional Experience & <span className="text-cyan-600 dark:text-cyan-400">Engineering Impact</span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${
            theme === 'light' ? 'text-slate-700' : 'text-slate-300'
          }`}>
            12+ years delivering high-impact healthcare and insurance platforms, leading engineering squads, and driving architecture governance across global organizations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 mb-16">
          {experience.map((exp, idx) => (
            <div
              key={exp.id}
              id={`experience-item-${exp.id}`}
              className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                theme === 'light'
                  ? 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                  : theme === 'blueprint'
                  ? 'bg-[#0a1e3f] border-cyan-500/30'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      <Building2 className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className={`font-display font-bold text-lg sm:text-xl ${
                        theme === 'light' ? 'text-slate-950' : 'text-slate-100'
                      }`}>
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                        {exp.company}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <p className={`text-xs sm:text-sm leading-relaxed my-4 ${
                theme === 'light' ? 'text-slate-700' : 'text-slate-300'
              }`}>
                {exp.overview}
              </p>

              {/* Accomplishments */}
              <div className="space-y-2 mb-5">
                <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                  Key Technical Deliverables & Architectural Accomplishments:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {exp.architectureAccomplishments.map((acc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>{acc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-mono border ${
                      theme === 'light'
                        ? 'bg-slate-100 text-slate-800 border-slate-300'
                        : 'bg-slate-950 text-slate-300 border-slate-800'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider mb-6">
            <GraduationCap className="w-4 h-4 text-cyan-500" />
            <span>Academic Background & Advanced Degrees</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                id={`education-card-${edu.id}`}
                className={`p-6 rounded-2xl border ${
                  theme === 'light'
                    ? 'bg-white border-slate-200 shadow-sm'
                    : theme === 'blueprint'
                    ? 'bg-[#0a1e3f] border-cyan-500/30'
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                  {edu.degree}
                </div>
                <h4 className={`font-display font-bold text-base mb-1 ${
                  theme === 'light' ? 'text-slate-950' : 'text-slate-100'
                }`}>
                  {edu.field}
                </h4>
                <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {edu.institution}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">
                  {edu.location}
                </div>

                <div className="space-y-1 pt-3 border-t border-slate-200 dark:border-slate-800">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-cyan-500 shrink-0" />
                      <span>{h}</span>
                    </div>
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
