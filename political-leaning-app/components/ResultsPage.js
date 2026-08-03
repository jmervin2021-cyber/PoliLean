// components/ResultsPage.js
'client';
'use client';

export default function ResultsPage({ score, tier = 'free', onReset }) {
  const isPaid = tier === 'paid';

  // Max score: Free tier is 35 (7 questions * 5), Paid tier is 250 (50 questions * 5)
  const maxScore = isPaid ? 250 : 35;
  const rawPercentage = (score / maxScore) * 100;
  const alignmentPercentage = Math.min(Math.max(rawPercentage, 5), 95);

  // Corrected logic: Lower scores = Right/Conservative, Higher scores = Left/Progressive
  // (Or vice-versa depending on how you want your question values totaled)
  const getMappedBeliefSystem = () => {
    if (isPaid) {
      if (score >= 180) return { name: "Democratic Socialism / Progressivism", side: "Far Left" };
      if (score >= 140) return { name: "Social Democracy", side: "Center-Left" };
      if (score >= 100) return { name: "Centrism / Pragmatic Reform", side: "Center" };
      if (score >= 60) return { name: "Classical Liberalism / Fiscal Conservatism", side: "Center-Right" };
      return { name: "Traditional Conservatism / Populism", side: "Right" };
    } else {
      // Free Tier (5 distinct options matching the spectrum from Right to Left based on score)
      if (score >= 28) return { name: "Progressivism", side: "Center-Left" };
      if (score >= 22) return { name: "Centrism", side: "Center" };
      if (score >= 16) return { name: "Classical Liberalism", side: "Center-Right" };
      if (score >= 10) return { name: "Conservatism", side: "Right" };
      return { name: "Libertarianism", side: "Right-Libertarian" };
    }
  };

  const primaryBelief = getMappedBeliefSystem();

  return (
    <div className="max-w-xl w-full mx-auto text-center space-y-6 py-6">
      <div className="space-y-3">
        <span className="text-xs font-semibold text-[#E9C46A] uppercase tracking-widest bg-[#E9C46A]/10 border border-[#E9C46A]/30 px-3.5 py-1 rounded-full inline-block">
          {isPaid ? 'Comprehensive 50-Question Audit Complete' : 'Quick 7-Question Scan Complete'}
        </span>
        <h2 className="text-3xl font-extrabold text-[#F8F9FA]">Your Perch Is Set.</h2>
        <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
          Your responses have been evaluated against our ideological framework. Review your matched belief system below.
        </p>
      </div>

      {/* Results Container */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#0B132B]/90 border border-slate-800 shadow-xl space-y-6 text-left">
        
        {/* Physical Spectrum Gauge */}
        <div className="space-y-3 pt-1">
          <div className="flex justify-between items-center text-xs font-mono uppercase text-slate-400">
            <span>Left</span>
            <span className="text-[#3A86EF] font-bold">{primaryBelief.side}</span>
            <span>Right</span>
          </div>

          {/* Visual Track */}
          <div className="relative w-full h-3 bg-slate-900 rounded-full border border-slate-700/60 overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-slate-600 to-red-600 opacity-80"></div>
            {/* Position Marker */}
            <div 
              className="absolute top-0 bottom-0 w-3.5 bg-white rounded-full shadow-md transform -translate-x-1/2 border-2 border-[#0B132B] transition-all duration-700"
              style={{ left: `${alignmentPercentage}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-[10px] text-slate-500 font-mono px-1">
            <span>Progressive / Left</span>
            <span>Center</span>
            <span>Conservative / Right</span>
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-800 pt-5">
          <span className="text-[10px] font-mono text-[#3A86EF] uppercase tracking-wider block">Primary Belief System Mapped</span>
          <h3 className="text-xl font-bold text-white">{primaryBelief.name}</h3>
        </div>

        {/* Conditional Paid Tier Extra Information */}
        {isPaid ? (
          <div className="space-y-4 pt-1">
            <span className="text-xs font-mono uppercase text-[#E9C46A] tracking-wider block">Deep-Dive Audit Insights (11 Systems Mapped)</span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#1C2541]/40 border border-slate-700/50 space-y-1">
                <span className="text-[10px] font-mono text-[#E9C46A] uppercase tracking-wider block">Historical Counterpart</span>
                <p className="text-xs font-semibold text-slate-200">Aligned with classical thinkers and historical political leaders sharing your policy voting profile.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1C2541]/40 border border-slate-700/50 space-y-1">
                <span className="text-[10px] font-mono text-[#3A86EF] uppercase tracking-wider block">Global Country Alignment</span>
                <p className="text-xs font-semibold text-slate-200">Reflects modern democratic governance models and constitutional structures currently active worldwide.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#1C2541]/40 border border-slate-700/50 space-y-1.5">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block">Ideological Origins & Evolution</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Traced from foundational philosophical texts through institutional economic and social transformations.
              </p>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-[#1C2541]/30 border border-slate-700/40 text-center space-y-2">
            <p className="text-xs text-slate-400">Want historical counterparts, global country mappings, and 11 distinct belief systems?</p>
            <button 
              onClick={onReset}
              className="text-xs font-bold text-[#E9C46A] hover:underline cursor-pointer"
            >
              Unlock the 50-Question Paid Tier →
            </button>
          </div>
        )}
      </div>

      <div className="pt-2">
        <button
          onClick={onReset}
          className="px-6 py-3 text-sm font-semibold tracking-wide text-slate-300 bg-[#1C2541] hover:bg-[#1C2541]/80 rounded-xl transition-all cursor-pointer border border-slate-700/60"
        >
          Retake Assessment
        </button>
      </div>
    </div>
  );
}