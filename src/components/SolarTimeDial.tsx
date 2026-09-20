import React, { useState } from 'react';
import { Sun, Moon, Wind, Coffee, Sparkles, Clock, Compass } from 'lucide-react';

interface DialEpoch {
  time: string;
  solarPhase: string;
  title: string;
  sensoryProse: string;
  paletteTheme: string; // Tailwind background gradient / mood
  ambientSoundTitle: string;
  imageUrl: string;
  icon: React.ReactNode;
}

export const SolarTimeDial: React.FC = () => {
  const [activeEpochIndex, setActiveEpochIndex] = useState(0);

  const epochs: DialEpoch[] = [
    {
      time: "06:10",
      solarPhase: "First Light · Dawn",
      title: "First light over the ocean.",
      sensoryProse: "The Indian Ocean horizon pales into soft rose and muted silver. Cool salt air settles across the dew-wet lawn as coastal seabirds take flight across the palm canopy.",
      paletteTheme: "from-[#1A262C] via-[#2A343A] to-[#3B4242]",
      ambientSoundTitle: "Soft lapping surf & dawn bird calls",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      icon: <Sun className="w-4 h-4 text-rose-300" />
    },
    {
      time: "08:30",
      solarPhase: "Morning Sunlight",
      title: "Breakfast beneath the palms.",
      sensoryProse: "Fresh tropical fruits, estate coconuts, and single-origin Ceylon tea served quietly on the deep shaded veranda. The sun rises over the lagoon, warming the timber deck.",
      paletteTheme: "from-[#172E31] via-[#233F43] to-[#2E4F54]",
      ambientSoundTitle: "Rustling palm fronds & teacups",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      icon: <Coffee className="w-4 h-4 text-sunlight" />
    },
    {
      time: "12:00",
      solarPhase: "Zenith Sunlight",
      title: "Slow hours by the pool.",
      sensoryProse: "The 17-metre infinity pool reflects pure turquoise clouds. High vaulted timber ceilings inside the living pavilions keep the interior naturally cool through cross-ventilation.",
      paletteTheme: "from-[#0F2A30] via-[#1A3A42] to-[#224A54]",
      ambientSoundTitle: "Water lap & gentle ceiling fans",
      imageUrl: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
      icon: <Sun className="w-4 h-4 text-amber-300" />
    },
    {
      time: "15:45",
      solarPhase: "Lagoon Trade Winds",
      title: "Into the lagoon & winds.",
      sensoryProse: "The famous Kalpitiya trade winds build across the peninsula. White sails and kitesurfers skim across flatwater shallows while the villa grounds remain sheltered by coconut palms.",
      paletteTheme: "from-[#132A32] via-[#1B363E] to-[#24424A]",
      ambientSoundTitle: "Rhythmic trade winds & sea spray",
      imageUrl: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
      icon: <Wind className="w-4 h-4 text-lagoon-light" />
    },
    {
      time: "18:20",
      solarPhase: "Equatorial Sunset",
      title: "Golden hour over the water.",
      sensoryProse: "The sky ignites in deep bronze, amber, and indigo. The entire pool surface mirrors molten fire as the sun descends directly into the western Indian Ocean.",
      paletteTheme: "from-[#2A1E18] via-[#3D291F] to-[#4F3324]",
      ambientSoundTitle: "Crashing twilight surf",
      imageUrl: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?auto=format&fit=crop&w=1200&q=80",
      icon: <Sun className="w-4 h-4 text-amber-500" />
    },
    {
      time: "20:30",
      solarPhase: "Nightfall & Starlight",
      title: "Dinner under equatorial stars.",
      sensoryProse: "Lanterns glow along the verandas. A bespoke dinner of fresh coastal fish, spiced curries, and tropical lemongrass is served under unpolluted night skies with the Milky Way overhead.",
      paletteTheme: "from-[#081216] via-[#0E1B20] to-[#142329]",
      ambientSoundTitle: "Ocean surf beneath silence",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      icon: <Sparkles className="w-4 h-4 text-sunlight" />
    },
    {
      time: "23:00",
      solarPhase: "Midnight Silence",
      title: "The sea sets the night rhythm.",
      sensoryProse: "Absolute silence descends over the Kalpitiya peninsula. Wooden louvres admit the cooling night surf breeze while you drift into deep, restorative sleep in the master suite.",
      paletteTheme: "from-[#050C0E] via-[#081316] to-[#0D1C20]",
      ambientSoundTitle: "Continuous ocean breathing",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      icon: <Moon className="w-4 h-4 text-indigo-300" />
    }
  ];

  const activeEpoch = epochs[activeEpochIndex];

  return (
    <section id="solar-dial" className={`relative py-28 md:py-36 px-6 sm:px-10 lg:px-16 transition-all duration-1000 bg-gradient-to-b ${activeEpoch.paletteTheme} text-sand-warm border-b border-white/10 overflow-hidden`}>
      
      <div className="max-w-[1720px] mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-sunlight flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Episodic Narrative · The 24-Hour Coastal Dial</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-sand-warm">
              How unhurried days unfold.
            </h2>
          </div>
          
          <p className="font-sans text-sm text-sand-muted/80 max-w-md leading-relaxed">
            Drag or select any hour on the dial below to observe how the atmosphere, light, and sensory rhythm shift throughout 24 hours at the villa.
          </p>
        </div>

        {/* Tactile Time Selector Dial Bar */}
        <div className="space-y-4">
          <div className="flex items-center justify-between font-mono text-xs text-stone-muted tracking-widest uppercase">
            <span>DAWN (06:00)</span>
            <span className="text-sunlight">SCRUB THE SOLAR DIAL</span>
            <span>NIGHT (23:00)</span>
          </div>

          {/* Interactive Epoch Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {epochs.map((epoch, idx) => {
              const isSelected = activeEpochIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveEpochIndex(idx)}
                  className={`p-3.5 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-ocean-deep/90 border-sunlight text-sand-warm shadow-lg scale-[1.03]'
                      : 'bg-black/30 border-white/10 text-stone-muted hover:border-white/30 hover:text-sand-warm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-semibold text-sunlight">
                      {epoch.time}
                    </span>
                    {epoch.icon}
                  </div>
                  <span className="font-sans text-[11px] truncate block">
                    {epoch.solarPhase.split('·')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cinematic Epoch Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Atmospheric Narrative & Sound Pill */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-white/10 text-sunlight font-mono text-xs tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>{activeEpoch.time} · {activeEpoch.solarPhase}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sand-warm font-normal leading-tight">
              {activeEpoch.title}
            </h3>

            <p className="font-sans text-base sm:text-lg text-sand-muted/90 font-light leading-relaxed">
              {activeEpoch.sensoryProse}
            </p>

            <div className="p-4 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-between text-xs font-mono text-stone-muted">
              <span>NATURAL SOUNDSCAPE</span>
              <span className="text-sunlight">{activeEpoch.ambientSoundTitle}</span>
            </div>
          </div>

          {/* Right: Full-bleed Atmospheric Photo */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden h-[360px] sm:h-[460px] lg:h-[500px] shadow-2xl border border-white/15 group">
            <img
              src={activeEpoch.imageUrl}
              alt={activeEpoch.title}
              className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-sand-muted">
              <span>DOLPHIN BEACH SANCTUARY</span>
              <span>{activeEpoch.time} LOCAL TIME</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
