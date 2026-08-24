import React from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Workflow, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Database,
  Server,
  Award
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const { theme } = useTheme();
  const { profile, architecturalPillars, stats } = portfolioData;

  const pillarIcons: Record<string, any> = {
    ShieldCheck,
    Layers,
    Workflow,
    Cpu,
  };

  return (
    <section 
      id="about" 
      className={`py-16 sm:py-24 border-b ${
        theme === 'light'
          ? 'bg-white border-slate-200'
          : theme === 'blueprint'
          ? 'bg-[#06142a] border-cyan-500/30'
          : 'bg-slate-950 border-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-cyan-500" />
            <span>Architect Profile & Engineering Philosophy</span>
          </div>
          <h2 className={`font-display text-2xl sm:text-4xl font-bold tracking-tight ${
            theme === 'light' ? 'text-slate-950' : 'text-white'
          }`}>
            Enterprise Solutions with <span className="text-cyan-600 dark:text-cyan-400">Architectural Rigor</span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
            theme === 'light' ? 'text-slate-700' : 'text-slate-300'
          }`}>
            Over 12+ years across healthcare, insurance, and enterprise analytics ecosystems, translating complex business requirements into resilient distributed systems, high-throughput cloud lakehouses, and production-hardened microservices.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {architecturalPillars.map((pillar, i) => {
            const IconComponent = pillarIcons[pillar.icon] || Layers;
            return (
              <div 
                key={i}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-slate-50 border-slate-200 hover:border-cyan-500/40 hover:shadow-md'
                    : theme === 'blueprint'
                    ? 'bg-[#0a1e3f] border-cyan-500/30 hover:border-cyan-400'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="p-3 w-fit rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className={`font-display font-bold text-base mb-1 ${
                  theme === 'light' ? 'text-slate-900' : 'text-slate-100'
                }`}>
                  {pillar.title}
                </h3>
                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2 font-medium">
                  {pillar.tagline}
                </div>
                <p className={`text-xs leading-relaxed ${
                  theme === 'light' ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Narrative Box */}
        <div className={`p-6 sm:p-8 rounded-2xl border ${
          theme === 'light'
            ? 'bg-slate-50 border-slate-200'
            : theme === 'blueprint'
            ? 'bg-[#081836] border-cyan-500/40'
            : 'bg-slate-900/40 border-slate-800/80'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                <span>TOGAF ADM & Architecture Governance</span>
              </div>

              <h4 className={`font-display text-xl font-bold ${
                theme === 'light' ? 'text-slate-900' : 'text-slate-100'
              }`}>
                Bridging Business Capabilities & Scalable Technology
              </h4>

              <p className={`text-xs sm:text-sm leading-relaxed ${
                theme === 'light' ? 'text-slate-700' : 'text-slate-300'
              }`}>
                {profile.extendedBio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className={theme === 'light' ? 'text-slate-800 font-medium' : 'text-slate-200'}>
                    <strong>High-Level & Low-Level Design (HLD/LLD)</strong> with ARB defense.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className={theme === 'light' ? 'text-slate-800 font-medium' : 'text-slate-200'}>
                    <strong>80k+ Broker Ready-to-Sell</strong> batch runtime slashed from 48h to &lt;1h.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className={theme === 'light' ? 'text-slate-800 font-medium' : 'text-slate-200'}>
                    <strong>1M+ CDC delta records in 4.3s</strong> via distributed PySpark Glue.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className={theme === 'light' ? 'text-slate-800 font-medium' : 'text-slate-200'}>
                    <strong>90+ KPI Anomaly Detection</strong> automating 85% of manual monitoring.
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Credentials Summary Card */}
            <div className="lg:col-span-4">
              <div className={`p-5 rounded-xl border space-y-3 ${
                theme === 'light' ? 'bg-white border-slate-300 shadow-sm' : 'bg-slate-950 border-slate-800'
              }`}>
                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider">
                  Core Credentials
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="pb-2 border-b border-slate-200 dark:border-slate-800">
                    <div className="font-bold text-slate-900 dark:text-slate-100">TOGAF® Enterprise Architecture</div>
                    <div className="text-slate-600 dark:text-slate-400">The Open Group Certified Practitioner</div>
                  </div>
                  <div className="pb-2 border-b border-slate-200 dark:border-slate-800">
                    <div className="font-bold text-slate-900 dark:text-slate-100">AWS Certified Solutions Architect</div>
                    <div className="text-slate-600 dark:text-slate-400">Associate · Amazon Web Services</div>
                  </div>
                  <div className="pb-2 border-b border-slate-200 dark:border-slate-800">
                    <div className="font-bold text-slate-900 dark:text-slate-100">AHM-250 Healthcare Management</div>
                    <div className="text-slate-600 dark:text-slate-400">America's Health Insurance Plans (AHIP)</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-slate-100">MSc Cyber Security</div>
                    <div className="text-slate-600 dark:text-slate-400">Liverpool John Moores University (UK)</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
