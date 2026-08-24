import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  Check
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Certifications: React.FC = () => {
  const { theme } = useTheme();
  const { certifications } = portfolioData;

  const badgeColorMap: Record<string, { badge: string; border: string }> = {
    Gold: {
      badge: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
      border: 'hover:border-amber-500/40'
    },
    Cyan: {
      badge: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30',
      border: 'hover:border-cyan-500/40'
    },
    Emerald: {
      badge: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
      border: 'hover:border-emerald-500/40'
    },
    Purple: {
      badge: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30',
      border: 'hover:border-purple-500/40'
    },
  };

  return (
    <section 
      id="certifications" 
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
            <Award className="w-4 h-4 text-cyan-500" />
            <span>Professional Credentials & Standardizations</span>
          </div>
          <h2 className={`font-display text-2xl sm:text-4xl font-bold tracking-tight ${
            theme === 'light' ? 'text-slate-950' : 'text-white'
          }`}>
            Certifications & <span className="text-cyan-600 dark:text-cyan-400">Industry Accreditations</span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${
            theme === 'light' ? 'text-slate-700' : 'text-slate-300'
          }`}>
            Recognized industry certifications spanning Enterprise Architecture, Cloud Architecture, Healthcare Management, and Applied Artificial Intelligence.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const colors = badgeColorMap[cert.badgeType] || badgeColorMap.Cyan;
            return (
              <div
                key={cert.id}
                id={`cert-card-${cert.id}`}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                  theme === 'light'
                    ? 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                    : theme === 'blueprint'
                    ? 'bg-[#0a1e3f] border-cyan-500/30'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                } ${colors.border}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold border ${colors.badge}`}>
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {cert.issueDate}
                    </span>
                  </div>

                  <h3 className={`font-display font-bold text-base mb-1 ${
                    theme === 'light' ? 'text-slate-950' : 'text-slate-100'
                  }`}>
                    {cert.title}
                  </h3>

                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-4">
                    Credential: {cert.credentialId}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-200 dark:border-slate-800/80 mb-4">
                    {cert.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Domains Covered Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                  {cert.domainsCovered.map((d, i) => (
                    <span
                      key={i}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        theme === 'light'
                          ? 'bg-slate-100 text-slate-700 border-slate-200'
                          : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
