import React from 'react';
import { SERVICES, AGENCY_INFO } from '../data/agencyData';
import {
  Share2,
  Palette,
  Megaphone,
  Sparkles,
  Bot,
  Check,
  MessageCircle,
  ArrowLeft,
  Cpu,
} from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Share2':
        return Share2;
      case 'Palette':
        return Palette;
      case 'Megaphone':
        return Megaphone;
      case 'Sparkles':
        return Sparkles;
      case 'Bot':
        return Bot;
      default:
        return Sparkles;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>خدماتنا المتخصصة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
            حلول تسويقية متكاملة تُحدث فرقاً حقيقياً
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            نجمع بين الإبداع البصري والاستراتيجية الرقمية المدروسة لنقدم لمشروعك باقة خدمات تدفع بعملك نحو القمة والانتشار.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.icon);
            const isAI = service.id === 'ai-content-creation';

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 text-right ${
                  isAI
                    ? 'bg-gradient-to-b from-[#12193b]/90 via-[#0d1430]/90 to-[#090e21]/90 border-2 border-cyan-500/40 hover:border-cyan-400/70 shadow-xl shadow-cyan-950/30'
                    : 'bg-[#090e21]/80 hover:bg-[#0c1430]/95 border border-white/10 hover:border-purple-500/40 shadow-xl shadow-purple-950/20'
                }`}
              >
                {/* Glow accent bar */}
                <div
                  className={`absolute top-0 right-8 w-28 h-1 rounded-b-full transition-opacity ${
                    isAI
                      ? 'bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-400 opacity-90 group-hover:opacity-100'
                      : 'bg-gradient-to-r from-purple-500 to-cyan-400 opacity-60 group-hover:opacity-100'
                  }`}
                />

                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md ${
                        isAI
                          ? 'bg-gradient-to-br from-cyan-500/25 via-purple-600/30 to-indigo-600/30 border border-cyan-400/40 text-cyan-300 group-hover:scale-110 group-hover:text-white'
                          : 'bg-gradient-to-br from-purple-900/60 to-cyan-900/40 border border-white/15 text-cyan-300 group-hover:scale-110 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${
                        isAI
                          ? 'bg-cyan-950/60 border-cyan-500/30 text-cyan-300'
                          : 'bg-white/5 border border-white/10 text-slate-300'
                      }`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className={`text-xl font-extrabold mb-1 transition-colors ${
                      isAI
                        ? 'text-white group-hover:text-cyan-300'
                        : 'text-white group-hover:text-purple-300'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-400/80 uppercase tracking-wider block mb-3">
                    {service.englishTitle}
                  </span>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-white/5">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <button
                    onClick={() => handleInquire(service.title)}
                    className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white rounded-xl transition-all duration-200 cursor-pointer ${
                      isAI
                        ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md shadow-cyan-600/20'
                        : 'bg-white/10 hover:bg-purple-600'
                    }`}
                  >
                    <span>طلب الخدمة</span>
                    <ArrowLeft className="w-3.5 h-3.5 rtl:scale-x-100" />
                  </button>

                  <a
                    href={`https://wa.me/201080267630?text=${encodeURIComponent(
                      `مرحباً Social Pulse، أود الاستفسار عن تفاصيل خدمة: ${service.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="استفسار واتساب مباشر"
                    className="p-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-cyan-900/40 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-right">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              هل تحتاج إلى استشارة تسويقية مخصصة لمشروعك؟
            </h4>
            <p className="text-sm text-slate-300">
              تحدث مباشرة مع فريق Social Pulse وسنساعدك في تحديد الخطوات التسويقية الأنسب لزيادة مبيعاتك.
            </p>
          </div>
          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 whitespace-nowrap transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>تواصل عبر واتساب</span>
          </a>
        </div>
      </div>
    </section>
  );
};
