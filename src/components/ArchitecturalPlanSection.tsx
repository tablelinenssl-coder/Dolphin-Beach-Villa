import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Sparkles } from 'lucide-react';

interface LivingZone {
  label: string;
  specs: string;
  prose: string;
  image: string;
  alt: string;
  badge: string;
}

export const ArchitecturalPlanSection: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const livingZones: LivingZone[] = [
    {
      label: "Central Living Loggia",
      specs: "Open-Air Social Lounge",
      prose: "High vaulted teak rafters and open breezeways connecting the ocean pool terrace with the garden courtyard. Designed for unhurried conversations and afternoon tea.",
      image: "/images/estate/living_poster.jpg",
      alt: "Central open-air living loggia at Dolphin Beach Villa",
      badge: "Gathering Space"
    },
    {
      label: "Al-Fresco Dining Veranda",
      specs: "Shaded Dining Terrace",
      prose: "A grand teak dining table set under columned verandas, where fresh tropical fruit breakfasts and candlelit seafood dinners are served with the sound of breaking waves.",
      image: "/images/estate/estate_tour_poster.jpg",
      alt: "Shaded dining veranda overlooking the pool and gardens",
      badge: "Private Dining"
    },
    {
      label: "17m Infinity Lap Pool",
      specs: "Sunset Ocean Axis",
      prose: "17 metres of calm slate water oriented to the western horizon, flanked by daybeds and Roman columns under the warm Kalpitiya sky.",
      image: "/images/estate/pool_ocean.jpg",
      alt: "17m Infinity lap pool and sundeck at Dolphin Beach Villa",
      badge: "Lap Pool & Sundeck"
    },
    {
      label: "Estate Palm Grove & Grounds",
      specs: "2.47-Acre Secluded Grounds",
      prose: "Over 100 swaying coconut palms providing continuous shade, with a private sand pathway leading straight from the villa lawn to the untouched Indian Ocean beach.",
      image: "/images/estate/hero_poster.jpg",
      alt: "Coconut palm grove and grounds leading directly to the ocean",
      badge: "Direct Beach Access"
    }
  ];

  const currentZone = livingZones[activeFeature];

  return (
    <section id="plan" className="relative bg-[#fafaf7] text-[#0f172a] py-24 md:py-32 px-6 sm:px-10 lg:px-16 border-t border-[#e2e8f0] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-[clamp(2rem,3.8vw,3.2rem)] font-black tracking-[-0.03em] leading-[1.05] text-[#0f172a]">
              Spaces designed for<br />
              <em className="font-serif italic font-bold text-[#dc2626]">gathering &amp; quiet rest.</em>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#64748b] max-w-sm leading-relaxed">
            From the central open-air living loggia to deep dining verandas and sun-drenched pool terraces, every corner of the 2.47-acre estate offers natural cross-ventilation and uninterrupted ocean horizons.
          </p>
        </div>

        {/* Living Pavilions Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual Stage with Interactive Zoom */}
          <div className="lg:col-span-8 bg-white rounded-[16px] p-3 sm:p-4 border border-[#e2e8f0] shadow-sm relative group overflow-hidden">
            <div
              onClick={() => setIsZoomed(true)}
              className="relative w-full h-[360px] sm:h-[460px] lg:h-[500px] rounded-[12px] overflow-hidden cursor-zoom-in bg-[#0f172a]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentZone.label}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={currentZone.image}
                    alt={currentZone.alt}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Left Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono tracking-widest uppercase font-bold">
                      {currentZone.badge}
                    </span>
                  </div>

                  {/* Top Right Zoom Prompt */}
                  <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-sm group-hover:bg-[#dc2626] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                    <span className="hidden sm:inline">Expand View</span>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="font-mono text-[9px] tracking-widest text-white/80 uppercase block mb-1">
                      {currentZone.specs}
                    </span>
                    <p className="font-serif text-xl sm:text-2xl font-bold italic [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
                      {currentZone.label}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive Feature Selectors */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              {livingZones.map((zone, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-[14px] transition-all duration-200 cursor-pointer overflow-hidden border ${
                    activeFeature === idx
                      ? 'bg-white border-[#dc2626] shadow-sm ring-1 ring-[#dc2626]'
                      : 'bg-white/60 border-[#e2e8f0] hover:bg-white hover:border-[#cbd5e1]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-sans text-base sm:text-lg text-[#0f172a] font-bold">
                      {zone.label}
                    </span>
                    <span className={activeFeature === idx ? "text-[#dc2626] font-bold text-xs" : "text-[#64748b] text-xs font-semibold"}>
                      0{idx + 1}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#dc2626] block mb-1.5 font-bold uppercase tracking-wider">
                    {zone.specs}
                  </span>
                  <p className="font-sans text-xs text-[#64748b] leading-relaxed">
                    {zone.prose}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-[12px] bg-white border border-[#e2e8f0] flex items-center gap-3 text-xs font-mono text-[#0f172a] font-semibold">
              <Sparkles className="w-4 h-4 text-[#dc2626] shrink-0" />
              <span>4 Pavilions &middot; 2.47 Private Beachfront Acres</span>
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0f172a]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
            onClick={() => setIsZoomed(false)}
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors cursor-pointer"
              aria-label="Close zoomed view"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="max-w-5xl max-h-[90vh] bg-white rounded-[16px] p-4 sm:p-6 shadow-2xl border border-[#e2e8f0] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentZone.image}
                alt={currentZone.alt}
                className="w-full h-auto max-h-[75vh] object-cover mx-auto rounded-[10px]"
              />
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#0f172a]">
                <span className="font-bold uppercase tracking-wider">{currentZone.label} &middot; {currentZone.specs}</span>
                <span className="text-[#64748b]">Dolphin Beach Villa &middot; Kalpitiya, Sri Lanka</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
