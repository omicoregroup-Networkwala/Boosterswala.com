import React, { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface BoosterVisualProps {
modelCode?: string;
category?: string;
gain?: string;
outputPower?: string;
frequencyBands?: string[];
size?: 'sm' | 'md' | 'lg';
imageUrl?: string;
images?: string[];
productName?: string;
}

export const BoosterVisual: React.FC<BoosterVisualProps> = ({
modelCode = 'BW-TB70',
category = 'triband',
gain = '70 dB',
outputPower = '23 ',
size = 'md',
imageUrl,
images,
productName = 'Tri-Band Mobile Network Booster'
}) => {
const activeImages = images && images.length > 0 
? images 
: imageUrl 
? [imageUrl] 
: [];

const [activeImageIndex, setActiveImageIndex] = useState(0);
const [imgError, setImgError] = useState(false);
const [isZoomOpen, setIsZoomOpen] = useState(false);

const currentImage = activeImages[activeImageIndex] || imageUrl;
const isLarge = size === 'lg';
const isSmall = size === 'sm';
const hasValidPhoto = Boolean(currentImage && !imgError);

const handleNextImage = (e: React.MouseEvent) => {
e.stopPropagation();
if (activeImages.length > 1) {
setActiveImageIndex((prev) => (prev + 1) % activeImages.length);
}
};

const handlePrevImage = (e: React.MouseEvent) => {
e.stopPropagation();
if (activeImages.length > 1) {
setActiveImageIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length);
}
};

return (
<>
<div
className={`relative w-full rounded-2xl bg-white border border-slate-100 flex flex-col items-center justify-center p-3 sm:p-4 transition-all duration-200 group ${
isLarge ? 'min-h-[360px] sm:min-h-[400px]' : isSmall ? 'h-44 sm:h-48' : 'h-56'
}`}
>
{hasValidPhoto ? (
<>
{/* Pure Photo Display */}
<div
className="relative w-full h-full flex items-center justify-center cursor-pointer overflow-hidden rounded-xl"
onClick={() => setIsZoomOpen(true)}
title="Click to zoom in"
>
<img
src={currentImage}
alt={productName || modelCode}
onError={() => setImgError(true)}
className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm select-none"
loading="lazy"
/>

{/* Minimal Zoom Action Button */}
<button
type="button"
onClick={(e) => {
e.stopPropagation();
setIsZoomOpen(true);
}}
className="absolute top-1.5 right-1.5 p-1.5 rounded-lg bg-white/95 hover:bg-blue-50 text-slate-500 hover:text-blue-600 border border-slate-200/90 shadow-2xs transition-all flex items-center gap-1 text-[11px]"
title="Zoom photo"
>
<ZoomIn className="w-3.5 h-3.5" />
<span className="text-[10px] font-medium hidden sm:inline">Zoom</span>
</button>

{/* Previous / Next Arrow Controls for Multiple Photos */}
{activeImages.length > 1 && (
<>
<button
type="button"
onClick={handlePrevImage}
className="absolute left-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/95 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 shadow-sm transition-all opacity-80 group-hover:opacity-100"
aria-label="Previous photo"
>
<ChevronLeft className="w-4 h-4" />
</button>
<button
type="button"
onClick={handleNextImage}
className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/95 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 shadow-sm transition-all opacity-80 group-hover:opacity-100"
aria-label="Next photo"
>
<ChevronRight className="w-4 h-4" />
</button>
</>
)}
</div>

{/* Thumbnail Navigation for Multi-Image (Hero showcase) */}
{activeImages.length > 1 && (
<div className="flex items-center justify-center gap-2 mt-3 pt-2.5 border-t border-slate-100 w-full">
{activeImages.map((img, idx) => (
<button
key={idx}
type="button"
onClick={(e) => {
e.stopPropagation();
setActiveImageIndex(idx);
}}
className={`h-11 w-14 rounded-lg overflow-hidden border p-1 bg-white transition-all ${
activeImageIndex === idx
? 'border-blue-600 ring-2 ring-blue-500/30 shadow-xs scale-105'
: 'border-slate-200 opacity-60 hover:opacity-100'
}`}
title={`View photo ${idx + 1}`}
>
<img src={img} alt="" className="w-full h-full object-contain" />
</button>
))}
</div>
)}
</>
) : (
/* Clean Minimal Placeholder when photo is loading or unavailable */
<div className="flex flex-col items-center justify-center p-6 text-center text-slate-400">
<ImageIcon className="w-8 h-8 mb-2 text-slate-300 stroke-1" />
<div className="text-xs font-semibold text-slate-700">{productName}</div>
<div className="text-[10px] text-slate-400 font-mono mt-0.5">{modelCode}</div>
</div>
)}
</div>

{/* Lightbox Zoom Modal for Detailed Hardware Inspection */}
{isZoomOpen && currentImage && (
<div
className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
onClick={() => setIsZoomOpen(false)}
>
<div
className="relative max-w-4xl w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
onClick={(e) => e.stopPropagation()}
>
{/* Header */}
<div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
<div>
<div className="text-[11px] font-mono text-blue-600 uppercase font-semibold">
{category === 'accessories'
? 'Original Antenna & RF Accessory Photo'
: category === '5g_nr'
? 'Original 5G True-NR Hardware Photo'
: category === 'quadband'
? 'Original Quad-Band Basement Hardware Photo'
: category === 'commercial_das'
? 'Original Commercial DAS Hardware Photo'
: 'Original Telecom Hardware Photo'} • {modelCode}
</div>
<h3 className="text-base font-bold text-slate-900 mt-0.5">{productName}</h3>
</div>
<button
type="button"
onClick={() => setIsZoomOpen(false)}
className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
aria-label="Close photo"
>
<X className="w-5 h-5" />
</button>
</div>

{/* Photo Container on Clean White / Pure Surface */}
<div className="relative bg-slate-50/60 border border-slate-100 rounded-xl p-4 sm:p-6 flex items-center justify-center max-h-[65vh] overflow-hidden">
<img
src={currentImage}
alt={productName || modelCode}
className="max-h-[58vh] w-auto max-w-full object-contain filter drop-shadow-md select-none"
/>

{activeImages.length > 1 && (
<>
<button
type="button"
onClick={handlePrevImage}
className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/95 text-slate-800 border border-slate-200 shadow-md hover:bg-blue-600 hover:text-white transition-colors"
aria-label="Previous photo"
>
<ChevronLeft className="w-6 h-6" />
</button>
<button
type="button"
onClick={handleNextImage}
className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/95 text-slate-800 border border-slate-200 shadow-md hover:bg-blue-600 hover:text-white transition-colors"
aria-label="Next photo"
>
<ChevronRight className="w-6 h-6" />
</button>
</>
)}
</div>

{/* Clean Footer Info */}
<div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2 font-mono">
<div className="flex items-center gap-2">
<span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">Gain / Spec: {gain}</span>
<span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">Power / Rating: {outputPower}</span>
<span className="bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded font-semibold">
{category === 'accessories'
? '50Ω Low-Loss Certified'
: category === '5g_nr'
? '5G True-NR Ultra-Fast'
: category === 'quadband'
? 'Quad-Band High Penetration'
: category === 'commercial_das'
? 'Enterprise DAS Carrier-Grade'
: 'Tri-Band Multi-Carrier'}
</span>
</div>
<div className="text-[11px] text-slate-400">
Boosterswala.com Genuine Physical Equipment
</div>
</div>
</div>
</div>
)}
</>
);
};
