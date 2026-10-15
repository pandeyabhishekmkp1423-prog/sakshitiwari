import React from 'react';
import { Link } from 'react-router-dom';
import { BotanicalSprig, WashiTape, ColorSwatches, SectionDivider } from './Decorations';

const skills = [
  { label: "Screen acting & character work", detail: "Film, OTT & commercials" },
  { label: "Kathak & expressive Abhinaya", detail: "Classical dance & gesture" },
  { label: "Movement & choreography", detail: "Stage, music video & camera" },
  { label: "Brand storytelling", detail: "Beauty, fashion & lifestyle" },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28 relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        <div className="md:col-span-7 space-y-6 relative">
          <span 
            className="absolute -top-12 left-0 text-7xl sm:text-8xl font-serif text-[#FBE8E5]/70 -z-10 select-none pointer-events-none font-bold"
            aria-hidden="true"
          >
            Expertise
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] leading-tight">
            A practiced craft, <span className="text-[#D97373] italic">a curious eye</span>
          </h2>

          <p className="text-stone-600 text-base font-light leading-relaxed">
            From character preparation to camera movement, each discipline is grounded in practice and adapted to the needs of the production.
          </p>

          <div className="space-y-0 pt-2">
            {skills.map((item) => (
              <div key={item.label} className="expertise-row">
                <span>{item.label}</span>
                <span>{item.detail}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              to="/media-kit"
              className="px-8 py-3 rounded-full bg-[#D97373] hover:bg-[#C86262] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-lg"
            >
              View collaboration details
            </Link>
          </div>
        </div>

        <div className="md:col-span-5 relative flex justify-center">
          <BotanicalSprig className="absolute -top-12 -left-6 w-24 h-64 text-[#93786B]/30 hidden sm:block pointer-events-none" />

          <div className="relative w-72 sm:w-80 h-[430px] rounded-t-full rounded-b-[40px] bg-[#FBE8E5] p-3 shadow-xl">
            <div className="w-full h-full rounded-t-full rounded-b-[32px] overflow-hidden bg-stone-200">
              <img 
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85"
                alt="Demo portrait placeholder for a creator portfolio"
                className="profile-photo profile-photo-expertise"
              />
            </div>

            <WashiTape className="absolute -bottom-3 -left-3 w-28 h-7 rotate-[-6deg]" />
            <ColorSwatches className="absolute top-1/2 -right-4 -translate-y-1/2" />
          </div>
        </div>

      </div>
      <SectionDivider fill="#FFF5EC" />
    </section>
  );
}
