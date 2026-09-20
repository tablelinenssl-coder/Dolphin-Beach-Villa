import React from 'react';
import { MapPin, Plane, Car, Compass, HelpCircle } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyData';

interface LocationSectionProps {
  onToggleChecklist: () => void;
  onOpenAvailability: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onToggleChecklist, onOpenAvailability }) => {
  return (
    <section id="location" className="relative bg-ocean-surface text-sand-warm py-24 md:py-36 px-6 md:px-12 border-t border-lagoon/15">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-sunlight">
              Geography · The Peninsula
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-sand-warm tracking-tight">
              Kalpitiya, North-Western Sri Lanka.
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-muted max-w-md leading-relaxed">
            Situated on a slender coastal peninsula fringed by the Indian Ocean on the west and tranquil mangrove lagoons to the east.
          </p>
        </div>

        {/* Location Showcase: Stylized Map + Journey Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Stylized Visual Map Illustration */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-12 border border-lagoon/20 relative overflow-hidden flex flex-col justify-between min-h-[460px]">
            {/* Background SVG Peninsula Geography Schematic */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20 pointer-events-none text-lagoon"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Stylized Sri Lanka & Kalpitiya coast outline */}
              <path
                d="M180 80C190 140 210 200 215 260C220 320 205 380 230 440C260 510 320 560 380 540C440 520 480 440 470 360C460 280 430 220 390 160C350 100 280 60 210 60C190 60 175 70 180 80Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              {/* Kalpitiya spit */}
              <path
                d="M200 180C205 130 210 90 205 70C200 50 190 60 185 80"
                stroke="#DFB174"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Wave rings */}
              <circle cx="205" cy="70" r="24" stroke="#DFB174" strokeWidth="1" opacity="0.6" />
              <circle cx="205" cy="70" r="48" stroke="#327A7B" strokeWidth="1" opacity="0.4" />
            </svg>

            {/* Map Pin Point Callout */}
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sunlight/15 border border-sunlight/30 text-sunlight font-mono text-xs tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>{PROPERTY_CONFIG.coordinates}</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-sand-warm">
                Direct Beachfront Seclusion
              </h3>
              <p className="font-sans text-sm text-stone-muted max-w-md leading-relaxed font-light">
                Away from congested southern resort corridors, Kalpitiya remains an authentic sanctuary of fishing villages, untamed coastlines, and open ocean winds.
              </p>
            </div>

            {/* Geographical Markers */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-lagoon/20">
              <div>
                <span className="font-mono text-[9px] tracking-widest text-stone-muted uppercase block">West</span>
                <span className="font-serif text-lg text-sand-warm">Indian Ocean</span>
              </div>
              <div>
                <span className="font-mono text-[9px] tracking-widest text-stone-muted uppercase block">East</span>
                <span className="font-serif text-lg text-sand-warm">Puttalam Lagoon</span>
              </div>
              <div>
                <span className="font-mono text-[9px] tracking-widest text-stone-muted uppercase block">North</span>
                <span className="font-serif text-lg text-sand-warm">Dutch Bay & Reef</span>
              </div>
            </div>
          </div>

          {/* Journey Planning Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 glass-card p-8 sm:p-10 rounded-3xl border border-lagoon/20">
            <div className="space-y-6">
              <span className="font-mono text-[10px] tracking-[0.25em] text-sunlight uppercase block">
                Arrival Guide
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-sand-warm">
                Journey to the Sanctuary
              </h3>

              {/* Transit Steps */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-ocean-deep/60 border border-lagoon/20 flex items-start gap-4">
                  <Plane className="w-5 h-5 text-sunlight shrink-0 mt-1" />
                  <div className="space-y-1">
                    <span className="font-serif text-base text-sand-warm block">
                      Bandaranaike International Airport (CMB)
                    </span>
                    <p className="font-sans text-xs text-stone-muted leading-relaxed">
                      The primary international gateway to Sri Lanka in Katunayake / Colombo.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-ocean-deep/60 border border-lagoon/20 flex items-start gap-4">
                  <Car className="w-5 h-5 text-sunlight shrink-0 mt-1" />
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-base text-sand-warm">
                        Private Chauffeur Transfer
                      </span>
                      <button
                        onClick={onToggleChecklist}
                        className="font-mono text-[9px] text-sunlight flex items-center gap-1 hover:underline"
                        title="Route duration pending confirmation"
                      >
                        <HelpCircle className="w-2.5 h-2.5" />
                        Verify
                      </button>
                    </div>
                    <p className="font-sans text-xs text-stone-muted leading-relaxed">
                      Scenic coastal drive along the North-Western highway (estimated 2.5 to 3 hours). Private transfers can be coordinated through our concierge.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-ocean-deep/60 border border-lagoon/20 flex items-start gap-4">
                  <Compass className="w-5 h-5 text-sunlight shrink-0 mt-1" />
                  <div className="space-y-1">
                    <span className="font-serif text-base text-sand-warm block">
                      Lagoon & Estate Arrival
                    </span>
                    <p className="font-sans text-xs text-stone-muted leading-relaxed">
                      Arrive along the private palm lane directly into the quiet estate grounds.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-lagoon/20">
              <button
                onClick={onOpenAvailability}
                className="w-full py-3.5 rounded-full bg-sand-warm text-ocean-deep hover:bg-sunlight hover:text-ocean-deep transition-all duration-300 font-sans text-xs font-semibold tracking-widest uppercase shadow-xl"
              >
                Plan Your Journey
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
