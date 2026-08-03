export default function ResultsPage({ score, onReset }) {
  let tier = "Institutional Center";
  let description = "Pragmatic balancer of institutional stability, individual autonomy, and moderate governance.";

  if (score < 0) {
    tier = "Center-Left Reformist";
    description = "Supports regulated market capitalism balanced with social welfare frameworks and institutional oversight.";
  } else if (score > 0) {
    tier = "Center-Right Pragmatist";
    description = "Champions fiscal responsibility, economic freedom, limited government intervention, and civic tradition.";
  }

  return (
    <div className="max-w-xl w-full mx-auto p-6 md:p-8 bg-charcoal border border-slate-700 rounded-2xl text-center space-y-6 shadow-2xl">
      <div className="space-y-2">
        <span className="text-xs uppercase tracking-widest text-liberty font-bold">Audit Evaluation Complete</span>
        <h1 className="text-3xl font-extrabold text-silver">Your Broad Alignment</h1>
      </div>

      <div className="inline-block bg-liberty/20 text-liberty border border-liberty/40 px-6 py-2 rounded-full text-sm font-extrabold uppercase tracking-wide">
        {tier}
      </div>

      <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">{description}</p>

      {/* Constitutional Gold Upsell Banner */}
      <div className="bg-gradient-to-br from-amber-950/60 to-charcoal border-2 border-gold p-6 rounded-xl text-left space-y-3 relative overflow-hidden shadow-lg">
        <div className="absolute top-0 right-0 bg-gold text-navy-dark text-[10px] font-black uppercase px-3 py-1 rounded-bl-lg tracking-widest">
          Pro Upgrade
        </div>
        <div className="flex items-center space-x-2 text-gold font-bold">
          <span className="text-xl">🔒</span>
          <span>Unlock the 11-Tier Professional Spectrum</span>
        </div>
        <p className="text-xs text-silver leading-relaxed">
          Upgrade to the 50-question deep dive to discover your precise sub-ideology, complete with historical tracking, policy impact analysis, and institutional archetypes.
        </p>
      </div>

      <button
        onClick={onReset}
        className="w-full bg-liberty hover:bg-blue-600 text-silver font-bold py-3.5 rounded-xl transition-all uppercase text-sm tracking-wider shadow-md"
      >
        Retake Free Audit
      </button>
    </div>
  );
}