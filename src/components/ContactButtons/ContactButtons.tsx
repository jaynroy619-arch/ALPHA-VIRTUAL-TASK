import React from 'react';
import { MessageSquare, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { createWhatsAppLink, createEmailLink, createPhoneLink, BUSINESS_INFO } from '../../utils/contactLinks';
import { useWorkWithUs } from '../../context/WorkWithUsContext';

interface ContactButtonProps {
  serviceName?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export const WhatsAppButton: React.FC<ContactButtonProps> = ({
  serviceName,
  className = '',
  size = 'md',
  label = 'WhatsApp',
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }[size];

  return (
    <a
      href={createWhatsAppLink(serviceName)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white font-medium transition-all duration-200 border border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] ${sizeClasses} ${className}`}
      aria-label={`Chat on WhatsApp at ${BUSINESS_INFO.phoneDisplay}`}
    >
      <MessageSquare className="w-4 h-4 shrink-0" />
      <span>{label}</span>
    </a>
  );
};

export const EmailButton: React.FC<ContactButtonProps> = ({
  serviceName,
  className = '',
  size = 'md',
  label = 'Email',
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }[size];

  return (
    <a
      href={createEmailLink(serviceName)}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white font-medium transition-all duration-200 border border-neutral-700 hover:border-[#d4af37]/50 ${sizeClasses} ${className}`}
      aria-label={`Send email to ${BUSINESS_INFO.email}`}
    >
      <Mail className="w-4 h-4 shrink-0 text-[#e5be53]" />
      <span>{label}</span>
    </a>
  );
};

export const CallButton: React.FC<ContactButtonProps> = ({
  className = '',
  size = 'md',
  label = 'Call',
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }[size];

  return (
    <a
      href={createPhoneLink()}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white font-medium transition-all duration-200 border border-neutral-700 hover:border-neutral-500 ${sizeClasses} ${className}`}
      aria-label={`Call phone number ${BUSINESS_INFO.phoneDisplay}`}
    >
      <Phone className="w-4 h-4 shrink-0 text-neutral-300" />
      <span>{label}</span>
    </a>
  );
};

interface WorkWithUsButtonProps extends ContactButtonProps {
  variant?: 'gold' | 'outline' | 'subtle';
}

export const WorkWithUsButton: React.FC<WorkWithUsButtonProps> = ({
  serviceName,
  className = '',
  size = 'md',
  label = 'Work With Us',
  variant = 'gold',
}) => {
  const { openWorkWithUs } = useWorkWithUs();

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-semibold',
    md: 'px-5 py-2.5 text-sm font-semibold',
    lg: 'px-7 py-3.5 text-base font-bold',
  }[size];

  const variantClasses = {
    gold: 'bg-gradient-to-r from-[#c59424] via-[#e5be53] to-[#c59424] hover:brightness-110 text-black shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_28px_rgba(212,175,55,0.4)] border border-[#fff2be]/40',
    outline: 'bg-transparent text-white border border-[#d4af37]/60 hover:bg-[#d4af37]/10 hover:border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.1)]',
    subtle: 'bg-neutral-900/90 text-neutral-200 hover:text-white border border-neutral-800 hover:border-[#d4af37]/50',
  }[variant];

  return (
    <button
      type="button"
      onClick={() => openWorkWithUs(serviceName)}
      className={`inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 cursor-pointer active:scale-95 ${sizeClasses} ${variantClasses} ${className}`}
    >
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4" />
    </button>
  );
};
