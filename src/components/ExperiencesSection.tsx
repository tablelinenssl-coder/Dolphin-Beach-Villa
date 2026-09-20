import React, { useState } from 'react';
import { Compass, Wind, Fish, Trees, Landmark } from 'lucide-react';
import { EXPERIENCES } from '../data/propertyData';

export const ExperiencesSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ocean' | 'wind' | 'nature' | 'culture'>('all');

  const filteredExperiences = filter === 'all'
    ? EXPERIENCES
    : EXPERIENCES.filter(e => e.category === filter);

  return (
    <section id="experiences" className="relative bg-ocean-surface text-sand-warm py-24 md:py-36 px-6 md:px-12 border-t border-lagoon/15">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Stack */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-mono text-[11px] tracking-[0.25em] text-sunlight uppercase">
              The Destination · Beyond the Gate
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-sand-warm tracking-tight">
              Wild waters, lagoon winds & ancient soil.
            </h2>
          </div>
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'All Pursuits', icon: <Compass className="w-3.5 h-3.5" /> },
              { id: 'ocean', label: 'Ocean & Dolphins', icon: <Fish className="w-3.5 h-3.5" /> },
              { id: 'wind', label: 'Kitesurfing', icon: <Wind className="w-3.5 h-3.5" /> },
              { id: 'nature', label: 'Wildlife & Safari', icon: <Trees className="w-3.5 h-3.5" /> },
              { id: 'culture', label: 'Cultural Heritage', icon: <Landmark className="w-3.5 h-3.5" /> },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as typeof filter)}
                className={`px-4 py-1.5 rounded-full font-sans text-xs tracking-wider uppercase flex items-center gap-1.5 transition-all duration-300 shrink-0 ${
                  filter === cat.id
                    ? 'bg-sand-warm text-ocean-deep font-semibold shadow-md'
                    : 'bg-ocean-card/60 text-sand-muted hover:text-sunlight border border-lagoon/20'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="glass-card rounded-2xl overflow-hidden border border-lagoon/20 hover:border-sunlight/40 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={exp.imageUrl}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-transparent to-transparent" />
                  
                  {exp.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-ocean-deep/80 backdrop-blur-md text-[9px] font-mono tracking-widest text-sunlight border border-sunlight/20 uppercase">
                      {exp.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="font-mono text-[10px] tracking-widest text-stone-muted uppercase block">
                    {exp.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-sand-warm group-hover:text-sunlight transition-colors">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-stone-muted leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Verification & Environmental Respect Footnote */}
              {exp.verificationNote && (
                <div className="p-6 pt-0">
                  <div className="p-2.5 rounded-lg bg-ocean-deep/50 border border-lagoon/15 text-[10px] font-mono text-stone-muted">
                    <span className="text-sunlight block mb-0.5">Note:</span>
                    {exp.verificationNote}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
