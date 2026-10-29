import React, { useState } from 'react';
import { OFFICE_LOCATIONS } from '../data/mockData';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2, ShieldCheck, AlertCircle, Building2 } from 'lucide-react';
import { LeadEnquiry } from '../types';

export const ContactUsPage: React.FC = () => {
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [city, setCity] = useState('');
const [propertyType, setPropertyType] = useState('Home / Apartment');
const [message, setMessage] = useState('');
const [selectedCarriers, setSelectedCarriers] = useState<string[]>(['Airtel', 'Jio']);
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitted, setSubmitted] = useState<LeadEnquiry | null>(null);
const [errorMsg, setErrorMsg] = useState('');

const toggleCarrier = (c: string) => {
if (selectedCarriers.includes(c)) {
if (selectedCarriers.length > 1) {
setSelectedCarriers(selectedCarriers.filter(item => item !== c));
}
} else {
setSelectedCarriers([...selectedCarriers, c]);
}
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
setErrorMsg('');

if (!name.trim()) {
setErrorMsg('Please enter your full name.');
return;
}

if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
setErrorMsg('Please enter a valid 10-digit mobile number.');
return;
}

if (!email.trim() || !email.includes('@')) {
setErrorMsg('Please enter a valid email address.');
return;
}

setIsSubmitting(true);

const enquiry: LeadEnquiry = {
id: `BW-CNT-${Math.floor(100000 + Math.random() * 900000)}`,
customerName: name,
phone,
email,
city: city || 'Not specified',
propertyType,
carriersNeedHelp: selectedCarriers,
message: message || 'Contact form submission from Boosterswala.com',
timestamp: new Date().toISOString()
};

try {
const existing = JSON.parse(localStorage.getItem('boosterswala_enquiries') || '[]');
existing.unshift(enquiry);
localStorage.setItem('boosterswala_enquiries', JSON.stringify(existing));
} catch (err) {
console.warn('Storage error', err);
}

setTimeout(() => {
setIsSubmitting(false);
setSubmitted(enquiry);
}, 500);
};

const handleWhatsAppChat = () => {
const text = encodeURIComponent(
`Hello Boosterswala, I would like to schedule a site survey or inquire about mobile boosters.`
);
window.open(`https://wa.me/919372226376?text=${text}`, '_blank', 'noopener,noreferrer');
};

return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
{/* Header */}
<div className="max-w-3xl">
<div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
Pan-India Support &amp; On-Site Surveys
</div>
<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
Get in Touch with Boosterswala
</h1>
<p className="text-sm text-slate-600 mt-2 leading-relaxed">
Book a free on-site signal inspection, request enterprise pricing, or speak directly with our senior RF telecommunication engineers.
</p>
</div>

