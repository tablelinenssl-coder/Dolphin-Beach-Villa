import React, { useState } from 'react';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { DAY_IN_LIFE_STEPS } from '../data/propertyData';

export const DayInLife: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const activeStep = DAY_IN_LIFE_STEPS[currentStepIndex];

  const nextStep = () => {
    setCurrentStepIndex((prev) => (prev + 1) % DAY_IN_LIFE_STEPS.length);
  };

  const prevStep = () => {
    setCurrentStepIndex((prev) => (prev - 1 + DAY_IN_LIFE_STEPS.length) % DAY_IN_LIFE_STEPS.length);
  };

  return (
    <section id="day-at-villa" className="relative bg-sand-warm text-ocean-deep py-28 md:py-36 px-6 md:px-12 transition-colors duration-700">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ocean-deep/10 pb-8">
          <div className="space-y-3">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-lagoon font-medium">
              Editorial Journey · Slow Hours
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-ocean-deep tracking-tight">
              A Day at Dolphin Beach Villa.
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-dark max-w-sm leading-relaxed">
            Time here is not measured in minutes, but by the angle of sunlight cutting through coconut fronds and the changing tides.
          </p>
        </div>

        {/* Cinematic Step Carousel / Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Atmospheric Image Card */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden h-[400px] sm:h-[500px] lg:h-[580px] shadow-2xl group">
            <img
              src={activeStep.imageUrl}
              alt={activeStep.title}
              className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-transparent to-transparent" />
            
            {/* Timestamp Badge */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-ocean-deep/90 text-sunlight font-mono text-sm tracking-widest flex items-center gap-2 shadow-lg">
              <Clock className="w-3.5 h-3.5 text-sunlight" />
              <span>{activeStep.time}</span>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-8 left-8 right-8">
              <span className="font-mono text-[10px] tracking-[0.2em] text-sunlight uppercase block mb-1">
                Atmosphere
              </span>
              <p className="font-serif text-lg sm:text-xl text-sand-warm italic">
                &ldquo;{activeStep.atmosphere}&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Narrative Story & Navigation Controls */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            
            {/* Quick Step Indicators */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {DAY_IN_LIFE_STEPS.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStepIndex(idx)}
                  className={`px-3 py-1 rounded-full font-mono text-xs tracking-wider transition-all duration-300 ${
                    currentStepIndex === idx
                      ? 'bg-ocean-deep text-sand-warm font-medium shadow-sm'
                      : 'bg-sand-muted/60 text-stone-dark hover:bg-sand-muted'
                  }`}
                >
                  {step.time}
                </button>
              ))}
            </div>

            {/* Narrative Content */}
            <div className="space-y-6">
              <div className="font-mono text-xs tracking-[0.25em] text-lagoon font-medium uppercase">
                Step {currentStepIndex + 1} of {DAY_IN_LIFE_STEPS.length}
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-ocean-deep font-normal leading-tight">
                {activeStep.title}
              </h3>
              <p className="font-sans text-base sm:text-lg text-stone-dark leading-relaxed font-light">
                {activeStep.description}
              </p>
            </div>

            {/* Arrows Navigation & Counter */}
            <div className="flex items-center justify-between pt-6 border-t border-ocean-deep/10">
              <div className="font-mono text-xs text-stone-dark tracking-widest">
                <span>0{currentStepIndex + 1}</span> / <span>0{DAY_IN_LIFE_STEPS.length}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={prevStep}
                  className="w-12 h-12 rounded-full border border-ocean-deep/20 text-ocean-deep hover:bg-ocean-deep hover:text-sand-warm transition-all flex items-center justify-center focus:outline-none"
                  aria-label="Previous story step"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextStep}
                  className="w-12 h-12 rounded-full bg-ocean-deep text-sand-warm hover:bg-lagoon transition-all flex items-center justify-center shadow-lg focus:outline-none"
                  aria-label="Next story step"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
