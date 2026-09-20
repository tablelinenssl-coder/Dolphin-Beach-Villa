import React, { useState } from 'react';
import { ArrowRight, Users, Eye, Bath, Sun, CheckCircle2, HelpCircle } from 'lucide-react';
import { SUITES_DATA } from '../data/propertyData';

interface SuitesShowcaseProps {
  onOpenAvailability: (suiteId?: string) => void;
  onToggleChecklist: () => void;
}

export const SuitesShowcase: React.FC<SuitesShowcaseProps> = ({ onOpenAvailability, onToggleChecklist }) => {
  const [activeSuiteId, setActiveSuiteId] = useState<string>(SUITES_DATA[0].id);
  const selectedSuite = SUITES_DATA.find(s => s.id === activeSuiteId) || SUITES_DATA[0];

  return (
    <section id="suites" className="relative bg-ocean-deep text-sand-warm py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-mono text-[11px] tracking-[0.25em] text-sunlight uppercase">
              The Stay · Master Pavilions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-sand-warm tracking-tight">
              Two sanctuaries of unhurried rest.
            </h2>
          </div>
          
          {/* Suite Selector Buttons */}
          <div className="flex items-center gap-2 p-1.5 rounded-full glass-card border border-lagoon/30 self-start md:self-auto">
            {SUITES_DATA.map((suite) => (
              <button
                key={suite.id}
                onClick={() => setActiveSuiteId(suite.id)}
                className={`px-5 py-2 rounded-full font-sans text-xs tracking-wider uppercase transition-all duration-300 ${
                  activeSuiteId === suite.id
                    ? 'bg-sand-warm text-ocean-deep font-semibold shadow-md'
                    : 'text-sand-muted hover:text-sunlight'
                }`}
              >
                {suite.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Suite Immersive Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Visual Showcase (Two images: Primary + Secondary Detail) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden h-[360px] sm:h-[460px] lg:h-[520px] shadow-2xl group">
              <img
                src={selectedSuite.imageUrl}
                alt={selectedSuite.name}
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-ocean-deep/80 backdrop-blur-md text-[10px] font-mono tracking-widest text-sunlight border border-sunlight/20 uppercase">
                  {selectedSuite.name}
                </span>
                <button
                  onClick={onToggleChecklist}
                  className="px-2.5 py-1 rounded-full bg-ocean-surface/80 backdrop-blur-md text-[9px] font-mono text-stone-muted border border-white/10 flex items-center gap-1 hover:text-sand-warm"
                >
                  <HelpCircle className="w-2.5 h-2.5 text-sunlight" />
                  Specs verify pending
                </button>
              </div>

              {/* Bottom Tagline */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-xl sm:text-2xl text-sand-warm italic">
                  &ldquo;{selectedSuite.tagline}&rdquo;
                </p>
              </div>
            </div>

            {/* Secondary atmospheric image strip */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-36 relative">
                <img
                  src={selectedSuite.secondaryImage}
                  alt={`${selectedSuite.name} architectural detail`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-ocean-deep/20" />
              </div>
              <div className="glass-card rounded-xl p-4 flex flex-col justify-center border border-lagoon/20">
                <span className="font-mono text-[9px] tracking-widest text-sunlight uppercase block mb-1">
                  Owner Note
                </span>
                <p className="font-sans text-[11px] text-stone-muted leading-relaxed">
                  Only verified architectural specs are displayed. Exact bedding arrangements and customized amenities are confirmed upon private inquiry.
                </p>
              </div>
            </div>
          </div>

          {/* Suite Story, Specs & Enquiry Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 glass-card p-8 sm:p-10 rounded-2xl border border-lagoon/20">
            <div className="space-y-6">
              
              {/* Suite Title & Narrative */}
              <div>
                <span className="font-mono text-[10px] tracking-[0.25em] text-sunlight uppercase block mb-2">
                  Master Suite
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-sand-warm font-normal">
                  {selectedSuite.name}
                </h3>
                <p className="font-sans text-sm text-stone-muted leading-relaxed mt-4 font-light">
                  {selectedSuite.description}
                </p>
              </div>

              {/* Architectural Spec Badges */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs border-b border-lagoon/15 pb-2.5">
                  <Users className="w-4 h-4 text-sunlight shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-muted block text-[10px] uppercase font-mono tracking-wider">Capacity</span>
                    <span className="text-sand-warm font-sans">{selectedSuite.specs.capacity}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs border-b border-lagoon/15 pb-2.5">
                  <Eye className="w-4 h-4 text-sunlight shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-muted block text-[10px] uppercase font-mono tracking-wider">View</span>
                    <span className="text-sand-warm font-sans">{selectedSuite.specs.view}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs border-b border-lagoon/15 pb-2.5">
                  <Bath className="w-4 h-4 text-sunlight shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-muted block text-[10px] uppercase font-mono tracking-wider">Bathroom</span>
                    <span className="text-sand-warm font-sans">{selectedSuite.specs.bathroom}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <Sun className="w-4 h-4 text-sunlight shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-muted block text-[10px] uppercase font-mono tracking-wider">Veranda</span>
                    <span className="text-sand-warm font-sans">{selectedSuite.specs.veranda}</span>
                  </div>
                </div>
              </div>

              {/* Highlight Features */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[10px] tracking-wider text-stone-muted uppercase block">
                  Features & Details
                </span>
                <ul className="space-y-1.5">
                  {selectedSuite.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-sand-muted/90 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lagoon-light shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Inquire Action */}
            <div className="pt-6 border-t border-lagoon/20">
              <button
                onClick={() => onOpenAvailability(selectedSuite.id)}
                className="w-full py-4 rounded-full bg-sand-warm text-ocean-deep hover:bg-sunlight hover:text-ocean-deep transition-all duration-300 font-sans text-xs font-semibold tracking-[0.18em] uppercase flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02]"
              >
                <span>Inquire for {selectedSuite.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
