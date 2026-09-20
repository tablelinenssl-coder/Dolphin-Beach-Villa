import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Preloader } from './components/Preloader';
import { MinimalNavbar } from './components/MinimalNavbar';
import { MinimalHero } from './components/MinimalHero';
import { MinimalStatement } from './components/MinimalStatement';
import { MinimalVillaStory } from './components/MinimalVillaStory';
import { MinimalSuites } from './components/MinimalSuites';
import { MinimalExperiences } from './components/MinimalExperiences';
import { MinimalGallery } from './components/MinimalGallery';
import { MinimalLocation } from './components/MinimalLocation';
import { MinimalFooter } from './components/MinimalFooter';

export const App: React.FC = () => {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  // Ultra-luxurious slomo smooth scroll with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // Slow, buttery luxury glide
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      infinite: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Intercept internal hash links to trigger slow smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;
      const el = document.querySelector(hash) as HTMLElement | null;
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: -80, duration: 2.2 });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#fafaf7] text-[#0f172a] flex flex-col font-sans selection:bg-[#0f172a] selection:text-white">
      
      {/* 1. Minimalist Official Preloader */}
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}

      {/* 2. Official Minimalist Floating Navbar */}
      <MinimalNavbar />

      <main className="flex-1">
        
        {/* 3. Fullscreen Cinematic Hero Video with Staggered Typography */}
        <MinimalHero />

        {/* 4. Poetic Editorial Brand Statement */}
        <MinimalStatement />

        {/* 5. The Villa & Architecture Story */}
        <MinimalVillaStory />

        {/* 6. Master Suites Showcase (Sapphire Suite & Ruby Suite) */}
        <MinimalSuites />

        {/* 7. Curated Coastal Experiences */}
        <MinimalExperiences />

        {/* 8. Minimalist Visual Folio & Lightbox */}
        <MinimalGallery />

        {/* 9. Peninsula Geography & Journey Guide */}
        <MinimalLocation />

      </main>

      {/* 10. Official Luxury Footer */}
      <MinimalFooter />

    </div>
  );
};

export default App;

