import React, { useState } from 'react';
import { INDUSTRIES } from '../data/mockData';
import { Industry } from '../types';
import { Building2, Server, Factory, Activity, ShoppingBag, Home, CheckCircle2, ArrowRight } from 'lucide-react';

interface IndustriesPageProps {
onOpenEnquiry: (productName?: string, notes?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onOpenEnquiry }) => {
const getIcon = (name: string) => {
switch (name) {
case 'Server': return <Server className="w-5 h-5 text-blue-600" />;
case 'Building2': return <Building2 className="w-5 h-5 text-blue-600" />;
case 'Factory': return <Factory className="w-5 h-5 text-blue-600" />;
case 'Activity': return <Activity className="w-5 h-5 text-blue-600" />;
case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-blue-600" />;
default: return <Home className="w-5 h-5 text-blue-600" />;
}
};

return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
{/* Header */}
<div className="max-w-3xl">
<div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
Enterprise &amp; B2B Sector Deployments
</div>
<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
Industries We Empower with Reliable Signal
</h1>
<p className="text-sm text-slate-600 mt-2 leading-relaxed">
From multi-tenant IT parks handling thousands of concurrent VoIP lines to hospitals and cold-storage supply chains, Boosterswala provides carrier-grade telecom coverage.
</p>
</div>

{/* Industries Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{INDUSTRIES.map(ind => (
<div
key={ind.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              style={{ backgroundColor: '#ffffff' }}
>
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
{getIcon(ind.iconName)}
</div>
<div>
<h3 className="text-lg font-bold text-slate-900 leading-snug">{ind.name}</h3>
<p className="text-xs text-blue-600 font-medium">{ind.tagline}</p>
</div>
</div>

<p className="text-xs text-slate-600 leading-relaxed mb-5">
{ind.description}
</p>

{/* Verified Case Study Card */}
<div className="rounded-xl bg-slate-50 border border-slate-200 p-4 mb-5 space-y-2 text-xs">
<div className="flex items-center justify-between border-b border-slate-200 pb-2">
<span className="font-mono text-[11px] font-bold text-slate-700 uppercase">
Case Study: {ind.caseStudy.client}
</span>
<span className="font-mono text-[10px] text-slate-500">
{ind.caseStudy.location}
</span>
</div>

<div className="text-slate-600">
<strong className="text-slate-900">Coverage:</strong> {ind.caseStudy.area}
</div>
<div className="text-slate-600">
<strong className="text-slate-900">Challenge:</strong> {ind.caseStudy.challenge}
</div>
<div className="text-slate-600">
<strong className="text-slate-900">Solution:</strong> {ind.caseStudy.result}
</div>

<div className="pt-2 border-t border-slate-200 flex items-center justify-between">
<span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
Impact: {ind.caseStudy.metric}
</span>
</div>
</div>

{/* Feature Tags */}
<div className="space-y-1.5">
{ind.features.map((feat, i) => (
<div key={i} className="flex items-center gap-2 text-xs text-slate-700">
<CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
<span>{feat}</span>
</div>
))}
</div>
</div>

<div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
<span className="text-xs text-slate-500">Enterprise SLA Available</span>
<button
type="button"
onClick={() => onOpenEnquiry(
`Enterprise Consultation - ${ind.name}`,
`Interest in B2B installation for ${ind.name}`
)}
className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1.5"
>
<span>Request SLA Proposal</span>
<ArrowRight className="w-3.5 h-3.5" />
</button>
</div>
</div>
))}
</div>
</div>
);
};