{/* Main Form and Direct Contact Cards */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
{/* Contact Form (7 Cols) */}
<div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
{submitted ? (
<div className="text-center py-10 space-y-4">
<div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
<CheckCircle2 className="w-8 h-8" />
</div>
<h3 className="text-2xl font-bold text-slate-900">Thank You, {submitted.customerName}!</h3>
<p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
Your request has been registered with Ticket ID <strong className="text-slate-900 font-mono">{submitted.id}</strong>. Our regional RF field manager for <strong className="text-slate-900">{submitted.city || 'your area'}</strong> will call you at <strong className="text-slate-900">{submitted.phone}</strong> shortly.
</p>

<div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
<button
type="button"
onClick={() => {
const text = encodeURIComponent(
`Hello Boosterswala, I submitted a contact request (ID: ${submitted.id}) for ${submitted.customerName} in ${submitted.city}. Let's discuss!`
);
window.open(`https://wa.me/919372226376?text=${text}`, '_blank', 'noopener,noreferrer');
}}
className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2"
>
<MessageSquare className="w-4 h-4" />
<span>Connect Immediately on WhatsApp</span>
</button>

<button
type="button"
onClick={() => {
setSubmitted(null);
setName('');
setPhone('');
setEmail('');
setMessage('');
}}
className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200"
>
Submit Another Request
</button>
</div>
</div>
) : (
<form onSubmit={handleSubmit} className="space-y-4">
<div className="border-b border-slate-100 pb-3 mb-4">
<h2 className="text-lg font-bold text-slate-900">Request Free Signal Survey &amp; Quote</h2>
<p className="text-xs text-slate-500 mt-0.5">Fill out your details below and our team will get back to you within 30 minutes.</p>
</div>

{errorMsg && (
<div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg flex items-center gap-2">
<AlertCircle className="w-4 h-4 shrink-0" />
<span>{errorMsg}</span>
</div>
)}

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1">
Customer / Company Name *
</label>
<input
type="text"
required
placeholder="e.g. Ramesh Verma"
value={name}
onChange={e => setName(e.target.value)}
className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
/>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 mb-1">
Phone / Mobile Number *
</label>
<input
type="tel"
required
placeholder="e.g. 93722 26376"
value={phone}
onChange={e => setPhone(e.target.value)}
className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
/>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1">
Email Address *
</label>
<input
type="email"
required
placeholder="ramesh@gmail.com"
value={email}
onChange={e => setEmail(e.target.value)}
className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
/>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 mb-1">
City / Pin Code *
</label>
<input
type="text"
placeholder="e.g. Gurugram, Delhi NCR"
value={city}
onChange={e => setCity(e.target.value)}
className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
/>
</div>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 mb-1">
Property Architecture
</label>
<select
value={propertyType}
onChange={e => setPropertyType(e.target.value)}
className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:border-blue-600"
>
<option>Home / Apartment / Penthouse</option>
<option>Basement / Under-Ground Parking</option>
<option>Corporate Office / Tech Park</option>
<option>Independent Villa / Farmhouse</option>
<option>Industrial Warehouse / Factory</option>
<option>Hotel / Hospital / Commercial Complex</option>
</select>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">
Which Mobile Operator Needs Boosting?
</label>
<div className="flex flex-wrap gap-2">
{['Airtel', 'Jio', 'Vi', 'BSNL'].map(carrier => {
const isSelected = selectedCarriers.includes(carrier);
return (
<button
key={carrier}
type="button"
onClick={() => toggleCarrier(carrier)}
className={`px-3 py-1 text-xs rounded-md border font-medium transition-colors ${
isSelected
? 'border-blue-600 bg-blue-50 text-blue-800'
: 'border-slate-200 text-slate-600 hover:border-slate-300'
}`}
>
{carrier} {isSelected ? '✓' : ''}
</button>
);
})}
</div>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 mb-1">
Message / Details of Signal Issues
</label>
<textarea
rows={4}
value={message}
onChange={e => setMessage(e.target.value)}
placeholder="Share details such as approximate floor area in sq ft, current bar count, or call drop behavior..."
className="w-full p-2.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
/>
</div>

<div className="pt-2">
<button
type="submit"
disabled={isSubmitting}
className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50"
>
{isSubmitting ? 'Sending Request...' : 'Submit Contact Request'}
</button>
</div>

<div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
<ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
<span>Zero Spam Guarantee · Certified RF Engineers Only</span>
</div>
</form>
)}
</div>

{/* Direct Contact & Help Desk Info (5 Cols) */}
<div className="lg:col-span-5 space-y-6">
{/* Quick Connect Card */}
<div className="rounded-2xl bg-slate-900 text-white p-6 shadow-md border border-slate-800 space-y-6">
<div>
<span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
Direct Technical Assistance
</span>
<h3 className="text-lg font-bold text-white mt-1">Talk to an RF Engineer Now</h3>
<p className="text-xs text-slate-400 mt-1">
Need immediate consultation or facing urgent call drop issues in your office or home?
</p>
</div>

<div className="space-y-4 text-xs font-mono">
<a
href="tel:+919372226376"
className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:bg-slate-800 transition-colors"
>
<div className="w-9 h-9 rounded-lg bg-blue-600/30 text-cyan-400 flex items-center justify-center shrink-0">
<Phone className="w-4 h-4" />
</div>
<div>
<div className="text-[10px] text-slate-400 uppercase">Primary Helpline</div>
<div className="text-sm font-bold text-white">+91 93722 26376</div>
</div>
</a>

<button
type="button"
onClick={handleWhatsAppChat}
className="w-full flex items-center gap-3 p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 hover:bg-emerald-900/40 transition-colors text-left"
>
<div className="w-9 h-9 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center shrink-0">
<MessageSquare className="w-4 h-4" />
</div>
<div>
<div className="text-[10px] text-emerald-400 uppercase">WhatsApp Instant Support</div>
<div className="text-sm font-bold text-emerald-300">+91 93722 26376</div>
</div>
</button>

<div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
<div className="w-9 h-9 rounded-lg bg-blue-600/30 text-cyan-400 flex items-center justify-center shrink-0">
<Mail className="w-4 h-4" />
</div>
<div>
<div className="text-[10px] text-slate-400 uppercase">Email Support</div>
<div className="text-xs font-bold text-slate-200">support@boosterswala.com</div>
</div>
</div>

<div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
<div className="w-9 h-9 rounded-lg bg-blue-600/30 text-cyan-400 flex items-center justify-center shrink-0">
<Clock className="w-4 h-4" />
</div>
<div>
<div className="text-[10px] text-slate-400 uppercase">Operational Hours</div>
<div className="text-xs text-slate-300">Mon - Sat: 9:00 AM - 8:00 PM IST</div>
</div>
</div>
</div>
</div>

{/* Service Guarantee Card */}
<div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3">
<h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
Boosterswala Service Promise
</h4>
<ul className="text-xs text-slate-600 space-y-2">
<li className="flex items-start gap-2">
<CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
<span>100% Signal Gain Guarantee or free adjustments</span>
</li>
<li className="flex items-start gap-2">
<CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
<span>Complimentary RF link-budget calculation with every survey</span>
</li>
<li className="flex items-start gap-2">
<CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
<span>Clean, concealed cabling that protects your interior decor</span>
</li>
</ul>
</div>
</div>
</div>

{/* Regional Service Hubs & Offices */}
<div className="space-y-6">
<div>
<div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
Nationwide Presence
</div>
<h2 className="text-2xl font-bold text-slate-900">
Regional Technical Service Hubs
</h2>
<p className="text-xs text-slate-600 mt-1">
Local field teams stationed in major metro centers for same-day on-site inspections.
</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{OFFICE_LOCATIONS.map((loc, i) => (
<div
key={i}
className={`rounded-xl border p-5 bg-white shadow-2xs space-y-2.5 ${
loc.isHeadquarter ? 'border-blue-500 bg-blue-50/20' : 'border-slate-200'
}`}
>
<div className="flex items-center justify-between">
<h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
<Building2 className="w-4 h-4 text-blue-600" />
<span>{loc.city}</span>
</h3>
{loc.isHeadquarter && (
<span className="text-[10px] font-mono text-blue-700 bg-blue-100 px-2 py-0.5 rounded font-bold">
HEADQUARTERS
</span>
)}
</div>

<div className="text-xs text-slate-600 leading-relaxed">
<MapPin className="w-3.5 h-3.5 text-slate-400 inline mr-1" />
{loc.address}
</div>

<div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
<a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="text-blue-600 hover:underline">
{loc.phone}
</a>
<a href={`mailto:${loc.email}`} className="text-slate-400 hover:text-slate-700">
{loc.email}
</a>
</div>
</div>
))}
</div>
</div>
</div>
);
};
