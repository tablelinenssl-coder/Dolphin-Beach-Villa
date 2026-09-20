import React from 'react';
import { PROPERTY_CONFIG } from '../data/propertyData';

export const BrandStatement: React.FC = () => {
  return (
    <section id="statement" className="relative bg-sand-warm text-ocean-deep py-28 md:py-36 px-6 md:px-12 transition-colors duration-700 overflow-hidden">
      
      {/* Decorative Subtle Background Watermark / Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-ocean-deep font-serif text-[18vw] leading-none whitespace-nowrap">
        KALPITIYA
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
        {/* Eyebrow */}
        <p className="font-mono text-[11px] md:text-xs tracking-[0.3em] uppercase text-lagoon font-medium">
          Atmosphere · The Sanctuary
        </p>

        {/* Monumental Editorial Statement */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ocean-deep font-normal leading-[1.18] tracking-tight text-balance">
          &ldquo;{PROPERTY_CONFIG.brandStatement}&rdquo;
        </h2>

        {/* Refined Divider */}
        <div className="w-16 h-[1px] bg-sunlight mx-auto" />

        {/* Narrative Paragraph */}
        <div className="max-w-2xl mx-auto space-y-6 text-stone-dark font-sans text-base sm:text-lg leading-relaxed font-light">
          <p>
            On the secluded shores of the Kalpitiya peninsula, between tranquil coastal lagoons and the wild expanse of the Indian Ocean, lies a retreat created for stillness.
          </p>
          <p>
            Here, luxury is not defined by gilded extravagance, but by privacy, authentic timber architecture, the shade of mature palms, and the silence that descends as the equatorial sun dips below the water.
          </p>
        </div>

        {/* Signature Line */}
        <div className="pt-4">
          <span className="font-serif italic text-lg sm:text-xl text-lagoon">
            Where the ocean becomes home.
          </span>
        </div>
      </div>
    </section>
  );
};
