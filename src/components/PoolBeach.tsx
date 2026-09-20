import React from 'react';
import { PROPERTY_CONFIG } from '../data/propertyData';

export const PoolBeach: React.FC = () => {
  return (
    <section id="pool-beach" className="relative bg-ocean-deep text-sand-warm py-24 md:py-36 overflow-hidden">
      
      {/* Editorial Introduction Stack */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-4 mb-16">
        <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-sunlight">
          The Water · Horizon & Pool
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-sand-warm text-balance">
          Between palm shade and open sea.
        </h2>
        <p className="font-sans text-sm sm:text-base text-stone-muted max-w-xl mx-auto leading-relaxed">
          A 17-metre sea-facing infinity lap pool stretches toward the Indian Ocean, offering a calm mirror of clouds by day and molten amber reflections at sunset.
        </p>
      </div>

      {/* Oversized Full-Width Cinematic Viewport */}
      <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden h-[540px] sm:h-[680px] lg:h-[820px] shadow-2xl border border-lagoon/20">
          
          {/* Ambient Video / High-Res Visual */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={PROPERTY_CONFIG.videos.pool.fallbackImage}
            className="w-full h-full object-cover object-center"
          >
            <source src={PROPERTY_CONFIG.videos.pool.src} type="video/mp4" />
            <img
              src={PROPERTY_CONFIG.videos.pool.fallbackImage}
              alt="17m Infinity lap pool overlooking the ocean"
              className="w-full h-full object-cover"
            />
          </video>

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-transparent to-ocean-deep/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/40 via-transparent to-ocean-deep/40" />

          {/* Editorial Captions Floating on Viewport */}
          <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6 z-10">
            <div className="max-w-md space-y-2">
              <span className="font-mono text-[10px] tracking-[0.25em] text-sunlight uppercase block">
                Linear Horizon
              </span>
              <p className="font-serif text-2xl sm:text-3xl text-sand-warm font-light leading-snug">
                Step off the timber pool deck directly onto the untouched sands of Kalpitiya.
              </p>
            </div>
            
            <div className="glass-card px-6 py-4 rounded-xl border border-sunlight/20 self-start sm:self-auto">
              <div className="font-mono text-[10px] tracking-widest text-stone-muted uppercase">Length</div>
              <div className="font-serif text-2xl text-sunlight font-normal">17 Metres</div>
              <div className="text-[10px] text-stone-muted font-sans">Sea-facing infinity edge</div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
