import React from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Terminal, 
  FileText, 
  Github, 
  Linkedin, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Workflow,
  Cpu,
  Mail,
  Award
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { theme } = useTheme();
  const { profile, stats, careerHighlights } = portfolioData;

  return (
    <section 
      id="hero" 
      className={`relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden border-b ${
        theme === 'light'
          ? 'bg-slate-50 border-slate-200'
          : theme === 'blueprint'
          ? 'bg-[#081730] border-cyan-500/30'
          : 'bg-slate-950 border-slate-800/80'
      }`}
    >
      {/* Blueprint Grid Background Effect */}
      <div 
        className={`absolute inset-0 pointer-events-none ${
          theme === 'blueprint' 
            ? 'opacity-25 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]'
            : theme === 'light'
            ? 'opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]'
            : 'opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px]'
        }`} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border ${
            theme === 'light'
              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
              : 'bg-emerald-950/70 text-emerald-300 border-emerald-700/50'
          }`}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{profile.workAuthorization}</span>
          </div>

          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border ${
            theme === 'light'
              ? 'bg-cyan-50 text-cyan-800 border-cyan-300'
              : 'bg-cyan-950/70 text-cyan-300 border-cyan-700/50'
          }`}>
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
            <span>TOGAF® Enterprise Architect Certified</span>
          </div>

          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border ${
            theme === 'light'
              ? 'bg-amber-50 text-amber-800 border-amber-300'
              : 'bg-amber-950/70 text-amber-300 border-amber-700/50'
          }`}>
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>AWS Certified Solutions Architect – Associate</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Info Left Column */}
          <div className="lg:col-span-8 space-y-6">
            
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider mb-2">
                <span>{profile.location}</span>
                <span>•</span>
                <span>12+ Years Enterprise Experience</span>
              </div>

              <h1 className={`font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none ${
                theme === 'light' ? 'text-slate-950' : 'text-white'
              }`}>
                {profile.fullName}
              </h1>

              <p className={`mt-3 text-lg sm:text-xl font-medium ${
                theme === 'light' ? 'text-cyan-800' : 'text-cyan-400'
              }`}>
                {profile.title}
              </p>
            </div>

            {/* Summary Block */}
            <p className={`text-sm sm:text-base leading-relaxed max-w-3xl ${
              theme === 'light' ? 'text-slate-700 font-normal' : 'text-slate-300'
            }`}>
              {profile.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-view-resume-btn"
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm shadow-md shadow-cyan-600/20 transition-all active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>

              <a
                id="hero-explore-architecture-btn"
                href="#architecture"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm border transition-all ${
                  theme === 'light'
                    ? 'bg-white hover:bg-slate-100 text-slate-900 border-slate-300 shadow-sm'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                }`}
              >
                <Layers className="w-4 h-4 text-cyan-500" />
                <span>System Blueprints</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                id="hero-contact-btn"
                href="#contact"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs border transition-all ${
                  theme === 'light'
                    ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                    : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 border-slate-800'
                }`}
              >
                <Mail className="w-3.5 h-3.5 text-cyan-500" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Core Capability Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className={`px-2.5 py-1 rounded-md border ${
                theme === 'light' ? 'bg-white text-slate-800 border-slate-300 font-medium' : 'bg-slate-900 text-slate-300 border-slate-800'
              }`}>Java 17 & Spring Boot</span>
              <span className={`px-2.5 py-1 rounded-md border ${
                theme === 'light' ? 'bg-white text-slate-800 border-slate-300 font-medium' : 'bg-slate-900 text-slate-300 border-slate-800'
              }`}>PySpark & Snowflake (100TB)</span>
              <span className={`px-2.5 py-1 rounded-md border ${
                theme === 'light' ? 'bg-white text-slate-800 border-slate-300 font-medium' : 'bg-slate-900 text-slate-300 border-slate-800'
              }`}>AWS Serverless Lakehouse</span>
              <span className={`px-2.5 py-1 rounded-md border ${
                theme === 'light' ? 'bg-white text-slate-800 border-slate-300 font-medium' : 'bg-slate-900 text-slate-300 border-slate-800'
              }`}>Apache Kafka & Microservices</span>
              <span className={`px-2.5 py-1 rounded-md border ${
                theme === 'light' ? 'bg-white text-slate-800 border-slate-300 font-medium' : 'bg-slate-900 text-slate-300 border-slate-800'
              }`}>Statistical Anomaly Detection (Z-Score)</span>
            </div>

          </div>

          {/* Key Metrics / Highlights Right Column */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Quick Summary Card */}
            <div className={`p-5 rounded-2xl border transition-all ${
              theme === 'light'
                ? 'bg-white border-slate-300 shadow-sm'
                : theme === 'blueprint'
                ? 'bg-[#0d2247] border-cyan-500/40'
                : 'bg-slate-900/80 border-slate-800'
            }`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800/80">
                <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold uppercase tracking-wider">
                  Verified Scale
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  Production Metrics
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3">
                {stats.map((stat, i) => (
                  <div key={i} className={`p-3 rounded-xl border ${
                    theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800/80'
                  }`}>
                    <div className="font-display font-bold text-lg sm:text-xl text-cyan-600 dark:text-cyan-400">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-slate-600 dark:text-slate-400 leading-tight mt-0.5">
                      {stat.helper}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Connect Card */}
            <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
              theme === 'light' ? 'bg-white border-slate-300 shadow-sm' : 'bg-slate-900/50 border-slate-800'
            }`}>
              <div className="space-y-0.5">
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Direct Contact</div>
                <a 
                  href={`mailto:${profile.socials.email}`} 
                  className="text-xs font-semibold text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block"
                >
                  {profile.socials.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 border border-blue-500/30 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
