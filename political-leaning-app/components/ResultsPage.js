// components/ResultsPage.js
'use client';

export default function ResultsPage({ score, tier, onReset }) {
  const minScore = -30;
  const maxScore = 30;
  
  const clampedScore = Math.max(minScore, Math.min(maxScore, score));
  const percentage = ((clampedScore - minScore) / (maxScore - minScore)) * 100;

  let ideologyLabel = "Center / Moderate";
  let ideologyColor = "text-amber-300";
  let beliefSystem = "Centrism / Pragmatism";

  if (clampedScore <= -10) {
    ideologyLabel = "Progressive / Left";
    ideologyColor = "text-blue-400";
    beliefSystem = "Democratic Socialism / Modern Progressivism";
  } else if (clampedScore >= 10) {
    ideologyLabel = "Conservative / Right";
    ideologyColor = "text-red-400";
    beliefSystem = "Traditional Conservatism / Constitutionalism";
  } else {
    beliefSystem = "Libertarianism / Classical Liberalism";
  }

  return (
    <div className="max-w-xl w-full mx-auto space-y-6 py-4 px-4 sm:px-0">
      <div className="p-6 md:p-8 rounded-2xl bg-[#0B132B]/95 border border-slate-800 shadow-2xl text-center space-y-6 backdrop-blur-md">
        
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-[#E9C46A] uppercase tracking-widest bg-[#E9C46A]/10 px-3 py-1 rounded-full border border-[#E9C46A]/20">
            {tier === 'paid' ? '50-Question Pro Analysis Complete' : 'Quick 10-Question Scan Complete'}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Your Perch Is Set.</h2>
          <p className="text-xs text-slate-400 leading-relaxed max-w-md mx-auto">
            Your responses have been evaluated against our ideological framework. Review your matched positioning below.
          </p>
        </div>

        {/* Thermometer / Scale Container */}
        <div className="p-5 rounded-2xl bg-[#1C2541]/70 border border-slate-700/60 space-y-4 shadow-inner">
          <div className="flex justify-between text-[11px] font-mono font-semibold tracking-wider px-1">
            <span className="text-blue-400">LEFT</span>
            <span className="text-slate-400">CENTER</span>
            <span className="text-red-400">RIGHT</span>
          </div>

          <div className="relative w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-700 shadow-md">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-slate-700 to-red-600 opacity-80"></div>
            
            <div 
              className="absolute top-0 bottom-0 w-4 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.9)] transition-all duration-500 transform -translate-x-1/2 border-2 border-slate-900"
              style={{ left: `${percentage}%` }}
            ></div>
          </div>

          <div className="flex justify-between items-center text-xs pt-1 px-1">
            <span className="text-slate-400 font-medium">Progressive</span>
            <span className={`font-bold tracking-wide ${ideologyColor}`}>{ideologyLabel}</span>
            <span className="text-slate-400 font-medium">Conservative</span>
          </div>
        </div>

        {/* Primary Belief System Result */}
        <div className="p-5 rounded-2xl bg-[#070B19]/80 border border-slate-800 space-y-3 text-left shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#E9C46A] uppercase tracking-wider">
              Primary Belief System Mapped
            </span>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
              Score: {clampedScore > 0 ? `+${clampedScore}` : clampedScore}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-white tracking-tight">{beliefSystem}</h3>
          
          {tier === 'free' ? (
            <div className="pt-3 border-t border-slate-800/80 space-y-4">
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                You took the quick 10-question scan. Unlock the <strong className="text-[#E9C46A] font-semibold">50-Question Pro Analysis</strong> to map your complete intellectual footprint across 11 distinct sub-ideologies, historical archetypes, and global alignments.
              </p>

              {/* PERSISTENT PRO ADVANTAGE HIGHLIGHT BOX */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#1C2541] to-[#121A33] border border-[#E9C46A]/40 space-y-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">💎</span>
                  <h4 className="text-xs font-bold text-[#E9C46A] uppercase tracking-wider">What You Unlock with Pro Analysis:</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-200 font-mono">
                  <div className="bg-[#0B132B]/80 p-2 rounded border border-slate-700/50 flex items-center space-x-2">
                    <span className="text-[#E9C46A] font-bold">✓</span>
                    <span>50 Granular Policy Items</span>
                  </div>
                  <div className="bg-[#0B132B]/80 p-2 rounded border border-slate-700/50 flex items-center space-x-2">
                    <span className="text-[#E9C46A] font-bold">✓</span>
                    <span>Historical Archetypes Match</span>
                  </div>
                  <div className="bg-[#0B132B]/80 p-2 rounded border border-slate-700/50 flex items-center space-x-2">
                    <span className="text-[#E9C46A] font-bold">✓</span>
                    <span>Global Country Mappings</span>
                  </div>
                  <div className="bg-[#0B132B]/80 p-2 rounded border border-slate-700/50 flex items-center space-x-2">
                    <span className="text-[#E9C46A] font-bold">✓</span>
                    <span>11 Sub-Ideology Breakdowns</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 italic">
                  Gain immediate access by entering your Pro access code on the welcome screen.
                </p>
              </div>
            </div>
          ) : (
            <p className="text-xs text-slate-300 leading-relaxed">
              Comprehensive ideological breakdown based on your weighted economic and social governance selections across 50 deep policy data points.
            </p>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={onReset}
            className="w-full py-3.5 px-4 rounded-xl bg-[#3A86EF] hover:bg-[#3A86EF]/80 text-white font-semibold text-sm transition-all shadow-lg cursor-pointer"
          >
            Retake Assessment
          </button>
        </div>

      </div>
    </div>
  );
}