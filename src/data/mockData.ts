import { Product, Solution, Industry, DownloadItem, FAQItem, Testimonial, OfficeLocation } from '../types';

export const PRODUCTS: Product[] = [
{
id: 'bw-turbo-triband-pro',
name: 'Boosterswala Tri-Band Turbo Pro (Jio 4G / Airtel / Vi)',
modelCode: 'BW-TB70-JIO',
category: 'triband',
tagline: 'Best-Selling 4G VoLTE & 3G Tri-Band Booster with Backlit Digital LCD Display',
gain: '70 dB',
outputPower: '23 ',
coverageSqFt: 'Up to 3,500 sq ft',
coverageNum: 3500,
frequencyBands: ['850 MHz (Jio 4G / Band 5)', '1800 MHz (Airtel/Vi 4G / Band 3)', '2100 MHz (3G/4G / Band 1)'],
supportedCarriers: ['Jio', 'Airtel', 'Vi', 'BSNL'],
priceDisplay: '₹14,999',
warranty: '1 Year Replacement Warranty',
description: 'Engineered specifically for Indian telecom networks. Features real-time backlit LCD frequency diagnostics for Jio, Airtel, Vi, and BSNL with automatic AGC gain control and zero interference.',
kitIncludes: [
'Boosterswala Matte Black Tri-Band Booster Unit with Digital LCD Signal Monitor',
'Outdoor High-Gain Log Periodic Directional LPDA Antenna (12 dBi)',
'Indoor Ceiling Mount 360° Omni-Directional Dome Antenna',
'20 Meters Premium Low-Loss 50Ω Coaxial Cable with N-Male Connectors',
'12V/2A Regulated DC Power Supply Adapter with Surge Suppression',
'Heavy-Duty U-Bolt Mounting Hardware & User Manual'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female (Gold-plated center pin)',
noiseFigure: '≤ 4.5 dB',
vswr: '≤ 1.6',
powerSupply: 'AC 100-240V / DC 12V 2A',
dimensions: '210 x 140 x 30 mm (1.4 kg)',
operatingTemp: '-10°C to +55°C (IP40 aluminum chassis)'
},
imageUrl: '/assets/aistudio/file_0000000092b071faaeb9e38f4e53ff50_78cbff2d.png',
featured: true
},
{
id: 'bw-5g-ultra-max',
name: 'Boosterswala Tri-Band Complete Turnkey Kit',
modelCode: 'BW-TB80-KIT',
category: 'triband',
tagline: 'Complete Turnkey Tri-Band Solution: Outdoor LPDA Antenna + Indoor Panel Antenna + Dual Cables',
gain: '78 dB',
outputPower: '27 ',
coverageSqFt: 'Up to 7,500 sq ft',
coverageNum: 7500,
frequencyBands: ['850 MHz (Band 5)', '1800 MHz (Band 3)', '2100 MHz (Band 1)'],
supportedCarriers: ['Jio', 'Airtel', 'Vi', 'BSNL'],
priceDisplay: '₹18,500',
warranty: '1 Year Replacement Warranty',
description: 'Turnkey high-performance Tri-Band booster kit. Includes outdoor directional LPDA antenna, indoor wideband wall panel antenna, dual low-loss RF coaxial cable spools, and heavy-duty ribbed aluminum repeater chassis.',
kitIncludes: [
'High-Power Ribbed Aluminum Tri-Band Repeater with Smart AGC',
'Outdoor High-Gain 698-2700 MHz Directional LPDA Antenna (14 dBi)',
'Indoor High-Efficiency Flat Panel Directional Antenna',
'Two (2) Low-Loss 50Ω RF Coaxial Cable Assemblies with N-Connectors',
'Industrial Regulated 12V Power Adapter with Surge Protection',
'All Mounting Brackets, Wall Anchors & Hardware'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female Low-PIM',
noiseFigure: '≤ 4.0 dB',
vswr: '≤ 1.5',
powerSupply: 'AC 100-240V / DC 12V 3A',
dimensions: '250 x 170 x 38 mm (1.9 kg)',
operatingTemp: '-15°C to +60°C'
},
imageUrl: '/assets/aistudio/file_00000000f4e461fab9f46f6dcbcedc66_67d1c3cd.png',
featured: true
},
{
id: 'bw-basement-special-quad',
name: 'Boosterswala Tri-Band Digital LCD Master',
modelCode: 'BW-TB75-LCD',
category: 'triband',
tagline: 'Precision White Aluminum Tri-Band Repeater with Digital LCD Downlink Monitor',
gain: '75 dB',
outputPower: '25 ',
coverageSqFt: 'Up to 5,000 sq ft',
coverageNum: 5000,
frequencyBands: ['900 MHz (GSM / Band 8)', '1800 MHz (DCS / Band 3)', '2100 MHz (3G/4G / Band 1)'],
supportedCarriers: ['Airtel', 'Jio', 'Vi', 'BSNL'],
priceDisplay: '₹16,499',
warranty: '1 Year Replacement Warranty',
description: 'Commercial-grade white chassis Tri-Band mobile signal repeater. Features multi-frequency LCD status panel displaying real-time signal strength for GSM, CDMA, and DCS/LTE bands with automatic feedback oscillation suppression.',
kitIncludes: [
'White Aluminum Chassis Tri-Band Repeater with Backlit LCD Screen',
'High-Gain Outdoor Directional LPDA Antenna with Mounting Bracket',
'Indoor Ceiling Omni-Directional 360° Dome Antenna',
'20 Meters Shielded 50Ω Low-Loss Coaxial Cable',
'Regulated 12V Power Supply Adapter & Manual'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female',
noiseFigure: '≤ 4.5 dB',
vswr: '≤ 1.6',
powerSupply: 'DC 12V 2.5A',
dimensions: '220 x 150 x 32 mm (1.5 kg)',
operatingTemp: '-10°C to +55°C'
},
imageUrl: '/assets/aistudio/file_00000000a2a86230b0f698d21f021e80_54ec9906.png',
featured: true
},
{
id: 'bw-commercial-das-enterprise',
name: 'Boosterswala Commercial Tri-Band Enterprise System',
modelCode: 'BW-TB85-ENT',
category: 'triband',
tagline: 'High-Gain 85 dB Multi-Antenna Tri-Band System for Large Corporate Offices & Buildings',
gain: '85 dB',
outputPower: '33(2 Watt ERP)',
coverageSqFt: 'Up to 25,000 sq ft (Scalable)',
coverageNum: 25000,
frequencyBands: ['850 MHz (Band 5)', '1800 MHz (Band 3)', '2100 MHz (Band 1)'],
supportedCarriers: ['Airtel', 'Jio', 'Vi', 'BSNL'],
priceDisplay: 'Custom Quotation',
warranty: '1 Year Replacement Warranty',
description: 'High-capacity commercial Tri-Band cellular repeater system engineered for large multi-floor corporate offices, hotels, hospitals, and complexes. Powers up to 8 indoor distribution antennas.',
kitIncludes: [
'Enterprise High-Power Tri-Band Master Repeater Unit',
'High-Gain Commercial Donor Outdoor LPDA Antenna',
'4 to 8 Indoor Ceiling Dome & Wall Panel Antennas',
'Low-Loss Reactive Power Splitters & Couplers',
'LMR-400 Flame-Retardant 50Ω Coaxial Feeders',
'Professional RF Spectrum Audit & On-Site Installation by Verified Engineers'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female Low-PIM',
noiseFigure: '≤ 4.0 dB',
vswr: '≤ 1.4',
powerSupply: 'AC 100-240V / DC 12V 5A',
dimensions: '320 x 220 x 55 mm (3.8 kg)',
operatingTemp: '-20°C to +65°C'
},
imageUrl: '/assets/aistudio/file_00000000f4e461fab9f46f6dcbcedc66_67d1c3cd.png',
featured: true
},
{
id: 'bw-villa-rural-booster',
name: 'Boosterswala Long-Reach Villa & Farmhouse Tri-Band Booster',
modelCode: 'BW-LR72-TB',
category: 'triband',
tagline: 'Ultra-Sensitive Tri-Band Booster for Faraway Towers & Remote Farmhouses',
gain: '72 dB',
outputPower: '24 ',
coverageSqFt: 'Up to 4,500 sq ft',
coverageNum: 4500,
frequencyBands: ['850 MHz (Band 5)', '1800 MHz (Band 3)', '2100 MHz (Band 1)'],
supportedCarriers: ['Airtel', 'Jio', 'Vi', 'BSNL'],
priceDisplay: '₹17,499',
warranty: '1 Year Replacement Warranty',
description: 'Equipped with ultra-low-noise front-end LNA to capture faint Tri-Band cellular signals from remote cell towers up to 15-20 km away. Perfect for outskirt villas, farmhouse estates, and resort properties.',
kitIncludes: [
'Boosterswala High-Sensitivity Tri-Band Booster Unit with Signal Display',
'High-Gain Outdoor Directional LPDA Antenna (14 dBi)',
'Two (2) Indoor Wall-Mount Panel Antennas',
'2-Way Power Splitter & 25m RG-8 Low Loss Coaxial Cable',
'Grounding Wire and Heavy-Duty Outdoor Mounting Clamps',
'Surge Protector Lightning Arrester'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female',
noiseFigure: '≤ 3.8 dB',
vswr: '≤ 1.6',
powerSupply: 'DC 12V 3.5A',
dimensions: '225 x 150 x 32 mm (1.6 kg)',
operatingTemp: '-15°C to +55°C'
},
imageUrl: '/assets/aistudio/file_0000000092b071faaeb9e38f4e53ff50_78cbff2d.png'
},
{
id: 'bw-5g-nr-25-kit',
name: 'Boosterswala 5G True-NR 27 Turnkey Home & Office Kit',
modelCode: 'BW-5G-25-27DB',
category: '5g_nr',
tagline: 'Ultra-Fast 5G NR (n78 / n28 / n1) Turnkey Kit: 27Repeater + LPDA Donor + Feeder Cable',
gain: '75 dB',
outputPower: '27(500 mW ERP)',
coverageSqFt: 'Up to 5,500 sq ft',
coverageNum: 5500,
frequencyBands: ['3300-3600 MHz (n78 5G NR C-Band)', '700 MHz (n28 Jio True 5G)', '2100 MHz (n1 Airtel 5G Plus)'],
supportedCarriers: ['Jio', 'Airtel', 'Vi', 'BSNL'],
priceDisplay: '₹24,999',
warranty: '1 Year Replacement Warranty',
description: 'Next-generation 5G True-NR mobile repeater kit designed for standalone (SA) and non-standalone (NSA) 5G networks in India. Delivers gigabit-grade indoor mobile data speeds, instant OTP reception, and crystal-clear VoNR calls with zero latency.',
kitIncludes: [
'Heavy-Duty Black Aluminum 5G NR Repeater Unit (27/ 75 dB Gain)',
'High-Gain Wideband Directional Outdoor LPDA Antenna (698-3800 MHz)',
'Indoor Low-PIM Wideband Panel Distribution Antenna',
'20 Meters Shielded Ultra-Low-Loss 50Ω RF Coaxial Cable with N-Connectors',
'Industrial Regulated 12V/3A DC Power Supply with Surge Suppression',
'Mounting Brackets, U-Bolts & Complete Installation Hardware'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female Low-PIM',
noiseFigure: '≤ 3.8 dB',
vswr: '≤ 1.4',
powerSupply: 'AC 100-240V / DC 12V 3A',
dimensions: '260 x 180 x 42 mm (2.1 kg)',
operatingTemp: '-15°C to +60°C (IP52 Industrial Aluminum)'
},
imageUrl: '/assets/aistudio/BW-25-27DB.webp',
featured: true
},
{
id: 'bw-5g-nr-45-industrial',
name: 'Boosterswala 5G True-NR Heavy-Duty Industrial Repeater',
modelCode: 'BW-5G-45-27DB',
category: '5g_nr',
tagline: 'Carrier-Grade 27High-Gain 5G NR Repeater with Manual DIP Switch Gain Control (MGC)',
gain: '80 dB',
outputPower: '27(High Output)',
coverageSqFt: 'Up to 8,500 sq ft',
coverageNum: 8500,
frequencyBands: ['3300-3800 MHz (n78 True-NR)', '700 MHz (n28 Low-Band)', '1800/2100 MHz (n3/n1)'],
supportedCarriers: ['Jio', 'Airtel', 'Vi', 'BSNL'],
priceDisplay: '₹29,500',
warranty: '1 Year Replacement Warranty',
description: 'Commercial-grade 5G NR bi-directional amplifier built in heavy ribbed extrusion chassis for optimal heat dissipation. Features independent manual attenuation dip switches for uplink and downlink balance across Indian 5G carrier bands.',
kitIncludes: [
'Heavy Ribbed Extruded Aluminum 5G NR Repeater with Manual Gain Attenuators',
'Outdoor Ultra-Wideband Donor LPDA Antenna (14 dBi)',
'Indoor High-Performance Wall / Ceiling Distribution Antenna',
'Low-Loss 50Ω Coaxial Feeder Cable Spool with Pre-Crimped N-Male Connectors',
'Regulated Power Supply Adapter & Wall Anchor Kit'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female Low-Loss',
noiseFigure: '≤ 3.5 dB',
vswr: '≤ 1.4',
powerSupply: 'AC 100-240V / DC 12V 4A',
dimensions: '290 x 210 x 50 mm (2.8 kg)',
operatingTemp: '-20°C to +65°C'
},
imageUrl: '/assets/aistudio/BW-45-27DB.webp',
featured: true
},
{
id: 'bw-5g-nr-35-enterprise-system',
name: 'Boosterswala 5G True-NR Multi-Room Enterprise Turnkey System',
modelCode: 'BW-5G-35-SP-27DB',
category: '5g_nr',
tagline: 'Complete 5G NR Multi-Antenna Enterprise System: Master Repeater + LPDA + 4 Dome Antennas + 4-Way Splitter',
gain: '85 dB',
outputPower: '27High Power',
coverageSqFt: 'Up to 15,000 sq ft (Multi-Floor)',
coverageNum: 15000,
frequencyBands: ['3300-3800 MHz (n78 5G NR)', '700 MHz (n28 True 5G)', '1800/2100 MHz (n3/n1)'],
supportedCarriers: ['Jio', 'Airtel', 'Vi', 'BSNL'],
priceDisplay: '₹38,999',
warranty: '1 Year Replacement Warranty',
description: 'Complete enterprise-grade 5G True-NR distribution system for corporate offices, luxury duplex villas, and multi-floor buildings. Includes master repeater with LCD signal monitoring, outdoor donor antenna, 4-way reactive power splitter, 4 ceiling dome antennas, and 6 shielded cable bundles.',
kitIncludes: [
'Boosterswala 5G True-NR Master Repeater with Digital LCD Signal Diagnostics',
'Outdoor High-Gain 14 dBi Directional LPDA Donor Antenna with Bracket',
'Four (4) Indoor 360° Omni-Directional Ceiling Dome Antennas',
'One (1) High-Power 4-Way Reactive RF Coaxial Splitter',
'Six (6) Pre-Terminated Low-Loss 50Ω Coaxial Cable Assemblies (1x 20m, 1x 10m, 4x 15m)',
'12V/5A Regulated Power Supply, Surge Protector & Complete Mounting Accessories'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female Low-PIM',
noiseFigure: '≤ 3.5 dB',
vswr: '≤ 1.35',
powerSupply: 'AC 100-240V / DC 12V 5A',
dimensions: '310 x 225 x 52 mm (3.5 kg)',
operatingTemp: '-20°C to +65°C'
},
imageUrl: '/assets/aistudio/BW-35-SP-27DB.webp',
featured: true
},
{
id: 'bw-quad-bsmt-90db',
name: 'Boosterswala Quad-Band Basement Master Heavy-Duty Repeater (90 dB)',
modelCode: 'BW-QB90-BSB32A',
category: 'quadband',
tagline: 'Industrial 90 dB High-Gain Quad-Band Cellular Amplifier for Deep Basements & Lower Ground Floors',
gain: '90 dB Ultra-High Gain',
outputPower: '30(1 Watt ERP)',
coverageSqFt: 'Up to 15,000 sq ft',
coverageNum: 15000,
frequencyBands: ['700 MHz (Band 28)', '850/900 MHz (GSM / Band 5/8)', '1800 MHz (DCS / Band 3)', '2100 MHz (3G/4G / Band 1)'],
supportedCarriers: ['Airtel', 'Jio', 'Vi', 'BSNL'],
priceDisplay: '₹32,999',
warranty: '1 Year Replacement Warranty',
description: 'Heavy-duty die-cast aluminum Quad-Band amplifier engineered specifically to overcome thick reinforced concrete, subterranean signal absorption, and deep basement dead zones. Penetrates multiple underground levels with zero call drops and high-speed data.',
kitIncludes: [
'Heavy-Duty Die-Cast Aluminum Quad-Band Master Repeater (90 dB / 30 )',
'High-Gain Commercial Donor Outdoor LPDA Antenna (14 dBi)',
'Indoor Low-PIM Wideband Panel & Ceiling Dome Distribution Antennas',
'Shielded Low-Loss 50Ω Coaxial Feeders with Factory N-Connectors',
'Integrated Heavy-Duty AC Power Module & Surge Protector',
'Industrial Wall Mounting Hardware & Installation Manual'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female Low-Loss (BTS/MS)',
noiseFigure: '≤ 3.5 dB',
vswr: '≤ 1.35',
powerSupply: 'AC 100-240V Built-in Heavy Supply',
dimensions: '330 x 280 x 140 mm (6.8 kg Die-Cast Aluminum)',
operatingTemp: '-25°C to +65°C (IP65 Weatherproof Enclosure)'
},
imageUrl: '/assets/aistudio/BSB32A-UHF-90DB.webp',
featured: true
},
{
id: 'bw-quad-bsmt-33db-kit',
name: 'Boosterswala Quad-Band Basement Turnkey Multi-Antenna System (33 )',
modelCode: 'BW-QB33-BSB32',
category: 'quadband',
tagline: 'Complete High-Power Basement System: 33Repeater + Cylindrical Antennas + Heavy Coaxial Feeders',
gain: '88 dB',
outputPower: '33(2 Watt ERP)',
coverageSqFt: 'Up to 20,000 sq ft',
coverageNum: 20000,
frequencyBands: ['700/850 MHz (Low-Band)', '900 MHz (GSM)', '1800 MHz (4G LTE)', '2100 MHz (VoLTE/3G)'],
supportedCarriers: ['Airtel', 'Jio', 'Vi', 'BSNL'],
priceDisplay: '₹42,500',
warranty: '1 Year Replacement Warranty',
description: 'Turnkey high-power Quad-Band subterranean signal solution. Includes industrial IP65 weatherproof repeater unit, high-efficiency cylindrical distribution antennas, and low-loss RF feeder cables for parking garages, commercial basements, and underground workspaces.',
kitIncludes: [
'Industrial 33High-Power Quad-Band Repeater Unit with Cooling Fins',
'Two (2) High-Gain Cylindrical Base Station Distribution Antennas',
'Two (2) Heavy-Duty Coaxial Feeder Cable Spools with Pre-Crimped N-Connectors',
'2-Way Reactive Power Divider with Minimal Insertion Loss',
'Industrial Mounting Brackets & Grounding Lightning Arrester'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female Low-PIM',
noiseFigure: '≤ 3.2 dB',
vswr: '≤ 1.3',
powerSupply: 'AC 100-240V / 50-60Hz',
dimensions: '340 x 300 x 150 mm (7.4 kg)',
operatingTemp: '-30°C to +70°C'
},
imageUrl: '/assets/aistudio/BSB32-HFU-1-33DB.webp',
featured: true
},
{
id: 'bw-das-commercial-90db',
name: 'Boosterswala Commercial DAS 90 dB High-Capacity Master Repeater',
modelCode: 'BW-DAS-90-BSB32A',
category: 'commercial_das',
tagline: 'Carrier-Grade 90 dB Distributed Antenna System Master Unit for Multi-Story Corporate Towers',
gain: '90 dB',
outputPower: '30(1000 mW)',
coverageSqFt: 'Up to 30,000 sq ft (Scalable)',
coverageNum: 30000,
frequencyBands: ['700 MHz (Band 28)', '850/900 MHz (GSM)', '1800 MHz (Band 3)', '2100/2300 MHz (LTE/5G)'],
supportedCarriers: ['Airtel', 'Jio', 'Vi', 'BSNL'],
priceDisplay: 'Custom Quotation / Enterprise',
warranty: '1 Year Replacement Warranty',
description: 'Architected for large corporate headquarters, IT parks, five-star hotels, and hospitals. High-capacity master repeater supports up to 16 split indoor antennas via DAS trunk cables without signal degradation.',
kitIncludes: [
'Commercial DAS 90 dB Master Repeater with Deep Heatsink Extrusion',
'Outdoor High-Gain Commercial Donor Antenna',
'Trunk Coupling Interface & Power Tap Couplers',
'Low-Loss Heavy-Shielded RF Cabling Runs',
'Verified Telecom RF Spectrum Site Audit & Heatmap Design'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female (Gold-plated center pin)',
noiseFigure: '≤ 3.0 dB',
vswr: '≤ 1.3',
powerSupply: 'AC 100-240V Industrial Supply',
dimensions: '330 x 280 x 140 mm (6.8 kg)',
operatingTemp: '-25°C to +65°C'
},
imageUrl: '/assets/aistudio/BSB32A-UHF-90DB.webp',
featured: true
},
{
id: 'bw-das-commercial-33db-turnkey',
name: 'Boosterswala Enterprise Commercial DAS Turnkey Infrastructure System',
modelCode: 'BW-DAS-33-BSB32',
category: 'commercial_das',
tagline: 'Full Commercial DAS Package: 33Master Amplifier + Cylindrical Antennas + Low-Loss Feeders',
gain: '92 dB High Gain',
outputPower: '33(2 Watt High Output)',
coverageSqFt: 'Up to 50,000 sq ft (Expandable)',
coverageNum: 50000,
frequencyBands: ['Multi-Band 700-2700 MHz', '5G NR Ready (n78/n28)', 'Simultaneous All 4 Telcos'],
supportedCarriers: ['Airtel', 'Jio', 'Vi', 'BSNL'],
priceDisplay: 'Custom Quotation / Enterprise',
warranty: '1 Year Replacement Warranty',
description: 'Heavy-duty turnkey Distributed Antenna System (DAS) for shopping malls, hospital campuses, and high-rise commercial towers. Includes 2 Watt ERP high-power repeater chassis, heavy cylindrical antennas, and high-spec low-loss feeder lines.',
kitIncludes: [
'Enterprise 2-Watt 33DAS Master Repeater Chassis (IP65)',
'Two (2) High-Output Cylindrical Base Station DAS Antennas',
'Two (2) Low-Loss RF Feeder Cable Assemblies with N-Connectors',
'Directional Couplers & Unequal Power Tappers',
'Full Turnkey On-Site Engineering Installation & Carrier Certification'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female Low-PIM (≤ -155 dBc)',
noiseFigure: '≤ 3.0 dB',
vswr: '≤ 1.25',
powerSupply: 'AC 100-240V / DC Dual Redundant Input',
dimensions: '340 x 300 x 150 mm (7.4 kg)',
operatingTemp: '-30°C to +70°C'
},
imageUrl: '/assets/aistudio/BSB32-HFU-1-33DB.webp',
featured: true
},
{
id: 'bw-acc-lpda-14dbi',
name: 'Outdoor High-Gain LPDA 14 dBi Directional Antenna Kit',
modelCode: 'BW-LPDA-14DBI',
category: 'accessories',
tagline: 'Log-Periodic 14 dBi High-Gain Donor Antenna with Heavy-Duty U-Bolt Mounting Hardware',
gain: '14 dBi High Gain',
outputPower: 'Passive (100W Max)',
coverageSqFt: 'Outdoor Base-Station Reception',
coverageNum: 0,
frequencyBands: ['698-960 MHz (Low Band)', '1710-2700 MHz (Mid Band)', '3300-3800 MHz (5G NR)'],
supportedCarriers: ['Airtel', 'Jio', 'Vi', 'BSNL'],
priceDisplay: '₹2,999',
warranty: '1 Year Replacement Warranty',
description: 'Commercial-grade log periodic dipole antenna (LPDA) engineered to pull crisp cellular signal from distant base towers up to 15-20 km away. Encased in high-grade UV-resistant white ABS radome, complete with pole-mount U-bolts and hardware.',
kitIncludes: [
'14 dBi High-Gain Directional Log Periodic LPDA Antenna',
'Dual Stainless Steel U-Bolt Mast Clamps with Nuts and Washers',
'Integrated Low-Loss Coaxial Pigtail with N-Female Connector',
'Factory Box Packaging & Mast Alignment Diagram'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female Low-Loss',
noiseFigure: 'Passive (Zero Distortion)',
vswr: '≤ 1.4 across all bands',
powerSupply: 'Passive (No AC Required)',
dimensions: '445 x 210 x 65 mm (0.95 kg)',
operatingTemp: '-40°C to +70°C (IP67 Weatherproof)'
},
imageUrl: '/assets/aistudio/LPDA_14_DBI_Antenna_69227b90.jpeg',
featured: true
},
{
id: 'bw-acc-dome-ceiling',
name: 'Indoor 360° Omni-Directional Ceiling Dome Antenna',
modelCode: 'BW-DOME-360',
category: 'accessories',
tagline: 'Wideband 360-Degree Indoor False-Ceiling Antenna for Balanced Room Coverage',
gain: '5 dBi Omni',
outputPower: 'Passive (50W Max)',
coverageSqFt: 'Up to 2,500 sq ft per dome',
coverageNum: 2500,
frequencyBands: ['698-960 MHz', '1710-2700 MHz', '3300-3800 MHz (5G Ready)'],
supportedCarriers: ['Airtel', 'Jio', 'Vi', 'BSNL'],
priceDisplay: '₹1,499',
warranty: '1 Year Replacement Warranty',
description: 'Discreet ceiling-mounted omnidirectional antenna providing uniform 360-degree toroidal radiation pattern with zero blind spots. Effortlessly locks through false ceilings or drywall with the supplied threaded wingnut.',
kitIncludes: [
'High-Efficiency White Radome 360° Ceiling Dome Antenna',
'Low-Loss Coaxial Pigtail Cable with N-Female Connector',
'Ceiling Mounting Plate & Heavy-Duty Wing-Nut Lock'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female (Gold-plated pin)',
noiseFigure: 'Passive',
vswr: '≤ 1.5',
powerSupply: 'Passive',
dimensions: 'Diameter 190 mm x Height 85 mm (0.32 kg)',
operatingTemp: '-20°C to +60°C'
},
imageUrl: '/assets/aistudio/Dome__Antenna_061512a1.jpeg',
featured: true
},
{
id: 'bw-acc-flat-ceiling',
name: 'Ultra-Thin Low-Profile Flat Ceiling Disk Antenna',
modelCode: 'BW-FLAT-CEIL',
category: 'accessories',
tagline: 'Architectural Ultra-Slim Flush Ceiling Antenna for Luxury Residences & Corporate Offices',
gain: '6 dBi Low-PIM',
outputPower: 'Passive (50W Max)',
coverageSqFt: 'Up to 2,000 sq ft',
coverageNum: 2000,
frequencyBands: ['698-3800 MHz Wideband 4G/5G'],
supportedCarriers: ['Airtel', 'Jio', 'Vi', 'BSNL'],
priceDisplay: '₹1,799',
warranty: '1 Year Replacement Warranty',
description: 'Ultra-thin architectural flat disk antenna designed for high-end residential interiors, luxury hotel suites, and executive boardrooms where ceiling aesthetics matter. Emits high-efficiency coverage while sitting virtually flush against ceilings.',
kitIncludes: [
'Ultra-Thin Circular Flat Disk Ceiling Antenna (Aesthetic White Bezel)',
'Flexible Low-Loss Coaxial Pigtail with Weather-Resistant Boot & N-Connector',
'Flush Ceiling Mounting Hardware & Retention Clamp'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female (Gold-plated center pin)',
noiseFigure: 'Passive',
vswr: '≤ 1.4',
powerSupply: 'Passive',
dimensions: 'Diameter 180 mm x Thickness 15 mm (0.28 kg)',
operatingTemp: '-25°C to +65°C'
},
imageUrl: '/assets/aistudio/Flat_Ceiling_Antenna_b9554e03.jpeg',
featured: true
},
{
id: 'bw-acc-patch-panel',
name: 'High-Gain Directional Wall Patch Panel Antenna',
modelCode: 'BW-PANEL-DIR9',
category: 'accessories',
tagline: 'Directional 9 dBi Wall-Mount Patch Antenna for Corridors, Large Halls & Basements',
gain: '9 dBi Directional',
outputPower: 'Passive (50W Max)',
coverageSqFt: 'Up to 3,000 sq ft focused',
coverageNum: 3000,
frequencyBands: ['698-2700 MHz Wideband 4G/VoLTE'],
supportedCarriers: ['Airtel', 'Jio', 'Vi', 'BSNL'],
priceDisplay: '₹1,899',
warranty: '1 Year Replacement Warranty',
description: 'High-gain directional patch panel antenna engineered to beam cellular coverage focused across long office corridors, open warehouse bays, underground parking lanes, and residential villas.',
kitIncludes: [
'9 dBi Directional Flat Panel Radome Antenna',
'Rear Low-Loss Coaxial Pigtail with N-Female Connector',
'Adjustable Wall & Pole Mounting Bracket with Screws'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female',
noiseFigure: 'Passive',
vswr: '≤ 1.5',
powerSupply: 'Passive',
dimensions: '210 x 180 x 45 mm (0.50 kg)',
operatingTemp: '-30°C to +65°C'
},
imageUrl: '/assets/aistudio/Patch_Panel_Anteena_ea8f324d.png',
featured: true
},
{
id: 'bw-acc-lmr400-roll',
name: 'LMR-400 Ultra Low-Loss 50Ω RF Coaxial Cable Roll',
modelCode: 'BW-CBL-LMR400',
category: 'accessories',
tagline: 'Carrier-Grade Shielded RF Feeder Cable with Factory-Assembled Weatherproof N-Connectors',
gain: '< 0.075 dB/m loss',
outputPower: 'High-Power Rated (1500W Peak)',
coverageSqFt: 'Low-Loss Interconnection',
coverageNum: 0,
frequencyBands: ['0 - 6 GHz DC to Ultra-High-Frequency'],
supportedCarriers: ['Airtel', 'Jio', 'Vi', 'BSNL'],
priceDisplay: '₹3,499',
warranty: '1 Year Replacement Warranty',
description: 'Heavy-duty commercial-grade LMR-400 coaxial cable with gas-injected foamed polyethylene dielectric and double shielding (bonded aluminum foil + tinned copper braid). Virtually eliminates signal attenuation over rooftop to indoor runs.',
kitIncludes: [
'Heavy-Duty LMR-400 50Ω Low-Loss Coaxial Cable Roll (Factory Sealed)',
'Factory-Crimped & Weatherproofed N-Male to N-Male Connectors',
'Quality Inspection VSWR Pass Tag'
],
specs: {
impedance: '50 ± 1 Ohm',
connectorType: 'N-Male to N-Male (Gold-plated center pin)',
noiseFigure: 'Passive',
vswr: '≤ 1.15 @ 2.5 GHz',
powerSupply: 'Passive',
dimensions: 'Outer Diameter 10.3 mm (UV-Resistant PE Black Jacket)',
operatingTemp: '-40°C to +85°C'
},
imageUrl: '/assets/aistudio/Coaxial_Cable_LMR_400_17575a77.jpeg',
featured: true
},
{
id: 'bw-acc-splitter-3way',
name: 'Amphenol EZ-400 3-Way RF Coaxial Power Splitter',
modelCode: 'BW-SPLIT-3WAY-N',
category: 'accessories',
tagline: 'Wideband 698-2700 MHz 3-Way Reactive Power Splitter with N-Female Ports',
gain: '4.8 dB Division',
outputPower: '50W Continuous',
coverageSqFt: 'Splits to 3 Indoor Antennas',
coverageNum: 0,
frequencyBands: ['698 - 2700 MHz Wideband'],
supportedCarriers: ['Airtel', 'Jio', 'Vi', 'BSNL'],
priceDisplay: '₹1,699',
warranty: '1 Year Replacement Warranty',
description: 'Amphenol EZ-400 high-grade reactive 3-way power splitter divider. Distributes amplified mobile signals evenly from one repeater unit across 3 distinct indoor antennas for multi-room coverage with minimal insertion loss.',
kitIncludes: [
'Amphenol 3-Way Microstrip Power Splitter with 1-Input / 3-Output N-Female Ports',
'Integrated Wall Mounting Flange Holes',
'Weatherproof High-Conductivity Aluminum Casing'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female (Gold-plated brass contact)',
noiseFigure: 'Passive (< 0.2 dB Insertion Loss)',
vswr: '≤ 1.25:1',
powerSupply: 'Passive',
dimensions: '145 x 65 x 28 mm (0.28 kg)',
operatingTemp: '-35°C to +75°C'
},
imageUrl: '/assets/aistudio/3-Way_Power_Splitter_3e40dfef.jpeg',
featured: true
},
{
id: 'bw-acc-splitter-4way',
name: 'Boosterswala 4-Way High-Power RF Coaxial Splitter / Divider',
modelCode: 'BW-SPLIT-4WAY-N',
category: 'accessories',
tagline: 'Even-Balance 4-Way Signal Divider for 4 Antennas on Multi-Floor & Large Villas',
gain: '6.0 dB Division',
outputPower: '50W Continuous',
coverageSqFt: 'Splits to 4 Indoor Antennas',
coverageNum: 0,
frequencyBands: ['698 - 2700/3800 MHz Wideband'],
supportedCarriers: ['Airtel', 'Jio', 'Vi', 'BSNL'],
priceDisplay: '₹2,199',
warranty: '1 Year Replacement Warranty',
description: 'Precision multi-port reactive power divider to feed 4 indoor antennas across separate rooms, floors, or long wings. Features rugged extruded black aluminum housing with 1 input and 4 output N-female ports.',
kitIncludes: [
'4-Way Reactive RF Power Splitter with N-Female Ports',
'Mounting Screw Hardware',
'Low-PIM Aluminum Housing'
],
specs: {
impedance: '50 Ohm',
connectorType: 'N-Female (Low PIM ≤ -150 dBc)',
noiseFigure: 'Passive (< 0.25 dB Insertion Loss)',
vswr: '≤ 1.3:1',
powerSupply: 'Passive',
dimensions: '160 x 75 x 30 mm (0.35 kg)',
operatingTemp: '-35°C to +75°C'
},
imageUrl: '/assets/aistudio/4-Way_Power_Splitter_b921fdf7.jpeg',
featured: true
}
];

