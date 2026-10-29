import React, { useState } from 'react';
import { SOLUTIONS } from '../data/mockData';
import { Solution } from '../types';
import { ShieldCheck, Check, ArrowRight, Building, Radio, Activity, Cpu, Wrench } from 'lucide-react';

interface SolutionsPageProps {
onOpenEnquiry: (productName?: string, notes?: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenEnquiry }) => {
const [selectedSolution, setSelectedSolution] = useState<Solution>(SOLUTIONS[0]);

return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
{/* Header */}
<div className="max-w-3xl">
<div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
Turnkey RF Engineering by Property Architecture
</div>
<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
Tailored Signal Solutions for Complex Buildings
</h1>
<p className="text-sm text-slate-600 mt-2 leading-relaxed">
Every building layout has unique radio-frequency challenges — from subterranean earth shielding to high-rise pilot pollution and metal cladding. Our certified RF engineers custom design every distribution topology.
</p>
</div>

{/* Main Solution Interactive Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/* Solution Selector Sidebar (4 Cols) */}
<div className="lg:col-span-4 space-y-2">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 mb-1">
Select Space / Property Environment
</div>
{SOLUTIONS.map(sol => {
const isSelected = selectedSolution.id === sol.id;
return (
<button
key={sol.id}
type="button"
onClick={() => setSelectedSolution(sol)}
className={`w-full text-left p-4 rounded-xl border transition-all ${
isSelected
? 'border-blue-600 bg-blue-50/80 text-blue-950 shadow-xs'
: 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
}`}
>
<div className="text-xs font-mono text-blue-700 uppercase font-semibold mb-1">
{sol.typicalCoverage}
</div>
<div className="text-sm font-bold leading-snug">
{sol.title}
</div>
<div className="text-[11px] text-slate-500 mt-1 line-clamp-1">
{sol.targetEnvironment}
</div>
</button>
);
})}
</div>

{/* Selected Solution Detail Card (8 Cols) */}
<div className="lg:col-span-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-8">
<div>
<div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-4">
<span className="text-xs font-mono text-cyan-600 uppercase font-bold tracking-wider">
{selectedSolution.typicalCoverage}
</span>
<span className="text-xs text-slate-500 font-medium">
Target: {selectedSolution.targetEnvironment}
</span>
</div>

<h2 className="text-2xl font-extrabold text-slate-900">
{selectedSolution.title}
</h2>
<p className="text-sm font-medium text-blue-700 mt-1">
{selectedSolution.subtitle}
</p>
</div>

{/* Challenge vs Engineering Solution */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-xl bg-rose-50/70 border border-rose-200 p-5 space-y-2">
<h3 className="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
<span>The RF Challenge</span>
</h3>
<p className="text-xs text-rose-800 leading-relaxed">
{selectedSolution.challenge}
</p>
</div>

<div className="rounded-xl bg-blue-50/70 border border-blue-200 p-5 space-y-2">
<h3 className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
<span>Boosterswala Engineering Approach</span>
</h3>
<p className="text-xs text-blue-900 leading-relaxed">
{selectedSolution.engineeringSolution}
</p>
</div>
</div>

{/* System Wiring Blueprint Diagram */}
<div className="rounded-xl bg-slate-900 text-slate-200 p-6 border border-slate-800 font-mono text-xs">
<div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
<span className="text-cyan-400 font-semibold uppercase flex items-center gap-1.5">
<Cpu className="w-4 h-4" />
Turnkey Architecture Blueprint
</span>
<span className="text-[11px] text-slate-400">Low-PIM 50Ω System</span>
</div>

<div className="space-y-4">
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full bg-cyan-900 text-cyan-300 flex items-center justify-center font-bold text-[11px] shrink-0">1</span>
<div>
<div className="text-white font-bold">Outdoor Donor Reception</div>
<div className="text-slate-400 text-[11px]">Rooftop high-gain LPDA antenna tuned to operator cell tower azimuth</div>
</div>
</div>
<div className="border-l-2 border-dashed border-cyan-800 ml-3 pl-6 py-1 text-[11px] text-cyan-400">
LMR-400 ultra low-loss shielded copper feeder
</div>
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full bg-blue-900 text-blue-300 flex items-center justify-center font-bold text-[11px] shrink-0">2</span>
<div>
<div className="text-white font-bold">Central Signal Booster Amplifier</div>
<div className="text-slate-400 text-[11px]">Equipped with Automatic Gain Control (AGC) and manual attenuation</div>
</div>
</div>
<div className="border-l-2 border-dashed border-cyan-800 ml-3 pl-6 py-1 text-[11px] text-cyan-400">
Wilkinson reactive power splitters / couplers
</div>
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full bg-emerald-900 text-emerald-300 flex items-center justify-center font-bold text-[11px] shrink-0">3</span>
<div>
<div className="text-white font-bold">Indoor Coverage Radiators</div>
<div className="text-slate-400 text-[11px]">Discreet ceiling dome &amp; wall panel antennas delivering 5-bar signal</div>
</div>
</div>
</div>
</div>

{/* Key Engineering Benefits */}
<div>
<h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
Deliverables &amp; Performance Guarantees
</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
{selectedSolution.keyBenefits.map((b, i) => (
<div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
<Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
<span>{b}</span>
</div>
))}
</div>
</div>

{/* Action Strip */}
<div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
<div>
<div className="text-xs text-slate-500 font-mono">Recommended Hardware Kit:</div>
<div className="text-sm font-bold text-slate-900">{selectedSolution.recommendedKit}</div>
</div>

<button
type="button"
onClick={() => onOpenEnquiry(
selectedSolution.title,
`Solution Inquiry: ${selectedSolution.title} (${selectedSolution.typicalCoverage})`
)}
className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-xs"
>
Request Custom Site Proposal
</button>
</div>
</div>
</div>
</div>
);
};
