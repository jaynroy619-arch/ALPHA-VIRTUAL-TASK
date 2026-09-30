import React from 'react';
import { HowItWorksTimeline } from '../../components/Timeline/HowItWorksTimeline';
import { WorkWithUsButton, WhatsAppButton, EmailButton } from '../../components/ContactButtons/ContactButtons';
import { FileUp, ShieldCheck, DollarSign, RefreshCw, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../../utils/contactLinks';

export const HowItWorksPage: React.FC = () => {
  const fileProtocols = [
    {
      title: 'Direct File Attachments',
      desc: 'Send PDFs, spreadsheets, scans, or audio recordings directly via WhatsApp or email attachment up to standard size limits.',
    },
    {
      title: 'Cloud Storage Links',
      desc: 'For larger datasets or video files, share read/edit links via Google Drive, Microsoft OneDrive, Dropbox, or WeTransfer.',
    },
    {
      title: 'Portal Credentials / Access',
      desc: 'For ongoing CRM or catalog management, grant guest or restricted editor permissions to our verified email.',
    },
  ];

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
          Simple & Transparent Workflow
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-2 mb-4 tracking-tight">
          How It Works
        </h1>
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed text-balance">
          We designed our workflow to be fast, honest, and completely free of complicated software dashboards. Here is how your project proceeds from start to finish.
        </p>
      </div>

      {/* 5-Step Visual Timeline */}
      <div className="mb-20">
        <HowItWorksTimeline showCTA={false} />
      </div>

      {/* Workflow Explanatory Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Block 1: File Sharing & Confidentiality */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800">
          <div className="flex items-center gap-3 mb-4 text-[#e5be53]">
            <FileUp className="w-5 h-5" />
            <h3 className="text-xl font-bold text-white">How You Send Files</h3>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
            We handle physical document scans, locked PDFs, raw CSVs, and audio/video files.
          </p>

          <div className="space-y-4">
            {fileProtocols.map((protocol, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <h4 className="text-xs font-bold text-white mb-1">{protocol.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{protocol.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Block 2: Pricing & Currency Clarity */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4 text-[#e5be53]">
              <DollarSign className="w-5 h-5" />
              <h3 className="text-xl font-bold text-white">Pricing & Currencies</h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
              Because data tasks vary greatly in complexity, we calculate quotes based on honest project variables:
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-neutral-300 mb-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span><strong>Record Volume:</strong> Total rows, word count, minutes of audio, or pages.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span><strong>Source Quality:</strong> Crisp digital files vs faint handwritten scans.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span><strong>Turnaround Speed:</strong> Standard delivery vs urgent turnaround.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span><strong>Currency Choice:</strong> Primary: {BUSINESS_INFO.primaryCurrency} | Secondary: {BUSINESS_INFO.secondaryCurrency}</span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs text-[#f3de8a]">
            <strong>Zero Hidden Surprises:</strong> You receive an all-inclusive quote before any task begins. No surprise charges.
          </div>
        </div>
      </div>

      {/* Revisions & Quality Guarantee */}
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-[#d4af37]/30 text-center max-w-3xl mx-auto space-y-4 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-xs font-mono text-[#f3de8a]">
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Our Commitment</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
          Revisions & Final Sign-Off
        </h3>
        <p className="text-neutral-300 text-sm leading-relaxed max-w-xl mx-auto">
          We want you to be 100% satisfied with every deliverable. If any record or formatting needs adjustment within the agreed scope, we update it immediately.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <WorkWithUsButton size="lg" label="Work With Us" />
          <WhatsAppButton size="lg" label="Chat on WhatsApp" />
        </div>
      </div>
    </div>
  );
};
