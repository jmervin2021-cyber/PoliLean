'use client';

import { useState } from 'react';

export default function QuizEngine({ tier = 'free', onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  // 7 Free Tier Questions (Covers 5 core belief systems)
  const freeQuestions = [
    { id: 1, text: "To what extent should the government regulate private market economic activity?" },
    { id: 2, text: "Should individual liberties take precedence over collective public safety measures?" },
    { id: 3, text: "Is a robust social safety net essential for a stable society, or does it disincentivize work?" },
    { id: 4, text: "How critical is maintaining traditional cultural norms versus rapid progressive reform?" },
    { id: 5, text: "Should national borders be heavily defended with strict controls on immigration?" },
    { id: 6, text: "Do international alliances and global bodies benefit national interests?" },
    { id: 7, text: "Should taxation scale steeply with higher income brackets to redistribute wealth?" }
  ];

  // 50 Paid Tier Questions (Covers 11 belief systems & deep analysis)
  const paidQuestions = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    text: `Comprehensive Policy Audit Item #${i + 1}: Evaluating nuanced legislative trade-offs across governance, economics, and civil rights.`
  }));

  const activeQuestions = tier === 'paid' ? paidQuestions : freeQuestions;

  const handleSelect = (optionValue) => {
    const updatedAnswers = { ...answers, [currentIndex]: optionValue };
    setAnswers(updatedAnswers);

    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(Object.keys(updatedAnswers).length * (tier === 'paid' ? 2 : 10));
    }
  };

  const currentQ = activeQuestions[currentIndex];
  const progressPercent = ((currentIndex + 1) / activeQuestions.length) * 100;

  return (
    <div className="max-w-xl w-full mx-auto space-y-6 py-4">
      {/* Progress & Header */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-medium text-slate-400">
          <span>Question {currentIndex + 1} of {activeQuestions.length}</span>
          <span className="capitalize text-[#3A86EF] font-semibold">{tier} Tier Audit</span>
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

      {/* Navigation Controls */}
      <div className="flex justify-between items-center text-xs text-slate-400">
        <button 
          onClick={() => window.location.reload()} 
          className="hover:text-white transition-colors underline cursor-pointer"
        >
          ← Return to Welcome
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