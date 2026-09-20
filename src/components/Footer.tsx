import { Compass, Mail, Phone, MessageSquare, Instagram, Facebook, ShieldCheck } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyData';

interface FooterProps {
  onOpenAvailability: () => void;
  onToggleChecklist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAvailability, onToggleChecklist }) => {
  return (
    <footer id="contact" className="relative bg-ocean-deep text-sand-warm pt-24 pb-16 px-6 md:px-12 border-t border-lagoon/20 overflow-hidden">
      
      {/* Background Subtle Gradient & Watermark */}
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Top Editorial Call to Action Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-sunlight/20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-[10px] tracking-[0.25em] text-sunlight uppercase block">
              Private Hospitality Inquiries
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-sand-warm font-normal">
              Enter a sanctuary where the sea sets the pace.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-stone-muted">
              Reservations are managed with personalized care. Inquire for whole-villa buyout or individual master suites.
            </p>
          </div>
          <button
            onClick={onOpenAvailability}
            className="px-8 py-4 rounded-full bg-sand-warm text-ocean-deep hover:bg-sunlight hover:text-ocean-deep transition-all duration-300 font-sans text-xs font-semibold tracking-widest uppercase shadow-2xl hover:scale-105 shrink-0"
          >
            Check Availability
          </button>
        </div>

        {/* Main Footer Links & Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full border border-sunlight/40 flex items-center justify-center p-1.5">
                <svg viewBox="0 0 24 24" className="w-full h-full text-sunlight fill-none stroke-current stroke-2">
                  <path d="M4 14C8 14 11 10 15 10C18 10 20 12 21 12" strokeLinecap="round" />
                  <path d="M6 17C9 17 12 14 16 14C19 14 20 15 21 15" strokeLinecap="round" strokeOpacity="0.7" />
                </svg>
              </div>
              <span className="font-serif text-2xl tracking-widest uppercase text-sand-warm">
                Dolphin Beach
              </span>
            </div>
            <p className="font-mono text-xs tracking-wider text-stone-muted uppercase">
              Kalpitiya · Sri Lanka · {PROPERTY_CONFIG.coordinates}
            </p>
            <p className="font-sans text-xs text-stone-muted leading-relaxed max-w-sm pt-2">
              A private boutique beachfront escape on the north-western coastline. Where ocean horizons meet quiet palm groves.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-mono text-[10px] tracking-[0.25em] text-sunlight uppercase block">
              Sanctuary
            </span>
            <ul className="space-y-2 text-xs font-sans text-sand-muted">
              <li><a href="#villa" className="hover:text-sunlight transition-colors">The Villa</a></li>
              <li><a href="#suites" className="hover:text-sunlight transition-colors">Suites</a></li>
              <li><a href="#architecture" className="hover:text-sunlight transition-colors">Architecture</a></li>
              <li><a href="#pool-beach" className="hover:text-sunlight transition-colors">Pool & Beach</a></li>
              <li><a href="#day-at-villa" className="hover:text-sunlight transition-colors">A Day Here</a></li>
            </ul>
          </div>

          {/* Pursuits */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-mono text-[10px] tracking-[0.25em] text-sunlight uppercase block">
              Pursuits
            </span>
            <ul className="space-y-2 text-xs font-sans text-sand-muted">
              <li><a href="#experiences" className="hover:text-sunlight transition-colors">Ocean & Dolphins</a></li>
              <li><a href="#experiences" className="hover:text-sunlight transition-colors">Kitesurfing</a></li>
              <li><a href="#experiences" className="hover:text-sunlight transition-colors">Wilpattu Safari</a></li>
              <li><a href="#gallery" className="hover:text-sunlight transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-sunlight transition-colors">Location</a></li>
            </ul>
          </div>

          {/* Contact Concierge */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-[10px] tracking-[0.25em] text-sunlight uppercase block">
              Concierge
            </span>
            <ul className="space-y-2.5 text-xs font-sans text-sand-muted">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sunlight shrink-0" />
                <a href={`mailto:${PROPERTY_CONFIG.contact.email}`} className="hover:text-sunlight transition-colors">
                  {PROPERTY_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sunlight shrink-0" />
                <a href={`tel:${PROPERTY_CONFIG.contact.phone}`} className="hover:text-sunlight transition-colors">
                  {PROPERTY_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-sunlight shrink-0" />
                <a
                  href={`https://wa.me/${PROPERTY_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sunlight transition-colors"
                >
                  WhatsApp: {PROPERTY_CONFIG.contact.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-sunlight shrink-0" />
                <span>Kalpitiya Peninsula, North Western Province, Sri Lanka</span>
              </li>
            </ul>

            {/* Social & Audit links */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href={PROPERTY_CONFIG.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-ocean-surface border border-lagoon/30 flex items-center justify-center text-sand-warm hover:text-sunlight hover:border-sunlight transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={PROPERTY_CONFIG.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-ocean-surface border border-lagoon/30 flex items-center justify-center text-sand-warm hover:text-sunlight hover:border-sunlight transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <button
                onClick={onToggleChecklist}
                className="px-3 py-1.5 rounded-full border border-lagoon/30 text-[10px] font-mono text-stone-muted hover:text-sunlight flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3 h-3 text-sunlight" />
                <span>Rule 30 Compliance</span>
              </button>
            </div>
          </div>

        </div>

        {/* Final Sign-off Statement */}
        <div className="pt-16 border-t border-lagoon/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p className="font-serif italic text-2xl sm:text-3xl text-sand-warm font-light">
            See you by the sea.
          </p>

          <p className="font-mono text-[10px] text-stone-muted tracking-widest uppercase">
            © {new Date().getFullYear()} Dolphin Beach Villa · All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};
