import React, { useState } from 'react';
import { 
Radio, 
Wifi, 
PhoneCall, 
MessageSquare, 
CheckCircle2, 
ArrowRight, 
ShieldCheck, 
Sliders, 
Zap, 
Building2, 
Sparkles, 
Check, 
Layers, 
Server, 
FileDown,
Clock,
Compass
} from 'lucide-react';
import { PRODUCTS, TESTIMONIALS, FAQS, SOLUTIONS } from '../data/mockData';
import { PageTab, Product } from '../types';
import { SignalCalculator } from '../components/SignalCalculator';
import { BoosterVisual } from '../components/BoosterVisual';
import { WhatsAppIcon } from '../components/FloatingActions';

interface HomePageProps {
onSelectTab: (tab: PageTab) => void;
onOpenEnquiry: (productName?: string, notes?: string) => void;
onOpenExportGuide: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
onSelectTab,
onOpenEnquiry,
onOpenExportGuide
}) => {
const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
const [activeComparisonTab, setActiveComparisonTab] = useState<'voice' | 'data' | 'battery'>('voice');
const [homeBoosterCategory, setHomeBoosterCategory] = useState<'all' | 'triband' | '5g_nr' | 'quadband' | 'commercial_das'>('all');

  const allProductsWithoutAccessories = PRODUCTS.filter(p => p.category !== 'accessories');
  const displayedBoosters = PRODUCTS.filter(p => {
    if (p.category === 'accessories') return false;
    if (homeBoosterCategory === 'all') return allProductsWithoutAccessories.slice(0, 5).some(a => a.id === p.id);
    return p.category === homeBoosterCategory;
  });
const featuredAccessories = PRODUCTS.filter(p => p.category === 'accessories');

const handleWhatsAppEnquiry = (productName?: string) => {
const text = productName
? `Hello Boosterswala, I would like to get a quotation for ${productName}.`
: 'Hello Boosterswala, I would like to enquire about mobile signal booster solutions.';
window.open(`https://wa.me/919372226376?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
};

return (
<div className="space-y-16 sm:space-y-24">
{/* 1. Hero Section */}
<section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-20 border-b border-slate-200 bg-gradient-to-b from-slate-100/80 via-white to-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
{/* Left Column (7 Cols) */}
<div className="lg:col-span-7 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
<Radio className="w-3.5 h-3.5" />
<span>India&apos;s #1 Mobile Signal Booster &amp; DAS Specialist</span>
</div>

<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
MOBILE SIGNAL BOOSTER SOLUTIONS
</h1>

<p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
Say Goodbye to Weak Mobile Signals. Enjoy stronger mobile signal reception, improved call quality, and more reliable connectivity with professional mobile signal booster solutions for homes, offices, hotels, and commercial spaces.
</p>

{/* Action Buttons */}
<div className="pt-2 flex flex-wrap items-center gap-3">
<button
type="button"
onClick={() => onOpenEnquiry('Turnkey Signal Booster Solution', 'Requested from Hero section')}
className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2"
>
<span>Book Free On-Site Inspection</span>
<ArrowRight className="w-4 h-4" />
</button>

<button
type="button"
onClick={() => handleWhatsAppEnquiry('Custom Signal Booster Consultation')}
className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-2xs"
>
<WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
<span>WhatsApp Quote</span>
</button>

<a
href="tel:+919372226376"
className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1.5"
>
<PhoneCall className="w-4 h-4 text-blue-600" />
<span>+91 93722 26376</span>
</a>
</div>

{/* Trust Indicators */}
<div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
<span className="flex items-center gap-1.5 text-slate-700">
<Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
15,000+ Installations
</span>
<span className="flex items-center gap-1.5 text-slate-700 font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
<Check className="w-4 h-4 text-amber-600 stroke-[2.5]" />
COD &amp; 10 Days Returns
</span>
<span className="flex items-center gap-1.5 text-slate-700">
<Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
1-Year warranty
</span>
<span className="flex items-center gap-1.5 text-slate-700">
<Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
Same-Day Dispatch
</span>
</div>
</div>

{/* Right Column: Hardware Showcase (5 Cols) */}
<div className="lg:col-span-5">
<div className="relative">

<BoosterVisual
modelCode="BW-TB70-JIO"
category="triband"
gain="70 dB"
outputPower="23 "
frequencyBands={['850 MHz (Jio 4G)', '1800 MHz (Airtel/Vi 4G)', '2100 MHz (3G/4G)']}
size="lg"
imageUrl="/assets/aistudio/IMG_ea1ca6d9.jfif"
images={[
'/assets/aistudio/IMG_ea1ca6d9.jfif'
]}
productName="Boosterswala Genuine Tri-Band 4G/3G Booster"
/>

<div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-2 font-mono">
<span>Downlink: 100% Linear</span>
<span className="text-blue-600 font-semibold cursor-pointer" onClick={() => onSelectTab('products')}>
View 8+ Models &rarr;
</span>
</div>
</div>
</div>
</div>
</div>
</section>

{/* 2. Key Proof Statistics Bar */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 shadow-sm">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
<div className="pt-3 md:pt-0">
<div className="font-mono text-3xl sm:text-4xl font-extrabold text-cyan-400">15,000+</div>
<div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Boosters Installed</div>
</div>
<div className="pt-3 md:pt-0">
<div className="font-mono text-3xl sm:text-4xl font-extrabold text-white">99.8%</div>
<div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Call Drop Reduction</div>
</div>
<div className="pt-3 md:pt-0">
<div className="font-mono text-3xl sm:text-4xl font-extrabold text-amber-400">180+</div>
<div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Cities Covered in India</div>
</div>
<div className="pt-3 md:pt-0">
<div className="font-mono text-3xl sm:text-4xl font-extrabold text-emerald-400">&lt; 3 Hrs</div>
<div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Average Installation Time</div>
</div>
</div>
</div>
</section>


{/* 4. Featured Product Catalog Preview */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
Engineered for Indian Frequencies
</div>
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
Featured Mobile Signal Booster Systems
</h2>
<div className="flex items-center gap-2 mt-3">
<button
type="button"
onClick={() => setHomeBoosterCategory('all')}
className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
homeBoosterCategory === 'all'
? 'bg-blue-600 text-white shadow-xs'
: 'bg-slate-100 text-slate-700 hover:bg-slate-200'
}`}
>
All Boosters
</button>
<button
type="button"
onClick={() => setHomeBoosterCategory('triband')}
className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
homeBoosterCategory === 'triband'
? 'bg-blue-600 text-white shadow-xs'
: 'bg-slate-100 text-slate-700 hover:bg-slate-200'
}`}
>
Tri-Band 4G
</button>
<button
type="button"
onClick={() => setHomeBoosterCategory('5g_nr')}
className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
homeBoosterCategory === '5g_nr'
? 'bg-blue-600 text-white shadow-xs'
: 'bg-slate-100 text-slate-700 hover:bg-slate-200'
}`}
>
<span>5G True-NR</span>
<span className="px-1.5 py-0.2 rounded-full text-[9px] bg-emerald-500 text-white font-mono uppercase">New</span>
</button>
<button
type="button"
onClick={() => setHomeBoosterCategory('quadband')}
className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
homeBoosterCategory === 'quadband'
? 'bg-blue-600 text-white shadow-xs'
: 'bg-slate-100 text-slate-700 hover:bg-slate-200'
}`}
>
Quad-Band Basement
</button>
<button
type="button"
onClick={() => setHomeBoosterCategory('commercial_das')}
className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
homeBoosterCategory === 'commercial_das'
? 'bg-blue-600 text-white shadow-xs'
: 'bg-slate-100 text-slate-700 hover:bg-slate-200'
}`}
>
Commercial DAS
</button>
</div>
</div>
<button
type="button"
onClick={() => onSelectTab('products')}
className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 self-start sm:self-auto"
>
<span>View Full Catalog</span>
<ArrowRight className="w-4 h-4" />
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
{displayedBoosters.map(product => (
<div
key={product.id}
className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
>
<div>
{/* Mini Hardware Graphic */}
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

<div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-1">
<span>{product.coverageSqFt}</span>
<span className="text-emerald-700 font-semibold">{product.gain} GAIN</span>
</div>

<h3 className="text-base font-bold text-slate-900 leading-snug">
{product.name}
</h3>
<p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
{product.tagline}
</p>

<div className="mt-3 pt-3 border-t border-slate-100 space-y-1 text-xs text-slate-600 font-mono">
{product.id === 'bw-5g-nr-25-kit' ? (
<>
<p>850 · 1800 · 2300 MHz</p>
<p>Works with Jio, Airtel (4G)</p>
<p>Covers up to 5,000 sq.ft</p>
</>
) : product.id === 'bw-5g-nr-45-industrial' ? (
<>
<p>850 · 1800 · 3500 MHz</p>
<p>Works with Jio, Airtel, Vi, BSNL</p>
<p>Covers up to 10,000 sq.ft</p>
</>
) : (
product.supportedCarriers.map(c => (
<span key={c} className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded mr-1">
{c}
</span>
))
)}
</div>
</div>

<div className="mt-5 pt-3 border-t border-slate-100 space-y-2">


<div className="grid grid-cols-2 gap-2 pt-1">
<button
type="button"
onClick={() => onOpenEnquiry(product.name, `Enquiry for ${product.name} (${product.modelCode})`)}
className="py-2 px-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center"
>
Enquire
</button>
<button
type="button"
onClick={() => handleWhatsAppEnquiry(product.name)}
className="py-2 px-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors text-center flex items-center justify-center gap-1"
>
<MessageSquare className="w-3 h-3" />
<span>WhatsApp</span>
</button>
</div>
</div>
</div>
))}
</div>
</section>

