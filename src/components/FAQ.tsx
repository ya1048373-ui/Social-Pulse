import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'ما الخدمات التي تقدمها Social Pulse؟',
      answer:
        'نقدم منظومة تسويق رقمي متكاملة تشمل: إدارة صفحات السوشيال ميديا باحترافية، تصميمات الجرافيك والمونتاج الإبداعي للريلز، إدارة الحملات الإعلانية الممولة (Media Buying) على Meta و TikTok و Google، بناء وتطوير الهوية التجارية، وصناعة المحتوى بالذكاء الاصطناعي 🤖.'
    },
    {
      question: 'كيف أطلب خدمة؟',
      answer:
        'يمكنك طلب أي خدمة بكل سهولة عبر النقر على زر "ابدأ مشروعك الآن" أو محادثتنا مباشرة على الواتساب (01080267630)، أو من خلال ملء نموذج التواصل الموجود أسفل الصفحة. سيتواصل معك أحد مستشارينا لمناقشة تفاصيل مشروعك والبدء فوراً.'
    },
    {
      question: 'هل تقدمون إدارة صفحات السوشيال ميديا؟',
      answer:
        'نعم، نوفر إدارة شاملة لحساباتك تشمل: وضع خطة النشر وجدول المحتوى الشهري، كتابة نصوص إعلانية وتفاعلية (Copywriting)، تصميم البوستات والريلز، والرد على الرسائل والتعليقات باحترافية، مع تقديم تقارير أداء دورية لمتابعة النتائج.'
    },
    {
      question: 'هل تقدمون تصميمات احترافية؟',
      answer:
        'بالتأكيد! نمتلك فريق تصميم إبداعي متخصص في أحدث صيحات الجرافيك: تصاميم بوستات وستوريز متناسقة مع هويتك، بنرات إعلانات ممولة بأعلى نسب نقر، تصاميم كاروسيل تثقيفية، ومونتاج فيديوهات ريلز وسيناريوهات تصوير تخطف العين وتبرز فخامة علامتك.'
    },
    {
      question: 'هل يمكنكم إدارة الإعلانات الممولة؟',
      answer:
        'نعم، إدارة الإعلانات الممولة هي إحدى أقوى ركائزنا؛ ندير حملاتك بدقة على فيسبوك، إنستغرام، تيك توك، وجوجل. نقوم باستهداف الجمهور المناسب بدقة، وإجراء اختبارات A/B Testing مستمرة لتقليل تكلفة الاستحواذ وتحقيق أعلى عائد ممكن على الإنفاق الإعلاني (ROAS).'
    },
    {
      question: 'كيف يمكنني التواصل معكم؟',
      answer:
        'يسعدنا دائماً تواصلك معنا عبر القنوات المباشرة التالية:\n• محادثة واتساب سريعة ومباشرة: 01080267630\n• اتصال هاتفي مباشر: 01080267630\n• البريد الإلكتروني الرسمي: emadahmed2300@gmail.com\n• أو عبر إرسال بياناتك في نموذج التواصل وسنرد عليك في غضون دقائق.'
    }
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-[#070b1a]/70 border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-right mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-purple-950/50 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>الأسئلة الشائعة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            كل ما تود معرفته عن Social Pulse
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            إجابات واضحة ودقيقة عن أكثر الأسئلة شيوعاً حول خدماتنا، طريقة العمل، وكيفية بدء مشروعك معنا.
          </p>
        </div>

        {/* Expandable Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0b1029] border-purple-500/40 shadow-xl shadow-purple-950/20'
                    : 'bg-[#080d22]/80 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span className="text-base sm:text-lg font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-purple-600 text-white rotate-180 shadow-md shadow-purple-600/30'
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-right border-t border-white/5 pt-4 text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#0a1228] to-cyan-950/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5 text-right">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              لديك سؤال آخر أو ترغب في استشارة خاصة؟
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              تحدث مباشرة مع فريقنا عبر الواتساب وسنجيب على كافة استفساراتك فوراً.
            </p>
          </div>
          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20 whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>تواصل معنا عبر واتساب</span>
          </a>
        </div>
      </div>
    </section>
  );
};
