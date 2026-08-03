// components/QuizEngine.js
'use client';

import { useState } from 'react';

export default function QuizEngine({ onComplete }) {
  const [tier, setTier] = useState(null); // 'free' (7 questions) or 'paid' (50 questions)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  // 7 Free Tier Questions (Broad Baselines)
  const freeQuestions = [
    { id: 1, text: "To what extent should the government regulate private market economic activity?", category: "economics" },
    { id: 2, text: "Should individual liberties take precedence over collective public safety measures?", category: "social" },
    { id: 3, text: "Is a robust social safety net essential for a stable society, or does it disincentivize work?", category: "welfare" },
    { id: 4, text: "How critical is maintaining traditional cultural norms versus rapid progressive reform?", category: "culture" },
    { id: 5, text: "Should national borders be heavily defended with strict controls on immigration?", category: "sovereignty" },
    { id: 6, text: "Do international alliances and global bodies benefit national interests?", category: "foreign_policy" },
    { id: 7, text: "Should taxation scale steeply with higher income brackets to redistribute wealth?", category: "taxation" }
  ];

  // Mocking 50 Paid Tier Questions (Granular Expansion)
  const paidQuestions = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    text: `Comprehensive Policy Audit Item #${i + 1}: Evaluating nuanced legislative tradeoffs in governance, economics, and civil rights.`,
    category: i < 15 ? "economics" : i < 30 ? "social" : i < 40 ? "governance" : "foreign_policy"
  }));

  const activeQuestions = tier === 'paid' ? paidQuestions : freeQuestions;

  const handleSelect = (optionValue) => {
    const updatedAnswers = { ...answers, [currentIndex]: optionValue };
    setAnswers(updatedAnswers);

    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Calculate a mock score/result payload
      onComplete(Object.keys(updatedAnswers).length * 10);
    }
  };

  if (!tier) {
    return (
      <div className="max-w-xl w-full mx-auto text-center space-y-6 py-6">
        <h2 className="text-2xl font-bold text-[#F8F9FA]">Select Your Assessment Tier</h2>
        <p className="text-slate-300 text-sm">Choose between our quick baseline evaluation or the comprehensive deep-dive audit.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Free Tier Card */}
          <div 
            onClick={() => { setTier('free'); setCurrentIndex(0); setAnswers({}); }}
            className="p-6 rounded-2xl bg-[#0B132B]/80 border border-slate-700/80 hover:border-[#3A86EF] transition-all cursor-pointer text-left space-y-3 group shadow-md"
          >
            <span className="text-xs font-semibold text-[#3A86EF] uppercase tracking-wider bg-[#3A86EF]/10 px-2.5 py-1 rounded-md border border-[#3A86EF]/20">
              Quick Scan
            </span>
            <h3 className="text-lg font-bold text-white group-hover:text-[#3A86EF] transition-colors">7 Questions</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Maps your alignment across 5 core political belief systems with a high-level overview.
            </p>
            <div className="pt-2 text-xs font-semibold text-slate-300 flex items-center space-x-1">
              <span>Start Free Assessment</span>
              <span>→</span>
            </div>
          </div>

          {/* Paid Tier Card */}
          <div 
            onClick={() => { setTier('paid'); setCurrentIndex(0); setAnswers({}); }}
            className="p-6 rounded-2xl bg-[#0B132B]/80 border border-[#E9C46A]/40 hover:border-[#E9C46A] transition-all cursor-pointer text-left space-y-3 group shadow-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-[#E9C46A] text-[#070B19] text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-bl-lg">
              Comprehensive
            </div>
            <span className="text-xs font-semibold text-[#E9C46A] uppercase tracking-wider bg-[#E9C46A]/10 px-2.5 py-1 rounded-md border border-[#E9C46A]/20">
              Deep-Dive Audit
            </span>
            <h3 className="text-lg font-bold text-white group-hover:text-[#E9C46A] transition-colors">50 Questions</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Covers 11 belief systems, historical political counterparts, ideology origins, and modern country mappings.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#E9C46A] flex items-center space-x-1">
              <span>Unlock Full Audit</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = activeQuestions[currentIndex];
  const progressPercent = ((currentIndex + 1) / activeQuestions.length) * 100;

  return (
    <div className="max-w-xl w-full mx-auto space-y-6 py-4">
      {/* Progress & Header */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-medium text-slate-400">
          <span>Question {currentIndex + 1} of {activeQuestions.length}</span>
          <span className="capitalize text-[#3A86EF] font-semibold">{tier} Tier</span>
        </div>
        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
          <div className="h-full bg-gradient-to-r from-[#3A86EF] to-[#E9C46A] transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#0B132B]/90 border border-slate-800 shadow-xl space-y-6">
        <h2 className="text-lg md:text-xl font-bold text-[#F8F9FA] leading-snug">
          {currentQ.text}
        </h2>

        <div className="space-y-3">
          {[
            { label: "Strongly Agree", val: 5 },
            { label: "Somewhat Agree", val: 4 },
            { label: "Neutral / Undecided", val: 3 },
            { label: "Somewhat Disagree", val: 2 },
            { label: "Strongly Disagree", val: 1 }
          ].map((choice, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(choice.val)}
              className="w-full text-left px-4 py-3.5 rounded-xl bg-[#1C2541]/60 hover:bg-[#3A86EF]/20 border border-slate-700/60 hover:border-[#3A86EF] text-sm font-medium text-slate-200 transition-all cursor-pointer flex items-center justify-between group"
            >
              <span>{choice.label}</span>
              <span className="w-4 h-4 rounded-full border border-slate-600 group-hover:border-[#3A86EF] group-hover:bg-[#3A86EF] transition-all flex items-center justify-center"></span>
            </button>
          ))}
        </div>
      </div>

      {/* Back option */}
      <div className="flex justify-between items-center text-xs text-slate-400">
        <button 
          onClick={() => setTier(null)} 
          className="hover:text-white transition-colors underline cursor-pointer"
        >
          ← Switch Tier Selection
        </button>
        {currentIndex > 0 && (
          <button 
            onClick={() => setCurrentIndex(currentIndex - 1)} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Previous Question
          </button>
        )}
      </div>
    </div>
  );
}