{/* 3. Interactive Signal Assessment & Booster Calculator */}
<section id="signal-calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
<SignalCalculator onOpenEnquiry={onOpenEnquiry} />
</section>


{/* 4b. Genuine Antennas & Accessories Section */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
Genuine RF Hardware &amp; Feeder Components
</div>
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
Antennas &amp; Accessories
</h2>
<p className="text-sm text-slate-600 mt-1">
High-gain LPDA antennas, ceiling domes, flat patch panels, power splitters, and LMR-400 coaxial feeder cables.
</p>
</div>
<button
type="button"
onClick={() => onSelectTab('products')}
className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 self-start sm:self-auto"
>
<span>View All in Products Page</span>
<ArrowRight className="w-4 h-4" />
</button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{featuredAccessories.map(acc => (
<div
key={acc.id}
className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
>
<div>
<div className="mb-4">
<BoosterVisual
modelCode={acc.modelCode}
category={acc.category}
gain={acc.gain}
outputPower={acc.outputPower}
frequencyBands={acc.frequencyBands}
size="sm"
imageUrl={acc.imageUrl}
productName={acc.name}
/>
</div>

<div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-1">
<span>{acc.modelCode}</span>
<span className="text-blue-700 font-semibold">{acc.gain}</span>
</div>

<h3 className="text-base font-bold text-slate-900 leading-snug">
{acc.name}
</h3>
<p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
{acc.tagline}
</p>
</div>

<div className="mt-5 pt-3 border-t border-slate-100 space-y-2">
<div className="space-y-1 text-xs text-slate-600 font-mono">
<p>850 · 1800 · 2100 MHz</p>
<p>Works with Airtel, Vi, BSNL</p>
<p>Covers up to 2,000 sq.ft</p>
</div>

<div className="grid grid-cols-2 gap-2 pt-1">
<button
type="button"
onClick={() => onOpenEnquiry(acc.name, `Enquiry for ${acc.name} (${acc.modelCode})`)}
className="py-2 px-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center"
>
Enquire
</button>
<button
type="button"
onClick={() => handleWhatsAppEnquiry(acc.name)}
className="py-2 px-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors text-center flex items-center justify-center gap-1"
>
<MessageSquare className="w-3 h-3" />
<span>WhatsApp</span>
</button>
</div>
</div>
</div>
))}
</div>
</section>

{/* 5. How It Works - The 4-Step Installation Architecture */}
<section className="bg-slate-100/70 border-y border-slate-200 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
<div className="text-center max-w-2xl mx-auto">
<div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
Turnkey Telecommunications Engineering
</div>
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
How a Mobile Signal Booster Works
</h2>
<p className="text-sm text-slate-600 mt-2">
Our 4-component system captures the cleanest line-of-sight signal from the external cell tower, magnifies it up to 100,000 times, and broadcasts full 5-bar coverage throughout your building.
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
{[
{
step: '01',
title: 'Outdoor LPDA Antenna',
detail: 'Mounted on terrace or roof. Precision aligned towards the nearest donor cell tower using an RF spectrum analyzer.',
badge: 'Donor Signal Reception'
},
{
step: '02',
title: 'Low-Loss 50Ω Cable',
detail: 'Double-shielded pure copper coaxial cable routes the signal indoors with near-zero attenuation or electrical loss.',
badge: 'Interference Shielded'
},
{
step: '03',
title: 'Boosterswala RF Amplifier',
detail: 'The brain of the system. Amplifies uplink and downlink frequencies with AGC to prevent tower feedback oscillation.',
badge: 'Smart AGC Amplification'
},
{
step: '04',
title: 'Indoor Dome Antennas',
detail: 'Discreet ceiling units emit uniform 360° toroidal signal, providing instant 5-bar voice clarity and high-speed data.',
badge: 'Uniform 5-Bar Coverage'
}
].map(item => (
<div key={item.step} className="rounded-xl bg-white p-6 border border-slate-200 shadow-2xs relative">
<div className="text-3xl font-extrabold font-mono text-blue-200 mb-2">
{item.step}
</div>
<div className="text-[11px] font-mono text-blue-700 uppercase font-semibold mb-1">
{item.badge}
</div>
<h3 className="text-base font-bold text-slate-900 mb-2">
{item.title}
</h3>
<p className="text-xs text-slate-600 leading-relaxed">
{item.detail}
</p>
</div>
))}
</div>
</div>
</section>

{/* 6. Interactive Before vs After Comparison */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
<div className="text-center max-w-2xl mx-auto">
<div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
Proven Performance
</div>
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
Real Difference Before &amp; After Boosterswala
</h2>
<p className="text-sm text-slate-600 mt-1">
See the dramatic improvements in voice call clarity, download speeds, and smartphone battery efficiency.
</p>
</div>

<div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
{/* Comparison Category Switcher */}
<div className="flex border-b border-slate-200 bg-slate-50">
{[
{ id: 'voice', label: 'VoLTE Voice Calls & OTPs' },
{ id: 'data', label: '4G / 5G Internet Speeds' },
{ id: 'battery', label: 'Phone Battery & Radiation' }
].map(tab => (
<button
key={tab.id}
type="button"
onClick={() => setActiveComparisonTab(tab.id as any)}
className={`flex-1 py-3 px-4 text-xs sm:text-sm font-semibold transition-colors text-center ${
activeComparisonTab === tab.id
? 'bg-white text-blue-700 border-b-2 border-blue-600'
: 'text-slate-600 hover:text-slate-900'
}`}
>
{tab.label}
</button>
))}
</div>

<div className="p-6 sm:p-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
{/* Before Card */}
<div className="rounded-xl bg-rose-50/60 border border-rose-200 p-6 space-y-4">
<div className="flex items-center justify-between">
<span className="text-xs font-mono font-bold text-rose-700 uppercase">
Without Booster (Current Problem)
</span>
<span className="text-xs font-mono bg-rose-200 text-rose-900 px-2 py-0.5 rounded">
0 - 1 Bar
</span>
</div>

{activeComparisonTab === 'voice' && (
<>
<div className="font-mono text-2xl font-bold text-rose-900">
85% Dropped Calls
</div>
<ul className="text-xs text-rose-800 space-y-2">
<li>• Missed crucial banking and credit card OTPs</li>
<li>• Muffled, robotic voice on conference calls</li>
<li>• Running to balcony or driveway just to speak</li>
<li>• Call disconnects whenever walking between rooms</li>
</ul>
</>
)}

{activeComparisonTab === 'data' && (
<>
<div className="font-mono text-2xl font-bold text-rose-900">
0.8 - 2.5 Mbps Speed
</div>
<ul className="text-xs text-rose-800 space-y-2">
<li>• Constant buffering during Zoom and Teams calls</li>
<li>• Web pages timeout or fail to load payment screens</li>
<li>• UPI payment QR code scans fail in basement shops</li>
<li>• High latency (&gt; 250ms ping) ruining live interactions</li>
</ul>
</>
)}

{activeComparisonTab === 'battery' && (
<>
<div className="font-mono text-2xl font-bold text-rose-900">
High Radiation &amp; Rapid Drain
</div>
<ul className="text-xs text-rose-800 space-y-2">
<li>• Phone transmits at maximum 2,000 mW power to reach distant tower</li>
<li>• Smartphone overheats and battery drains in 3-4 hours</li>
<li>• Continuous tower search creates high RF stress</li>
</ul>
</>
)}
</div>

{/* After Card */}
<div className="rounded-xl bg-emerald-50/60 border border-emerald-200 p-6 space-y-4">
<div className="flex items-center justify-between">
<span className="text-xs font-mono font-bold text-emerald-700 uppercase">
With Boosterswala System
</span>
<span className="text-xs font-mono bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded">
Full 5 Bars
</span>
</div>

{activeComparisonTab === 'voice' && (
<>
<div className="font-mono text-2xl font-bold text-emerald-900">
0.0% Call Drops (Crystal Clear)
</div>
<ul className="text-xs text-emerald-800 space-y-2">
<li>• Instant SMS and authentication OTP delivery in &lt; 2 seconds</li>
<li>• HD VoLTE audio clarity with zero jitter or latency</li>
<li>• Seamless roaming across bedrooms, halls, and basement</li>
<li>• Simultaneous support for Airtel, Jio, Vi &amp; BSNL</li>
</ul>
</>
)}

{activeComparisonTab === 'data' && (
<>
<div className="font-mono text-2xl font-bold text-emerald-900">
85 - 240+ Mbps Speed
</div>
<ul className="text-xs text-emerald-800 space-y-2">
<li>• Instant 4K Ultra HD video streaming with zero lag</li>
<li>• Fast UPI transactions and reliable e-commerce checkouts</li>
<li>• Solid cellular data backup whenever broadband wifi goes down</li>
<li>• Low ping (&lt; 25ms) for high-performance productivity</li>
</ul>
</>
)}

{activeComparisonTab === 'battery' && (
<>
<div className="font-mono text-2xl font-bold text-emerald-900">
100x Lower Radiation &amp; All-Day Battery
</div>
<ul className="text-xs text-emerald-800 space-y-2">
<li>• Phone detects 5 bars and reduces transmitter power down to &lt; 20 mW</li>
<li>• Significant reduction in personal electromagnetic radiation</li>
<li>• Phone runs cool and battery lasts 40% longer each day</li>
</ul>
</>
)}
</div>
</div>
</div>
</div>
</section>

{/* 7. Solutions by Space Preview */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
Custom Engineered Applications
</div>
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
Specialized Solutions for Every Environment
</h2>
</div>
<button
type="button"
onClick={() => onSelectTab('solutions')}
className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 self-start sm:self-auto"
>
<span>Explore All 6 Solutions</span>
<ArrowRight className="w-4 h-4" />
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{SOLUTIONS.slice(0, 3).map(sol => (
<div
key={sol.id}
className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
>
<div>
<span className="text-[11px] font-mono text-blue-700 uppercase tracking-wider block mb-2 font-semibold">
{sol.typicalCoverage}
</span>
<h3 className="text-lg font-bold text-slate-900 mb-2">
{sol.title}
</h3>
<p className="text-xs text-slate-600 leading-relaxed mb-4">
{sol.challenge}
</p>

<div className="space-y-1.5 text-xs text-slate-700">
{sol.keyBenefits.slice(0, 2).map((b, i) => (
<div key={i} className="flex items-start gap-2">
<CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
<span>{b}</span>
</div>
))}
</div>
</div>

<div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
<button
type="button"
onClick={() => onSelectTab('solutions')}
className="text-xs font-semibold text-blue-600 hover:text-blue-800"
>
Technical Details &rarr;
</button>
<button
type="button"
onClick={() => onOpenEnquiry(sol.title, `Enquiry for ${sol.title}`)}
className="px-3 py-1.5 text-xs font-medium text-slate-900 bg-slate-100 rounded-lg hover:bg-slate-200"
>
Get Quote
</button>
</div>
</div>
))}
</div>
</section>

{/* 8. Verified Customer Testimonials */}
<section className="bg-slate-900 text-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
<div className="text-center max-w-2xl mx-auto">
<div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
Field Tested &amp; Proven
</div>
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
Trusted by 15,000+ Property Owners Across India
</h2>
<p className="text-xs text-slate-400 mt-2">
From basement warehouses in Mumbai to luxury penthouses in Delhi and tech hubs in Bengaluru.
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{TESTIMONIALS.map(t => (
<div
key={t.id}
className="rounded-xl bg-slate-800/80 border border-slate-700 p-6 flex flex-col justify-between"
>
<div>
<div className="flex items-center justify-between mb-3 text-xs font-mono">
<span className="text-cyan-400">{t.carrierBoosted}</span>
<span className="text-amber-400">★★★★★</span>
</div>

<div className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-1 rounded mb-4 inline-block">
Metric: {t.metric}
</div>

<p className="text-xs text-slate-300 leading-relaxed italic mb-6">
&ldquo;{t.quote}&rdquo;
</p>
</div>

<div className="pt-4 border-t border-slate-700/60">
<div className="text-sm font-bold text-white">{t.name}</div>
<div className="text-xs text-slate-400">{t.designation}, {t.company}</div>
<div className="text-[11px] text-slate-500 font-mono mt-0.5">{t.city} · {t.propertyType}</div>
</div>
</div>
))}
</div>
</div>
</section>

{/* 9. FAQs Highlights */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
Got Questions?
</div>
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
Frequently Asked Questions
</h2>
</div>
<button
type="button"
onClick={() => onSelectTab('faq')}
className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 self-start sm:self-auto"
>
<span>View All FAQs</span>
<ArrowRight className="w-4 h-4" />
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{FAQS.slice(0, 4).map(faq => (
<div key={faq.id} className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
<h3 className="text-sm font-bold text-slate-900">
{faq.question}
</h3>
<p className="text-xs text-slate-600 leading-relaxed">
{faq.answer}
</p>
</div>
))}
</div>
</section>

{/* 10. Call To Action Conversion Banner */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
<div className="rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8 sm:p-12 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
<div className="space-y-3 max-w-xl">
<span className="text-xs font-mono uppercase tracking-wider text-cyan-200 bg-blue-900/60 px-2.5 py-1 rounded">
Pan-India Service Within 24-48 Hours
</span>
<h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
Ready to Eliminate Call Drops in Your Property?
</h2>
<p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
Contact our certified RF engineers today for a free on-site signal inspection, custom link-budget calculation, and transparent quotation.
</p>
</div>

<div className="flex flex-col sm:flex-row gap-3 shrink-0">
<button
type="button"
onClick={() => onOpenEnquiry('Turnkey Site Inspection')}
className="px-6 py-3 text-xs sm:text-sm font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors shadow-sm"
>
Book Free Site Survey
</button>
<button
type="button"
onClick={() => handleWhatsAppEnquiry('Emergency Site Survey')}
className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-sm"
>
<MessageSquare className="w-4 h-4" />
<span>WhatsApp Us</span>
</button>
</div>
</div>
</section>
</div>
);
};
