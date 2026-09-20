import React from 'react';
import { motion } from 'framer-motion';

export const MinimalStatement: React.FC = () => {
  return (
    <section id="statement" className="relative bg-[#fafaf7] text-[#0f172a] py-24 md:py-32 px-6 sm:px-12 lg:px-20 border-t border-[#e2e8f0] overflow-hidden">
      
      <div className="max-w-4xl mx-auto text-center space-y-8">
        


        {/* Monumental Quote */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(1.9rem,3.8vw,3.2rem)] font-black tracking-[-0.03em] leading-[1.12] text-[#0f172a] text-balance"
        >
          &ldquo;A place where the sea <em className="font-serif italic font-bold text-[#dc2626]">sets the pace.</em>&rdquo;
        </motion.h2>

        {/* Separator */}
        <div className="w-16 h-[2px] bg-[#dc2626] mx-auto rounded-full" />

        {/* Sensory Prose */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-5 text-[#64748b] text-[clamp(0.96rem,1.2vw,1.08rem)] leading-[1.65]"
        >
          <p>
            On the secluded western shores of Sri Lanka, between tranquil coastal lagoons and the wild expanse of the Indian Ocean, lies a retreat created for stillness.
          </p>
          <p>
            Here, luxury is defined by unhurried mornings, authentic timber craftsmanship, shaded palms, and the silence that descends as the equatorial sun dips below the open horizon.
          </p>
        </motion.div>

        {/* Brand Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif italic font-bold text-lg sm:text-xl text-[#0f172a] pt-2"
        >
          Dolphin Beach Villa &middot; Kalpitiya
        </motion.p>

      </div>

    </section>
  );
};
