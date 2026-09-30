import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  linkToHome?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showTagline = false,
  linkToHome = true,
  className = '',
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  const titleSizes = {
    sm: 'text-sm tracking-wider',
    md: 'text-base sm:text-lg tracking-wider',
    lg: 'text-xl sm:text-2xl tracking-widest',
  }[size];

  const content = (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* 2.5D Gold & Obsidian Monogram Emblem */}
      <div
        className={`relative shrink-0 ${iconDimensions} rounded-lg bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-[#d4af37]/40 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:border-[#d4af37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff5cb" />
              <stop offset="40%" stopColor="#e5be53" />
              <stop offset="80%" stopColor="#c59424" />
              <stop offset="100%" stopColor="#f3de8a" />
            </linearGradient>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Subtle geometric shield */}
          <polygon
            points="20,3 36,11 36,29 20,37 4,29 4,11"
            stroke="url(#goldGradient)"
            strokeWidth="1.2"
            strokeDasharray="2 2"
            opacity="0.5"
          />
          {/* Stylized Greek Alpha / Capital 'A' */}
          <path
            d="M20 7L8 31H14L17 24H23L26 31H32L20 7Z"
            fill="url(#goldGradient)"
            filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.8))"
          />
          <polygon points="20,13 18,19 22,19" fill="#080808" />
          {/* Golden Task Checkmark Accent */}
          <path
            d="M17 20L21 24L28 15"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-display font-extrabold uppercase text-white ${titleSizes} flex items-center gap-1.5`}
          >
            Alpha <span className="gold-gradient-text font-bold">Virtual Task</span>
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] sm:text-xs tracking-widest uppercase text-neutral-400 font-medium mt-0.5">
            Your Trust Our Priority
          </span>
        )}
      </div>
    </div>
  );

  if (linkToHome) {
    return (
      <Link to="/" className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/50 rounded">
        {content}
      </Link>
    );
  }

  return content;
};
