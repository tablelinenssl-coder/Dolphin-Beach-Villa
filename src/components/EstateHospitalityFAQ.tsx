import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const EstateHospitalityFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "Can we reserve the entire private estate exclusively?",
      answer: "Yes. The entire 2.47-acre beachfront estate—including both the Sapphire and Ruby master suites, the central open-air living loggia, dining veranda, 17-metre infinity lap pool, and direct dune footpath—can be reserved for exclusive private buyouts for up to 8 guests, ensuring absolute seclusion without external visitors."
    },
    {
      question: "What culinary experiences and private dining are provided?",
      answer: "Our private villa team prepares bespoke meals tailored to your dietary preferences. Enjoy freshly caught ocean prawns, lagoon mud crabs, authentic Sri Lankan curries, wood-fired seafood barbecues on the dunes, and tropical breakfasts served beneath the shaded dining veranda."
    },
    {
      question: "When is the optimal season for spinner dolphin and whale encounters?",
      answer: "Spinner dolphin pods reside in Kalpitiya waters year-round. The peak encounter window is from November through April, when the Indian Ocean is exceptionally calm and glassy, allowing guests to witness leaping pods numbering in the hundreds just 15 minutes offshore."
    },
    {
      question: "What are the wind conditions for kitesurfing and water sports?",
      answer: "Kalpitiya is renowned as Asia's premier kitesurfing destination with two primary wind windows: the Summer Trade Winds (May through October, blowing 18–25 knots consistently) and the Winter Season (December through March, with 14–18 knot afternoon thermal breezes over butter-flat lagoon sandbanks)."
    },
    {
      question: "How do private airport transfers from Colombo operate?",
      answer: "Our hospitality concierge coordinates direct, private chauffeur transfers from Bandaranaike International Airport (CMB) in luxury air-conditioned vehicles (approximately 2.5 to 3 hours along scenic coastal roads). Chauffeur accommodation and helicopter charters directly to the peninsula are also readily arranged."
    },
    {
      question: "What privacy and guest assistance are maintained during a stay?",
      answer: "The estate maintains 24-hour discreet hospitality and security personnel, daily housekeeping, in-suite digital safes, fiber-optic Wi-Fi, and personalized itinerary coordination for private boat launches, massages, and Wilpattu safari permits."
    }
  ];

  return (
    <section id="faq" className="relative bg-[#fafaf7] text-[#0f172a] py-24 md:py-32 px-6 sm:px-10 lg:px-16 border-t border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">

          <h2 className="text-[clamp(2rem,3.8vw,3.2rem)] font-black tracking-[-0.03em] leading-[1.05] text-[#0f172a]">
            Everything you wish to know<br />
            <em className="font-serif italic font-bold text-[#dc2626]">about your stay.</em>
          </h2>
          <p className="font-sans text-sm text-[#64748b] max-w-lg mx-auto leading-relaxed">
            Essential information regarding private estate buyouts, seasons, dining, and curated peninsula excursions.
          </p>
        </div>

        {/* Native Accordion in a Warm Card Container */}
        <div className="bg-white border border-[#e2e8f0] rounded-[20px] shadow-sm overflow-hidden p-6 sm:p-10 divide-y divide-[#f1f5f9]">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4 first:pt-0 last:pb-0">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-sans text-base sm:text-lg font-bold text-[#0f172a] hover:text-[#dc2626] transition-colors py-1 cursor-pointer focus:outline-none"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#64748b] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#dc2626]' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-xs sm:text-sm text-[#64748b] leading-relaxed pt-3 pb-1">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
