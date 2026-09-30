import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { MAIN_FAQS, FAQItem } from '../../data/faq';
import { FAQAccordion } from '../../components/FAQ/FAQAccordion';
import { WorkWithUsButton, WhatsAppButton, EmailButton } from '../../components/ContactButtons/ContactButtons';

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Getting Started', 'Workflow & Files', 'Pricing & Payment', 'Delivery & Revisions', 'Support'];

  const filteredFAQs = useMemo(() => {
    return MAIN_FAQS.filter((faq) => {
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
          Answers & Guidance
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-2 mb-4 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed text-balance">
          Find instant answers to common questions about services, file submission, pricing, currencies, and turnaround.
        </p>
      </div>

      {/* Search and Category Filters */}
      <div className="mb-10 space-y-4">
        {/* Search Input */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or keywords (e.g. pricing, revisions, files, INR, account)..."
            className="w-full bg-neutral-950 border border-neutral-800 focus:border-[#d4af37]/60 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#d4af37]/50 shadow-inner"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#d4af37] text-neutral-950 font-bold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      {filteredFAQs.length > 0 ? (
        <FAQAccordion items={filteredFAQs} showSupportCallout={true} />
      ) : (
        <div className="text-center py-12 bg-neutral-950 rounded-2xl border border-neutral-800 p-8 max-w-md mx-auto">
          <p className="text-neutral-300 text-sm font-semibold mb-2">No matching questions found</p>
          <p className="text-neutral-500 text-xs mb-4">
            Have a custom query? Contact our team directly on WhatsApp or email.
          </p>
          <div className="flex justify-center gap-3">
            <WhatsAppButton size="sm" label="Ask on WhatsApp" />
            <EmailButton size="sm" label="Send Email" />
          </div>
        </div>
      )}
    </div>
  );
};
