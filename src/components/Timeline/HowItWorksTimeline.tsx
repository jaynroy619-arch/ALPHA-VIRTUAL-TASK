import React from 'react';
import { MousePointerClick, MessageSquare, ListTodo, Handshake, CheckCircle2 } from 'lucide-react';
import { WorkWithUsButton } from '../ContactButtons/ContactButtons';

export interface TimelineStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: '01',
    title: 'Choose a Service',
    description: 'Explore our 14 data & virtual solutions and select what matches your current operational goals.',
    icon: MousePointerClick,
  },
  {
    number: '02',
    title: 'Contact Us',
    description: 'Click "Work With Us" to connect directly via WhatsApp, Email, or a quick phone call. Zero sign-up.',
    icon: MessageSquare,
  },
  {
    number: '03',
    title: 'Discuss Your Requirements',
    description: 'Share your file samples, scope, formatting rules, and expected timelines in plain conversation.',
    icon: ListTodo,
  },
  {
    number: '04',
    title: 'Agree on Price & Delivery',
    description: 'Receive a clear, transparent quote in ₹ INR or $ USD with confirmed milestone delivery dates.',
    icon: Handshake,
  },
  {
    number: '05',
    title: 'Get Your Work Completed',
    description: 'We execute the project with dual-pass QA, keeping you updated until final handover.',
    icon: CheckCircle2,
  },
];

export const HowItWorksTimeline: React.FC<{ showCTA?: boolean }> = ({ showCTA = true }) => {
  return (
    <div className="w-full">
      {/* Desktop Horizontal View (hidden on small screens) */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-4 relative">
        {/* Connecting Line */}
        <div className="absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-[#d4af37]/10 via-[#d4af37]/40 to-[#d4af37]/10 -z-0" />

        {TIMELINE_STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              {/* Number & Icon node */}
              <div className="relative mb-5">
                <div className="w-20 h-20 rounded-2xl bg-neutral-950 border border-[#d4af37]/30 group-hover:border-[#d4af37] flex flex-col items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all duration-300">
                  <span className="text-[10px] font-mono font-bold text-[#e5be53] tracking-widest">
                    {step.number}
                  </span>
                  <Icon className="w-6 h-6 text-white group-hover:text-[#f3de8a] transition-colors mt-0.5" />
                </div>
              </div>

              <h4 className="text-base font-bold text-white mb-2 group-hover:text-[#f3de8a] transition-colors">
                {step.title}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile Vertical View (shown on mobile & tablet) */}
      <div className="lg:hidden relative pl-6 border-l-2 border-[#d4af37]/30 space-y-8 ml-3">
        {TIMELINE_STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="relative group">
              {/* Step indicator bullet */}
              <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-lg bg-neutral-950 border border-[#d4af37] flex items-center justify-center text-[#e5be53] font-mono text-xs font-bold shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                {step.number}
              </div>

              <div className="bg-neutral-950/80 border border-neutral-800 rounded-xl p-4 sm:p-5 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-5 h-5 text-[#e5be53]" />
                  <h4 className="text-base font-bold text-white">{step.title}</h4>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {showCTA && (
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 rounded-2xl bg-neutral-950 border border-[#d4af37]/30 max-w-xl mx-auto">
            <div className="text-left">
              <div className="text-sm font-bold text-white">Ready to begin your project?</div>
              <div className="text-xs text-neutral-400">Discuss your requirements with zero commitment.</div>
            </div>
            <WorkWithUsButton size="md" variant="gold" label="Start Now" />
          </div>
        </div>
      )}
    </div>
  );
};
