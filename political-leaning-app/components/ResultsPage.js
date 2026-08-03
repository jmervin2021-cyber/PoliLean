// components/ResultsPage.js
'use client';

export default function ResultsPage({ score, tier = 'free', onReset }) {
  const isPaid = tier === 'paid';

  // Exactly 5 Belief Systems for Free Tier, 11 for Paid Tier
  const getMappedBeliefSystem = () => {
    if (isPaid) {
      // 11 Paid Belief Systems mapping
      if (score >= 220) return { name: "Democratic Socialism", desc: "Emphasizes public or cooperative ownership of major industries, expansive welfare programs, and strong economic democracy." };
      if (score >= 190) return { name: "Modern Liberalism / Progressivism", desc: "Focuses on social justice, regulated market capitalism, civil rights protections, and active government investment in public infrastructure." };
      if (score >= 160) return { name: "Social Democracy", desc: "Balances a capitalist market economy with a comprehensive welfare state and robust labor protections." };
      if (score >= 130) return { name: "Centrism / Pragmatic Reform", desc: "Favors moderate, evidence-based policy solutions that blend market efficiency with practical social safety nets." };
      if (score >= 100) return { name: "Classical Liberalism", desc: "Prioritizes individual liberties, free-market capitalism, private property, and limited government intervention." };
      if (score >= 70) return { name: "Fiscal Conservatism", desc: "Emphasizes balanced budgets, low taxation, minimal regulation, and free-enterprise economic principles." };
      if (score >= 50) return { name: "Traditional Conservatism", desc: "Values cultural continuity, social order, robust national defense, and the preservation of foundational institutions." };
      if (score >= 35) return { name: "Libertarianism", desc: "Champions maximal individual autonomy, voluntary free markets, and minimal state presence in personal and economic life." };
      if (score >= 20) return { name: "Nationalism / Populism", desc: "Focuses on strict national sovereignty, border security, protectionist trade policies, and prioritizing domestic interests." };
      if (score >= 10) return { name: "Christian Democracy", desc: "Grounded in social ethics, subsidiarity, community solidarity, and family-oriented public policy." };
      return { name: "Communitarianism", desc: "Emphasizes that individual rights are balanced by social responsibilities and community-centered civic duty." };
    } else {
      // Exactly 5 Free Tier Belief Systems
      if (score >= 28) return { name: "Progressivism", desc: "Focuses on social equity, regulated markets, and robust government programs to support public welfare." };
      if (score >= 21) return { name: "Centrism", desc: "Emphasizes pragmatic, balanced approaches combining market principles with moderate social support." };
      if (score >= 14) return { name: "Classical Liberalism", desc: "Prioritizes personal freedom, individual choice, and free-market capitalism with limited government." };
      if (score >= 8) return { name: "Conservatism", desc: "Values traditional institutions, fiscal responsibility, social order, and national security." };
      return { name: "Libertarianism", desc: "Champions strict individual autonomy, free markets, and minimal government intervention across all areas." };
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
        <div className="space-y-2 border-b border-slate-800 pb-5">
          <span className="text-[10px] font-mono text-[#3A86EF] uppercase tracking-wider block">Primary Belief System Mapped</span>
          <h3 className="text-xl font-bold text-white">{primaryBelief.name}</h3>
          <p className="text-xs text-slate-300 leading-relaxed pt-1">
            {primaryBelief.desc}
          </p>
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