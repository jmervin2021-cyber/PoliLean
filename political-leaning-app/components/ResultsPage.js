// components/ResultsPage.js
'use client';

export default function ResultsPage({ score, tier = 'free', onReset }) {
  const isPaid = tier === 'paid';

  // Determine specific belief system label based on the tier and score
  const getMappedBeliefSystem = () => {
    if (isPaid) {
      if (score >= 200) return "Advanced Liberal Pragmatism / Social Democracy";
      if (score >= 150) return "Classical Liberalism / Constitutional Republic Framework";
      if (score >= 100) return "Centrism & Institutional Reform";
      return "Traditional Conservatism & Market-Led Governance";
    } else {
      // Free tier (7 questions, max 35 pts)
      if (score >= 28) return "Progressive Reformism & Social Welfare Focus";
      if (score >= 21) return "Centrist Pragmatism & Balanced Civic Governance";
      if (score >= 14) return "Classical Liberalism & Market Individualism";
      return "Conservative Realism & Institutional Preservation";
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
          Your ideological coordinates have been processed successfully. Review your alignment profile below.
        </p>
      </div>

      {/* Results Container */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#0B132B]/90 border border-slate-800 shadow-xl space-y-6 text-left">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <span className="text-xs font-mono uppercase text-slate-400">Calculated Alignment Index</span>
          <span className="text-sm font-bold text-[#3A86EF]">{score} pts</span>
        </div>
        
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-[#3A86EF] uppercase tracking-wider block">Primary Belief System Mapped</span>
          <h3 className="text-lg font-bold text-white">{primaryBelief}</h3>
          <p className="text-xs text-slate-400 leading-relaxed pt-1">
            Your responses align directly with this framework, emphasizing balanced governance, individual economic agency, and pragmatic social policies within your selected tier spectrum.
          </p>
        </div>

        {/* Conditional Paid Tier Extra Information */}
        {isPaid ? (
          <div className="space-y-3 pt-2 border-t border-slate-800">
            <span className="text-xs font-mono uppercase text-[#E9C46A] tracking-wider block">Deep-Dive Audit Analysis (11 Systems Mapped)</span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#1C2541]/40 border border-slate-700/50 space-y-1">
                <span className="text-[10px] font-mono text-[#E9C46A] uppercase tracking-wider block">Historical Counterparts</span>
                <p className="text-xs font-semibold text-slate-200">Matched with classic reformers and historical political figures sharing your structural voting profile.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1C2541]/40 border border-slate-700/50 space-y-1">
                <span className="text-[10px] font-mono text-[#3A86EF] uppercase tracking-wider block">Global Country Alignment</span>
                <p className="text-xs font-semibold text-slate-200">Models mirroring current constitutional frameworks globally (e.g., Western European democratic models or North American federalist systems).</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#1C2541]/40 border border-slate-700/50 space-y-1.5">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block">Ideological Origins & Evolution</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Traced from core Enlightenment philosophies through modern structural institutional frameworks emphasizing public contract theory and market mechanics.
              </p>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-[#1C2541]/30 border border-slate-700/40 text-center space-y-2">
            <p className="text-xs text-slate-400">Want explicit historical counterparts, global country mappings, and 11 distinct belief systems?</p>
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