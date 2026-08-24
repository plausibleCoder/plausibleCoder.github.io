import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Copy, 
  Check, 
  X, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Mail, 
  Github, 
  Linkedin,
  Sparkles,
  Award,
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { profile, experience, projects, certifications, skills, education } = portfolioData;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `# ${profile.fullName}
**${profile.title}**
${profile.headline}
${profile.location} • ${profile.phone} • ${profile.socials.email} • LinkedIn: ${profile.socials.linkedin} • GitHub: ${profile.socials.github}

---

## PROFESSIONAL SUMMARY
${profile.summary}

---

## CERTIFICATIONS
${certifications.map(c => `- **${c.title}** — ${c.issuer} (${c.credentialId})`).join('\n')}

---

## TECHNICAL SKILLS
${skills.map(s => `- **${s.title}:** ${s.skills.map(sk => sk.name).join(', ')}`).join('\n')}

---

## PROFESSIONAL EXPERIENCE

${experience.map(e => `### ${e.role} | ${e.company}
*${e.period} | ${e.location}*
${e.overview}

**Key Deliverables & Accomplishments:**
${e.architectureAccomplishments.map(a => `- ${a}`).join('\n')}

**Technologies:** ${e.techStack.join(', ')}
`).join('\n\n')}

---

## EDUCATION
${education.map(ed => `- **${ed.degree} in ${ed.field}** — ${ed.institution}, ${ed.location}`).join('\n')}
`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        id="resume-modal-dialog"
        className="w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white text-slate-900 shadow-2xl p-6 sm:p-10 space-y-6 text-left relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Action Bar (hidden in print) */}
        <div className="no-print sticky top-0 bg-white/95 backdrop-blur border-b border-slate-200 pb-4 mb-4 flex flex-wrap items-center justify-between gap-3 z-10">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-slate-900 text-white">
              <FileText className="w-4 h-4" />
            </span>
            <span className="font-display font-bold text-base text-slate-900">
              Curriculum Vitae / Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="resume-copy-md-btn"
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors border border-slate-300"
              title="Copy as Markdown format"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Markdown!' : 'Copy Markdown'}</span>
            </button>

            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="space-y-6 text-slate-800 max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-slate-950">
                  {profile.fullName}
                </h1>
                <p className="text-sm font-semibold text-cyan-800 tracking-tight mt-0.5">
                  {profile.title}
                </p>
                <p className="text-xs font-mono text-slate-600 mt-0.5">
                  {profile.headline}
                </p>
              </div>
              <div className="text-xs font-mono text-slate-600 space-y-0.5 text-left sm:text-right">
                <div>{profile.location}</div>
                <div>{profile.phone} • {profile.socials.email}</div>
                <div className="flex sm:justify-end gap-2 text-cyan-700 font-semibold">
                  <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                  <span>•</span>
                  <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
                </div>
              </div>
            </div>

            {/* Certifications Ribbon */}
            <div className="mt-3 pt-2 border-t border-slate-200 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-semibold border border-amber-300">
                🏆 TOGAF® Enterprise Architecture Certified
              </span>
              <span className="px-2 py-0.5 rounded bg-cyan-100 text-cyan-900 font-semibold border border-cyan-300">
                ☁️ AWS Certified Solutions Architect – Associate
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-semibold border border-emerald-300">
                🏥 AHM-250 Healthcare Management (AHIP)
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-700">
              {profile.summary}
            </p>
          </div>

          {/* Technical Skills Matrix */}
          <div>
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skills.map((cat) => (
                <div key={cat.id}>
                  <strong>{cat.title}:</strong> {cat.skills.map(s => s.name).join(', ')}
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Professional Experience
            </h2>

            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <strong className="text-slate-950 font-bold text-sm">{exp.role}</strong>
                      <span className="text-slate-800 font-semibold"> — {exp.company}</span>
                    </div>
                    <span className="text-slate-600 font-mono text-[11px]">{exp.period} | {exp.location}</span>
                  </div>

                  <p className="text-xs text-slate-700 italic">
                    {exp.overview}
                  </p>

                  <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700">
                    {exp.architectureAccomplishments.map((acc, aIdx) => (
                      <li key={aIdx}>{acc}</li>
                    ))}
                  </ul>

                  <div className="text-[11px] font-mono text-slate-600 pt-0.5">
                    <strong>Tech:</strong> {exp.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2 text-xs text-slate-700">
              {education.map((ed) => (
                <div key={ed.id} className="flex justify-between">
                  <div>
                    <strong>{ed.degree} in {ed.field}</strong> — {ed.institution}
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">{ed.location}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="no-print pt-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            Shiva Karthik A N · Master Resume
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
