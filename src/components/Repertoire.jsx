import React, { useState } from 'react';
import { Film, Sparkles, HeartHandshake, TrendingUp, ArrowRight } from 'lucide-react';
import { StarSparkle, SectionDivider } from './Decorations';

const cards = [
  {
    id: 1,
    icon: Film,
    title: "Screen Acting",
    subtitle: "DRAMATIC REPERTOIRE",
    desc: "Feature films, Hindi cinema, OTT series, independent narratives, and expressive close-up performance.",
  },
  {
    id: 2,
    icon: Sparkles,
    title: "Dance & Movement",
    subtitle: "CHOREOGRAPHY & STAGE",
    desc: "Kathak, Abhinaya, expressive movement, choreography, and dance for stage or camera.",
  },
  {
    id: 3,
    icon: HeartHandshake,
    title: "Commercial & Ads",
    subtitle: "BRAND COLLABORATIONS",
    desc: "On-camera brand storytelling for beauty, lifestyle, fashion, and digital campaigns.",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Editorial Fashion",
    subtitle: "LOOKBOOKS & PRINT",
    desc: "Fashion editorials, lookbooks, beauty stories, and camera-ready portrait work.",
  }
];

export default function Repertoire({ onSelectCard }) {
  const [activeCard, setActiveCard] = useState(2); // Card 2 highlighted by default matching reference image

  return (
    <section id="repertoire" className="py-20 md:py-28 relative bg-[#FFF5EC]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          <span 
            className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl sm:-top-10 sm:text-8xl font-serif text-[#FBE8E5]/70 -z-10 select-none pointer-events-none font-bold whitespace-nowrap"
            aria-hidden="true"
          >
            What She Brings
          </span>
          <StarSparkle className="w-5 h-5 text-[#D97373] mx-auto mb-3" />
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1E1E]">
            From screen to <span className="text-[#D97373] italic">storytelling</span>
          </h2>
          <p className="text-stone-500 text-sm sm:text-base mt-2 font-light">
            Screen acting, classical dance, creator campaigns, and editorial work with one expressive point of view.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            const isHighlighted = activeCard === card.id;

            return (
              <div
                key={card.id}
                role="button"
                tabIndex={0}
                onMouseEnter={() => setActiveCard(card.id)}
                onClick={() => onSelectCard?.(card)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelectCard?.(card);
                  }
                }}
                className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-between min-h-[290px] group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D97373] ${
                  isHighlighted 
                    ? 'bg-[#D97373] text-white shadow-xl -translate-y-2' 
                    : 'bg-white border border-[#F3D2CE]/60 text-stone-700 hover:border-[#D97373]/50 shadow-sm'
                }`}
              >
                {isHighlighted && (
                  <StarSparkle className="absolute -bottom-3 -left-3 w-5 h-5 text-[#D97373]" />
                )}

                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                    isHighlighted ? 'bg-white/20 text-white' : 'bg-[#FBE8E5] text-[#D97373]'
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className={`text-[10px] uppercase tracking-widest font-semibold mb-1 ${
                    isHighlighted ? 'text-rose-100' : 'text-stone-400'
                  }`}>
                    {card.subtitle}
                  </span>

                  <h3 className="font-serif text-xl font-bold mb-3">
                    {card.title}
                  </h3>

                  <p className={`text-xs leading-relaxed font-light ${
                    isHighlighted ? 'text-white/90' : 'text-stone-500'
                  }`}>
                    {card.desc}
                  </p>
                </div>

                <div className={`mt-6 inline-flex items-center gap-1.5 text-xs font-semibold ${
                  isHighlighted ? 'text-white' : 'text-[#D97373]'
                }`}>
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
      <SectionDivider fill="#FFFFFF" />
    </section>
  );
}
