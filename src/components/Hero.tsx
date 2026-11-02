import React from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  Mail,
  Sparkles,
  CheckCircle2,
  Activity,
  Flame,
  Zap,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Glowing Purple and Cyan Animated Background Effects */}
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-purple-600/25 rounded-full blur-[140px] pointer-events-none animate-pulse-ring" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse-ring" style={{ animationDelay: '1.5s' }} />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[850px] h-[420px] bg-gradient-to-b from-indigo-900/40 via-purple-900/20 to-transparent blur-[120px] pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Brand Logo Banner Lockup */}
        <div className="flex items-center justify-start mb-6 animate-entrance">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-lg shadow-purple-950/20 group hover:border-purple-500/40 transition-all duration-300">
            {/* Animated Social Pulse Logo */}
            <div className="relative flex items-center justify-center">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-0.5 shadow-md shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full bg-[#080d1e] rounded-[9px] flex items-center justify-center">
                  <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                </div>
              </div>
              <span className="absolute -inset-1 rounded-xl bg-purple-500/30 blur-sm -z-10 animate-ping opacity-40 pointer-events-none" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white tracking-tight">Social Pulse</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-xs font-mono text-cyan-300/90">{AGENCY_INFO.englishSlogan}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column with Smooth Entrance Animations */}
          <div className="lg:col-span-7 text-right">
            {/* 1. Animated Welcome Headline: "مشروعك يستحق يكون في المقدمة!" */}
            <div className="animate-entrance">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-950/60 to-cyan-950/40 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-bold mb-4 shadow-sm">
                <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
                <span className="bg-gradient-to-r from-purple-200 via-white to-cyan-200 bg-clip-text text-transparent">
                  مشروعك يستحق يكون في المقدمة!
                </span>
              </div>
            </div>

            {/* Main Slogan Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.25] sm:leading-[1.18] mb-6 animate-entrance-delay-1">
              <span className="block text-white">بنرجّع النبض</span>
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                لمشروعك! 🚀
              </span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal animate-entrance-delay-2">
              {AGENCY_INFO.description} نساعد علامتك التجارية على الهيمنة وجذب العملاء الحقيقيين من خلال تصميمات عصرية، محتوى هادف، وإعلانات ممولة تحقق أعلى عائد استثماري.
            </p>

            {/* Action Buttons: Prominent Button opens WhatsApp */}
            <div className="flex flex-wrap items-center gap-4 mb-10 animate-entrance-delay-2">
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-xl shadow-xl shadow-purple-600/35 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform" />
                <span>ابدأ مشروعك الآن</span>
                <ArrowLeft className="w-5 h-5 rtl:scale-x-100 group-hover:-translate-x-1.5 transition-transform" />
              </a>

              <button
                onClick={() => scrollTo('#services')}
                className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>اكتشف خدماتنا</span>
              </button>
            </div>

            {/* Quick Direct Contacts Strip */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400">
              <span className="font-semibold text-slate-300">تواصل فوري:</span>
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 hover:bg-emerald-900/50 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>واتساب: {AGENCY_INFO.phoneFormatted}</span>
              </a>
              <a
                href={AGENCY_INFO.telUrl}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>اتصال: {AGENCY_INFO.phoneFormatted}</span>
              </a>
              <a
                href={AGENCY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877F2]/10 border border-[#1877F2]/30 text-[#1877F2] hover:bg-[#1877F2]/20 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-[#1877F2]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>فيسبوك</span>
              </a>
              <a
                href={AGENCY_INFO.mailUrl}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>{AGENCY_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Visual Showcase Column */}
          <div className="lg:col-span-5 relative animate-float-slow">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glowing backplate frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 opacity-40 blur-xl"></div>

              {/* Main Command Center Card */}
              <div className="relative rounded-2xl overflow-hidden bg-[#090e22] border border-white/15 shadow-2xl">
                {/* Hero Studio Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/src/assets/images/hero_digital_agency_1793627191383.jpg"
                    alt="Social Pulse Digital Marketing Command Center"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e22] via-[#090e22]/30 to-transparent" />
                  
                  {/* Floating Live Indicator Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="font-semibold">غرفة العمليات الإعلانية الحية</span>
                  </div>
                </div>

                {/* Card Content & Interactive Pulse Graph */}
                <div className="p-6 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <span>معدل نمو الحملات الحية</span>
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                      </h3>
                      <p className="text-xs text-slate-400">مؤشرات الأداء اللحظية (ROAS & Reach)</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      +285% نمو
                    </span>
                  </div>

                  {/* SVG Pulse Wave Graphic with dynamic pulse */}
                  <div className="relative h-16 w-full flex items-center justify-center bg-white/[0.02] rounded-xl p-2 border border-white/5 overflow-hidden">
                    <svg viewBox="0 0 300 60" className="w-full h-full stroke-cyan-400 fill-none" preserveAspectRatio="none">
                      <path
                        d="M0 30 L50 30 L70 30 L85 10 L100 50 L115 15 L130 45 L145 30 L180 30 L195 5 L210 55 L225 20 L240 40 L255 30 L300 30"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-cyan-500/20 pointer-events-none" />
                  </div>

                  {/* Micro features check list */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>إعلانات ممولة عالية التحويل</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>تصاميم جرافيك ومونتاج احترافي</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>إدارة شاملة لرسائل العملاء</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>تقارير أداء دورية بالأرقام</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
