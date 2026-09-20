import React, { useState } from 'react';
import { Columns, Wind, Eye, Compass } from 'lucide-react';

export const ArchitectureStory: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      title: "High Vaulted Ceilings",
      detail: "Exposed timber rafters draw rising sea warmth upward, allowing cool coastal breezes to circulate naturally throughout all living pavilions.",
      aspect: "Thermal Airflow",
      icon: <Wind className="w-4 h-4 text-sunlight" />,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Sculpted Columns & Verandas",
      detail: "Deep covered verandas supported by classical sculpted columns create continuous shaded thresholds between the interior sanctuary and open beach.",
      aspect: "Tropical Shading",
      icon: <Columns className="w-4 h-4 text-sunlight" />,
      image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Wooden Window Grids",
      detail: "Intricate handcrafted timber louvre grids filter the blinding equatorial sunlight into soft geometric patterns across warm teakwood floorboards.",
      aspect: "Filtered Illumination",
      icon: <Eye className="w-4 h-4 text-sunlight" />,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Natural Stone & Roman Tiles",
      detail: "Rough-hewn coastal stone walls paired with terracotta Roman-style roof tiles ground the villa authentically into the Kalpitiya terrain.",
      aspect: "Material Honesty",
      icon: <Compass className="w-4 h-4 text-sunlight" />,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    }
  ];

  return (
    <section id="architecture" className="relative bg-ocean-surface text-sand-warm py-24 md:py-36 px-6 md:px-12 overflow-hidden border-t border-b border-lagoon/15">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-sunlight">
            Architecture · Craft & Light
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-sand-warm tracking-tight text-balance">
            Designed around light, space and the sea.
          </h2>
          <p className="font-sans text-sm sm:text-base text-stone-muted leading-relaxed max-w-xl mx-auto">
            Drawing upon classical proportions and coastal tropical modernism, the villa uses natural materials that age gracefully against salt air and sunlight.
          </p>
        </div>

        {/* Dynamic Architectural Study Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Pillar Selectors */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 border ${
                  activeTab === idx
                    ? 'bg-ocean-deep/90 border-sunlight/40 shadow-xl shadow-black/40 translate-x-2'
                    : 'bg-ocean-card/30 border-lagoon/15 hover:bg-ocean-card/60 hover:border-lagoon/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] tracking-widest text-stone-muted uppercase flex items-center gap-1.5">
                    {pillar.icon} {pillar.aspect}
                  </span>
                  <span className="font-mono text-[10px] text-sunlight opacity-70">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-sand-warm mb-2">
                  {pillar.title}
                </h3>
                <p className={`font-sans text-xs sm:text-sm text-stone-muted leading-relaxed transition-opacity duration-300 ${
                  activeTab === idx ? 'opacity-100' : 'opacity-60 line-clamp-2'
                }`}>
                  {pillar.detail}
                </p>
              </button>
            ))}
          </div>

          {/* Right: Architectural Full Photography Stage */}
          <div className="lg:col-span-7 relative h-[440px] sm:h-[520px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-lagoon/20 group">
            <img
              src={pillars[activeTab].image}
              alt={pillars[activeTab].title}
              className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/20 to-transparent" />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-sunlight uppercase block mb-1">
                  Architectural Detail · {pillars[activeTab].aspect}
                </span>
                <p className="font-serif text-xl md:text-2xl text-sand-warm">
                  {pillars[activeTab].title}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full border border-sand-warm/30 flex items-center justify-center text-sand-warm font-mono text-xs">
                {activeTab + 1}/4
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
