import React, { useState } from 'react';
import { Sun, Maximize2, ShieldCheck, ArrowRight, Layers } from 'lucide-react';

interface SpatialEstateNavigatorProps {
  onOpenAvailability: (suiteId?: string) => void;
  onToggleChecklist: () => void;
}

interface EstateZone {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  materials: string[];
  dimensions: string;
  orientation: string;
  imageUrl: string;
  suiteId?: string;
  status: 'CONFIRMED' | 'NEEDS OWNER VERIFICATION';
}

export const SpatialEstateNavigator: React.FC<SpatialEstateNavigatorProps> = ({
  onOpenAvailability,
  onToggleChecklist
}) => {
  const [activeZoneId, setActiveZoneId] = useState('zone-pool');

  const zones: EstateZone[] = [
    {
      id: 'zone-pool',
      number: '01',
      name: '17m Sea-Facing Lap Pool',
      category: 'Water Axis',
      tagline: 'Linear reflection stretching directly toward the Indian Ocean sunset',
      description: 'The geometric spine of the estate. A 17-metre infinity pool finished in aquatic stone, aligned so swimmer strokes parallel the horizon line. Shaded on the eastern edge by mature coconut palms.',
      materials: ['Aquatic Slate Stone', 'Burma Teak Timber Deck', 'Sun-bleached Granite'],
      dimensions: '17.0m × 4.5m',
      orientation: 'Due West (Direct Sunset View)',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80',
      status: 'NEEDS OWNER VERIFICATION'
    },
    {
      id: 'zone-sapphire',
      number: '02',
      name: 'Sapphire Suite Pavilion',
      category: 'Master Sanctuary',
      tagline: 'High vaulted rafters facing the open sea breeze',
      description: 'The premier sea-facing master suite. Handcrafted timber window louvres filter the coastal sunlight into dramatic geometric stripes. Features an en-suite natural stone bathroom and deep private veranda.',
      materials: ['Hand-milled Teak Floors', 'Intricate Wooden Louvres', 'Natural River Stone'],
      dimensions: '~85 m² Private Living Area',
      orientation: 'West-North-West (Sea Facing)',
      imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80',
      suiteId: 'sapphire-suite',
      status: 'NEEDS OWNER VERIFICATION'
    },
    {
      id: 'zone-ruby',
      number: '03',
      name: 'Ruby Suite Pavilion',
      category: 'Garden Sanctuary',
      tagline: 'Intimate seclusion shaded beneath the coconut grove',
      description: 'Nestled on the sheltered garden flank of the villa. Offers complete quietude, natural cross-ventilation through high vaulted rafters, and a private veranda opening to the courtyard greenery.',
      materials: ['Polished Lime Plaster', 'Ceylon Stone', 'Woven Cane Seating'],
      dimensions: '~75 m² Private Living Area',
      orientation: 'South-West (Courtyard & Grove)',
      imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=80',
      suiteId: 'ruby-suite',
      status: 'NEEDS OWNER VERIFICATION'
    },
    {
      id: 'zone-veranda',
      number: '04',
      name: 'Central Dining Loggia & Verandas',
      category: 'Communal Space',
      tagline: 'High ceilings and sculpted columns for unhurried gatherings',
      description: 'The heart of tropical villa living. Open on three sides to catch the offshore breeze, with massive vaulted ceilings that keep midday hours cool and shaded. Large communal table for fresh local seafood and tropical breakfasts.',
      materials: ['Sculpted Masonry Columns', 'Terracotta Roman Tiles', 'Solid Teak Dining Table'],
      dimensions: '~120 m² Covered Open Air',
      orientation: 'Dual Breeze Corridor (Ocean to Lagoon)',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
      status: 'NEEDS OWNER VERIFICATION'
    },
    {
      id: 'zone-beach',
      number: '05',
      name: 'Coconut Grove & Dune Trail',
      category: 'Landscape & Coast',
      tagline: 'Over 100 palms leading to untouched shoreline',
      description: 'More than 2.47 acres of tranquil coastal property. Sand pathways wind beneath rustling coconut palms directly down to the quiet Kalpitiya beach where wild sea turtles nest and local fishing outriggers pass in the distance.',
      materials: ['Fine Pale Sand', 'Mature Coconut Palms', 'Indigenous Dune Flora'],
      dimensions: '~2.47 Acres (1 Hectare)',
      orientation: 'Continuous Oceanfront Border',
      imageUrl: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1400&q=80',
      status: 'CONFIRMED'
    }
  ];

  const activeZone = zones.find(z => z.id === activeZoneId) || zones[0];

  return (
    <section id="estate-plan" className="relative bg-ocean-surface text-sand-warm py-28 md:py-36 px-6 sm:px-10 lg:px-16 border-b border-white/10 overflow-hidden">
      
      <div className="max-w-[1720px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-sunlight">
              Spatial Folio · The Estate Plan
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-sand-warm tracking-tight">
              An architectural continuum of indoor & outdoor space.
            </h2>
          </div>
          
          <p className="font-sans text-sm text-stone-muted max-w-md leading-relaxed">
            Navigate the five primary spatial zones of the 2.47-acre estate. Built around light, symmetry, natural stone, and cross-ventilation.
          </p>
        </div>

        {/* Interactive Zone Selector Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {zones.map((zone) => {
            const isSelected = activeZoneId === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZoneId(zone.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-ocean-deep border-sunlight/50 shadow-xl shadow-black/40 scale-[1.02]'
                    : 'glass-card border-white/5 hover:border-white/20 hover:bg-ocean-card/50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-sunlight font-semibold">
                    {zone.number}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-stone-muted">
                    {zone.category}
                  </span>
                </div>
                <h4 className="font-serif text-base sm:text-lg text-sand-warm leading-snug">
                  {zone.name}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected Zone Deep Dive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Large High-Resolution Zone Image Stage */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden min-h-[420px] lg:min-h-[580px] shadow-2xl border border-lagoon/20 group">
            <img
              src={activeZone.imageUrl}
              alt={activeZone.name}
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-transparent to-transparent" />

            {/* Floating Zone Number & Tagline */}
            <div className="absolute bottom-8 left-8 right-8 space-y-2">
              <span className="font-mono text-[10px] tracking-widest text-sunlight uppercase block">
                ZONE {activeZone.number} · {activeZone.category}
              </span>
              <p className="font-serif text-2xl sm:text-3xl text-sand-warm font-light italic">
                &ldquo;{activeZone.tagline}&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Architectural Materiality, Dimensions & Concierge Inquire */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              
              {/* Header */}
              <div className="space-y-2 border-b border-white/10 pb-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-sunlight tracking-widest uppercase">
                    Zone {activeZone.number} Specification
                  </span>
                  {activeZone.status === 'CONFIRMED' ? (
                    <span className="inline-flex items-center gap-1 font-mono text-[9px] text-lagoon-light">
                      <ShieldCheck className="w-3 h-3" /> CONFIRMED
                    </span>
                  ) : (
                    <button
                      onClick={onToggleChecklist}
                      className="inline-flex items-center gap-1 font-mono text-[9px] text-sunlight hover:underline"
                    >
                      <span>Verification Pending</span>
                    </button>
                  )}
                </div>
                <h3 className="font-serif text-3xl text-sand-warm">
                  {activeZone.name}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-sm text-stone-muted leading-relaxed font-light">
                {activeZone.description}
              </p>

              {/* Spatial Metadata Grid */}
              <div className="grid grid-cols-2 gap-4 py-2 border-y border-white/10">
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-stone-muted uppercase block mb-1">
                    Spatial Proportions
                  </span>
                  <div className="flex items-center gap-1.5 font-serif text-base text-sand-warm">
                    <Maximize2 className="w-4 h-4 text-sunlight" />
                    <span>{activeZone.dimensions}</span>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[9px] tracking-widest text-stone-muted uppercase block mb-1">
                    Solar Orientation
                  </span>
                  <div className="flex items-center gap-1.5 font-serif text-base text-sand-warm">
                    <Sun className="w-4 h-4 text-sunlight" />
                    <span>{activeZone.orientation}</span>
                  </div>
                </div>
              </div>

              {/* Material Palette Swatches */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] tracking-widest text-stone-muted uppercase flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-sunlight" />
                  Materiality Palette
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeZone.materials.map((mat, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-ocean-deep/60 border border-lagoon/20 text-xs font-sans text-sand-muted"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Action */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => onOpenAvailability(activeZone.suiteId)}
                className="w-full py-4 rounded-full bg-sand-warm text-ocean-deep hover:bg-sunlight hover:text-ocean-deep transition-all duration-300 font-sans text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02]"
              >
                <span>Inquire for {activeZone.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
