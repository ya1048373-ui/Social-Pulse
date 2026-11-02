import React from 'react';
import { AGENCY_INFO, SERVICES } from '../data/agencyData';
import { Activity, Phone, Mail, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04060d] border-t border-white/10 text-right overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 p-0.5 shadow-md shadow-purple-500/30">
                <div className="w-full h-full bg-[#080d1e] rounded-[10px] flex items-center justify-center">
                  <Activity className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">Social Pulse</span>
            </div>

            <div className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
              {AGENCY_INFO.englishSlogan}
            </div>

            <p className="text-sm font-semibold text-purple-300">
              {AGENCY_INFO.slogan}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {AGENCY_INFO.description} نساعد العلامات التجارية على النمو والتميز في العالم الرقمي من خلال استراتيجيات تسويقية مبتكرة وتصميمات إبداعية وحملات إعلانية تحقق نتائج حقيقية.
            </p>

            {/* Direct Connect Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href={AGENCY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="صفحتنا على فيسبوك"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-[#1877F2] text-xs font-semibold transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-[#1877F2]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>فيسبوك</span>
              </a>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>واتساب: {AGENCY_INFO.phoneFormatted}</span>
              </a>

              <a
                href={AGENCY_INFO.telUrl}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{AGENCY_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              روابط الموقع
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={() => scrollTo('#hero')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#about')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  من نحن؟
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#services')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  خدماتنا
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#why-us')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  لماذا نحن؟
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#faq')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  الأسئلة الشائعة
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  تواصل معنا
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              خدمات الوكالة
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="hover:text-purple-300 transition-colors text-right cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              بيانات التواصل المباشر
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-xs">الهاتف والواتساب:</span>
                  <a href={AGENCY_INFO.telUrl} className="font-mono hover:text-white transition-colors">
                    {AGENCY_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-xs">البريد الإلكتروني:</span>
                  <a href={AGENCY_INFO.mailUrl} className="font-mono hover:text-white transition-colors">
                    {AGENCY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 fill-[#1877F2] shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <div>
                  <span className="text-slate-400 block text-xs">صفحتنا على فيسبوك:</span>
                  <a
                    href={AGENCY_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    facebook.com/SocialPulse
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-400 leading-relaxed">
                {AGENCY_INFO.workingHours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>Copyright © 2026</span>
            <span className="text-white font-bold">Social Pulse</span>
            <span>. جميع الحقوق محفوظة.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 font-mono">YOUR BRAND. OUR PULSE.</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>للأعلى</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
