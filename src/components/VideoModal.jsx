import React from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-stone-900 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-stone-800">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-video bg-black">
          <video 
            src={video.videoSrc || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"} 
            controls 
            autoPlay 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-6 bg-stone-950 text-white">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#D97373]">
            {video.genre || "Performance Reel"}
          </span>
          <h3 className="font-serif text-xl font-bold mt-1">
            {video.title}
          </h3>
          <p className="text-xs text-stone-400 mt-1 font-light">
            Performed by Sakshi Tiwari. Available for casting auditions and live choreography testing.
          </p>
        </div>
      </div>
    </div>
  );
}
