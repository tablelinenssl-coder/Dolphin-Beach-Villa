import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Sun, Compass } from 'lucide-react';

export const MinimalPoolSection: React.FC = () => {
  const poolFeatures = [
    {
      icon: Waves,
      title: "17-Metre Lap Axis",
      desc: "Designed for unhindered morning swim laps, perfectly perpendicular to the ocean horizon."
    },
    {
      icon: Sun,
      title: "Terracotta Peristyle",
      desc: "Shaded columned veranda with deep hardwood daybeds under mature coconut palm canopy."
    },
    {
      icon: Compass,
      title: "Direct Shore Access",
      desc: "Private sand pathway leading directly from the pool lawn to untouched golden beach."
    }
  ];

  return (
    <section id="pool" className="relative bg-[#fafaf7] text-[#0f172a] py-24 md:py-32 border-t border-[#e2e8f0] overflow-hidden">
      
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto px-6 text-center space-y-4 mb-12">


        <h2 className="text-[clamp(2.2rem,4.2vw,3.6rem)] font-black tracking-[-0.03em] leading-[1.05] text-[#0f172a]">
          Between palm shade<br />
          <em className="font-serif italic font-bold text-[#dc2626]">and the open sea.</em>
        </h2>

        <p className="font-sans text-sm sm:text-base text-[#64748b] max-w-lg mx-auto leading-relaxed">
          A 17-metre infinity lap pool extends directly toward the western horizon, providing a calm mirror of clouds by day and molten amber reflections at sunset.
        </p>
      </div>

      {/* Monumental Full-Width Viewport */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[16px] overflow-hidden h-[440px] sm:h-[540px] lg:h-[620px] shadow-md border border-[#e2e8f0] bg-[#0f172a]"
        >
          <img
            src="/images/estate/pool_ocean.jpg"
            alt="17m Infinity lap pool and ocean terrace at Dolphin Beach Villa Kalpitiya at sunset"
            className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-1000 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          {/* Top Right Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest bg-[#0f172a] text-white shadow-sm">
              17M INFINITY LAP POOL
            </span>
          </div>

          {/* Floating Caption */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 flex flex-col sm:flex-row sm:items-end justify-between right-6 sm:right-10 gap-4 text-white z-10">
            <div className="space-y-1 max-w-md">
              <span className="font-mono text-[9px] tracking-widest text-white/90 uppercase block font-semibold mb-1">
                Direct Shore Access
              </span>
              <p className="font-serif text-2xl sm:text-3xl font-bold italic [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
                Step off the terracotta pool terrace directly onto untouched sand.
              </p>
            </div>

            <div className="font-mono text-xs text-white/90 font-semibold border-t sm:border-t-0 sm:border-l border-white/20 pt-2 sm:pt-0 sm:pl-6">
              17-METRE LAP POOL &middot; DIRECT SEA FACING
            </div>
          </div>
        </motion.div>

        {/* 3 Architectural Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {poolFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="bg-white border border-[#e2e8f0] rounded-[14px] hover:border-black/20 transition-all p-6 space-y-2">
                <div className="w-9 h-9 rounded-[10px] bg-[#fafaf7] border border-[#e2e8f0] flex items-center justify-center text-[#dc2626] mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-sans text-base font-bold text-[#0f172a]">
                  {feat.title}
                </h3>
                <p className="font-sans text-xs text-[#64748b] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
