import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenAvailability: (suiteId?: string) => void;
  onToggleChecklist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAvailability, onToggleChecklist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle web audio ocean ambient wave synthesizer (synthesized so no external audio file download failure)
  const toggleSound = () => {
    if (!audioRef) {
      try {
        // Create browser ambient pink/white noise audio for gentle ocean surf
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          data[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = data[i];
          data[i] *= 0.12; // gentle volume
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(380, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.08, ctx.currentTime);

        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        noise.start();
        setIsAudioPlaying(true);
        // Store context as pseudo-audio
        setAudioRef({ pause: () => ctx.suspend(), play: () => ctx.resume() } as unknown as HTMLAudioElement);
      } catch (err) {
        console.warn("Audio ambient not supported", err);
      }
    } else {
      if (isAudioPlaying) {
        audioRef.pause();
        setIsAudioPlaying(false);
      } else {
        audioRef.play();
        setIsAudioPlaying(true);
      }
    }
  };

  const navLinks = [
    { label: "The Villa", href: "#villa" },
    { label: "Suites", href: "#suites" },
    { label: "Architecture", href: "#architecture" },
    { label: "Pool & Shore", href: "#pool-beach" },
    { label: "A Day Here", href: "#day-at-villa" },
    { label: "Experiences", href: "#experiences" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-ocean-deep/90 via-ocean-deep/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Wordmark & Minimal Icon */}
          <a
            href="#"
            className="group flex items-center space-x-3 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-sunlight"
            aria-label="Dolphin Beach Villa Home"
          >
            <div className="w-8 h-8 rounded-full border border-sunlight/40 flex items-center justify-center p-1.5 transition-transform duration-500 group-hover:border-sunlight group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="w-full h-full text-sunlight fill-none stroke-current stroke-2">
                <path d="M4 14C8 14 11 10 15 10C18 10 20 12 21 12" strokeLinecap="round" />
                <path d="M6 17C9 17 12 14 16 14C19 14 20 15 21 15" strokeLinecap="round" strokeOpacity="0.7" />
              </svg>
            </div>
            <div>
              <span className="block font-serif text-lg md:text-xl font-medium tracking-widest text-sand-warm uppercase group-hover:text-sunlight transition-colors">
                Dolphin Beach
              </span>
              <span className="block font-mono text-[9px] tracking-[0.28em] text-stone-muted uppercase">
                Kalpitiya · Sri Lanka
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-sans tracking-[0.18em] text-sand-muted/80 hover:text-sunlight uppercase transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-sunlight hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Utilities */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Ambient Ocean Sound Toggle */}
            <button
              onClick={toggleSound}
              type="button"
              className="p-2 rounded-full border border-lagoon/30 text-sand-muted hover:text-sunlight hover:border-sunlight/50 transition-all text-xs flex items-center gap-1.5"
              title={isAudioPlaying ? "Mute ambient ocean surf" : "Listen to ambient ocean surf"}
              aria-label="Toggle ambient sound"
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-sunlight animate-pulse" />
                  <span className="text-[10px] font-mono tracking-wider text-sunlight pr-1">OCEAN ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono tracking-wider opacity-70">SOUND</span>
                </>
              )}
            </button>

            {/* Owner Verification Checklist Toggle */}
            <button
              onClick={onToggleChecklist}
              type="button"
              className="p-2 rounded-full border border-lagoon/30 text-stone-muted hover:text-sand-warm hover:border-lagoon transition-colors"
              title="View Owner Fact Verification Matrix (Rule 30)"
              aria-label="View Fact Verification Matrix"
            >
              <Sparkles className="w-3.5 h-3.5" />
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenAvailability()}
              className="px-5 py-2 rounded-full bg-sand-warm text-ocean-deep hover:bg-sunlight hover:text-ocean-deep transition-all duration-300 font-sans text-xs font-medium tracking-[0.18em] uppercase shadow-lg shadow-black/30 hover:scale-[1.02]"
            >
              Check Availability
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={() => onOpenAvailability()}
              className="px-3 py-1.5 rounded-full bg-sand-warm text-ocean-deep text-[10px] font-mono tracking-wider uppercase"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-sand-warm hover:text-sunlight transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-ocean-deep/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-fade-in">
          <div className="space-y-6 text-center my-auto">
            <p className="font-mono text-[10px] tracking-[0.3em] text-sunlight uppercase">
              Boutique Coastal Sanctuary
            </p>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-sand-warm hover:text-sunlight transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAvailability();
                }}
                className="w-full max-w-xs py-3.5 rounded-full bg-sunlight text-ocean-deep font-sans font-medium text-xs tracking-widest uppercase shadow-xl"
              >
                Check Availability
              </button>
            </div>
          </div>

          <div className="border-t border-lagoon/20 pt-6 flex justify-between items-center text-[10px] font-mono text-stone-muted">
            <span>KALPITIYA, SRI LANKA</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onToggleChecklist();
              }}
              className="text-sunlight underline underline-offset-4"
            >
              Fact Checklist (Rule 30)
            </button>
          </div>
        </div>
      )}
    </>
  );
};
