import React, { useState, useEffect } from 'react';
import { X, Volume2, VolumeX, Sparkles, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { PROPERTY_CONFIG, CONTENT_CHECKLIST } from '../data/propertyData';

interface ModernNavbarProps {
  onOpenAvailability: (suiteId?: string) => void;
  onToggleChecklist: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const ModernNavbar: React.FC<ModernNavbarProps> = ({
  onOpenAvailability,
  onToggleChecklist,
  isAudioPlaying,
  onToggleAudio,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsDrawerOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const menuItems = [
    { label: "The Spatial Estate", href: "#estate-plan", num: "01" },
    { label: "Master Suites", href: "#suites", num: "02" },
    { label: "The 24h Coastal Dial", href: "#solar-dial", num: "03" },
    { label: "Architectural Folio", href: "#architectural-folio", num: "04" },
    { label: "Ocean & Wind Almanac", href: "#coastal-almanac", num: "05" },
    { label: "Visual Monograph", href: "#gallery", num: "06" },
    { label: "Journey & Location", href: "#location", num: "07" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-ocean-deep/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-ocean-deep/90 via-ocean-deep/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          
          {/* Brand Wordmark & Subtle Horizon Wave */}
          <a
            href="#"
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="Dolphin Beach Villa Kalpitiya"
          >
            <div className="w-9 h-9 rounded-full border border-sunlight/40 flex items-center justify-center p-2 bg-ocean-surface/60 group-hover:border-sunlight group-hover:scale-105 transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-full h-full text-sunlight fill-none stroke-current stroke-2">
                <path d="M4 14C8 14 11 10 15 10C18 10 20 12 21 12" strokeLinecap="round" />
                <path d="M6 17C9 17 12 14 16 14C19 14 20 15 21 15" strokeLinecap="round" strokeOpacity="0.7" />
              </svg>
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl tracking-[0.2em] text-sand-warm uppercase group-hover:text-sunlight transition-colors">
                Dolphin Beach
              </span>
              <span className="block font-mono text-[9px] tracking-[0.28em] text-stone-muted uppercase">
                Kalpitiya Peninsula · Sri Lanka
              </span>
            </div>
          </a>

          {/* Center Telemetry (Desktop) */}
          <div className="hidden xl:flex items-center gap-6 px-4 py-1.5 rounded-full glass-card border border-lagoon/25 text-[11px] font-mono tracking-wider text-stone-muted">
            <span className="flex items-center gap-1.5 text-sand-warm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE 28°C</span>
            </span>
            <span className="text-stone-dark">|</span>
            <span>INDIAN OCEAN · HIGH TIDE</span>
            <span className="text-stone-dark">|</span>
            <span className="text-sunlight">{PROPERTY_CONFIG.coordinates}</span>
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Ambient Wave Sound Toggle */}
            <button
              onClick={onToggleAudio}
              className={`px-3 py-1.5 rounded-full border text-xs font-mono tracking-wider flex items-center gap-2 transition-all ${
                isAudioPlaying
                  ? 'bg-sunlight/15 border-sunlight text-sunlight shadow-sm'
                  : 'glass-card border-lagoon/30 text-stone-muted hover:text-sand-warm'
              }`}
              title={isAudioPlaying ? "Mute ambient ocean surf" : "Listen to ambient ocean waves"}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span className="hidden sm:inline text-[10px]">OCEAN SURF</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[10px]">SURF AMBIENCE</span>
                </>
              )}
            </button>

            {/* Rule 30 Fact Checklist Modal Trigger */}
            <button
              onClick={onToggleChecklist}
              className="p-2 rounded-full glass-card border border-lagoon/30 text-stone-muted hover:text-sunlight hover:border-sunlight/40 transition-colors"
              title="Rule 30 Property Fact Audit"
              aria-label="Fact Audit Checklist"
            >
              <Sparkles className="w-3.5 h-3.5" />
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenAvailability()}
              className="hidden md:inline-flex px-5 py-2 rounded-full bg-sand-warm text-ocean-deep hover:bg-sunlight hover:text-ocean-deep transition-all duration-300 font-sans text-xs font-semibold tracking-[0.18em] uppercase shadow-lg hover:scale-105"
            >
              Reserve Villa
            </button>

            {/* Architectural Off-Canvas Menu Toggle */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="px-3.5 py-1.5 rounded-full glass-card border border-white/20 text-sand-warm hover:text-sunlight hover:border-sunlight transition-colors text-xs font-mono tracking-widest uppercase flex items-center gap-2"
              aria-label="Open navigation folio"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sunlight" />
              <span>Menu</span>
            </button>

          </div>

        </div>
      </header>

      {/* Off-Canvas Architectural Drawer (Inspired by Inspo Reference Component: N4 Off-canvas) */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-xl bg-ocean-surface h-full shadow-2xl border-l border-lagoon/25 p-8 sm:p-12 overflow-y-auto flex flex-col justify-between">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-sunlight">
                <Compass className="w-3.5 h-3.5" />
                <span>Sanctuary Navigation Folio</span>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-full hover:bg-ocean-deep text-stone-muted hover:text-sand-warm transition-colors"
                aria-label="Close navigation"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="my-auto py-8 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsDrawerOpen(false)}
                  className="group flex items-center justify-between py-2.5 border-b border-white/5 hover:border-sunlight/40 transition-colors"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-stone-muted group-hover:text-sunlight transition-colors">
                      {item.num}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl text-sand-warm group-hover:text-sunlight group-hover:translate-x-1.5 transition-all">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-stone-muted group-hover:text-sunlight transition-colors opacity-0 group-hover:opacity-100" />
                </a>
              ))}
            </nav>

            {/* Bottom Contact & Booking Direct Action */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-xs font-mono text-stone-muted">
                <span>KALPITIYA, SRI LANKA</span>
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onToggleChecklist();
                  }}
                  className="text-sunlight flex items-center gap-1 hover:underline"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Rule 30 Audit ({CONTENT_CHECKLIST.filter(f => f.status === 'CONFIRMED').length} verified)</span>
                </button>
              </div>

              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  onOpenAvailability();
                }}
                className="w-full py-4 rounded-full bg-sand-warm text-ocean-deep hover:bg-sunlight font-sans text-xs font-semibold tracking-widest uppercase transition-all shadow-xl"
              >
                Inquire for Private Stay
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
