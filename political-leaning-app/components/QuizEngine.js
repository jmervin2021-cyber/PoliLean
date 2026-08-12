// components/QuizEngine.js
'use client';

import { useState } from 'react';

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export default function QuizEngine({ tier = 'free', onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState({ economic: 0, social: 0 });
  const [isUnlocked, setIsUnlocked] = useState(tier === 'free');
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);
  const [shuffledOptionsCache, setShuffledOptionsCache] = useState({});

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === 'perch2026') {
      setIsUnlocked(true);
      setErrorMsg(false);
    } else {
      setErrorMsg(true);
    }
  };

  if (tier === 'paid' && !isUnlocked) {
    return (
      <div className="max-w-md w-full mx-auto p-6 md:p-8 rounded-2xl bg-[#0B132B]/95 border border-[#E9C46A]/40 shadow-2xl space-y-6 text-center backdrop-blur-md">
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-[#E9C46A] uppercase tracking-wider bg-[#E9C46A]/10 px-2.5 py-1 rounded border border-[#E9C46A]/20">
            Restricted Tier
          </span>
          <h2 className="text-xl font-bold text-white">50-Question Pro Analysis Access</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Unlock deep political science mapping. Enter your Pro access password below.
          </p>
        </div>

        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div>
            <input 
              type="password"
              placeholder="Enter Pro Password..."
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#1C2541]/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#E9C46A] transition-colors text-center font-mono shadow-inner"
            />
            {errorMsg && (
              <p className="text-[11px] text-red-400 mt-1.5 font-medium">Incorrect password. Please try again.</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 text-sm font-semibold text-[#070B19] bg-[#E9C46A] hover:bg-[#d9b459] rounded-xl transition-all cursor-pointer shadow-md"
          >
            Unlock Pro Analysis
          </button>
        </form>

        <div className="pt-2">
          <button 
            onClick={() => window.location.reload()} 
            className="text-xs text-slate-400 hover:text-white transition-colors underline cursor-pointer"
          >
            ← Back to Welcome Screen
          </button>
        </div>
      </div>
    );
  }

  const freeQuestions = [
    { 
      id: 1, 
      category: "economic",
      text: "When addressing major corporate monopolies or soaring market prices, what is the best strategy?", 
      options: [
        { label: "Aggressive state price controls and mandatory corporate breakups.", weight: -3 },
        { label: "Targeted antitrust oversight to prevent outright consumer fraud.", weight: -1 },
        { label: "Light regulatory monitoring to ensure basic contract enforcement.", weight: 1 },
        { label: "Total free-market deregulation allowing market forces to self-correct.", weight: 3 }
      ]
    },
    { 
      id: 2, 
      category: "social",
      text: "What principle should primarily guide national security and border immigration policy?", 
      options: [
        { label: "Prioritizing open humanitarian access and global integration.", weight: -3 },
        { label: "Structured legal pathways paired with orderly checkpoints.", weight: -1 },
        { label: "Enforced compliance quotas and managed legal entry limits.", weight: 1 },
        { label: "Strict physical barriers, absolute sovereignty, and rigorous vetting.", weight: 3 }
      ]
    },
    { 
      id: 3, 
      category: "economic",
      text: "How should government handle economic safety nets and social welfare assistance?", 
      options: [
        { label: "Massive expansion of public entitlements funded by progressive wealth levies.", weight: -3 },
        { label: "Mainstream social safety cushions targeted strictly at extreme hardship.", weight: -1 },
        { label: "Encouraging private charitable foundations over state-run programs.", weight: 1 },
        { label: "Minimizing state welfare entirely to maximize personal self-reliance.", weight: 3 }
      ]
    },
    { 
      id: 4, 
      category: "social",
      text: "Regarding personal liberties versus public mandates during public crises:", 
      options: [
        { label: "Collective public safety mandates must supersede individual autonomy.", weight: -3 },
        { label: "Flexible community guidelines balanced with advisory personal choice.", weight: -1 },
        { label: "Strong preference for individual choice with minimal state enforcement.", weight: 1 },
        { label: "Absolute individual freedom and bodily autonomy immune to state mandates.", weight: 3 }
      ]
    },
    { 
      id: 5, 
      category: "economic",
      text: "What is your preferred philosophy on corporate and individual taxation structures?", 
      options: [
        { label: "Steep progressive brackets on high net-worth earners to redistribute capital.", weight: -3 },
        { label: "Moderate progressive scaling to sustain essential public infrastructure.", weight: -1 },
        { label: "Flat proportional tax rates ensuring equal baseline contributions.", weight: 1 },
        { label: "Flat low taxes or consumption models limited strictly to baseline government.", weight: 3 }
      ]
    },
    { 
      id: 6, 
      category: "social",
      text: "How should a society navigate traditional cultural institutions versus modern social change?", 
      options: [
        { label: "Actively dismantle legacy institutional structures to drive rapid equity reforms.", weight: -3 },
        { label: "Allow cultural shifts to evolve organically through open public discourse.", weight: -1 },
        { label: "Maintain traditional community standards while permitting modern adaptations.", weight: 1 },
        { label: "Fiercely protect and preserve foundational heritage and historical continuity.", weight: 3 }
      ]
    },
    { 
      id: 7, 
      category: "economic",
      text: "What role should national trade policy play in domestic manufacturing and supply chains?", 
      options: [
        { label: "Deep global integration focused on international climate and labor pacts.", weight: -3 },
        { label: "Pragmatic trade agreements protecting key sectors without closing markets.", weight: -1 },
        { label: "Strategic trade reciprocity encouraging domestic business competitiveness.", weight: 1 },
        { label: "Strong protectionist tariffs guaranteeing total national industrial self-reliance.", weight: 3 }
      ]
    },
    { 
      id: 8, 
      category: "social",
      text: "How should public education systems handle curricula and ideological instruction?", 
      options: [
        { label: "Mandating social justice, equity tracking, and progressive civic frameworks.", weight: -3 },
        { label: "Balanced multi-perspective instruction managed by state boards.", weight: -1 },
        { label: "Emphasis on core foundational academics and traditional American history.", weight: 1 },
        { label: "Complete parental control, school choice vouchers, and decentralized curricula.", weight: 3 }
      ]
    },
    { 
      id: 9, 
      category: "economic",
      text: "What approach should be taken toward environmental protection and energy generation?", 
      options: [
        { label: "Immediate state-mandated transition away from fossil fuels via heavy green subsidies.", weight: -3 },
        { label: "Gradual market-incentivized shifts toward sustainable energy sources.", weight: -1 },
        { label: "Technological innovation fostered through market competition rather than mandates.", weight: 1 },
        { label: "Prioritizing cheap domestic energy independence using all available fuel sources.", weight: 3 }
      ]
    },
    { 
      id: 10, 
      category: "social",
      text: "What is your view on the scope and size of federal government power relative to local states?", 
      options: [
        { label: "Centralized federal authority is essential to guarantee uniform national rights and standards.", weight: -3 },
        { label: "Federal standards with generous room for regional regulatory execution.", weight: -1 },
        { label: "Strict adherence to states' rights with minimal federal overreach.", weight: 1 },
        { label: "Radical decentralization, prioritizing local municipal or individual sovereignty.", weight: 3 }
      ]
    }
  ];

  const paidQuestions = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    category: i % 2 === 0 ? "economic" : "social",
    text: `Comprehensive Policy Analysis Item #${i + 1}: Granular evaluation of institutional trade-offs across governance and civil structure.`,
    options: [
      { label: "Option A: State-directed coordination and equity redistribution.", weight: -3 },
      { label: "Option B: Pragmatic institutional compromise and moderation.", weight: -1 },
      { label: "Option C: Free-market primacy and institutional tradition.", weight: 1 },
      { label: "Option D: Strict individual autonomy and free-market absolutism.", weight: 3 }
    ]
  }));

  const activeQuestions = tier === 'paid' ? paidQuestions : freeQuestions;

  if (!shuffledOptionsCache[currentIndex]) {
    setShuffledOptionsCache({
      ...shuffledOptionsCache,
      [currentIndex]: shuffleArray(activeQuestions[currentIndex].options)
    });
  }

  const currentOptions = shuffledOptionsCache[currentIndex] || activeQuestions[currentIndex].options;

  const handleSelect = (weight, category) => {
    const updatedScores = {
      ...scores,
      [category]: scores[category] + weight
    };
    setScores(updatedScores);

    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const totalScore = updatedScores.economic + updatedScores.social;
      onComplete(totalScore);
    }
  };

  const currentQ = activeQuestions[currentIndex];
  const progressPercent = ((currentIndex + 1) / activeQuestions.length) * 100;

  return (
    <div className="max-w-xl w-full mx-auto space-y-6 py-4 px-4 sm:px-0">
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-medium text-slate-300 px-1">
          <span>Question {currentIndex + 1} of {activeQuestions.length}</span>
          <span className="capitalize text-[#3A86EF] font-semibold">{tier} Tier Analysis</span>
        </div>
        <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50">
          <div className="h-full bg-gradient-to-r from-[#3A86EF] to-[#E9C46A] transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      <div className="p-6 md:p-8 rounded-2xl bg-[#0B132B]/95 border border-slate-800 shadow-2xl space-y-6 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-[#E9C46A] uppercase tracking-wider bg-[#E9C46A]/10 px-3 py-1 rounded-md border border-[#E9C46A]/20">
            {currentQ.category} Dimension
          </span>
          <span className="text-xs font-mono text-slate-400">
            {Math.round(progressPercent)}% Complete
          </span>
        </div>
        
        <h2 className="text-lg md:text-xl font-bold text-[#F8F9FA] leading-relaxed">
          {currentQ.text}
        </h2>

        <div className="space-y-3 pt-1">
          {currentOptions.map((choice, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(choice.weight, currentQ.category)}
              className="w-full text-left p-4 rounded-xl bg-[#1C2541]/70 hover:bg-[#3A86EF]/20 border border-slate-700/70 hover:border-[#3A86EF] text-sm font-medium text-slate-200 transition-all cursor-pointer flex items-center justify-between group shadow-sm"
            >
              <span className="pr-4 leading-normal text-slate-100">{choice.label}</span>
              <span className="w-5 h-5 rounded-full border-2 border-slate-500 group-hover:border-[#3A86EF] group-hover:bg-[#3A86EF] transition-all flex-shrink-0 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-white transition-all"></span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-slate-400 px-1">
        <button 
          onClick={() => window.location.reload()} 
          className="hover:text-white transition-colors underline cursor-pointer"
        >
          ← Return to Welcome
        </button>
        {currentIndex > 0 && (
          <button 
            onClick={() => setCurrentIndex(currentIndex - 1)} 
            className="hover:text-white transition-colors cursor-pointer bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/50"
          >
            Previous Question
          </button>
        )}
      </div>
    </div>
  );
}