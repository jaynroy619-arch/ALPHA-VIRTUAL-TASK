import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Logo } from '../UI/Logo';
import { WorkWithUsButton } from '../ContactButtons/ContactButtons';
import { BUSINESS_INFO, createWhatsAppLink, createEmailLink, createPhoneLink } from '../../utils/contactLinks';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Frequently Asked Questions', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const featuredServices = [
    { label: 'Data Entry', path: '/services/data-entry' },
    { label: 'Data Cleaning', path: '/services/data-cleaning' },
    { label: 'Excel & Spreadsheet Services', path: '/services/excel-spreadsheet-services' },
    { label: 'Web Research & Data Collection', path: '/services/web-research' },
    { label: 'Audio/Video Transcription', path: '/services/transcription' },
    { label: 'Document Translation', path: '/services/translation' },
    { label: 'Proofreading & Editing', path: '/services/proofreading' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Refund / Cancellation Policy', path: '/refund-policy' },
  ];

  return (
    <footer className="relative bg-black border-t border-neutral-800/80 text-neutral-300 pt-16 pb-12 overflow-hidden">
      {/* Subtle gold ambient glow in footer corner */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" showTagline={true} />

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm pt-2">
              Accurate, organized, and confidential virtual and data solutions designed to help businesses and individuals save time and work efficiently.
            </p>

            <div className="pt-2">
              <WorkWithUsButton size="sm" variant="gold" label="Work With Us" />
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-[#e5be53]" />
              <span>Strict client data confidentiality guaranteed</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#f3de8a] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Services */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#f3de8a] mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {featuredServices.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#f3de8a] mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-neutral-300 hover:text-emerald-400 transition-colors group"
                >
                  <div className="w-7 h-7 rounded bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wider">WhatsApp</span>
                    <span className="font-mono text-xs">{BUSINESS_INFO.phoneDisplay}</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={createEmailLink()}
                  className="flex items-center gap-2.5 text-neutral-300 hover:text-[#f3de8a] transition-colors group"
                >
                  <div className="w-7 h-7 rounded bg-neutral-900 border border-[#d4af37]/30 flex items-center justify-center text-[#e5be53] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wider">Email</span>
                    <span className="font-mono text-xs truncate">{BUSINESS_INFO.email}</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={createPhoneLink()}
                  className="flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wider">Phone</span>
                    <span className="font-mono text-xs">{BUSINESS_INFO.phoneDisplay}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {currentYear} {BUSINESS_INFO.name}. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-neutral-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="text-neutral-500 text-[11px]">
            Primary Currency: {BUSINESS_INFO.primaryCurrency} · Secondary: {BUSINESS_INFO.secondaryCurrency}
          </div>
        </div>
      </div>
    </footer>
  );
};
