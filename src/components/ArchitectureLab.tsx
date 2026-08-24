import React, { useState } from 'react';
import { 
  Layers, 
  Database, 
  Server, 
  Network, 
  Cloud, 
  Cpu, 
  Compass, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Terminal,
  Activity,
  Workflow
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { ArchitectureBlueprint, ArchitectureLayer } from '../types/portfolio';

export const ArchitectureLab: React.FC = () => {
  const { theme } = useTheme();
  const { architectureLayers, blueprints } = portfolioData;

  const [activeTab, setActiveTab] = useState<'blueprints' | 'layers'>('blueprints');
  const [selectedBlueprintId, setSelectedBlueprintId] = useState<string>(blueprints[0]?.id || '');
  const [selectedLayerId, setSelectedLayerId] = useState<string>(architectureLayers[0]?.id || '');
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const selectedBlueprint = blueprints.find(b => b.id === selectedBlueprintId) || blueprints[0];
  const selectedLayer = architectureLayers.find(l => l.id === selectedLayerId) || architectureLayers[0];

  const layerIcons: Record<string, any> = {
    Compass,
    Layers,
    Server,
    Network,
    Database,
    Cloud,
    Cpu,
  };

  return (
    <section 
      id="architecture" 
      className={`py-16 sm:py-24 border-b ${
        theme === 'light'
          ? 'bg-slate-50 border-slate-200'
          : theme === 'blueprint'
          ? 'bg-[#081835] border-cyan-500/30'
          : 'bg-slate-950 border-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4 text-cyan-500" />
              <span>Interactive Architecture Continuum</span>
            </div>
            <h2 className={`font-display text-2xl sm:text-4xl font-bold tracking-tight ${
              theme === 'light' ? 'text-slate-950' : 'text-white'
            }`}>
              Enterprise Blueprints & <span className="text-cyan-600 dark:text-cyan-400">System Design</span>
            </h2>
          </div>

          {/* Toggle Tab Switcher */}
          <div className={`flex items-center p-1 rounded-xl border ${
            theme === 'light' ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-800'
          }`}>
            <button
              id="arch-tab-blueprints-btn"
              onClick={() => setActiveTab('blueprints')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'blueprints'
                  ? 'bg-cyan-600 text-white shadow-sm font-semibold'
                  : theme === 'light'
                  ? 'text-slate-700 hover:text-slate-950'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>Production Blueprints</span>
            </button>
            <button
              id="arch-tab-layers-btn"
              onClick={() => setActiveTab('layers')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'layers'
                  ? 'bg-cyan-600 text-white shadow-sm font-semibold'
                  : theme === 'light'
                  ? 'text-slate-700 hover:text-slate-950'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>7-Layer Enterprise Stack</span>
            </button>
          </div>
        </div>

        {/* View 1: Production Blueprints */}
        {activeTab === 'blueprints' && selectedBlueprint && (
          <div className="space-y-6">
            
            {/* Blueprint Selector Bar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blueprints.map((bp) => {
                const isSelected = bp.id === selectedBlueprint.id;
                return (
                  <button
                    key={bp.id}
                    id={`blueprint-select-${bp.id}`}
                    onClick={() => {
                      setSelectedBlueprintId(bp.id);
                      setSelectedNodeId(null);
                    }}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? theme === 'light'
                          ? 'bg-white border-cyan-500 shadow-md ring-2 ring-cyan-500/20'
                          : 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-500/30'
                        : theme === 'light'
                        ? 'bg-white/80 border-slate-200 hover:border-slate-300'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold border border-cyan-500/20">
                        {bp.domain}
                      </span>
                      {isSelected && (
                        <span className="flex items-center gap-1 text-[10px] font-mono text-cyan-600 dark:text-cyan-400">
                          <Activity className="w-3 h-3 animate-pulse" />
                          <span>Active Blueprint</span>
                        </span>
                      )}
                    </div>
                    <div className={`font-display font-bold text-sm sm:text-base ${
                      theme === 'light' ? 'text-slate-950' : 'text-slate-100'
                    }`}>
                      {bp.title}
                    </div>
                    <p className={`text-xs mt-1 line-clamp-1 ${
                      theme === 'light' ? 'text-slate-600' : 'text-slate-400'
                    }`}>
                      {bp.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Interactive Blueprint Workspace */}
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              theme === 'light'
                ? 'bg-white border-slate-200 shadow-sm'
                : theme === 'blueprint'
                ? 'bg-[#091b3b] border-cyan-500/40'
                : 'bg-slate-900/70 border-slate-800'
            }`}>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
                <div>
                  <h3 className={`font-display font-bold text-lg ${
                    theme === 'light' ? 'text-slate-950' : 'text-slate-100'
                  }`}>
                    {selectedBlueprint.title}
                  </h3>
                  <p className={`text-xs ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
                    {selectedBlueprint.solutionSummary}
                  </p>
                </div>
                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 shrink-0">
                  Interactive Node Topology (Click to Inspect)
                </div>
              </div>

              {/* Topology Nodes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {selectedBlueprint.nodes.map((node) => {
                  const isNodeSelected = selectedNodeId === node.id;
                  return (
                    <div
                      key={node.id}
                      id={`blueprint-node-${node.id}`}
                      onClick={() => setSelectedNodeId(node.id === selectedNodeId ? null : node.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isNodeSelected
                          ? theme === 'light'
                            ? 'bg-cyan-50 border-cyan-500 shadow-sm ring-2 ring-cyan-500/20'
                            : 'bg-cyan-950/40 border-cyan-400 ring-1 ring-cyan-400'
                          : theme === 'light'
                          ? 'bg-slate-50 border-slate-200 hover:border-cyan-400/60'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded uppercase font-semibold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300">
                          {node.type}
                        </span>
                        <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                          {node.tech}
                        </span>
                      </div>

                      <h4 className={`font-display font-bold text-sm mb-1 ${
                        theme === 'light' ? 'text-slate-950' : 'text-slate-100'
                      }`}>
                        {node.label}
                      </h4>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        {node.role}
                      </div>

                      <p className={`text-[11px] leading-relaxed pt-2 border-t border-slate-200 dark:border-slate-800/80 ${
                        theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                      }`}>
                        {node.details}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Data Flow & Sequence Diagram Box */}
              <div className={`p-4 sm:p-5 rounded-xl border mb-6 ${
                theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
              }`}>
                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold mb-3 flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5" />
                  <span>Sequential Data Flow & Integration Contracts</span>
                </div>

                <div className="space-y-2.5">
                  {selectedBlueprint.dataFlow.map((flow, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs py-1.5 border-b border-slate-200 dark:border-slate-800/60 last:border-0">
                      <div className="flex items-center gap-2 font-mono">
                        <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-[10px] font-bold">
                          {i + 1}
                        </span>
                        <span className="font-semibold text-slate-900 dark:text-slate-100">
                          {flow.from.replace('node-', '').replace('-', ' ').toUpperCase()}
                        </span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                        <span className="font-semibold text-slate-900 dark:text-slate-100">
                          {flow.to.replace('node-', '').replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {flow.protocol}
                      </span>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400 sm:text-right">
                        {flow.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Scale Metrics & Tradeoffs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Scale Characteristics */}
                <div className={`p-4 rounded-xl border ${
                  theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800'
                }`}>
                  <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold mb-3">
                    // Verified Scale & SLA Targets
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
                      <span className="text-slate-600 dark:text-slate-400 font-mono">Throughput:</span>
                      <span className="font-bold text-slate-900 dark:text-slate-100">{selectedBlueprint.scaleCharacteristics.throughput}</span>
                    </div>
                    <div className="flex justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
                      <span className="text-slate-600 dark:text-slate-400 font-mono">Latency SLA:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{selectedBlueprint.scaleCharacteristics.latency}</span>
                    </div>
                    <div className="flex justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
                      <span className="text-slate-600 dark:text-slate-400 font-mono">Data Scale:</span>
                      <span className="font-bold text-slate-900 dark:text-slate-100">{selectedBlueprint.scaleCharacteristics.dataVolume}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400 font-mono">Operational Gain:</span>
                      <span className="font-bold text-cyan-600 dark:text-cyan-400">{selectedBlueprint.scaleCharacteristics.efficiency}</span>
                    </div>
                  </div>
                </div>

                {/* Architectural Tradeoffs */}
                <div className={`p-4 rounded-xl border ${
                  theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800'
                }`}>
                  <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold mb-3">
                    // Architectural Decisions & Tradeoffs
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">Architectural Strengths (Pros):</div>
                      <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-[11px]">
                        {selectedBlueprint.tradeoffs.pros.map((pro, i) => (
                          <li key={i}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                      <div className="font-bold text-amber-600 dark:text-amber-400 mb-1">Governance Safeguards (Mitigations):</div>
                      <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-[11px]">
                        {selectedBlueprint.tradeoffs.cons.map((con, i) => (
                          <li key={i}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* View 2: 7-Layer Enterprise Stack */}
        {activeTab === 'layers' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Layer Navigation */}
            <div className="lg:col-span-4 space-y-2">
              {architectureLayers.map((layer) => {
                const isSelected = layer.id === selectedLayer.id;
                const IconComp = layerIcons[layer.iconName] || Layers;
                return (
                  <button
                    key={layer.id}
                    id={`layer-selector-${layer.id}`}
                    onClick={() => setSelectedLayerId(layer.id)}
                    className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                      isSelected
                        ? theme === 'light'
                          ? 'bg-white border-cyan-500 shadow-sm ring-1 ring-cyan-500 font-semibold'
                          : 'bg-slate-900 border-cyan-400 shadow-md ring-1 ring-cyan-400/40'
                        : theme === 'light'
                        ? 'bg-white/80 border-slate-200 hover:border-slate-300'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase">
                          Layer {layer.layerNumber}: {layer.category}
                        </div>
                        <div className={`text-xs font-bold ${
                          theme === 'light' ? 'text-slate-950' : 'text-slate-100'
                        }`}>
                          {layer.title}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-cyan-500' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Layer Detail View */}
            <div className="lg:col-span-8">
              <div className={`p-6 sm:p-8 rounded-2xl border ${
                theme === 'light'
                  ? 'bg-white border-slate-200 shadow-sm'
                  : theme === 'blueprint'
                  ? 'bg-[#091b3b] border-cyan-500/40'
                  : 'bg-slate-900/70 border-slate-800'
              }`}>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
                  <div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold">
                      Layer {selectedLayer.layerNumber} · {selectedLayer.category}
                    </span>
                    <h3 className={`font-display font-bold text-xl mt-2 ${
                      theme === 'light' ? 'text-slate-950' : 'text-slate-100'
                    }`}>
                      {selectedLayer.title}
                    </h3>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed mb-6 ${
                  theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  {selectedLayer.summary}
                </p>

                {/* Tech Stack Chips */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
                    Core Technologies & Frameworks:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedLayer.technologies.map((t, idx) => (
                      <span key={idx} className={`px-2.5 py-1 text-xs font-mono rounded-lg border ${
                        theme === 'light' ? 'bg-slate-100 text-slate-800 border-slate-300' : 'bg-slate-950 text-slate-200 border-slate-800'
                      }`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enterprise Patterns & Deliverables */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl border ${
                    theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                  }`}>
                    <div className="font-bold text-xs text-slate-900 dark:text-slate-100 mb-2">
                      Enterprise Design Patterns
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {selectedLayer.enterprisePatterns.map((pat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-cyan-500 mt-0.5">▪</span>
                          <span>{pat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`p-4 rounded-xl border ${
                    theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                  }`}>
                    <div className="font-bold text-xs text-slate-900 dark:text-slate-100 mb-2">
                      Architectural Deliverables
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {selectedLayer.deliverables.map((del, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
