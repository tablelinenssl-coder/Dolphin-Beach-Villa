import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { SUITES_DATA } from '../data/propertyData';

export const MinimalSuites: React.FC = () => {
  const [activeSuiteId, setActiveSuiteId] = useState(SUITES_DATA[0].id);
  const selectedSuite = SUITES_DATA.find(s => s.id === activeSuiteId) || SUITES_DATA[0];

  return (
    <section id="suites" className="relative bg-[#fafaf7] text-[#0f172a] py-16 md:py-32 px-4 sm:px-10 lg:px-16 border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Header Stack */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2.5">
            <h2 className="text-[clamp(2rem,3.8vw,3.2rem)] font-black tracking-[-0.03em] leading-[1.05] text-[#0f172a]">
              Two master suites of<br />
              <em className="font-serif italic font-bold text-[#dc2626]">quiet rest.</em>
            </h2>
          </div>

          {/* Minimalist Suite Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-[12px] bg-white border border-[#e2e8f0] shadow-xs w-full sm:w-auto">
            {SUITES_DATA.map((suite) => {
              const isSelected = activeSuiteId === suite.id;
              return (
                <button
                  key={suite.id}
                  onClick={() => setActiveSuiteId(suite.id)}
                  className={`flex-1 sm:flex-initial px-4 sm:px-5 py-2 rounded-[8px] font-sans text-xs tracking-wider uppercase transition-all duration-200 relative cursor-pointer font-bold text-center ${
                    isSelected ? 'text-white' : 'text-[#64748b] hover:text-[#0f172a]'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeSuitePill"
                      className="absolute inset-0 bg-[#0f172a] rounded-[8px] shadow-sm"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{suite.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Suite Display with Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: Large Suite Visual */}
          <div className="lg:col-span-7 relative rounded-[16px] overflow-hidden h-[260px] sm:h-[400px] lg:min-h-[520px] shadow-sm border border-[#e2e8f0] bg-[#0f172a]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSuite.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative"
              >
                <img
                  src={selectedSuite.imageUrl}
                  alt={selectedSuite.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-10">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-mono tracking-widest uppercase font-bold">
                    Master Suite
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10">
                  <span className="font-mono text-[9px] tracking-widest text-white/80 uppercase block mb-0.5">
                    {selectedSuite.name}
                  </span>
                  <p className="font-serif text-xl sm:text-3xl text-white font-bold italic [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
                    &ldquo;{selectedSuite.tagline}&rdquo;
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Suite Narrative & Specifications */}
          <div className="lg:col-span-5 bg-white border border-[#e2e8f0] rounded-[16px] shadow-sm p-5 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4 sm:space-y-5">
              <div className="border-b border-[#e2e8f0] pb-3 sm:pb-4">
                <h3 className="font-sans text-2xl sm:text-3xl text-[#0f172a] font-black">
                  {selectedSuite.name}
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#64748b] leading-relaxed">
                {selectedSuite.description}
              </p>

              {/* Specs List */}
              <div className="space-y-2 pt-1 text-xs font-sans">
                <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center justify-between py-1 gap-0.5">
                  <span className="text-[#64748b] font-medium">View</span>
                  <span className="text-[#0f172a] font-bold">{selectedSuite.specs.view}</span>
                </div>
                <div className="h-px w-full bg-[#e2e8f0]" />

                <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center justify-between py-1 gap-0.5">
                  <span className="text-[#64748b] font-medium">En-Suite</span>
                  <span className="text-[#0f172a] font-bold">{selectedSuite.specs.bathroom}</span>
                </div>
                <div className="h-px w-full bg-[#e2e8f0]" />

                <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center justify-between py-1 gap-0.5">
                  <span className="text-[#64748b] font-medium">Veranda</span>
                  <span className="text-[#0f172a] font-bold">{selectedSuite.specs.veranda}</span>
                </div>
                <div className="h-px w-full bg-[#e2e8f0]" />

                <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center justify-between py-1 gap-0.5">
                  <span className="text-[#64748b] font-medium">Capacity</span>
                  <span className="text-[#0f172a] font-bold">{selectedSuite.specs.capacity}</span>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-2.5 pt-2">
                <div className="h-px w-full bg-[#e2e8f0] mb-3" />
                <span className="font-mono text-[9px] tracking-widest text-[#64748b] uppercase block font-semibold">
                  Craft Details
                </span>
                <ul className="space-y-1.5 text-xs text-[#0f172a]">
                  {selectedSuite.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 font-medium">
                      <Check className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