export const SOLUTIONS: Solution[] = [
{
id: 'basement-underground',
title: 'Basement & Underground Parking Solutions',
subtitle: 'Overcoming Thick Reinforced Concrete & Subterranean Signal Absorption',
targetEnvironment: 'Basements, Lower Ground Floors, Parking Facilities, Bunker Studios',
challenge: 'Radio frequency signals from macro cell towers cannot penetrate 10+ inches of steel-reinforced concrete, soil, and subterranean retaining walls, creating complete communication blackouts.',
engineeringSolution: 'We install high-gain directional LPDA antennas on the terrace or building facade where line-of-sight signal is strongest, feed signal via heavy-shielded low-loss coaxial cable to a high-power Boosterswala quad-band amplifier, and distribute coverage across the basement using high-efficiency ceiling dome antennas.',
recommendedKit: 'Boosterswala Quad-Band Basement Master (BW-QB75-BSMT)',
typicalCoverage: '1,500 - 15,000 sq ft',
idealFor: ['Corporate Basement Workstations', 'Underground Fitness Studios & Gyms', 'Residential Basement Dens & Theatres', 'Commercial Multi-Level Parking Lots'],
keyBenefits: [
'Instant 5-bar voice call clarity & high-speed OTP reception',
'No more missed business calls or bank OTP authentication failures',
'High safety compliance for basement occupants and maintenance staff',
'Zero monthly subscription fees – one-time professional installation'
]
},
{
id: 'high-rise-apartments',
title: 'High-Rise Apartments & Penthouse Solutions',
subtitle: 'Solving Cell Tower "Pilot Pollution" and Modern Energy-Efficient Glass Attenuation',
targetEnvironment: '15th Floor & Above Apartments, Penthouses, High-Rise Towers',
challenge: 'Contrary to intuition, higher floors suffer from "pilot pollution" where the phone sees 10+ cell towers at equal weak strength, causing constant tower hopping, packet collision, and dropped calls. Additionally, modern low-E (low emissivity) tinted glass blocks up to 90% of cellular RF frequencies.',
engineeringSolution: 'Our RF engineers measure the exact azimuth with a spectrum analyzer and install a precision narrow-beam directional antenna aimed at the single highest-throughput donor cell tower, filtering out interference and routing clean, stable signal into the apartment.',
recommendedKit: 'Boosterswala Tri-Band Turbo Pro or 5G Ultra Max',
typicalCoverage: '2,000 - 6,000 sq ft',
idealFor: ['Penthouses & Duplex Apartments', 'Gated Society High-Rise Flats', 'Tower Corner Units with Glass Facades', 'Balcony Workstations'],
keyBenefits: [
'Stable connection without tower bouncing or voice cutoffs',
'Full 4K Ultra HD video conferencing on Zoom, Teams & Google Meet',
'Preserves smartphone battery life by eliminating tower hunting',
'Neat, concealed cabling with zero disruption to luxury interiors'
]
},
{
id: 'corporate-it-parks',
title: 'Corporate Offices & IT Parks DAS',
subtitle: 'High-Density Concurrent User Capacity for Thousands of Devices',
targetEnvironment: 'Multi-Floor Corporate Offices, Tech Parks, Coworking Hubs, Call Centers',
challenge: 'Offices with 100 to 5,000+ employees face network congestion. Without an enterprise in-building repeater or DAS, cellular networks choke, client conference calls drop, and two-factor SMS OTPs are delayed.',
engineeringSolution: 'Boosterswala designs a turnkey In-Building Distributed Antenna System (DAS). Multiple carrier-grade amplifiers are coupled with hybrid splitters and ceiling antennas distributed every 15-20 meters, ensuring uniform signal density across open workstations, boardrooms, and elevator lobbies.',
recommendedKit: 'Boosterswala Enterprise DAS In-Building System (BW-DAS-85-ENT)',
typicalCoverage: '10,000 - 100,000+ sq ft',
idealFor: ['IT/ITeS Corporate Headquarters', 'Coworking Spaces (WeWork, Awfis, etc.)', 'Financial Trading Floors & Banks', 'BPO & Call Center Facilities'],
keyBenefits: [
'Simultaneous multi-carrier support (Airtel, Jio, Vi, BSNL) for thousands of devices',
'Automatic Gain Control (AGC) prevents network oscillation & cell tower interference',
'Dedicated SLA with 24/7 technical monitoring and preventive maintenance',
'Verified performance and quality documentation provided'
]
},
{
id: 'villas-farmhouses',
title: 'Luxury Villas & Rural Farmhouses',
subtitle: 'Capturing Weak Signal from Remote Cell Towers 10-25 km Away',
targetEnvironment: 'Outskirt Farmhouses, Countryside Villas, Hill Resorts, Gated Estates',
challenge: 'Rural and suburban properties are often located far from telecom cell towers. Signal arriving at the site is faint (-105to -115 ), resulting in erratic coverage or complete "No Service" status.',
engineeringSolution: 'We install a specialized high-aperture 18-element Yagi or parabolic grid antenna mounted on a telescopic mast on the rooftop. Paired with our low-noise front-end booster, it magnifies faint macro signals and broadcasts strong 4G/5G coverage throughout the villa and lawn patios.',
recommendedKit: 'Boosterswala Long-Reach Villa & Farmhouse Booster (BW-LR72-VILLA)',
typicalCoverage: '3,500 - 12,000 sq ft',
idealFor: ['Chattarpur & Gurgaon Farmhouses', 'Lonavala & Alibaug Weekend Villas', 'Himachal & Uttarakhand Hill Homestays', 'Agricultural Farm Estates'],
keyBenefits: [
'Transforms 1-bar or "Emergency Calls Only" into 5 full bars',
'Reliable Wi-Fi calling and cellular data backup during broadband fiber cuts',
'Weather-sealed outdoor equipment engineered for heavy rain, dust, and wind',
'Coverage extends to verandas, private pools, and adjacent guest houses'
]
},
{
id: 'warehouses-factories',
title: 'Industrial Warehouses & Manufacturing Plants',
subtitle: 'Piercing Corrugated Metal Sheeting & Heavy Electrical Machinery Interference',
targetEnvironment: 'Logistics Warehouses, Manufacturing Units, FMCG Depots, Auto Ancillaries',
challenge: 'Corrugated steel walls act as giant Faraday cages, completely blocking cellular RF propagation. Handheld barcode scanners, IoT tracking devices, and floor managers lose connectivity constantly.',
engineeringSolution: 'Ruggedized industrial repeaters paired with directional indoor panel antennas provide focused signal along high-density warehouse aisles and production lines without getting degraded by motor electromagnetic interference (EMI).',
recommendedKit: 'Boosterswala Quad-Band Industrial Heavy (Custom Array)',
typicalCoverage: '20,000 - 150,000 sq ft',
idealFor: ['E-Commerce Fulfillment Hubs (Amazon, Flipkart)', 'Automotive Manufacturing Facilities', 'Cold Storage & Food Processing Plants', 'Chemical & Textile Factories'],
keyBenefits: [
'Flawless real-time barcode scanner and logistics inventory syncing',
'Worker safety compliance with instantaneous emergency calling everywhere',
'Resistant to industrial dust, vibrations, and temperature fluctuations',
'Fast weekend installation with zero factory downtime'
]
},
{
id: 'hospitality-healthcare',
title: 'Hotels, Resorts & Healthcare Facilities',
subtitle: 'Guest Experience Excellence & Critical Medical Communication',
targetEnvironment: '5-Star Hotels, Boutique Resorts, Multi-Specialty Hospitals, Diagnostics Centers',
challenge: 'Hotel guests demand seamless streaming and video calls in guestrooms, conference halls, and elevators. In hospitals, doctors and emergency responders cannot afford delayed calls or ICU blind spots.',
engineeringSolution: 'We deploy ultra-low-radiation, medically safe in-building micro-DAS networks that comply with WHO and international SAR exposure guidelines, ensuring crisp signal without interfering with sensitive medical imaging equipment.',
recommendedKit: 'Boosterswala Commercial DAS Multi-Zone System',
typicalCoverage: '25,000 - 80,000 sq ft',
idealFor: ['Multi-Storey Hospitals & Trauma Centers', 'Luxury 5-Star & Heritage Hotels', 'Diagnostic Laboratories & Radiology Centers', 'Convention Centers & Banquet Halls'],
keyBenefits: [
'Eliminates negative guest reviews regarding poor phone network coverage',
'Instantaneous doctor-on-call connectivity and life-safety communication',
'Strict compliance with electromagnetic radiation safety thresholds',
'Silent operation with concealed aesthetic antenna integration'
]
}
];

