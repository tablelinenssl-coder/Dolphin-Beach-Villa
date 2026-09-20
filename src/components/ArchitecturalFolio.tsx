import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Plate {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  architecturalNote: string;
  craft: string;
  imageUrl: string;
}

export const ArchitecturalFolio: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const plates: Plate[] = [
    {
      id: "p1",
      number: "PLATE 01",
      title: "High Vaulted Ceilings",
      subtitle: "Passive Convective Cooling",
      architecturalNote: "Soaring timber rafters capture warm interior air and channel it upward, drawing cool ocean breezes through floor-level louvres.",
      craft: "Solid Ceylon Hardwood Rafters",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "p2",
      number: "PLATE 02",
      title: "Sculpted Columns",
      subtitle: "Continuous Shaded Verandas",
      architecturalNote: "Deep loggias supported by sculpted masonry columns create sheltered circulation zones around the entire perimeter.",
      craft: "Hand-finished Lime Masonry",
      imageUrl: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "p3",
      number: "PLATE 03",
      title: "Timber Louvre Grids",
      subtitle: "Filtered Equatorial Illumination",
      architecturalNote: "Intricately slotted wooden window screens filter harsh midday glare into calming geometric light patterns on teak floors.",
      craft: "Artisan Joinery",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "p4",
      number: "PLATE 04",
      title: "17-Metre Infinity Lap Pool",
      subtitle: "Aquatic Reflection Line",
      architecturalNote: "The linear water axis extends straight toward the Indian Ocean, providing both a 17m athletic lap pool and a sunset horizon mirror.",
      craft: "Cut Natural Slate",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "p5",
      number: "PLATE 05",
      title: "Roman Roof Tiles",
      subtitle: "Thermal Mass & Heritage Geometry",
      architecturalNote: "Interlocking terracotta tiles reflect tropical solar heat while giving the villa its distinctive timeless profile above the palms.",
      craft: "Kiln-Fired Terracotta",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "p6",
      number: "PLATE 06",
      title: "Indoor-Outdoor Bathrooms",
      subtitle: "Natural Stone Rain Showers",
      architecturalNote: "En-suite bathrooms open to secluded private courtyards, surrounded by indigenous foliage and rough-hewn stone.",
      craft: "Hand-Selected River Rock",
      imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="architectural-folio" className="relative bg-sand-warm text-ocean-deep py-28 md:py-36 px-6 sm:px-10 lg:px-16 border-b border-ocean-deep/10 overflow-hidden">
      
      <div className="max-w-[1720px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-lagoon font-medium">
              Architectural Monograph · Craft & Material
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-ocean-deep tracking-tight">
              An architectural folio of details.
            </h2>
          </div>

          {/* Scroller Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-ocean-deep/20 text-ocean-deep hover:bg-ocean-deep hover:text-sand-warm transition-all flex items-center justify-center"
              aria-label="Scroll left in folio"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-ocean-deep text-sand-warm hover:bg-lagoon transition-all flex items-center justify-center shadow-lg"
              aria-label="Scroll right in folio"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Filmstrip Folio Container */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
        >
          {plates.map((plate) => (
            <div
              key={plate.id}
              className="w-[320px] sm:w-[380px] lg:w-[420px] shrink-0 snap-start bg-white rounded-3xl overflow-hidden shadow-lg border border-ocean-deep/5 flex flex-col justify-between group"
            >
              {/* Image Stage */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={plate.imageUrl}
                  alt={plate.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-ocean-deep/80 text-sunlight font-mono text-[10px] tracking-widest uppercase">
                  {plate.number}
                </div>
              </div>

              {/* Editorial Description */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] tracking-widest text-lagoon uppercase block">
                    {plate.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-ocean-deep font-normal">
                    {plate.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-stone-dark leading-relaxed font-light">
                    {plate.architecturalNote}
                  </p>
                </div>

                <div className="pt-4 border-t border-ocean-deep/10 flex items-center justify-between text-[11px] font-mono text-stone-muted">
                  <span>CRAFT SPEC</span>
                  <span className="text-ocean-deep font-medium">{plate.craft}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
