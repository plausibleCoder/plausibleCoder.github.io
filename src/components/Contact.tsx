import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Send, 
  MessageSquare, 
  Clock, 
  Sparkles,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Contact: React.FC = () => {
  const { theme } = useTheme();
  const { profile } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoUrl = `mailto:${profile.socials.email}?subject=${encodeURIComponent(formData.subject || 'Enterprise Engineering Inquiry: ' + formData.name)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    
    setFormSubmitted(true);
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section 
      id="contact" 
      className={`py-16 sm:py-24 border-t ${
        theme === 'light'
          ? 'bg-white border-slate-200'
          : theme === 'blueprint'
          ? 'bg-[#06142a] border-cyan-500/30'
          : 'bg-slate-950 border-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider mb-2">
              <MessageSquare className="w-4 h-4 text-cyan-500" />
              <span>Get in Touch</span>
            </div>
            <h2 className={`font-display text-2xl sm:text-4xl font-bold tracking-tight ${
              theme === 'light' ? 'text-slate-950' : 'text-white'
            }`}>
              Let's Discuss <span className="text-cyan-600 dark:text-cyan-400">Architecture & Engineering</span>
            </h2>
          </div>
          <p className={`text-sm max-w-md ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
            Interested in discussing distributed systems, backend engineering, TOGAF enterprise architecture, or leadership opportunities?
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct channels & Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className={`p-6 rounded-2xl border transition-all ${
              theme === 'light' ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-slate-900/70 border-slate-800'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors ${
                    theme === 'light'
                      ? 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100'
                      : 'bg-slate-950 text-cyan-400 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Primary Direct Email</div>
              <a
                href={`mailto:${profile.socials.email}`}
                className="font-display font-bold text-base text-slate-950 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors mt-0.5 block truncate"
              >
                {profile.socials.email}
              </a>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                id="contact-linkedin-card"
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-5 rounded-2xl border transition-all group ${
                  theme === 'light' ? 'bg-slate-50 border-slate-200 hover:border-blue-400' : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Professional</div>
                <div className="font-mono font-bold text-xs text-slate-900 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  LinkedIn Profile
                </div>
              </a>

              <a
                id="contact-github-card"
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-5 rounded-2xl border transition-all group ${
                  theme === 'light' ? 'bg-slate-50 border-slate-200 hover:border-slate-400' : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Github className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">GitHub Profile</div>
                <div className="font-mono font-bold text-xs text-slate-900 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                  @{profile.handle}
                </div>
              </a>
            </div>

            {/* Status Card */}
            <div className={`p-5 rounded-2xl border ${
              theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/40 border-slate-800/80'
            }`}>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-1.5 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Current Status</span>
              </div>
              <p className={`text-xs leading-relaxed ${
                theme === 'light' ? 'text-slate-700' : 'text-slate-300'
              }`}>
                {profile.availability}. Open to full-time engineering and architecture roles, technical advisory, and high-impact distributed systems initiatives.
              </p>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              theme === 'light' ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-slate-900/70 border-slate-800'
            }`}>
              <h3 className={`font-display font-bold text-lg mb-1 ${
                theme === 'light' ? 'text-slate-950' : 'text-slate-100'
              }`}>
                Send a Direct Message
              </h3>
              <p className={`text-xs mb-6 ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
                Fill in the details below to open a pre-drafted email or message.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-slate-100">Message Prepared!</h4>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    Your default email client was opened to send this directly to <strong className="text-cyan-600 dark:text-cyan-400">{profile.socials.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className={`mt-3 px-4 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      theme === 'light' ? 'bg-white border border-slate-300 text-slate-800 hover:bg-slate-100' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className={`block text-xs font-mono font-medium ${
                        theme === 'light' ? 'text-slate-800' : 'text-slate-300'
                      }`}>Your Name</label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3.5 py-2 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                          theme === 'light'
                            ? 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
                            : 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600'
                        }`}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className={`block text-xs font-mono font-medium ${
                        theme === 'light' ? 'text-slate-800' : 'text-slate-300'
                      }`}>Your Email</label>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        placeholder="e.g. sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                          theme === 'light'
                            ? 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
                            : 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className={`block text-xs font-mono font-medium ${
                      theme === 'light' ? 'text-slate-800' : 'text-slate-300'
                    }`}>Subject / Topic</label>
                    <input
                      id="contact-subject-input"
                      type="text"
                      placeholder="e.g. Senior Backend / Architecture Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-3.5 py-2 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                        theme === 'light'
                          ? 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
                          : 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600'
                      }`}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className={`block text-xs font-mono font-medium ${
                      theme === 'light' ? 'text-slate-800' : 'text-slate-300'
                    }`}>Message</label>
                    <textarea
                      id="contact-message-input"
                      required
                      rows={4}
                      placeholder="Describe your project, team requirements, or architecture discussion topic..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                        theme === 'light'
                          ? 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
                          : 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600'
                      }`}
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-all shadow-md shadow-cyan-600/20 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Shiva Karthik</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
