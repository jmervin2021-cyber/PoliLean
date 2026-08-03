// components/ResultsPage.js
'use client';

export default function ResultsPage({ score, onReset, tier }) {
  return (
    <div className="max-w-xl w-full mx-auto text-center space-y-6 py-6">
      <div className="space-y-3">
        <span className="text-xs font-semibold text-[#E9C46A] uppercase tracking-widest bg-[#E9C46A]/10 border border-[#E9C46A]/30 px-3.5 py-1 rounded-full inline-block">
          Assessment Complete
        </span>
        <h2 className="text-3xl font-extrabold text-[#F8F9FA]">Your Perch Is Set.</h2>
        <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
          Your ideological coordinates have been processed successfully. Review your comprehensive alignment profile below.
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
            Your responses align most closely with structured civic frameworks emphasizing balanced governance, individual economic agency, and pragmatic social policies across your selected spectrum.
          </p>
        </div>

        {/* Deep-Dive Audit Insights Grid (Paid Tier Features) */}
        <div className="space-y-3 pt-2 border-t border-slate-800">
          <span className="text-xs font-mono uppercase text-[#E9C46A] tracking-wider block">Comprehensive Ideological Breakdown</span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-[#1C2541]/40 border border-slate-700/50 space-y-1">
              <span className="text-[10px] font-mono text-[#E9C46A] uppercase tracking-wider block">Historical Counterpart</span>
              <p className="text-xs font-semibold text-slate-200">Pragmatic Reformers & Classical Thinkers</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#1C2541]/40 border border-slate-700/50 space-y-1">
              <span className="text-[10px] font-mono text-[#3A86EF] uppercase tracking-wider block">Global Alignment</span>
              <p className="text-xs font-semibold text-slate-200">Constitutional Representative Democracies</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#1C2541]/40 border border-slate-700/50 space-y-1.5">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block">Ideological Origins & Evolution</span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Rooted in 18th-to-19th-century Enlightenment principles balancing personal autonomy with institutional rule of law.
            </p>
          </div>
        </div>
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