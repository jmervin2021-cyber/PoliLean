'use client';

import { useState } from 'react';
import QuizEngine from '../components/QuizEngine';
import ResultsPage from '../components/ResultsPage';

export default function Home() {
  const [screen, setScreen] = useState('welcome');
  const [score, setScore] = useState(0);

  return (
    <main className="min-h-screen bg-[#0B132B] flex flex-col justify-between text-[#F8F9FA]">
      <header className="py-4 px-6 border-b border-slate-800 bg-[#070B19]/50 backdrop-blur-md flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-3 h-3 rounded-full bg-[#D90429] shadow-sm"></div>
          <span className="font-extrabold text-xs uppercase tracking-widest text-[#F8F9FA]">CivicSpectrum // Dashboard</span>
        </div>
        <span className="text-[11px] uppercase tracking-wider text-slate-400 hidden sm:inline">Non-Partisan Edition</span>
      </header>

      <div className="flex-grow flex items-center justify-center p-4">
        {screen === 'welcome' && (
          <div className="max-w-xl mx-auto text-center space-y-6 py-8">
            <div className="inline-block p-3 rounded-2xl bg-[#3A86EF]/10 border border-[#3A86EF]/30 text-[#3A86EF] mb-2">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#F8F9FA] tracking-tight leading-tight">
              Discover Where You Stand. <br />
              <span className="text-[#3A86EF]">Understand Where We're Headed.</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              An objective, data-driven educational guide to modern political philosophy and institutional trade-offs.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setScreen('quiz')}
                className="bg-[#3A86EF] hover:bg-blue-600 text-white font-extrabold px-8 py-4 rounded-full shadow-lg transition-all uppercase text-sm tracking-wider cursor-pointer"
              >
                Start Free 15-Question Audit
              </button>
            </div>
          </div>
        )}

        {screen === 'quiz' && (
          <QuizEngine onComplete={(finalScore) => { setScore(finalScore); setScreen('results'); }} />
        )}

        {screen === 'results' && (
          <ResultsPage score={score} onReset={() => setScreen('welcome')} />
        )}
      </div>

      <footer className="py-4 text-center border-t border-slate-800 text-[11px] text-slate-500 uppercase tracking-widest bg-[#070B19]/30">
        Secure Local Processing • Zero Data Retention • Non-Partisan Civic Engine
      </footer>
    </main>
  );
}