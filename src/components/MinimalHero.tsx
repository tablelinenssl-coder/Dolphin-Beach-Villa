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
        className="tcg-12 w-full min-h-svh flex items-center justify-center bg-[#fafaf7] font-sans text-[#0f172a] px-[clamp(20px,3vw,48px)] py-[clamp(28px,4vw,56px)] pt-24 sm:pt-28 lg:pt-32"
        aria-label="Hero photo collage grid"
      >
        <div className="w-full max-w-[1200px] grid [grid-template-columns:1fr_1.2fr] max-[900px]:[grid-template-columns:1fr] items-center gap-[clamp(24px,3.4vw,56px)] max-[900px]:gap-8">
          
          {/* Left Column: Editorial Brand & Action Stack */}
          <div className="flex flex-col gap-4 max-w-[520px] max-[900px]:max-w-none max-[900px]:items-center max-[900px]:text-center">
            
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
              className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-black tracking-[-0.03em] leading-[1.04] text-[#0f172a]"
            >
              Where the ocean<br />
              <em className="font-serif italic font-bold text-[#dc2626]">becomes home.</em>
            </motion.h1>

            {/* Descriptive Body */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-[46ch] text-[clamp(0.96rem,1.2vw,1.1rem)] leading-[1.55] text-[#64748b] text-pretty"
            >
              A private 2.47-acre coastal sanctuary on Sri Lanka's secluded western coastline. Featuring a 17-metre sea-facing lap pool, two vaulted en-suite master suites, and unhurried beachfront living.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-1 flex flex-wrap items-center gap-4 max-[900px]:justify-center"
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
              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-[12px] bg-white border border-[#e2e8f0] shadow-xs text-xs sm:text-sm text-[#64748b] font-sans max-[900px]:justify-center hover:border-black/20 transition-colors"
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
              className="grid grid-cols-2 min-[460px]:grid-cols-4 sm:flex sm:flex-row gap-x-6 gap-y-3 sm:gap-[clamp(20px,3vw,36px)]"
            >
              <div className="flex flex-col gap-0.5">
                <dd className="text-xl sm:text-2xl font-black tracking-[-0.02em] tabular-nums text-[#0f172a]">
                  17m
                </dd>
                <dt className="text-[0.72rem] sm:text-[0.76rem] font-semibold text-[#64748b]">Infinity pool</dt>
              </div>
              <div className="flex flex-col gap-0.5">
                <dd className="text-xl sm:text-2xl font-black tracking-[-0.02em] tabular-nums text-[#0f172a]">
                  2.47
                </dd>
                <dt className="text-[0.72rem] sm:text-[0.76rem] font-semibold text-[#64748b]">Acres private</dt>
              </div>
              <div className="flex flex-col gap-0.5">
                <dd className="text-xl sm:text-2xl font-black tracking-[-0.02em] tabular-nums text-[#0f172a]">
                  2
                </dd>
                <dt className="text-[0.72rem] sm:text-[0.76rem] font-semibold text-[#64748b]">Master suites</dt>
              </div>
              <div className="flex flex-col gap-0.5">
                <dd className="text-xl sm:text-2xl font-black tracking-[-0.02em] tabular-nums text-[#0f172a]">
                  8
                </dd>
                <dt className="text-[0.72rem] sm:text-[0.76rem] font-semibold text-[#64748b]">Guests max</dt>
              </div>
            </motion.dl>
          </div>

          {/* Right Column: 3x3 Photo Collage Grid with Real Graphics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid [grid-template-columns:repeat(3,1fr)] [grid-template-rows:repeat(3,1fr)] gap-[clamp(10px,1.2vw,16px)] aspect-[1.1/1] min-h-[clamp(380px,46vw,620px)] max-[900px]:aspect-[1.3/1] max-[900px]:min-h-[360px] max-[560px]:aspect-square"
            aria-label="Featured estate views"
          >
            {collageItems.map((item) => (
              <div
                key={item.id}
                className={`group relative isolate ${item.gridClass} flex items-end p-3.5 sm:p-4 rounded-[16px] overflow-hidden bg-[#0f172a] shadow-sm hover:shadow-md transition-shadow duration-300 after:absolute after:inset-0 after:z-1 after:bg-gradient-to-t after:from-black/80 after:via-black/20 after:to-transparent`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Top Right Pill Badge */}
                <div className="absolute top-3 right-3 z-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-white text-[9px] uppercase font-bold tracking-wider group-hover:text-[#dc2626] transition-colors">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Photo Title */}
                <div className="relative z-2 flex items-center justify-between w-full">
                  <span className="text-white text-[0.88rem] sm:text-[0.96rem] font-bold [text-shadow:0_1px_3px_rgba(0,0,0,0.6)] leading-tight line-clamp-1">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
};
