import React from 'react';
import { Database, FileSpreadsheet, Cpu, Search, ShieldCheck, CheckCircle2 } from 'lucide-react';
import heroWorkspaceImg from '../../assets/images/hero_data_workspace_1790788239281.jpg';

export const HeroVisual25D: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto perspective-container select-none">
      {/* Ambient Gold Halo */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#d4af37]/20 via-[#e5be53]/10 to-transparent rounded-3xl blur-2xl opacity-60 pointer-events-none" />

      {/* Main Container / Base Card */}
      <div className="relative rounded-2xl bg-gradient-to-b from-neutral-900/90 via-neutral-950/95 to-black border border-[#d4af37]/30 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.1)] overflow-hidden">
        {/* Background Image Texture */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity overflow-hidden">
          <img
            src={heroWorkspaceImg}
            alt="Data workspace visual texture"
            className="w-full h-full object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Central Orchestration Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-neutral-800 pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
            <span className="text-xs font-mono tracking-wider text-neutral-300 uppercase">
              Operational Workspace
            </span>
          </div>
          <div className="text-[11px] font-mono text-[#f3de8a] bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/30">
            Alpha Verified
          </div>
        </div>

        {/* Floating 2.5D Stack Cards representing the 5 key services */}
        <div className="relative z-10 space-y-3">
          {/* Card 1: DATA ENTRY */}
          <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-[#d4af37]/60 transition-all duration-300 shadow-md flex items-center justify-between group transform hover:-translate-y-0.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#e5be53] group-hover:scale-105 transition-transform">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-wide">DATA ENTRY</div>
                <div className="text-[11px] text-neutral-400">Structured Alphanumeric Ingestion</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified 100%</span>
            </div>
          </div>

          {/* Card 2: EXCEL & SPREADSHEETS (Featured with Gold Accent) */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-[#d4af37]/50 shadow-[0_4px_20px_rgba(212,175,55,0.12)] flex items-center justify-between group transform hover:-translate-y-0.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
                  EXCEL
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#d4af37]/20 text-[#f3de8a] font-mono">
                    Dynamic Formulas
                  </span>
                </div>
                <div className="text-[11px] text-neutral-400">XLOOKUP · Models · Pivot Summaries</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-[#f3de8a] font-mono">
              <span>Ready</span>
            </div>
          </div>

          {/* Card 3: DATA PROCESSING */}
          <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 shadow-md flex items-center justify-between group transform hover:-translate-y-0.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:scale-105 transition-transform">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-wide">DATA PROCESSING</div>
                <div className="text-[11px] text-neutral-400">Filtering, Parsing & Batch Aggregation</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Organized</span>
            </div>
          </div>

          {/* Card 4: WEB RESEARCH */}
          <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 shadow-md flex items-center justify-between group transform hover:-translate-y-0.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[#e5be53] group-hover:scale-105 transition-transform">
                <Search className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-wide">WEB RESEARCH</div>
                <div className="text-[11px] text-neutral-400">Verified Portals, Leads & Catalogs</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Multi-Source</span>
            </div>
          </div>

          {/* Card 5: QUALITY ASSURANCE */}
          <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-300 shadow-md flex items-center justify-between group transform hover:-translate-y-0.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#e5be53] group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-wide">QUALITY ASSURANCE</div>
                <div className="text-[11px] text-neutral-400">Checklist Audit & Dual-Pass Sign-off</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Strict Standard</span>
            </div>
          </div>
        </div>

        {/* Bottom Mini Metric Bar */}
        <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            Dual-Pass Verification
          </span>
          <span className="text-neutral-500">₹ INR / $ USD Supported</span>
        </div>
      </div>
    </div>
  );
};
