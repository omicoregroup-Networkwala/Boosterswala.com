import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, MapPin, ChevronDown, ChevronUp, Map } from 'lucide-react';
import { PageTab } from '../types';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './FloatingActions';

interface NavbarProps {
currentTab: PageTab;
onSelectTab: (tab: PageTab) => void;
onOpenEnquiry: () => void;
onOpenExportGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
currentTab,
onSelectTab,
onOpenEnquiry,
onOpenExportGuide
}) => {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [locationsOpen, setLocationsOpen] = useState(false);
const locationsRef = useRef<HTMLDivElement>(null);

const navLinks: { tab: PageTab; label: string }[] = [
{ tab: 'home', label: 'Home' },
{ tab: 'products', label: 'Products' },
{ tab: 'solutions', label: 'Solutions' },
{ tab: 'industries', label: 'Industries' },
{ tab: 'about', label: 'About Us' },
{ tab: 'locations', label: 'Locations' },
{ tab: 'faq', label: 'FAQ' },
{ tab: 'contact', label: 'Contact' }
];

// Exact 3 columns from user screenshot
const locationColumns = [
// Column 1
['Mumbai', 'Bangalore', 'Jaipur', 'Raipur', 'Dehradun', 'Srinagar', 'Ghaziabad', 'Ahmedabad'],
// Column 2
['Bhopal', 'Kolkata', 'Hyderabad', 'Bhubaneswar', 'Patna', 'Noida', 'Faridabad'],
// Column 3
['Delhi', 'Goa', 'Lucknow', 'Chandigarh', 'Pune', 'Gurgaon', 'Chennai']
];

useEffect(() => {
const handleClickOutside = (event: MouseEvent) => {
if (locationsRef.current && !locationsRef.current.contains(event.target as Node)) {
setLocationsOpen(false);
}
};
document.addEventListener('mousedown', handleClickOutside);
return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);

const handleNavClick = (tab: PageTab) => {
onSelectTab(tab);
setMobileMenuOpen(false);
setLocationsOpen(false);
window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleCityClick = (_cityName: string) => {
onSelectTab('locations');
setLocationsOpen(false);
setMobileMenuOpen(false);
window.scrollTo({ top: 0, behavior: 'smooth' });
};

return (
<header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
{/* Top micro announcement bar */}
<div className="bg-slate-900 text-slate-200 px-4 py-1.5 text-[11px] font-medium hidden sm:flex items-center justify-between border-b border-slate-800">
<div className="flex items-center gap-3">
<span className="text-cyan-400 font-mono font-bold">PAN-INDIA DISPATCH</span>
<span className="text-slate-500">·</span>
<span className="text-amber-300 font-semibold">Cash On Delivery (COD) Available</span>
<span className="text-slate-500">·</span>
<span className="text-emerald-400 font-semibold">10 Days Returns</span>
<span className="text-slate-500">·</span>
<span>1-Year warranty</span>
</div>
<div className="flex items-center gap-4">
<button
type="button"
onClick={onOpenExportGuide}
className="text-xs text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2"
>
How to Export & Host Free
</button>

<a
href="tel:+919372226376"
className="text-slate-200 hover:text-white flex items-center gap-1 font-mono"
>
<Phone className="w-3 h-3 text-cyan-400" />
<span>+91 93722 26376</span>
</a>
</div>
</div>

{/* Main Top Bar: Logo, Navigation links, and CTA */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[76px] sm:min-h-[92px] py-2.5 flex items-center justify-between gap-6 sm:gap-8">
{/* Zone 1: Enlarged Logo with Name Underneath */}
<BrandLogo
size="md"
onClick={() => handleNavClick('home')}
/>

{/* Zone 2: Clean single-line text navigation links */}
<nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
{navLinks.map(link => {
const isActive = currentTab === link.tab;

if (link.tab === 'locations') {
return (
<div key="locations" className="relative" ref={locationsRef}>
<button
type="button"
onClick={() => setLocationsOpen(!locationsOpen)}
className={`whitespace-nowrap shrink-0 py-1.5 px-3 rounded-lg transition-all flex items-center gap-1.5 text-sm ${
isActive || locationsOpen
? 'bg-blue-50 text-blue-700 font-semibold shadow-2xs'
: 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
}`}
aria-expanded={locationsOpen}
aria-label="Toggle service locations menu"
>
<span>Locations</span>
{locationsOpen ? (
<ChevronUp className="w-3.5 h-3.5 text-blue-600" />
) : (
<ChevronDown className="w-3.5 h-3.5 text-slate-500" />
)}
</button>

{/* Popover Dropdown matching image_440ece50.png */}
{locationsOpen && (
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[620px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-5 z-50 animate-fadeIn">
<div className="grid grid-cols-3 gap-x-6 gap-y-1">
{locationColumns.map((col, colIdx) => (
<div key={colIdx} className="space-y-0.5">
{col.map(city => (
<button
key={city}
type="button"
onClick={() => handleCityClick(city)}
className="w-full text-left px-2 py-1.5 rounded-lg text-slate-700 hover:text-blue-700 hover:bg-blue-50/80 transition-colors flex items-center gap-2.5 text-xs font-medium group"
>
<MapPin className="w-3.5 h-3.5 text-blue-500 group-hover:text-blue-700 shrink-0" />
<span className="truncate">{city}</span>
</button>
))}
</div>
))}
</div>

{/* Bottom Footer inside popover matching screenshot */}
<div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
<div className="flex items-center gap-2.5">
<Map className="w-4 h-4 text-blue-600 shrink-0" />
<div>
<div className="font-bold text-slate-900 leading-none">
We ship &amp; support all over India
</div>
<button
type="button"
onClick={() => {
setLocationsOpen(false);
onOpenEnquiry();
}}
className="text-[11px] text-slate-500 hover:text-blue-600 mt-1 block text-left"
>
Your city not listed? <span className="text-blue-600 font-semibold underline underline-offset-2">Talk to us</span>
</button>
</div>
</div>

<button
type="button"
onClick={() => {
setLocationsOpen(false);
onSelectTab('locations');
window.scrollTo({ top: 0, behavior: 'smooth' });
}}
className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-[11px] transition-colors"
>
View All Coverage &rarr;
</button>
</div>
</div>
)}
</div>
);
}

return (
<button
key={link.tab}
type="button"
onClick={() => handleNavClick(link.tab)}
className={`whitespace-nowrap shrink-0 py-1 transition-colors relative ${
isActive
? 'text-blue-600 font-semibold'
: 'hover:text-slate-900'
}`}
>
{link.label}
{isActive && (
<span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
)}
</button>
);
})}
</nav>

{/* Zone 3: 1 primary action */}
<div className="flex items-center gap-3 shrink-0">
<button
type="button"
onClick={onOpenEnquiry}
className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap shrink-0 shadow-xs"
>
Book Free Site Survey
</button>

{/* Mobile hamburger menu toggle */}
<button
type="button"
onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
aria-label="Toggle Menu"
>
{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
</button>
</div>
</div>

{/* Mobile Drawer Navigation */}
{mobileMenuOpen && (
<div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
<div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
{navLinks.map(link => (
<button
key={link.tab}
type="button"
onClick={() => handleNavClick(link.tab)}
className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
currentTab === link.tab
? 'bg-blue-50 text-blue-700 font-semibold'
: 'text-slate-700 hover:bg-slate-50'
}`}
>
{link.label}
</button>
))}
</div>

<div className="pt-2 flex flex-col gap-2">
<button
type="button"
onClick={() => {
setMobileMenuOpen(false);
onOpenEnquiry();
}}
className="w-full py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg text-center"
>
Book Free Site Survey
</button>
<button
type="button"
onClick={() => {
setMobileMenuOpen(false);
onOpenExportGuide();
}}
className="w-full py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg text-center hover:bg-slate-200"
>
How to Export Code & Host Free
</button>
</div>
</div>
)}
</header>
);
};
