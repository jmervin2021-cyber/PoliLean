"use client";
import { useState, useEffect } from 'react';

// Define types for TypeScript
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

  if (questions.length === 0) return <div className="text-crispWhite p-10">Loading Secure Audit...</div>;

  const currentQ = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-midnightNavy flex flex-col items-center justify-center p-6">
      <div className="absolute top-6 flex items-center text-xs text-slate-400">
        <span className="mr-2">🔒</span> Zero-Knowledge Enabled: Your data never leaves this device.
      </div>

      <div className="w-full max-w-2xl">
        <div className="w-full bg-slateCharcoal h-2 rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-libertyBlue to-vanguardRed transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="bg-slateCharcoal border border-gray-700 rounded-xl p-8 shadow-2xl">
          <h2 className="text-libertyBlue text-sm font-bold uppercase tracking-widest mb-2">{currentQ.category}</h2>
          <p className="text-crispWhite text-2xl font-semibold mb-8">{currentQ.text}</p>
          
          <div className="space-y-4">
            {currentQ.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left p-5 rounded-lg border border-gray-600 text-crispWhite hover:border-libertyBlue hover:bg-[#1a2238] transition-all duration-200"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
        
        <p className="text-center text-gray-500 mt-6 text-sm">Question {currentIndex + 1} of {questions.length}</p>
      </div>
    </div>
  );
}