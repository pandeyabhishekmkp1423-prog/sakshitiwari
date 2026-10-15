import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionDivider } from './Decorations';

export default function About({ isPage = false }) {
  return (
    <section id="about" className={`relative py-20 md:py-28 overflow-hidden ${isPage ? 'about-page-section' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        <div className={`md:col-span-5 flex justify-center ${isPage ? 'order-2 md:order-1' : 'order-2 md:order-1'}`}>
          <div className="about-collage">
            <img
              src="/grace-motion-expression-collage.png"
              alt="Grace, Motion and Expression collage featuring Sakshi Tiwari's acting, dance, and movement work"
              loading={isPage ? 'eager' : 'lazy'}
            />
          </div>
        </div>

        <div className="md:col-span-7 space-y-6 order-1 md:order-2 relative">
          {isPage ? (
            <>
              <p className="eyebrow">ABOUT SAKSHI TIWARI</p>
              <h1 className="about-page-title">Expressive grace,<br /><em>unfiltered screen presence.</em></h1>
              <p className="about-lead">Actor, Kathak dancer, and movement artist working across screen performance, dance, and visual storytelling.</p>
              <p className="about-body">Sakshi brings classical movement and contemporary screen presence together through character-led performance, expressive choreography, and editorial work. Her practice is grounded in Kathak and Abhinaya, with an eye for gesture, rhythm, and emotional detail.</p>
              <div className="about-disciplines" aria-label="Creative disciplines">
                <div><span>01</span><strong>Screen acting</strong></div>
                <div><span>02</span><strong>Kathak & Abhinaya</strong></div>
                <div><span>03</span><strong>Movement & brand stories</strong></div>
              </div>
              <div className="about-actions">
                <Link to="/work" className="button button-dark">Explore selected work <ArrowRight /></Link>
                <Link to="/contact" className="text-link">Discuss a project <ArrowUpRight /></Link>
              </div>
            </>
          ) : (
            <>
              <span className="about-watermark" aria-hidden="true">About Her</span>
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
            </>
          )}
        </div>
      </div>
      <SectionDivider fill="#FFF5EC" />
    </section>
  );
}
