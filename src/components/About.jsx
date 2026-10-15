import React from 'react';
import { SectionDivider } from './Decorations';

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        <div className="md:col-span-5 flex justify-center order-2 md:order-1">
          <div className="about-collage">
            <img
              src="/grace-motion-expression-collage.png"
              alt="Grace, Motion and Expression collage featuring Sakshi Tiwari's acting, dance, and movement work"
              loading="lazy"
            />
          </div>
        </div>

        <div className="md:col-span-7 space-y-6 order-1 md:order-2 relative">
          <span 
            className="absolute -top-12 left-0 text-7xl sm:text-8xl font-serif text-[#FBE8E5]/70 -z-10 select-none pointer-events-none font-bold"
            aria-hidden="true"
          >
            About Her
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] leading-tight">
            Expressive Grace, <br />
            <span className="text-[#D97373] italic">Unfiltered Screen Presence</span>
          </h2>

          <p className="text-stone-600 text-base leading-relaxed font-light">
            Sakshi Tiwari is an Indian actor, Kathak dancer, and movement artist who merges rhythmic fluidity with intuitive dramatic instinct. From subtle micro-expressions in front of the camera to high-tempo choreography, she brings discipline and a clear point of view to every project.
          </p>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-[#D97373] text-white text-center shadow-md">
              <div className="font-serif text-xl sm:text-2xl font-bold">Screen</div>
              <div className="text-xs uppercase tracking-wider text-rose-100 font-medium mt-1">Acting</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FDF8F5] border border-[#F3D2CE] text-center shadow-sm">
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#4A1D24]">Kathak</div>
              <div className="text-xs uppercase tracking-wider text-stone-500 font-medium mt-1">Dance & Abhinaya</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FDF8F5] border border-[#F3D2CE] text-center shadow-sm">
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#4A1D24]">Creator</div>
              <div className="text-xs uppercase tracking-wider text-stone-500 font-medium mt-1">Brand Stories</div>
            </div>
          </div>

        </div>

      </div>
      <SectionDivider fill="#FFF5EC" />
    </section>
  );
}
