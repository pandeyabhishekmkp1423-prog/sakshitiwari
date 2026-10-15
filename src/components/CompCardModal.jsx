import React from 'react';
import { X, Check } from 'lucide-react';

export default function CompCardModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FDF8F5] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#F3D2CE] shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>

        <span className="text-[10px] uppercase font-bold tracking-widest text-[#D97373]">Official Casting Specifications</span>
        <h3 className="font-serif text-2xl font-bold text-[#4A1D24] mt-1">Sakshi Tiwari</h3>
        <p className="text-xs text-stone-500 mb-6">Actress • Movement Artist • Commercial Model</p>

        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-2xl bg-white border border-[#F3D2CE]/60">
            <span className="text-stone-400 block uppercase font-medium">Height</span>
            <span className="text-stone-900 font-bold text-sm">5' 5" (165 cm)</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-[#F3D2CE]/60">
            <span className="text-stone-400 block uppercase font-medium">Playing Age</span>
            <span className="text-stone-900 font-bold text-sm">20 – 27 Years</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-[#F3D2CE]/60">
            <span className="text-stone-400 block uppercase font-medium">Languages</span>
            <span className="text-stone-900 font-bold text-sm">Hindi, English</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-[#F3D2CE]/60">
            <span className="text-stone-400 block uppercase font-medium">Movement Disciplines</span>
            <span className="text-stone-900 font-bold text-sm">Kathak, Bollywood</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-stone-200">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-700 block mb-2">Key Competencies</span>
          <ul className="text-xs text-stone-600 space-y-1.5">
            <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#D97373]" /> Camera micro-expression nuance for cinema & digital screens</li>
            <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#D97373]" /> Rapid choreography pick-up (under 4 hours per routine)</li>
            <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#D97373]" /> Pan-India travel availability on priority notice</li>
          </ul>
        </div>

        <div className="mt-6 flex justify-end">
          <a 
            href="#contact" 
            onClick={onClose}
            className="w-full py-2.5 rounded-full bg-[#D97373] text-white font-semibold text-xs tracking-wider uppercase text-center hover:bg-[#C86262]"
          >
            Request Audition Sides
          </a>
        </div>
      </div>
    </div>
  );
}
