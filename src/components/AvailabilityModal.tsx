import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyData';

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSuite?: string;
}

export const AvailabilityModal: React.FC<AvailabilityModalProps> = ({
  isOpen,
  onClose,
  preselectedSuite
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    suitePreference: preselectedSuite || 'whole-villa',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedSuite) {
      setFormData(prev => ({ ...prev, suitePreference: preselectedSuite }));
    }
  }, [preselectedSuite]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Dolphin Beach Villa concierge,\n\nI would like to check availability for:\n- Suite / Booking: ${formData.suitePreference}\n- Dates: ${formData.checkIn || 'TBD'} to ${formData.checkOut || 'TBD'}\n- Guests: ${formData.guests}\n- Name: ${formData.name || 'Guest'}\n\nLooking forward to your reply.`
    );
    window.open(`https://wa.me/${PROPERTY_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-ocean-deep/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Check Availability Modal"
    >
      <div className="relative w-full max-w-2xl bg-ocean-surface border border-lagoon/30 rounded-3xl p-6 sm:p-10 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-ocean-deep/80 text-sand-warm hover:text-sunlight border border-white/10 transition-colors focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-[10px] tracking-[0.25em] text-sunlight uppercase block">
                Direct Hospitality Inquiry
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-sand-warm font-normal">
                Check Availability & Bespoke Stay
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-muted leading-relaxed font-light">
                Our private concierge will confirm dates, suite allocations, and arrange seamless transfers to the Kalpitiya coast.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-stone-muted uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. Elena Rostova"
                    className="w-full px-4 py-3 rounded-xl bg-ocean-deep/80 border border-lagoon/25 text-sand-warm placeholder-stone-muted/50 text-sm focus:outline-none focus:border-sunlight transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-muted uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-ocean-deep/80 border border-lagoon/25 text-sand-warm placeholder-stone-muted/50 text-sm focus:outline-none focus:border-sunlight transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-stone-muted uppercase tracking-wider mb-1.5">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 555 019 283"
                    className="w-full px-4 py-3 rounded-xl bg-ocean-deep/80 border border-lagoon/25 text-sand-warm placeholder-stone-muted/50 text-sm focus:outline-none focus:border-sunlight transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-muted uppercase tracking-wider mb-1.5">
                    Accommodation
                  </label>
                  <select
                    value={formData.suitePreference}
                    onChange={(e) => setFormData({ ...formData, suitePreference: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-ocean-deep/80 border border-lagoon/25 text-sand-warm text-sm focus:outline-none focus:border-sunlight transition-colors"
                  >
                    <option value="whole-villa">Entire Beachfront Villa (Up to 8)</option>
                    <option value="sapphire-suite">Sapphire Suite (Sea-Facing Master)</option>
                    <option value="ruby-suite">Ruby Suite (Palm Grove Pavilion)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-stone-muted uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sunlight" />
                    Arrival Date
                  </label>
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-ocean-deep/80 border border-lagoon/25 text-sand-warm text-sm focus:outline-none focus:border-sunlight transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-muted uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sunlight" />
                    Departure Date
                  </label>
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-ocean-deep/80 border border-lagoon/25 text-sand-warm text-sm focus:outline-none focus:border-sunlight transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-muted uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-sunlight" />
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-ocean-deep/80 border border-lagoon/25 text-sand-warm text-sm focus:outline-none focus:border-sunlight transition-colors"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3-4">3 - 4 Guests</option>
                    <option value="5-8">5 - 8 Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-muted uppercase tracking-wider mb-1.5">
                  Personal Requests & Flight Details
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any dining preferences, kitesurfing equipment, or airport transfer requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-ocean-deep/80 border border-lagoon/25 text-sand-warm placeholder-stone-muted/50 text-sm focus:outline-none focus:border-sunlight transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-4 rounded-full bg-sand-warm text-ocean-deep hover:bg-sunlight hover:text-ocean-deep transition-all duration-300 font-sans text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Availability Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="px-6 py-4 rounded-full border border-lagoon/40 text-sand-warm hover:border-sunlight hover:text-sunlight transition-all duration-300 font-sans text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-sunlight" />
                  <span>WhatsApp Concierge</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-12 space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-lagoon/20 text-sunlight flex items-center justify-center mx-auto border border-sunlight/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <span className="font-mono text-[10px] tracking-[0.25em] text-sunlight uppercase block">
                Inquiry Received
              </span>
              <h4 className="font-serif text-3xl text-sand-warm">
                Thank you, {formData.name || 'Guest'}.
              </h4>
              <p className="font-sans text-sm text-stone-muted leading-relaxed">
                Your request has been routed to our villa reservation team. We will contact you at <strong className="text-sand-warm">{formData.email}</strong> within 12 hours with availability and bespoke transfer options.
              </p>
            </div>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-full bg-ocean-surface border border-lagoon/30 text-sand-warm text-xs font-mono tracking-wider uppercase hover:border-sunlight"
              >
                Return to Sanctuary
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
