import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GALLERY_ITEMS } from '../data/propertyData';

export const MinimalGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Architecture', 'Suites', 'Pool & Shore', 'Peninsula'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category?.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="gallery" className="relative bg-[#fafaf7] text-[#0f172a] py-16 md:py-32 px-4 sm:px-10 lg:px-16 border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2.5">
            <h2 className="text-[clamp(2rem,3.8vw,3.2rem)] font-black tracking-[-0.03em] leading-[1.05] text-[#0f172a]">
              Moments of light,<br />
              <em className="font-serif italic font-bold text-[#dc2626]">shade &amp; salt.</em>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#64748b] max-w-sm leading-relaxed">
            A curated visual chronicle of raw timber, sculpted colonnades, and open Indian Ocean horizons.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 sm:pb-0 sm:flex-wrap no-scrollbar overscroll-x-contain touch-pan-x">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer shrink-0 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wide uppercase transition-all duration-200 focus:outline-none select-none active:scale-95 ${
                  isSelected
                    ? "bg-[#0f172a] text-white shadow-sm scale-105"
                    : "bg-white border border-[#e2e8f0] text-[#64748b] hover:border-[#0f172a] hover:text-[#0f172a]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Enlarged Editorial Gallery Grid — Immersive Native Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className={item.span === 'col-span-2' && activeCategory === 'All' ? 'md:col-span-2' : ''}
            >
              <div
                className={`group relative rounded-[18px] sm:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md border border-[#e2e8f0] bg-[#0f172a] transition-all duration-300 w-full ${
                  item.span === 'col-span-2' && activeCategory === 'All' 
                    ? 'h-[300px] sm:h-[440px] lg:h-[560px]' 
                    : 'h-[270px] sm:h-[380px] lg:h-[480px]'
                }`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />
                
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                  <span className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase bg-[#0f172a]/90 backdrop-blur-xs text-white shadow-sm">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 text-white z-10 space-y-1">
                  <h3 className="font-sans text-lg sm:text-2xl font-bold [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/85 line-clamp-2 max-w-xl">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
