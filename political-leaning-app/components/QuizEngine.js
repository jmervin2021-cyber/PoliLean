'use client';

import { useState, useEffect } from 'react';

export default function QuizEngine({ onComplete }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/questions')
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      });
  }, []);

  const handleSelect = (score) => {
    const updatedAnswers = { ...answers, [currentIndex]: score };
    setAnswers(updatedAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const totalScore = Object.values(updatedAnswers).reduce((a, b) => a + b, 0);
      onComplete(totalScore);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh] text-[#F8F9FA] font-semibold tracking-wider">
        Initializing Civic Dashboard...
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-xl w-full mx-auto p-6 md:p-8 bg-[#2B2D42]/80 backdrop-blur-md border border-slate-700 rounded-2xl shadow-2xl">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs uppercase tracking-widest text-[#3A86EF] font-extrabold">
          {currentQ.category}
        </span>
        <span className="text-xs text-slate-400 font-medium">
          Question {currentIndex + 1} of {questions.length}
        </span>
      </div>

      <div className="w-full bg-[#1C2541] h-2 rounded-full mb-8 overflow-hidden border border-slate-700">
        <div
          className="h-full bg-gradient-to-r from-[#3A86EF] to-[#D90429] transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-[#F8F9FA] mb-8 leading-snug">
        {currentQ.prompt}
      </h2>

      <div className="space-y-3">
        {currentQ.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(opt.score)}
            className="w-full text-left p-4 rounded-xl bg-[#1C2541]/60 border border-slate-700 hover:border-[#3A86EF] hover:bg-[#1C2541] text-[#F8F9FA] transition-all flex items-center justify-between group shadow-sm cursor-pointer"
          >
            <span className="font-medium text-sm md:text-base group-hover:text-[#3A86EF] transition-colors">
              {opt.label}
            </span>
            <div className="w-5 h-5 rounded-full border border-slate-500 group-hover:border-[#3A86EF] group-hover:bg-[#3A86EF]/25 flex items-center justify-center transition-all shrink-0 ml-3">
              <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-[#3A86EF] transition-all"></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}