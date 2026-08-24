import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  Workflow, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  ArrowRight,
  Sparkles,
  Lock,
  Boxes
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { Project } from '../types/portfolio';

export const Projects: React.FC = () => {
  const { theme } = useTheme();
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Enterprise Systems' },
    { id: 'Enterprise Cloud & AI', label: 'Cloud & Lakehouse' },
    { id: 'Backend & Microservices', label: 'Microservices & Batch' },
    { id: 'Data & Security', label: 'Data & Security' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section 
      id="projects" 
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider mb-2">
              <Boxes className="w-4 h-4 text-cyan-500" />
              <span>Production Systems Portfolio</span>
            </div>
            <h2 className={`font-display text-2xl sm:text-4xl font-bold tracking-tight ${
              theme === 'light' ? 'text-slate-950' : 'text-white'
            }`}>
              Enterprise Solutions & <span className="text-cyan-600 dark:text-cyan-400">Architected Platforms</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`project-filter-${cat.id.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-600 text-white font-semibold shadow-sm'
                    : theme === 'light'
                    ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`rounded-2xl border transition-all flex flex-col justify-between ${
                  theme === 'light'
                    ? 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:shadow-md'
                    : theme === 'blueprint'
                    ? 'bg-[#0a1e3f] border-cyan-500/30 hover:border-cyan-400'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold border border-cyan-500/20">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      <Lock className="w-3 h-3 text-slate-400" />
                      <span>Enterprise Production</span>
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className={`font-display font-bold text-lg sm:text-xl ${
                      theme === 'light' ? 'text-slate-950' : 'text-slate-100'
                    }`}>
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mt-1 font-medium">
                      {project.tagline}
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    {isExpanded ? project.longDescription : project.description}
                  </p>

                  {/* Architecture Pattern Chip */}
                  <div className={`p-3 rounded-xl border text-xs font-mono ${
                    theme === 'light' ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-950/70 border-slate-800 text-cyan-300'
                  }`}>
                    <span className="text-slate-500 dark:text-slate-400 mr-1.5">// System Pattern:</span>
                    <strong>{project.systemPattern}</strong>
                  </div>

                  {/* Architecture Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      Architectural Highlights & Impact:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {project.architectureHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                          theme === 'light'
                            ? 'bg-white text-slate-800 border-slate-300'
                            : 'bg-slate-950 text-slate-300 border-slate-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Bar */}
                <div className={`px-6 py-3.5 border-t flex items-center justify-between ${
                  theme === 'light' ? 'bg-slate-100/70 border-slate-200' : 'bg-slate-950/40 border-slate-800/80'
                }`}>
                  <button
                    onClick={() => setExpandedProjectId(isExpanded ? null : project.id)}
                    className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Read Architecture Details'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <a
                    href="#architecture"
                    className="text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200 transition-colors flex items-center gap-1"
                  >
                    <span>Inspect Blueprint</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
