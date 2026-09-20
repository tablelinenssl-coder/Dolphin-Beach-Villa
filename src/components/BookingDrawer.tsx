import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, MessageSquare, Send, Check } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyData';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSuite?: string;
}

export const BookingDrawer: React.FC<BookingDrawerProps> = ({
  isOpen,
  onClose,
  preselectedSuite,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    suite: preselectedSuite || 'entire-villa',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedSuite) {
      setFormData(prev => ({ ...prev, suite: preselectedSuite }));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Dolphin Beach Villa Concierge,\n\nI would like to inquire about availability:\n- Accommodation: ${formData.suite}\n- Dates: ${formData.checkIn || 'Flexible'} to ${formData.checkOut || 'Flexible'}\n- Guests: ${formData.guests}\n- Guest Name: ${formData.name || 'Guest'}\n\nThank you.`
    );
    window.open(`https://wa.me/${PROPERTY_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-screen max-w-lg bg-[#fafaf7] text-[#0f172a] shadow-2xl border-l border-[#e2e8f0] flex flex-col"
            >
              {/* Fixed Header */}
              <div className="px-8 sm:px-10 pt-8 sm:pt-10 pb-5 border-b border-[#e2e8f0] flex items-center justify-between shrink-0">
                <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight">
                  Check Availability
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-[8px] text-[#64748b] hover:text-[#0f172a] hover:bg-black/5 transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close booking drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Form Body */}
              <ScrollArea className="flex-1 w-full">
                <div className="px-8 sm:px-10 py-6 space-y-6">

                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">

                      <div>
                        <label className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider mb-1.5">
                          Guest Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-[10px] bg-white border border-[#e2e8f0] text-sm text-[#0f172a] placeholder-[#64748b]/50 focus:outline-none focus:border-[#dc2626] transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@domain.com"
                            className="w-full px-4 py-3 rounded-[10px] bg-white border border-[#e2e8f0] text-sm text-[#0f172a] placeholder-[#64748b]/50 focus:outline-none focus:border-[#dc2626] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider mb-1.5">
                            WhatsApp / Phone
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 555 0192"
                            className="w-full px-4 py-3 rounded-[10px] bg-white border border-[#e2e8f0] text-sm text-[#0f172a] placeholder-[#64748b]/50 focus:outline-none focus:border-[#dc2626] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider mb-1.5">
                          Sanctuary Selection
                        </label>
                        <Select
                          value={formData.suite}
                          onValueChange={(val) => setFormData({ ...formData, suite: val })}
                        >
                          <SelectTrigger className="w-full h-11">
                            <SelectValue placeholder="Select accommodation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Accommodation</SelectLabel>
                              <SelectItem value="entire-villa">Entire Beachfront Estate (Up to 8 guests)</SelectItem>
                              <SelectItem value="sapphire-suite">Sapphire Suite (Master Ocean-Facing)</SelectItem>
                              <SelectItem value="ruby-suite">Ruby Suite (Garden Palm Grove)</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#dc2626]" />
                            Arrival
                          </label>
                          <input
                            type="date"
                            value={formData.checkIn}
                            onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#e2e8f0] text-xs text-[#0f172a] focus:outline-none focus:border-[#dc2626]"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#dc2626]" />
                            Departure
                          </label>
                          <input
                            type="date"
                            value={formData.checkOut}
                            onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#e2e8f0] text-xs text-[#0f172a] focus:outline-none focus:border-[#dc2626]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                          <Users className="w-3 h-3 text-[#dc2626]" />
                          Guests
                        </label>
                        <Select
                          value={formData.guests}
                          onValueChange={(val) => setFormData({ ...formData, guests: val })}
                        >
                          <SelectTrigger className="w-full h-11">
                            <SelectValue placeholder="Number of guests" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Party Size</SelectLabel>
                              <SelectItem value="1">1 Guest</SelectItem>
                              <SelectItem value="2">2 Guests</SelectItem>
                              <SelectItem value="3-4">3 – 4 Guests</SelectItem>
                              <SelectItem value="5-8">5 – 8 Guests</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider mb-1.5">
                          Notes / Transfer Requests
                        </label>
                        <textarea
                          rows={3}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="Dietary requests, kitesurfing inquiries, or airport transfer needs..."
                          className="w-full px-4 py-3 rounded-[10px] bg-white border border-[#e2e8f0] text-sm text-[#0f172a] placeholder-[#64748b]/50 focus:outline-none focus:border-[#dc2626] transition-colors"
                        />
                      </div>

                      <div className="pt-2 space-y-2.5">
                        <button
                          type="submit"
                          className="w-full py-3.5 px-6 rounded-none bg-[#0f172a] text-white hover:bg-black font-mono text-[11px] font-bold tracking-[0.15em] uppercase transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Availability Inquiry &rarr;</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleWhatsApp}
                          className="w-full py-3.5 px-6 rounded-none border border-[#e2e8f0] bg-white text-[#0f172a] hover:bg-[#f1f5f9] font-mono text-[11px] font-bold tracking-[0.14em] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-[#dc2626]" />
                          <span>WhatsApp Concierge Directly</span>
                        </button>
                      </div>

                    </form>
                  ) : (
                    <div className="py-16 text-center space-y-4">
                      <div className="w-14 h-14 rounded-full bg-[#fbe3e3] text-[#dc2626] flex items-center justify-center mx-auto">
                        <Check className="w-7 h-7" />
                      </div>
                      <h4 className="text-2xl font-black text-[#0f172a]">
                        Inquiry Received
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#64748b] leading-relaxed max-w-xs mx-auto">
                        Thank you. Our reservation concierge will confirm availability and transfer options to your email <strong className="text-[#0f172a]">{formData.email}</strong> shortly.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          onClose();
                        }}
                        className="mt-6 mx-auto px-6 py-2.5 bg-[#0f172a] text-white hover:bg-black font-mono text-xs uppercase tracking-wider font-semibold rounded-none cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Fixed Footer */}
              <div className="px-8 sm:px-10 py-4 border-t border-[#e2e8f0] text-[10px] font-mono text-[#64748b] font-semibold flex justify-between shrink-0">
                <span>DOLPHIN BEACH VILLA</span>
                <span>NO AUTOMATED PRICING &middot; BESPOKE CARE</span>
              </div>

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
