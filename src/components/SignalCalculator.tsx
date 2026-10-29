import React, { useState } from 'react';
import { Radio, ShieldCheck, CheckCircle2, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { Product } from '../types';

interface SignalCalculatorProps {
onOpenEnquiry: (productName?: string, notes?: string) => void;
}

export const SignalCalculator: React.FC<SignalCalculatorProps> = ({ onOpenEnquiry }) => {
const [propertyType, setPropertyType] = useState<'home' | 'basement' | 'office' | 'villa' | 'industrial'>('home');
const [areaSqFt, setAreaSqFt] = useState<number>(3000);
const [outsideSignal, setOutsideSignal] = useState<'1-2_bars' | '3_bars' | 'zero_bars'>('1-2_bars');
const [selectedCarriers, setSelectedCarriers] = useState<string[]>(['Airtel', 'Jio']);

const toggleCarrier = (c: string) => {
if (selectedCarriers.includes(c)) {
if (selectedCarriers.length > 1) {
setSelectedCarriers(selectedCarriers.filter(item => item !== c));
}
} else {
setSelectedCarriers([...selectedCarriers, c]);
}
};

// Logic to determine recommended booster
let recommendedProduct: Product = PRODUCTS[0];
let antennasNeeded = 1;

if (propertyType === 'basement') {
recommendedProduct = PRODUCTS.find(p => p.id === 'bw-basement-special-quad') || PRODUCTS[0];
antennasNeeded = Math.ceil(areaSqFt / 1800);
} else if (propertyType === 'industrial' || areaSqFt > 12000) {
recommendedProduct = PRODUCTS.find(p => p.id === 'bw-commercial-das-enterprise') || PRODUCTS[3];
antennasNeeded = Math.ceil(areaSqFt / 2500);
} else if (propertyType === 'villa') {
recommendedProduct = PRODUCTS.find(p => p.id === 'bw-villa-rural-booster') || PRODUCTS[0];
antennasNeeded = Math.ceil(areaSqFt / 2000);
} else if (areaSqFt > 5000) {
recommendedProduct = PRODUCTS.find(p => p.id === 'bw-5g-ultra-max') || PRODUCTS[1];
antennasNeeded = Math.ceil(areaSqFt / 2200);
} else {
recommendedProduct = PRODUCTS.find(p => p.id === 'bw-turbo-triband-pro') || PRODUCTS[0];
antennasNeeded = Math.max(1, Math.ceil(areaSqFt / 2000));
}

const handleWhatsAppInquiry = () => {
const text = encodeURIComponent(
`Hello Boosterswala, I used your Signal Booster Finder on your website:\n` +
`• Property: ${propertyType.toUpperCase()}\n` +
`• Area: ${areaSqFt.toLocaleString()} sq ft\n` +
`• Outside Signal: ${outsideSignal.replace('_', ' ')}\n` +
`• Carriers: ${selectedCarriers.join(', ')}\n` +
`• Recommended System: ${recommendedProduct.name}\n` +
`Please provide a quotation and arrange a free site survey.`
);
window.open(`https://wa.me/919372226376?text=${text}`, '_blank', 'noopener,noreferrer');
};

return (
<div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
<div className="max-w-3xl mb-6">
<div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
<Radio className="w-4 h-4 text-blue-600" />
<span>Interactive Signal Assessment Tool</span>
</div>
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
Find the Exact Booster System for Your Space
</h2>
<p className="text-sm text-slate-600 mt-1">
Select your property details below to instantly calculate the recommended RF gain, antenna count, and carrier compatibility.
</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/* Left Inputs (7 Cols) */}
<div className="lg:col-span-7 space-y-6">
{/* Step 1: Property Type */}
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
1. Select Property Type
</label>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
{[
{ id: 'home', label: 'Flat / Apartment' },
{ id: 'basement', label: 'Basement / Parking' },
{ id: 'office', label: 'Office / Corporate' },
{ id: 'villa', label: 'Villa / Farmhouse' },
{ id: 'industrial', label: 'Warehouse / Factory' }
].map(item => (
<button
key={item.id}
type="button"
onClick={() => setPropertyType(item.id as any)}
className={`px-3 py-2 text-xs font-medium rounded-lg border text-left transition-colors ${
propertyType === item.id
? 'border-blue-600 bg-blue-50/70 text-blue-900 font-semibold shadow-xs'
: 'border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
}`}
>
{item.label}
</button>
))}
</div>
</div>

{/* Step 2: Coverage Area in Sq Ft */}
<div>
<div className="flex items-center justify-between mb-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
2. Approximate Area
</label>
<span className="font-mono text-sm font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
{areaSqFt.toLocaleString()} sq ft
</span>
</div>
<input
type="range"
min={500}
max={30000}
step={500}
value={areaSqFt}
onChange={e => setAreaSqFt(Number(e.target.value))}
className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
/>
<div className="flex justify-between text-[11px] font-mono text-slate-600 mt-1">
<span>500 sq ft</span>
<span>5,000 sq ft</span>
<span>15,000 sq ft</span>
<span>30,000+ sq ft</span>
</div>
</div>

{/* Step 3: Outside Signal Quality */}
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
3. Outdoor Signal on Balcony / Terrace
</label>
<div className="grid grid-cols-3 gap-2">
{[
{ id: '3_bars', label: '3-4 Bars (Moderate)', detail: 'Decent outdoor reception' },
{ id: '1-2_bars', label: '1-2 Bars (Weak)', detail: 'Intermittent signal' },
{ id: 'zero_bars', label: '0-1 Bar (Critical)', detail: 'Emergency calls only' }
].map(item => (
<button
key={item.id}
type="button"
onClick={() => setOutsideSignal(item.id as any)}
className={`p-2.5 text-left rounded-lg border transition-colors ${
outsideSignal === item.id
? 'border-blue-600 bg-blue-50/70 text-blue-900 shadow-xs'
: 'border-slate-200 text-slate-700 hover:border-slate-300'
}`}
>
<div className="text-xs font-semibold">{item.label}</div>
<div className="text-[10px] text-slate-600 mt-0.5">{item.detail}</div>
</button>
))}
</div>
</div>

{/* Step 4: Carriers to Boost */}
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
4. Target Mobile Operators
</label>
<div className="flex flex-wrap gap-2">
{['Airtel', 'Jio', 'Vi', 'BSNL'].map(carrier => {
const isSelected = selectedCarriers.includes(carrier);
return (
<button
key={carrier}
type="button"
onClick={() => toggleCarrier(carrier)}
className={`px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 ${
isSelected
? 'border-blue-600 bg-blue-600 text-white shadow-xs'
: 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
}`}
>
<span>{carrier}</span>
{isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
</button>
);
})}
</div>
</div>
</div>

{/* Right Output Card (5 Cols) */}
<div className="lg:col-span-5 rounded-xl bg-slate-900 text-slate-100 p-6 shadow-md border border-slate-800">
<div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
<span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
Recommended Solution
</span>
<span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
{recommendedProduct.warranty}
</span>
</div>

<h3 className="text-lg font-bold text-white mb-1">
{recommendedProduct.name}
</h3>
<p className="text-xs text-slate-400 mb-4 line-clamp-2">
{recommendedProduct.tagline}
</p>

<div className="grid grid-cols-2 gap-3 mb-5 text-xs font-mono">
<div className="rounded-lg bg-slate-800/80 p-2.5 border border-slate-700/60">
<span className="text-[10px] text-slate-400 block uppercase">RF System Gain</span>
<span className="text-base font-bold text-cyan-400">{recommendedProduct.gain}</span>
</div>
<div className="rounded-lg bg-slate-800/80 p-2.5 border border-slate-700/60">
<span className="text-[10px] text-slate-400 block uppercase">Indoor Antennas</span>
<span className="text-base font-bold text-white">{antennasNeeded} Ceiling Unit{antennasNeeded > 1 ? 's' : ''}</span>
</div>
<div className="rounded-lg bg-slate-800/80 p-2.5 border border-slate-700/60">
<span className="text-[10px] text-slate-400 block uppercase">Max Coverage</span>
<span className="text-base font-bold text-white">{recommendedProduct.coverageSqFt}</span>
</div>

</div>

<div className="rounded-lg bg-emerald-950/40 p-4 border border-emerald-800/50 mb-5">
  <span className="text-[10px] text-emerald-300 block uppercase mb-1">Pricing</span>
  <span className="text-xl font-extrabold text-white">
    {areaSqFt <= 1000 ? '₹15,500' : areaSqFt <= 2500 ? '₹20,500' : areaSqFt <= 5000 ? '₹30,500' : '₹80,500'}
  </span>
  <span className="text-xs text-emerald-200 ml-2">+ GST + Transportation</span>
</div>
<div className="rounded-lg bg-slate-800/50 p-3 mb-5 border border-slate-700/40 text-xs space-y-1.5 text-slate-300">
<div className="flex items-center gap-2">
<ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
<span>Full compatibility for: {selectedCarriers.join(', ')}</span>
</div>
<div className="flex items-center gap-2">
<CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
<span>Complete turnkey kit with outdoor LPDA & low-loss cable</span>
</div>
</div>

<div className="space-y-2">
<button
type="button"
onClick={() => onOpenEnquiry(
recommendedProduct.name,
`Assessment: ${propertyType.toUpperCase()}, ${areaSqFt} sq ft, outside signal ${outsideSignal}, carriers: ${selectedCarriers.join(', ')}`
)}
className="w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
>
<span>Book Free On-Site Inspection</span>
<ArrowRight className="w-3.5 h-3.5" />
</button>

<button
type="button"
onClick={handleWhatsAppInquiry}
className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2"
>
<MessageSquare className="w-3.5 h-3.5" />
<span>Instant WhatsApp Quote</span>
</button>
</div>
</div>
</div>
</div>
);
};
