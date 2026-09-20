import React from 'react';
import { Waves, Trees, Maximize2, ShieldCheck, HelpCircle } from 'lucide-react';
import { CONTENT_CHECKLIST } from '../data/propertyData';

interface VillaOverviewProps {
  onToggleChecklist: () => void;
}

export const VillaOverview: React.FC<VillaOverviewProps> = ({ onToggleChecklist }) => {
  const highlights = [
    {
      icon: <Waves className="w-5 h-5 text-sunlight" />,
      label: "Beachfront Estate",
      value: "Direct Ocean Access",
      status: "CONFIRMED"
    },
    {
      icon: <Trees className="w-5 h-5 text-sunlight" />,
      label: "Tropical Grounds",
      value: "~2.47 Acres · 100+ Palms",
      status: "NEEDS OWNER VERIFICATION"
    },
    {
      icon: <Maximize2 className="w-5 h-5 text-sunlight" />,
      label: "Built Footprint",
      value: "~320 m² Architecture",
      status: "NEEDS OWNER VERIFICATION"
    },
    {
      icon: <Waves className="w-5 h-5 text-sunlight" />,
      label: "Lap Pool",
      value: "17m Sea-Facing Infinity",
      status: "NEEDS OWNER VERIFICATION"
    },
  ];

  return (
    <section id="villa" className="relative bg-ocean-deep text-sand-warm py-24 md:py-36 px-6 md:px-12 border-t border-lagoon/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Header Stack */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="font-mono text-[11px] tracking-[0.25em] text-sunlight uppercase">
              The Property · Secluded Grounds
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-sand-warm">
              An estate shaped by palm shade & saltwater.
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-muted max-w-md leading-relaxed">
            Spanning expansive coastal grounds in Kalpitiya, Dolphin Beach Villa balances organic architectural proportions with the raw beauty of Sri Lanka’s north-western shoreline.
          </p>
        </div>

        {/* Large Asymmetrical Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden min-h-[420px] lg:min-h-[560px] group">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85"
              alt="Dolphin Beach Villa infinity pool looking toward the Indian Ocean"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-transparent to-transparent" />
            
            {/* Overlay Caption */}
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div className="space-y-1">
                <span className="font-mono text-[10px] tracking-widest text-sunlight uppercase">
                  Oceanfront Axis
                </span>
                <p className="font-serif text-xl sm:text-2xl text-sand-warm">
                  The 17-metre infinity lap pool aligned with the western horizon.
                </p>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-widest bg-ocean-deep/80 text-sunlight border border-sunlight/20">
                17M LAP POOL
              </span>
            </div>
          </div>

          {/* Side Narrative & Highlight Column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="glass-card p-8 rounded-2xl border border-lagoon/20 space-y-6">
              <span className="font-mono text-[10px] tracking-[0.25em] text-stone-muted uppercase block">
                Sanctuary Specifications
              </span>
              
              <div className="space-y-5">
                {highlights.map((item, idx) => (
                  <div key={idx} className="border-b border-lagoon/15 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-sans text-stone-muted">{item.label}</span>
                      {item.status === 'CONFIRMED' ? (
                        <span className="inline-flex items-center gap-1 font-mono text-[9px] text-lagoon-light">
                          <ShieldCheck className="w-3 h-3" /> CONFIRMED
                        </span>
                      ) : (
                        <button
                          onClick={onToggleChecklist}
                          className="inline-flex items-center gap-1 font-mono text-[9px] text-sunlight/90 hover:underline"
                          title="Pending Owner Verification"
                        >
                          <HelpCircle className="w-3 h-3" /> VERIFY
                        </button>
                      )}
                    </div>
                    <p className="font-serif text-lg text-sand-warm">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Owner Fact Disclaimer Button */}
              <div className="pt-2">
                <button
                  onClick={onToggleChecklist}
                  className="w-full py-2.5 px-3 rounded-lg bg-ocean-surface/60 hover:bg-ocean-surface border border-lagoon/25 text-[10px] font-mono tracking-wider text-sand-muted flex items-center justify-center gap-2 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-sunlight" />
                  <span>Rule 30: Fact Verification Status ({CONTENT_CHECKLIST.filter(f => f.status === 'CONFIRMED').length}/{CONTENT_CHECKLIST.length} Confirmed)</span>
                </button>
              </div>
            </div>

            {/* Smaller Secondary Accent Visual */}
            <div className="relative rounded-2xl overflow-hidden h-52 group">
              <img
                src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=800&q=80"
                alt="Tropical coconut palms on the estate grounds"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <p className="font-serif text-sm text-sand-muted italic">
                  Over 100 mature coconut palms providing canopy shade.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
