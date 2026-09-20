import React, { useRef, useState } from 'react';
import { Play, Pause, Compass, ArrowDownRight, Sparkles } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyData';

interface ModernHeroProps {
  onOpenAvailability: () => void;
  onToggleChecklist: () => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({ onOpenAvailability, onToggleChecklist }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="relative min-h-[100svh] pt-28 pb-16 px-6 sm:px-10 lg:px-16 flex flex-col justify-between bg-ocean-deep text-sand-warm overflow-hidden border-b border-white/10">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-lagoon/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full bg-sunlight/5 blur-[160px] pointer-events-none" />

      {/* Main Asymmetrical Split Hero Content */}
      <div className="max-w-[1720px] mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Monumental Editorial Typographic Masthead */}
        <div className="lg:col-span-6 space-y-8 z-10">
          
          {/* Dateline & Coordinates */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-sunlight/25 text-sunlight font-mono text-[10px] tracking-[0.25em] uppercase">
              <Compass className="w-3 h-3 text-sunlight" />
              <span>Kalpitiya · 8.2254° N, 79.7612° E</span>
            </div>
            <span className="font-mono text-[10px] tracking-widest text-stone-muted uppercase hidden sm:inline">
              Sri Lanka North-Western Coast
            </span>
          </div>

          {/* Monumental Headline */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl xl:text-8xl text-sand-warm font-normal leading-[1.02] tracking-tight text-balance">
              Where the ocean <span className="italic font-light text-sunlight font-serif">becomes home.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-sand-muted/80 max-w-xl font-light leading-relaxed">
              Dolphin Beach Villa is a private coastal sanctuary on the Kalpitiya peninsula. An unhurried retreat of sculpted columns, natural timber rafters, a 17-metre infinity pool, and endless Indian Ocean horizon.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onOpenAvailability}
              className="px-8 py-4 rounded-full bg-sand-warm text-ocean-deep hover:bg-sunlight hover:text-ocean-deep transition-all duration-300 font-sans text-xs font-semibold tracking-[0.2em] uppercase shadow-2xl hover:scale-[1.03] text-center"
            >
              Check Availability
            </button>
            <a
              href="#estate-plan"
              className="px-7 py-4 rounded-full glass-card border border-white/20 hover:border-sunlight text-sand-warm hover:text-sunlight transition-all text-xs font-mono tracking-widest uppercase flex items-center justify-center gap-2 text-center group"
            >
              <span>Explore Spatial Plan</span>
              <ArrowDownRight className="w-4 h-4 text-sunlight group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Architectural Metrics Strip */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <span className="font-mono text-[9px] tracking-widest text-stone-muted uppercase block">Grounds</span>
              <span className="font-serif text-lg text-sand-warm">~2.47 Acres</span>
            </div>
            <div>
              <span className="font-mono text-[9px] tracking-widest text-stone-muted uppercase block">Infinity Pool</span>
              <span className="font-serif text-lg text-sand-warm">17 Metres</span>
            </div>
            <div>
              <span className="font-mono text-[9px] tracking-widest text-stone-muted uppercase block">Master Suites</span>
              <span className="font-serif text-lg text-sand-warm">Sapphire & Ruby</span>
            </div>
            <div>
              <span className="font-mono text-[9px] tracking-widest text-stone-muted uppercase block">Palms</span>
              <span className="font-serif text-lg text-sand-warm">100+ Canopy</span>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Cinematic Viewport Stage */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-lagoon/30 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] group">
            
            {/* Background High-Def Ambient Video */}
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              poster={PROPERTY_CONFIG.videos.hero.fallbackImage}
              className="w-full h-full object-cover object-center scale-[1.02] group-hover:scale-105 transition-transform duration-1000 ease-out"
            >
              <source src={PROPERTY_CONFIG.videos.hero.src} type="video/mp4" />
              <img
                src={PROPERTY_CONFIG.videos.hero.fallbackImage}
                alt="Kalpitiya Indian Ocean Waves"
                className="w-full h-full object-cover"
              />
            </video>

            {/* Subtle Vignettes */}
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-transparent to-ocean-deep/20" />

            {/* Top Badges */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full bg-ocean-deep/80 backdrop-blur-md border border-white/10 font-mono text-[10px] tracking-widest text-sunlight uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sunlight animate-pulse" />
                Live Coastal Stream
              </span>

              <button
                onClick={togglePlay}
                className="p-2.5 rounded-full bg-ocean-deep/80 backdrop-blur-md border border-white/10 text-sand-warm hover:text-sunlight transition-colors"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Bottom Horizon Narrative Tag */}
            <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
              <div>
                <span className="font-mono text-[9px] tracking-widest text-stone-muted uppercase block mb-1">
                  Indian Ocean Axis
                </span>
                <p className="font-serif text-xl sm:text-2xl text-sand-warm font-light">
                  Untouched beach steps from the veranda.
                </p>
              </div>

              <button
                onClick={onToggleChecklist}
                className="hidden sm:flex items-center gap-1 px-3 py-1 rounded-full bg-ocean-surface/90 border border-sunlight/30 text-[9px] font-mono text-sunlight hover:bg-ocean-surface"
              >
                <Sparkles className="w-3 h-3" />
                <span>Rule 30 Audit</span>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Editorial Scroll Prompt */}
      <div className="max-w-[1720px] mx-auto w-full pt-8 flex items-center justify-between text-xs font-mono text-stone-muted border-t border-white/5">
        <span className="uppercase tracking-widest">CHAPTER 01 · THE VILLA DISCOVERY</span>
        <a href="#estate-plan" className="hover:text-sunlight transition-colors flex items-center gap-2">
          <span>Scroll to explore architecture</span>
          <ArrowDownRight className="w-3.5 h-3.5" />
        </a>
      </div>

    </section>
  );
};
