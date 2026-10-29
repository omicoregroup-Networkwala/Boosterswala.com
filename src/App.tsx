import React, { useState } from 'react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { EnquiryModal } from './components/EnquiryModal';
import { ExportGuideModal } from './components/ExportGuideModal';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { LocationsPage } from './pages/LocationsPage';
import { DownloadsPage } from './pages/DownloadsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactUsPage } from './pages/ContactUsPage';

export default function App() {
const [currentTab, setCurrentTab] = useState<PageTab>('home');
const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
const [prefilledProduct, setPrefilledProduct] = useState<string | undefined>();
const [prefilledNotes, setPrefilledNotes] = useState<string | undefined>();
const [isExportGuideOpen, setIsExportGuideOpen] = useState(false);

const handleOpenEnquiry = (productName?: string, notes?: string) => {
setPrefilledProduct(productName);
setPrefilledNotes(notes);
setIsEnquiryModalOpen(true);
};

const handleOpenExportGuide = () => {
setIsExportGuideOpen(true);
};

const handleSelectTab = (tab: PageTab) => {
setCurrentTab(tab);
window.scrollTo({ top: 0, behavior: 'smooth' });
};

return (
<div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
{/* Top Navigation */}
<Navbar
currentTab={currentTab}
onSelectTab={handleSelectTab}
onOpenEnquiry={() => handleOpenEnquiry()}
onOpenExportGuide={handleOpenExportGuide}
/>

{/* Main Page Body */}
<main className="flex-1">
{currentTab === 'home' && (
<HomePage
onSelectTab={handleSelectTab}
onOpenEnquiry={handleOpenEnquiry}
onOpenExportGuide={handleOpenExportGuide}
/>
)}
{currentTab === 'products' && (
<ProductsPage onOpenEnquiry={handleOpenEnquiry} />
)}
{currentTab === 'solutions' && (
<SolutionsPage onOpenEnquiry={handleOpenEnquiry} />
)}
{currentTab === 'industries' && (
<IndustriesPage onOpenEnquiry={handleOpenEnquiry} />
)}
{currentTab === 'about' && (
<AboutUsPage onOpenEnquiry={handleOpenEnquiry} />
)}
{currentTab === 'locations' && (
<LocationsPage onOpenEnquiry={handleOpenEnquiry} />
)}
{currentTab === 'downloads' && (
<DownloadsPage />
)}
{currentTab === 'faq' && (
<FaqPage onOpenEnquiry={handleOpenEnquiry} />
)}
{currentTab === 'contact' && (
<ContactUsPage />
)}
</main>

{/* Global Footer */}
<Footer
onSelectTab={handleSelectTab}
onOpenEnquiry={() => handleOpenEnquiry()}
onOpenExportGuide={handleOpenExportGuide}
/>

{/* Sticky & Floating Quick Action Buttons */}
<FloatingActions
onOpenCalculator={() => {
handleSelectTab('home');
setTimeout(() => {
const el = document.getElementById('signal-calculator');
if (el) el.scrollIntoView({ behavior: 'smooth' });
}, 100);
}}
onOpenEnquiry={() => handleOpenEnquiry()}
/>

{/* Lead Capture & Site Survey Modal */}
<EnquiryModal
isOpen={isEnquiryModalOpen}
onClose={() => setIsEnquiryModalOpen(false)}
prefilledProduct={prefilledProduct}
prefilledNotes={prefilledNotes}
/>

{/* Deployment & Free Hosting Guide Modal */}
<ExportGuideModal
isOpen={isExportGuideOpen}
onClose={() => setIsExportGuideOpen(false)}
/>
</div>
);
}
