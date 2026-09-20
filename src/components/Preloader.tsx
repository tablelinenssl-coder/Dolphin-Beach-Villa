import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 800);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fafaf7] text-[#0f172a]"
        >
          <div className="text-center space-y-4 px-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#64748b] uppercase block font-semibold">
                Kalpitiya &middot; Sri Lanka
              </span>
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.16em] uppercase text-[#0f172a]">
                Dolphin Beach
              </h1>
              <p className="font-serif italic text-base text-[#64748b] tracking-wider font-medium">
                Where the ocean becomes home.
              </p>
            </motion.div>

            {/* Hairline Loading Indicator */}
            <div className="w-36 h-[2px] bg-[#e2e8f0] mx-auto overflow-hidden relative mt-6 rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="w-full h-full bg-[#dc2626]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
