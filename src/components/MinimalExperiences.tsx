import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/propertyData';

export const MinimalExperiences: React.FC = () => {
  return (
    <section id="experiences" className="relative bg-[#fafaf7] text-[#0f172a] py-16 md:py-32 px-4 sm:px-10 lg:px-16 border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Header Stack */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2.5 max-w-xl">
            <h2 className="text-[clamp(2rem,3.8vw,3.2rem)] font-black tracking-[-0.03em] leading-[1.05] text-[#0f172a]">
              Wild waters, lagoon winds &amp;<br />
              <em className="font-serif italic font-bold text-[#dc2626]">ancient soil.</em>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-base text-[#64748b] max-w-sm leading-relaxed">
            This quiet coastal haven remains untouched, where marine life, offshore trade winds, and ocean stillness move at their own rhythm.
          </p>
        </div>

        {/* Minimal Grid with Native Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXPERIENCES.slice(0, 3).map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="h-full flex"
            >
              <div className="overflow-hidden border border-[#e2e8f0] bg-white rounded-[16px] shadow-sm flex flex-col justify-between group w-full hover:shadow-md transition-all duration-300">
                <div>
                  <div className="relative h-52 sm:h-64 overflow-hidden bg-[#0f172a]">
                    <img
                      src={exp.imageUrl}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {exp.badge && (
                      <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase bg-[#0f172a] text-white shadow-sm">
                          {exp.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 sm:p-7 space-y-2">
                    <span className="font-mono text-[9px] tracking-widest text-[#dc2626] uppercase block font-bold">
                      {exp.subtitle}
                    </span>
                    <h3 className="font-sans text-lg sm:text-2xl text-[#0f172a] font-bold group-hover:text-[#dc2626] transition-colors">
                      {exp.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#64748b] leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {(exp.guestTip || exp.verificationNote) && (
                  <div className="p-6 sm:p-7 pt-0">
                    <div className="p-3 rounded-[10px] bg-[#fafaf7] text-xs font-sans text-[#64748b] border border-[#e2e8f0] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] shrink-0" />
                      <span>{exp.guestTip || exp.verificationNote}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Private Expeditions Curated List */}
        <div className="pt-8 border-t border-[#e2e8f0] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] text-[#dc2626] uppercase font-bold tracking-widest block mb-1">
                CONCIERGE &middot; ARRANGED PRIVATELY
              </span>
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#0f172a]">
                Private Expeditions &amp; Coastal Pursuits
              </h3>
            </div>
            <span className="text-xs font-sans text-[#64748b]">
              Complimentary coordination by villa management
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Spinner Dolphin Morning Safari",
                duration: "2.5 Hours",
                timing: "Nov – April",
                desc: "Speedboat launch directly from the beach to the offshore continental shelf where pods of hundreds of spinner dolphins gather.",
                badge: "Marine Life"
              },
              {
                title: "Lagoon Sunset Catamaran Cruise",
                duration: "3 Hours",
                timing: "Year-Round",
                desc: "Drift along the mangrove channels of Puttalam Lagoon with fresh king coconut water and local savouries as the sun sets.",
                badge: "Tranquil"
              },
              {
                title: "Flat-Water Kitesurfing Coaching",
                duration: "Half / Full Day",
                timing: "May – Oct",
                desc: "Kalpitiya's butter-flat sandbanks provide the premier kite conditions in Asia with 18-25 knot trade winds.",
                badge: "Adrenaline"
              },
              {
                title: "Wilpattu National Park Safari",
                duration: "Full Day Trip",
                timing: "Year-Round",
                desc: "Private 4x4 safari through ancient forests and natural water basins in search of wild leopards, elephants, and sloth bears.",
                badge: "Wildlife"
              }
            ].map((expedition, idx) => (
              <div key={idx} className="bg-white border border-[#e2e8f0] rounded-[14px] hover:border-black/20 transition-all p-4 sm:p-6 flex flex-col justify-between h-full space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-sans text-base sm:text-lg font-bold text-[#0f172a]">
                    {expedition.title}
                  </h4>
                  <span className="shrink-0 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-[#e2e8f0] text-[#64748b]">
                    {expedition.badge}
                  </span>
                </div>
                <p className="font-sans text-xs text-[#64748b] leading-relaxed">
                  {expedition.desc}
                </p>
                <div className="pt-2 border-t border-[#f1f5f9] flex items-center justify-between text-[11px] font-mono text-[#64748b] font-semibold">
                  <span>{expedition.duration}</span>
                  <span className="text-[#dc2626]">{expedition.timing}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
