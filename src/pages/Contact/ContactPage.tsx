import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MessageSquare, Phone, Send, ArrowUpRight, Copy, Check, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppLink, createEmailLink, createPhoneLink } from '../../utils/contactLinks';
import { SERVICES_DATA } from '../../data/services';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    message: '',
  });

  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const note = `From: ${formData.name || 'Anonymous'}\nEmail: ${formData.email || 'N/A'}\nPhone: ${formData.phone || 'N/A'}\nRequirement: ${formData.message || 'I would like to discuss my requirements.'}`;
    const url = createWhatsAppLink(formData.service || undefined, note);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = createEmailLink(formData.service || undefined, {
      name: formData.name,
      phone: formData.phone,
      message: formData.message,
    });
    window.location.href = url;
  };

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
          Connect Directly
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-2 mb-4 tracking-tight">
          Let&apos;s Talk About Your Project
        </h1>
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed text-balance">
          Reach out through your preferred channel. We discuss project requirements, sample data, timelines, and provide transparent quotes in ₹ INR and $ USD.
        </p>
      </div>

      {/* 3 Prominent Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* WHATSAPP CARD */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950/90 border border-emerald-500/35 hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between shadow-xl">
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
              <MessageSquare className="w-6 h-6" />
            </div>

            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-1">
              WhatsApp (Fastest)
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Chat on WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-5 leading-relaxed">
              Ideal for quick scope questions, sharing files, screenshots, and instant voice notes.
            </p>

            <div className="flex items-center justify-between text-xs text-neutral-300 font-mono bg-neutral-900/80 px-3.5 py-2.5 rounded-lg border border-neutral-800 mb-6">
              <span>{BUSINESS_INFO.phoneDisplay}</span>
              <button
                type="button"
                onClick={() => handleCopy(BUSINESS_INFO.phoneDisplay, 'whatsapp')}
                className="text-neutral-400 hover:text-white p-1"
                title="Copy WhatsApp Number"
              >
                {copiedType === 'whatsapp' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <a
            href={createWhatsAppLink(formData.service || undefined)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.25)]"
          >
            <span>WhatsApp Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* EMAIL CARD */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950/90 border border-[#d4af37]/35 hover:border-[#d4af37] transition-all duration-300 flex flex-col justify-between shadow-xl">
          <div>
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-[#d4af37]/30 flex items-center justify-center text-[#e5be53] mb-5">
              <Mail className="w-6 h-6" />
            </div>

            <div className="text-xs font-mono uppercase tracking-wider text-[#f3de8a] font-bold mb-1">
              Email
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Formal Inquiries
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-5 leading-relaxed">
              Perfect for detailed project specifications, vendor agreements, and multi-file attachments.
            </p>

            <div className="flex items-center justify-between text-xs text-neutral-300 font-mono bg-neutral-900/80 px-3.5 py-2.5 rounded-lg border border-neutral-800 mb-6 truncate">
              <span className="truncate">{BUSINESS_INFO.email}</span>
              <button
                type="button"
                onClick={() => handleCopy(BUSINESS_INFO.email, 'email')}
                className="text-neutral-400 hover:text-white p-1 ml-2 shrink-0"
                title="Copy Email"
              >
                {copiedType === 'email' ? (
                  <Check className="w-4 h-4 text-[#e5be53]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <a
            href={createEmailLink(formData.service || undefined)}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#c59424] via-[#e5be53] to-[#c59424] hover:brightness-110 text-black font-semibold text-sm transition-all duration-200 shadow-[0_0_20px_rgba(212,175,55,0.25)]"
          >
            <span>Email Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* PHONE CARD */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950/90 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between shadow-xl">
          <div>
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white mb-5">
              <Phone className="w-6 h-6" />
            </div>

            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-1">
              Direct Phone Call
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Speak to Coordinator
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-5 leading-relaxed">
              Available {BUSINESS_INFO.operatingHours} for urgent deadlines or initial consultations.
            </p>

            <div className="flex items-center justify-between text-xs text-neutral-300 font-mono bg-neutral-900/80 px-3.5 py-2.5 rounded-lg border border-neutral-800 mb-6">
              <span>{BUSINESS_INFO.phoneDisplay}</span>
              <button
                type="button"
                onClick={() => handleCopy(BUSINESS_INFO.phoneDisplay, 'phone')}
                className="text-neutral-400 hover:text-white p-1"
                title="Copy Phone Number"
              >
                {copiedType === 'phone' ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <a
            href={createPhoneLink()}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-sm transition-all duration-200 border border-neutral-600"
          >
            <span>Call Us</span>
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Optional Interactive Inquiry Form (Connects directly to WhatsApp or Mailto) */}
      <div className="max-w-3xl mx-auto rounded-3xl bg-neutral-950 border border-neutral-800/80 p-6 sm:p-10 shadow-2xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-mono text-[#f3de8a] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Inquiry Builder</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
            Draft Your Project Details
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Fill in your project information below. Clicking an action button will automatically format your message and open your WhatsApp or Email client directly. No server storage needed.
          </p>
        </div>

        <form className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium text-neutral-300 mb-1.5 uppercase tracking-wider font-mono">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rahul Sharma / Alex Smith"
                className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="block text-xs font-medium text-neutral-300 mb-1.5 uppercase tracking-wider font-mono">
                Your Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. name@company.com"
                className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone / WhatsApp */}
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-medium text-neutral-300 mb-1.5 uppercase tracking-wider font-mono">
                Phone / WhatsApp Number
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +91 98765 43210"
                className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="contact-service" className="block text-xs font-medium text-neutral-300 mb-1.5 uppercase tracking-wider font-mono">
                Interested Service
              </label>
              <select
                id="contact-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none cursor-pointer"
              >
                <option value="">General Project Discussion</option>
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.name}>
                    {srv.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Message */}
          <div>
            <label htmlFor="contact-message" className="block text-xs font-medium text-neutral-300 mb-1.5 uppercase tracking-wider font-mono">
              Project Description / Scope / Deadlines
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about the volume (e.g. 5,000 records, 50-page PDF, 2 hours audio), preferred delivery format (Excel, Word, CSV), and any specific deadlines..."
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none resize-none"
            />
          </div>

          {/* Dual Submission Options */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleEmailSubmit}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c59424] via-[#e5be53] to-[#c59424] hover:brightness-110 text-black font-semibold text-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Send via Email</span>
            </button>
          </div>

          <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Direct connection · No data stored on intermediate servers
            </span>
            <span>Alpha Virtual Task</span>
          </div>
        </form>
      </div>
    </div>
  );
};
