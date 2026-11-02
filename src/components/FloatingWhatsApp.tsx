import React, { useState } from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#090e22] border border-emerald-500/30 text-white text-xs shadow-2xl backdrop-blur-md animate-fade-in">
          <span className="font-medium">تواصل معنا عبر واتساب الآن! ⚡</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="إغلاق التنبيه"
            className="p-1 text-slate-400 hover:text-white rounded"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button with Pulse Effect */}
      <a
        href={AGENCY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب 01080267630"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/30 hover:scale-110 transition-all duration-300"
      >
        {/* Glowing pulse rings */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-50 animate-ping pointer-events-none" />
        <span className="absolute -inset-2 rounded-full bg-emerald-500/20 blur-sm pointer-events-none" />

        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </div>
  );
};
