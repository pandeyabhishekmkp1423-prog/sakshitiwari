import React from 'react';

export const StarSparkle = ({ className = "w-6 h-6 text-[#D97373]" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0L14.4 8.6L23 11L14.4 13.4L12 22L9.6 13.4L1 11L9.6 8.6L12 0Z" />
  </svg>
);

export const BotanicalSprig = ({ className = "w-28 h-64 text-[#93786B]/40" }) => (
  <svg viewBox="0 0 100 240" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M50 235 Q48 150 52 10" />
    <path d="M50 200 Q20 185 30 170 C35 160 48 185 50 185" />
    <path d="M51 175 Q75 160 68 145 C60 135 52 162 51 162" />
    <path d="M50 140 Q25 125 35 110 C42 100 49 125 50 125" />
    <path d="M51 110 Q78 95 68 80 C60 70 51 98 51 98" />
    <path d="M50 75 Q28 60 38 48 C45 38 49 62 50 62" />
    <path d="M51 45 Q70 30 62 18 C56 12 51 35 51 35" />
  </svg>
);

export const WashiTape = ({ className = "" }) => (
  <div 
    className={`washi-strip bg-white/75 backdrop-blur-[2px] shadow-sm border border-stone-200/50 ${className}`} 
    aria-hidden="true" 
  />
);

export const ColorSwatches = ({ className = "" }) => (
  <div className={`flex flex-col gap-2 ${className}`} aria-hidden="true">
    <span className="w-3.5 h-3.5 rounded-full bg-[#FCE5E2] border border-white shadow-sm" />
    <span className="w-3.5 h-3.5 rounded-full bg-[#D97373] border border-white shadow-sm" />
    <span className="w-3.5 h-3.5 rounded-full bg-[#4A1D24] border border-white shadow-sm" />
  </div>
);

export const SectionDivider = ({ fill }) => (
  <svg
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
    className="absolute bottom-0 left-0 z-0 h-12 w-full pointer-events-none md:h-16"
    aria-hidden="true"
  >
    <path d="M0 0 C360 100 1080 100 1440 0 V100 H0 Z" fill={fill} />
  </svg>
);
