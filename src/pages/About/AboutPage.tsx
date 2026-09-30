import React from 'react';
import { ShieldCheck, Target, HeartHandshake, Eye, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { WorkWithUsButton, WhatsAppButton, EmailButton } from '../../components/ContactButtons/ContactButtons';
import { BUSINESS_INFO } from '../../utils/contactLinks';

export const AboutPage: React.FC = () => {
  const pillars = [
    {
      title: 'Accuracy',
      desc: 'We treat every data cell, character, and calculation with meticulous care. Dual-pass verification catches discrepancies before files reach your desk.',
      icon: Target,
    },
    {
      title: 'Organization',
      desc: 'Chaotic datasets become structured, searchable assets with clear column schemas, uniform casing, and standard naming conventions.',
      icon: Eye,
    },
    {
      title: 'Communication',
      desc: 'Direct, straightforward contact via WhatsApp, phone, and email. You talk directly with the team working on your task with zero ticketing delays.',
      icon: HeartHandshake,
    },
    {
      title: 'Flexibility',
      desc: 'Whether you require a one-time emergency cleanup or ongoing weekly spreadsheet maintenance, we tailor our workflow to your preferred schedule and formats.',
      icon: Clock,
    },
    {
      title: 'Professional Service',
      desc: 'Enterprise confidentiality and integrity. We treat your proprietary records, customer information, and trade details with strict non-disclosure ethics.',
      icon: ShieldCheck,
    },
    {
      title: 'Attention to Detail',
      desc: 'Nuances matter—whether it is consistent currency formatting, proper date parsing, or clean audio transcription that preserves technical jargon.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero / Overview */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
          About Alpha Virtual Task
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-2 mb-4 tracking-tight">
          Your Trust Our Priority
        </h1>
        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed text-balance">
          Alpha Virtual Task provides dependable virtual and data-related solutions for individuals, independent professionals, startups, and established organizations.
        </p>
      </div>

      {/* Narrative & Visual Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-20">
        <div className="lg:col-span-6 space-y-6 text-neutral-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
            Built on Rigor, Confidentiality, and Honest Service
          </h2>
          <p>
            In today&apos;s fast-paced digital environment, high-growth businesses and busy professionals frequently find themselves overwhelmed by administrative bottlenecks—unformatted spreadsheets, fragmented lead directories, scanned paperwork, and repetitive data entry.
          </p>
          <p>
            Alpha Virtual Task was established to address this exact operational challenge. We function as your trusted external operations team: stepping in to clean, verify, format, process, and manage your data with speed and precision.
          </p>
          <p>
            We do not believe in opaque bureaucracy or complicated software dashboards. You simply contact us directly, outline your requirements, agree on straightforward pricing, and receive verified results.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <WorkWithUsButton size="md" variant="gold" label="Let's Work Together" />
            <WhatsAppButton size="md" label="Message on WhatsApp" />
          </div>
        </div>

        {/* Executive Workstation Visual */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/35 shadow-2xl">
            <img
              src="/src/assets/images/about_workspace_1790788265673.jpg"
              alt="Professional executive workstation"
              className="w-full h-auto object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-[#f3de8a] flex items-center justify-between">
              <span>Alpha Virtual Task Workspace</span>
              <span>Confidentiality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Operational Pillars */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
            Our Foundational Values
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-2">
            The Six Pillars of Our Work
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            Every deliverable we prepare is guided by these non-negotiable standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-[#d4af37]/40 transition-colors shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-[#d4af37]/30 flex items-center justify-center text-[#e5be53] mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#f3de8a] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Transparent Service Guarantee */}
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-[#d4af37]/30 text-center max-w-3xl mx-auto space-y-4 shadow-xl">
        <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
          Direct Relationship
        </span>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
          Ready to experience dependable virtual support?
        </h3>
        <p className="text-neutral-300 text-sm leading-relaxed max-w-xl mx-auto">
          Contact our team directly to discuss your project requirements. We work with clients across India (₹ INR) and globally ($ USD).
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <WorkWithUsButton size="lg" label="Let's Work Together" />
          <EmailButton size="lg" label="Email Us" />
        </div>
      </div>
    </div>
  );
};
