import React from 'react';
import { Mail, Phone, MessageSquare, Instagram, Facebook } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyData';

interface MinimalFooterProps {}

export const MinimalFooter: React.FC<MinimalFooterProps> = () => {
  const handleScrollTo = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    const lenis = (window as any).__lenis;
    if (el) {
      if (lenis) {
        lenis.scrollTo(el, { offset: -80, duration: 2.0 });
      } else {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <footer id="contact" className="relative bg-[#fafaf7] text-[#0f172a] pt-16 pb-[max(3rem,env(safe-area-inset-bottom))] px-4 sm:px-10 lg:px-16 border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
        
        {/* Banner CTA */}
        <div className="bg-white border border-[#e2e8f0] rounded-[16px] shadow-sm p-6 sm:p-12 text-center md:text-left hover:shadow-md transition-shadow">
          <div className="space-y-2.5 max-w-xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#0f172a] font-black tracking-tight">
              Enter a sanctuary where the sea <em className="font-serif italic font-bold text-[#dc2626]">sets the pace.</em>
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#64748b] leading-relaxed">
              Reservations are managed with personalized care. Inquire for the exclusive private villa estate or individual master suites.
            </p>
          </div>
        </div>

        {/* Links Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/dolphin_logo.svg"
                alt="Dolphin Beach Logo"
                className="w-7 h-7 rounded-[7px] object-contain shadow-xs"
              />
              <span className="font-sans text-xl tracking-[0.16em] uppercase text-[#0f172a] font-black">
                Dolphin Beach
              </span>
            </div>
            <p className="font-mono text-xs text-[#64748b] tracking-wider uppercase font-semibold">
              Kalpitiya &middot; Sri Lanka &middot; {PROPERTY_CONFIG.coordinates}
            </p>
            <p className="font-sans text-xs text-[#64748b] leading-relaxed max-w-xs">
              Private boutique villa on Sri Lanka's north-western peninsula. Where open ocean horizons meet mature coconut shade.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#dc2626] font-bold block">
              Sanctuary
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#64748b] font-medium">
              <li><a href="#villa" onClick={(e) => handleScrollTo(e, 'villa')} className="hover:text-[#dc2626] transition-colors cursor-pointer">The Villa</a></li>
              <li><a href="#suites" onClick={(e) => handleScrollTo(e, 'suites')} className="hover:text-[#dc2626] transition-colors cursor-pointer">Suites</a></li>
              <li><a href="#experiences" onClick={(e) => handleScrollTo(e, 'experiences')} className="hover:text-[#dc2626] transition-colors cursor-pointer">Experiences</a></li>
              <li><a href="#gallery" onClick={(e) => handleScrollTo(e, 'gallery')} className="hover:text-[#dc2626] transition-colors cursor-pointer">Gallery</a></li>
              <li><a href="#location" onClick={(e) => handleScrollTo(e, 'location')} className="hover:text-[#dc2626] transition-colors cursor-pointer">Location</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#dc2626] font-bold block">
              Pursuits
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#64748b] font-medium">
              <li><a href="#experiences" onClick={(e) => handleScrollTo(e, 'experiences')} className="hover:text-[#dc2626] transition-colors cursor-pointer">Ocean Beach</a></li>
              <li><a href="#experiences" onClick={(e) => handleScrollTo(e, 'experiences')} className="hover:text-[#dc2626] transition-colors cursor-pointer">Spinner Dolphins</a></li>
              <li><a href="#experiences" onClick={(e) => handleScrollTo(e, 'experiences')} className="hover:text-[#dc2626] transition-colors cursor-pointer">Flatwater Kitesurfing</a></li>
              <li><a href="#experiences" onClick={(e) => handleScrollTo(e, 'experiences')} className="hover:text-[#dc2626] transition-colors cursor-pointer">Wilpattu Safari</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#dc2626] font-bold block">
              Concierge
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#64748b] font-medium">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                <a href={`mailto:${PROPERTY_CONFIG.contact.email}`} className="hover:text-[#0f172a] transition-colors break-all">
                  {PROPERTY_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#dc2626]" />
                <a href={`tel:${PROPERTY_CONFIG.contact.phone}`} className="hover:text-[#0f172a] transition-colors">
                  {PROPERTY_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#dc2626]" />
                <a
                  href={`https://wa.me/${PROPERTY_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0f172a] transition-colors"
                >
                  WhatsApp Concierge
                </a>
              </li>
            </ul>

            <div className="pt-3 flex items-center gap-3">
              <a
                href={PROPERTY_CONFIG.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-[8px] bg-white border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:text-[#0f172a] hover:border-[#0f172a] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={PROPERTY_CONFIG.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-[8px] bg-white border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:text-[#0f172a] hover:border-[#0f172a] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Signoff */}
        <div className="pt-10 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-serif italic text-2xl text-[#0f172a] font-bold">
            See you by the sea.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                const lenis = (window as any).__lenis;
                if (lenis) {
                  lenis.scrollTo(0, { duration: 1.5 });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="text-xs font-sans text-[#64748b] hover:text-[#0f172a] active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1.5"
              aria-label="Scroll to top of page"
            >
              <span>Return to top</span>
              <span className="font-mono text-sm">↑</span>
            </button>
            <p className="font-mono text-[9px] text-[#64748b] tracking-widest uppercase font-semibold">
              &copy; {new Date().getFullYear()} Dolphin Beach Villa &middot; Kalpitiya, Sri Lanka
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
