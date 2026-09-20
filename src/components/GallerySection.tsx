import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/propertyData';
import { Lightbox } from './Lightbox';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="relative bg-ocean-deep text-sand-warm py-24 md:py-36 px-6 md:px-12 border-t border-lagoon/15">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Stack */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-sunlight">
              Visual Archive · Editorial Curation
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-sand-warm tracking-tight">
              Moments of light, shade & salt.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'All Photographs' },
              { id: 'ocean', label: 'Ocean & Horizon' },
              { id: 'villa', label: 'Architecture' },
              { id: 'suites', label: 'Suites' },
              { id: 'details', label: 'Estate Grounds' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full font-sans text-xs tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-sand-warm text-ocean-deep font-semibold shadow-md'
                    : 'bg-ocean-card/60 text-sand-muted hover:text-sunlight border border-lagoon/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-lagoon/20 ${
                item.span === 'col-span-2' ? 'md:col-span-2 h-[380px] sm:h-[460px]' : 'h-[320px] sm:h-[380px]'
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Expand Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-ocean-deep/80 text-sand-warm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Maximize2 className="w-4 h-4 text-sunlight" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="font-mono text-[9px] tracking-[0.2em] text-sunlight uppercase block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-sand-warm">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-stone-muted line-clamp-1 mt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onSelectIndex={(index) => setLightboxIndex(index)}
        />
      )}
    </section>
  );
};
