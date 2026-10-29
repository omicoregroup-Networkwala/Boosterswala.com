import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Phone, Mail, User, MapPin, Building, MessageSquare, AlertCircle } from 'lucide-react';
import { LeadEnquiry } from '../types';

interface EnquiryModalProps {
isOpen: boolean;
onClose: () => void;
prefilledProduct?: string;
prefilledNotes?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
isOpen,
onClose,
prefilledProduct,
prefilledNotes
}) => {
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [city, setCity] = useState('');
const [propertyType, setPropertyType] = useState('Home / Apartment');
const [selectedCarriers, setSelectedCarriers] = useState<string[]>(['Airtel', 'Jio']);
const [message, setMessage] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
const [submittedEnquiry, setSubmittedEnquiry] = useState<LeadEnquiry | null>(null);
const [formError, setFormError] = useState('');

useEffect(() => {
if (prefilledNotes) {
setMessage(prefilledNotes);
}
}, [prefilledNotes]);

if (!isOpen) return null;

const toggleCarrier = (c: string) => {
if (selectedCarriers.includes(c)) {
if (selectedCarriers.length > 1) {
setSelectedCarriers(selectedCarriers.filter(item => item !== c));
}
} else {
setSelectedCarriers([...selectedCarriers, c]);
}
};

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
setFormError('');

if (!name.trim()) {
setFormError('Please enter your full name.');
return;
}

if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
setFormError('Please enter a valid 10-digit mobile number.');
return;
}

if (!email.trim() || !email.includes('@')) {
setFormError('Please enter a valid email address.');
return;
}

setIsSubmitting(true);

const newEnquiry: LeadEnquiry = {
id: `BW-${Math.floor(100000 + Math.random() * 900000)}`,
customerName: name,
phone,
email,
city: city || 'Not specified',
propertyType,
carriersNeedHelp: selectedCarriers,
productInterest: prefilledProduct || 'Turnkey Mobile Booster Solution',
message: message || 'Interested in site survey and quotation.',
timestamp: new Date().toISOString()
};

    // Send email via backend API
    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEnquiry),
      });
    } catch (err) {
      console.error('Email send error', err);
    }

    setIsSubmitting(false);
    setSubmittedEnquiry(newEnquiry);
  };

const handleWhatsAppDirect = () => {
if (!submittedEnquiry) return;
const text = encodeURIComponent(
`Hello Boosterswala, I submitted an enquiry on your website.\n` +
`• Ticket ID: ${submittedEnquiry.id}\n` +
`• Name: ${submittedEnquiry.customerName}\n` +
`• Phone: ${submittedEnquiry.phone}\n` +
`• City: ${submittedEnquiry.city}\n` +
`• Space: ${submittedEnquiry.propertyType}\n` +
`• Product: ${submittedEnquiry.productInterest}\n` +
`Please connect with me for site survey scheduling.`
);
window.open(`https://wa.me/919372226376?text=${text}`, '_blank', 'noopener,noreferrer');
};

return (
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
<div className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden my-8">
{/* Top Header */}
<div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-900 text-white">
<div>
<div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
{prefilledProduct ? 'Direct Product Enquiry' : 'Free Site Survey & Quotation'}
</div>
<h3 className="text-base font-bold text-white">
{prefilledProduct || 'Boosterswala Signal Solution'}
</h3>
</div>
<button
type="button"
onClick={onClose}
className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
>
<X className="w-5 h-5" />
</button>
</div>

{/* Modal Body */}
<div className="p-6">
{submittedEnquiry ? (
<div className="text-center py-6 space-y-4">
<div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
<CheckCircle2 className="w-8 h-8" />
</div>
<div>
<h4 className="text-xl font-bold text-slate-900">Enquiry Submitted Successfully!</h4>
<p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
Thank you, <span className="font-semibold text-slate-900">{submittedEnquiry.customerName}</span>. Our certified telecom RF engineer in <span className="font-semibold">{submittedEnquiry.city || 'your area'}</span> will contact you within 30 minutes.
</p>
</div>

<div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto text-left text-xs font-mono space-y-1">
<div className="flex justify-between text-slate-500">
<span>Enquiry Ticket ID:</span>
<span className="font-bold text-slate-900">{submittedEnquiry.id}</span>
</div>
<div className="flex justify-between text-slate-500">
<span>Contact Number:</span>
<span className="text-slate-900">{submittedEnquiry.phone}</span>
</div>
<div className="flex justify-between text-slate-500">
<span>Carriers:</span>
<span className="text-blue-700">{submittedEnquiry.carriersNeedHelp.join(', ')}</span>
</div>
</div>

<div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
<button
type="button"
onClick={handleWhatsAppDirect}
className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2"
>
<MessageSquare className="w-4 h-4" />
<span>Chat on WhatsApp Now</span>
</button>
<button
type="button"
onClick={onClose}
className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
>
Close
</button>
</div>
</div>
) : (
<form onSubmit={handleSubmit} className="space-y-4">
{formError && (
<div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg flex items-center gap-2">
<AlertCircle className="w-4 h-4 shrink-0" />
<span>{formError}</span>
</div>
)}

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1">
Your Name *
</label>
<div className="relative">
<User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
<input
type="text"
required
placeholder="e.g. Rahul Sharma"
value={name}
onChange={e => setName(e.target.value)}
className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
/>
</div>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 mb-1">
Mobile Number *
</label>
<div className="relative">
<Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
<input
type="tel"
required
placeholder="e.g. 93722 26376"
value={phone}
onChange={e => setPhone(e.target.value)}
className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
/>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1">
Email Address *
</label>
<div className="relative">
<Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
<input
type="email"
required
placeholder="rahul@company.com"
value={email}
onChange={e => setEmail(e.target.value)}
className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
/>
</div>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 mb-1">
City / Location *
</label>
<div className="relative">
<MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
<input
type="text"
placeholder="e.g. Delhi NCR, Mumbai, Bengaluru"
value={city}
onChange={e => setCity(e.target.value)}
className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
/>
</div>
</div>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 mb-1">
Property Type
</label>
<div className="relative">
<Building className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
<select
value={propertyType}
onChange={e => setPropertyType(e.target.value)}
className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
>
<option>Home / Apartment / Penthouse</option>
<option>Underground Basement / Parking</option>
<option>Corporate Office / Tech Park</option>
<option>Independent Villa / Farmhouse</option>
<option>Industrial Warehouse / Factory</option>
<option>Hotel / Hospital / Commercial Complex</option>
</select>
</div>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">
Which carriers have weak/dead signal?
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
Message or Specific Issue (Optional)
</label>
<textarea
rows={3}
value={message}
onChange={e => setMessage(e.target.value)}
placeholder="Describe your current signal issue, approximate area in sq ft, or preferred survey time..."
className="w-full p-2.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
/>
</div>

<div className="pt-2">
<button
type="submit"
disabled={isSubmitting}
className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50"
>
{isSubmitting ? 'Submitting Details...' : 'Request Free Survey & Quotation'}
</button>
</div>

<div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
<ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
<span>100% Privacy Protected · Zero Spam Guarantee · COD & 10 Days Easy Returns</span>
</div>
</form>
)}
</div>
</div>
</div>
);
};