export const INDUSTRIES: Industry[] = [
{
id: 'it-tech-parks',
name: 'IT & Technology Parks',
iconName: 'Server',
tagline: 'High-density concurrent connectivity for thousands of software engineers & corporate executives.',
description: 'Ensure smooth daily operations, high-speed VoLTE conference calls, and zero authentication delays across multi-tower corporate tech parks.',
caseStudy: {
client: 'DLF CyberCity Tech Tenant Hub',
location: 'Gurugram, Haryana',
area: '45,000 sq ft across 3 floors',
challenge: 'Heavy call drops on Jio & Airtel inside interior conference rooms with 350+ software engineers.',
result: 'Deployed Boosterswala 8-Zone Tri-Band DAS with 16 ceiling dome antennas. Achieved 100% 5-bar coverage across all desks and lifts.',
metric: '0 Dropped Calls & 98% Signal Reliability'
},
features: ['Multi-carrier concurrent capacity', 'Low-PIM enterprise splitters', 'Elevator shaft coverage integration']
},
{
id: 'hospitality-hotels',
name: 'Hotels & Luxury Resorts',
iconName: 'Building2',
tagline: 'Delight guests with instant 5-star mobile connectivity from check-in to penthouses.',
description: 'Protect online ratings and guest satisfaction by eliminating dead zones in hotel rooms, basements, spa facilities, and banquet spaces.',
caseStudy: {
client: 'Royal Orchid Luxury Resort',
location: 'Jaipur, Rajasthan',
area: '60,000 sq ft heritage property',
challenge: 'Thick stone walls blocked all mobile signals inside heritage guestrooms and private banquet lawns.',
result: 'Custom low-profile concealed antenna deployment covering 84 suites and conference banquet hall.',
metric: 'TripAdvisor Wi-Fi/Network rating jumped from 3.2 to 4.9'
},
features: ['Concealed architectural antennas', 'Covers banquet halls & lawns', 'Zero disruption to guest tranquility']
},
{
id: 'real-estate-residential',
name: 'Real Estate & Luxury Builders',
iconName: 'Home',
tagline: 'Add instant value to new residential projects by offering pre-installed mobile signal infrastructure.',
description: 'Partner with Boosterswala during architectural construction or post-handover to provide pre-wired cellular booster solutions for home buyers.',
caseStudy: {
client: 'Prestige Group Luxury Villa Enclave',
location: 'Whitefield, Bengaluru',
area: '42 Independent Luxury Villas',
challenge: 'Newly constructed gated community had weak signal due to surrounding high-rise shielding.',
result: 'Boosterswala outfitted 42 villas with customized rooftop LPDA and dual-floor indoor distribution.',
metric: '100% Customer Satisfaction across all 42 homeowners'
},
features: ['Pre-construction wiring blueprints', 'Co-branded developer packages', 'Bulk installation discounts']
},
{
id: 'manufacturing-logistics',
name: 'Manufacturing & Warehouses',
iconName: 'Factory',
tagline: 'Eliminate dead zones in metal-sheeted industrial sheds for barcode scanners & shop-floor teams.',
description: 'Ensure smooth supply chain operations and emergency preparedness with ruggedized signal repeaters built for industrial environments.',
caseStudy: {
client: 'Apex Logistics Fulfillment Center',
location: 'Bhiwandi, Maharashtra',
area: '85,000 sq ft automated warehouse',
challenge: 'Metal sheet roofing completely blocked handheld wireless scanners and supervisory mobile devices.',
result: 'High-power quad-band industrial repeater setup covering 12 racking aisles and dispatch bays.',
metric: '32% increase in shift picking efficiency'
},
features: ['IP52 industrial dustproof enclosures', 'Lightning surge arresters', 'High-power output for long cable runs']
},
{
id: 'healthcare-hospitals',
name: 'Healthcare & Hospitals',
iconName: 'Activity',
tagline: 'Life-critical cellular connectivity for emergency physicians, patients, and families.',
description: 'Verified low-emission in-building repeaters that comply with strict medical electromagnetic compatibility norms.',
caseStudy: {
client: 'Metro Super Specialty Hospital',
location: 'Noida, Uttar Pradesh',
area: '110,000 sq ft medical facility',
challenge: 'Basement radiation oncology and ICU waiting areas had zero cellular network connectivity.',
result: 'Installed safe radiation DAS system across basement diagnostic labs and patient recovery zones.',
metric: 'Average emergency physician response time reduced by 4.2 minutes'
},
features: ['Zero medical EMI interference', 'Strict SAR compliance certified', '24/7 priority emergency support']
},
{
id: 'retail-shopping-malls',
name: 'Retail Malls & Commercial Complexes',
iconName: 'ShoppingBag',
tagline: 'Flawless digital payments, UPI OTPs, and customer mobile shopping experiences.',
description: 'Prevent lost retail sales caused by delayed bank OTPs and failing UPI QR code payment scans in crowded shopping arcades.',
caseStudy: {
client: 'Grand Galleria Shopping Mall',
location: 'Hyderabad, Telangana',
area: '70,000 sq ft lower ground retail',
challenge: 'Shoppers faced frequent UPI transaction timeouts and dropped calls in the lower level supermarket.',
result: 'Deploys 12 multi-band ceiling repeaters across retail anchor stores and food court checkout areas.',
metric: 'UPI payment failure rate dropped from 18.4% to under 0.1%'
},
features: ['Handles weekend high crowd density', 'Supports all 4 national telecom carriers', 'Quick evening installation']
}
];

