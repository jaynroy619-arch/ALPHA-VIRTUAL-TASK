import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 text-center max-w-xl mx-auto px-4">
      <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-[#d4af37]/40 flex items-center justify-center text-[#e5be53] mx-auto mb-6 shadow-[0_0_25px_rgba(212,175,55,0.15)]">
        <Search className="w-8 h-8" />
      </div>

      <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
        404 · Page Not Found
      </span>
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2 mb-3">
        Looking for a Service?
      </h1>
      <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
        The page you requested does not exist or has been moved. Explore our core services or return to the homepage.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#c59424] via-[#e5be53] to-[#c59424] text-black font-semibold text-sm hover:brightness-110 shadow-lg"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 text-white font-semibold text-sm border border-neutral-700 hover:border-neutral-500"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>View All Services</span>
        </Link>
      </div>
    </div>
  );
};
