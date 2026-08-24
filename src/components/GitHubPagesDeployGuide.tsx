import React, { useState } from 'react';
import { 
  Rocket, 
  Copy, 
  Check, 
  X, 
  Github, 
  Terminal, 
  ExternalLink, 
  CheckCircle2, 
  FileCode,
  Layers,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface DeployGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubPagesDeployGuide: React.FC<DeployGuideProps> = ({ isOpen, onClose }) => {
  const [copiedWorkflow, setCopiedWorkflow] = useState(false);
  const [copiedBash, setCopiedBash] = useState(false);

  if (!isOpen) return null;

  const githubActionsWorkflow = `# .github/workflows/deploy.yml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches:
      - main # Set your default branch

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Build Production SPA
        run: npm run build

      - name: Upload GitHub Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`;

  const bashCommands = `# 1. Initialize git repository (if not already done)
git init
git add .
git commit -m "feat: initial senior engineer & architect portfolio"

# 2. Add your GitHub remote for plausibleCoder.github.io
git remote add origin https://github.com/plausibleCoder/plausibleCoder.github.io.git
git branch -M main

# 3. Push and watch GitHub Actions build & deploy automatically!
git push -u origin main
`;

  const copyToClipboard = (text: string, type: 'workflow' | 'bash') => {
    navigator.clipboard.writeText(text);
    if (type === 'workflow') {
      setCopiedWorkflow(true);
      setTimeout(() => setCopiedWorkflow(false), 2500);
    } else {
      setCopiedBash(true);
      setTimeout(() => setCopiedBash(false), 2500);
    }
  };

  return (
    <div 
      id="deploy-guide-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        id="deploy-guide-dialog"
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-cyan-500/30 shadow-2xl p-6 sm:p-8 space-y-6 text-left relative text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/40 flex items-center gap-1">
                <Rocket className="w-3 h-3 text-cyan-400" />
                <span>Zero-Cost Cloud Hosting</span>
              </span>
              <span className="text-xs font-mono text-slate-400">
                React 19 + TypeScript + Vite
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl text-slate-100">
              Deploying to <span className="text-cyan-400">plausibleCoder.github.io</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Host your portfolio for 100% free with automated continuous deployment on every git push.
            </p>
          </div>
          <button
            id="close-deploy-guide-btn"
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Architecture Flow */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
          <div className="text-cyan-400 font-semibold mb-2">// Automated GitHub Actions Deployment Pipeline:</div>
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
            <span className="text-slate-200 px-2 py-1 bg-slate-900 rounded border border-slate-800">git push</span>
            <span>➔</span>
            <span className="text-cyan-300 px-2 py-1 bg-cyan-950/60 rounded border border-cyan-800">GitHub Actions CI</span>
            <span>➔</span>
            <span className="text-emerald-300 px-2 py-1 bg-emerald-950/60 rounded border border-emerald-800">npm run build</span>
            <span>➔</span>
            <span className="text-amber-300 px-2 py-1 bg-amber-950/60 rounded border border-amber-800">https://plausibleCoder.github.io</span>
          </div>
        </div>

        {/* 3 Simple Setup Steps */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-base text-slate-100 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>3-Step Quick Deployment Setup</span>
          </h4>

          {/* Step 1 */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-cyan-400">
              <span className="w-5 h-5 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800">1</span>
              <span>Create Repository: <code className="text-amber-300">plausibleCoder.github.io</code></span>
            </div>
            <p className="text-xs text-slate-400 pl-7">
              On GitHub, create a new public repository named exactly <strong className="text-slate-200">plausibleCoder.github.io</strong>.
              In repository <strong>Settings ➔ Pages</strong>, select <strong>Source: GitHub Actions</strong>.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-cyan-400">
                <span className="w-5 h-5 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800">2</span>
                <span>Add GitHub Actions Workflow (<code className="text-slate-300">.github/workflows/deploy.yml</code>)</span>
              </div>
              <button
                onClick={() => copyToClipboard(githubActionsWorkflow, 'workflow')}
                className="flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 hover:bg-cyan-900 transition-colors"
              >
                {copiedWorkflow ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedWorkflow ? 'Copied!' : 'Copy YAML'}</span>
              </button>
            </div>
            <pre className="text-[11px] font-mono bg-slate-950 p-3 rounded-lg border border-slate-800 text-slate-300 overflow-x-auto max-h-48">
              {githubActionsWorkflow}
            </pre>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-cyan-400">
                <span className="w-5 h-5 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800">3</span>
                <span>Push Code to GitHub</span>
              </div>
              <button
                onClick={() => copyToClipboard(bashCommands, 'bash')}
                className="flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 hover:text-white transition-colors"
              >
                {copiedBash ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedBash ? 'Copied!' : 'Copy Commands'}</span>
              </button>
            </div>
            <pre className="text-[11px] font-mono bg-slate-950 p-3 rounded-lg border border-slate-800 text-emerald-400 overflow-x-auto">
              {bashCommands}
            </pre>
          </div>
        </div>

        {/* Custom Domain Note */}
        <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-xs text-slate-300 space-y-1">
          <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Optional Custom Domain (e.g. karthik.dev or karthikswe.com)</span>
          </div>
          <p className="text-slate-400">
            GitHub Pages automatically supports custom domains with free auto-renewing SSL. You can simply add a <code className="text-cyan-300">CNAME</code> record in your DNS settings whenever you decide to purchase a domain.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <a
            href="https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
          >
            <span>GitHub Pages Documentation</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
