import React, { useState } from 'react';
import { 
  Grid, 
  Server, 
  Database, 
  Cloud, 
  Cpu, 
  Compass, 
  Layout, 
  Search, 
  Check, 
  Sparkles,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { SkillCategory } from '../types/portfolio';

export const SkillsMatrix: React.FC = () => {
  const { theme } = useTheme();
  const { skills } = portfolioData;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, any> = {
    Server,
    Database,
    Cloud,
    Cpu,
    Compass,
    Layout,
  };

  const filteredCategories = skills.map(cat => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return null;
    }
    const filteredSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    if (filteredSkills.length === 0 && searchTerm) return null;
    return { ...cat, skills: filteredSkills };
  }).filter(Boolean) as SkillCategory[];

  return (
    <section 
      id="skills" 
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
              <Grid className="w-4 h-4 text-cyan-500" />
              <span>Technical Competencies</span>
            </div>
            <h2 className={`font-display text-2xl sm:text-4xl font-bold tracking-tight ${
              theme === 'light' ? 'text-slate-950' : 'text-white'
            }`}>
              Engineering & <span className="text-cyan-600 dark:text-cyan-400">Architecture Matrix</span>
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="skill-search-input"
              type="text"
              placeholder="Search skill (e.g. PySpark, Kafka, AWS)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 text-xs font-mono rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                theme === 'light'
                  ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500'
                  : 'bg-slate-900 border-slate-800 text-slate-100 placeholder:text-slate-500'
              }`}
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            id="skill-filter-all"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-600 text-white font-semibold shadow-sm'
                : theme === 'light'
                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
            }`}
          >
            All Disciplines ({skills.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skills.map((cat) => (
            <button
              key={cat.id}
              id={`skill-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-600 text-white font-semibold shadow-sm'
                  : theme === 'light'
                  ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.title} ({cat.skills.length})
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const IconComp = categoryIcons[cat.iconName] || Layers;
            return (
              <div
                key={cat.id}
                id={`skill-category-${cat.id}`}
                className={`p-6 rounded-2xl border transition-all ${
                  theme === 'light'
                    ? 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    : theme === 'blueprint'
                    ? 'bg-[#0a1e3f] border-cyan-500/30'
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={`font-display font-bold text-base ${
                      theme === 'light' ? 'text-slate-950' : 'text-slate-100'
                    }`}>
                      {cat.title}
                    </h3>
                    <p className={`text-[11px] ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {cat.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border transition-all ${
                        skill.highlight
                          ? theme === 'light'
                            ? 'bg-white border-cyan-300 shadow-sm'
                            : 'bg-slate-950/80 border-cyan-500/40'
                          : theme === 'light'
                          ? 'bg-white border-slate-200'
                          : 'bg-slate-950/40 border-slate-800/80'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className={`font-display font-bold text-xs ${
                          theme === 'light' ? 'text-slate-950' : 'text-slate-100'
                        }`}>
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-semibold ${
                            skill.level === 'Expert'
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                              : 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30'
                          }`}>
                            {skill.level}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                            {skill.experienceYears}y exp
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {skill.tags.map((t, tidx) => (
                          <span
                            key={tidx}
                            className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                              theme === 'light'
                                ? 'bg-slate-100 text-slate-700'
                                : 'bg-slate-900 text-slate-400'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
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