export const DOWNLOADS: DownloadItem[] = [
{
id: 'dl-full-catalog-2026',
title: 'Boosterswala 2026 Complete Product Catalogue',
category: 'Catalog',
fileSize: '6.4 MB',
fileFormat: 'PDF',
description: 'Full 36-page technical guide featuring all Tri-Band, Quad-Band, 5G NR, DAS equipment, antennas, coaxial cables, and price schedules.',
version: 'v4.2 (2026 Edition)',
publishDate: 'January 2026'
},
{
id: 'dl-installation-manual',
title: 'Boosterswala DIY & Pro Step-by-Step Installation Manual',
category: 'Installation Guide',
fileSize: '3.8 MB',
fileFormat: 'PDF',
description: 'Detailed wiring diagrams, antenna separation guidelines (horizontal vs vertical isolation to prevent self-oscillation), and LCD diagnostic code guide.',
version: 'v3.8',
publishDate: 'March 2026'
},
{
id: 'dl-dot-compliance-guide',
title: 'Regulatory Whitepaper on Mobile Signal Repeaters',
category: 'Quality Assurance',
fileSize: '2.1 MB',
fileFormat: 'PDF',
description: 'Official explanatory document detailing technical standards (TEC), non-interference certification, and carrier notification procedures in India.',
version: 'v2.1',
publishDate: 'February 2026'
},
{
id: 'dl-basement-blueprint',
title: 'Basement & Underground RF Engineering Blueprint',
category: 'Technical Specs',
fileSize: '4.5 MB',
fileFormat: 'PDF',
description: 'Architectural schematic detailing cable link-budget calculations, splitter attenuation losses, and antenna placement rules for basements.',
version: 'v1.5',
publishDate: 'April 2026'
},
{
id: 'dl-warranty-card-terms',
title: 'Boosterswala Warranty Card & On-Site Service Terms',
category: 'Quality Assurance',
fileSize: '1.2 MB',
fileFormat: 'PDF',
description: 'Official 1-Year replacement warranty policy document and pan-India service request protocol.',
version: 'v2.0',
publishDate: 'January 2026'
},
{
id: 'dl-rf-linkbudget-calc',
title: 'RF Link-Budget & Cable Loss Calculation Spreadsheet',
category: 'Technical Specs',
fileSize: '850 KB',
fileFormat: 'DOCX',
description: 'Interactive calculation sheet for telecom technicians to calculateoutput power based on cable run length and splitters.',
version: 'v3.0',
publishDate: 'May 2026'
}
];

