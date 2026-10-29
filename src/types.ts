export type PageTab = 
| 'home' 
| 'products' 
| 'solutions' 
| 'industries' 
| 'about' 
| 'locations' 
| 'downloads' 
| 'faq' 
| 'contact';

export interface Product {
id: string;
name: string;
modelCode: string;
category: 'triband' | 'quadband' | '5g_nr' | 'commercial_das' | 'accessories';
tagline: string;
gain: string; // e.g. "70 dB"
outputPower: string; // e.g. "23 "
coverageSqFt: string; // e.g. "Up to 3,500 sq ft"
coverageNum: number;
frequencyBands: string[]; // e.g. ["850MHz (Band 5)", "1800MHz (Band 3)", "2100MHz (Band 1)"]
supportedCarriers: ('Airtel' | 'Jio' | 'Vi' | 'BSNL')[];
priceDisplay: string;
warranty: string;
description: string;
kitIncludes: string[];
specs: {
impedance: string;
connectorType: string;
noiseFigure: string;
vswr: string;
powerSupply: string;
dimensions: string;
operatingTemp: string;
};
imageUrl?: string;
featured?: boolean;
}

export interface Solution {
id: string;
title: string;
subtitle: string;
targetEnvironment: string;
challenge: string;
engineeringSolution: string;
recommendedKit: string;
typicalCoverage: string;
idealFor: string[];
keyBenefits: string[];
}

export interface Industry {
id: string;
name: string;
iconName: string;
tagline: string;
description: string;
caseStudy: {
client: string;
location: string;
area: string;
challenge: string;
result: string;
metric: string;
};
features: string[];
}

export interface DownloadItem {
id: string;
title: string;
category: 'Catalog' | 'Installation Guide' | 'Quality Assurance' | 'Technical Specs';
fileSize: string;
fileFormat: 'PDF' | 'DOCX' | 'ZIP';
description: string;
version: string;
publishDate: string;
}

export interface FAQItem {
id: string;
question: string;
answer: string;
category: 'General' | 'COD & Returns' | 'Installation' | 'Technical & 5G' | 'Safety & Warranty';
}

export interface Testimonial {
id: string;
name: string;
designation: string;
company: string;
city: string;
propertyType: string;
quote: string;
rating: number;
carrierBoosted: string;
metric: string;
}

export interface OfficeLocation {
city: string;
state: string;
address: string;
phone: string;
email: string;
isHeadquarter?: boolean;
}

export interface LeadEnquiry {
id: string;
customerName: string;
phone: string;
email: string;
city: string;
propertyType: string;
areaSqFt?: string;
carriersNeedHelp: string[];
productInterest?: string;
message: string;
timestamp: string;
}
