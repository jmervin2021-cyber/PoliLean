"use client";

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

  if (loading) return <div className="text-center text-slate-300 py-16">Loading Civic Audit Engine…</div>;

  const currentQ = questions[currentIndex];
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto rounded-[32px] border border-slate-800 bg-slate-950/90 p-8 shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-liberty">Question {currentIndex + 1} of {questions.length}</p>
          <p className="mt-2 text-sm text-slate-400">{currentQ.category}</p>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800 sm:w-72">
          <div className="h-full rounded-full bg-gradient-to-r from-liberty to-vanguard transition-all" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-slate-100 leading-tight">{currentQ.prompt}</h2>
      <div className="mt-8 space-y-4">
        {currentQ.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(opt.score)}
            className="w-full rounded-3xl border border-slate-800 bg-slate-900/95 px-6 py-5 text-left text-base text-slate-100 shadow-sm transition hover:border-liberty hover:bg-slate-800"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
