import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { Logo } from '../UI/Logo';
import { WorkWithUsButton } from '../ContactButtons/ContactButtons';
import { BUSINESS_INFO, createWhatsAppLink } from '../../utils/contactLinks';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-b border-white/[0.05]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Brand Wordmark & Monogram */}
          <div className="flex items-center shrink-0">
            <Logo size="md" showTagline={false} />
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#f3de8a] font-semibold'
                      : 'text-neutral-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Contact (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-xs font-mono text-neutral-400 hover:text-neutral-200 transition-colors flex items-center gap-1.5"
              title="Direct call line"
            >
              <Phone className="w-3.5 h-3.5 text-[#e5be53]" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <WorkWithUsButton size="sm" />
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-600/30"
              aria-label="Direct WhatsApp message"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-[#d4af37]/30 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="flex flex-col space-y-1 mb-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2.5 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#d4af37]/15 text-[#f3de8a] font-semibold border-l-2 border-[#d4af37]'
                      : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                  }`
                }
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-800/80 space-y-3">
            <div className="text-xs text-neutral-400 flex items-center justify-between px-1">
              <span>Direct Hotline:</span>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#f3de8a] font-mono font-medium">
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>

            <WorkWithUsButton className="w-full" size="md" />
          </div>
        </div>
      )}
    </header>
  );
};
