/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ArchitectureLab } from './components/ArchitectureLab';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { GitHubPagesDeployGuide } from './components/GitHubPagesDeployGuide';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [deployGuideOpen, setDeployGuideOpen] = useState(false);

  return (
    <ThemeProvider>
      <div id="portfolio-app-root" className="min-h-screen flex flex-col selection:bg-cyan-500/20 selection:text-cyan-600 dark:selection:text-cyan-300">
        {/* Navigation Bar */}
        <Navbar 
          onOpenResume={() => setResumeOpen(true)}
          onOpenDeployGuide={() => setDeployGuideOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <About />
          <ArchitectureLab />
          <Projects />
          <Experience />
          <SkillsMatrix />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer 
          onOpenResume={() => setResumeOpen(true)}
          onOpenDeployGuide={() => setDeployGuideOpen(true)}
        />

        {/* Interactive Modals */}
        <ResumeModal 
          isOpen={resumeOpen} 
          onClose={() => setResumeOpen(false)} 
        />

        <GitHubPagesDeployGuide 
          isOpen={deployGuideOpen} 
          onClose={() => setDeployGuideOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
}
