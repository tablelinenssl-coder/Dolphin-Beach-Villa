import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MinimalVillaStory: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      title: "High Vaulted Ceilings",
      aspect: "Convective Cooling",
      prose: "Exposed hardwood rafters channel rising warmth upward, allowing cool coastal breezes to circulate naturally through all open-air living pavilions.",
      image: "/images/estate/suite_full_poster.jpg"
    },
    {
      title: "Sculpted Columns & Verandas",
      aspect: "Tropical Thresholds",
      prose: "Deep covered verandas supported by sculpted columns create continuous shaded spaces that blend interior stillness with ocean horizons.",
      image: "/images/villa_sunset_pool.jpg"
    },
    {
      title: "Timber Louvre Grids",
      aspect: "Filtered Sunlight",
      prose: "Handcrafted wooden window grids filter equatorial sunlight into soft geometric patterns across warm teakwood floorboards.",
      image: "/images/estate/living_poster.jpg"
    },
    {
      title: "Natural Stone & Tile",
      aspect: "Material Honesty",
      prose: "Rough-hewn stone paired with terracotta Roman-style roof tiles root the architecture organically into the coastal terrain.",
      image: "/images/estate/hero_poster.jpg"
    }
  ];

  return (
    <section id="villa" className="relative bg-[#fafaf7] text-[#0f172a] py-16 md:py-32 px-4 sm:px-10 lg:px-16 border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2.5 max-w-xl">
            <h2 className="text-[clamp(2rem,3.8vw,3.2rem)] font-black tracking-[-0.03em] leading-[1.05] text-[#0f172a]">
              Designed around light,<br />
              <em className="font-serif italic font-bold text-[#dc2626]">space and the sea.</em>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-base text-[#64748b] max-w-sm leading-relaxed">
            Rooted in Sri Lankan tropical modernism, the villa uses organic timber rafters, sculpted columns, and natural cross-ventilation to create cool, unhurried spaces.
          </p>
        </div>

        {/* Dynamic Architectural Study Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Image Stage: order-first on mobile so users immediately see visual feedback when tapping tabs */}
          <div className="lg:col-span-7 order-first lg:order-last relative h-[250px] sm:h-[380px] lg:h-[540px] rounded-[16px] overflow-hidden shadow-md border border-[#e2e8f0] bg-[#0f172a]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative"
              >
                <img
                  src={pillars[activeTab].image}
                  alt={pillars[activeTab].title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between text-white">
                  <div className="space-y-0.5 sm:space-y-1">
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-white/90 uppercase block font-semibold">
                      {pillars[activeTab].aspect}
                    </span>
                    <p className="text-lg sm:text-2xl font-bold [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                      {pillars[activeTab].title}
                    </p>
                  </div>
                  <div className="font-mono text-[11px] sm:text-xs text-white/80 font-semibold shrink-0 ml-2">
                    0{activeTab + 1} / 04
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tab Selectors: order-last on mobile, order-first on desktop */}
          <div className="lg:col-span-5 order-last lg:order-first space-y-2.5 sm:space-y-3" role="tablist" aria-label="Architectural Pillars">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                role="tab"
                aria-selected={activeTab === idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-4 sm:p-6 rounded-[14px] sm:rounded-[16px] transition-all duration-300 cursor-pointer overflow-hidden border select-none active:scale-[0.99] ${
                  activeTab === idx
                    ? 'bg-white border-[#dc2626] shadow-md ring-1 ring-[#dc2626]'
                    : 'bg-white/60 border-[#e2e8f0] hover:bg-white hover:border-[#cbd5e1]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold ${
                    activeTab === idx ? 'bg-[#fbe3e3] text-[#dc2626]' : 'bg-[#f1f5f9] text-[#64748b]'
                  }`}>
                    {pillar.aspect}
                  </span>
                  <span className={activeTab === idx ? "text-[#dc2626] font-bold text-xs font-mono" : "text-[#64748b] text-xs font-mono font-semibold"}>0{idx + 1}</span>
                </div>
                <h3 className="font-sans text-base sm:text-xl text-[#0f172a] mb-1 font-bold">
                  {pillar.title}
                </h3>
                <p className={`font-sans text-xs sm:text-sm text-[#64748b] leading-relaxed transition-opacity duration-300 ${
                  activeTab === idx ? 'opacity-100' : 'opacity-70 line-clamp-2'
                }`}>
                  {pillar.prose}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
