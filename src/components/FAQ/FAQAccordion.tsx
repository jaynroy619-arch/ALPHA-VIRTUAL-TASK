import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQItem } from '../../data/faq';
import { WorkWithUsButton } from '../ContactButtons/ContactButtons';

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenId?: string;
  showSupportCallout?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  defaultOpenId = 'services-overview',
  showSupportCallout = true,
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3.5">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-xl transition-all duration-200 border ${
              isOpen
                ? 'bg-neutral-900/90 border-[#d4af37]/50 shadow-[0_4px_25px_rgba(212,175,55,0.08)]'
                : 'bg-neutral-950/70 hover:bg-neutral-900/60 border-neutral-800/80 hover:border-neutral-700'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded-xl"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? 'text-[#e5be53]' : 'text-neutral-500'}`} />
                <span className={`text-base font-semibold transition-colors ${isOpen ? 'text-[#f3de8a]' : 'text-white'}`}>
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-neutral-400 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#e5be53]' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 mt-1">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}

      {showSupportCallout && (
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Have a specific question about your project?</h4>
              <p className="text-xs text-neutral-400">Ask us directly on WhatsApp or Email for an immediate answer.</p>
            </div>
          </div>
          <WorkWithUsButton size="sm" variant="gold" label="Ask Our Team" />
        </div>
      )}
    </div>
  );
};
