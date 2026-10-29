import React from 'react';
import { Radio, Phone, Mail, MapPin, ShieldCheck, HeartHandshake, FileText, Download, MessageSquare } from 'lucide-react';
import { PageTab } from '../types';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './FloatingActions';

interface FooterProps {
onSelectTab: (tab: PageTab) => void;
onOpenEnquiry: () => void;
onOpenExportGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
onSelectTab,
onOpenEnquiry,
onOpenExportGuide
}) => {
return (
<footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
{/* Top Value Banner */}
<div className="border-b border-slate-800/80 bg-slate-900/60 py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="flex items-center gap-3.5">
<div className="w-10 h-10 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center border border-blue-500/30 shrink-0">
<ShieldCheck className="w-5 h-5" />
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-wider">COD &amp; 10 Days Returns</h4>
<p className="text-[11px] text-slate-400 mt-0.5">Cash on Delivery across India with 10 days easy returns</p>
</div>
</div>

<div className="flex items-center gap-3.5">
<div className="w-10 h-10 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center border border-blue-500/30 shrink-0">
<HeartHandshake className="w-5 h-5" />
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-wider">1-Year warranty</h4>
<p className="text-[11px] text-slate-400 mt-0.5">Comprehensive door-step hardware replacement</p>
</div>
</div>

<div className="flex items-center gap-3.5">
<div className="w-10 h-10 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center border border-blue-500/30 shrink-0">
<MapPin className="w-5 h-5" />
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-wider">180+ Cities in India</h4>
<p className="text-[11px] text-slate-400 mt-0.5">Pan-India professional RF installation technicians</p>
</div>
</div>

<div className="flex items-center gap-3.5">
<div className="w-10 h-10 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center border border-blue-500/30 shrink-0">
<Radio className="w-5 h-5" />
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-wider">Multi-Carrier 4G & 5G</h4>
<p className="text-[11px] text-slate-400 mt-0.5">Simultaneous boost for Airtel, Jio, Vi & BSNL</p>
</div>
</div>
</div>
</div>
</div>

{/* Main Footer Links */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
{/* Col 1: Brand Info */}
<div className="lg:col-span-2 space-y-4">
<BrandLogo
size="md"
theme="dark"
onClick={() => onSelectTab('home')}
/>

<p className="text-xs text-slate-400 leading-relaxed max-w-sm">
Boosterswala.com is India&apos;s leading provider of certified mobile network signal boosters, 4G LTE VoLTE & 5G NR cellular repeaters, and enterprise In-Building Distributed Antenna Systems (DAS).
</p>

<div className="space-y-2 text-xs text-slate-400 pt-1 font-mono">
<div className="flex items-center gap-2">
<Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
<a href="tel:+919372226376" className="hover:text-white transition-colors">+91 93722 26376</a>
</div>
<div className="flex items-center gap-2">
<WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400 shrink-0" />
<a
href="https://wa.me/919372226376"
target="_blank"
rel="noopener noreferrer"
className="text-emerald-400 hover:text-emerald-300 transition-colors"
>
WhatsApp: +91 93722 26376
</a>
</div>
<div className="flex items-center gap-2">
<Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
<a href="mailto:support@boosterswala.com" className="hover:text-white transition-colors">support@boosterswala.com</a>
</div>
<div className="flex items-center gap-2">
<MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
<span>HQ: D/1 Aakurli shahyog Kranti Nagar Kandivali East Mumbai 400101</span>
</div>
</div>

<div className="pt-2 flex flex-wrap gap-2">
<span className="px-2 py-1 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-400">
Airtel 4G/5G Ready
</span>
<span className="px-2 py-1 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-400">
Jio True 5G Ready
</span>
<span className="px-2 py-1 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-400">
Vi VoLTE Ready
</span>
<span className="px-2 py-1 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-400">
BSNL 4G Ready
</span>
</div>
</div>

{/* Col 2: Products & Systems */}
<div className="space-y-3">
<h4 className="text-xs font-bold text-white uppercase tracking-wider">Products & Hardware</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li>
<button
type="button"
onClick={() => onSelectTab('products')}
className="hover:text-white transition-colors"
>
Tri-Band Turbo Pro (70 dB)
</button>
</li>
<li>
<button
type="button"
onClick={() => onSelectTab('products')}
className="hover:text-white transition-colors"
>
5G True-NR Ultra Max
</button>
</li>
<li>
<button
type="button"
onClick={() => onSelectTab('products')}
className="hover:text-white transition-colors"
>
Quad-Band Basement Master
</button>
</li>
<li>
<button
type="button"
onClick={() => onSelectTab('products')}
className="hover:text-white transition-colors"
>
Enterprise DAS Repeater
</button>
</li>
<li>
<button
type="button"
onClick={() => onSelectTab('products')}
className="hover:text-white transition-colors"
>
LPDA Outdoor Antennas
</button>
</li>
<li>
<button
type="button"
onClick={() => onSelectTab('products')}
className="hover:text-white transition-colors"
>
LMR-400 Low Loss Coaxial Cables
</button>
</li>
</ul>
</div>

{/* Col 3: Solutions & Applications */}
<div className="space-y-3">
<h4 className="text-xs font-bold text-white uppercase tracking-wider">Solutions & Spaces</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li>
<button
type="button"
onClick={() => onSelectTab('solutions')}
className="hover:text-white transition-colors"
>
Basements & Underground
</button>
</li>
<li>
<button
type="button"
onClick={() => onSelectTab('solutions')}
className="hover:text-white transition-colors"
>
High-Rise Penthouses
</button>
</li>
<li>
<button
type="button"
onClick={() => onSelectTab('solutions')}
className="hover:text-white transition-colors"
>
Corporate IT Parks
</button>
</li>
<li>
<button
type="button"
onClick={() => onSelectTab('solutions')}
className="hover:text-white transition-colors"
>
Luxury Farmhouses & Villas
</button>
</li>
<li>
<button
type="button"
onClick={() => onSelectTab('industries')}
className="hover:text-white transition-colors"
>
Hotels & Luxury Resorts
</button>
</li>
<li>
<button
type="button"
onClick={() => onSelectTab('industries')}
className="hover:text-white transition-colors"
>
Industrial Warehouses
</button>
</li>
</ul>
</div>

{/* Col 4: Service Locations */}
<div className="space-y-3">
<h4 className="text-xs font-bold text-white uppercase tracking-wider">Service Locations</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li>
<button
type="button"
onClick={() => onSelectTab('locations')}
className="hover:text-white transition-colors flex items-center gap-1.5"
>
<MapPin className="w-3.5 h-3.5 text-cyan-400" />
<span>Delhi NCR (Headquarters &amp; Lab)</span>
</button>
</li>
<li>
<button
type="button"
onClick={() => onSelectTab('locations')}
className="hover:text-white transition-colors flex items-center gap-1.5"
>
<MapPin className="w-3.5 h-3.5 text-cyan-400" />
<span>Mumbai &amp; Pune West Hub</span>
</button>
</li>
<li>
<button
type="button"
onClick={() => onSelectTab('locations')}
className="hover:text-white transition-colors flex items-center gap-1.5"
>
<MapPin className="w-3.5 h-3.5 text-cyan-400" />
<span>Bengaluru &amp; Hyderabad South</span>
</button>
</li>
<li>
<button
type="button"
onClick={() => onSelectTab('locations')}
className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold flex items-center gap-1 pt-1"
>
<span>View All 180+ Cities Coverage &rarr;</span>
</button>
</li>
</ul>
</div>

{/* Col 5: Support & Quick Actions */}
<div className="space-y-3">
<h4 className="text-xs font-bold text-white uppercase tracking-wider">Support &amp; Help</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li>
<button
type="button"
onClick={() => onSelectTab('faq')}
className="hover:text-white transition-colors"
>
Frequently Asked Questions
</button>
</li>
<li>
<button
type="button"
onClick={onOpenExportGuide}
className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
>
Deployment &amp; Free Hosting Guide
</button>
</li>
<li>
<button
type="button"
onClick={onOpenEnquiry}
className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
>
Book Free Site Survey
</button>
</li>
</ul>
</div>
</div>

{/* Bottom Bar */}
<div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
<p>© {new Date().getFullYear()} Boosterswala.com. All rights reserved. Cash On Delivery (COD) &amp; 10 Days Easy Returns Nationwide.</p>
<div className="flex items-center gap-6">
<button
type="button"
onClick={onOpenExportGuide}
className="hover:text-white transition-colors underline"
>
Export Code (Vercel / Netlify / Cloudflare)
</button>
<button
type="button"
onClick={() => onSelectTab('about')}
className="hover:text-white transition-colors"
>
Certifications & Guidelines
</button>
<button
type="button"
onClick={() => onSelectTab('contact')}
className="hover:text-white transition-colors"
>
Pan-India Support
</button>
</div>
</div>
</div>
</footer>
);
};
