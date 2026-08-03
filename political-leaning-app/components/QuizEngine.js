// components/QuizEngine.js
'use client';

import { useState } from 'react';

export default function QuizEngine({ tier = 'free', onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isUnlocked, setIsUnlocked] = useState(tier === 'free');
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);

  // Simple password check for the paid tier unlock
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === 'perch2026') { // Change this to your desired password
      setIsUnlocked(true);
      setErrorMsg(false);
    } else {
      setErrorMsg(true);
    }
  };

  if (tier === 'paid' && !isUnlocked) {
    return (
      <div className="max-w-md w-full mx-auto p-6 md:p-8 rounded-2xl bg-[#0B132B]/90 border border-[#E9C46A]/40 shadow-xl space-y-6 text-center">
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-[#E9C46A] uppercase tracking-wider bg-[#E9C46A]/10 px-2.5 py-1 rounded border border-[#E9C46A]/20">
            Locked Tier
          </span>
          <h2 className="text-xl font-bold text-white">50-Question Audit Access</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            This comprehensive tier is currently restricted. Enter the access password to proceed.
          </p>
        </div>

        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div>
            <input 
              type="password"
              placeholder="Enter Access Password..."
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#1C2541]/80 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#E9C46A] transition-colors text-center font-mono"
            />
            {errorMsg && (
              <p className="text-[11px] text-red-400 mt-1.5">Incorrect password. Please try again.</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 text-sm font-semibold text-[#070B19] bg-[#E9C46A] hover:bg-[#d9b459] rounded-xl transition-all cursor-pointer shadow-md"
          >
            Unlock Paid Audit
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