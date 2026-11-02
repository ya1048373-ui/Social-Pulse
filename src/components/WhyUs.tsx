import React from 'react';
import { WHY_CHOOSE_US, AGENCY_INFO } from '../data/agencyData';
import { Lightbulb, Brush, Target, Users, Award, CheckCircle2, TrendingUp, Sparkles, MessageCircle } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return Lightbulb;
      case 'Brush':
        return Brush;
      case 'Target':
        return Target;
      case 'Users':
        return Users;
      case 'Award':
        return Award;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 relative bg-[#070b1a]/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/40 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-4">
            <span>ميزتنا التنافسية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
            لماذا يختار أصحاب المشاريع وكالة Social Pulse؟
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            في سوق مليء بالوعود التقليدية، نلتزم بتقديم قيمة حقيقية تدعم استقرار عملك وتساعدك على التوسع بثقة وأمان.
          </p>
        </div>

        {/* 5 Core Reasons Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-cyan-400/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 text-right flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-900/60 to-purple-900/60 border border-white/15 flex items-center justify-center text-cyan-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-white/5 px-2.5 py-1 rounded-md">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">المعيار المعتمد:</span>
                  <span className="font-semibold text-cyan-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    {item.stat}
                  </span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Interactive Commitment Summary */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-950/60 via-indigo-950/40 to-[#080d1a] border border-purple-500/30 text-right flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-200 text-xs font-semibold mb-4">
                <TrendingUp className="w-4 h-4 text-purple-300" />
                <span>عهدنا لعملائنا</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">بنرجّع النبض لمشروعك</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                لا نترك حساباتك تعاني من الركود أو ضعف التفاعل؛ نعمل كفريق تسويق متكامل معك حتى تحقق أهدافك وتفوق توقعاتك.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-white/10">
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>ناقش تحديات مشروعك معنا</span>
              </a>
            </div>
          </div>
        </div>

        {/* Agency vs Traditional Agency Comparison Table */}
        <div className="rounded-3xl bg-[#090e21] border border-white/10 p-6 sm:p-8 overflow-hidden">
          <div className="text-right mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              ما الفرق بين Social Pulse والوكالات التقليدية؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              مقارنة صريحة توضح الفرق في منهجية العمل والاهتمام الحقيقي بالنتائج
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs text-slate-400">
                  <th className="py-3 px-4 font-semibold">وجه المقارنة</th>
                  <th className="py-3 px-4 font-bold text-cyan-300 bg-cyan-950/20 rounded-t-lg">
                    وكالة Social Pulse 🚀
                  </th>
                  <th className="py-3 px-4 font-semibold text-slate-400">الوكالات والشركات التقليدية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">المحتوى والتصاميم</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-cyan-950/10">
                    تصاميم مخصصة ومبتكرة تخاطب عميلك مباشرة
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">قوالب كانفا مكررة ومستهلكة</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">إدارة الإعلانات</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-cyan-950/10">
                    استراتيجيات Funnels واختبارات لتقليل تكلفة الشراء
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">ترويج عشوائي لمنشورات (Boost Post)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">مقياس النجاح</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-cyan-950/10">
                    المبيعات الفعلية، الرسائل المؤكدة، والعائد ROAS
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">أرقام وهمية وإعجابات بلا جدوى</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">التواصل والدعم</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-cyan-950/10">
                    مدير حساب مباشر، رد سريع، وشفافية كاملة
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">ردود متأخرة وانقطاع في التواصل</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
