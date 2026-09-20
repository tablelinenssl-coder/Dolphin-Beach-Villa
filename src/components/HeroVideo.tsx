import React, { useRef, useState } from 'react';
import { Play, Pause, Compass } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyData';

interface HeroVideoProps {
  onOpenAvailability: () => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ onOpenAvailability }) => {
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
    <section className="relative w-full h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden bg-ocean-deep">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={PROPERTY_CONFIG.videos.hero.fallbackImage}
          className="w-full h-full object-cover object-center scale-105 transform duration-1000 ease-out"
        >
          <source src={PROPERTY_CONFIG.videos.hero.src} type="video/mp4" />
          {/* Fallback image */}
          <img
            src={PROPERTY_CONFIG.videos.hero.fallbackImage}
            alt="Dolphin Beach Villa Kalpitiya Indian Ocean horizon"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Sophisticated Editorial Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/45 to-ocean-deep/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/70 via-transparent to-ocean-deep/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-ocean-deep/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center space-y-6 md:space-y-8 mt-12 md:mt-0">
        
        {/* Eyebrow / Coordinate Stamp */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-sunlight/20 text-sunlight font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase">
          <Compass className="w-3 h-3 text-sunlight animate-spin-slow" />
          <span>Kalpitiya · Sri Lanka · {PROPERTY_CONFIG.coordinates}</span>
        </div>

        {/* Monumental Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-sand-warm font-normal tracking-tight leading-[1.08] max-w-4xl text-balance">
          A private escape by the <span className="italic font-light text-sunlight">Indian Ocean.</span>
        </h1>

        {/* Subtitle / Brand Concept */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-sand-muted/90 font-light tracking-[0.12em] max-w-2xl mx-auto text-balance leading-relaxed">
          {PROPERTY_CONFIG.name} — where the sea sets the pace and unhurried days unfold between shaded palms and open horizon.
        </p>

        {/* Dual Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
          <button
            onClick={onOpenAvailability}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-sand-warm text-ocean-deep hover:bg-sunlight hover:text-ocean-deep transition-all duration-300 font-sans text-xs font-semibold tracking-[0.2em] uppercase shadow-2xl hover:scale-105 hover:shadow-sunlight/20"
          >
            Check Availability
          </button>
          <a
            href="#villa"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-sand-warm/30 text-sand-warm hover:border-sunlight hover:text-sunlight transition-all duration-300 font-sans text-xs tracking-[0.2em] uppercase glass-card"
          >
            Explore the Villa
          </a>
        </div>
      </div>

      {/* Video Control Micro-Interaction */}
      <button
        onClick={togglePlay}
        className="absolute bottom-10 right-8 z-20 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-white/10 text-[10px] font-mono tracking-widest text-sand-muted hover:text-sunlight transition-colors"
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
      >
        {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        <span>{isPlaying ? 'PAUSE AMBIENCE' : 'PLAY AMBIENCE'}</span>
      </button>

      {/* Elegant Scroll Indicator */}
      <a
        href="#statement"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-stone-muted hover:text-sunlight transition-colors group cursor-pointer"
        aria-label="Scroll to introduction"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border border-sand-warm/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-sunlight rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};
