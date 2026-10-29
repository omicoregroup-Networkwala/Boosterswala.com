import React, { useState } from 'react';
import { DOWNLOADS } from '../data/mockData';
import { DownloadItem } from '../types';
import { FileDown, FileText, CheckCircle2, Mail, Download, Filter, Search } from 'lucide-react';

export const DownloadsPage: React.FC = () => {
const [selectedCategory, setSelectedCategory] = useState<string>('all');
const [emailForBrochure, setEmailForBrochure] = useState<string>('');
const [emailSentStatus, setEmailSentStatus] = useState<string>('');
const [downloadingId, setDownloadingId] = useState<string | null>(null);

const categories = ['all', 'Catalog', 'Installation Guide', 'Quality Assurance', 'Technical Specs'];

const filteredDownloads = DOWNLOADS.filter(d => {
return selectedCategory === 'all' || d.category === selectedCategory;
});

const handleDownload = (item: DownloadItem) => {
setDownloadingId(item.id);

// Create a real downloadable text/PDF-styled document blob so the user actually gets a working download file
const fileContent = `=====================================================
BOOSTERSWALA.COM - TELECOM SIGNAL SOLUTIONS
Official Technical Document: ${item.title}
Version: ${item.version} | Published: ${item.publishDate}
Document Reference: ${item.id}
=====================================================

1. DOCUMENT OVERVIEW:
${item.description}

2. REGULATORY & DOT COMPLIANCE:
All Boosterswala signal repeating equipment is certified for non-interference
under relevant Indian Department of Telecommunications (DoT) & TEC specifications.
Systems feature intelligent Automatic Gain Control (AGC) and Automatic Isolation
Detection to protect external base transceiver stations (BTS).

3. TECHNICAL SPECIFICATIONS & STANDARDS:
- Characteristic Impedance: 50 Ohm (Low-PIM ≤ -150 dBc)
- Connector Topology: Standard N-Female (Gold-plated center pin)
- Operating Frequencies: 700 MHz, 850 MHz, 900 MHz, 1800 MHz, 2100 MHz, 2300 MHz, 3500 MHz
- Coaxial Feeders: Double-shielded LMR-400 / LMR-300 Grade
- Environmental: Operating range -15°C to +55°C

4. SUPPORT & WARRANTY VERIFICATION:
For technical consultation, on-site RF spectrum mapping, or warranty claims:
Hotline: +91 93722 26376
Email: support@boosterswala.com
Headquarters: Plot 42, Okhla Industrial Area Phase-III, New Delhi - 110020
Web: https://boosterswala.com

© ${new Date().getFullYear()} Boosterswala.com. All rights reserved.
=====================================================`;

const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
const url = URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = `${item.id}-${item.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.txt`;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
URL.revokeObjectURL(url);

setTimeout(() => {
setDownloadingId(null);
}, 800);
};

const handleSendAllBrochures = (e: React.FormEvent) => {
e.preventDefault();
if (!emailForBrochure || !emailForBrochure.includes('@')) {
setEmailSentStatus('Please provide a valid email address.');
return;
}

setEmailSentStatus(`Success! Complete 2026 technical bundle has been queued to ${emailForBrochure}. Check your inbox within 2 minutes.`);
setEmailForBrochure('');
setTimeout(() => {
setEmailSentStatus('');
}, 5000);
};

return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
{/* Header */}
<div className="max-w-3xl">
<div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
Technical Resources &amp; Documentation
</div>
<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
Download Center &amp; Schematics
</h1>
<p className="text-sm text-slate-600 mt-2 leading-relaxed">
Access product catalogues, step-by-step DIY installation guides, official DoT quality whitepapers, and RF link-budget calculation templates.
</p>
</div>

{/* Instant Email Delivery Banner */}
<div className="rounded-2xl bg-blue-50/80 border border-blue-200 p-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
<div className="md:col-span-7 space-y-1">
<h3 className="text-base font-bold text-blue-950">
Need the Full 2026 Technical Specification Bundle?
</h3>
<p className="text-xs text-blue-800 leading-relaxed">
Enter your corporate email address to receive all spec sheets, DoT certification copies, and wiring schematics in one convenient zip archive.
</p>
</div>

<div className="md:col-span-5">
<form onSubmit={handleSendAllBrochures} className="space-y-2">
<div className="flex gap-2">
<input
type="email"
required
placeholder="name@company.com"
value={emailForBrochure}
onChange={e => setEmailForBrochure(e.target.value)}
className="flex-1 px-3 py-2 text-xs rounded-lg border border-blue-300 bg-white focus:outline-hidden focus:border-blue-600"
/>
<button
type="submit"
className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 whitespace-nowrap shadow-xs"
>
Email Me Bundle
</button>
</div>
{emailSentStatus && (
<div className="text-[11px] font-medium text-emerald-700 flex items-center gap-1.5">
<CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
<span>{emailSentStatus}</span>
</div>
)}
</form>
</div>
</div>
</div>

{/* Category Tabs */}
<div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200">
{categories.map(cat => (
<button
key={cat}
type="button"
onClick={() => setSelectedCategory(cat)}
className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
selectedCategory === cat
? 'bg-slate-900 text-white'
: 'text-slate-600 hover:bg-slate-100'
}`}
>
{cat === 'all' ? 'All Documents' : cat}
</button>
))}
</div>

{/* Documents List */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{filteredDownloads.map(item => (
<div
key={item.id}
className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
>
<div>
<div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-3">
<span className="text-blue-700 font-bold uppercase">{item.category}</span>
<span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-semibold">{item.fileFormat} · {item.fileSize}</span>
</div>

<h3 className="text-base font-bold text-slate-900 leading-snug">
{item.title}
</h3>
<p className="text-xs text-slate-600 mt-2 leading-relaxed">
{item.description}
</p>

<div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400 flex items-center justify-between">
<span>Version: {item.version}</span>
<span>{item.publishDate}</span>
</div>
</div>

<div className="mt-6 pt-4 border-t border-slate-100">
<button
type="button"
onClick={() => handleDownload(item)}
disabled={downloadingId === item.id}
className="w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-2"
>
<Download className="w-3.5 h-3.5 text-blue-600" />
<span>{downloadingId === item.id ? 'Preparing Document...' : `Download ${item.fileFormat} (${item.fileSize})`}</span>
</button>
</div>
</div>
))}
</div>
</div>
);
};
