export default function ResultsPage({ score, onReset }) {
  let tier = score < 0 ? "Center-Left Reformist" : score > 0 ? "Center-Right Pragmatist" : "Institutional Center";

  return (
    <div className="max-w-xl mx-auto p-8 bg-charcoal border border-slate-700 rounded-2xl text-center space-y-6 shadow-2xl">
      <span className="text-xs uppercase tracking-widest text-liberty font-bold">Audit Complete</span>
      <h1 className="text-3xl font-extrabold text-silver">Your Broad Placement</h1>
      <div className="inline-block bg-liberty/20 text-liberty border border-liberty/40 px-6 py-2 rounded-full font-bold">
        {tier}
      </div>
      <div className="p-6 bg-gradient-to-br from-amber-950/40 to-charcoal border border-gold rounded-xl space-y-3 text-left">
        <div className="text-gold font-bold flex items-center space-x-2">
          <span>🔒</span>
          <span>Unlock Pro Professional Tiers</span>
        </div>
        <p className="text-xs text-silver leading-relaxed">
          Upgrade to the 50-question deep dive to unlock the granular 11-tier professional spectrum, policy impact analysis, and historical archetypes.
        </p>
      </div>
      <button onClick={onReset} className="w-full bg-liberty hover:bg-blue-600 text-silver font-bold py-3 rounded-xl transition-all uppercase text-sm">
        Retake Audit
      </button>
    </div>
  );
}