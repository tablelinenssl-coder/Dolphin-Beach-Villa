import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyData';


export const MinimalNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('villa');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['villa', 'suites', 'experiences', 'gallery', 'location'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "The Villa", href: "#villa", id: "villa" },
    { label: "Suites", href: "#suites", id: "suites" },
    { label: "Experiences", href: "#experiences", id: "experiences" },
    { label: "Gallery", href: "#gallery", id: "gallery" },
    { label: "Location", href: "#location", id: "location" },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const el = document.getElementById(sectionId);
    const lenis = (window as any).__lenis;
    if (el) {
      if (lenis) {
        lenis.scrollTo(el, { offset: -80, duration: 2.0 });
      } else {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 sm:px-6 pt-3.5 sm:pt-5 max-w-[1240px] mx-auto">
      
      {/* Animated subtle glass background drift orbs (nav-10__orb) */}
      <div className="absolute inset-0 overflow-visible pointer-events-none">
        <div className="nav-10__orb -top-10 left-[10%] w-[320px] h-[160px] bg-[#fbe3e3]/70" />
        <div className="nav-10__orb -top-6 right-[15%] w-[300px] h-[150px] bg-[#dbeafe]/60 [animation-delay:-4s] [animation-duration:16s]" />
        <div className="nav-10__orb top-2 left-[48%] w-[240px] h-[110px] bg-[#fef3c7]/60 [animation-delay:-8s] [animation-duration:11s]" />
      </div>

      {/* Floating Glass Navbar (nav-10__bar) */}
      <nav
        className="nav-10__bar pointer-events-auto relative w-full flex items-center justify-between py-2 px-3 sm:py-2.5 sm:px-5 rounded-[20px] bg-white/80 backdrop-blur-[20px] border border-white/95 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.08),0_1px_2px_rgba(15,23,42,0.04)]"
        role="navigation"
        aria-label="Main Navigation"
      >
        
        {/* Logo & Glyph (nav-10__logo) */}
        <a
          href="/"
          onClick={scrollToTop}
          className="group flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
          aria-label="Dolphin Beach Villa Home"
        >
          <img
            src="/images/dolphin_logo.svg"
            alt="Dolphin Beach Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-[10px] shadow-xs group-hover:scale-105 transition-transform duration-300 object-contain"
          />
          
          <div className="flex flex-col">
            <span className="font-sans text-[0.92rem] sm:text-[1rem] font-bold text-[#0f172a] tracking-tight group-hover:text-[#dc2626] transition-colors">
              Dolphin Beach
            </span>
            <span className="font-mono text-[8px] tracking-[0.2em] text-[#64748b] uppercase font-semibold">
              Kalpitiya &middot; Sri Lanka
            </span>
          </div>
        </a>

        {/* Desktop Nav Links (nav-10__links) */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0" aria-label="Main links">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`inline-block px-3.5 py-1.5 rounded-[12px] text-[0.84rem] font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-black/[0.08] text-[#0f172a] font-bold shadow-2xs'
                      : 'text-[#64748b] hover:text-[#0f172a] hover:bg-black/[0.05]'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions Stack: Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-2.5">

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-1.5 rounded-[10px] text-[#0f172a] hover:bg-black/5 transition-colors md:hidden focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </nav>

      {/* Floating Frosted Glass Mobile Menu (Dropdown Card) */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto mt-2 rounded-[20px] bg-white/95 backdrop-blur-[24px] border border-white/95 p-6 shadow-2xl md:hidden text-[#0f172a]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#e2e8f0]">
                <span className="font-sans text-xs font-bold tracking-wider uppercase text-[#0f172a]">
                  Menu
                </span>
                <span className="font-mono text-[9px] text-[#64748b]">
                  {PROPERTY_CONFIG.location}
                </span>
              </div>

              <ul className="space-y-1.5 list-none p-0 m-0">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.id)}
                      className="block px-3 py-2 rounded-[10px] text-base font-bold text-[#0f172a] hover:bg-black/5 hover:text-[#dc2626] transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
