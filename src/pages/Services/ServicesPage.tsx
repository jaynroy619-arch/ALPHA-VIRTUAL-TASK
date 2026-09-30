import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Check } from 'lucide-react';
import { SERVICES_DATA, SERVICE_CATEGORIES } from '../../data/services';
import { ServiceCard } from '../../components/ServiceCard/ServiceCard';
import { WorkWithUsButton, WhatsAppButton } from '../../components/ContactButtons/ContactButtons';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Services');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory =
        selectedCategory === 'All Services' || service.category === selectedCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.whatWeHelpWith.some((item) =>
          item.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
          Comprehensive Solutions
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-2 mb-4 tracking-tight">
          Our Services
        </h1>
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed text-balance">
          Professional solutions for everyday data and virtual work requirements. Delivered with accuracy, confidentiality, and dependable turnaround.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="mb-10 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Tabs (Segmented Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-950 border border-neutral-800 rounded-xl w-full md:w-auto">
            {SERVICE_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#d4af37] text-neutral-950 font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services or tasks..."
              className="w-full bg-neutral-950 border border-neutral-800 focus:border-[#d4af37]/60 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#d4af37]/50"
            />
          </div>
        </div>

        {/* Counter */}
        <div className="text-xs text-neutral-500 flex items-center justify-between px-1">
          <span>Showing {filteredServices.length} of {SERVICES_DATA.length} services</span>
          {selectedCategory !== 'All Services' && (
            <button
              onClick={() => {
                setSelectedCategory('All Services');
                setSearchQuery('');
              }}
              className="text-[#f3de8a] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-neutral-950 rounded-2xl border border-neutral-800 p-8">
          <p className="text-neutral-300 text-base font-semibold mb-2">No matching services found</p>
          <p className="text-neutral-500 text-xs mb-4">
            Try adjusting your search query or reset the category filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All Services');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-lg bg-neutral-900 text-white text-xs font-semibold border border-neutral-700 hover:border-neutral-500"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Bottom Customized Request Banner */}
      <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-[#d4af37]/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 max-w-xl">
          <h3 className="text-xl font-bold text-white">Need a custom combination of tasks?</h3>
          <p className="text-xs sm:text-sm text-neutral-400">
            Many clients require multi-step workflows like Web Research + Data Entry + Excel Formatting. We package custom scopes tailored to your exact workflow.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <WorkWithUsButton size="md" variant="gold" label="Request Custom Scope" />
          <WhatsAppButton size="md" label="WhatsApp" />
        </div>
      </div>
    </div>
  );
};
