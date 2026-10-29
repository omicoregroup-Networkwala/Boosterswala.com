import React, { useState } from 'react';
import { 
MapPin, 
Search, 
Phone, 
MessageSquare, 
ShieldCheck, 
CheckCircle2, 
ArrowRight, 
Clock, 
Truck, 
Radio, 
Building2 
} from 'lucide-react';

interface LocationsPageProps {
onOpenEnquiry: (productName?: string, notes?: string) => void;
selectedCityFromNav?: string;
}

export interface CityServiceInfo {
name: string;
state: string;
region: 'North' | 'South' | 'West' | 'East' | 'Central';
dispatchTime: string;
isHub?: boolean;
addressSnippet?: string;
}

export const CITIES_LIST: CityServiceInfo[] = [
// Column 1 from screenshot
{ name: 'Mumbai', state: 'Maharashtra', region: 'West', dispatchTime: 'Same Day Dispatch & Next-Day Installation', isHub: true, addressSnippet: 'Marol Industrial Estate, Andheri East, Mumbai' },
{ name: 'Bangalore', state: 'Karnataka', region: 'South', dispatchTime: 'Same Day Dispatch / 24-Hour Installation', isHub: true, addressSnippet: 'Indiranagar Tech Corridor, Bengaluru' },
{ name: 'Jaipur', state: 'Rajasthan', region: 'North', dispatchTime: '24-Hour Dispatch & Doorstep Engineer', addressSnippet: 'MI Road / Mansarovar Commercial Hub, Jaipur' },
{ name: 'Raipur', state: 'Chhattisgarh', region: 'Central', dispatchTime: '24-48 Hours Express Delivery', addressSnippet: 'Pandri Commercial Complex, Raipur' },
{ name: 'Dehradun', state: 'Uttarakhand', region: 'North', dispatchTime: '24-48 Hours On-Site RF Support', addressSnippet: 'Rajpur Road Tech Center, Dehradun' },
{ name: 'Srinagar', state: 'Jammu & Kashmir', region: 'North', dispatchTime: '48 Hours Express Air Cargo', addressSnippet: 'Residency Road / Lal Chowk Hub, Srinagar' },
{ name: 'Ghaziabad', state: 'Uttar Pradesh (NCR)', region: 'North', dispatchTime: 'Same Day On-Site Service', isHub: true, addressSnippet: 'RDC Raj Nagar, Ghaziabad' },
{ name: 'Ahmedabad', state: 'Gujarat', region: 'West', dispatchTime: 'Same Day Dispatch / 24h Setup', isHub: true, addressSnippet: 'SG Highway Business Park, Ahmedabad' },

// Column 2 from screenshot
{ name: 'Bhopal', state: 'Madhya Pradesh', region: 'Central', dispatchTime: '24-Hour Dispatch & Technician Support', addressSnippet: 'MP Nagar Zone-II, Bhopal' },
{ name: 'Kolkata', state: 'West Bengal', region: 'East', dispatchTime: 'Same Day Dispatch / 24-Hour Setup', isHub: true, addressSnippet: 'Salt Lake Sector-V Electronics Complex, Kolkata' },
{ name: 'Hyderabad', state: 'Telangana', region: 'South', dispatchTime: 'Same Day Dispatch & 24h Installation', isHub: true, addressSnippet: 'HITEC City Madhapur, Hyderabad' },
{ name: 'Bhubaneswar', state: 'Odisha', region: 'East', dispatchTime: '24-48 Hours Doorstep Delivery', addressSnippet: 'Saheed Nagar Commercial Centre, Bhubaneswar' },
{ name: 'Patna', state: 'Bihar', region: 'East', dispatchTime: '24-48 Hours Express Delivery & Setup', addressSnippet: 'Boring Road / Fraser Road, Patna' },
{ name: 'Noida', state: 'Uttar Pradesh (NCR)', region: 'North', dispatchTime: 'Same Day Express Service (3-4 Hours)', isHub: true, addressSnippet: 'Sector 62 Institutional Area, Noida' },
{ name: 'Faridabad', state: 'Haryana (NCR)', region: 'North', dispatchTime: 'Same Day Express Service', isHub: true, addressSnippet: 'Sector 15 / Mathura Road Industrial Belt, Faridabad' },

// Column 3 from screenshot
{ name: 'Delhi', state: 'Delhi NCR (Headquarters)', region: 'North', dispatchTime: 'Same Day 4-Hour On-Site Survey', isHub: true, addressSnippet: 'Plot 42, Okhla Phase-III, New Delhi (HQ)' },
{ name: 'Goa', state: 'Goa', region: 'West', dispatchTime: '24-48 Hours Express Shipping & Setup', addressSnippet: 'Panaji Commercial Circle, Goa' },
{ name: 'Lucknow', state: 'Uttar Pradesh', region: 'North', dispatchTime: '24-Hour Dispatch & Site Survey', addressSnippet: 'Gomti Nagar Commercial Zone, Lucknow' },
{ name: 'Chandigarh', state: 'Punjab / Haryana', region: 'North', dispatchTime: '24-Hour Dispatch & Doorstep Engineer', addressSnippet: 'Sector 17 / Industrial Area Phase-I, Chandigarh' },
{ name: 'Pune', state: 'Maharashtra', region: 'West', dispatchTime: 'Same Day Dispatch & 24h Setup', isHub: true, addressSnippet: 'Viman Nagar Commerce Centre, Pune' },
{ name: 'Gurgaon', state: 'Haryana (NCR)', region: 'North', dispatchTime: 'Same Day Express Service (3-4 Hours)', isHub: true, addressSnippet: 'Cyber City / Golf Course Road, Gurugram' },
{ name: 'Chennai', state: 'Tamil Nadu', region: 'South', dispatchTime: 'Same Day Dispatch / 24h Installation', isHub: true, addressSnippet: 'OMR IT Expressway / Mount Road, Chennai' }
];

