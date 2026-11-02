import React, { useState, useEffect } from 'react';
import { AGENCY_INFO, SERVICES } from '../data/agencyData';
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || '');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    if (initialService) setService(initialService);
  }, [initialService]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = 'يرجى كتابة الاسم بالكامل';
    } else if (name.trim().length < 3) {
      newErrors.name = 'الاسم يجب أن يكون 3 أحرف على الأقل';
    }

    if (!phone.trim()) {
      newErrors.phone = 'يرجى إدخال رقم الهاتف أو الواتساب';
    } else if (!/^[0-9+()-\s]{8,18}$/.test(phone.trim())) {
      newErrors.phone = 'يرجى إدخال رقم هاتف صحيح';
    }

    if (!service) {
      newErrors.service = 'يرجى تحديد الخدمة المطلوبة';
    }

    if (!message.trim()) {
      newErrors.message = 'يرجى كتابة نبذة سريعة عن مشروعك وما تحتاجه';
    } else if (message.trim().length < 8) {
      newErrors.message = 'يرجى كتابة تفاصيل أكثر وضوحاً';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(AGENCY_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const generateWhatsAppMessage = () => {
    const text = `مرحباً Social Pulse،
أنا: ${name}
رقم الهاتف: ${phone}
الخدمة المطلوبة: ${service}
تفاصيل مشروعي:
${message}`;
    return encodeURIComponent(text);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-purple-700/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-cyan-700/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-purple-950/40 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>تواصل معنا الآن</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            جاهز ترجّع النبض لمشروعك؟
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            فريقنا متواجد ومستعد لمساعدتك في تحقيق نتائج استثنائية. تواصل معنا مباشرة عبر القنوات المفضلة لديك أو املأ النموذج وسنرد عليك في غضون دقائق.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Direct Channels & Info Column */}
          <div className="lg:col-span-5 text-right space-y-6">
            {/* Primary WhatsApp Card */}
            <div className="p-7 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-[#0a1226] to-[#080d1e] border border-emerald-500/30 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30">
                  الرد الأسرع
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">محادثة واتساب فورية</h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed font-normal">
                تواصل معنا مباشرة عبر تطبيق الواتساب، وأرسل استفسارك لنبدأ النقاش فوراً حول خطة عملك.
              </p>
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>فتح المحادثة على واتساب: {AGENCY_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Direct Phone Call Card */}
            <div className="p-6 rounded-2xl bg-[#090e22] border border-white/10 hover:border-cyan-400/30 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">اتصال هاتفي مباشر</h4>
                    <span className="text-xs text-slate-400">تحدث مع مستشار التسويق مباشرة</span>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  title="نسخ الرقم"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {copiedPhone && (
                <div className="text-xs text-emerald-400 mb-2 font-medium">تم نسخ الرقم بنجاح!</div>
              )}

              <a
                href={AGENCY_INFO.telUrl}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>اتصل الآن: {AGENCY_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Official Facebook Contact Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1877F2]/15 via-[#090e24] to-[#080d1e] border-2 border-[#1877F2]/40 hover:border-[#1877F2]/70 transition-all shadow-xl shadow-[#1877F2]/10 group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#1877F2]/20 border border-[#1877F2]/40 flex items-center justify-center text-[#1877F2] group-hover:scale-105 transition-transform shadow-sm">
                    <svg className="w-6 h-6 fill-[#1877F2]" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>تابعنا على فيسبوك</span>
                    </h4>
                    <span className="text-xs text-cyan-400 font-mono">@SocialPulse</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#1877F2] bg-[#1877F2]/15 px-2.5 py-1 rounded-md border border-[#1877F2]/30">
                  Facebook
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed font-normal">
                تابع صفحتنا واكتشف آخر أخبار وخدمات Social Pulse.
              </p>
              <a
                href={AGENCY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-sm shadow-md shadow-[#1877F2]/30 hover:shadow-[#1877F2]/50 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>زيارة صفحتنا على Facebook</span>
                <ExternalLink className="w-4 h-4 rtl:-scale-x-100" />
              </a>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-[#090e22] border border-white/10 hover:border-purple-400/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">البريد الإلكتروني الرسمي</h4>
                  <span className="text-xs text-slate-400">للمقترحات والتعاقدات الرسمية</span>
                </div>
              </div>
              <a
                href={AGENCY_INFO.mailUrl}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors cursor-pointer font-mono"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>{AGENCY_INFO.email}</span>
              </a>
            </div>

            {/* Working Hours Card */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-xs text-slate-300">
              <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">مواعيد العمل:</span>
                <span>{AGENCY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#090e24] border border-white/15 shadow-2xl text-right">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  نموذج طلب الخدمة والاستفسار
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  املأ البيانات وسيقوم فريق Social Pulse بدراسة متطلبات مشروعك والتواصل معك فوراً.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-extrabold text-white mb-2">
                      تم استلام طلبك بنجاح! 🎉
                    </h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      شكراً لك يا <span className="text-cyan-300 font-bold">{name}</span>، سنقوم بمراجعة التفاصيل والاتصال بك على الرقم{' '}
                      <span className="text-purple-300 font-bold font-mono">{phone}</span> في غضون دقائق.
                    </p>
                  </div>

                  {/* Immediate WhatsApp Dispatch Option */}
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 max-w-md mx-auto text-right">
                    <div className="text-xs text-slate-400 mb-2 font-medium">
                      هل تود إرسال نسخة من طلبك مباشرة إلى الواتساب لبدء المحادثة الآن؟
                    </div>
                    <a
                      href={`https://wa.me/201080267630?text=${generateWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>إرسال الطلب فوراً إلى واتساب</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="text-xs text-slate-400 hover:text-white underline underline-offset-4 cursor-pointer"
                  >
                    إرسال طلب آخر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-2">
                      الاسم بالكامل <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="مثال: أحمد محمد"
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-white/15 focus:border-cyan-400 focus:ring-cyan-400/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-2">
                      رقم الهاتف / الواتساب <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="مثال: 01080267630"
                      dir="ltr"
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white text-sm text-right placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-white/15 focus:border-cyan-400 focus:ring-cyan-400/20'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Service selector */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-2">
                      الخدمة المطلوبة <span className="text-rose-400">*</span>
                    </label>
                    <select
                      value={service}
                      onChange={(e) => {
                        setService(e.target.value);
                        if (errors.service) setErrors({ ...errors, service: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0d142d] border text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.service
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-white/15 focus:border-cyan-400 focus:ring-cyan-400/20'
                      }`}
                    >
                      <option value="">اختر الخدمة...</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-2">
                      تفاصيل مشروعك وأهدافك <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="أخبرنا عن نوع نشاطك، والتحديات التسويقية التي تواجهك، وما هي الأهداف التي ترغب في تحقيقها..."
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-white/15 focus:border-cyan-400 focus:ring-cyan-400/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-sm shadow-xl shadow-purple-600/25 hover:shadow-cyan-500/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 rtl:-scale-x-100" />
                      <span>إرسال طلب الاستشارة</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-3">
                      🔒 نلتزم بالسرية التامة لبيانات مشروعك ولن نشاركها مع أي طرف آخر.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
