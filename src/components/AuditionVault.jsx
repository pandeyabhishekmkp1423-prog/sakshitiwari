import React from 'react';
import { Play, Sparkles, Video } from 'lucide-react';
import { StarSparkle, SectionDivider } from './Decorations';

const auditionTapes = [
  {
    id: 1,
    title: "Dramatic Monologue: The Estranged Sister",
    genre: "Method Acting / Drama",
    duration: "1:45",
    thumbnail: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=85",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: 2,
    title: "Classical Kathak: Tarana & Abhinaya Piece",
    genre: "Traditional Dance",
    duration: "2:30",
    thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: 3,
    title: "Bollywood Hook Step & Energy Routine",
    genre: "Commercial Dance",
    duration: "1:15",
    thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  }
];

export default function AuditionVault({ onPlayVideo }) {
  return (
    <section id="vault" className="py-20 md:py-28 relative bg-[#FDF8F5]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          <span 
            className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl sm:text-8xl font-serif text-[#FBE8E5]/70 -z-10 select-none pointer-events-none font-bold whitespace-nowrap"
            aria-hidden="true"
          >
            Vault
          </span>
          <StarSparkle className="w-5 h-5 text-[#D97373] mx-auto mb-3" />
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1E1E]">
            Audition Tape <span className="text-[#D97373] italic">Vault</span>
          </h2>
          <p className="text-stone-500 text-sm sm:text-base mt-2 font-light">
            Direct access to raw self-tapes, rhythm choreography, and high-energy performance reels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {auditionTapes.map((tape) => (
            <div 
              key={tape.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#F3D2CE]/60 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative aspect-video overflow-hidden bg-stone-900 cursor-pointer" onClick={() => onPlayVideo(tape)}>
                <img 
                  src={tape.thumbnail} 
                  alt={tape.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#D97373] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D97373] group-hover:text-white transition-all shadow-md">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/60 text-white text-[11px] font-mono">
                  {tape.duration}
                </div>
              </div>

              <div className="p-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D97373]">
                  {tape.genre}
                </span>
                <h3 className="font-serif text-lg font-bold text-stone-900 mt-1 line-clamp-1">
                  {tape.title}
                </h3>

                <button 
                  onClick={() => onPlayVideo(tape)}
                  className="mt-4 w-full py-2 rounded-xl bg-[#FDF8F5] border border-[#F3D2CE] hover:bg-[#D97373] hover:text-white text-xs font-semibold text-stone-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Play Audition Tape</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
      <SectionDivider fill="#FDF3F0" />
    </section>
  );
}
