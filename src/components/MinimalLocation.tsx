import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Car, Compass } from 'lucide-react';

export const MinimalLocation: React.FC = () => {
  return (
    <section id="location" className="relative bg-[#fafaf7] text-[#0f172a] py-24 md:py-32 px-6 sm:px-10 lg:px-16 border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3 max-w-xl">
            <h2 className="text-[clamp(2rem,3.8vw,3.2rem)] font-black tracking-[-0.03em] leading-[1.05] text-[#0f172a]">
              Kalpitiya,<br />
              <em className="font-serif italic font-bold text-[#dc2626]">Sri Lanka.</em>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#64748b] max-w-sm leading-relaxed">
            Positioned along an undisturbed coastal spit flanked by the open Indian Ocean to the west and the Puttalam Lagoon to the east.
          </p>
        </motion.div>

        {/* 2-Column Clean Symmetrical Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Illustrated Cartographic Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 bg-white border border-[#e2e8f0] rounded-[16px] shadow-sm flex flex-col justify-between p-6 sm:p-8 hover:border-black/20 transition-all"
          >
            <div className="flex flex-col flex-1 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#e2e8f0]">
                <span className="font-mono text-[10px] text-[#dc2626] uppercase font-bold tracking-widest">
                  Cartographic Guide
                </span>
                <span className="font-mono text-xs text-[#64748b] font-semibold">
                  8.2254° N, 79.7612° E
                </span>
              </div>

              <div className="relative w-full flex-1 min-h-[260px] sm:min-h-[300px] rounded-[12px] overflow-hidden bg-[#fafaf7] border border-[#e2e8f0]">
                <img
                  src="/images/kalpitiya_map.jpg"
                  alt="Illustrated Map of Kalpitiya Peninsula showing Dolphin Beach Villa"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                />

              </div>

              <div className="pt-3 border-t border-[#e2e8f0] flex items-center justify-between text-xs font-mono text-[#64748b]">
                <span>COASTAL ATLAS</span>
                <span className="font-semibold text-[#0f172a]">DIRECT BEACHFRONT SECLUSION</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Arrival Guide */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 bg-white border border-[#e2e8f0] rounded-[16px] shadow-sm flex flex-col justify-between p-6 sm:p-8"
          >
            <div className="flex flex-col flex-1 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#e2e8f0]">
                <span className="font-mono text-[10px] text-[#dc2626] uppercase font-bold tracking-widest">
                  Transit &amp; Access
                </span>
                <span className="font-mono text-xs text-[#64748b] font-semibold">
                  CMB Airport &middot; 142 km (2.5–3h)
                </span>
              </div>

              <div className="space-y-4 text-xs font-sans flex-1 flex flex-col justify-around py-1">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-[8px] bg-[#fafaf7] border border-[#e2e8f0] flex items-center justify-center shrink-0 text-[#dc2626]">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-sans text-base text-[#0f172a] block font-bold">
                      Bandaranaike International Airport (CMB)
                    </span>
                    <p className="text-[#64748b] leading-relaxed">
                      The primary international airport servicing Sri Lanka with regular flights from Dubai, London, Singapore, and Doha.
                    </p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-[#e2e8f0]" />

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-[8px] bg-[#fafaf7] border border-[#e2e8f0] flex items-center justify-center shrink-0 text-[#dc2626]">
                    <Car className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-sans text-base text-[#0f172a] block font-bold">
                      Private Chauffeur Transfer
                    </span>
                    <p className="text-[#64748b] leading-relaxed">
                      Approximately 2.5 to 3 hours scenic coastal transfer, arranged smoothly by our villa concierge team.
                    </p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-[#e2e8f0]" />

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-[8px] bg-[#fafaf7] border border-[#e2e8f0] flex items-center justify-center shrink-0 text-[#dc2626]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-sans text-base text-[#0f172a] block font-bold">
                      Palm Lane Arrival
                    </span>
                    <p className="text-[#64748b] leading-relaxed">
                      A private lane leads directly onto the secluded 2.47-acre estate and pristine beachfront dunes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#e2e8f0] flex items-center justify-between text-xs font-mono text-[#64748b]">
                <span>COASTAL ACCESS</span>
                <span className="font-semibold text-[#0f172a]">PRIVATE CHAUFFEUR COORDINATED</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
