import React from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { ShieldCheck, Zap, BarChart3, Rocket, Compass, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'دراسة السوق وتشخيص النبض',
      desc: 'نحلل صفحاتك ومنافسيك ونحدد نقاط القوة والفجوات لوضع خطة تسويقية محكمة تناسب جمهورك المستهدف.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'صناعة الهوية والمحتوى الجذاب',
      desc: 'نبتكر أفكاراً وتصاميم وفيديوهات ريلز تخطف الانتباه وتبرز علامتك التجارية برقي واحترافية.',
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'إطلاق الإعلانات الممولة والاستهداف',
      desc: 'نوجه إعلاناتك للفئات الأكثر استعداداً للشراء مع اختبار مستمر للرسائل الإعلانية لخفض التكاليف.',
      icon: Zap,
    },
    {
      num: '04',
      title: 'مضاعفة المبيعات وتحقيق النتائج',
      desc: 'نحوّل الزوار إلى عملاء فعليين ونراقب الأرقام أسبوعياً لنضمن نمواً مستداماً وأرباحاً حقيقية.',
      icon: Rocket,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#080d1e]/60 border-y border-white/5">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/40 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-4">
            <span>نبذة عن الوكالة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
            من نحن؟
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            {AGENCY_INFO.aboutDetailed}
          </p>
        </div>

        {/* Feature Grid / Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">سرعة ومرونة في التنفيذ</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              السوشيال ميديا تتحرك بسرعة البرق. نحن نقتنص الفرص والتريندات لصالح علامتك ونلتزم بالمواعيد المحددة بدقة متناهية.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">قرارات مبنية على الأرقام</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              لا نعتمد على الحدس أو الصدفة؛ نقيس تكلفة العميل (CAC)، العائد الإعلاني (ROAS)، ونسب التحويل لتوجيه ميزانيتك بذكاء.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">شراكة حقيقية وشفافية</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              نتعامل مع كل مشروع كأنه مشروعنا الخاص؛ شفافية كاملة في الحسابات الإعلانية وتواصل مستمر لإبقائك دائماً في الصورة.
            </p>
          </div>
        </div>

        {/* 4-Step Process Section */}
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 p-8 sm:p-10">
          <div className="text-right mb-10">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider font-mono">
              منهجية العمل المتكاملة
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              كيف نعيد النبض لمشروعك خطوة بخطوة؟
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative p-6 rounded-xl bg-[#060913]/60 border border-white/10 hover:border-cyan-400/30 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black font-mono text-purple-400/40">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
