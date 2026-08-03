export default function ResultsPage({ score, onReset }) {
  // Determine broad tier based on score (-30 to +30 scale)
  let broadTier = "Center";
  let description = "Pragmatic balancer of institutional stability, individual autonomy, and moderate market oversight.";
  let archetypes = "Dwight D. Eisenhower & Margaret Chase Smith";

  if (score <= -15) {
    broadTier = "Left-Wing";
    description = "Advocates for structural economic reform, broad public social safety nets, and systemic equity.";
    archetypes = "Franklin D. Roosevelt & Frances Perkins";
  } else if (score < -5) {
    broadTier = "Center-Left";
    description = "Supports regulated market capitalism balanced with social welfare programs and civil rights protections.";
    archetypes = "Harry S. Truman & Hubert Humphrey";
  } else if (score > 5 && score <= 15) {
    broadTier = "Center-Right";
    description = "Champions fiscal conservatism, free enterprise, limited government intervention, and traditional values.";
    archetypes = "Ronald Reagan & Robert Taft";
  } else if (score > 15) {
    broadTier = "Right-Wing";
    description = "Emphasizes strict national sovereignty, originalist constitutional interpretation, and robust border security.";
    archetypes = "Barry Goldwater & Calvin Coolidge";
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-widest text-liberty font-bold">Audit Complete</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-silver">Your Broad Political Placement</h1>
        <p className="text-slate-400 text-sm md:text-base">Based on your responses to the 15 core philosophical trade-off questions.</p>
      </div>

      {/* Primary Result Card */}
      <div className="bg-charcoal border border-slate-700 p-6 md:p-8 rounded-2xl shadow-xl text-center space-y-4">
        <div className="inline-block bg-liberty/20 text-liberty border border-liberty/40 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
          {broadTier}
        </div>
        <p className="text-lg text-silver max-w-xl mx-auto leading-relaxed">{description}</p>
        <div className="pt-4 border-t border-slate-700 text-xs text-slate-400 uppercase tracking-wider">
          <span className="text-silver font-semibold">Historical Archetypes:</span> {archetypes}
        </div>
      </div>

      {/* Constitutional Gold Upsell Banner */}
      <div className="bg-gradient-to-br from-amber-950/60 to-charcoal border-2 border-gold p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden space-y-4">
        <div className="absolute top-0 right-0 bg-gold text-navy-dark text-xs font-black uppercase px-3 py-1 rounded-bl-xl tracking-widest">
          Pro Unlock Available
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🔒</span>
          <h3 className="text-xl font-bold text-gold">Want your exact sub-ideology?</h3>
        </div>
        <p className="text-silver text-sm md:text-base leading-relaxed">
          Unlock the <strong className="text-gold">50-Question Deep Dive</strong> to discover your precise placement among the <strong className="text-silver">11 Professional Tiers</strong>, complete with full historical tracking, policy impact analysis, and institutional breakdowns.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button className="bg-gold hover:bg-amber-400 text-navy-dark font-extrabold px-6 py-3 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider">
            Upgrade to Professional Spectrum ($4.99)
          </button>
          <button 
            onClick={onReset}
            className="bg-navy-light hover:bg-slate-700 text-silver font-semibold px-6 py-3 rounded-xl transition-all border border-slate-600 text-sm"
          >
            Retake Free Audit
          </button>
        </div>
      </div>
    </div>
  );
}