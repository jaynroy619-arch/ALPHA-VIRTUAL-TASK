import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, ArrowUpRight, Copy, Check, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppLink, createEmailLink, createPhoneLink } from '../../utils/contactLinks';

interface WorkWithUsChoiceProps {
  serviceName?: string;
  className?: string;
  onActionTaken?: () => void;
}

export const WorkWithUsChoice: React.FC<WorkWithUsChoiceProps> = ({
  serviceName,
  className = '',
  onActionTaken,
}) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const whatsappUrl = createWhatsAppLink(serviceName);
  const emailUrl = createEmailLink(serviceName);
  const phoneUrl = createPhoneLink();

  const handleCopy = (text: string, type: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Service Context Notice */}
      {serviceName && (
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs sm:text-sm text-[#f3de8a]">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
          <span>Inquiry Focus: <strong className="text-white font-semibold">{serviceName}</strong></span>
        </div>
      )}

      {/* 3 Contact Choice Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 1. WHATSAPP */}
        <div className="relative group p-5 sm:p-6 rounded-xl bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 shadow-lg flex flex-col justify-between">
          <div className="absolute -top-3 right-4 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            Fastest Response
          </div>

          <div>
            <div className="w-12 h-12 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              WhatsApp
            </h3>
            <p className="text-xs text-neutral-400 mb-3">
              Chat directly with our team for quick scopes, file sharing & rapid quotes.
            </p>

            <div className="flex items-center justify-between text-xs text-neutral-300 font-mono bg-neutral-950/80 px-3 py-2 rounded border border-neutral-800 mb-4">
              <span>{BUSINESS_INFO.phoneDisplay}</span>
              <button
                onClick={(e) => handleCopy(BUSINESS_INFO.phoneDisplay, 'whatsapp', e)}
                title="Copy WhatsApp number"
                className="text-neutral-400 hover:text-white p-1"
                type="button"
              >
                {copiedType === 'whatsapp' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onActionTaken}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
          >
            <span>WhatsApp Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2. EMAIL */}
        <div className="relative group p-5 sm:p-6 rounded-xl bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300 shadow-lg flex flex-col justify-between">
          <div className="absolute -top-3 right-4 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[#d4af37]/20 text-[#f3de8a] border border-[#d4af37]/40">
            Formal Briefs
          </div>

          <div>
            <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-[#d4af37]/40 flex items-center justify-center text-[#e5be53] mb-4 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <Mail className="w-6 h-6" />
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              Email
            </h3>
            <p className="text-xs text-neutral-400 mb-3">
              Send formal briefs, sample workbooks, project attachments & tenders.
            </p>

            <div className="flex items-center justify-between text-xs text-neutral-300 font-mono bg-neutral-950/80 px-3 py-2 rounded border border-neutral-800 mb-4 truncate">
              <span className="truncate">{BUSINESS_INFO.email}</span>
              <button
                onClick={(e) => handleCopy(BUSINESS_INFO.email, 'email', e)}
                title="Copy email address"
                className="text-neutral-400 hover:text-white p-1 shrink-0 ml-2"
                type="button"
              >
                {copiedType === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-[#e5be53]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          <a
            href={emailUrl}
            onClick={onActionTaken}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#c59424] via-[#e5be53] to-[#c59424] hover:brightness-110 text-black text-sm font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(212,175,55,0.25)]"
          >
            <span>Email Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3. PHONE CALL */}
        <div className="relative group p-5 sm:p-6 rounded-xl bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-neutral-700 hover:border-neutral-500 transition-all duration-300 shadow-lg flex flex-col justify-between">
          <div className="absolute -top-3 right-4 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-neutral-800 text-neutral-300 border border-neutral-700">
            Direct Line
          </div>

          <div>
            <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-200 mb-4 group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" />
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              Direct Phone Call
            </h3>
            <p className="text-xs text-neutral-400 mb-3">
              Speak directly with our coordinator to talk through urgent or complex projects.
            </p>

            <div className="flex items-center justify-between text-xs text-neutral-300 font-mono bg-neutral-950/80 px-3 py-2 rounded border border-neutral-800 mb-4">
              <span>{BUSINESS_INFO.phoneDisplay}</span>
              <button
                onClick={(e) => handleCopy(BUSINESS_INFO.phoneDisplay, 'phone', e)}
                title="Copy phone number"
                className="text-neutral-400 hover:text-white p-1"
                type="button"
              >
                {copiedType === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-neutral-200" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          <a
            href={phoneUrl}
            onClick={onActionTaken}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-semibold transition-all duration-200 border border-neutral-600"
          >
            <span>Call Us</span>
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Trust & Currency Badges */}
      <div className="mt-6 pt-5 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#e5be53]" />
          <span>Hours: {BUSINESS_INFO.operatingHours}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-neutral-300">
            <span className="text-[#e5be53] font-semibold">Primary:</span> {BUSINESS_INFO.primaryCurrency}
          </span>
          <span className="text-neutral-600">|</span>
          <span className="flex items-center gap-1 text-neutral-300">
            <span className="text-[#e5be53] font-semibold">Secondary:</span> {BUSINESS_INFO.secondaryCurrency}
          </span>
          <span className="text-neutral-600">|</span>
          <span className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Confidential & Direct</span>
          </span>
        </div>
      </div>
    </div>
  );
};
