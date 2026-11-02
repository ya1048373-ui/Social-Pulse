import React, { useState, useEffect } from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { Activity, Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'من نحن', href: '#about' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'لماذا نحن؟', href: '#why-us' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#060913]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-purple-950/20 py-3'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Zone */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-0.5 shadow-md shadow-purple-500/25 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#080d1e] rounded-[10px] flex items-center justify-center">
                  <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                    Social Pulse
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                </div>
                <span className="text-[10px] font-medium text-slate-400 tracking-wider">
                  بنرجّع النبض لمشروعك
                </span>
              </div>
            </a>

            {/* Nav Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded px-1.5 py-0.5"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Actions Zone */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Facebook Page Link (Desktop & Tablet) */}
              <a
                href={AGENCY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="صفحتنا الرسمية على فيسبوك"
                aria-label="صفحة Social Pulse على فيسبوك"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-[#1877F2] hover:scale-105 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Phone quick call */}
              <a
                href={AGENCY_INFO.telUrl}
                title="اتصال هاتفي مباشر"
                className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* WhatsApp CTA */}
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 rounded-lg transition-all shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span className="whitespace-nowrap">واتساب مباشر</span>
              </a>

              {/* Primary Start CTA - Opens WhatsApp directly */}
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg shadow-md shadow-purple-600/30 hover:shadow-purple-500/50 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>ابدأ مشروعك</span>
                <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="القائمة الرئيسية"
                className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#080d1a] border-l border-white/10 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  <span className="text-lg font-bold text-white">Social Pulse</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 py-6">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-right px-3 py-3 text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              {/* Mobile Facebook Button */}
              <a
                href={AGENCY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-white bg-[#1877F2]/15 hover:bg-[#1877F2]/25 border border-[#1877F2]/35 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>تابعنا على فيسبوك</span>
              </a>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 rounded-lg hover:bg-emerald-900/60 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>محادثة واتساب: 01080267630</span>
              </a>

              <a
                href={AGENCY_INFO.telUrl}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-slate-200 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>اتصال: 01080267630</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
