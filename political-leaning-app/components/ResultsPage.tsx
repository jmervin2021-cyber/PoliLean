"use client";

export default function ResultsPage({ finalScore }: { finalScore: number }) {
  let tierName = "";
  let description = "";

  if (finalScore <= -3) {
    tierName = "The Left-Wing";
    description = "Prioritizes collective action, systemic reform, and strong state intervention to address inequality and social justice.";
  } else if (finalScore === -2 || finalScore === -1) {
    tierName = "The Center-Left";
    description = "Favors pragmatic, incremental reforms, institutional norms, and targeted social safety nets within a market economy.";
  } else if (finalScore === 0) {
    tierName = "The Center (Pragmatic Moderate)";
    description = "Rejects strict dogma. Case-by-case approach combining fiscal caution with social tolerance and bipartisan consensus.";
  } else if (finalScore === 1 || finalScore === 2) {
    tierName = "The Center-Right";
    description = "Prioritizes limited government, free markets, fiscal responsibility, and strict adherence to constitutional precedent.";
  } else if (finalScore >= 3) {
    tierName = "The Right-Wing";
    description = "Emphasizes national sovereignty, strong borders, traditional cultural preservation, and economic protectionism.";
  }

  return (
    <div className="min-h-screen bg-[#0B132B] text-[#F8F9FA] p-6 md:p-12 flex flex-col items-center justify-center relative">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3A86EF]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-3xl z-10">
        
        <div className="text-center mb-10">
          <span className="text-[#3A86EF] font-bold text-xs uppercase tracking-widest bg-[#3A86EF]/10 px-3 py-1 rounded-full border border-[#3A86EF]/30">
            Audit Complete
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-3 tracking-tight">Your Civic Profile</h1>
          <p className="text-gray-400 text-sm mt-1">Derived from objective, non-partisan trade-off metrics.</p>
        </div>

        {/* Free Result Summary Card */}
        <div className="bg-[#2B2D42]/90 backdrop-blur-xl w-full rounded-2xl p-8 md:p-10 border border-gray-700/80 shadow-2xl mb-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3A86EF] via-[#E9C46A] to-[#D90429]"></div>
          
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Broad Spectrum Alignment</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">{tierName}</h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">{description}</p>
        </div>

        {/* The 11-Tier Paid Upgrade Banner */}
        <div className="bg-gradient-to-r from-[#E9C46A] to-amber-700 p-[1px] rounded-2xl shadow-[0_0_40px_rgba(233,196,106,0.12)]">
          <div className="bg-[#0B132B] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3 text-left">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-[#E9C46A] text-lg">🔒</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E9C46A]">Paid Tier Expansion</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Discover Your Precise 11-Tier Sub-Ideology
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Unlock the full 50-question deep dive to pinpoint whether you align closer with a <i>Classical Liberal</i>, a <i>Technocratic Centrist</i>, or a <i>National Conservative</i>, complete with historical tracking.
              </p>
            </div>
            
            <button className="w-full md:w-auto px-8 py-4 bg-[#E9C46A] text-[#0B132B] font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-yellow-400 transition-all shadow-lg shrink-0 cursor-pointer">
              Unlock Pro ($4.99)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}