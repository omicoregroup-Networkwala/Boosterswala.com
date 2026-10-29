import React from 'react';
import { ShieldCheck, Award, Radio, Wrench, Users, CheckCircle2, Cpu, FileCheck } from 'lucide-react';

interface AboutUsPageProps {
onOpenEnquiry: (productName?: string, notes?: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onOpenEnquiry }) => {
return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
{/* Header */}
<div className="max-w-3xl">
<div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
Engineering Signal Excellence Since 2014
</div>
<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
About Boosterswala.com
</h1>
<p className="text-sm text-slate-600 mt-2 leading-relaxed">
We are India&apos;s premier telecommunication radio-frequency engineering enterprise specializing in in-building cellular reception solutions, certified network boosters, and custom enterprise DAS systems.
</p>
</div>

{/* Story & Technical Mission */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
<h2 className="text-xl sm:text-2xl font-bold text-slate-900">
Solving India&apos;s Call Drop Crisis with Responsible RF Engineering
</h2>
<p>
As Indian cities rapidly modernized with high-rise concrete skyscrapers, double-glazed low-E reflective glass, and sprawling underground basements, cellular signals began hitting physical roadblocks. Tens of thousands of homes, offices, and commercial establishments were stranded in dead zones despite cell towers standing just 500 meters away.
</p>
<p>
Boosterswala was founded with a singular conviction: <strong className="text-slate-900">no one should suffer from dropped calls, delayed OTPs, or disconnected meetings</strong>. Unlike grey-market traders selling unchecked boosters that create harmful cell-tower interference, Boosterswala designs and installs only laboratory-tested amplifiers equipped with intelligent Automatic Gain Control (AGC) and auto-shutoff circuitry.
</p>
<p>
Today, over 15,000 residential apartments, luxury villas, tech parks, hospitals, and industrial warehouses rely on Boosterswala every single day to stay seamlessly connected.
</p>
</div>

{/* Milestone Card */}
<div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-md space-y-6 font-mono">
<div className="flex items-center justify-between border-b border-slate-800 pb-3">
<span className="text-xs text-cyan-400 font-bold uppercase">Operational Milestones</span>
<span className="text-xs text-emerald-400">2014 — 2026</span>
</div>

<div className="space-y-4 text-xs">
<div className="flex items-start gap-3">
<span className="text-cyan-400 font-bold text-sm">2014</span>
<div>
<strong className="text-white">Inception in New Delhi</strong>
<p className="text-slate-400 text-[11px] font-sans">Started as a boutique RF consulting firm for corporate basement telecom coverage.</p>
</div>
</div>

<div className="flex items-start gap-3">
<span className="text-cyan-400 font-bold text-sm">2018</span>
<div>
<strong className="text-white">4G VoLTE Nationwide Expansion</strong>
<p className="text-slate-400 text-[11px] font-sans">Expanded certified technician network to Mumbai, Bengaluru, Hyderabad, and Pune.</p>
</div>
</div>

<div className="flex items-start gap-3">
<span className="text-cyan-400 font-bold text-sm">2023</span>
<div>
<strong className="text-white">5G Standalone &amp; DAS Division</strong>
<p className="text-slate-400 text-[11px] font-sans">Pioneered 3500 MHz (n78) and 700 MHz (n28) repeaters compatible with Jio 5G &amp; Airtel 5G Plus.</p>
</div>
</div>

<div className="flex items-start gap-3">
<span className="text-cyan-400 font-bold text-sm">2026</span>
<div>
<strong className="text-white">180+ Cities &amp; Enterprise Cloud Monitoring</strong>
<p className="text-slate-400 text-[11px] font-sans">Over 15,000 live installations and 99.8% customer satisfaction rating.</p>
</div>
</div>
</div>
</div>
</div>

{/* Certifications & Regulatory Guidelines */}
<div className="space-y-6">
<div className="text-center max-w-2xl mx-auto">
<div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
Verified Quality Guidelines
</div>
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
Quality Assurance, Safety &amp; Non-Interference
</h2>
<p className="text-xs text-slate-600 mt-1">
Every piece of hardware distributed by Boosterswala meets stringent Indian and international quality standards.
</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{[
{
title: '100% Quality & Return Guarantee',
badge: 'Service Assurance',
desc: 'Adheres to non-interference parameters with 10 days easy returns and COD nationwide.'
},
{
title: 'ISO 9001:2015',
badge: 'Quality Management',
desc: 'Audited and certified manufacturing and installation quality assurance workflows.'
},
{
title: 'CE & RoHS Verified',
badge: 'European Safety',
desc: 'Free of hazardous lead/heavy metals and verified for electromagnetic compatibility.'
},
{
title: 'WHO / ICNIRP Safe',
badge: 'SAR Radiation Limits',
desc: 'Drastically reduces overall cell phone radiation by providing nearby clean 5-bar reception.'
}
].map((item, i) => (
<div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs space-y-2">
<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
<ShieldCheck className="w-4 h-4" />
</div>
<div className="text-[10px] font-mono text-blue-700 uppercase font-semibold">
{item.badge}
</div>
<h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
<p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
</div>
))}
</div>
</div>

{/* Lab & Field Testing Equipment */}
<div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-8 space-y-3">
<div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
Diagnostic Precision
</div>
<h3 className="text-xl sm:text-2xl font-bold text-slate-900">
Keysight &amp; Rohde &amp; Schwarz Calibrated Test Equipment
</h3>
<p className="text-xs text-slate-600 leading-relaxed">
We never guess signal metrics or blind-tune antennas. Our certified technicians carry industrial handheld RF spectrum analyzers (FieldFox / Anritsu Site Master) to pinpoint donor cell tower azimuths, verify RSRP (Reference Signal Received Power) down to -120 , and ensure perfect VSWR balance on every coaxial cable.
</p>
</div>

<div className="lg:col-span-4 flex justify-center">
<button
type="button"
onClick={() => onOpenEnquiry('Schedule Diagnostic RF Survey')}
className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-center shadow-xs"
>
Request Field Engineer Visit
</button>
</div>
</div>
</div>
</div>
);
};
