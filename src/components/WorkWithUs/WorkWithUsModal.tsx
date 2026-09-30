import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { useWorkWithUs } from '../../context/WorkWithUsContext';
import { WorkWithUsChoice } from './WorkWithUsChoice';

export const WorkWithUsModal: React.FC = () => {
  const { isOpen, selectedService, closeWorkWithUs } = useWorkWithUs();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeWorkWithUs();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeWorkWithUs]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={closeWorkWithUs}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-neutral-950 border border-[#d4af37]/40 rounded-2xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.15)] z-10 my-8">
        {/* Close Button */}
        <button
          onClick={closeWorkWithUs}
          className="absolute top-4 right-4 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#f3de8a] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Connect Directly</span>
          </div>

          <h2 id="modal-title" className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
            Let's Work Together
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base text-balance">
            Tell us what you need and choose the easiest way to contact us. No sign-up required.
          </p>
        </div>

        {/* Interactive Choice Grid */}
        <WorkWithUsChoice serviceName={selectedService} onActionTaken={closeWorkWithUs} />
      </div>
    </div>
  );
};
