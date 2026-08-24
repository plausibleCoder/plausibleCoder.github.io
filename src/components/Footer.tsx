import React from 'react';
import { 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  Rocket, 
  FileText
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onOpenResume: () => void;
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenDeployGuide }) => {
  const { theme } = useTheme();
  const { profile } = portfolioData;

  return (
    <footer 
      id="main-footer"
      className={`border-t py-12 ${
        theme === 'light'
          ? 'bg-slate-100 border-slate-200 text-slate-700'
          : theme === 'blueprint'
          ? 'bg-[#06142a] border-cyan-500/30 text-slate-300'
          : 'bg-slate-950 border-slate-900 text-slate-400'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-base text-slate-950 dark:text-slate-100 flex items-center gap-2">
                <span>{profile.fullName}</span>
                <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400">@{profile.handle}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                Senior Software Engineer & Enterprise Architect (TOGAF®)
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About</a>
            <a href="#architecture" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Architecture</a>
            <a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Enterprise Systems</a>
            <a href="#experience" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Certifications</a>
            <button onClick={onOpenResume} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1">
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </button>
            <button onClick={onOpenDeployGuide} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-semibold">
              <Rocket className="w-3 h-3" />
              <span>Deploy Guide</span>
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.socials.email}`}
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Details Row */}
        <div className="pt-6 border-t border-slate-300 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>GitHub Pages Ready · Vite SPA Static Output</span>
          </div>

          <div>
            Built with React 19, TypeScript, Vite & Tailwind CSS.
          </div>
        </div>

      </div>
    </footer>
  );
};
