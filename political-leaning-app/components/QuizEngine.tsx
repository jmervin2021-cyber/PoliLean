"use client";
import { useState, useEffect } from 'react';

type Option = { text: string; value: number };
type Question = { id: number; category: string; text: string; options: Option[] };

export default function QuizEngine({ onComplete }: { onComplete: (score: number) => void }) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch('/api/questions')
      .then(res => res.json())
      .then(data => setQuestions(data.questions));
  }, []);

  const handleAnswer = (value: number) => {
    const newScore = score + value;
    setScore(newScore);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(newScore);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-[#0B132B] flex items-center justify-center text-[#F8F9FA]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#3A86EF] mb-4"></div>
          <p className="text-sm tracking-wider uppercase text-gray-400">Loading Secure Audit...</p>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-[#0B132B] text-[#F8F9FA] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Decorative Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c254115_1px,transparent_1px),linear-gradient(to_bottom,#1c254115_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      {/* Header Info */}
      <div className="absolute top-6 left-6 flex items-center text-xs text-gray-400 font-medium tracking-wide">
        <span className="w-2 h-2 rounded-full bg-[#3A86EF] inline-block mr-2 animate-pulse"></span>
        POLILEAN CIVIC AUDIT
      </div>

      <div className="absolute top-6 right-6 flex items-center text-xs text-gray-400 bg-[#2B2D42]/60 px-3 py-1.5 rounded-full border border-gray-700/50 backdrop-blur-md">
        <span className="mr-2 text-[#E9C46A]">🔒</span> Zero-Knowledge Architecture
      </div>

      <div className="w-full max-w-2xl z-10">
        
        {/* Progress Tracker */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium uppercase tracking-wider">
            <span>Question {currentIndex + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-[#2B2D42] h-1.5 rounded-full overflow-hidden border border-gray-700/40">
            <div 
              className="h-full bg-gradient-to-r from-[#3A86EF] to-[#D90429] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#2B2D42]/90 backdrop-blur-xl border border-gray-700/80 rounded-2xl p-8 md:p-10 shadow-2xl relative">
          <div className="absolute top-0 left-10 transform -translate-y-1/2 bg-[#3A86EF] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
            {currentQ.category}
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-[#F8F9FA] mb-8 mt-2 leading-relaxed">
            {currentQ.text}
          </h2>
          
          <div className="space-y-3.5">
            {currentQ.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left p-4.5 rounded-xl border border-gray-700/60 bg-[#0B132B]/40 text-[#F8F9FA] hover:border-[#3A86EF] hover:bg-[#1a233a] transition-all duration-200 group flex items-start shadow-sm"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-gray-800 text-gray-400 text-xs font-semibold mr-4 group-hover:bg-[#3A86EF] group-hover:text-white transition-colors shrink-0 mt-0.5">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-sm md:text-base leading-normal text-gray-200 group-hover:text-white">
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}