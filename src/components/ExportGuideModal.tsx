import React, { useState } from 'react';
import { X, Globe, Terminal, Copy, Check, ExternalLink, Download, Rocket } from 'lucide-react';

interface ExportGuideModalProps {
isOpen: boolean;
onClose: () => void;
}

export const ExportGuideModal: React.FC<ExportGuideModalProps> = ({ isOpen, onClose }) => {
const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
const [activePlatform, setActivePlatform] = useState<'vercel' | 'netlify' | 'cloudflare' | 'github'>('vercel');

if (!isOpen) return null;

const copyToClipboard = (text: string, index: number) => {
navigator.clipboard.writeText(text);
setCopiedIndex(index);
setTimeout(() => setCopiedIndex(null), 2000);
};

return (
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
<div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden my-8">
{/* Header */}
<div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
<div className="flex items-center gap-2.5">
<Rocket className="w-5 h-5 text-cyan-400" />
<div>
<h3 className="text-base font-bold text-white">How to Export & Deploy Boosterswala for Free</h3>
<p className="text-xs text-slate-400">Step-by-step instructions for free 24/7 web hosting</p>
</div>
</div>
<button
type="button"
onClick={onClose}
className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
>
<X className="w-5 h-5" />
</button>
</div>

{/* Modal Content */}
<div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
{/* Quick Steps Overview */}
<div className="rounded-xl bg-blue-50/70 border border-blue-200 p-4">
<h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
Summary: 3 Simple Steps to Deploy
</h4>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
<div className="bg-white p-3 rounded-lg border border-blue-100 shadow-2xs">
<span className="font-bold text-blue-700 block mb-1">1. Export Code</span>
Download or push the project repository files to your personal GitHub/GitLab account.
</div>
<div className="bg-white p-3 rounded-lg border border-blue-100 shadow-2xs">
<span className="font-bold text-blue-700 block mb-1">2. Connect Host</span>
Sign in to Vercel, Netlify, or Cloudflare Pages with GitHub and import the repository.
</div>
<div className="bg-white p-3 rounded-lg border border-blue-100 shadow-2xs">
<span className="font-bold text-blue-700 block mb-1">3. Live in 60s</span>
Framework preset Vite automatically compiles and provides a free SSL HTTPS URL.
</div>
</div>
</div>

{/* Platform Tabs */}
<div>
<div className="flex items-center gap-2 border-b border-slate-200 pb-2">
{[
{ id: 'vercel', label: 'Option A: Vercel (Recommended)' },
{ id: 'netlify', label: 'Option B: Netlify' },
{ id: 'cloudflare', label: 'Option C: Cloudflare Pages' },
{ id: 'github', label: 'Option D: GitHub Pages' }
].map(tab => (
<button
key={tab.id}
type="button"
onClick={() => setActivePlatform(tab.id as any)}
className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
activePlatform === tab.id
? 'bg-blue-600 text-white'
: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
}`}
>
{tab.label}
</button>
))}
</div>

<div className="pt-4">
{activePlatform === 'vercel' && (
<div className="space-y-3 text-xs text-slate-700 leading-relaxed">
<div className="font-semibold text-slate-900 text-sm">Deploying on Vercel (100% Free Forever)</div>
<ol className="list-decimal pl-5 space-y-2">
<li>Create a free account at <strong className="text-slate-900">vercel.com</strong> using your GitHub login.</li>
<li>Push this application repository to GitHub:
<div className="mt-1.5 p-2.5 rounded-lg bg-slate-900 text-cyan-400 font-mono text-[11px] flex items-center justify-between">
<span>git init && git add . && git commit -m "Boosterswala website"</span>
<button
type="button"
onClick={() => copyToClipboard('git init && git add . && git commit -m "Boosterswala website"', 1)}
className="text-slate-400 hover:text-white p-1"
>
{copiedIndex === 1 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
</button>
</div>
</li>
<li>In Vercel dashboard, click <strong className="text-slate-900">Add New Project</strong> and select your repository.</li>
<li>Vercel automatically detects <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-700">Vite</code>. The build command is <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-700">npm run build</code> and output directory is <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-700">dist</code>.</li>
<li>Click <strong className="text-slate-900">Deploy</strong>. Your website will be live at <code className="text-slate-900 font-mono">boosterswala.vercel.app</code> with free automatic HTTPS.</li>
<li>You can attach your custom domain <code className="text-slate-900 font-mono">boosterswala.com</code> under Project Settings &gt; Domains.</li>
</ol>
</div>
)}

{activePlatform === 'netlify' && (
<div className="space-y-3 text-xs text-slate-700 leading-relaxed">
<div className="font-semibold text-slate-900 text-sm">Deploying on Netlify (Free Starter Plan)</div>
<ol className="list-decimal pl-5 space-y-2">
<li>Sign up for free at <strong className="text-slate-900">netlify.com</strong>.</li>
<li>Select <strong className="text-slate-900">Add new site &gt; Import an existing project</strong>.</li>
<li>Select your GitHub repository.</li>
<li>Configure Build settings:
<ul className="list-disc pl-5 mt-1 space-y-1">
<li>Build command: <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">npm run build</code></li>
<li>Publish directory: <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">dist</code></li>
</ul>
</li>
<li>Click <strong className="text-slate-900">Deploy Boosterswala</strong>. Free SSL, continuous deployment on every Git push, and global CDN caching included.</li>
</ol>
</div>
)}

{activePlatform === 'cloudflare' && (
<div className="space-y-3 text-xs text-slate-700 leading-relaxed">
<div className="font-semibold text-slate-900 text-sm">Deploying on Cloudflare Pages (Unlimited Bandwidth)</div>
<ol className="list-decimal pl-5 space-y-2">
<li>Go to <strong className="text-slate-900">pages.cloudflare.com</strong> and create a free account.</li>
<li>Select <strong className="text-slate-900">Create a project &gt; Connect to Git</strong>.</li>
<li>Framework preset: Choose <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">Vite</code>.</li>
<li>Build command: <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">npm run build</code></li>
<li>Build output directory: <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">dist</code></li>
<li>Click <strong className="text-slate-900">Save and Deploy</strong>. Cloudflare offers zero-egress fees and global edge delivery.</li>
</ol>
</div>
)}

{activePlatform === 'github' && (
<div className="space-y-3 text-xs text-slate-700 leading-relaxed">
<div className="font-semibold text-slate-900 text-sm">Deploying on GitHub Pages</div>
<ol className="list-decimal pl-5 space-y-2">
<li>Push the code to your GitHub repository (e.g., <code className="font-mono">yourusername/boosterswala</code>).</li>
<li>Add the <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">gh-pages</code> package or create a GitHub Actions workflow:
<div className="mt-1.5 p-2.5 rounded-lg bg-slate-900 text-cyan-400 font-mono text-[11px] flex items-center justify-between">
<span>npm run build && npx gh-pages -d dist</span>
<button
type="button"
onClick={() => copyToClipboard('npm run build && npx gh-pages -d dist', 2)}
className="text-slate-400 hover:text-white p-1"
>
{copiedIndex === 2 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
</button>
</div>
</li>
<li>In GitHub repo Settings &gt; Pages, set the source to the <code className="font-mono">gh-pages</code> branch.</li>
</ol>
</div>
)}
</div>
</div>

{/* Build Command Reference */}
<div className="rounded-xl bg-slate-900 p-4 text-white">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
<Terminal className="w-4 h-4" />
Local Verification & Production Build Command
</span>
</div>
<div className="p-3 bg-slate-950 rounded-lg font-mono text-xs text-slate-200 flex items-center justify-between border border-slate-800">
<code>npm run build</code>
<button
type="button"
onClick={() => copyToClipboard('npm run build', 3)}
className="text-slate-400 hover:text-white p-1"
>
{copiedIndex === 3 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
</button>
</div>
<p className="text-[11px] text-slate-400 mt-2">
Generates production-optimized HTML, CSS, and JS bundles in the <code className="text-white">/dist</code> directory, ready to upload to any static hosting or web server.
</p>
</div>
</div>

{/* Footer */}
<div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
<span className="text-xs text-slate-500">
Need help deploying? Call our IT desk at <strong className="text-slate-700">+91 93722 26376</strong>
</span>
<button
type="button"
onClick={onClose}
className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
>
Got It, Thanks!
</button>
</div>
</div>
</div>
);
};
