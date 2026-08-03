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

  if (loading) return <div className="text-center text-silver py-12">Loading Civic Audit Engine...</div>;

  const currentQ = questions[currentIndex];
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-xl mx-auto p-6 bg-charcoal/80 border border-slate-700 rounded-2xl shadow-xl">
      <div className="mb-4 text-xs font-bold text-liberty uppercase tracking-wider">
        Question {currentIndex + 1} of {questions.length}
      </div>
      <div className="w-full bg-navy-light h-2 rounded-full mb-6">
        <div className="h-full bg-gradient-to-r from-liberty to-vanguard rounded-full transition-all" style={{ width: `${progressPercent}%` }}></div>
      </div>
      <h2 className="text-xl font-bold text-silver mb-6">{currentQ.prompt}</h2>
      <div className="space-y-3">
        {currentQ.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(opt.score)}
            className="w-full text-left p-4 rounded-xl bg-navy-light/50 border border-slate-700 hover:border-liberty hover:bg-navy-light text-silver transition-all"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}