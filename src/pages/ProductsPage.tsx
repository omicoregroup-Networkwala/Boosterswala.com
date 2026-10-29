import React, { useState } from 'react';
import { Search, Filter, Radio, ShieldCheck, Check, MessageSquare, ArrowRight, X, Info } from 'lucide-react';
import { WhatsAppIcon } from '../components/FloatingActions';
import { PRODUCTS } from '../data/mockData';
import { Product } from '../types';
import { BoosterVisual } from '../components/BoosterVisual';

interface ProductsPageProps {
onOpenEnquiry: (productName?: string, notes?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenEnquiry }) => {
const [selectedCategory, setSelectedCategory] = useState<string>('all');
const [selectedCarrier, setSelectedCarrier] = useState<string>('all');
const [searchQuery, setSearchQuery] = useState<string>('');
const [modalProduct, setModalProduct] = useState<Product | null>(null);

const categories = [
{ id: 'all', label: 'All Products' },
{ id: 'triband', label: 'Tri-Band 4G' },
{ id: '5g_nr', label: '5G True-NR' },
{ id: 'quadband', label: 'Quad-Band Basement' },
{ id: 'commercial_das', label: 'Commercial DAS' },
{ id: 'accessories', label: 'Antennas & Accessories' }
];

const carriers = ['all', 'Airtel', 'Jio', 'Vi', 'BSNL'];

const filteredProducts = PRODUCTS.filter(p => {
const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
const matchCarrier = selectedCarrier === 'all' || p.supportedCarriers.includes(selectedCarrier as any);
const matchSearch =
searchQuery === '' ||
p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
p.modelCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
return matchCategory && matchCarrier && matchSearch;
});

const handleWhatsAppQuote = (product?: Product) => {
const text = product
? `Hello Boosterswala, I would like to get an instant quotation for ${product.name} (${product.modelCode}).`
: 'Hello Boosterswala, I would like to enquire about mobile signal booster solutions.';
window.open(`https://wa.me/919372226376?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
};

return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
{/* Top Header */}
<div className="max-w-3xl">
<div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
Verified Hardware &amp; Turnkey Kits
</div>
<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
Mobile Signal Boosters &amp; Telecom Hardware
</h1>
<p className="text-sm text-slate-600 mt-2 leading-relaxed">
Explore our complete range of certified cellular amplifiers, high-gain directional antennas, and low-loss RF feeder cables. Designed specifically for Indian telecom spectrum allocations.
</p>
</div>

{/* Filter and Search Bar */}
<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
<div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
{/* Search box */}
<div className="relative flex-1 max-w-md">
<Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
<input
type="text"
placeholder="Search by model, 5G, tri-band, antenna, cable..."
value={searchQuery}
onChange={e => setSearchQuery(e.target.value)}
className="w-full pl-10 pr-4 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
/>
</div>

{/* Carrier Quick Filter */}
<div className="flex items-center gap-2">
<span className="text-xs font-bold text-slate-500 whitespace-nowrap">Carrier:</span>
<div className="flex flex-wrap gap-1">
{carriers.map(c => (
<button
key={c}
type="button"
onClick={() => setSelectedCarrier(c)}
className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-colors ${
selectedCarrier === c
? 'border-blue-600 bg-blue-50 text-blue-800 font-bold'
: 'border-slate-200 text-slate-600 hover:border-slate-300'
}`}
>
{c === 'all' ? 'All Networks' : c}
</button>
))}
</div>
</div>
</div>

