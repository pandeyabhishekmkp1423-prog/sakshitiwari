import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionDivider } from './Decorations';

export default function Hero() {
  return (
    <section id="home" className="relative pt-12 pb-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBE8E5] text-[#D97373] text-xs tracking-wider uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Actor, Dancer & Digital Creator</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E1E1E] leading-[1.15] font-normal">
            Sakshi Tiwari:<br />
            <span className="italic text-[#D97373] font-semibold">Stories in Motion</span>
          </h1>

          <p className="text-stone-600 text-base sm:text-lg max-w-xl font-light leading-relaxed">
            Indian actress, Kathak dancer, and movement artist bringing expressive screen presence to film, OTT stories, choreography, and brand campaigns.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-[#D97373] hover:bg-[#C86262] text-white text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Casting & Collaborations
            </Link>

            <Link to="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A1D24] hover:text-[#D97373]">
              Explore her work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="md:col-span-5 relative flex items-center justify-center md:justify-end">
          <div className="hero-collage-frame">
            <img
              src="/Whimsical%20Pink%20Floral%20Portrait%20Collage.png"
              alt="Whimsical pink floral portrait collage of Sakshi Tiwari"
              className="hero-collage"
            />
          </div>
        </div>

      </div>
      <SectionDivider fill="#FFFFFF" />
    </section>
  );
}
