import { X, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import { CONTENT_CHECKLIST } from '../data/propertyData';

interface ContentChecklistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContentChecklistDrawer: React.FC<ContentChecklistDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const confirmedCount = CONTENT_CHECKLIST.filter(f => f.status === 'CONFIRMED').length;
  const pendingCount = CONTENT_CHECKLIST.length - confirmedCount;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0f172a]/60 backdrop-blur-sm flex justify-end animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Rule 30 Content Verification Matrix"
    >
      <div className="w-full max-w-xl bg-[#fafaf7] text-[#0f172a] h-full shadow-2xl border-l border-[#e2e8f0] p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
        
        {/* Drawer Header */}
        <div className="space-y-5">
          <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-4">
            <div className="flex items-center gap-2 font-sans text-xs font-bold tracking-wider uppercase text-[#dc2626]">
              <ShieldCheck className="w-4 h-4 text-[#dc2626]" />
              <span>Rule 30: Fact Verification Matrix</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-[8px] hover:bg-black/5 text-[#64748b] hover:text-[#0f172a] transition-colors cursor-pointer"
              aria-label="Close verification drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-1.5">
            <span className="w-fit px-2.5 py-0.5 rounded-full text-[0.68rem] font-bold tracking-wider text-[#dc2626] bg-[#fbe3e3] uppercase block">
              Integrity Audit
            </span>
            <h3 className="text-2xl font-black text-[#0f172a]">
              Property Claims &amp; Verification
            </h3>
            <p className="font-sans text-xs text-[#64748b] leading-relaxed">
              In accordance with strict brand integrity rules, every property claim derived from legacy sales records is audited below for new ownership verification.
            </p>
          </div>

          {/* Stats Badges */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-[12px] bg-emerald-50 border border-emerald-200 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <span className="font-mono text-[10px] text-emerald-700 uppercase block font-semibold">Confirmed</span>
                <span className="font-sans text-base font-bold text-emerald-950">{confirmedCount} Claims</span>
              </div>
            </div>

            <div className="p-3.5 rounded-[12px] bg-amber-50 border border-amber-200 flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <div>
                <span className="font-mono text-[10px] text-amber-700 uppercase block font-semibold">Pending</span>
                <span className="font-sans text-base font-bold text-amber-950">{pendingCount} Claims</span>
              </div>
            </div>
          </div>

          {/* Checklist Items */}
          <div className="space-y-3 pt-2">
            {CONTENT_CHECKLIST.map((fact) => (
              <div
                key={fact.id}
                className="p-4 rounded-[12px] bg-white border border-[#e2e8f0] shadow-xs space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs font-bold text-[#0f172a]">
                    {fact.label}
                  </span>
                  <span
                    className={`font-mono text-[9px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      fact.status === 'CONFIRMED'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {fact.status}
                  </span>
                </div>
                <p className="font-sans text-sm text-[#0f172a] font-medium">
                  {fact.value}
                </p>
                <p className="font-sans text-[11px] text-[#64748b] leading-tight pt-1.5 border-t border-[#e2e8f0]">
                  <span className="font-bold text-[#dc2626]">Audit Note:</span> {fact.notes}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-5 border-t border-[#e2e8f0] text-center mt-6">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-[10px] bg-[#0f172a] text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-[#dc2626] transition-colors cursor-pointer"
          >
            Close Audit Drawer
          </button>
        </div>

      </div>
    </div>
  );
};
