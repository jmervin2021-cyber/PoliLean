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
    <div className="min-h-screen bg-midnightNavy text-crispWhite p-8 flex flex-col items-center py-20">
      <h1 className="text-4xl font-bold mb-2">Your Civic Profile</h1>
      <p className="text-gray-400 mb-12">Based on your objective audit.</p>

      <div className="bg-slateCharcoal w-full max-w-3xl rounded-xl p-10 border border-gray-700 shadow-2xl mb-10 text-center">
        <h2 className="text-xl text-gray-400 mb-2">Broad Alignment</h2>
        <h3 className="text-5xl font-extrabold text-white mb-6 tracking-tight">{tierName}</h3>
        <p className="text-lg leading-relaxed">{description}</p>
      </div>

      <div className="w-full max-w-3xl bg-gradient-to-br from-constitutionalGold to-yellow-600 p-[2px] rounded-xl shadow-[0_0_30px_rgba(233,196,106,0.15)] cursor-pointer hover:scale-[1.02] transition-transform duration-300">
        <div className="bg-midnightNavy rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3">
            <h4 className="text-constitutionalGold font-bold text-2xl mb-2 flex items-center">
              <span className="mr-3">🔒</span> Unlock Your Exact Sub-Ideology
            </h4>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Are you a Classical Liberal or a National Conservative? Unlock the 50-Question Deep Dive to discover your precise placement on the 11-Tier Professional Spectrum, complete with historical analytics.
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-8 py-4 bg-constitutionalGold text-midnightNavy font-bold rounded-full hover:bg-yellow-400 transition-colors">
            Unlock ($4.99)
          </button>
        </div>
      </div>
    </div>
  );
}