{/* Category Tabs */}
<div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 border-t border-slate-100">
{categories.map(cat => (
<button
key={cat.id}
type="button"
onClick={() => setSelectedCategory(cat.id)}
className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-colors ${
selectedCategory === cat.id
? 'bg-slate-900 text-white'
: 'text-slate-600 hover:bg-slate-100'
}`}
>
{cat.label}
</button>
))}
</div>
</div>

{/* Product Grid */}
{filteredProducts.length === 0 ? (
<div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
<Info className="w-10 h-10 text-slate-400 mx-auto mb-3" />
<h3 className="text-base font-bold text-slate-900">No products matched your criteria</h3>
<p className="text-xs text-slate-500 mt-1">Try clearing the search query or changing your category filter.</p>
<button
type="button"
onClick={() => {
setSelectedCategory('all');
setSelectedCarrier('all');
setSearchQuery('');
}}
className="mt-4 px-4 py-2 text-xs font-bold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100"
>
Reset All Filters
</button>
</div>
) : (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{filteredProducts.map(product => (
<div
key={product.id}
className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
>
<div>
{/* Visual hardware illustration */}
<div className="mb-4">
<BoosterVisual
modelCode={product.modelCode}
category={product.category}
gain={product.gain}
outputPower={product.outputPower}
frequencyBands={product.frequencyBands}
size="sm"
imageUrl={product.imageUrl}
productName={product.name}
/>
</div>

<div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-1">
<span>{product.coverageSqFt}</span>
<span className="text-emerald-700 font-bold">{product.gain}</span>
</div>

<h3 className="text-lg font-bold text-slate-900 leading-snug">
{product.name}
</h3>
<p className="text-xs font-bold text-blue-600">Mobile Signal Booster</p>
<p className="text-xs text-slate-600 mt-1 line-clamp-2">
{product.tagline}
</p>

{/* Specs Pill List */}
<div className="mt-4 bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs space-y-1.5 font-mono">
<div className="flex justify-between text-slate-600">
<span>Frequencies:</span>
<span className="text-slate-900 font-bold truncate max-w-[170px]">
{product.frequencyBands[0]}
</span>
</div>
<div className="flex justify-between text-slate-600">
<span>Output Power:</span>
<span className="text-slate-900">{product.outputPower}</span>
</div>
<div className="flex justify-between text-slate-600">
<span>Warranty:</span>
<span className="text-emerald-700 font-bold">{product.warranty}</span>
</div>
</div>

{/* Carrier Compatibility Badges */}
<div className="mt-3 flex items-center gap-1.5 flex-wrap">
<span className="text-[10px] font-mono text-slate-400 uppercase">Supports:</span>
{product.supportedCarriers.map(carrier => (
<span
key={carrier}
className="text-[10px] font-medium bg-slate-100 text-slate-800 px-2 py-0.5 rounded"
>
{carrier}
</span>
))}
</div>
</div>

{/* Price and CTA Buttons */}
<div className="mt-6 pt-4 border-t border-slate-100 space-y-3">


<div className="grid grid-cols-2 gap-2">
<button
type="button"
onClick={() => setModalProduct(product)}
className="py-2 px-3 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center"
>
View Specs
</button>
<button
type="button"
onClick={() => onOpenEnquiry(product.name, `Enquiry for ${product.name} (${product.modelCode})`)}
className="py-2 px-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-center shadow-xs"
>
Enquire Now
</button>
</div>

<button
type="button"
onClick={() => handleWhatsAppQuote(product)}
className="w-full py-2 px-3 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors text-center flex items-center justify-center gap-1.5"
>
<MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
<span>Get Instant Quote on WhatsApp</span>
</button>
</div>
</div>
))}
</div>
)}

{/* Technical Specifications Modal */}
{modalProduct && (
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
<div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden my-8">
<div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white text-slate-900">
<div>
<span className="text-[11px] font-mono text-blue-600 uppercase tracking-wider font-bold">
Full Technical Data Sheet
</span>
<h3 className="text-base font-bold">{modalProduct.name}</h3>
</div>
<button
type="button"
onClick={() => setModalProduct(null)}
className="p-1 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
>
<X className="w-5 h-5" />
</button>
</div>

<div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-xs">
{modalProduct.imageUrl && (
<div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-200 p-4 flex flex-col sm:flex-row items-center gap-4">
<div className="w-full sm:w-48 h-36 shrink-0 flex items-center justify-center bg-white border border-slate-200/80 rounded-lg p-2 shadow-2xs">
<img
src={modalProduct.imageUrl}
alt={modalProduct.name}
className="max-h-full max-w-full object-contain filter drop-shadow-sm"
/>
</div>
<div className="space-y-1.5 text-slate-700">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200">
<Check className="w-3 h-3 text-emerald-600" />
<span>{modalProduct.category === 'accessories' ? 'Genuine Telecom Hardware & Accessory' : 'Verified Physical Hardware Kit'}</span>
</div>
<div className="text-xs font-bold text-slate-900">{modalProduct.name}</div>
<p className="text-[11px] text-slate-600 leading-relaxed">
{modalProduct.category === 'accessories'
? 'Precision RF equipment engineered for low loss (<0.075 dB/m on cables, low insertion loss on splitters, high PIM rating) and 50Ω impedance matching across Airtel, Jio, Vi & BSNL bands.'
: 'Kit includes certified repeater chassis with heatsinks, high-gain outdoor donor antenna, indoor distribution dome/panel, low-loss 50Ω RF cabling, and regulated power supply.'}
</p>
</div>
</div>
)}

<div>
<h4 className="font-bold text-slate-900 mb-1">Product Description</h4>
<p className="text-slate-600 leading-relaxed">{modalProduct.description}</p>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-2">Supported Frequency Bands in India</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono">
{modalProduct.frequencyBands.map((b, i) => (
<div key={i} className="p-2 rounded bg-slate-50 border border-slate-200 text-slate-800">
✓ {b}
</div>
))}
</div>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-2">Technical RF Specifications</h4>
<div className="grid grid-cols-2 gap-2 font-mono bg-slate-50 p-3 rounded-xl border border-slate-200">
<div className="text-slate-500">System Gain:</div>
<div className="font-bold text-slate-900 text-right">{modalProduct.gain}</div>
<div className="text-slate-500">Max Output Power:</div>
<div className="text-slate-900 text-right">{modalProduct.outputPower}</div>
<div className="text-slate-500">Impedance:</div>
<div className="text-slate-900 text-right">{modalProduct.specs.impedance}</div>
<div className="text-slate-500">RF Connectors:</div>
<div className="text-slate-900 text-right">{modalProduct.specs.connectorType}</div>
<div className="text-slate-500">Noise Figure:</div>
<div className="text-slate-900 text-right">{modalProduct.specs.noiseFigure}</div>
<div className="text-slate-500">VSWR:</div>
<div className="text-slate-900 text-right">{modalProduct.specs.vswr}</div>
<div className="text-slate-500">Power Supply:</div>
<div className="text-slate-900 text-right">{modalProduct.specs.powerSupply}</div>
<div className="text-slate-500">Operating Temperature:</div>
<div className="text-slate-900 text-right">{modalProduct.specs.operatingTemp}</div>
</div>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-2">What is Included in the Turnkey Kit</h4>
<ul className="space-y-1.5 text-slate-700">
{modalProduct.kitIncludes.map((k, i) => (
<li key={i} className="flex items-start gap-2">
<Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
<span>{k}</span>
</li>
))}
</ul>
</div>
</div>

<div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">

<div className="flex gap-2">
<button
type="button"
onClick={() => {
const prod = modalProduct;
setModalProduct(null);
onOpenEnquiry(prod.name, `Enquiry for ${prod.name}`);
}}
className="px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
>
Book Site Survey
</button>
<button
type="button"
onClick={() => handleWhatsAppQuote(modalProduct)}
className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 flex items-center gap-1.5"
>
<WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
<span>WhatsApp Quote</span>
</button>
</div>
</div>
</div>
</div>
)}
</div>
);
};