export const LocationsPage: React.FC<LocationsPageProps> = ({ 
onOpenEnquiry,
selectedCityFromNav 
}) => {
const [searchQuery, setSearchQuery] = useState(selectedCityFromNav || '');
const [selectedRegion, setSelectedRegion] = useState<string>('all');

const filteredCities = CITIES_LIST.filter(c => {
const matchRegion = selectedRegion === 'all' || c.region === selectedRegion;
const matchSearch = 
searchQuery === '' ||
c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
c.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
(c.addressSnippet && c.addressSnippet.toLowerCase().includes(searchQuery.toLowerCase()));
return matchRegion && matchSearch;
});

const handleWhatsAppCity = (city: string) => {
const text = `Hello Boosterswala, I would like to book a mobile signal booster installation / site survey in ${city}.`;
window.open(`https://wa.me/919372226376?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
};

return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
{/* Header Banner */}
<div className="max-w-3xl space-y-3">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
<MapPin className="w-3.5 h-3.5" />
<span>Pan-India Presence &amp; Verified RF Installation</span>
</div>
<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
Mobile Signal Booster Installation &amp; Service Locations
</h1>
<p className="text-sm sm:text-base text-slate-600 leading-relaxed">
Boosterswala provides doorstep site surveys, turnkey RF cabling, and certified installation across 180+ cities in India. From residential apartments and basements to corporate headquarters and industrial warehouses.
</p>
</div>

{/* Top 3 Value Highlights */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
<Truck className="w-5 h-5" />
</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Same-Day Dispatch</h4>
<p className="text-xs text-slate-600 mt-1">Dispatched directly from regional warehouse hubs in Delhi NCR, Mumbai, Bengaluru, Kolkata &amp; Hyderabad.</p>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
<ShieldCheck className="w-5 h-5" />
</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Verified Local Technicians</h4>
<p className="text-xs text-slate-600 mt-1">Verified RF technicians available for comprehensive on-site decibel testing, antenna alignment, and clean concealed cabling.</p>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
<CheckCircle2 className="w-5 h-5" />
</div>
<div>
<h4 className="text-sm font-bold text-slate-900">1-Year warranty</h4>
<p className="text-xs text-slate-600 mt-1">Comprehensive hardware replacement guarantee with doorstep on-site service in all listed cities.</p>
</div>
</div>
</div>

{/* Search and Region Filter Bar */}
<div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
<div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
<div className="relative flex-1 max-w-md">
<Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
<input
type="text"
placeholder="Search your city, state or district (e.g. Mumbai, Delhi, Patna)..."
value={searchQuery}
onChange={e => setSearchQuery(e.target.value)}
className="w-full pl-10 pr-4 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
/>
</div>

<div className="flex items-center gap-1.5 overflow-x-auto pb-1">
<span className="text-xs font-semibold text-slate-500 mr-1 whitespace-nowrap">Region:</span>
{[
{ id: 'all', label: 'All India' },
{ id: 'North', label: 'North India' },
{ id: 'West', label: 'West India' },
{ id: 'South', label: 'South India' },
{ id: 'East', label: 'East India' },
{ id: 'Central', label: 'Central India' }
].map(r => (
<button
key={r.id}
type="button"
onClick={() => setSelectedRegion(r.id)}
className={`px-3 py-1 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
selectedRegion === r.id
? 'bg-slate-900 text-white'
: 'bg-slate-100 text-slate-600 hover:bg-slate-200'
}`}
>
{r.label}
</button>
))}
</div>
</div>
</div>

{/* Cities Grid (Featuring all cities from user screenshot) */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{filteredCities.map(city => (
<div 
key={city.name}
className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
>
<div>
<div className="flex items-start justify-between gap-2 mb-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<MapPin className="w-4 h-4" />
</div>
<div>
<h3 className="text-base font-bold text-slate-900">{city.name}</h3>
<div className="text-[11px] text-slate-500">{city.state}</div>
</div>
</div>

{city.isHub ? (
<span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
Major Hub
</span>
) : (
<span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-100 text-slate-600">
Service Area
</span>
)}
</div>

<div className="mt-3 space-y-1.5 text-xs text-slate-600 font-mono bg-slate-50 p-2.5 rounded-xl border border-slate-100">
<div className="flex items-center gap-1.5 text-slate-700">
<Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
<span>{city.dispatchTime}</span>
</div>
<div className="flex items-center gap-1.5 text-slate-600">
<Radio className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
<span>Airtel • Jio • Vi • BSNL 4G &amp; 5G Ready</span>
</div>
</div>

{city.addressSnippet && (
<div className="mt-2.5 text-[11px] text-slate-500">
<span className="font-semibold text-slate-700">Service Coverage: </span>
{city.addressSnippet} &amp; surrounding districts.
</div>
)}
</div>

<div className="mt-5 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
<button
type="button"
onClick={() => onOpenEnquiry(`Site Survey in ${city.name}`, `Customer requested inspection for ${city.name}, ${city.state}`)}
className="py-2 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-center shadow-2xs"
>
Book Survey
</button>
<button
type="button"
onClick={() => handleWhatsAppCity(city.name)}
className="py-2 px-3 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors text-center flex items-center justify-center gap-1"
>
<MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
<span>WhatsApp</span>
</button>
</div>
</div>
))}
</div>

{/* Bottom Pan-India Callout (From photo: "We ship & support all over India - Your city not listed? Talk to us") */}
<div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
<MapPin className="w-6 h-6" />
</div>
<div>
<h3 className="text-base sm:text-lg font-bold text-slate-900">
We ship &amp; support all over India
</h3>
<p className="text-xs sm:text-sm text-slate-600 mt-0.5">
Your city or remote location not listed above? Our engineers deploy turnkey signal solutions nationwide.
</p>
</div>
</div>

<div className="flex items-center gap-3 shrink-0">
<a
href="tel:+919372226376"
className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-2xs"
>
<Phone className="w-3.5 h-3.5 text-blue-600" />
<span>Call +91 93722 26376</span>
</a>
<button
type="button"
onClick={() => {
const text = 'Hello Boosterswala, my city is not listed. I would like to check service availability for my location.';
window.open(`https://wa.me/919372226376?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}}
className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors flex items-center gap-2 shadow-sm"
>
<MessageSquare className="w-3.5 h-3.5" />
<span>Talk to Us on WhatsApp</span>
</button>
</div>
</div>
</div>
);
};