export const FAQS: FAQItem[] = [
{
id: 'faq-legal-dot',
question: 'Are mobile network signal boosters legal to use in India?',
category: 'COD & Returns',
answer: 'Yes, when using certified, non-interfering equipment. Cheap, uncertified grey-market boosters that lack Automatic Gain Control (AGC) can inject noise into cellular base stations and are strictly prohibited. Boosterswala systems feature intelligent AGC, automatic self-oscillation suppression, and adhere strictly to global quality standards, ensuring zero harmful feedback to external telecom towers.'
},
{
id: 'faq-5g-support',
question: 'Will Boosterswala systems boost 5G signals as well as 4G and 2G/3G?',
category: 'Technical & 5G',
answer: 'Yes! Our next-generation models (such as the Boosterswala 5G True-NR Ultra Max and Enterprise DAS) support Indian 5G frequency bands including 700 MHz (n28), 1800 MHz (n3), 2300 MHz (n40), and 3500 MHz (n78 C-band). You will enjoy high-speed 5G download rates, low ping for gaming, and ultra-crisp VoNR voice calls.'
},
{
id: 'faq-all-operators',
question: 'Does one booster work for Airtel, Jio, Vi, and BSNL simultaneously?',
category: 'General',
answer: 'Absolutely. Our Tri-Band, Quad-Band, and 5G models are multi-carrier repeaters. They amplify all signals present in the respective frequency bands. Family members, office colleagues, and visitors using different networks (Jio, Airtel, Vi, BSNL) will all experience full signal strength concurrently without needing separate devices.'
},
{
id: 'faq-radiation-safe',
question: 'Are mobile signal boosters safe? Is there radiation hazard?',
category: 'Safety & Warranty',
answer: 'In fact, using a signal booster significantly REDUCES your personal radiation exposure! When your phone has only 1 bar or "Searching", its internal transmitter boosts power to the maximum (up to 2000 mW) right against your head or pocket. With a Boosterswala booster delivering a full 5-bar signal, your phone throttles its power down to less than 20 mW (a 100x reduction in radiation emission), while also preserving battery life.'
},
{
id: 'faq-installation-time',
question: 'How long does professional installation take, and can I install it myself?',
category: 'Installation',
answer: 'For homes and small offices, a professional installation typically takes 2 to 3 hours. Our certified technicians neatly route the low-loss cable, align the outdoor antenna using a spectrum analyzer for peak reception, and test every room. For DIY enthusiasts, all kits include plug-and-play components, pre-crimped cables, and illustrated manuals.'
},
{
id: 'faq-outside-signal-needed',
question: 'What if there is very weak or zero signal outside my building?',
category: 'Technical & 5G',
answer: 'A signal booster amplifies existing cellular signals; it cannot create signal from thin air. However, even if your ground floor or basement has 0 bars, your terrace, rooftop, or upper balcony almost always has 1-2 bars. Our ultra-high-gain 14 dBi LPDA antennas are sensitive enough to capture faint signals and boost them by 70 dB to fill your entire indoor space with 5 bars.'
},
{
id: 'faq-warranty-support',
question: 'What warranty and after-sales support does Boosterswala provide?',
category: 'Safety & Warranty',
answer: 'All Boosterswala boosters come with a 1-Year comprehensive replacement warranty. If any hardware component fails under normal operation, we replace it on-site. We have technical support hubs across 180+ cities in India and offer free telephonic technical consultation.'
},
{
id: 'faq-free-site-survey',
question: 'How does the Free Site Survey work?',
category: 'Installation',
answer: 'You can book a free on-site survey by submitting our contact form or messaging us on WhatsApp. Our RF engineer will visit your premises with a professional handheld spectrum analyzer, measure signal strength on all carrier bands (downlink/uplink), inspect cable routing paths, and provide a no-obligation tailored proposal.'
}
];

