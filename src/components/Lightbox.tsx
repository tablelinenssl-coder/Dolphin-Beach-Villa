import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/propertyData';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onSelectIndex
}) => {
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onSelectIndex((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onSelectIndex((currentIndex + 1) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, items.length, onClose, onSelectIndex]);

  if (!currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-ocean-deep/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-ocean-surface/80 text-sand-warm hover:text-sunlight border border-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-sunlight"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={() => onSelectIndex((currentIndex - 1 + items.length) % items.length)}
        className="absolute left-4 sm:left-8 z-40 p-3 rounded-full bg-ocean-surface/80 text-sand-warm hover:text-sunlight border border-white/10 transition-colors focus:outline-none"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={() => onSelectIndex((currentIndex + 1) % items.length)}
        className="absolute right-4 sm:right-8 z-40 p-3 rounded-full bg-ocean-surface/80 text-sand-warm hover:text-sunlight border border-white/10 transition-colors focus:outline-none"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Area */}
      <div className="max-w-6xl max-h-[85vh] flex flex-col items-center justify-center space-y-4">
        <div className="relative rounded-xl overflow-hidden shadow-2xl max-h-[70vh]">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-w-full max-h-[70vh] object-contain rounded-xl"
          />
        </div>

        {/* Caption & Counter */}
        <div className="text-center space-y-1 max-w-xl px-4">
          <div className="font-mono text-xs text-sunlight tracking-widest uppercase">
            {currentIndex + 1} / {items.length}
          </div>
          <h4 className="font-serif text-xl sm:text-2xl text-sand-warm">
            {currentItem.title}
          </h4>
          <p className="font-sans text-xs sm:text-sm text-stone-muted font-light">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
