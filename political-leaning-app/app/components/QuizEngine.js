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
      // Calculate final raw score and pass up
      const totalScore = Object.values(updatedAnswers).reduce((a, b) => a + b, 0);
      onComplete(totalScore);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-silver font-semibold">
        Initializing Secure Civic Engine...
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Patriotic Gradient Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-silver mb-2 uppercase tracking-wider font-semibold">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>{Math.round(progressPercent)}% Completed</span>
        </div>
        <div className="w-full bg-charcoal h-2.5 rounded-full overflow-hidden border border-slate-700">
          <div
            className="h-full bg-gradient-to-r from-liberty to-vanguard transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card (Frosted Slate Charcoal) */}
      <div className="bg-charcoal/80 backdrop-blur-md border border-slate-700 p-6 md:p-8 rounded-2xl shadow-xl">
        <span className="text-xs uppercase tracking-widest text-liberty font-bold block mb-2">
          {currentQ.category}
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-silver mb-8 leading-snug">
          {currentQ.prompt}
        </h2>

        {/* Selection Options */}
        <div className="space-y-3">
          {currentQ.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(option.score)}
              className="w-full text-left p-4 rounded-xl bg-navy-light/60 border border-slate-700 hover:border-liberty hover:bg-navy-light text-silver transition-all flex items-center justify-between group"
            >
              <span className="font-medium text-sm md:text-base group-hover:text-liberty transition-colors">
                {option.label}
              </span>
              <div className="w-5 h-5 rounded-full border border-slate-500 group-hover:border-liberty group-hover:bg-liberty/25 flex items-center justify-center transition-all">
                <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-liberty transition-all"></div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}