export const TESTIMONIALS: Testimonial[] = [
{
id: 'test-1',
name: 'Vikramaditya Singhania',
designation: 'Managing Director',
company: 'Singhania Logistics & Supply Chain',
city: 'Mumbai, Maharashtra',
propertyType: 'Corporate Office & Basement Warehouse',
quote: 'Our basement dispatch center had zero signal. Phone calls dropped constantly, and workers had to walk up to the driveway just to receive OTPs. Boosterswala installed a Quad-Band system in 3 hours. Now everyone gets full 5 bars on Jio and Airtel. Outstanding service!',
rating: 5,
carrierBoosted: 'Jio 5G & Airtel 4G',
metric: '100% Signal in 8,000 sq ft Basement'
},
{
id: 'test-2',
name: 'Pooja Narang',
designation: 'Architect & Interior Designer',
company: 'Studio Artha',
city: 'New Delhi (Greater Kailash)',
propertyType: 'Luxury Duplex Penthouse (14th Floor)',
quote: 'Because of low-E insulated glass, mobile reception inside our clients duplex was terrible despite being in a prime Delhi colony. Boosterswala provided a discreet concealed installation with flush ceiling antennas. The clients were thrilled with the pristine voice quality and gigabit internet speeds.',
rating: 5,
carrierBoosted: 'All Carriers (Airtel, Jio, Vi)',
metric: 'Zero Dropped Calls Across 4,500 sq ft'
},
{
id: 'test-3',
name: 'Dr. Rajeshwar Kulkarni',
designation: 'Medical Superintendent',
company: 'Lifeline Multi-Specialty Hospital',
city: 'Bengaluru, Karnataka',
propertyType: 'Hospital Ground & Radiology Floor',
quote: 'Communication in a hospital is literally a matter of life and death. Doctors were missing emergency calls in the lower radiology department. Boosterswala engineered a certified low-EMF solution complying with healthcare safety norms. It has been running flawlessly for over 18 months.',
rating: 5,
carrierBoosted: 'Airtel & BSNL',
metric: 'Full 5-Bar Coverage in Diagnostic Wing'
}
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
{
city: 'Mumbai (HQ)',
state: 'Maharashtra',
address: 'D/1 Aakurli shahyog Kranti Nagar Kandivali East Mumbai 400101',
phone: '+91 93722 26376',
email: 'mumbai@boosterswala.com',
isHeadquarter: true
},
{
city: 'Mumbai',
state: 'Maharashtra',
address: 'Unit 504, Marol Co-op Industrial Estate, Andheri East, Mumbai - 400059',
phone: '+91 93722 26376',
email: 'mumbai@boosterswala.com'
},
{
city: 'Bengaluru',
state: 'Karnataka',
address: 'Tech Innovation Park, 100 Feet Road, Indiranagar, Bengaluru - 560038',
phone: '+91 93722 26376',
email: 'bangalore@boosterswala.com'
},
{
city: 'Hyderabad',
state: 'Telangana',
address: 'Cyber Towers Lane, Madhapur, HITEC City, Hyderabad - 500081',
phone: '+91 93722 26376',
email: 'hyderabad@boosterswala.com'
},
{
city: 'Pune',
state: 'Maharashtra',
address: 'Viman Nagar Commerce Centre, Near Airport Road, Pune - 411014',
phone: '+91 93722 26376',
email: 'pune@boosterswala.com'
},
{
city: 'Kolkata',
state: 'West Bengal',
address: 'Sector V, Salt Lake City Electronics Complex, Kolkata - 700091',
phone: '+91 93722 26376',
email: 'kolkata@boosterswala.com'
}
];
