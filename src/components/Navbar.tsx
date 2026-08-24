import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Menu, 
  X, 
  FileText, 
  Github, 
  Linkedin, 
  Moon, 
  Sun, 
  Grid, 
  Rocket,
  Compass,
  Briefcase,
  Layers,
  Award,
  Cpu,
  Mail
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenDeployGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenDeployGuide }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'architecture', 'projects', 'experience', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about', icon: Compass },
    { name: 'Architecture', href: '#architecture', id: 'architecture', icon: Layers },
    { name: 'Enterprise Platforms', href: '#projects', id: 'projects', icon: Cpu },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Grid },
    { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? theme === 'light'
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
            : theme === 'blueprint'
            ? 'bg-[#091833]/95 backdrop-blur-md border-b border-cyan-500/30 shadow-lg shadow-cyan-950/20'
            : 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand */}
          <a 
            id="brand-logo-link"
            href="#hero" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg p-1"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 ${
              theme === 'light'
                ? 'bg-slate-900 text-cyan-400 group-hover:bg-slate-800 shadow-sm'
                : theme === 'blueprint'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 group-hover:border-cyan-300'
                : 'bg-slate-800 text-cyan-400 border border-slate-700/80 group-hover:border-cyan-500/50 group-hover:bg-slate-800/80'
            }`}>
              <Terminal className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className={`font-display font-bold text-base tracking-tight transition-colors ${
                  theme === 'light' ? 'text-slate-900 group-hover:text-cyan-700' : 'text-slate-100 group-hover:text-cyan-400'
                }`}>
                  {portfolioData.profile.name}
                </span>
                <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded hidden sm:inline-block ${
                  theme === 'light'
                    ? 'text-cyan-800 bg-cyan-50 border border-cyan-200'
                    : 'text-cyan-400 bg-cyan-950/60 border border-cyan-800/40'
                }`}>
                  Technical Lead
                </span>
              </div>
              <span className={`text-[11px] font-mono tracking-wide ${
                theme === 'light' ? 'text-slate-600 font-medium' : 'text-slate-400'
              }`}>
                Enterprise Architect · TOGAF®
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isActive
                      ? theme === 'light'
                        ? 'bg-cyan-50 text-cyan-800 font-semibold border border-cyan-200'
                        : theme === 'blueprint'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'bg-slate-800/90 text-cyan-400 border border-slate-700/60 font-semibold'
                      : theme === 'light'
                      ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Controls */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Deploy guide helper button */}
            <button
              id="nav-deploy-guide-btn"
              onClick={onOpenDeployGuide}
              title="GitHub Pages Deployment Guide"
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono rounded-lg transition-colors border ${
                theme === 'light'
                  ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border-slate-700/60'
              }`}
            >
              <Rocket className="w-3.5 h-3.5 text-cyan-500" />
              <span>GH Pages</span>
            </button>

            {/* Resume Button */}
            <button
              id="nav-resume-modal-btn"
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm transition-all active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Theme Toggle */}
            <button
              id="nav-theme-toggle-btn"
              onClick={toggleTheme}
              title={`Switch theme (Current: ${theme})`}
              className={`p-2 rounded-lg border transition-colors ${
                theme === 'light'
                  ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                  : theme === 'blueprint'
                  ? 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/60'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : theme === 'blueprint' ? (
                <Grid className="w-4 h-4 text-cyan-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* LinkedIn */}
            <a
              id="nav-linkedin-link"
              href={portfolioData.profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-colors ${
                theme === 'light'
                  ? 'bg-white border-slate-300 text-blue-600 hover:bg-slate-100'
                  : 'bg-slate-900 border-slate-800 text-blue-400 hover:bg-slate-800'
              }`}
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* GitHub Profile */}
            <a
              id="nav-github-link"
              href={portfolioData.profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-colors ${
                theme === 'light'
                  ? 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-theme-toggle-btn"
              onClick={toggleTheme}
              className={`p-2 rounded-lg border ${
                theme === 'light' ? 'bg-white border-slate-300 text-slate-700' : 'bg-slate-900 border-slate-800 text-slate-300'
              }`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : theme === 'blueprint' ? (
                <Grid className="w-4 h-4 text-cyan-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                theme === 'light' ? 'bg-white border-slate-300 text-slate-900' : 'bg-slate-900 border-slate-800 text-slate-200'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className={`lg:hidden border-b px-4 pt-2 pb-6 space-y-2 ${
            theme === 'light'
              ? 'bg-white border-slate-200 shadow-lg'
              : theme === 'blueprint'
              ? 'bg-[#091833] border-cyan-500/30'
              : 'bg-slate-950 border-slate-800'
          }`}
        >
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? theme === 'light'
                      ? 'bg-cyan-50 text-cyan-800 font-semibold border border-cyan-200'
                      : 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                    : theme === 'light'
                    ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-2 border-t border-slate-200 dark:border-slate-800/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-600 text-white font-medium text-sm"
            >
              <FileText className="w-4 h-4" />
              View Full Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-mono text-xs border ${
                theme === 'light'
                  ? 'bg-slate-100 text-slate-800 border-slate-300'
                  : 'bg-slate-800/80 text-slate-300 border-slate-700'
              }`}
            >
              <Rocket className="w-3.5 h-3.5 text-cyan-500" />
              GitHub Pages Deployment Guide
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
