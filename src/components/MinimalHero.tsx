import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

interface CollageItem {
  id: string;
  gridClass: string;
  badge: string;
  title: string;
  image: string;
  alt: string;
  subtitle: string;
}

export const MinimalHero: React.FC = () => {

  const collageItems: CollageItem[] = [
    {
      id: 'villa-estate',
      gridClass: 'col-start-1 col-span-2 row-start-1 row-span-2',
      badge: 'The Villa Estate',
      title: 'Dolphin Beach Villa & Sunset Horizon',
      subtitle: 'Sculpted colonnades, terracotta clay roofs, and 17-metre sea-facing lap pool overlooking the ocean at sunset.',
      image: '/images/villa_sunset_pool.jpg',
      alt: 'Dolphin Beach Villa facade, Roman peristyle, and sunset infinity pool',
    },
    {
      id: 'suite',
      gridClass: 'col-start-3 row-start-1',
      badge: 'Suite',
      title: 'Sapphire Master Suite',
      subtitle: 'Vaulted teak rafters, woven cane furniture, and double French doors opening to private sea-view verandas.',
      image: '/images/estate/suite_full_poster.jpg',
      alt: 'Sapphire Master Suite interior with teak rafters and veranda view',
    },
    {
      id: 'loggia',
      gridClass: 'col-start-3 row-start-2',
      badge: 'Living Pavilion',
      title: 'Open Living Loggia',
      subtitle: 'Open-air living pavilion with vaulted teak rafters, shaded lounge seating, and gentle cross-breezes looking out to sea.',
      image: '/images/estate/living_poster.jpg',
      alt: 'Open-air central living loggia at Dolphin Beach Villa',
    },
    {
      id: 'grove',
      gridClass: 'col-start-1 row-start-3',
      badge: 'Palm Grove',
      title: 'Palm Grove & Colonnade',
      subtitle: 'Over 100 mature coconut palms and Roman-inspired peristyles across 2.47 secluded beachfront acres.',
      image: '/images/estate/arch_grove_poster.jpg',
      alt: 'Coconut palm grove and colonnade at Dolphin Beach Villa Kalpitiya',
    },
    {
      id: 'beach',
      gridClass: 'col-start-2 col-span-2 row-start-3',
      badge: 'Beachfront',
      title: 'Private Shoreline & Dunes',
      subtitle: 'Direct foot access to wild golden sands and rolling ocean waves without commercial resorts in sight.',
      image: '/images/estate/kite_front.jpg',
      alt: 'Pristine ocean shoreline and dunes at Kalpitiya',
    },
  ];

  return (
    <>
      <section
        className="tcg-12 w-full min-h-svh flex items-center justify-center bg-[#fafaf7] font-sans text-[#0f172a] px-4 sm:px-8 lg:px-12 py-8 pt-24 sm:pt-28 lg:pt-32"
        aria-label="Hero photo collage grid"
      >
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
          
          {/* Left Column: Editorial Brand & Action Stack */}
          <div className="lg:col-span-6 flex flex-col gap-4 max-w-[540px] max-lg:max-w-none max-lg:items-center max-lg:text-center">
            
            {/* Location Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#e2e8f0] bg-white/80 backdrop-blur-xs text-[10px] font-mono tracking-widest uppercase font-bold text-[#64748b]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] inline-block" />
                Kalpitiya &middot; Sri Lanka
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.1rem,5.5vw,3.6rem)] font-black tracking-[-0.03em] leading-[1.06] text-[#0f172a]"
            >
              Where the ocean<br />
              <em className="font-serif italic font-bold text-[#dc2626]">becomes home.</em>
            </motion.h1>

            {/* Descriptive Body */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-[46ch] text-[clamp(0.92rem,1.2vw,1.1rem)] leading-[1.6] text-[#64748b] text-pretty"
            >
              A private 2.47-acre coastal sanctuary on Sri Lanka's secluded western coastline. Featuring a 17-metre sea-facing lap pool, two vaulted en-suite master suites, and unhurried beachfront living.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-1 flex flex-wrap items-center gap-4 max-lg:justify-center"
            >
              <a
                href="#villa"
                className="inline-flex items-center min-h-11 text-[0.94rem] font-semibold text-[#0f172a] underline decoration-1 underline-offset-4 hover:text-[#dc2626] focus-visible:outline-2 focus-visible:outline-[#dc2626] focus-visible:outline-offset-3 transition-colors"
              >
                Explore the estate
              </a>
            </motion.div>

            {/* Airport Distance — Prominent Homepage Callout */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-[12px] bg-white border border-[#e2e8f0] shadow-xs text-xs sm:text-sm text-[#64748b] font-sans max-lg:justify-center hover:border-black/20 transition-colors w-full sm:w-auto"
            >
              <div className="w-6 h-6 rounded-[7px] bg-[#fbe3e3] flex items-center justify-center shrink-0 text-[#dc2626]">
                <Plane className="w-3.5 h-3.5" />
              </div>
              <span className="leading-snug">
                <strong className="text-[#0f172a] font-bold">142 km (~2.5 hrs)</strong> from Bandaranaike International Airport (CMB)
              </span>
            </motion.div>

            <div className="mt-2 h-px w-full bg-[#e2e8f0]" />

            {/* Proof Stats Row */}
            <motion.dl
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 min-[440px]:grid-cols-4 sm:flex sm:flex-row gap-4 sm:gap-[clamp(20px,3vw,36px)] w-full max-lg:justify-center"
            >
              <div className="flex flex-col gap-0.5 max-lg:items-center">
                <dd className="text-xl sm:text-2xl font-black tracking-[-0.02em] tabular-nums text-[#0f172a]">
                  17m
                </dd>
                <dt className="text-[0.72rem] sm:text-[0.76rem] font-semibold text-[#64748b]">Infinity pool</dt>
              </div>
              <div className="flex flex-col gap-0.5 max-lg:items-center">
                <dd className="text-xl sm:text-2xl font-black tracking-[-0.02em] tabular-nums text-[#0f172a]">
                  2.47
                </dd>
                <dt className="text-[0.72rem] sm:text-[0.76rem] font-semibold text-[#64748b]">Acres private</dt>
              </div>
              <div className="flex flex-col gap-0.5 max-lg:items-center">
                <dd className="text-xl sm:text-2xl font-black tracking-[-0.02em] tabular-nums text-[#0f172a]">
                  2
                </dd>
                <dt className="text-[0.72rem] sm:text-[0.76rem] font-semibold text-[#64748b]">Master suites</dt>
              </div>
              <div className="flex flex-col gap-0.5 max-lg:items-center">
                <dd className="text-xl sm:text-2xl font-black tracking-[-0.02em] tabular-nums text-[#0f172a]">
                  8
                </dd>
                <dt className="text-[0.72rem] sm:text-[0.76rem] font-semibold text-[#64748b]">Guests max</dt>
              </div>
            </motion.dl>
          </div>

          {/* Right Column: Visual Stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 w-full"
            aria-label="Featured estate views"
          >
            {/* Desktop Presentation: 3x3 Asymmetrical Collage Grid */}
            <div className="hidden md:grid [grid-template-columns:repeat(3,1fr)] [grid-template-rows:repeat(3,1fr)] gap-3 lg:gap-3.5 aspect-[1.1/1] min-h-[460px] lg:min-h-[560px]">
              {collageItems.map((item) => (
                <div
                  key={item.id}
                  className={`group relative isolate ${item.gridClass} flex items-end p-3.5 sm:p-4 rounded-[16px] overflow-hidden bg-[#0f172a] shadow-sm hover:shadow-md transition-shadow duration-300 after:absolute after:inset-0 after:z-1 after:bg-gradient-to-t after:from-black/80 after:via-black/20 after:to-transparent`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 right-3 z-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-white text-[9px] uppercase font-bold tracking-wider group-hover:text-[#dc2626] transition-colors">
                      {item.badge}
                    </span>
                  </div>
                  <div className="relative z-2 flex items-center justify-between w-full">
                    <span className="text-white text-[0.88rem] sm:text-[0.96rem] font-bold [text-shadow:0_1px_3px_rgba(0,0,0,0.6)] leading-tight line-clamp-1">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Presentation (< 768px): Tailored Touch Layout */}
            <div className="flex flex-col gap-3 md:hidden w-full">
              {/* Primary Villa Feature Card */}
              <div className="relative h-[250px] sm:h-[300px] rounded-[18px] overflow-hidden bg-[#0f172a] shadow-sm flex items-end p-4 after:absolute after:inset-0 after:z-1 after:bg-gradient-to-t after:from-black/85 after:via-black/25 after:to-transparent">
                <img
                  src={collageItems[0].image}
                  alt={collageItems[0].alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-3.5 right-3.5 z-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0f172a]/90 backdrop-blur-xs text-white text-[9px] font-mono uppercase font-bold tracking-wider">
                    {collageItems[0].badge}
                  </span>
                </div>
                <div className="relative z-2 space-y-0.5">
                  <h3 className="text-white text-base sm:text-lg font-bold [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
                    {collageItems[0].title}
                  </h3>
                  <p className="text-white/80 text-xs line-clamp-1">
                    {collageItems[0].subtitle}
                  </p>
                </div>
              </div>

              {/* 2x2 Clean Sub-Grid for Supporting Views */}
              <div className="grid grid-cols-2 gap-2.5">
                {collageItems.slice(1).map((item) => (
                  <div
                    key={item.id}
                    className="relative h-[130px] sm:h-[150px] rounded-[14px] overflow-hidden bg-[#0f172a] shadow-xs flex items-end p-2.5 after:absolute after:inset-0 after:z-1 after:bg-gradient-to-t after:from-black/80 after:via-black/20 after:to-transparent"
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 z-2">
                      <span className="px-2 py-0.5 rounded-full bg-black/60 text-white text-[8px] font-mono uppercase font-bold tracking-wider">
                        {item.badge}
                      </span>
                    </div>
                    <span className="relative z-2 text-white text-xs font-bold [text-shadow:0_1px_2px_rgba(0,0,0,0.6)] line-clamp-1 leading-tight">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </section>
    </>
  );
};
