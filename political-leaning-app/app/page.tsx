'use client';

import { useState } from 'react';
import QuizEngine from '@/components/QuizEngine';
import ResultsPage from '@/components/ResultsPage';

export default function Home() {
  const [selectedTier, setSelectedTier] = useState<'free' | 'paid' | null>(null);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#0B132B] text-[#F8F9FA] flex flex-col justify-between p-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-center items-center">
        {!selectedTier ? (
          <div className="text-center space-y-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F8F9FA] tracking-tight">
              Political Alignment Engine
            </h1>
            <p className="text-slate-300 max-w-lg mx-auto text-sm sm:text-base">
              Discover your precise position on the political spectrum through objective policy trade-off evaluations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-6">
              {/* Free Tier Card */}
              <button
                onClick={() => setSelectedTier('free')}
                className="bg-[#1C2541] border border-slate-700 hover:border-[#3A86EF] p-6 rounded-xl text-left transition-all group"
              >
                <div className="text-xs text-[#3A86EF] font-semibold uppercase tracking-wider mb-1">
                  Basic Audit
                </div>
                <div className="text-xl font-bold text-white mb-2 group-hover:text-[#3A86EF]">
                  10 Questions (Free)
                </div>
                <p className="text-xs text-slate-400">
                  Quick 5-tier political spectrum placement with basic breakdown.
                </p>
              </button>

              {/* Paid Tier Card */}
              <button
                onClick={() => setSelectedTier('paid')}
                className="bg-[#1C2541] border border-[#E9C46A]/40 hover:border-[#E9C46A] p-6 rounded-xl text-left transition-all group relative overflow-hidden"
              >
                <div className="text-xs text-[#E9C46A] font-semibold uppercase tracking-wider mb-1">
                  Pro Analysis
                </div>
                <div className="text-xl font-bold text-white mb-2 group-hover:text-[#E9C46A]">
                  Deep Analysis
                </div>
                <p className="text-xs text-slate-400">
                  Full multi-axis breakdown across 11 granular ideological tiers.
                </p>
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full flex-1 flex flex-col items-center justify-center">
            {quizScore !== null ? (
              <ResultsPage score={quizScore} tier={selectedTier || 'free'} />
            ) : (
              <QuizEngine
                tier={selectedTier}
                onComplete={(score: number) => setQuizScore(score)}
              />
            )}
          </div>
        )}
      </div>

      <footer className="relative z-10 text-center text-[10px] text-slate-400 py-4">
        Political Alignment Engine &copy; 2026
      </footer>
    </main>
  );
}