import React, { useState } from 'react';
import { Wind, Fish, Sun, ShieldCheck, Compass } from 'lucide-react';

interface CoastalAlmanacProps {
  onToggleChecklist: () => void;
}

export const CoastalAlmanac: React.FC<CoastalAlmanacProps> = ({ onToggleChecklist }) => {
  const [activeSeason, setActiveSeason] = useState<'summer' | 'winter'>('summer');

  return (
    <section id="coastal-almanac" className="relative bg-ocean-deep text-sand-warm py-28 md:py-36 px-6 sm:px-10 lg:px-16 border-b border-white/10 overflow-hidden">
      
      <div className="max-w-[1720px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-sunlight flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Coastal Geography & Oceanography</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-sand-warm tracking-tight">
              The Kalpitiya Coastal Almanac.
            </h2>
          </div>
          
          <p className="font-sans text-sm text-stone-muted max-w-md leading-relaxed">
            Kalpitiya is shaped by trade winds, seasonal marine currents, and secluded peninsula geography. A genuine sanctuary governed by natural cycles.
          </p>
        </div>

        {/* Dynamic Season Toggle */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-stone-muted uppercase tracking-wider">Select Season:</span>
            <button
              onClick={() => setActiveSeason('summer')}
              className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all ${
                activeSeason === 'summer'
                  ? 'bg-sunlight text-ocean-deep font-semibold shadow-md'
                  : 'glass-card text-stone-muted hover:text-sand-warm'
              }`}
            >
              Summer Trade Winds (May – Oct)
            </button>
            <button
              onClick={() => setActiveSeason('winter')}
              className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all ${
                activeSeason === 'winter'
                  ? 'bg-sunlight text-ocean-deep font-semibold shadow-md'
                  : 'glass-card text-stone-muted hover:text-sand-warm'
              }`}
            >
              Winter Calm & Dolphin Season (Nov – Apr)
            </button>
          </div>

          <div className="font-mono text-[11px] text-stone-muted">
            PENINSULA MICROCLIMATE · 320 SUNNY DAYS / YR
          </div>
        </div>

        {/* 3-Pillar Almanac Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Wind & Kitesurfing Physics */}
          <div className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-lagoon/20 border border-lagoon/40 flex items-center justify-center text-lagoon-light">
                <Wind className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-sunlight uppercase block">
                Aerodynamics · Wind Profile
              </span>
              <h3 className="font-serif text-2xl text-sand-warm">
                {activeSeason === 'summer' ? 'Consistent 18–25 Knots' : 'Gentle 12–16 Knot Thermals'}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-muted leading-relaxed font-light">
                {activeSeason === 'summer'
                  ? 'Kalpitiya is renowned worldwide for steady cross-onshore southwest trade winds. The nearby flatwater lagoons offer world-class kitesurfing conditions for all skill levels.'
                  : 'Lighter afternoon sea breezes with glassy morning ocean surfaces, ideal for open water swimming and shoreline fishing.'}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-stone-muted">
              <span>WATER TYPE</span>
              <span className="text-sand-warm">Flat Lagoon & Ocean Surf</span>
            </div>
          </div>

          {/* 2. Marine Life & Dolphins */}
          <div className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-sunlight/15 border border-sunlight/40 flex items-center justify-center text-sunlight">
                <Fish className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-widest text-sunlight uppercase">
                  Marine Life · Ethical Encounters
                </span>
                <span className="font-mono text-[9px] text-lagoon-light flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> CONFIRMED
                </span>
              </div>
              <h3 className="font-serif text-2xl text-sand-warm">
                Spinner Dolphins in Local Waters
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-muted leading-relaxed font-light">
                The continental shelf off Kalpitiya drops steeply, attracting massive pods of wild spinner dolphins. We partner strictly with ethical local skippers who respect natural distances.
              </p>
              <button
                type="button"
                onClick={onToggleChecklist}
                className="w-full text-left p-3 rounded-xl bg-ocean-deep/60 border border-lagoon/20 text-[10px] font-mono text-stone-muted hover:border-sunlight/40 transition-colors"
              >
                <span className="text-sunlight block mb-0.5">Ethical Notice (Rule 30 Audit):</span>
                Dolphins may pass through these waters; wild sightings are natural and never guaranteed.
              </button>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-stone-muted">
              <span>PEAK MIGRATION</span>
              <span className="text-sand-warm">November through April</span>
            </div>
          </div>

          {/* 3. Water Temperature & Tides */}
          <div className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                <Sun className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-sunlight uppercase block">
                Thermal Conditions
              </span>
              <h3 className="font-serif text-2xl text-sand-warm">
                Warm 28°C Sea Temperatures
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-muted leading-relaxed font-light">
                The Indian Ocean here remains bath-warm year round, rarely dipping below 27°C. The micro-tidal variation creates broad sandbanks at low tide perfect for unhurried barefoot beachcombing.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2 font-mono text-xs text-stone-muted">
              <div className="flex items-center justify-between">
                <span>ANNUAL SUNSHINE</span>
                <span className="text-sand-warm">~2,800 Hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span>TIDAL SPREAD</span>
                <span className="text-sand-warm">~0.6 Metres (Gentle)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
