'center';
'use client';

export default function ResultsPage({ score, tier = 'free', onReset }) {
  const isPaid = tier === 'paid';

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
        
        <div className="space-y-3">
          <h3 className="text-base font-bold text-white">Primary Belief System Mapped</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Your responses map across your selected civic framework, emphasizing balanced governance, individual economic agency, and pragmatic social policies.
          </p>
        </div>

        {/* Conditional Paid Tier Extra Information */}
        {isPaid ? (
          <div className="space-y-3 pt-2 border-t border-slate-800">
            <span className="text-xs font-mono uppercase text-[#E9C46A] tracking-wider block">Deep-Dive Audit Analysis (11 Systems Mapped)</span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#1C2541]/40 border border-slate-700/50 space-y-1">
                <span className="text-[10px] font-mono text-[#E9C46A] uppercase tracking-wider block">Historical Counterparts</span>
                <p className="text-xs font-semibold text-slate-200">Matched with classic reformers and historical political figures.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1C2541]/40 border border-slate-700/50 space-y-1">
                <span className="text-[10px] font-mono text-[#3A86EF] uppercase tracking-wider block">Global Country Alignment</span>
                <p className="text-xs font-semibold text-slate-200">Models mirroring current constitutional frameworks globally.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#1C2541]/40 border border-slate-700/50 space-y-1.5">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block">Ideological Origins & Evolution</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Traced from core Enlightenment philosophies through modern structural institutional frameworks.
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