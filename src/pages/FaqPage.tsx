import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { FAQItem } from '../types';
import { ChevronDown, Search, MessageSquare, PhoneCall, HelpCircle, ShieldCheck } from 'lucide-react';

interface FaqPageProps {
onOpenEnquiry: (productName?: string, notes?: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenEnquiry }) => {
const [selectedCategory, setSelectedCategory] = useState<string>('all');
const [searchQuery, setSearchQuery] = useState<string>('');
const [expandedId, setExpandedId] = useState<string | null>(FAQS[0].id);

const categories = ['all', 'General', 'COD & Returns', 'Technical & 5G', 'Installation', 'Safety & Warranty'];

const filteredFaqs = FAQS.filter(faq => {
const matchCategory = selectedCategory === 'all' || faq.category === selectedCategory;
const matchSearch =
searchQuery === '' ||
faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
return matchCategory && matchSearch;
});

const toggleExpand = (id: string) => {
setExpandedId(expandedId === id ? null : id);
};

const handleWhatsApp = () => {
const text = encodeURIComponent('Hello Boosterswala, I have a question regarding mobile network booster installation.');
window.open(`https://wa.me/919372226376?text=${text}`, '_blank', 'noopener,noreferrer');
};

return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
{/* Header */}
<div className="max-w-3xl">
<div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
Knowledge Base &amp; Regulatory Clarity
</div>
<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
Frequently Asked Questions
</h1>
<p className="text-sm text-slate-600 mt-2 leading-relaxed">
Clear, transparent answers about booster legality in India, 5G carrier compatibility, installation requirements, SAR radiation safety, and warranty terms.
</p>
</div>

{/* Search & Categories */}
<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
<div className="relative max-w-lg">
<Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
<input
type="text"
placeholder="Search questions (e.g. COD, 5G, Airtel, radiation)..."
value={searchQuery}
onChange={e => setSearchQuery(e.target.value)}
className="w-full pl-10 pr-4 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
/>
</div>

<div className="flex items-center gap-1.5 overflow-x-auto pb-1">
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
{cat === 'all' ? 'All Questions' : cat}
</button>
))}
</div>
</div>

{/* FAQ Accordion List */}
<div className="space-y-3">
{filteredFaqs.map(faq => {
const isExpanded = expandedId === faq.id;
return (
<div
key={faq.id}
className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
>
<button
type="button"
onClick={() => toggleExpand(faq.id)}
className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
>
<div className="flex items-center gap-3">
<span className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded uppercase font-semibold hidden sm:inline-block">
{faq.category}
</span>
<span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
{faq.question}
</span>
</div>
<ChevronDown
className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
isExpanded ? 'rotate-180 text-blue-600' : ''
}`}
/>
</button>

{isExpanded && (
<div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
{faq.answer}
</div>
)}
</div>
);
})}
</div>

{/* Support Help Card */}
<div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 text-white p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="space-y-1 text-center sm:text-left">
<h3 className="text-base font-bold text-white">Have a Unique Space or Question?</h3>
<p className="text-xs text-slate-400">
Our senior RF telecommunication engineers are available 6 days a week for telephonic consultation.
</p>
</div>

<div className="flex flex-wrap gap-3">
<button
type="button"
onClick={handleWhatsApp}
className="px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors flex items-center gap-1.5"
>
<MessageSquare className="w-4 h-4" />
<span>Ask on WhatsApp</span>
</button>
<a
href="tel:+919372226376"
className="px-4 py-2.5 text-xs font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5"
>
<PhoneCall className="w-4 h-4 text-blue-600" />
<span>Call +91 93722 26376</span>
</a>
</div>
</div>
</div>
);
};
