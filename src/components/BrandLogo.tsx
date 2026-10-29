import React from 'react';

interface BrandLogoProps {
size?: 'sm' | 'md' | 'lg';
theme?: 'light' | 'dark';
className?: string;
onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
size = 'md',
theme = 'light',
className = '',
onClick
}) => {
const isDark = theme === 'dark';

// Size configurations - enlarged for strong visual presence
const imgHeights = {
sm: 'h-8 sm:h-9',
md: 'h-11 sm:h-13 md:h-14',
lg: 'h-16 sm:h-20'
};

const textSizes = {
sm: 'text-xs sm:text-[13px]',
md: 'text-sm sm:text-base',
lg: 'text-lg sm:text-xl'
};

const content = (
<div
className={`flex flex-col items-center justify-center leading-tight transition-all duration-200 hover:opacity-95 ${
isDark ? 'bg-white rounded-xl px-4 py-2.5 shadow-sm border border-slate-200 inline-flex' : ''
} ${className}`}
>
{/* 3D Signal & Battery Brand Logo Image */}
<img
src="/assets/aistudio/Boosterswala.com_logo_21101808.jpeg"
alt="Boosterswala.com - Mobile Signal Boosters"
className={`${imgHeights[size]} w-auto object-contain select-none drop-shadow-xs`}
loading="eager"
/>

{/* Brand Name Directly Under Logo */}
<div className={`${textSizes[size]} font-black tracking-tight mt-1 whitespace-nowrap text-slate-950 text-center`}>
Boosterswala<span className="text-blue-600">.com</span>
</div>
</div>
);

if (onClick) {
return (
<button
type="button"
onClick={onClick}
className="text-left focus:outline-hidden"
aria-label="Boosterswala.com Home"
>
{content}
</button>
);
}

return content;
};
